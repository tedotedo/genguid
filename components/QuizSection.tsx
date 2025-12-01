import React, { useState } from 'react';
import { CheckCircle2, XCircle, Brain, Stethoscope, Users, Trophy, ArrowRight, RefreshCw } from 'lucide-react';

type QuizType = 'parent' | 'clinician' | null;

interface Question {
  question: string;
  options: string[];
  correctAnswer: number;
  explanation: string;
}

const parentQuestions: Question[] = [
  {
    question: "If you have one autistic child and genetic testing comes back 'negative' (no specific cause found), what is the estimated likelihood of a subsequent child also being autistic?",
    options: [
      "Less than 1% (same as the general population).",
      "Around 10-20% (higher than average, likely due to polygenic factors).",
      "50% (it is definitely dominant inheritance).",
      "100%."
    ],
    correctAnswer: 1,
    explanation: "In 'Simplex' families (one affected child), the likelihood is estimated at 10-20%. This likelihood is higher if the first autistic child is a girl (due to the higher polygenic load required). If there are already two or more autistic children (Multiplex families) and no specific cause is found, the likelihood for a subsequent child rises to approximately 30-50%."
  },
  {
    question: "Why does Whole Genome Sequencing (WGS) usually require blood samples from both biological parents (Trio analysis) as well as the child?",
    options: [
      "To check if the parents have undiagnosed autism.",
      "To prove paternity.",
      "To filter out harmless genetic variants inherited from parents and spot new (de novo) changes in the child.",
      "It doesn't; testing the child alone is just as effective."
    ],
    correctAnswer: 2,
    explanation: "We all carry rare genetic changes that are harmless. By comparing the child's DNA to the parents', the lab can subtract these inherited harmless variants to isolate the 'de novo' (new) changes that are unique to the child."
  },
  {
    question: "A 'negative' result means no single specific genetic cause was found. What is the most likely scientific explanation for the child's autism in this scenario?",
    options: [
      "The autism was caused by birth trauma.",
      "The laboratory equipment missed the gene.",
      "The cause is likely 'Polygenic'—the result of hundreds of small, common genetic factors combining together.",
      "The child is not actually autistic."
    ],
    correctAnswer: 2,
    explanation: "The majority of autism is 'Polygenic'. This means it isn't caused by one broken gene, but by the accumulation of many tiny genetic variances inherited from ancestors, which current tests cannot measure individually."
  },
  {
    question: "You receive a report stating a 'Variant of Uncertain Significance' (VUS) has been found. What does this generally mean for your child's care?",
    options: [
      "It confirms a diagnosis and treatment should start immediately.",
      "It means the test failed and must be repeated.",
      "It is a 'maybe'. It is currently not actionable and usually does not change medical management, but may be reclassified in the future.",
      "It means the child has a rare disease that no one has seen before."
    ],
    correctAnswer: 2,
    explanation: "A VUS means the lab found a change but there isn't enough evidence yet to say if it causes autism or if it's harmless. Clinicians generally do not act on a VUS until science advances enough to reclassify it."
  },
  {
    question: "Beyond finding a 'reason', what is a primary health benefit of identifying a specific genetic syndrome (e.g., Tuberous Sclerosis or Fragile X)?",
    options: [
      "It ensures that the child will not need any further medical follow-up.",
      "It allows doctors to predict and monitor for specific co-occurring health issues (like kidney problems, epilepsy, or heart conditions).",
      "It proves to schools that the child needs a special diet.",
      "It guarantees immediate access to higher disability benefits."
    ],
    correctAnswer: 1,
    explanation: "Many genetic syndromes are associated with specific medical risks (e.g., kidney issues in Phelan-McDermid syndrome). Knowing the gene allows doctors to start 'surveillance' (monitoring) to catch and treat these physical health issues early."
  },
  {
    question: "How does Whole Genome Sequencing (WGS) differ from the older Chromosomal Microarray (CMA) test?",
    options: [
      "WGS is faster but less detailed.",
      "WGS looks for spelling mistakes (Single Nucleotide Variants) AND structural changes (CNVs) in the entire code, whereas Microarray mainly looked for structural changes.",
      "Microarray is better for autism; WGS is only for cancer.",
      "There is no difference; they are different names for the same test."
    ],
    correctAnswer: 1,
    explanation: "Microarray was like checking the chapters of a book to see if pages were missing. WGS checks the chapters BUT also spell-checks every single word (3 billion letters), making it much more powerful."
  }
];

