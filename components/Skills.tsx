import React from 'react';

const skills = {
  "Languages & Frameworks": [
    "Go", "Python", "Java", "C/C++", "JavaScript", 
    "Spring Boot", "Flask", "ReactJS", "ExpressJS", "Django"
  ],
  "Backend & Systems": [
    "REST", "gRPC", "Microservices", "System Design",
    "Authentication (JWT, OAuth)", "Authorization (OpenFGA)",
    "Async Processing", "WebSockets"
  ],
  "Databases & Streaming": [
    "PostgreSQL", "MongoDB", "MySQL", "Redis", "Kafka"
  ],
  "AI & ML": [
    "LLM Integration", "RAG (Retrieval-Augmented Generation)", 
    "Vector Embeddings", "Vector Stores", "Prompt Engineering"
  ],
  "Infrastructure & Tools": [
    "Docker", "Kubernetes", "Linux", "Git", 
    "Logging & Monitoring", "Observability", "Cursor IDE"
  ]
};

const Skills = () => {
  return (
    <section id="skills" className="py-20 bg-zinc-900 text-white relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-green-500/5 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2"></div>
      
      <div className="container mx-auto px-4 relative z-10">
        <h2 className="text-4xl font-bold mb-4 text-center text-green-400">Technical Skills</h2>
        <p className="text-center text-gray-400 mb-12 max-w-2xl mx-auto">
          A comprehensive toolkit for building scalable, high-performance backend systems and AI-powered applications.
        </p>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {Object.entries(skills).map(([category, items]) => (
            <div key={category} className="bg-black/40 backdrop-blur-sm p-6 rounded-xl border border-zinc-800 hover:border-green-500/30 transition-all hover:-translate-y-1 duration-300">
              <h3 className="text-xl font-semibold mb-4 text-gray-100 border-l-4 border-green-500 pl-3">{category}</h3>
              <div className="flex flex-wrap gap-2">
                {items.map((skill, i) => (
                  <span key={i} className="px-3 py-1.5 bg-zinc-800/80 text-sm text-gray-300 rounded-md border border-zinc-700/50 hover:bg-zinc-700 hover:text-white transition-colors cursor-default">
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;
