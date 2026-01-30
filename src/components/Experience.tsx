"use client";
import React from 'react';
import { motion } from 'framer-motion';
import { experiences } from '@/data/resume';
import { Briefcase, Calendar } from 'lucide-react';

const Experience = () => {
  return (
    <section id="experience" className="py-32 bg-zinc-950 text-white relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-blue-500/5 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2 pointer-events-none"></div>
      <div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-purple-500/5 rounded-full blur-3xl translate-y-1/2 -translate-x-1/2 pointer-events-none"></div>

      <div className="container mx-auto px-4 relative z-10">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center mb-20"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-6 bg-clip-text text-transparent bg-gradient-to-r from-blue-400 to-purple-600">
            Professional Journey
          </h2>
          <p className="text-gray-400 max-w-2xl mx-auto text-lg">
            Building scalable solutions and optimizing backend infrastructure at leading tech companies.
          </p>
        </motion.div>

        <div className="relative max-w-4xl mx-auto">
          {/* Vertical Line */}
          <div className="absolute left-[20px] md:left-1/2 top-0 bottom-0 w-0.5 bg-gradient-to-b from-blue-500/50 via-purple-500/50 to-transparent transform md:-translate-x-1/2"></div>

          <div className="space-y-12">
            {experiences.map((exp, index) => (
              <motion.div 
                key={index}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className={`relative flex flex-col md:flex-row gap-8 ${
                  index % 2 === 0 ? 'md:flex-row-reverse' : ''
                }`}
              >
                {/* Timeline Node */}
                <div className="absolute left-[20px] md:left-1/2 top-0 w-10 h-10 bg-zinc-900 border-4 border-blue-500 rounded-full z-20 transform -translate-x-1/2 flex items-center justify-center shadow-[0_0_15px_rgba(59,130,246,0.5)]">
                  <Briefcase className="w-4 h-4 text-blue-400" />
                </div>

                {/* Content Card */}
                <div className="ml-12 md:ml-0 md:w-1/2 pt-2 md:pt-0">
                  <div className={`
                    relative p-8 rounded-2xl border border-zinc-800 bg-zinc-900/50 backdrop-blur-sm 
                    hover:bg-zinc-900 hover:border-blue-500/30 transition-all duration-300 group
                    ${index % 2 === 0 ? 'md:mr-12' : 'md:ml-12'}
                  `}>
                    {/* Glow Effect */}
                    <div className="absolute inset-0 bg-gradient-to-br from-blue-500/5 to-purple-500/5 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                    
                    <div className="relative z-10">
                      <div className="flex flex-col gap-2 mb-4">
                        <h3 className="text-2xl font-bold text-white group-hover:text-blue-400 transition-colors">
                          {exp.role}
                        </h3>
                        <div className="flex flex-wrap items-center gap-3 text-sm">
                          <span className="font-semibold text-gray-300">{exp.company}</span>
                          <span className="w-1 h-1 bg-gray-500 rounded-full"></span>
                          <span className="flex items-center gap-1 text-gray-400 font-mono bg-zinc-800/50 px-2 py-1 rounded">
                            <Calendar className="w-3 h-3" />
                            {exp.duration}
                          </span>
                        </div>
                      </div>
                      
                      <ul className="space-y-3">
                        {exp.description.map((item, i) => (
                          <li key={i} className="flex items-start text-gray-400 leading-relaxed text-sm">
                            <span className="mr-3 mt-1.5 w-1.5 h-1.5 bg-blue-500 rounded-full shrink-0 shadow-[0_0_8px_rgba(59,130,246,0.8)]"></span>
                            <span>{item}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Experience;
