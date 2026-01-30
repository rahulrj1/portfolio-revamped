"use client";
import React from 'react';
import { motion } from 'framer-motion';
import { projects } from '@/data/resume';
import { ExternalLink, Github, Code2, Database, Server } from 'lucide-react';

const Projects = () => {
  // Use abstract tech-themed images from Unsplash
  const projectImages = [
    "https://images.unsplash.com/photo-1555099962-4199c345e5dd?q=80&w=2070&auto=format&fit=crop", // Code/dark theme
    "https://images.unsplash.com/photo-1551288049-bebda4e38f71?q=80&w=2070&auto=format&fit=crop"  // Dashboard/analytics
  ];

  return (
    <section id="projects" className="py-32 bg-black text-white relative">
      <div className="container mx-auto px-4">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center mb-20"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-6 bg-clip-text text-transparent bg-gradient-to-r from-purple-400 to-pink-600">
            Featured Projects
          </h2>
          <p className="text-gray-400 max-w-2xl mx-auto text-lg">
            A selection of projects demonstrating full-stack capabilities and problem-solving skills.
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-10 max-w-7xl mx-auto">
          {projects.map((project, index) => (
            <motion.div 
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.2 }}
              className="group relative bg-zinc-900 rounded-3xl overflow-hidden border border-zinc-800 hover:border-purple-500/50 transition-all duration-500 hover:shadow-[0_0_50px_-10px_rgba(168,85,247,0.2)]"
            >
              {/* Project Image Area */}
              <div className="relative h-64 overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-t from-zinc-900 via-zinc-900/40 to-transparent z-10"></div>
                <img 
                  src={projectImages[index % projectImages.length]} 
                  alt={project.title}
                  className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-700"
                />
                
                {/* Floating Tech Badges */}
                <div className="absolute top-4 right-4 z-20 flex flex-wrap justify-end gap-2 max-w-[70%]">
                  {project.tech.slice(0, 3).map((t, i) => (
                    <span key={i} className="px-3 py-1 bg-black/60 backdrop-blur-md text-xs font-medium text-purple-300 rounded-full border border-purple-500/20">
                      {t}
                    </span>
                  ))}
                  {project.tech.length > 3 && (
                    <span className="px-3 py-1 bg-black/60 backdrop-blur-md text-xs font-medium text-gray-300 rounded-full border border-zinc-700">
                      +{project.tech.length - 3}
                    </span>
                  )}
                </div>
              </div>
              
              <div className="relative p-8 z-20 -mt-10">
                <div className="flex justify-between items-start mb-4">
                  <div>
                    <h3 className="text-3xl font-bold text-white group-hover:text-purple-400 transition-colors mb-2">
                      {project.title}
                    </h3>
                  </div>
                  {project.link && (
                    <a 
                      href={project.link} 
                      target="_blank" 
                      rel="noopener noreferrer" 
                      className="p-3 bg-white text-black rounded-full hover:bg-purple-400 transition-colors transform hover:rotate-12 hover:scale-110 shadow-lg"
                    >
                      <Github className="w-5 h-5" />
                    </a>
                  )}
                </div>
                
                <p className="text-gray-300 mb-8 leading-relaxed">
                  {project.description}
                </p>
                
                {project.details && (
                  <div className="space-y-4">
                    <h4 className="text-sm font-semibold text-gray-500 uppercase tracking-wider flex items-center gap-2">
                      <Code2 className="w-4 h-4" /> Key Features
                    </h4>
                    <ul className="space-y-3">
                      {project.details.map((detail, i) => (
                        <li key={i} className="flex items-start text-sm text-gray-400 group/item">
                          <span className="mr-3 mt-1.5 w-1.5 h-1.5 bg-zinc-600 rounded-full group-hover/item:bg-purple-500 transition-colors"></span>
                          {detail}
                        </li>
                      ))}
                    </ul>
                  </div>
                )}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
