"use client";
import React from 'react';
import { motion } from 'framer-motion';
import { education } from '@/data/resume';
import { GraduationCap, MapPin } from 'lucide-react';

const Education = () => {
  return (
    <section id="education" className="py-20 bg-zinc-900 text-white relative border-t border-zinc-800">
      <div className="container mx-auto px-4">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="max-w-4xl mx-auto"
        >
          <div className="flex items-center gap-4 mb-12 justify-center">
            <div className="h-px bg-zinc-800 flex-1"></div>
            <h2 className="text-3xl font-bold text-center text-gray-200">Education</h2>
            <div className="h-px bg-zinc-800 flex-1"></div>
          </div>

          <div className="bg-black p-8 rounded-2xl border border-zinc-800 hover:border-zinc-700 transition-colors shadow-lg relative overflow-hidden group">
            <div className="absolute top-0 right-0 w-32 h-32 bg-purple-500/5 rounded-full blur-2xl -translate-y-1/2 translate-x-1/2 group-hover:bg-purple-500/10 transition-colors"></div>
            
            <div className="relative z-10 flex flex-col md:flex-row justify-between items-start md:items-center gap-6">
              <div className="flex items-start gap-4">
                <div className="p-3 bg-zinc-900 rounded-xl border border-zinc-800">
                  <GraduationCap className="w-8 h-8 text-white" />
                </div>
                <div>
                  <h3 className="text-2xl font-bold text-white mb-2">{education.institution}</h3>
                  <p className="text-lg text-gray-400 mb-2">{education.degree}</p>
                  <div className="flex items-center gap-2 text-sm text-gray-500">
                    <MapPin className="w-4 h-4" /> Indore, India
                  </div>
                </div>
              </div>
              
              <div className="flex flex-col items-end gap-2">
                <span className="px-4 py-2 bg-zinc-900 rounded-full text-sm font-mono text-gray-300 border border-zinc-800">
                  {education.duration}
                </span>
                <span className="text-sm font-semibold text-green-400 bg-green-400/10 px-3 py-1 rounded-full">
                  {education.gpa}
                </span>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Education;
