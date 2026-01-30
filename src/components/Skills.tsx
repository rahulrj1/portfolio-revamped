"use client";
import React from 'react';
import { motion } from 'framer-motion';
import { skills } from '@/data/resume';
import { BadgeCheck, Terminal, Cpu, Database, Cloud, Server } from 'lucide-react';

const Skills = () => {
  const container = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1
      }
    }
  };

  const item = {
    hidden: { opacity: 0, y: 20 },
    show: { opacity: 1, y: 0 }
  };

  const getIcon = (category: string) => {
    if (category.includes('Languages')) return <Terminal className="w-5 h-5 text-green-400" />;
    if (category.includes('Backend')) return <Server className="w-5 h-5 text-blue-400" />;
    if (category.includes('Database')) return <Database className="w-5 h-5 text-yellow-400" />;
    if (category.includes('AI')) return <Cpu className="w-5 h-5 text-purple-400" />;
    if (category.includes('Infrastructure')) return <Cloud className="w-5 h-5 text-cyan-400" />;
    return <BadgeCheck className="w-5 h-5 text-gray-400" />;
  };

  return (
    <section id="skills" className="py-32 bg-zinc-900 text-white relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-green-500/5 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2 pointer-events-none"></div>
      
      <div className="container mx-auto px-4 relative z-10">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-20"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-6 text-white">
            Technical Arsenal
          </h2>
          <p className="text-gray-400 max-w-2xl mx-auto text-lg">
            A comprehensive toolkit for building scalable, high-performance backend systems and AI-powered applications.
          </p>
        </motion.div>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {Object.entries(skills).map(([category, items], index) => (
            <motion.div 
              key={category}
              variants={container}
              initial="hidden"
              whileInView="show"
              viewport={{ once: true, margin: "-50px" }}
              className="bg-black/40 backdrop-blur-sm p-8 rounded-2xl border border-zinc-800 hover:border-zinc-700 transition-all hover:-translate-y-2 hover:shadow-2xl duration-300 group"
            >
              <div className="flex items-center gap-3 mb-6 border-b border-zinc-800 pb-4">
                <div className="p-2 bg-zinc-900 rounded-lg group-hover:bg-zinc-800 transition-colors">
                  {getIcon(category)}
                </div>
                <h3 className="text-xl font-bold text-gray-100 group-hover:text-white transition-colors">{category}</h3>
              </div>
              
              <div className="flex flex-wrap gap-2">
                {items.map((skill, i) => (
                  <motion.span 
                    key={i}
                    variants={item}
                    whileHover={{ scale: 1.05 }}
                    className="px-3 py-1.5 bg-zinc-800/50 text-sm text-gray-300 rounded-md border border-zinc-700/50 hover:bg-zinc-700 hover:text-white hover:border-zinc-600 transition-all cursor-default"
                  >
                    {skill}
                  </motion.span>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;
