
import React, { useState } from 'react';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { ChatAssistant } from './components/ChatAssistant';
import { PathwayWizard } from './components/PathwayWizard';
import { StatsSection } from './components/StatsSection';
import { InfoSection } from './components/InfoSection';
import { ConsentModal } from './components/ConsentModal';
import { QuizSection } from './components/QuizSection';
import { About } from './components/about';

const App: React.FC = () => {
  const [activeTab, setActiveTab] = useState<string>('home');
  const [hasConsented, setHasConsented] = useState<boolean>(() => {
    // Check local storage on initial load to see if user has already consented
    if (typeof window !== 'undefined') {
      return localStorage.getItem('neurogen_consent') === 'true';
    }
    return false;
  });

  const handleConsent = () => {
    localStorage.setItem('neurogen_consent', 'true');
    setHasConsented(true);
  };

  const renderContent = () => {
    switch (activeTab) {
      case 'home':
        return (
          <>
            <Hero onStart={() => setActiveTab('pathway')} />
            <StatsSection />
            <InfoSection />
          </>
        );
      case 'learn':
        return <InfoSection />;
      case 'pathway':
        return <PathwayWizard />;
      case 'quiz':
        return <QuizSection />;
      case 'about':
        return <About />;
      case 'assistant':
        return (
          <div className="py-12 px-4 bg-slate-50 min-h-screen">
            <div className="text-center mb-8">
               <h1 className="text-3xl font-bold text-slate-900">Ask Genie</h1>
               <p className="text-slate-600 mt-2">Your guide to understanding genetic terms and processes.</p>
            </div>
            <ChatAssistant />
          </div>
        );
      default:
        return <Hero onStart={() => setActiveTab('pathway')} />;
    }
  };

  return (
    <div className="min-h-screen bg-slate-50 font-sans text-slate-900">
      {!hasConsented && <ConsentModal onConsent={handleConsent} />}
      
      {/* 
        We wrap the main app content. 
        If consent hasn't been given, we blur the background and prevent interaction 
        so the user is forced to interact with the modal.
      */}
      <div className={!hasConsented ? 'h-screen overflow-hidden filter blur-sm pointer-events-none' : ''}>
        <Navbar activeTab={activeTab} setActiveTab={setActiveTab} />
        
        <main>
          {renderContent()}
        </main>

        <footer className="bg-slate-900 text-slate-400 py-12 mt-12">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 grid grid-cols-1 md:grid-cols-3 gap-8">
            <div>
              <h3 className="text-white text-lg font-bold mb-4">Understanding the genetics of autism</h3>
              <p className="text-sm mb-4">
                Helping families navigate the complex world of genetics and autism with clarity and compassion.
              </p>
              <p className="text-xs text-slate-500 border-t border-slate-800 pt-4">
                Content aligned with NHS Genomic Medicine Service guidelines and NICE clinical pathways.
              </p>
            </div>
            <div>
              <h4 className="text-white font-semibold mb-4">Resources</h4>
              <ul className="space-y-2 text-sm">
                <li><a href="https://www.practical-autism-research.co.uk" className="text-teal-400 hover:text-teal-300 transition-colors font-medium">← Back to Practical Autism Research Home</a></li>
                <li><a href="https://www.nhs.uk/conditions/autism/" target="_blank" rel="noopener noreferrer" className="hover:text-white transition-colors">NHS Autism Guide</a></li>
                <li><a href="https://www.genomicseducation.hee.nhs.uk/" target="_blank" rel="noopener noreferrer" className="hover:text-white transition-colors">NHS Genomics Education</a></li>
                <li><a href="https://geneticalliance.org.uk/" target="_blank" rel="noopener noreferrer" className="hover:text-white transition-colors">Genetic Alliance UK</a></li>
                <li><a href="https://www.rarechromo.org/" target="_blank" rel="noopener noreferrer" className="hover:text-white transition-colors">Unique (Rare Chromosome Support)</a></li>
                <li><a href="https://www.autism.org.uk/" target="_blank" rel="noopener noreferrer" className="hover:text-white transition-colors">National Autistic Society</a></li>
                <li><a href="https://www.undiagnosed.org.uk/" target="_blank" rel="noopener noreferrer" className="hover:text-white transition-colors">SWAN UK</a></li>
              </ul>
            </div>
            <div>
              <h4 className="text-white font-semibold mb-4">Disclaimer</h4>
              <p className="text-xs leading-relaxed">
                This website is for educational purposes only and does not constitute medical advice. Always consult with your GP, Paediatrician, or Clinical Geneticist for personal medical guidance.
              </p>
            </div>
          </div>
          <div className="max-w-7xl mx-auto px-4 mt-8 pt-8 border-t border-slate-800 text-center text-xs">
            &copy; {new Date().getFullYear()} Dr Odet M. Aszkenay. All rights reserved.
          </div>
        </footer>
      </div>
    </div>
  );
};

export default App;
