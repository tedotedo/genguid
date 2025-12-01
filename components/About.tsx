
import React from 'react';
import { GraduationCap, Stethoscope, Heart, Microscope, MapPin } from 'lucide-react';

export const About: React.FC = () => {
  return (
    <div className="bg-white py-12">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header Section */}
        <div className="text-center mb-12">
          {/* Portrait Image Container */}
          <div className="relative inline-block mb-6">
            <div className="h-48 w-48 rounded-full p-1 border-4 border-teal-50 shadow-xl mx-auto overflow-hidden bg-white">
                {/* 
                   NOTE: Ensure a file named 'dr-aszkenasy.jpg' is in your public/root folder.
                */}
                <img 
                    src="./dr-aszkenasy.jpg" 
                    alt="Dr. Odet Mark Aszkenasy" 
                    className="h-full w-full object-cover rounded-full"
                />
            </div>
            <div className="absolute bottom-3 right-3 bg-teal-600 p-2 rounded-full border-4 border-white shadow-sm">
                <Stethoscope className="h-6 w-6 text-white" />
            </div>
          </div>

          <h1 className="text-3xl font-bold text-slate-900 mb-4">About Dr. Odet Mark Aszkenasy</h1>
          <p className="text-lg text-slate-600 max-w-2xl mx-auto">
            Consultant Paediatrician and Clinical Lead for Autism
          </p>
        </div>

        {/* Main Content Grid */}
        <div className="space-y-12">
          
          {/* Clinical Background */}
          <div className="bg-slate-50 rounded-2xl p-8 border border-slate-100 shadow-sm">
            <div className="flex items-start">
              <div className="bg-white p-3 rounded-lg border border-slate-200 mr-5 hidden sm:block">
                <GraduationCap className="h-6 w-6 text-slate-700" />
              </div>
              <div>
                <h2 className="text-xl font-bold text-slate-900 mb-3">Clinical Background & Qualifications</h2>
                <p className="text-slate-700 leading-relaxed">
                  Dr. Aszkenasy qualified in medicine in London in 1982. His early career spanned various specialties, ranging from general adult medicine to specialized paediatrics, including time with the Royal Free Hospital team in the children’s kidney transplantation unit.
                </p>
                <p className="text-slate-700 leading-relaxed mt-4">
                  He holds the Diploma of Child Health (DCH) and is a Fellow of the Royal College of Physicians (FRCP). In 1996, he entered the field of neurodevelopmental paediatrics, initially focusing on childhood epilepsy before specialising in autism.
                </p>
              </div>
            </div>
          </div>

          {/* Personal Perspective */}
          <div className="bg-white rounded-2xl p-8 border border-teal-100 shadow-sm relative overflow-hidden">
            <div className="absolute top-0 left-0 w-2 h-full bg-teal-500"></div>
            <div className="flex items-start">
              <div className="bg-teal-50 p-3 rounded-lg border border-teal-100 mr-5 hidden sm:block">
                <Heart className="h-6 w-6 text-teal-600" />
              </div>
              <div>
                <h2 className="text-xl font-bold text-slate-900 mb-3">A Unique Perspective</h2>
                <p className="text-slate-700 leading-relaxed">
                  Alongside his wife, a paediatric radiologist, Dr. Aszkenasy made the unconventional decision to home educate their two children. This intense period involved his wife pausing her career while he worked part-time, providing him with a profound "insider's view" of child development.
                </p>
                <p className="text-slate-700 leading-relaxed mt-4">
                  This experience from the "other side of the consulting room desk" has deeply influenced his empathetic approach to working with families, understanding that clinical knowledge must be balanced with the lived reality of parenting.
                </p>
              </div>
            </div>
          </div>

          {/* Research & Epidemiology */}
          <div className="bg-slate-50 rounded-2xl p-8 border border-slate-100 shadow-sm">
             <div className="flex items-start">
              <div className="bg-white p-3 rounded-lg border border-slate-200 mr-5 hidden sm:block">
                <Microscope className="h-6 w-6 text-blue-600" />
              </div>
              <div>
                <h2 className="text-xl font-bold text-slate-900 mb-3">Research & Public Health</h2>
                <p className="text-slate-700 leading-relaxed">
                   Dr. Aszkenasy spent time working in the USA in public health medicine. During this time, he mastered epidemiology and statistics—skills that allow him to critically analyze medical research.
                </p>
                <p className="text-slate-700 leading-relaxed mt-4">
                  This expertise is vital in navigating the complex and often confusing world of autism research, allowing him to separate genuine scientific breakthroughs from headlines that may overstate findings.
                </p>
              </div>
            </div>
          </div>

          {/* Current Role */}
          <div className="flex flex-col md:flex-row items-center justify-between bg-slate-900 text-white p-8 rounded-2xl">
             <div className="mb-6 md:mb-0 md:mr-6">
                <h2 className="text-xl font-bold mb-2 flex items-center">
                   <MapPin className="h-5 w-5 mr-2 text-teal-400" />
                   Current Practice
                </h2>
                <p className="text-slate-300 leading-relaxed">
                   He currently serves as the <strong>Clinical Lead for Autism</strong> in a busy paediatric service in the North East of England. He meets families weekly, combining scientific rigour with honest, straightforward communication to help them understand their child's unique needs.
                </p>
             </div>
          </div>

        </div>
      </div>
    </div>
  );
};
