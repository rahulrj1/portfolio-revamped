import React from 'react';
import { experiences } from '@/data/resume';

const Experience = () => {
  return (
    <section id="experience" className="py-20 bg-zinc-900 text-white relative">
      <div className="container mx-auto px-4 relative z-10">
        <h2 className="text-4xl font-bold mb-16 text-center text-blue-400">Professional Experience</h2>
        <div className="relative border-l-2 border-zinc-700 ml-4 md:ml-10 space-y-16">
          {experiences.map((exp, index) => (
            <div key={index} className="relative pl-8 md:pl-12 group">
              {/* Timeline Dot */}
              <div className="absolute -left-[9px] top-0 w-5 h-5 bg-zinc-900 border-4 border-blue-500 rounded-full group-hover:bg-blue-500 transition-colors duration-300"></div>
              
              <div className="bg-black/50 backdrop-blur-sm p-8 rounded-xl border border-zinc-800 hover:border-blue-500/50 hover:shadow-[0_0_30px_-5px_rgba(59,130,246,0.15)] transition-all duration-300">
                <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-6 gap-2">
                  <div>
                    <h3 className="text-2xl font-bold text-white group-hover:text-blue-300 transition-colors">{exp.role}</h3>
                    <p className="text-lg text-gray-400 font-medium">{exp.company}</p>
                  </div>
                  <span className="shrink-0 text-sm font-mono bg-blue-500/10 text-blue-300 px-4 py-1.5 rounded-full border border-blue-500/20">
                    {exp.duration}
                  </span>
                </div>
                
                <ul className="space-y-3">
                  {exp.description.map((item, i) => (
                    <li key={i} className="flex items-start text-gray-300 leading-relaxed">
                      <span className="mr-3 mt-2 w-1.5 h-1.5 bg-blue-500 rounded-full shrink-0"></span>
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Experience;
