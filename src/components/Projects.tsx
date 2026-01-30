import React from 'react';
import { projects } from '@/data/resume';

const Projects = () => {
  return (
    <section id="projects" className="py-20 bg-black text-white relative">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl font-bold mb-12 text-center text-purple-400">Featured Projects</h2>
        <div className="grid lg:grid-cols-2 gap-8 max-w-6xl mx-auto">
          {projects.map((project, index) => (
            <div key={index} className="group relative flex flex-col bg-zinc-900/50 rounded-2xl overflow-hidden hover:-translate-y-2 transition-transform duration-300 border border-zinc-800">
              <div className="absolute inset-0 bg-gradient-to-br from-purple-500/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity"></div>
              
              <div className="p-8 relative z-10 flex-grow">
                <div className="flex justify-between items-start mb-4">
                  <h3 className="text-2xl font-bold text-white group-hover:text-purple-400 transition-colors">{project.title}</h3>
                  {project.link && (
                    <a href={project.link} target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-white transition-colors">
                      <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"/><polyline points="15 3 21 3 21 9"/><line x1="10" y1="14" x2="21" y2="3"/></svg>
                    </a>
                  )}
                </div>
                
                <div className="flex flex-wrap gap-2 mb-6">
                  {project.tech.map((t, i) => (
                    <span key={i} className="px-3 py-1 bg-purple-500/10 text-xs font-medium text-purple-300 rounded-full border border-purple-500/20">
                      {t}
                    </span>
                  ))}
                </div>
                
                <p className="text-gray-300 mb-6 font-medium">{project.description}</p>
                
                {project.details && (
                  <ul className="space-y-2 mb-6">
                    {project.details.map((detail, i) => (
                      <li key={i} className="flex items-start text-sm text-gray-400">
                        <span className="mr-2 mt-1.5 w-1 h-1 bg-purple-500 rounded-full shrink-0"></span>
                        {detail}
                      </li>
                    ))}
                  </ul>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
