"use client";
import React, { useEffect, useState } from 'react';
import { motion, useMotionValue, useSpring, useTransform } from 'framer-motion';
import { Github, Linkedin, Mail, ArrowRight } from 'lucide-react';

const Hero = () => {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);

  // Smooth spring animation for mouse movement
  const springConfig = { damping: 20, stiffness: 100 };
  const springX = useSpring(mouseX, springConfig);
  const springY = useSpring(mouseY, springConfig);

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      const { clientX, clientY } = e;
      const { innerWidth, innerHeight } = window;
      const x = clientX / innerWidth;
      const y = clientY / innerHeight;
      
      setMousePosition({ x, y });
      mouseX.set(clientX - innerWidth / 2);
      mouseY.set(clientY - innerHeight / 2);
    };

    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, [mouseX, mouseY]);

  // Parallax for text
  const textX = useTransform(springX, [-500, 500], [-20, 20]);
  const textY = useTransform(springY, [-500, 500], [-20, 20]);

  return (
    <section className="relative min-h-screen flex flex-col justify-center items-center overflow-hidden bg-black text-white selection:bg-white/20">
      
      {/* 1. ARTISTIC BACKGROUND: "The Void & The Light" */}
      <div className="absolute inset-0 z-0">
        {/* Deep Atmospheric Base */}
        <div className="absolute inset-0 bg-black"></div>
        
        {/* Moving Spotlight / Aurora */}
        <motion.div 
          style={{ 
            x: springX, 
            y: springY,
          }}
          className="absolute top-1/2 left-1/2 w-[1000px] h-[1000px] bg-blue-600/10 rounded-full blur-[120px] -translate-x-1/2 -translate-y-1/2 mix-blend-screen pointer-events-none"
        />
        
        {/* Secondary Ambient Light (Contrast) */}
        <div className="absolute top-0 right-0 w-[800px] h-[800px] bg-purple-900/10 rounded-full blur-[150px] mix-blend-screen animate-pulse-slow"></div>
        <div className="absolute bottom-0 left-0 w-[600px] h-[600px] bg-indigo-900/10 rounded-full blur-[150px] mix-blend-screen animate-pulse-slow animation-delay-2000"></div>

        {/* Texture: Film Grain */}
        <div className="absolute inset-0 opacity-[0.08] bg-[url('https://grainy-gradients.vercel.app/noise.svg')] animate-grain pointer-events-none"></div>
      </div>

      {/* 2. MAIN COMPOSITION */}
      <div className="relative z-10 container mx-auto px-4 flex flex-col items-center justify-center text-center">
        
        {/* Artistic Name Reveal */}
        <motion.div 
          style={{ x: textX, y: textY }}
          className="relative mb-8 mix-blend-difference"
        >
          <motion.h1 
            initial={{ opacity: 0, letterSpacing: "1em", filter: "blur(20px)" }}
            animate={{ opacity: 1, letterSpacing: "-0.02em", filter: "blur(0px)" }}
            transition={{ duration: 1.5, ease: "circOut" }}
            className="text-[12vw] md:text-[10rem] font-bold leading-none tracking-tighter text-white select-none"
          >
            Rahul
          </motion.h1>
          <motion.h1 
            initial={{ opacity: 0, letterSpacing: "1em", filter: "blur(20px)" }}
            animate={{ opacity: 1, letterSpacing: "-0.02em", filter: "blur(0px)" }}
            transition={{ duration: 1.5, delay: 0.2, ease: "circOut" }}
            className="text-[12vw] md:text-[10rem] font-bold leading-none tracking-tighter text-zinc-500 select-none"
          >
            Kumar<span className="text-blue-500">.</span>
          </motion.h1>
        </motion.div>

        {/* Minimal Role Descriptor */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.8 }}
          className="flex items-center gap-6 mb-12"
        >
          <div className="h-px w-12 bg-zinc-700"></div>
          <span className="font-mono text-sm md:text-base text-zinc-400 tracking-[0.2em] uppercase">
            Backend Architect & System Designer
          </span>
          <div className="h-px w-12 bg-zinc-700"></div>
        </motion.div>

        {/* Elegant Call to Action */}
        <motion.div 
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 1.2 }}
          className="flex flex-col gap-8 items-center"
        >
          <a 
            href="#projects" 
            className="group flex items-center gap-4 text-white hover:text-blue-400 transition-colors duration-500"
          >
            <span className="text-lg font-medium tracking-wide border-b border-transparent group-hover:border-blue-400 transition-all">View Selected Works</span>
            <ArrowRight className="w-5 h-5 transform group-hover:translate-x-2 transition-transform duration-500" />
          </a>

          {/* Minimal Social Links */}
          <div className="flex gap-8 mt-4">
            <SocialLink href="https://github.com/rahulrj1" icon={<Github className="w-5 h-5" />} />
            <SocialLink href="https://linkedin.com/in/rahul-rj" icon={<Linkedin className="w-5 h-5" />} />
            <SocialLink href="mailto:rahuljas2050@gmail.com" icon={<Mail className="w-5 h-5" />} />
          </div>
        </motion.div>
      </div>

      {/* 3. SUBTLE FOOTER / MARQUEE */}
      <motion.div 
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 2, duration: 1 }}
        className="absolute bottom-0 w-full py-8 border-t border-white/5 bg-gradient-to-t from-black to-transparent"
      >
        <div className="flex overflow-hidden opacity-30 hover:opacity-100 transition-opacity duration-700">
           <div className="flex gap-16 animate-infinite-scroll w-max hover:pause pl-4">
            {techStack.map((tech, i) => (
              <span key={i} className="text-sm font-mono text-zinc-500 uppercase tracking-widest">
                {tech}
              </span>
            ))}
            {techStack.map((tech, i) => (
              <span key={`dup-${i}`} className="text-sm font-mono text-zinc-500 uppercase tracking-widest">
                {tech}
              </span>
            ))}
          </div>
        </div>
      </motion.div>

    </section>
  );
};

const SocialLink = ({ href, icon }: { href: string, icon: any }) => (
  <a 
    href={href}
    target="_blank"
    rel="noopener noreferrer"
    className="text-zinc-500 hover:text-white transition-colors duration-300 transform hover:scale-110"
  >
    {icon}
  </a>
);

const techStack = [
  "Distributed Systems", "Microservices", "System Design", "Kafka", "Redis", 
  "PostgreSQL", "MongoDB", "Docker", "Kubernetes", "AWS", "Go", "Python", 
  "GraphQL", "gRPC", "High Availability", "Fault Tolerance"
];

export default Hero;
