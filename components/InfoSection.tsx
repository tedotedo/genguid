
import React from 'react';
import { BookOpen, AlertTriangle, HelpCircle, Stethoscope, GitBranch, Clock, Dna, Users, Scale, FileText, ExternalLink, PlayCircle, Link as LinkIcon, Filter } from 'lucide-react';

export const InfoSection: React.FC = () => {
  return (
    <div className="bg-white py-12">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 space-y-16">
        
        {/* Eligibility Section */}
        <section id="eligibility">
          <div className="flex items-center space-x-3 mb-6">
            <div className="bg-teal-100 p-2 rounded-lg">
                <Stethoscope className="h-6 w-6 text-teal-600" /> 
            </div>
            <h2 className="text-3xl font-bold text-slate-900">Is my child eligible for testing?</h2>
          </div>
          <div className="bg-slate-50 border-l-4 border-teal-500 p-6 rounded-r-xl mb-8">
             <p className="text-slate-700 text-lg font-medium mb-4">
                Genetic testing is generally <u>not</u> recommended or funded by the NHS for autistic children who do not have a learning disability.
             </p>
             <p className="text-slate-600 mb-2">
                Testing is typically offered only when autism is accompanied by:
             </p>
             <ul className="list-disc pl-5 space-y-2 text-slate-700">
                <li><strong>Moderate to severe Learning Disability</strong> (Intellectual Disability).</li>
                <li><strong>Global Developmental Delay</strong> (significant delays in milestones like walking and talking).</li>
                <li><strong>Dysmorphic features</strong> (distinctive physical characteristics).</li>
                <li><strong>Epilepsy</strong> or other co-occurring medical conditions.</li>
             </ul>
          </div>

          {/* Community Paediatrician & NICE Guidelines */}
          <div className="bg-blue-50 rounded-xl p-6 border border-blue-100">
            <div className="flex items-start">
              <div className="bg-blue-100 p-2 rounded-lg mr-4 mt-1">
                <FileText className="h-5 w-5 text-blue-700" />
              </div>
              <div>
                <h3 className="text-lg font-bold text-slate-900 mb-2">Who requests the test?</h3>
                <p className="text-slate-700 leading-relaxed mb-4">
                  You do not necessarily need to see a specialist Clinical Geneticist to have these tests ordered. Your child's <strong>Community Paediatrician</strong> can request them directly if your child meets the criteria.
                </p>
                <p className="text-slate-700 leading-relaxed">
                  This is one of the main reasons why <strong>NICE Clinical Guideline [CG128]</strong> (<em>"Autism spectrum disorder in under 19s: diagnosis and management"</em>) recommends a medical/paediatric assessment alongside the behavioural assessment. This medical assessment aims to identify any underlying biological factors or co-occurring conditions that might require specific support or testing.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* INHERITANCE MODES */}
        <section id="inheritance">
           <div className="flex items-center space-x-3 mb-6">
            <div className="bg-purple-100 p-2 rounded-lg">
                <GitBranch className="h-6 w-6 text-purple-600" />
            </div>
            <h2 className="text-3xl font-bold text-slate-900">How is it Inherited?</h2>
          </div>
          <p className="text-slate-600 mb-6">
            Many parents ask, "Did I pass this on?" The answer is often complex. Autism genetics is rarely as simple as eye colour.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
             {/* De Novo */}
             <div className="bg-white border border-slate-200 p-6 rounded-xl shadow-sm hover:shadow-md transition-shadow">
                <div className="flex items-center mb-3">
                    <span className="bg-purple-600 text-white text-xs font-bold px-2 py-1 rounded uppercase mr-2">Most Common in Testing</span>
                    <h3 className="font-bold text-lg text-slate-800">De Novo (New)</h3>
                </div>
                <p className="text-slate-600 text-sm leading-relaxed">
                    A genetic change that is known to cause a specific condition or developmental issue. Historically called a "mutation". 
                    <br/><br/>
                    <strong>Key Concept:</strong> This means it is <em>not</em> inherited from the parents' DNA, and the likelihood of recurrence for future children is often low (though slightly higher than general population).
                </p>
             </div>
             {/* Polygenic */}
             <div className="bg-white border border-slate-200 p-6 rounded-xl shadow-sm hover:shadow-md transition-shadow">
                 <div className="flex items-center mb-3">
                    <span className="bg-slate-200 text-slate-600 text-xs font-bold px-2 py-1 rounded uppercase mr-2">Most Common Overall</span>
                    <h3 className="font-bold text-lg text-slate-800">Polygenic / Multifactorial</h3>
                </div>
                <p className="text-slate-600 text-sm leading-relaxed">
                    Most autism is the result of hundreds of tiny, common genetic variations inherited from both parents, interacting with environmental factors. 
                    <br/><br/>
                    <strong>Key Concept:</strong> No single "test" can find this. It explains why autism runs in families without a clear pattern.
                </p>
             </div>
             {/* Dominant/Recessive */}
              <div className="bg-white border border-slate-200 p-6 rounded-xl shadow-sm hover:shadow-md transition-shadow">
                <h3 className="font-bold text-lg text-slate-800 mb-2">Mendelian (Rare)</h3>
                <p className="text-slate-600 text-sm leading-relaxed">
                    Classic inheritance patterns. 
                    <br/>
                    <strong>Recessive:</strong> Both parents are healthy "carriers" (25% chance per pregnancy).
                    <br/>
                    <strong>Dominant:</strong> A parent might have the genetic change (or a milder version) and passes it on (50% chance).
                </p>
             </div>
             {/* X-Linked */}
             <div className="bg-white border border-slate-200 p-6 rounded-xl shadow-sm hover:shadow-md transition-shadow">
                <h3 className="font-bold text-lg text-slate-800 mb-2">X-Linked</h3>
                <p className="text-slate-600 text-sm leading-relaxed">
                    Genes located on the X chromosome. Since boys (XY) have only one X, they are generally more significantly affected than girls (XX), who have a backup healthy copy. 
                    <br/>
                    <em>Example: Fragile X Syndrome.</em>
                </p>
             </div>
          </div>
        </section>

        {/* HERITABILITY & RECURRENCE */}
        <section id="heritability">
          <div className="flex items-center space-x-3 mb-6">
            <div className="bg-pink-100 p-2 rounded-lg">
                <Scale className="h-6 w-6 text-pink-600" />
            </div>
            <h2 className="text-3xl font-bold text-slate-900">Heritability vs. Recurrence Chance</h2>
          </div>
          
          <div className="space-y-6 text-slate-700 leading-relaxed">
            <p>
              It is often stated that autism has <strong>high heritability (estimated between 60% to 90%)</strong>. This is a population statistic that means genetic factors are the main reason for the differences between people. However, high heritability <strong>does not</strong> mean we can predict exactly what will happen in your specific family.
            </p>

            <div className="bg-slate-50 p-6 rounded-xl border border-slate-100">
               <h3 className="text-xl font-bold text-slate-900 mb-3">The "Polygenic Background" Likelihood</h3>
               <p className="mb-4">
                 Even when genetic testing (Microarray or WGS) comes back "normal" (negative), genetics is likely still involved. This is often due to <strong>Polygenic Factors</strong>:
               </p>
               <ul className="list-disc pl-5 space-y-2 text-sm">
                 <li>Every person carries thousands of common genetic variants.</li>
                 <li>Individually, these variants have tiny effects.</li>
                 <li>However, if a child inherits a combination of these variants from both parents, they may be more likely to be autistic.</li>
                 <li>We currently cannot test for this "background" likelihood in a clinical setting.</li>
               </ul>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-6">
               <div className="border border-slate-200 rounded-xl p-5 bg-white relative overflow-hidden">
                  <div className="absolute top-0 right-0 p-4 opacity-10">
                     <Users className="h-16 w-16 text-slate-900" />
                  </div>
                  <h4 className="text-lg font-bold text-teal-700 mb-2">Single Incidence (Simplex)</h4>
                  <p className="text-sm text-slate-600 mb-3">Families with <strong>one</strong> autistic child and no other affected relatives.</p>
                  <div className="bg-teal-50 p-3 rounded-lg">
                    <span className="block text-xs font-semibold text-teal-800 uppercase">Estimated Recurrence Chance</span>
                    <span className="text-2xl font-bold text-teal-900">~10% to 20%</span>
                  </div>
                  <p className="text-xs text-slate-500 mt-2">If no specific genetic cause is found, the likelihood for the next child is higher than the general population (~1-2%) but not as high as single-gene conditions.</p>
               </div>

               <div className="border border-slate-200 rounded-xl p-5 bg-white relative overflow-hidden">
                  <div className="absolute top-0 right-0 p-4 opacity-10">
                     <Users className="h-16 w-16 text-slate-900" />
                  </div>
                  <h4 className="text-lg font-bold text-purple-700 mb-2">Multiple Incidence (Multiplex)</h4>
                  <p className="text-sm text-slate-600 mb-3">Families with <strong>two or more</strong> autistic children.</p>
                  <div className="bg-purple-50 p-3 rounded-lg">
                    <span className="block text-xs font-semibold text-purple-800 uppercase">Estimated Recurrence Chance</span>
                    <span className="text-2xl font-bold text-purple-900">~30% to 50%</span>
                  </div>
                  <p className="text-xs text-slate-500 mt-2">This suggests a higher density of autism-linked genetic factors in the family background, even if a specific test like WGS is negative.</p>
               </div>
            </div>
            <p className="text-xs text-slate-400 italic mt-4 text-center">
              *These figures are estimates based on large studies and may vary based on the sex of the child and other factors.
            </p>
          </div>
        </section>

        {/* What are they testing for? */}
        <section>
          <div className="flex items-center space-x-3 mb-6">
            <div className="bg-indigo-100 p-2 rounded-lg">
                <Dna className="h-6 w-6 text-indigo-600" />
            </div>
            <h2 className="text-3xl font-bold text-slate-900">Types of Variants</h2>
          </div>
          <div className="prose prose-slate lg:prose-lg text-slate-600">
            <p className="mb-4">
              When the lab analyzes the sample, they are generally looking for three main types of genetic changes. <strong>Whole Genome Sequencing (WGS)</strong> is now the standard test used to find all of these.
            </p>
            <ul className="list-none pl-0 space-y-4 mt-4">
              <li className="bg-slate-50 p-4 rounded-xl border border-slate-100">
                  <strong>Chromosomal Aneuploidies:</strong> Whole chromosomes that are missing or extra (e.g., Down Syndrome or Sex Chromosome variations like XXY). <br/><span className="text-xs text-slate-500 uppercase tracking-wide font-semibold">Detected by WGS (or Microarray)</span>
              </li>
              <li className="bg-slate-50 p-4 rounded-xl border border-slate-100">
                  <strong>Copy Number Variants (CNVs):</strong> Missing (deletion) or extra (duplication) pieces of DNA within a chromosome. Like tearing a page out of a book or pasting a duplicate page in. <br/><span className="text-xs text-slate-500 uppercase tracking-wide font-semibold">Detected by WGS (formerly by Microarray)</span>
              </li>
              <li className="bg-slate-50 p-4 rounded-xl border border-slate-100">
                  <strong>Single Gene Variants (SNVs):</strong> Spelling mistakes in the DNA code of a specific gene (e.g., an 'A' becomes a 'G'). Like a typo in a single word. <br/><span className="text-xs text-slate-500 uppercase tracking-wide font-semibold">Detected by Whole Genome Sequencing (WGS)</span>
              </li>
            </ul>
          </div>
        </section>

        {/* Whole Genome Sequencing (WGS) Deep Dive */}
        <section id="wgs" className="bg-teal-50 rounded-2xl p-8 border border-teal-100 shadow-sm">
          <div className="flex items-center space-x-3 mb-6">
            <div className="bg-white p-2 rounded-lg border border-teal-100 shadow-sm">
                <Dna className="h-6 w-6 text-teal-600" />
            </div>
            <h2 className="text-2xl font-bold text-slate-900">Spotlight: Whole Genome Sequencing (WGS)</h2>
          </div>
          <div className="space-y-6 text-slate-700">
            <p className="text-lg">
              Whole Genome Sequencing (WGS) is now the <strong>first-line</strong> genetic test in the NHS for eligible children. Unlike older tests (like Microarray) that only looked at parts of the DNA, WGS reads your child's <strong>entire</strong> genetic code—all 3 billion letters—allowing it to find both structural changes (CNVs) and small spelling mistakes (SNVs) in one go.
            </p>
            
            {/* Virtual Panels Info Box */}
            <div className="bg-white p-6 rounded-xl border-l-4 border-indigo-500 shadow-sm">
               <h3 className="font-bold text-indigo-900 flex items-center mb-3">
                  <Filter className="h-5 w-5 mr-2 text-indigo-600" />
                  Important Concept: Virtual Panels
               </h3>
               <p className="text-sm leading-relaxed mb-4 text-slate-700">
                  Be aware that <strong>virtual panels of genes</strong> are used in clinical applications of WGS. This means that usually, even though all of the genome is sequenced, only those genes known to be associated with the patient’s features are usually analysed.
               </p>
               <p className="text-sm leading-relaxed text-slate-700">
                  Therefore, it’s important to remember that just because you have requested a test that is described as a WGS panel test, this does not usually mean that all of your patient’s genome has been checked – just those genes that are included on the panel.
               </p>
            </div>

            <div className="bg-white p-6 rounded-xl border-l-4 border-teal-500 shadow-sm">
               <h3 className="font-bold text-teal-800 flex items-center mb-3">
                  <Clock className="h-5 w-5 mr-2" />
                  Waiting Times: Expectation vs. Reality
               </h3>
               <p className="text-sm leading-relaxed mb-4 text-slate-700">
                  The official NHS Genomic Medicine Service target for WGS results is <strong>84 days</strong>. However, due to the extreme complexity of interpreting 3 billion letters of code and current high demand, it is very common for families to wait <strong>over 12 months</strong> for a result.
               </p>
               <p className="text-sm font-medium text-teal-700">
                  Please do not worry if you haven't heard back in a few months; this is standard for WGS.
               </p>
            </div>

            <div>
               <h3 className="font-bold text-slate-900 mb-4">Helpful Resources</h3>
               <div className="flex flex-col sm:flex-row gap-4">
                  <a 
                    href="https://www.england.nhs.uk/publication/whole-genome-sequencing-patient-information-leaflets/" 
                    target="_blank" 
                    rel="noopener noreferrer" 
                    className="flex items-center justify-center px-5 py-3 bg-white border border-slate-300 rounded-lg text-slate-700 font-medium hover:bg-slate-50 hover:border-teal-500 hover:text-teal-700 transition-all"
                  >
                     <FileText className="h-5 w-5 mr-2" />
                     NHS Patient Info Leaflets
                     <ExternalLink className="h-3 w-3 ml-2 opacity-50" />
                  </a>
                  <a 
                    href="https://youtu.be/e4DpZHn1kUQ?si=A5II8O3WU4J0yKyW" 
                    target="_blank" 
                    rel="noopener noreferrer" 
                    className="flex items-center justify-center px-5 py-3 bg-white border border-slate-300 rounded-lg text-slate-700 font-medium hover:bg-slate-50 hover:border-red-500 hover:text-red-600 transition-all"
                  >
                     <PlayCircle className="h-5 w-5 mr-2 text-red-600" />
                     Watch Explainer Video
                     <ExternalLink className="h-3 w-3 ml-2 opacity-50" />
                  </a>
               </div>
            </div>
          </div>
        </section>

        {/* HISTORY & STUDIES */}
        <section id="studies">
           <div className="flex items-center space-x-3 mb-8">
            <div className="bg-blue-100 p-2 rounded-lg">
                <Clock className="h-6 w-6 text-blue-600" />
            </div>
            <h2 className="text-3xl font-bold text-slate-900">Timeline of Genetic Discovery</h2>
          </div>
          
          <div className="relative border-l-4 border-blue-200 ml-4 space-y-10 py-2">
            {/* 1977 */}
            <div className="relative pl-8">
                <div className="absolute -left-2.5 top-1 w-5 h-5 bg-blue-500 rounded-full border-4 border-white ring-2 ring-blue-100"></div>
                <div className="flex flex-col sm:flex-row sm:items-center mb-1">
                    <span className="font-bold text-blue-700 mr-2">1977</span>
                    <h4 className="font-bold text-slate-900">The Twin Study Era</h4>
                </div>
                <p className="text-slate-600 text-sm">
                    Folstein & Rutter publish the first study showing identical twins are much more likely to share an autism diagnosis than fraternal twins. This was the pivot point that proved autism is <strong>biological and highly heritable</strong>, dispelling theories about "cold parenting".
                </p>
            </div>
            {/* 1990s */}
            <div className="relative pl-8">
                <div className="absolute -left-2.5 top-1 w-5 h-5 bg-blue-400 rounded-full border-4 border-white ring-2 ring-blue-100"></div>
                <div className="flex flex-col sm:flex-row sm:items-center mb-1">
                    <span className="font-bold text-blue-700 mr-2">1990s</span>
                    <h4 className="font-bold text-slate-900">Linkage Analysis Studies</h4>
                </div>
                <p className="text-slate-600 text-sm">
                    Scientists studied large families with multiple autistic members looking for "The Autism Gene". These studies were largely frustrating because they assumed one major gene was responsible. They eventually realized hundreds of genes were involved.
                </p>
            </div>
            {/* 2000s */}
            <div className="relative pl-8">
                <div className="absolute -left-2.5 top-1 w-5 h-5 bg-blue-400 rounded-full border-4 border-white ring-2 ring-blue-100"></div>
                <div className="flex flex-col sm:flex-row sm:items-center mb-1">
                    <span className="font-bold text-blue-700 mr-2">2005-2010</span>
                    <h4 className="font-bold text-slate-900">The Microarray Revolution (CNVs)</h4>
                </div>
                <p className="text-slate-600 text-sm">
                    New technology allowed labs to scan chromosomes for missing or extra chunks of DNA (Copy Number Variants). We discovered that rare deletions (like at chromosome 16p11.2) were a recurrent cause of autism, specifically in those with developmental delays.
                </p>
            </div>
             {/* 2010s */}
            <div className="relative pl-8">
                <div className="absolute -left-2.5 top-1 w-5 h-5 bg-blue-400 rounded-full border-4 border-white ring-2 ring-blue-100"></div>
                <div className="flex flex-col sm:flex-row sm:items-center mb-1">
                    <span className="font-bold text-blue-700 mr-2">2011-Present</span>
                    <h4 className="font-bold text-slate-900">Exome & Genome Sequencing (Trio Studies)</h4>
                </div>
                <p className="text-slate-600 text-sm">
                    The ability to read every letter of DNA cost-effectively led to "Trio Studies" (Testing Mum, Dad, and Child together). This proved the importance of <strong>De Novo variants</strong>—spontaneous errors in single genes (like <em>CHD8</em> or <em>SCN2A</em>) that aren't inherited but cause the condition.
                </p>
            </div>
          </div>
        </section>

         {/* TERMS GLOSSARY */}
        <section id="terms">
          <div className="flex items-center space-x-3 mb-6">
            <div className="bg-green-100 p-2 rounded-lg">
                <BookOpen className="h-6 w-6 text-green-600" />
            </div>
            <h2 className="text-3xl font-bold text-slate-900">Key Genetic Terms</h2>
          </div>
          <dl className="grid grid-cols-1 gap-x-6 gap-y-6 sm:grid-cols-2">
             <div className="bg-slate-50 p-5 rounded-xl border border-slate-100">
                <dt className="font-bold text-slate-900 flex items-center">
                    Phenotype
                </dt>
                <dd className="text-slate-600 text-sm mt-2">
                    The observable characteristics or traits of a person (e.g., developmental delay, blue eyes, seizures). In genetics, we compare the Genotype (DNA) to the Phenotype.
                </dd>
             </div>
             <div className="bg-slate-50 p-5 rounded-xl border border-slate-100">
                <dt className="font-bold text-slate-900">Pathogenic Variant</dt>
                <dd className="text-slate-600 text-sm mt-2">
                    A genetic change that is known to cause a specific condition or developmental issue. Historically called a "mutation".
                </dd>
             </div>
             <div className="bg-slate-50 p-5 rounded-xl border border-slate-100">
                <dt className="font-bold text-slate-900">Penetrance</dt>
                <dd className="text-slate-600 text-sm mt-2">
                    How likely a genetic change is to actually cause the condition. "Incomplete penetrance" means a parent could carry the same gene change as their child but appear unaffected or only have mild traits.
                </dd>
             </div>
              <div className="bg-slate-50 p-5 rounded-xl border border-slate-100">
                <dt className="font-bold text-slate-900">Variable Expressivity</dt>
                <dd className="text-slate-600 text-sm mt-2">
                    The phenomenon where the same genetic variant causes very different traits in different people—ranging from mild learning difficulties to autism and epilepsy.
                </dd>
             </div>
          </dl>
        </section>

        {/* VUS Section */}
        <section>
          <div className="flex items-center space-x-3 mb-6">
            <div className="bg-amber-100 p-2 rounded-lg">
                <AlertTriangle className="h-6 w-6 text-amber-600" />
            </div>
            <h2 className="text-3xl font-bold text-slate-900">Variants of Uncertain Significance (VUS)</h2>
          </div>
          <p className="text-slate-600 text-lg leading-relaxed">
            One of the most confusing outcomes for parents is a "VUS". This means the lab found a genetic change, but they don't know if it is the cause or if it's just normal human variation.
          </p>
          <div className="mt-6 bg-amber-50 border-l-4 border-amber-400 p-4 rounded-r-lg">
            <p className="text-amber-800">
              <strong>Important:</strong> A VUS is usually not acted upon clinically. It is kept on file, and as science advances, it may be reclassified in the future.
            </p>
          </div>
        </section>

        {/* Comprehensive FAQ Section */}
         <section id="faq">
          <div className="flex items-center space-x-3 mb-6">
            <div className="bg-teal-100 p-2 rounded-lg">
                <HelpCircle className="h-6 w-6 text-teal-600" />
            </div>
            <h2 className="text-3xl font-bold text-slate-900">Frequently Asked Questions</h2>
          </div>
          
          <div className="space-y-8">
            
            {/* Category: Genetics & Diagnosis */}
            <div>
                <h3 className="text-xl font-bold text-slate-800 mb-4 border-b border-slate-200 pb-2">Genetics & Diagnosis</h3>
                <div className="space-y-3">
                    <details className="group bg-slate-50 rounded-lg p-4 cursor-pointer border border-slate-100">
                        <summary className="font-semibold text-slate-800 list-none flex justify-between items-center">
                            Does a positive genetic result change my child’s autism diagnosis?
                            <span className="text-slate-400 group-open:rotate-180 transition-transform">▼</span>
                        </summary>
                        <p className="mt-3 text-slate-600 text-sm leading-relaxed">
                            No. Autism is diagnosed by behaviour. A genetic result provides an <em>explanation</em> (an etiology) for why the autism occurred, but it doesn't change the diagnosis or your child's personality.
                        </p>
                    </details>
                     <details className="group bg-slate-50 rounded-lg p-4 cursor-pointer border border-slate-100">
                        <summary className="font-semibold text-slate-800 list-none flex justify-between items-center">
                            If no specific genetic cause is found, what does that mean?
                            <span className="text-slate-400 group-open:rotate-180 transition-transform">▼</span>
                        </summary>
                        <p className="mt-3 text-slate-600 text-sm leading-relaxed">
                            A negative result does not mean the condition isn't genetic. It most likely means the cause is "Polygenic" (many small factors working together) which current clinical tests cannot measure. It simply means we haven't found a single, major "spelling mistake" in a gene.
                        </p>
                    </details>
                     <details className="group bg-slate-50 rounded-lg p-4 cursor-pointer border border-slate-100">
                        <summary className="font-semibold text-slate-800 list-none flex justify-between items-center">
                            How likely is it to find a specific cause?
                            <span className="text-slate-400 group-open:rotate-180 transition-transform">▼</span>
                        </summary>
                        <p className="mt-3 text-slate-600 text-sm leading-relaxed">
                            Current testing (WGS/Microarray) finds a clear answer in about 10-20% of children who meet the testing criteria (autism plus learning disability, epilepsy, or syndromic features).
                        </p>
                    </details>
                    {/* NEW: Gender Differences */}
                    <details className="group bg-slate-50 rounded-lg p-4 cursor-pointer border border-slate-100">
                        <summary className="font-semibold text-slate-800 list-none flex justify-between items-center">
                            Why are boys diagnosed with autism more often than girls?
                            <span className="text-slate-400 group-open:rotate-180 transition-transform">▼</span>
                        </summary>
                        <p className="mt-3 text-slate-600 text-sm leading-relaxed">
                            There is a biological theory called the "Female Protective Effect." Studies suggest that females may need a higher number of genetic factors (a higher genetic "load") before they exhibit autistic traits compared to males. Additionally, girls often present differently or mask their traits, leading to under-diagnosis.
                        </p>
                    </details>
                </div>
            </div>

            {/* Category: Myths & Environmental Factors (NEW) */}
             <div>
                <h3 className="text-xl font-bold text-slate-800 mb-4 border-b border-slate-200 pb-2">Myths & Environmental Factors</h3>
                <div className="space-y-3">
                    <details className="group bg-slate-50 rounded-lg p-4 cursor-pointer border border-slate-100">
                        <summary className="font-semibold text-slate-800 list-none flex justify-between items-center">
                            Did the MMR vaccine cause my child's autism?
                            <span className="text-slate-400 group-open:rotate-180 transition-transform">▼</span>
                        </summary>
                        <p className="mt-3 text-slate-600 text-sm leading-relaxed">
                            <strong>No.</strong> Extensive research worldwide involving millions of children has confirmed there is no link between vaccines (including MMR) and autism. Autism is a neurodevelopmental difference that often begins developing before birth.
                        </p>
                    </details>
                    <details className="group bg-slate-50 rounded-lg p-4 cursor-pointer border border-slate-100">
                        <summary className="font-semibold text-slate-800 list-none flex justify-between items-center">
                            Did I do something during pregnancy to cause this?
                            <span className="text-slate-400 group-open:rotate-180 transition-transform">▼</span>
                        </summary>
                        <p className="mt-3 text-slate-600 text-sm leading-relaxed">
                             It is very common for parents to worry about this, but autism is primarily biological and genetic. Stressful events during pregnancy, minor complications, or diet are rarely the sole cause of autism.
                        </p>
                    </details>
                </div>
            </div>


            {/* Category: Testing Process */}
            <div>
                <h3 className="text-xl font-bold text-slate-800 mb-4 border-b border-slate-200 pb-2">Testing Process & Practicalities</h3>
                <div className="space-y-3">
                    {/* NEW: Virtual Panels Question */}
                    <details className="group bg-slate-50 rounded-lg p-4 cursor-pointer border border-slate-100">
                        <summary className="font-semibold text-slate-800 list-none flex justify-between items-center">
                            Does WGS check every single gene?
                            <span className="text-slate-400 group-open:rotate-180 transition-transform">▼</span>
                        </summary>
                        <p className="mt-3 text-slate-600 text-sm leading-relaxed">
                            Technically, WGS <em>reads</em> every letter of the DNA, but clinically, it does not <em>analyse</em> every gene. It uses "Virtual Panels" to filter the data. This means clinical scientists only look at the specific list of genes known to be associated with your child's features (e.g. the Intellectual Disability panel). They do not go looking for unrelated conditions (like cancer risks) unless specifically requested.
                        </p>
                    </details>
                    <details className="group bg-slate-50 rounded-lg p-4 cursor-pointer border border-slate-100">
                        <summary className="font-semibold text-slate-800 list-none flex justify-between items-center">
                            What type of sample is needed?
                            <span className="text-slate-400 group-open:rotate-180 transition-transform">▼</span>
                        </summary>
                        <p className="mt-3 text-slate-600 text-sm leading-relaxed">
                            A blood sample is the gold standard for Whole Genome Sequencing (WGS) as it provides high-quality DNA. In some cases where blood draws are impossible due to extreme anxiety, saliva kits may be available, but you should check with your specific hospital.
                        </p>
                    </details>
                    <details className="group bg-slate-50 rounded-lg p-4 cursor-pointer border border-slate-100">
                        <summary className="font-semibold text-slate-800 list-none flex justify-between items-center">
                            Will the blood draw hurt my child?
                            <span className="text-slate-400 group-open:rotate-180 transition-transform">▼</span>
                        </summary>
                        <div className="mt-3 text-slate-600 text-sm leading-relaxed">
                            <p className="mb-2">
                                It involves a brief scratch/prick. You can ask your GP or the clinic for <strong>numbing cream</strong> (like EMLA) to apply beforehand.
                            </p>
                            <p>
                                To help prepare your child and reduce anxiety, resources like the book 
                                <a href="https://amzn.eu/d/3qm37z8" target="_blank" rel="noopener noreferrer" className="text-teal-600 hover:underline font-medium ml-1">
                                    "Zak's Blood Test"
                                </a> are highly recommended.
                            </p>
                        </div>
                    </details>
                </div>
            </div>

             {/* Category: Impact */}
            <div>
                <h3 className="text-xl font-bold text-slate-800 mb-4 border-b border-slate-200 pb-2">Impact of Results</h3>
                <div className="space-y-3">
                     <details className="group bg-slate-50 rounded-lg p-4 cursor-pointer border border-slate-100">
                        <summary className="font-semibold text-slate-800 list-none flex justify-between items-center">
                            Will having a genetic diagnosis affect school support?
                            <span className="text-slate-400 group-open:rotate-180 transition-transform">▼</span>
                        </summary>
                        <p className="mt-3 text-slate-600 text-sm leading-relaxed">
                            It can help. A specific medical diagnosis (e.g., "Phelan-McDermid Syndrome" rather than just "Global Delay") provides concrete evidence for EHCP assessments. It proves the difficulties are biological and lifelong, which can sometimes unlock funding for specific therapies.
                        </p>
                    </details>
                </div>
            </div>

            {/* Category: Family */}
            <div>
                <h3 className="text-xl font-bold text-slate-800 mb-4 border-b border-slate-200 pb-2">Heritability & Family</h3>
                <div className="space-y-3">
                     <details className="group bg-slate-50 rounded-lg p-4 cursor-pointer border border-slate-100">
                        <summary className="font-semibold text-slate-800 list-none flex justify-between items-center">
                            What is the chance of having another autistic child?
                            <span className="text-slate-400 group-open:rotate-180 transition-transform">▼</span>
                        </summary>
                        <p className="mt-3 text-slate-600 text-sm leading-relaxed">
                            If a "de novo" (new) genetic change is found, the likelihood is very low (usually &lt;1%). If no cause is found, the chance is based on empirical data: around 10-20% if you have one autistic child (Simplex), and 30-50% if you have two or more autistic children (Multiplex).
                        </p>
                    </details>
                     <details className="group bg-slate-50 rounded-lg p-4 cursor-pointer border border-slate-100">
                        <summary className="font-semibold text-slate-800 list-none flex justify-between items-center">
                            Can siblings also have the same genetic variant?
                            <span className="text-slate-400 group-open:rotate-180 transition-transform">▼</span>
                        </summary>
                        <p className="mt-3 text-slate-600 text-sm leading-relaxed">
                            It depends on the result. If the variant is "inherited" from a parent, siblings have a 50% chance of sharing it. If it is "de novo", siblings are unlikely to have it. Your genetic counsellor will guide you on whether siblings need testing.
                        </p>
                    </details>
                    {/* NEW: Broader Phenotype */}
                    <details className="group bg-slate-50 rounded-lg p-4 cursor-pointer border border-slate-100">
                        <summary className="font-semibold text-slate-800 list-none flex justify-between items-center">
                            I see similar traits in myself or my partner. Is this common?
                            <span className="text-slate-400 group-open:rotate-180 transition-transform">▼</span>
                        </summary>
                        <p className="mt-3 text-slate-600 text-sm leading-relaxed">
                            Yes, this is known as the <strong>"Broader Autism Phenotype"</strong>. It is common for family members to share certain personality traits, communication styles, or strengths (like attention to detail or preference for routine) without having an autism diagnosis themselves. This reflects the polygenic (multi-gene) nature of the condition running in families.
                        </p>
                    </details>
                </div>
            </div>

             {/* Category: Confidentiality */}
            <div>
                <h3 className="text-xl font-bold text-slate-800 mb-4 border-b border-slate-200 pb-2">Confidentiality</h3>
                <div className="space-y-3">
                     <details className="group bg-slate-50 rounded-lg p-4 cursor-pointer border border-slate-100">
                        <summary className="font-semibold text-slate-800 list-none flex justify-between items-center">
                            Who will have access to my child’s genetic information?
                            <span className="text-slate-400 group-open:rotate-180 transition-transform">▼</span>
                        </summary>
                        <p className="mt-3 text-slate-600 text-sm leading-relaxed">
                            Results are part of the medical record and are shared with the clinical team (paediatricians, GPs). They are treated with high confidentiality.
                        </p>
                    </details>
                     <details className="group bg-slate-50 rounded-lg p-4 cursor-pointer border border-slate-100">
                        <summary className="font-semibold text-slate-800 list-none flex justify-between items-center">
                            Will results affect insurance?
                            <span className="text-slate-400 group-open:rotate-180 transition-transform">▼</span>
                        </summary>
                        <p className="mt-3 text-slate-600 text-sm leading-relaxed">
                            In the UK, for diagnostic tests (tests done because a person has symptoms/condition), the result is part of the medical history and may need to be declared for life insurance if asked, just like any other medical diagnosis. However, there is a code of practice preventing the use of <em>predictive</em> genetic test results for policies under certain limits.
                        </p>
                    </details>
                </div>
            </div>

          </div>
        </section>

        {/* Useful Links & Resources */}
        <section id="resources" className="bg-slate-900 text-white rounded-3xl p-8 sm:p-12">
            <div className="flex items-center space-x-4 mb-8">
                <div className="bg-teal-500 p-3 rounded-xl">
                    <LinkIcon className="h-8 w-8 text-white" />
                </div>
                <div>
                    <h2 className="text-3xl font-bold">Trusted NHS & Government Resources</h2>
                    <p className="text-teal-200 mt-1">Verified information sources for UK families.</p>
                </div>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <a href="https://www.nhs.uk/conditions/autism/" target="_blank" rel="noopener noreferrer" className="group block bg-slate-800 hover:bg-slate-700 p-6 rounded-xl transition-all border border-slate-700 hover:border-teal-500">
                    <div className="flex justify-between items-start">
                        <h3 className="font-bold text-lg text-white group-hover:text-teal-300">NHS.uk - Autism Guide</h3>
                        <ExternalLink className="h-5 w-5 text-slate-500 group-hover:text-white" />
                    </div>
                    <p className="text-slate-400 text-sm mt-2">Comprehensive NHS guide on signs, diagnosis, and support.</p>
                </a>

                 <a href="https://www.genomicseducation.hee.nhs.uk/" target="_blank" rel="noopener noreferrer" className="group block bg-slate-800 hover:bg-slate-700 p-6 rounded-xl transition-all border border-slate-700 hover:border-teal-500">
                    <div className="flex justify-between items-start">
                        <h3 className="font-bold text-lg text-white group-hover:text-teal-300">NHS Genomics Education</h3>
                        <ExternalLink className="h-5 w-5 text-slate-500 group-hover:text-white" />
                    </div>
                    <p className="text-slate-400 text-sm mt-2">Detailed guides on Whole Genome Sequencing and patient leaflets.</p>
                </a>

                <a href="https://geneticalliance.org.uk/" target="_blank" rel="noopener noreferrer" className="group block bg-slate-800 hover:bg-slate-700 p-6 rounded-xl transition-all border border-slate-700 hover:border-teal-500">
                    <div className="flex justify-between items-start">
                        <h3 className="font-bold text-lg text-white group-hover:text-teal-300">Genetic Alliance UK</h3>
                        <ExternalLink className="h-5 w-5 text-slate-500 group-hover:text-white" />
                    </div>
                    <p className="text-slate-400 text-sm mt-2">The largest UK charity supporting individuals and families affected by genetic conditions.</p>
                </a>

                 <a href="https://www.rarechromo.org/" target="_blank" rel="noopener noreferrer" className="group block bg-slate-800 hover:bg-slate-700 p-6 rounded-xl transition-all border border-slate-700 hover:border-teal-500">
                    <div className="flex justify-between items-start">
                        <h3 className="font-bold text-lg text-white group-hover:text-teal-300">Unique - Rare Chromosome Support</h3>
                        <ExternalLink className="h-5 w-5 text-slate-500 group-hover:text-white" />
                    </div>
                    <p className="text-slate-400 text-sm mt-2">Support for families with rare chromosome disorders and CNVs.</p>
                </a>

                <a href="https://www.undiagnosed.org.uk/" target="_blank" rel="noopener noreferrer" className="group block bg-slate-800 hover:bg-slate-700 p-6 rounded-xl transition-all border border-slate-700 hover:border-teal-500">
                    <div className="flex justify-between items-start">
                        <h3 className="font-bold text-lg text-white group-hover:text-teal-300">SWAN UK</h3>
                        <ExternalLink className="h-5 w-5 text-slate-500 group-hover:text-white" />
                    </div>
                    <p className="text-slate-400 text-sm mt-2">Support for "Syndromes Without A Name" - families without a genetic diagnosis.</p>
                </a>

                <a href="https://www.autism.org.uk/" target="_blank" rel="noopener noreferrer" className="group block bg-slate-800 hover:bg-slate-700 p-6 rounded-xl transition-all border border-slate-700 hover:border-teal-500">
                    <div className="flex justify-between items-start">
                        <h3 className="font-bold text-lg text-white group-hover:text-teal-300">National Autistic Society</h3>
                        <ExternalLink className="h-5 w-5 text-slate-500 group-hover:text-white" />
                    </div>
                    <p className="text-slate-400 text-sm mt-2">UK's leading charity for autistic people and their families.</p>
                </a>
            </div>
        </section>

      </div>
    </div>
  );
};
