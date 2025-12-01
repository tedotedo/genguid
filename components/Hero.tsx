
import React, { useState } from 'react';
import { ArrowRight, Activity, HeartHandshake, Lightbulb, PlayCircle } from 'lucide-react';
import { VideoModal } from './VideoModal';

interface HeroProps {
  onStart: () => void;
}

export const Hero: React.FC<HeroProps> = ({ onStart }) => {
  const [showVideo, setShowVideo] = useState(false);

  return (
    <>
      <div className="relative overflow-hidden bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="relative z-10 pb-8 bg-white sm:pb-16 md:pb-20 lg:max-w-2xl lg:w-full lg:pb-28 xl:pb-32">
            <main className="mt-10 mx-auto max-w-7xl px-4 sm:mt-12 sm:px-6 md:mt-16 lg:mt-20 lg:px-8 xl:mt-28">
              <div className="sm:text-center lg:text-left">
                <span className="inline-block px-3 py-1 mb-4 text-xs font-semibold tracking-wider text-teal-600 uppercase bg-teal-50 rounded-full">
                  NHS Genomic Medicine Service Aligned (Not Sponsored)
                </span>
                <h1 className="text-4xl tracking-tight font-extrabold text-slate-900 sm:text-5xl md:text-6xl">
                  <span className="block xl:inline">Understanding genetics</span>{' '}
                  <span className="block text-teal-600 xl:inline">and autism.</span>
                </h1>
                <p className="mt-3 text-base text-slate-500 sm:mt-5 sm:text-lg sm:max-w-xl sm:mx-auto md:mt-5 md:text-xl lg:mx-0">
                  A clear, supportive guide for UK families navigating the genetic testing pathway. Learn about the science, the process, and what results might mean for your child.
                </p>
                <div className="mt-5 sm:mt-8 flex flex-col sm:flex-row sm:justify-center lg:justify-start gap-3">
                  <div className="rounded-md shadow">
                    <button
                      onClick={onStart}
                      className="w-full flex items-center justify-center px-8 py-3 border border-transparent text-base font-medium rounded-md text-white bg-teal-600 hover:bg-teal-700 md:py-4 md:text-lg transition-all"
                    >
                      Start Pathway Guide
                      <ArrowRight className="ml-2 h-5 w-5" />
                    </button>
                  </div>
                  <div>
                    <button
                      onClick={() => setShowVideo(true)}
                      className="w-full flex items-center justify-center px-8 py-3 border border-slate-200 text-base font-medium rounded-md text-slate-700 bg-white hover:bg-slate-50 hover:text-teal-700 md:py-4 md:text-lg transition-all"
                    >
                      <PlayCircle className="mr-2 h-5 w-5 text-red-500" />
                      Watch Intro
                    </button>
                  </div>
                </div>
                {/* Secondary 'Why Test' link moved below or accessible via scroll */}
                <div className="mt-4 sm:hidden text-center">
                    <button 
                        onClick={() => {
                            const el = document.getElementById('why-test');
                            el?.scrollIntoView({ behavior: 'smooth' });
                        }}
                        className="text-sm text-teal-600 font-medium hover:underline"
                    >
                        Why should I consider testing?
                    </button>
                </div>
              </div>
            </main>
          </div>
        </div>
        <div className="lg:absolute lg:inset-y-0 lg:right-0 lg:w-1/2 bg-slate-100 flex items-center justify-center">
          <div className="grid grid-cols-2 gap-4 p-8 opacity-60">
               <div className="h-40 w-40 bg-teal-200 rounded-3xl animate-pulse"></div>
               <div className="h-40 w-40 bg-blue-200 rounded-full"></div>
               <div className="h-40 w-40 bg-indigo-200 rounded-full"></div>
               <div className="h-40 w-40 bg-teal-100 rounded-3xl"></div>
          </div>
        </div>
      </div>
      
      {/* Video Modal Component */}
      <VideoModal 
        isOpen={showVideo} 
        onClose={() => setShowVideo(false)} 
        videoId="DwkCoUuaOzA" 
      />
      
      {/* Features Grid */}
      <div className="bg-slate-50 py-12 border-t border-slate-200" id="why-test">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 gap-8 md:grid-cols-3">
            <div className="flex flex-col items-center text-center p-6 bg-white rounded-xl shadow-sm border border-slate-100">
              <div className="p-3 bg-amber-50 rounded-full mb-4">
                <Lightbulb className="h-8 w-8 text-amber-600" />
              </div>
              <h3 className="text-lg font-semibold text-slate-900">Finding Answers</h3>
              <p className="mt-2 text-slate-600">Provides a biological explanation for your child's autism, helping to end uncertainty and relieve parental guilt.</p>
            </div>
            <div className="flex flex-col items-center text-center p-6 bg-white rounded-xl shadow-sm border border-slate-100">
              <div className="p-3 bg-teal-50 rounded-full mb-4">
                <Activity className="h-8 w-8 text-teal-600" />
              </div>
              <h3 className="text-lg font-semibold text-slate-900">Health Insights</h3>
              <p className="mt-2 text-slate-600">Understand potential co-occurring conditions like epilepsy or metabolic issues that might need treatment.</p>
            </div>
            <div className="flex flex-col items-center text-center p-6 bg-white rounded-xl shadow-sm border border-slate-100">
              <div className="p-3 bg-indigo-50 rounded-full mb-4">
                <HeartHandshake className="h-8 w-8 text-indigo-600" />
              </div>
              <h3 className="text-lg font-semibold text-slate-900">Future Planning</h3>
              <p className="mt-2 text-slate-600">Information to help with family planning decisions and accessing specific support groups for rare conditions.</p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
