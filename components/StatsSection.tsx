import React from 'react';
import { PieChart, Pie, Cell, ResponsiveContainer, Tooltip, Legend } from 'recharts';
import { HeartPulse, Baby, Users, GraduationCap, CheckCircle2 } from 'lucide-react';

export const StatsSection: React.FC = () => {
  const yieldData = [
    { name: 'Specific Genetic Cause Found', value: 20, fill: '#0d9488' },
    { name: 'No Specific Cause Found', value: 80, fill: '#e2e8f0' }
  ];

  return (
    <div className="py-12 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl font-bold text-slate-900 mb-8 text-center">Understanding the Numbers</h2>
        <p className="max-w-3xl mx-auto text-center text-slate-600 mb-12">
            Genetic testing is a tool, not a guarantee. It helps to set realistic expectations. Currently, in the UK, routine testing identifies a clear genetic cause in about 10-20% of autistic children.
        </p>

        {/* Charts Section */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 mb-16">
          
          {/* Chart 1: Yield */}
          <div className="bg-slate-50 p-6 rounded-2xl border border-slate-100 shadow-sm flex flex-col">
            <h3 className="text-xl font-semibold text-slate-800 mb-4 text-center">Likelihood of Finding a Specific Genetic Cause</h3>
            <div className="h-64 w-full shrink-0">
              <ResponsiveContainer width="100%" height="100%">
                <PieChart>
                  <Pie
                    data={yieldData}
                    cx="50%"
                    cy="50%"
                    innerRadius={60}
                    outerRadius={80}
                    paddingAngle={5}
                    dataKey="value"
                  >
                    {yieldData.map((entry, index) => (
                      <Cell key={`cell-${index}`} fill={entry.fill} />
                    ))}
                  </Pie>
                  <Tooltip 
                    contentStyle={{ borderRadius: '8px', border: 'none', boxShadow: '0 4px 6px -1px rgb(0 0 0 / 0.1)' }}
                  />
                  <Legend verticalAlign="bottom" height={36}/>
                </PieChart>
              </ResponsiveContainer>
            </div>
            <div className="mt-4 bg-white p-4 rounded-xl border border-slate-200 text-sm text-slate-600 space-y-3">
                <p>
                    <strong>What about the children without a specific genetic cause?</strong> <br/>
                    Most heritability is due to <strong>Polygenic Load</strong>—many individual variants inherited from our ancient lineage.
                </p>
                <p className="text-xs leading-relaxed text-slate-500">
                    Individually, these variants likely persisted because they provided survival advantages—contributing to traits like <strong>pattern recognition, excellent memory, and mathematical ability</strong>. However, a "coalescence" (coming together) of many of these variants in one person increases the likelihood of autism.
                </p>
            </div>
          </div>

          {/* List: Benefits (Replaced Bar Chart) */}
          <div className="bg-slate-50 p-6 rounded-2xl border border-slate-100 shadow-sm flex flex-col">
            <h3 className="text-xl font-semibold text-slate-800 mb-6 text-center">Reported Benefits for Families</h3>
            
            <div className="flex-1 flex flex-col justify-center px-4">
               <ul className="space-y-6">
                 <li className="flex items-start">
                    <CheckCircle2 className="h-6 w-6 text-teal-600 mt-0.5 mr-3 flex-shrink-0" />
                    <span className="text-slate-700 text-lg">Better medical care plans and monitoring for associated health issues.</span>
                 </li>
                 <li className="flex items-start">
                    <CheckCircle2 className="h-6 w-6 text-teal-600 mt-0.5 mr-3 flex-shrink-0" />
                    <span className="text-slate-700 text-lg">Clearer information about the chance of recurrence for future pregnancies.</span>
                 </li>
                 <li className="flex items-start">
                    <CheckCircle2 className="h-6 w-6 text-teal-600 mt-0.5 mr-3 flex-shrink-0" />
                    <span className="text-slate-700 text-lg">Access to specific support groups and communities.</span>
                 </li>
                 <li className="flex items-start">
                    <CheckCircle2 className="h-6 w-6 text-teal-600 mt-0.5 mr-3 flex-shrink-0" />
                    <span className="text-slate-700 text-lg">Stronger evidence for educational support and funding provisions.</span>
                 </li>
               </ul>
            </div>

            <div className="mt-8 flex flex-col items-center justify-center">
                <p className="text-sm text-slate-500 text-center px-4">
                    While a genetic diagnosis does not change who your child is, it can unlock specific pathways for care, education, and community support, providing clarity and direction for families.
                </p>
            </div>
          </div>
        </div>

        {/* Deep Dive / Examples Section */}
        <div className="border-t border-slate-200 pt-12">
            <h3 className="text-2xl font-bold text-slate-900 mb-8 text-center">Why does a diagnosis matter?</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                
                {/* Benefit 1: Clinical */}
                <div className="bg-white p-6 rounded-xl border border-slate-200 shadow-sm hover:shadow-md transition-shadow">
                    <div className="flex items-center mb-4">
                        <div className="bg-teal-100 p-2 rounded-lg mr-3">
                            <HeartPulse className="h-6 w-6 text-teal-700" />
                        </div>
                        <h4 className="text-lg font-bold text-slate-900">Better Care Plan</h4>
                    </div>
                    <p className="text-slate-600 text-sm mb-4">
                        Identifying a specific genetic condition allows doctors to look for and treat associated medical problems that might otherwise be missed.
                    </p>
                    <div className="bg-slate-50 border-l-4 border-teal-500 p-4 rounded-r-lg">
                        <p className="text-xs text-slate-700">
                            <strong>Example:</strong> In <em>Phelan-McDermid Syndrome</em> (caused by a deletion on chromosome 22), children may have kidney issues or regression in skills. Knowing the diagnosis means doctors will proactively scan kidneys and monitor development more closely, preventing complications.
                        </p>
                    </div>
                </div>

                {/* Benefit 2: Recurrence Risk */}
                <div className="bg-white p-6 rounded-xl border border-slate-200 shadow-sm hover:shadow-md transition-shadow">
                    <div className="flex items-center mb-4">
                        <div className="bg-purple-100 p-2 rounded-lg mr-3">
                            <Baby className="h-6 w-6 text-purple-700" />
                        </div>
                        <h4 className="text-lg font-bold text-slate-900">Recurrence Chance Info</h4>
                    </div>
                    <p className="text-slate-600 text-sm mb-4">
                        Finding a specific genetic cause can clarify if the likelihood for future children is low (a random event) or higher (inherited). If no cause is found, we rely on general population estimates rather than precise individual predictions.
                    </p>
                    <div className="bg-slate-50 border-l-4 border-purple-500 p-4 rounded-r-lg">
                        <p className="text-xs text-slate-700">
                            <strong>Example:</strong> If a child has a <em>de novo</em> (new) genetic change, the chance of having another affected child is very low (&lt;1%). However, if the child has a recessive condition where both parents are carriers, the chance is 25%. Knowing this distinction is vital for family planning.
                        </p>
                    </div>
                </div>

                {/* Benefit 3: Community */}
                <div className="bg-white p-6 rounded-xl border border-slate-200 shadow-sm hover:shadow-md transition-shadow">
                    <div className="flex items-center mb-4">
                        <div className="bg-blue-100 p-2 rounded-lg mr-3">
                            <Users className="h-6 w-6 text-blue-700" />
                        </div>
                        <h4 className="text-lg font-bold text-slate-900">Access to Support Groups</h4>
                    </div>
                    <p className="text-slate-600 text-sm mb-4">
                        Finding "your tribe" reduces isolation. You can connect with families dealing with the exact same challenges.
                    </p>
                    <div className="bg-slate-50 border-l-4 border-blue-500 p-4 rounded-r-lg">
                        <p className="text-xs text-slate-700">
                            <strong>Example:</strong> Organizations like <em>Unique</em> or <em>SWAN UK</em> (Syndromes Without A Name) connect families. If a child is diagnosed with <em>Fragile X</em>, the Fragile X Society can offer specific advice on support strategies that general autism advice might not cover.
                        </p>
                    </div>
                </div>

                {/* Benefit 4: Education */}
                <div className="bg-white p-6 rounded-xl border border-slate-200 shadow-sm hover:shadow-md transition-shadow">
                    <div className="flex items-center mb-4">
                        <div className="bg-indigo-100 p-2 rounded-lg mr-3">
                            <GraduationCap className="h-6 w-6 text-indigo-700" />
                        </div>
                        <h4 className="text-lg font-bold text-slate-900">School Support</h4>
                    </div>
                    <p className="text-slate-600 text-sm mb-4">
                        A medical diagnosis can sometimes act as stronger evidence for funding or specific educational provisions.
                    </p>
                    <div className="bg-slate-50 border-l-4 border-indigo-500 p-4 rounded-r-lg">
                        <p className="text-xs text-slate-700">
                            <strong>Example:</strong> A confirmed diagnosis can help in the EHCP (Education, Health and Care Plan) process by proving that a child's learning difficulties have a biological cause, potentially unlocking funding for specific therapies (like Speech and Language) that might otherwise be harder to access.
                        </p>
                    </div>
                </div>

            </div>
        </div>

      </div>
    </div>
  );
};