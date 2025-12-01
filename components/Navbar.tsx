
import React from 'react';
import { Dna, Menu, X, ArrowLeft } from 'lucide-react';

interface NavbarProps {
  activeTab: string;
  setActiveTab: (tab: string) => void;
}

export const Navbar: React.FC<NavbarProps> = ({ activeTab, setActiveTab }) => {
  const [isOpen, setIsOpen] = React.useState(false);

  const navItems = [
    { id: 'home', label: 'Home' },
    { id: 'learn', label: 'The Science' },
    { id: 'pathway', label: 'NHS Pathway' },
    { id: 'quiz', label: 'Quizzes' },
    { id: 'about', label: 'About' },
    { id: 'assistant', label: 'Ask Genie AI' },
  ];

  return (
    <nav className="bg-white border-b border-slate-200 sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16">
          <div className="flex items-center cursor-pointer" onClick={() => setActiveTab('home')}>
            <div className="bg-teal-600 p-2 rounded-lg flex-shrink-0">
              <Dna className="h-6 w-6 text-white" />
            </div>
            <span className="ml-3 text-lg md:text-xl font-bold text-slate-800 tracking-tight leading-tight">Understanding the genetics of autism</span>
          </div>
          
          <div className="hidden md:flex items-center space-x-4 lg:space-x-8">
            {navItems.map((item) => (
              <button
                key={item.id}
                onClick={() => setActiveTab(item.id)}
                className={`${
                  activeTab === item.id
                    ? 'text-teal-600 border-b-2 border-teal-600'
                    : 'text-slate-500 hover:text-slate-700'
                } px-1 pt-1 text-sm font-medium transition-colors duration-200 h-full border-t-2 border-transparent`}
              >
                {item.label}
              </button>
            ))}
            
            {/* Divider */}
            <div className="h-6 w-px bg-slate-300 mx-2"></div>

            {/* Back to Main Site Link */}
            <a 
                href="https://www.practical-autism-research.co.uk"
                className="text-slate-500 hover:text-teal-600 px-3 py-2 rounded-md text-sm font-medium transition-colors flex items-center group"
            >
                <ArrowLeft className="w-4 h-4 mr-1 group-hover:-translate-x-1 transition-transform" />
                Main Site
            </a>
          </div>

          <div className="md:hidden flex items-center">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="text-slate-500 hover:text-slate-700 p-2"
            >
              {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile menu */}
      {isOpen && (
        <div className="md:hidden bg-white border-b border-slate-100">
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
            {navItems.map((item) => (
              <button
                key={item.id}
                onClick={() => {
                  setActiveTab(item.id);
                  setIsOpen(false);
                }}
                className={`${
                  activeTab === item.id
                    ? 'bg-teal-50 text-teal-700'
                    : 'text-slate-600 hover:bg-slate-50'
                } block px-3 py-2 rounded-md text-base font-medium w-full text-left`}
              >
                {item.label}
              </button>
            ))}
            
            <div className="border-t border-slate-100 my-2"></div>
            
            <a
                href="https://www.practical-autism-research.co.uk"
                className="text-slate-600 hover:bg-slate-50 hover:text-teal-600 block px-3 py-2 rounded-md text-base font-medium w-full text-left flex items-center"
            >
                <ArrowLeft className="w-4 h-4 mr-2" />
                Back to Main Website
            </a>
          </div>
        </div>
      )}
    </nav>
  );
};