const clinicianQuestions: Question[] = [
  {
    question: "Under the NHS National Genomic Test Directory, criteria for the WGS R29 panel requires which of the following for WGS eligibility?",
    options: [
      "A diagnosis of Autism Spectrum Disorder alone.",
      "Unexplained moderate-to-severe Intellectual Disability (or GDD) likely to be of genetic origin, with or without autism.",
      "Any child with speech delay waiting for an autism assessment.",
      "A family history of autism in a first-degree relative."
    ],
    correctAnswer: 1,
    explanation: "Autism alone is not currently a criteria for WGS commissioning. The child must present with unexplained moderate-to-severe developmental delay or intellectual disability (or R27 if there are syndromic features/epilepsy) to meet the inclusion criteria."
  },
  {
    question: "Bioinformatically, why is 'Trio' WGS (Proband + Parents) vastly superior to 'Singleton' WGS for identifying pathogenic variants in neurodevelopmental disorders?",
    options: [
      "It increases the raw read depth of the sequencing machine.",
      "It allows for immediate segregation analysis, enabling the pipeline to filter out thousands of inherited non-pathogenic variants to isolate de novo events.",
      "It confirms the parents are not carriers of autosomal dominant conditions.",
      "It is purely for confirming sample identity."
    ],
    correctAnswer: 1,
    explanation: "The primary power of Trio WGS is the ability to filter 'noise'. By subtracting variants inherited from healthy parents, the pipeline isolates 'de novo' (new) variants, which are the leading cause of severe neurodevelopmental conditions, increasing diagnostic yield significantly."
  },
  {
    question: "During the consent process ('Record of Discussion'), parents express concern about life insurance. What is the correct advice regarding diagnostic WGS results?",
    options: [
      "Genetic results never affect insurance in the UK.",
      "Diagnostic results (explaining current symptoms) are part of the medical record and may need to be declared, whereas predictive results (for future asymptomatic risks) generally do not (Code on Genetic Testing and Insurance).",
      "WGS results are completely anonymous and insurers cannot see them.",
      "Only cancer results need to be declared."
    ],
    correctAnswer: 1,
    explanation: "The Code on Genetic Testing and Insurance distinguishes between diagnostic and predictive tests. If a test diagnostic of the child's *current* condition (e.g., ID) is found, it is treated like any other medical diagnosis. Predictive findings (secondary findings) are protected under the code up to certain financial limits."
  },
  {
    question: "A 'Class 3' Variant of Uncertain Significance (VUS) is identified in a known neurodevelopmental gene. Testing confirms it was inherited from a phenotypically unaffected father. How does this influence interpretation?",
    options: [
      "It confirms the variant is Pathogenic.",
      "It suggests the father has undiagnosed autism.",
      "It significantly reduces the likelihood of pathogenicity (likely benign), unless there is evidence of incomplete penetrance or variable expressivity.",
      "It has no bearing on the interpretation."
    ],
    correctAnswer: 2,
    explanation: "If a variant segregates with a healthy parent, it is strong evidence *against* pathogenicity (BS4 criteria), unless the specific condition is known to have incomplete penetrance or the parent has a subtle phenotype (broad phenotype)."
  },
  {
    question: "When requesting WGS under a specific clinical indication (e.g., R29), what is meant by the term 'Virtual Panel' regarding analysis?",
    options: [
      "It means the sequencing is performed using computer simulation rather than a physical blood sample.",
      "It means that while the whole genome is sequenced, the bioinformatics pipeline primarily analyses only those genes known to be associated with the patient's specific phenotype (features).",
      "It means the entire non-coding and coding genome is manually reviewed by a clinical scientist for every patient.",
      "It implies the results are only delivered via a virtual video consultation."
    ],
    correctAnswer: 1,
    explanation: "Be aware that virtual panels of genes are used in clinical applications of WGS. This means that usually, even though all of the genome is sequenced, only those genes known to be associated with the patient’s features are analysed. Therefore, requesting a WGS panel test does not mean the *entire* genome has been checked—just the genes included on that specific panel."
  }
];

