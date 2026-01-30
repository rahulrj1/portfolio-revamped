import React from 'react';

const Achievements = () => {
  return (
    <section id="achievements" className="py-20 bg-zinc-900 text-white">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl font-bold mb-12 text-center text-yellow-400">Achievements & Research</h2>
        
        <div className="grid md:grid-cols-2 gap-8 max-w-6xl mx-auto">
          {/* Achievements Column */}
          <div className="space-y-6">
            <h3 className="text-2xl font-semibold mb-6 text-gray-200 border-l-4 border-yellow-400 pl-4">Honors & Awards</h3>
            
            <div className="bg-black/40 p-6 rounded-xl border border-zinc-800 hover:border-yellow-400/30 transition-all">
              <h4 className="text-xl font-bold text-yellow-100 mb-2">ICPC 2021</h4>
              <p className="text-gray-400">Secured top 9.4% (Rank 471 out of 4990+ participating teams) in ICPC Preliminary Round.</p>
            </div>

            <div className="bg-black/40 p-6 rounded-xl border border-zinc-800 hover:border-yellow-400/30 transition-all">
              <h4 className="text-xl font-bold text-yellow-100 mb-2">MCM Scholarship</h4>
              <p className="text-gray-400">Consistently recognized among the top 10% students each semester, receiving the Merit-cum-Means Scholarship.</p>
            </div>

            <div className="bg-black/40 p-6 rounded-xl border border-zinc-800 hover:border-yellow-400/30 transition-all">
              <h4 className="text-xl font-bold text-yellow-100 mb-2">Competitive Programming</h4>
              <p className="text-gray-400">
                Solved 1K+ problems on LeetCode (<span className="text-yellow-400">rahul-rj</span>).<br/>
                Expert on Codeforces (<span className="text-yellow-400">rahul rj</span>).<br/>
                4* on CodeChef (<span className="text-yellow-400">rahul rj</span>).
              </p>
            </div>

            <div className="bg-black/40 p-6 rounded-xl border border-zinc-800 hover:border-yellow-400/30 transition-all">
              <h4 className="text-xl font-bold text-yellow-100 mb-2">Sports</h4>
              <p className="text-gray-400">Awarded Gold Medal on achieving 1st rank in chess competition at Intra-IIT Sports Meet.</p>
            </div>
          </div>

          {/* Research Column */}
          <div>
             <h3 className="text-2xl font-semibold mb-6 text-gray-200 border-l-4 border-blue-400 pl-4">Research Publication</h3>
             <div className="bg-black/40 p-8 rounded-xl border border-zinc-800 hover:border-blue-400/30 transition-all h-full">
                <h4 className="text-xl font-bold text-blue-100 mb-4 leading-relaxed">
                  LSTM Based Real-Time Transient Stability Assessment Using Synchrophasors
                </h4>
                <p className="text-gray-400 mb-4 italic">
                  A. Iqbal, Rahul Kumar, U. Soni and T. Jain
                </p>
                <p className="text-sm text-gray-500 mb-6">
                  Published in 2024 6th Global Power, Energy and Communication Conference (GPECOM), Budapest, Hungary.
                </p>
                <div className="inline-block px-4 py-2 bg-zinc-800 rounded text-sm text-gray-300 font-mono">
                  doi: 10.1109/GPECOM61896.2024.10582708
                </div>
             </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Achievements;
