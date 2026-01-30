"use client";
import React, { useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import { projects } from '@/data/resume';
import { Github, ExternalLink, Code2, Layers, Cpu, ArrowUpRight } from 'lucide-react';

const Projects = () => {
  return (
    <section id="projects" className="bg-black text-white py-32 relative">
      <div className="container mx-auto px-4">
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-24 text-center"
        >
          <h2 className="text-5xl md:text-7xl font-bold mb-6 bg-clip-text text-transparent bg-gradient-to-r from-purple-400 via-pink-500 to-red-500">
            Featured Work
          </h2>
          <p className="text-gray-400 max-w-2xl mx-auto text-lg">
            Engineering robust solutions for complex problems.
          </p>
        </motion.div>

        <div className="space-y-32">
          {projects.map((project, index) => (
            <ProjectCard key={index} project={project} index={index} />
          ))}
        </div>
      </div>
    </section>
  );
};

const ProjectCard = ({ project, index }: { project: any; index: number }) => {
  const isEven = index % 2 === 0;
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["0 1", "1.2 1"]
  });
  
  const scale = useTransform(scrollYProgress, [0, 1], [0.8, 1]);
  const opacity = useTransform(scrollYProgress, [0, 0.5], [0.6, 1]);

  return (
    <motion.div 
      ref={ref}
      style={{ scale, opacity }}
      className={`flex flex-col lg:flex-row gap-12 lg:gap-20 items-center ${isEven ? '' : 'lg:flex-row-reverse'}`}
    >
      {/* Visual Side */}
      <div className="w-full lg:w-3/5 group perspective-1000">
        <div className="relative rounded-2xl overflow-hidden shadow-2xl transition-all duration-700 transform group-hover:rotate-x-2 group-hover:shadow-[0_20px_50px_rgba(0,0,0,0.5)] border border-white/10">
          <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent opacity-60 z-10"></div>
          
          {/* Project Image */}
          <div className="aspect-video overflow-hidden">
            <img 
              src={project.image} 
              alt={project.title} 
              className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-110"
            />
          </div>

          {/* Overlay Tech Badges */}
          <div className="absolute bottom-6 left-6 z-20 flex flex-wrap gap-2">
            {project.tech.map((tech: string, i: number) => (
              <span 
                key={i} 
                className="px-3 py-1 text-xs font-bold uppercase tracking-wider bg-black/60 backdrop-blur-md border border-white/10 rounded-full text-white shadow-lg"
              >
                {tech}
              </span>
            ))}
          </div>
        </div>
        
        {/* Artistic Accent */}
        <div 
          className={`absolute -inset-4 bg-gradient-to-r from-transparent via-${project.color}-500/20 to-transparent blur-2xl -z-10 opacity-0 group-hover:opacity-100 transition-opacity duration-700`}
          style={{ background: `radial-gradient(circle, ${project.color}20 0%, transparent 70%)` }}
        ></div>
      </div>

      {/* Content Side */}
      <div className="w-full lg:w-2/5 relative">
        <div className="absolute -left-10 top-0 text-9xl font-bold text-white/5 pointer-events-none select-none -translate-y-1/2 font-serif">
          0{index + 1}
        </div>
        
        <h3 className="text-4xl font-bold mb-6 text-white group-hover:text-purple-400 transition-colors">
          {project.title}
        </h3>
        
        <p className="text-xl text-gray-300 mb-8 leading-relaxed font-light">
          {project.description}
        </p>

        <div className="space-y-6 mb-10">
          {project.details?.map((detail: string, i: number) => (
            <div key={i} className="flex gap-4 group/item">
              <div 
                className="mt-1.5 w-1.5 h-1.5 rounded-full shrink-0 transition-colors duration-300"
                style={{ backgroundColor: project.color }}
              ></div>
              <p className="text-sm text-gray-400 leading-relaxed group-hover/item:text-gray-200 transition-colors">
                {detail}
              </p>
            </div>
          ))}
        </div>

        <div className="flex items-center gap-6">
          {project.link && (
            <a 
              href={project.link} 
              target="_blank" 
              rel="noopener noreferrer"
              className="group/btn flex items-center gap-3 px-6 py-3 bg-white text-black rounded-full font-bold transition-all hover:bg-gray-200 hover:scale-105"
            >
              <Github className="w-5 h-5" />
              <span>View Code</span>
              <ArrowUpRight className="w-4 h-4 transition-transform group-hover/btn:translate-x-1 group-hover/btn:-translate-y-1" />
            </a>
          )}
        </div>
      </div>
    </motion.div>
  );
};

export default Projects;
