import React, { useState, useRef } from 'react';
import { ChevronRight, Check, MapPin, Stethoscope, FlaskConical, FileText, ExternalLink } from 'lucide-react';
import { PathwayStep } from '../types';

const steps: PathwayStep[] = [
  {
    id: 1,
    title: "Initial Consultation & Eligibility",
    description: "Referral by Community Paediatrics.",
    details: "Genetic testing is not offered for every autistic child. It is generally reserved for children with moderate-to-severe learning disabilities, global developmental delay, or syndromic features. Your Community Paediatrician can assess this, often as part of the NICE (CG128) recommended medical assessment.",
    iconName: "Stethoscope",
    keyTakeaway: "Make sure to bring your child's 'Red Book' (Personal Child Health Record) and any previous clinic letters to this appointment to help the doctor build a full picture."
  },
  {
    id: 2,
    title: "Genetic Counselling",
    description: "Discussing implications and consent.",
    details: "A crucial step. A genetic counsellor or the paediatrician ordering the test will explain the complexities of the test, what the results might mean for you and your family, including the potential negative impact of unexpected findings, and what the test can and cannot find. They will discuss the 'Record of Discussion' form, which differs from standard consent forms.",
    iconName: "FileText",
    links: [
        { label: "Watch the explainer video", url: "https://youtu.be/e4DpZHn1kUQ?si=9cr5XymJIrxaAhis" },
        { label: "Read the NHS leaflet on whole genome sequencing", url: "https://www.england.nhs.uk/publication/whole-genome-sequencing-patient-information-leaflets/" }
    ],
    keyTakeaway: "Always ask for a copy of the clinic letter after this appointment. It helps you keep track of exactly what was discussed and what the next steps are."
  },
  {
    id: 3,
    title: "The Test (Sample)",
    description: "Usually a blood test (sometimes saliva).",
    details: "For the child, and often both biological parents (called 'Trio' testing). This helps compare the child's DNA against the parents to spot 'de novo' (new) changes.",
    iconName: "FlaskConical",
    links: [
        { label: "Zak's Blood Test Book (Amazon)", url: "https://amzn.eu/d/3qm37z8" }
    ],
    keyTakeaway: "To help reduce anxiety, ask the clinic if they can use numbing cream (like EMLA) beforehand. Reading a social story like 'Zak's Blood Test' (linked above) can also help prepare your child."
  },
  {
    id: 4,
    title: "Analysis (Whole Genome Sequencing)",
    description: "Looking at the DNA.",
    details: "Whole Genome Sequencing (WGS) is now the standard first-line test in the NHS for eligible children. It replaces the older Chromosomal Microarray, as WGS can find almost all types of changes (CNVs and single gene variants) in one go. Microarray is now only used in specific, rare circumstances. Note: While the target is 3 months, results often take over a year.",
    iconName: "MapPin",
    keyTakeaway: "Waiting for your results can feel stressful, but delays are almost always due to the complexity and volume of analyses—not because bad news is expected. While the process may take many months, you can expect your care team to contact you promptly if important results are found."
  },
  {
    id: 5,
    title: "Results & Follow-up",
    description: "Understanding the outcome.",
    details: "Results can be: Positive (cause found), Negative (no cause found), or VUS (Variant of Uncertain Significance). Your counsellor will explain what this means for your family.",
    iconName: "Check",
    keyTakeaway: "If a result is found, ask about specific support groups (like Unique or SWAN UK). If no result is found, ask when/if your child's data might be re-analyzed in the future."
  }
];

