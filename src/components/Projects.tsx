"use client";
import React, { useState, useRef } from 'react';
import { motion, useScroll, useTransform, useSpring, useMotionValue } from 'framer-motion';
import { projects } from '@/data/resume';
import { Github, Cpu, Database } from 'lucide-react';

const Projects = () => {
  return (
    <section id="projects" className="bg-black text-white py-24 relative overflow-hidden">
      {/* Ambient Background */}
      <div className="absolute inset-0 bg-black">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(255,255,255,0.02),transparent_50%)]"></div>
        <div className="absolute top-0 left-0 w-full h-full bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-[0.03]"></div>
      </div>

      <div className="container mx-auto px-4 relative z-20">
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-24 text-center"
        >
          <h2 className="text-4xl md:text-6xl font-bold tracking-tighter mb-4 text-white">
            Featured Projects
          </h2>
          <div className="h-1 w-16 bg-gradient-to-r from-blue-500 to-purple-500 mx-auto rounded-full"></div>
        </motion.div>

        <div className="flex flex-col gap-16">
          {projects.map((project, index) => (
            <ProjectCard key={index} project={project} index={index} />
          ))}
        </div>
      </div>
    </section>
  );
};

const ProjectCard = ({ project, index }: { project: any; index: number }) => {
  const ref = useRef<HTMLDivElement>(null);
  const [isHovered, setIsHovered] = useState(false);
  
  // 3D Tilt Logic
  const x = useMotionValue(0);
  const y = useMotionValue(0);
  const mouseX = useSpring(x, { stiffness: 150, damping: 20 });
  const mouseY = useSpring(y, { stiffness: 150, damping: 20 });

  function handleMouseMove(event: React.MouseEvent<HTMLDivElement>) {
    const rect = event.currentTarget.getBoundingClientRect();
    const width = rect.width;
    const height = rect.height;
    const xPct = (event.clientX - rect.left) / width - 0.5;
    const yPct = (event.clientY - rect.top) / height - 0.5;
    x.set(xPct);
    y.set(yPct);
  }

  function handleMouseLeave() {
    x.set(0);
    y.set(0);
    setIsHovered(false);
  }

  const rotateX = useTransform(mouseY, [-0.5, 0.5], ["3deg", "-3deg"]);
  const rotateY = useTransform(mouseX, [-0.5, 0.5], ["-3deg", "3deg"]);

  // Icon Selection
  const Icon = index === 0 ? Cpu : Database;

  return (
    <motion.div
      ref={ref}
      style={{
        rotateX,
        rotateY,
        transformStyle: "preserve-3d",
      }}
      onMouseMove={handleMouseMove}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={handleMouseLeave}
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-50px" }}
      transition={{ duration: 0.6 }}
      className="relative w-full max-w-5xl mx-auto group perspective-1000"
    >
      {/* Main Card */}
      <div className="relative overflow-hidden bg-zinc-900/40 backdrop-blur-xl border border-white/10 rounded-[1.5rem] p-8 md:p-10 transition-all duration-500 group-hover:border-white/20 group-hover:bg-zinc-900/60 shadow-xl">
        
        {/* Background Gradient & Effects */}
        <div 
          className="absolute inset-0 opacity-10 transition-opacity duration-700 group-hover:opacity-20"
          style={{ background: `radial-gradient(circle at 80% 50%, ${project.color}, transparent 60%)` }}
        ></div>
        
        {/* Giant Watermark Icon */}
        <div className="absolute -right-10 -bottom-10 text-white/5 transform rotate-12 transition-transform duration-700 group-hover:scale-105 group-hover:rotate-6 pointer-events-none">
          <Icon strokeWidth={0.5} size={300} />
        </div>

        {/* Content Layout */}
        <div className="relative z-10 flex flex-col h-full transform translate-z-20">
          
          {/* Header */}
          <div className="flex flex-col md:flex-row md:items-start justify-between gap-4 mb-6">
            <div className="space-y-1">
              <span className="font-mono text-xs text-zinc-500 tracking-widest uppercase">
                0{index + 1} / Project
              </span>
              <h3 className="text-3xl md:text-4xl font-bold text-white tracking-tight group-hover:text-transparent group-hover:bg-clip-text group-hover:bg-gradient-to-r group-hover:from-white group-hover:to-zinc-400 transition-all duration-300">
                {project.title}
              </h3>
            </div>
            
            <div className="flex gap-4">
              <a 
                href={project.link} 
                target="_blank" 
                rel="noopener noreferrer"
                className="flex items-center gap-2 px-5 py-2 rounded-full bg-white text-black text-sm font-bold hover:bg-zinc-200 transition-all transform hover:-translate-y-1"
              >
                <Github size={16} />
                <span>Source</span>
              </a>
            </div>
          </div>

          {/* Description */}
          <div className="max-w-3xl mb-8">
            <p className="text-lg text-zinc-300 font-light leading-relaxed">
              {project.description}
            </p>
          </div>

          {/* Details & Tech Stack */}
          <div className="grid md:grid-cols-2 gap-8 pt-8 border-t border-white/10">
            {/* Key Features */}
            <div className="space-y-4">
              <h4 className="font-mono text-xs text-zinc-500 uppercase tracking-widest">Key Engineering</h4>
              <ul className="space-y-2">
                {project.details?.map((detail: string, i: number) => (
                  <li key={i} className="flex items-start gap-2 text-zinc-400 group/item text-sm">
                    <span className="mt-1.5 w-1 h-1 rounded-full bg-zinc-600 group-hover/item:bg-white transition-colors shrink-0"></span>
                    <span className="leading-relaxed group-hover/item:text-zinc-200 transition-colors">
                      {detail}
                    </span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Stack */}
            <div className="space-y-4">
              <h4 className="font-mono text-xs text-zinc-500 uppercase tracking-widest">Technologies</h4>
              <div className="flex flex-wrap gap-2">
                {project.tech.map((tech: string, i: number) => (
                  <span 
                    key={i} 
                    className="px-2.5 py-1 text-xs font-mono text-zinc-400 border border-white/10 rounded bg-white/5 hover:bg-white/10 hover:border-white/20 hover:text-white transition-all cursor-default"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </div>
          </div>

        </div>
      </div>
    </motion.div>
  );
};

export default Projects;
