"use client";
import React from 'react';
import { motion } from 'framer-motion';
import { Award, BookOpen, Trophy, Star, Code, Terminal } from 'lucide-react';

const Achievements = () => {
  return (
    <section id="achievements" className="py-32 bg-black text-white relative">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,_rgba(255,255,255,0.03)_0%,_transparent_70%)]"></div>

      <div className="container mx-auto px-4 relative z-10">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-20"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-6 text-yellow-400">
            Achievements & Recognition
          </h2>
        </motion.div>
        
        <div className="grid md:grid-cols-2 gap-12 max-w-6xl mx-auto">
          {/* Achievements Column */}
          <div className="space-y-8">
            <h3 className="text-2xl font-bold mb-8 text-white flex items-center gap-3">
              <Trophy className="text-yellow-500" /> Honors & Awards
            </h3>
            
            {[
              { title: "ICPC 2021", desc: "Secured top 9.4% (Rank 471 out of 4990+ teams) in ICPC Preliminary Round.", icon: <Code className="text-yellow-400" /> },
              { title: "MCM Scholarship", desc: "Consistently recognized among the top 10% students each semester.", icon: <Star className="text-yellow-400" /> },
              { title: "Competitive Programming", desc: "Solved 1K+ problems on LeetCode. Expert on Codeforces. 4* on CodeChef.", icon: <Terminal className="text-yellow-400" /> },
              { title: "Sports Gold Medal", desc: "Awarded Gold Medal on achieving 1st rank in chess competition at Intra-IIT Sports Meet.", icon: <Award className="text-yellow-400" /> }
            ].map((item, index) => (
              <motion.div 
                key={index}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="bg-zinc-900/50 p-6 rounded-xl border border-zinc-800 hover:border-yellow-500/30 hover:bg-zinc-900 transition-all group"
              >
                <h4 className="text-xl font-bold text-gray-200 group-hover:text-yellow-400 transition-colors mb-2">{item.title}</h4>
                <p className="text-gray-400 leading-relaxed">{item.desc}</p>
              </motion.div>
            ))}
          </div>

          {/* Research Column */}
          <div>
            <h3 className="text-2xl font-bold mb-8 text-white flex items-center gap-3">
              <BookOpen className="text-blue-500" /> Research & Publications
            </h3>
             <motion.div 
               initial={{ opacity: 0, x: 20 }}
               whileInView={{ opacity: 1, x: 0 }}
               viewport={{ once: true }}
               className="bg-gradient-to-br from-blue-900/20 to-zinc-900 p-8 rounded-2xl border border-blue-500/20 hover:border-blue-500/40 transition-all h-full relative overflow-hidden group"
             >
                <div className="absolute top-0 right-0 p-32 bg-blue-500/10 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2 group-hover:bg-blue-500/20 transition-colors"></div>
                
                <div className="relative z-10">
                  <span className="inline-block px-3 py-1 bg-blue-500/10 text-blue-400 text-xs font-mono rounded-full mb-6 border border-blue-500/20">
                    IEEE Conference Paper
                  </span>
                  
                  <h4 className="text-2xl font-bold text-white mb-6 leading-tight">
                    LSTM Based Real-Time Transient Stability Assessment Using Synchrophasors
                  </h4>
                  
                  <div className="flex flex-col gap-4 text-gray-400 mb-8">
                    <p className="italic">
                      A. Iqbal, Rahul Kumar, U. Soni and T. Jain
                    </p>
                    <p className="text-sm border-l-2 border-zinc-700 pl-4">
                      Published in 2024 6th Global Power, Energy and Communication Conference (GPECOM), Budapest, Hungary.
                    </p>
                  </div>
                  
                  <a href="#" className="inline-flex items-center gap-2 text-blue-400 hover:text-blue-300 font-medium transition-colors group-hover:gap-3">
                    View Publication <span className="text-xl">&rarr;</span>
                  </a>
                </div>
             </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Achievements;
