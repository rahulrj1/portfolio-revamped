"use client";
import React from 'react';
import { motion } from 'framer-motion';
import { hobbies } from '@/data/resume';
import { cn } from '@/lib/utils';

const Hobbies = () => {
  return (
    <section id="hobbies" className="py-20 bg-black text-white relative border-t border-zinc-800">
      <div className="container mx-auto px-4 relative z-10">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="max-w-6xl mx-auto"
        >
          {/* Section Header - Matching other sections */}
          <div className="flex items-center gap-4 mb-16 justify-center">
            <div className="h-px bg-zinc-800 flex-1 max-w-[100px] md:max-w-xs"></div>
            <div className="text-center">
              <h2 className="text-3xl md:text-4xl font-bold text-gray-200 mb-2">Beyond Code</h2>
              <p className="text-gray-500 text-sm md:text-base font-light italic">
                &ldquo;Life is more fun when you have hobbies&rdquo;
              </p>
            </div>
            <div className="h-px bg-zinc-800 flex-1 max-w-[100px] md:max-w-xs"></div>
          </div>

          {/* Unified Grid Layout */}
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4">
            {hobbies.map((hobby, index) => (
              <UnifiedHobbyCard 
                key={hobby.name} 
                hobby={hobby} 
                index={index} 
              />
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};

const UnifiedHobbyCard = ({ hobby, index }: { hobby: any, index: number }) => {
  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.95 }}
      whileInView={{ opacity: 1, scale: 1 }}
      viewport={{ once: true }}
      transition={{ delay: index * 0.1 }}
      className="group relative h-full"
    >
      <div 
        className="relative h-full bg-zinc-900/80 rounded-2xl border p-6 flex flex-col items-center justify-between overflow-hidden transition-all duration-300 group-hover:-translate-y-1 hover:shadow-xl backdrop-blur-sm"
        style={{ 
          borderColor: `${hobby.color}20`, // 20% opacity border
        }}
      >
        
        {/* Permanent Subtle Background Tint */}
        <div 
          className="absolute inset-0 opacity-5 group-hover:opacity-10 transition-opacity duration-500 bg-gradient-to-b from-transparent to-current"
          style={{ color: hobby.color }}
        />
        
        {/* Top Glow Blob - Always visible but subtle */}
        <div 
          className="absolute -top-10 -right-10 w-24 h-24 rounded-full blur-3xl opacity-20 group-hover:opacity-40 transition-opacity duration-500"
          style={{ backgroundColor: hobby.color }}
        />

        {/* Icon Container */}
        <div className="relative z-10 mb-4 transform transition-transform duration-300 group-hover:scale-110">
          <span className="text-4xl filter drop-shadow-lg" style={{ textShadow: `0 0 20px ${hobby.color}40` }}>
            {hobby.icon}
          </span>
        </div>

        {/* Text Content */}
        <div className="relative z-10 text-center w-full">
          <h3 className="text-base font-bold text-gray-200 mb-2 group-hover:text-white transition-colors">
            {hobby.name}
          </h3>
          <p className="text-xs text-gray-500 font-medium leading-relaxed group-hover:text-gray-400 transition-colors">
            {hobby.description}
          </p>
        </div>

        {/* Bottom Color Bar */}
        <div 
          className="absolute bottom-0 left-0 w-full h-1 opacity-50 group-hover:opacity-100 transition-opacity duration-300"
          style={{ backgroundColor: hobby.color }}
        />
      </div>
    </motion.div>
  );
};

export default Hobbies;