export const PathwayWizard: React.FC = () => {
  const [activeStep, setActiveStep] = useState<number>(1);
  const contentRef = useRef<HTMLDivElement>(null);

  const handleStepChange = (stepId: number) => {
    setActiveStep(stepId);
    // On mobile devices (width < 1024px), scroll the content into view
    // The lg breakpoint in Tailwind is 1024px
    if (window.innerWidth < 1024 && contentRef.current) {
        contentRef.current.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  };

  const renderIcon = (name: string, isActive: boolean) => {
    const className = `h-6 w-6 ${isActive ? 'text-white' : 'text-slate-500'}`;
    switch (name) {
      case 'Stethoscope': return <Stethoscope className={className} />;
      case 'FileText': return <FileText className={className} />;
      case 'FlaskConical': return <FlaskConical className={className} />;
      case 'MapPin': return <MapPin className={className} />;
      case 'Check': return <Check className={className} />;
      default: return <Stethoscope className={className} />;
    }
  };

  const currentStep = steps[activeStep - 1];

  return (
    <div className="max-w-6xl mx-auto px-4 py-12">
      <div className="text-center mb-12">
        <h2 className="text-3xl font-bold text-slate-900">The NHS Genetic Testing Pathway</h2>
        <p className="mt-4 text-slate-600">Click through the steps to understand the journey from referral to results.</p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        {/* Left: Navigation List */}
        <div className="lg:col-span-1 space-y-4">
          {steps.map((step) => (
            <button
              key={step.id}
              onClick={() => handleStepChange(step.id)}
              className={`w-full flex items-center p-4 rounded-xl transition-all duration-200 border ${
                activeStep === step.id
                  ? 'bg-teal-600 border-teal-600 shadow-md transform scale-105'
                  : 'bg-white border-slate-200 hover:bg-slate-50'
              }`}
            >
              <div className={`p-2 rounded-full mr-4 ${activeStep === step.id ? 'bg-teal-500' : 'bg-slate-100'}`}>
                {renderIcon(step.iconName, activeStep === step.id)}
              </div>
              <div className="text-left">
                <h3 className={`font-semibold ${activeStep === step.id ? 'text-white' : 'text-slate-800'}`}>
                  {step.title}
                </h3>
                <p className={`text-xs ${activeStep === step.id ? 'text-teal-100' : 'text-slate-500'}`}>
                  Step {step.id}
                </p>
              </div>
              {activeStep === step.id && <ChevronRight className="ml-auto text-white h-5 w-5" />}
            </button>
          ))}
        </div>

        {/* Right: Detail Content */}
        {/* Added scroll-mt-24 to provide offset for sticky header when scrolling */}
        <div className="lg:col-span-2 scroll-mt-24" ref={contentRef}>
          <div className="bg-white rounded-2xl shadow-lg border border-slate-200 overflow-hidden h-full flex flex-col">
            <div className="bg-slate-50 p-8 border-b border-slate-100">
               <div className="flex items-center space-x-3 mb-4">
                 <span className="bg-blue-100 text-blue-800 text-xs font-bold px-3 py-1 rounded-full uppercase tracking-wide">
                    NHS Standard of Care
                 </span>
                 <span className="text-slate-400 text-sm">Step {activeStep} of 5</span>
               </div>
               <h3 className="text-2xl font-bold text-slate-900">{currentStep.title}</h3>
               <p className="text-lg text-teal-700 mt-2 font-medium">{currentStep.description}</p>
            </div>
            
            <div className="p-8 flex-1">
              <p className="text-slate-700 leading-relaxed text-lg">
                {currentStep.details}
              </p>

              {/* Render Optional Links */}
              {currentStep.links && (
                <div className="mt-6">
                    <h4 className="font-semibold text-slate-900 text-sm mb-2">For more information:</h4>
                    <ul className="space-y-2">
                        {currentStep.links.map((link, idx) => (
                            <li key={idx} className="flex items-start">
                                <ExternalLink className="h-4 w-4 text-teal-600 mt-1 mr-2 flex-shrink-0" />
                                <a 
                                    href={link.url} 
                                    target="_blank" 
                                    rel="noopener noreferrer" 
                                    className="text-teal-600 hover:text-teal-800 hover:underline text-sm font-medium"
                                >
                                    {link.label}
                                </a>
                            </li>
                        ))}
                    </ul>
                </div>
              )}

              {/* Dynamic Key Takeaway */}
              {currentStep.keyTakeaway && (
                <div className="mt-8 bg-blue-50 p-6 rounded-xl border border-blue-100">
                    <h4 className="font-semibold text-blue-900 mb-2 flex items-center">
                    <Check className="h-5 w-5 mr-2" />
                    Key Takeaway
                    </h4>
                    <p className="text-blue-800 text-sm">
                    {currentStep.keyTakeaway}
                    </p>
                </div>
              )}
            </div>

            <div className="p-4 bg-slate-50 border-t border-slate-200 flex justify-between">
              <button 
                onClick={() => handleStepChange(Math.max(1, activeStep - 1))}
                disabled={activeStep === 1}
                className="px-6 py-2 rounded-lg text-slate-600 hover:bg-slate-200 disabled:opacity-50 disabled:cursor-not-allowed transition-colors"
              >
                Previous
              </button>
              <button 
                onClick={() => handleStepChange(Math.min(5, activeStep + 1))}
                disabled={activeStep === 5}
                className="px-6 py-2 rounded-lg bg-teal-600 text-white hover:bg-teal-700 disabled:opacity-50 disabled:cursor-not-allowed transition-colors shadow-sm"
              >
                Next Step
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};