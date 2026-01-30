export interface Experience {
  company: string;
  role: string;
  duration: string;
  description: string[];
  logo: string;
  color?: string;
  backgroundImage?: string;
}

export interface Project {
  title: string;
  tech: string[];
  description: string;
  details?: string[];
  link?: string;
  image?: string; // New field for project image
  color?: string; // New field for accent color
}

export interface SkillCategory {
  title: string;
  skills: string[];
}

export interface Achievement {
  title: string;
  description: string;
  details?: string; 
}

export interface Education {
  institution: string;
  degree: string;
  duration: string;
  gpa: string;
}

export interface SocialLink {
  name: string;
  url: string;
  icon?: string; 
}
