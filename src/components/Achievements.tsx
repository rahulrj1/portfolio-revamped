"use client";
import React from 'react';
import { motion } from 'framer-motion';
import { achievements, publication } from '@/data/resume';
import { Trophy, Star, Code, Award, ExternalLink, BookOpen, Quote } from 'lucide-react';

const Achievements = () => {
  const getIcon = (title: string) => {
    if (title.includes('ICPC')) return <Code className="w-6 h-6" />;
    if (title.includes('Scholarship')) return <Star className="w-6 h-6" />;
    if (title.includes('Programming')) return <Terminal className="w-6 h-6" />;
    return <Trophy className="w-6 h-6" />;
  };

  return (
    <section id="achievements" className="py-32 bg-black text-white relative overflow-hidden">
      {/* Background Texture */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,_rgba(255,255,255,0.03),_transparent_70%)]"></div>
      
      <div className="container mx-auto px-4 relative z-10 max-w-6xl">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-20"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-4 bg-clip-text text-transparent bg-gradient-to-b from-white to-white/60">
            Recognition & Research
          </h2>
          <p className="text-gray-400 max-w-2xl mx-auto">
            Milestones that define my journey in engineering and innovation.
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-12 gap-8">
          
          {/* Research Publication - Featured Card (Span 7) */}
          <motion.div 
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="lg:col-span-7 flex flex-col"
          >
            <div className="relative h-full bg-zinc-900/30 border border-white/10 rounded-3xl p-8 overflow-hidden group hover:border-blue-500/30 transition-all duration-500">
              <div className="absolute top-0 right-0 w-64 h-64 bg-blue-500/10 rounded-full blur-[80px] -translate-y-1/2 translate-x-1/2 group-hover:bg-blue-500/20 transition-all duration-500"></div>
              
              <div className="relative z-10 flex flex-col h-full">
                <div className="flex items-center gap-3 mb-6">
                  <span className="px-3 py-1 bg-blue-500/10 text-blue-400 text-xs font-bold uppercase tracking-wider rounded-full border border-blue-500/20">
                    IEEE Publication
                  </span>
                  <div className="h-px bg-white/10 flex-1"></div>
                </div>

                <h3 className="text-2xl md:text-3xl font-bold text-white mb-4 leading-tight group-hover:text-blue-100 transition-colors">
                  {publication.title}
                </h3>

                <p className="text-gray-400 mb-6 leading-relaxed flex-grow">
                  {publication.description}
                </p>

                <div className="space-y-4 mb-8 text-sm">
                  <div className="flex items-start gap-2 text-gray-300">
                    <span className="text-blue-400 font-semibold">Authors:</span>
                    <span>{publication.authors}</span>
                  </div>
                  <div className="flex items-start gap-2 text-gray-300">
                    <span className="text-blue-400 font-semibold">Conference:</span>
                    <span className="italic">{publication.conference}</span>
                  </div>
                </div>

                <a 
                  href={publication.link} 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 text-blue-400 bg-blue-500/10 hover:bg-blue-500/20 border border-blue-500/20 hover:border-blue-500/50 px-6 py-3 rounded-xl font-medium transition-all w-fit group/btn mt-4"
                >
                  <BookOpen className="w-4 h-4" />
                  Read Research Paper
                  <ExternalLink className="w-4 h-4 ml-1 opacity-70 group-hover/btn:translate-x-0.5 group-hover/btn:-translate-y-0.5 transition-transform" />
                </a>
              </div>
            </div>
          </motion.div>

          {/* Achievements - Masonry Grid (Span 5) */}
          <div className="lg:col-span-5 grid grid-cols-1 gap-4">
            {achievements.map((item, index) => (
              <motion.div 
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="bg-zinc-900/30 border border-white/5 p-6 rounded-2xl hover:bg-white/5 transition-colors group"
              >
                <div className="flex items-start gap-4">
                  <div 
                    className="p-3 rounded-xl bg-zinc-900 border border-white/10 group-hover:scale-110 transition-transform duration-300"
                    style={{ color: item.color }}
                  >
                    {getIcon(item.title)}
                  </div>
                  <div>
                    <h4 className="text-lg font-bold text-white mb-1 group-hover:text-transparent group-hover:bg-clip-text group-hover:bg-gradient-to-r group-hover:from-white group-hover:to-gray-400 transition-all">
                      {item.title}
                    </h4>
                    <p className="text-sm text-gray-400 leading-relaxed">
                      {item.description}
                    </p>
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

// Helper import for icons
import { Terminal } from 'lucide-react';

export default Achievements;
