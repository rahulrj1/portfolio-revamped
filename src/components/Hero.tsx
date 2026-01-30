import React from 'react';

const Hero = () => {
  return (
    <section className="min-h-screen flex flex-col justify-center items-center relative overflow-hidden bg-black text-white pt-20">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-zinc-900 via-black to-black opacity-70"></div>
      
      {/* Grid Pattern Background */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#4f4f4f2e_1px,transparent_1px),linear-gradient(to_bottom,#4f4f4f2e_1px,transparent_1px)] bg-[size:14px_24px] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_0%,#000_70%,transparent_100%)]"></div>

      <div className="z-10 text-center px-4 max-w-4xl mx-auto">
        <div className="mb-6 inline-block">
          <span className="py-1 px-3 rounded-full bg-zinc-800/50 border border-zinc-700 text-sm text-blue-300 backdrop-blur-md">
            Backend & AI Engineer
          </span>
        </div>
        
        <h1 className="text-5xl md:text-8xl font-bold tracking-tight mb-8 bg-clip-text text-transparent bg-gradient-to-b from-white to-white/60 animate-fade-in-up">
          Rahul Kumar
        </h1>
        
        <p className="text-xl md:text-2xl text-gray-400 mb-10 max-w-2xl mx-auto leading-relaxed animate-fade-in-up animation-delay-200">
          Crafting robust backend systems and integrating intelligent AI solutions at scale. 
          Currently optimizing automation at <span className="text-blue-400">Ocrolus</span>.
        </p>
        
        <div className="flex flex-col sm:flex-row gap-4 justify-center animate-fade-in-up animation-delay-400">
          <a href="#projects" className="px-8 py-4 bg-white text-black font-bold rounded-lg hover:bg-gray-200 transition-all transform hover:scale-105 active:scale-95">
            View My Work
          </a>
          <a href="#contact" className="px-8 py-4 bg-transparent border border-zinc-700 text-white font-bold rounded-lg hover:bg-zinc-900 hover:border-zinc-500 transition-all">
            Get In Touch
          </a>
        </div>
      </div>

      {/* Abstract background elements */}
      <div className="absolute top-1/3 left-0 w-96 h-96 bg-blue-500/10 rounded-full blur-[100px] animate-pulse"></div>
      <div className="absolute bottom-0 right-0 w-96 h-96 bg-purple-500/10 rounded-full blur-[100px] animate-pulse delay-1000"></div>
    </section>
  );
};

export default Hero;
