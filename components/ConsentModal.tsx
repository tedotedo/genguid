import React from 'react';
import { ShieldAlert } from 'lucide-react';

interface ConsentModalProps {
  onConsent: () => void;
}

export const ConsentModal: React.FC<ConsentModalProps> = ({ onConsent }) => {
  return (
    <div className="fixed inset-0 bg-slate-900/90 backdrop-blur-sm z-[100] flex items-center justify-center p-4">
      <div className="bg-white rounded-2xl shadow-2xl max-w-lg w-full p-8 border border-slate-200 relative">
        <div className="flex flex-col items-center text-center">
          <div className="bg-amber-100 p-3 rounded-full mb-4">
            <ShieldAlert className="h-8 w-8 text-amber-600" />
          </div>
          <h2 className="text-2xl font-bold text-slate-900 mb-4">Important Medical Disclaimer</h2>
          
          <div className="text-slate-700 space-y-4 mb-8 text-left bg-slate-50 p-5 rounded-xl border border-slate-100 text-sm leading-relaxed">
            <p>
              <strong>This website is strictly for educational purposes only.</strong>
            </p>
            <p>
              The information provided here does <u>not</u> constitute medical advice, diagnosis, or treatment.
            </p>
            <p>
              By entering this site, you acknowledge and agree that you will <strong>always contact your own child's community paediatrician, clinical geneticist, or genetic counsellor</strong> for specific medical advice tailored to your child's and family's individual circumstances.
            </p>
          </div>

          <button
            onClick={onConsent}
            className="w-full bg-teal-600 text-white py-3 px-6 rounded-xl font-semibold hover:bg-teal-700 transition-colors shadow-lg hover:shadow-xl transform hover:-translate-y-0.5 active:translate-y-0"
          >
            I Understand & Agree
          </button>
        </div>
      </div>
    </div>
  );
};