"use client";
import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { projects } from '@/data/resume';
import { Github, ArrowUpRight, Terminal, Cpu, Braces, Database } from 'lucide-react';

const Projects = () => {
  return (
    <section id="projects" className="bg-black text-white py-32 relative overflow-hidden">
      {/* Background Texture */}
      <div className="absolute inset-0 opacity-[0.03] bg-[url('https://grainy-gradients.vercel.app/noise.svg')] pointer-events-none"></div>
      
      <div className="container mx-auto px-4 relative z-10">
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-24 text-center"
        >
          <h2 className="text-5xl md:text-7xl font-bold mb-6 bg-clip-text text-transparent bg-gradient-to-br from-white via-zinc-400 to-zinc-700">
            Selected Works
          </h2>
          <p className="text-zinc-500 max-w-2xl mx-auto text-lg font-light tracking-wide">
            Architecting digital solutions with precision and scale.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 gap-12 max-w-5xl mx-auto">
          {projects.map((project, index) => (
            <ProjectCard key={index} project={project} index={index} />
          ))}
        </div>
      </div>
    </section>
  );
};

const ProjectCard = ({ project, index }: { project: any; index: number }) => {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <motion.div 
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.7, delay: index * 0.1 }}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      className="group relative w-full bg-zinc-900/30 border border-white/5 rounded-3xl overflow-hidden hover:border-white/10 transition-colors duration-500"
    >
      {/* Dynamic Ambient Glow */}
      <div 
        className="absolute -inset-[200px] opacity-0 group-hover:opacity-20 transition-opacity duration-700 blur-[100px] pointer-events-none"
        style={{ background: `radial-gradient(circle, ${project.color}, transparent 70%)` }}
      ></div>

      <div className="relative p-8 md:p-12 flex flex-col md:flex-row gap-12 items-stretch">
        
        {/* Abstract Visual Representation (Left) */}
        <div className="w-full md:w-1/3 flex-shrink-0 relative min-h-[200px] md:min-h-full rounded-2xl overflow-hidden bg-zinc-950/50 border border-white/5 flex items-center justify-center">
          {/* Animated Background Mesh */}
          <div className="absolute inset-0 opacity-20">
             <div className="absolute inset-0 bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-[size:16px_16px]"></div>
          </div>
          
          {/* Iconic Representation */}
          <motion.div 
            animate={{ 
              scale: isHovered ? 1.1 : 1,
              rotate: isHovered ? 5 : 0 
            }}
            transition={{ duration: 0.5, type: "spring" }}
            className="relative z-10 p-6 rounded-2xl bg-zinc-900 border border-white/10 shadow-2xl"
          >
            {index === 0 ? (
               <Cpu className="w-16 h-16" style={{ color: project.color }} />
            ) : (
               <Database className="w-16 h-16" style={{ color: project.color }} />
            )}
          </motion.div>

          {/* Decorative Glowing Lines */}
          <div className="absolute inset-0 overflow-hidden">
             <motion.div 
               className="absolute top-1/2 left-0 w-full h-[1px]"
               style={{ background: `linear-gradient(90deg, transparent, ${project.color}, transparent)` }}
               animate={{ x: ['-100%', '100%'] }}
               transition={{ duration: 3, repeat: Infinity, ease: "linear" }}
             />
          </div>
        </div>

        {/* Content (Right) */}
        <div className="flex-1 flex flex-col justify-between">
          <div>
            <div className="flex justify-between items-start mb-6">
              <h3 className="text-3xl md:text-4xl font-bold text-white group-hover:text-transparent group-hover:bg-clip-text group-hover:bg-gradient-to-r group-hover:from-white group-hover:to-zinc-400 transition-all duration-300">
                {project.title}
              </h3>
              <div className="flex gap-3">
                 <a 
                   href={project.link} 
                   target="_blank" 
                   rel="noopener noreferrer"
                   className="p-3 rounded-full bg-zinc-800/50 hover:bg-white text-zinc-400 hover:text-black transition-all duration-300"
                 >
                   <Github className="w-5 h-5" />
                 </a>
              </div>
            </div>

            <p className="text-zinc-400 text-lg leading-relaxed mb-8">
              {project.description}
            </p>

            <div className="space-y-4 mb-8">
              {project.details?.map((detail: string, i: number) => (
                <div key={i} className="flex items-start gap-3">
                  <Terminal className="w-5 h-5 mt-1 shrink-0 text-zinc-600 group-hover:text-white/50 transition-colors" />
                  <span className="text-sm text-zinc-500 group-hover:text-zinc-300 transition-colors">
                    {detail}
                  </span>
                </div>
              ))}
            </div>
          </div>

          {/* Tech Stack */}
          <div className="flex flex-wrap gap-2 pt-6 border-t border-white/5">
            {project.tech.map((tech: string, i: number) => (
              <span 
                key={i} 
                className="px-3 py-1 text-xs font-medium font-mono text-zinc-400 bg-zinc-900/50 border border-white/5 rounded hover:border-white/20 hover:text-white transition-colors cursor-default"
              >
                {tech}
              </span>
            ))}
          </div>
        </div>
      </div>
    </motion.div>
  );
};

export default Projects;