export const QuizSection: React.FC = () => {
  const [activeQuiz, setActiveQuiz] = useState<QuizType>(null);
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [score, setScore] = useState(0);
  const [selectedAnswer, setSelectedAnswer] = useState<number | null>(null);
  const [isFinished, setIsFinished] = useState(false);

  const currentQuestions = activeQuiz === 'parent' ? parentQuestions : clinicianQuestions;

  const handleStart = (type: QuizType) => {
    setActiveQuiz(type);
    setCurrentQuestionIndex(0);
    setScore(0);
    setSelectedAnswer(null);
    setIsFinished(false);
  };

  const handleAnswer = (index: number) => {
    if (selectedAnswer !== null) return; // Prevent double clicking
    setSelectedAnswer(index);
    if (index === currentQuestions[currentQuestionIndex].correctAnswer) {
      setScore(score + 1);
    }
  };

  const handleNext = () => {
    if (currentQuestionIndex < currentQuestions.length - 1) {
      setCurrentQuestionIndex(currentQuestionIndex + 1);
      setSelectedAnswer(null);
    } else {
      setIsFinished(true);
    }
  };

  const reset = () => {
    setActiveQuiz(null);
    setCurrentQuestionIndex(0);
    setScore(0);
    setSelectedAnswer(null);
    setIsFinished(false);
  };

  if (!activeQuiz) {
    return (
      <div className="max-w-4xl mx-auto px-4 py-12">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-slate-900 mb-4">Test Your Knowledge</h2>
          <p className="text-slate-600">Select a quiz path to check your understanding of genetics and autism.</p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <button 
            onClick={() => handleStart('parent')}
            className="bg-white p-8 rounded-2xl shadow-sm border border-slate-200 hover:border-teal-500 hover:shadow-md transition-all group text-left"
          >
            <div className="bg-teal-100 p-4 rounded-full w-16 h-16 flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
              <Users className="h-8 w-8 text-teal-600" />
            </div>
            <h3 className="text-2xl font-bold text-slate-900 mb-2">For Parents & Families</h3>
            <p className="text-slate-600">
              Use this self-assessment to help gauge how ready you are for your discussion with your paediatrician or genetic counsellor. It covers key concepts that will likely come up in your appointment.
            </p>
          </button>

          <button 
             onClick={() => handleStart('clinician')}
             className="bg-white p-8 rounded-2xl shadow-sm border border-slate-200 hover:border-blue-500 hover:shadow-md transition-all group text-left"
          >
            <div className="bg-blue-100 p-4 rounded-full w-16 h-16 flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
              <Stethoscope className="h-8 w-8 text-blue-600" />
            </div>
            <h3 className="text-2xl font-bold text-slate-900 mb-2">For Paediatricians</h3>
            <p className="text-slate-600">
              A professional knowledge check designed for Community Paediatricians. Verify your alignment with the latest NHS Genomic Medicine Service pathways, WGS eligibility, and NICE CG128 recommendations.
            </p>
          </button>
        </div>
      </div>
    );
  }

  if (isFinished) {
    return (
      <div className="max-w-2xl mx-auto px-4 py-12 text-center">
        <div className="bg-white rounded-2xl shadow-lg p-8 border border-slate-200">
          <div className="inline-flex p-4 rounded-full bg-yellow-100 mb-6">
            <Trophy className="h-12 w-12 text-yellow-600" />
          </div>
          <h2 className="text-3xl font-bold text-slate-900 mb-2">Quiz Complete!</h2>
          <p className="text-slate-600 mb-6">You scored</p>
          <div className="text-5xl font-extrabold text-teal-600 mb-8">
            {score} / {currentQuestions.length}
          </div>
          <p className="text-slate-600 mb-8">
            {score === currentQuestions.length 
              ? "Excellent! You have a strong grasp of the topic." 
              : "Good effort! Review the sections on the website to fill in any gaps."}
          </p>
          <button 
            onClick={reset}
            className="inline-flex items-center px-6 py-3 bg-slate-900 text-white rounded-xl hover:bg-slate-800 transition-colors"
          >
            <RefreshCw className="h-5 w-5 mr-2" />
            Choose Another Quiz
          </button>
        </div>
      </div>
    );
  }

  const question = currentQuestions[currentQuestionIndex];

  return (
    <div className="max-w-3xl mx-auto px-4 py-12">
      <div className="mb-8 flex items-center justify-between">
        <span className="text-sm font-semibold text-slate-500 uppercase tracking-wider">
            {activeQuiz === 'parent' ? 'Family Guide' : 'Clinical Guide'}
        </span>
        <span className="text-sm font-medium text-slate-400">
            Question {currentQuestionIndex + 1} of {currentQuestions.length}
        </span>
      </div>

      <div className="bg-white rounded-2xl shadow-lg border border-slate-200 overflow-hidden">
        {/* Progress Bar */}
        <div className="w-full bg-slate-100 h-2">
            <div 
                className="bg-teal-500 h-2 transition-all duration-300"
                style={{ width: `${((currentQuestionIndex + 1) / currentQuestions.length) * 100}%` }}
            ></div>
        </div>

        <div className="p-8">
            <h3 className="text-xl md:text-2xl font-bold text-slate-900 mb-8 leading-snug">
                {question.question}
            </h3>

            <div className="space-y-4">
                {question.options.map((option, idx) => {
                    const isSelected = selectedAnswer === idx;
                    const isCorrect = idx === question.correctAnswer;
                    const showResult = selectedAnswer !== null;

                    let buttonClass = "w-full p-4 text-left rounded-xl border-2 transition-all ";
                    
                    if (showResult) {
                        if (isCorrect) {
                            buttonClass += "bg-green-50 border-green-500 text-green-800";
                        } else if (isSelected && !isCorrect) {
                            buttonClass += "bg-red-50 border-red-500 text-red-800";
                        } else {
                            buttonClass += "bg-white border-slate-100 text-slate-400";
                        }
                    } else {
                        buttonClass += "bg-white border-slate-200 hover:border-teal-500 hover:bg-slate-50 text-slate-700";
                    }

                    return (
                        <button
                            key={idx}
                            onClick={() => handleAnswer(idx)}
                            disabled={showResult}
                            className={buttonClass}
                        >
                            <div className="flex items-center">
                                {showResult && isCorrect && <CheckCircle2 className="h-5 w-5 mr-3 flex-shrink-0" />}
                                {showResult && isSelected && !isCorrect && <XCircle className="h-5 w-5 mr-3 flex-shrink-0" />}
                                <span>{option}</span>
                            </div>
                        </button>
                    );
                })}
            </div>

            {/* Explanation Box */}
            {selectedAnswer !== null && (
                <div className="mt-8 animate-fade-in">
                    <div className="bg-blue-50 border border-blue-100 rounded-xl p-6 mb-6">
                        <div className="flex items-start">
                             <Brain className="h-6 w-6 text-blue-600 mr-3 mt-1 flex-shrink-0" />
                             <div>
                                 <h4 className="font-bold text-blue-900 mb-1">Explanation</h4>
                                 <p className="text-blue-800 text-sm leading-relaxed">{question.explanation}</p>
                             </div>
                        </div>
                    </div>
                    <div className="flex justify-end">
                        <button
                            onClick={handleNext}
                            className="inline-flex items-center px-6 py-3 bg-teal-600 text-white rounded-xl hover:bg-teal-700 transition-colors font-medium shadow-md"
                        >
                            {currentQuestionIndex < currentQuestions.length - 1 ? 'Next Question' : 'See Results'}
                            <ArrowRight className="ml-2 h-5 w-5" />
                        </button>
                    </div>
                </div>
            )}
        </div>
      </div>
    </div>
  );
};