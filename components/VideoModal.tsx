
import React, { useEffect, useRef } from 'react';
import { X } from 'lucide-react';

// Add TypeScript definition for the YouTube API attached to the window
declare global {
  interface Window {
    YT: any;
    onYouTubeIframeAPIReady: () => void;
  }
}

interface VideoModalProps {
  isOpen: boolean;
  onClose: () => void;
  videoId: string;
}

export const VideoModal: React.FC<VideoModalProps> = ({ isOpen, onClose, videoId }) => {
  const playerRef = useRef<any>(null);
  const containerRef = useRef<HTMLDivElement>(null);

  // Close on Escape key press
  useEffect(() => {
    const handleEsc = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose();
    };
    window.addEventListener('keydown', handleEsc);
    return () => window.removeEventListener('keydown', handleEsc);
  }, [onClose]);

  // Load YouTube API and Initialize Player
  useEffect(() => {
    if (!isOpen) return;

    const loadPlayer = () => {
      // If the API is already loaded, init immediately
      if (window.YT && window.YT.Player) {
        initPlayer();
        return;
      }

      // Otherwise, load the script
      const tag = document.createElement('script');
      tag.src = "https://www.youtube.com/iframe_api";
      const firstScriptTag = document.getElementsByTagName('script')[0];
      firstScriptTag.parentNode?.insertBefore(tag, firstScriptTag);

      // Define the callback for when API is ready
      window.onYouTubeIframeAPIReady = () => {
        initPlayer();
      };
    };

    const initPlayer = () => {
      // Prevent duplicate initialization
      if (playerRef.current) return;

      // The ID 'youtube-player' corresponds to the div below
      playerRef.current = new window.YT.Player('youtube-player', {
        height: '100%',
        width: '100%',
        videoId: videoId,
        playerVars: {
          'autoplay': 1,
          'modestbranding': 1,
          'rel': 0, // Suggests avoiding related videos, though YT changed this recently
          'playsinline': 1
        },
        events: {
          'onStateChange': onPlayerStateChange
        }
      });
    };

    const onPlayerStateChange = (event: any) => {
      // 0 = YT.PlayerState.ENDED
      if (event.data === 0) {
        onClose(); // Close the modal immediately when video ends
      }
    };

    // Small timeout to ensure DOM is rendered before YT tries to attach
    const timer = setTimeout(() => {
        loadPlayer();
    }, 100);

    return () => {
      clearTimeout(timer);
      if (playerRef.current) {
        playerRef.current.destroy();
        playerRef.current = null;
      }
    };
  }, [isOpen, videoId, onClose]);

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-[100] flex items-center justify-center p-4 sm:p-6">
      {/* Backdrop */}
      <div 
        className="absolute inset-0 bg-slate-900/90 backdrop-blur-sm transition-opacity" 
        onClick={onClose}
        aria-hidden="true"
      />

      {/* Modal Container */}
      <div 
        className="relative w-full max-w-4xl bg-black rounded-2xl shadow-2xl overflow-hidden animate-fade-in"
        role="dialog"
        aria-modal="true"
        ref={containerRef}
      >
        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute top-4 right-4 z-10 p-2 bg-black/50 hover:bg-black/70 rounded-full text-white transition-colors"
          aria-label="Close video"
        >
          <X className="h-6 w-6" />
        </button>

        {/* Video Wrapper (16:9 Aspect Ratio) */}
        <div className="relative pt-[56.25%] bg-black">
          {/* The YouTube API replaces this div with the actual iframe */}
          <div id="youtube-player" className="absolute top-0 left-0 w-full h-full"></div>
        </div>
      </div>
    </div>
  );
};
