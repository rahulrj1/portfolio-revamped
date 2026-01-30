import { Experience, Project, SkillCategory, Education, Achievement, Publication } from "@/types";

export const experiences: Experience[] = [
  {
    company: 'Ocrolus - Team Automation India',
    role: 'Software Engineer (Backend)',
    duration: 'Apr 2025 – Present',
    description: [
      'Owned the Template Parser Service (TPS) for automated bank statement processing, resolving critical client issues and improving extraction effectiveness to 90%+ for top-tier banks.',
      'Built RFB test suites in Java (Spring Boot) to continuously validate TPS behavior and trigger alerts on test failures.',
      'Designed and developed a RAG-based chatbot (Ollie) for CX support, implementing vector embeddings and LLM-based retrieval from data.',
      'Led end-to-end delivery of Ollie, including HLD, LLD, infrastructure setup, load testing, and production readiness.'
    ],
    logo: '', 
    color: '#3B82F6', 
    backgroundImage: 'https://images.unsplash.com/photo-1639322537228-f710d846310a?q=80&w=2232&auto=format&fit=crop'
  },
  {
    company: 'Zomato - Team OneSupport',
    role: 'SDE-I (Backend)',
    duration: 'Nov 2024 – Mar 2025',
    description: [
      'Worked on OneSupport, a backend SDK powering post-order support across Zomato, Blinkit, District, and Hyperpure.',
      'Led SDK integration into the Merchant KAM app, delivering features and fixes for rollout, improving ticket resolution metrics via automation.',
      'Played a key role in optimizing infra costs by $7,000+ p.m. through efficient data management: enabling SQS bulk fetching and archiving old MongoDB data.',
      'Resolved a critical authorization bug, preventing Vendor Managers from accessing tickets outside their scope, ensuring data privacy.'
    ],
    logo: '',
    color: '#E23744', 
    backgroundImage: 'https://images.unsplash.com/photo-1504674900247-0877df9cc836?q=80&w=2070&auto=format&fit=crop'
  },
  {
    company: 'Jio Platforms - Jio Edge Cloud',
    role: 'Software Development Engineer',
    duration: 'Aug 2023 – Oct 2024',
    description: [
      'Built backend services for the Jio Edge Cloud platform, including a datacenter management tool that reduced cluster provisioning time by 70%.',
      'Developed Go REST APIs backed by MongoDB, leveraging aggregation pipelines for efficient and scalable data access.',
      'Implemented fine-grained authorization using OpenFGA, enabling policy-driven access control across platform resources.',
      'Containerized backend services using Docker and deployed on K8s, across VM-based and containerized environments.'
    ],
    logo: '',
    color: '#0F52BA', 
    backgroundImage: 'https://images.unsplash.com/photo-1451187580459-43490279c0fa?q=80&w=2072&auto=format&fit=crop'
  }
];

export const projects: Project[] = [
  {
    title: 'Online Chess Platform',
    tech: ['ExpressJS', 'WebSockets', 'MongoDB', 'ReactJS', 'JWT', 'Bcrypt'],
    description: 'A real-time multiplayer chess platform engineered for low-latency gameplay and seamless state synchronization.',
    details: [
      'Architected a WebSocket-based event loop to handle real-time move validation and game state broadcasts with sub-50ms latency.',
      'Implemented a custom chess engine logic for move validation, checkmate detection, and illegal move prevention.',
      'Secured user sessions with JWT and HttpOnly cookies, ensuring persistent and safe gameplay experiences.',
      'Designed efficient MongoDB schemas to store game histories and replay data for post-match analysis.'
    ],
    link: 'https://github.com/rahulrj1',
    color: '#F59E0B' 
  },
  {
    title: 'Notes Managing Application',
    tech: ['Django', 'REST APIs', 'MySQL', 'Python'],
    description: 'A secure, scalable note-taking system designed for high availability and data consistency.',
    details: [
      'Built robust RESTful APIs using Django REST Framework to handle note creation, retrieval, and updates with granular permissions.',
      'Optimized MySQL database queries and indexed schema fields to ensure fast retrieval even with large datasets.',
      'Implemented token-based authentication to secure user data and private notes.',
      'Designed a modular architecture allowing for easy future extensions like sharing or collaboration features.'
    ],
    link: 'https://github.com/rahulrj1',
    color: '#10B981' 
  }
];

export const skills: Record<string, string[]> = {
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

export const education: Education = {
  institution: "Indian Institute of Technology Indore",
  degree: "B.Tech. in Electrical Engineering",
  duration: "Jul 2019 – May 2023",
  gpa: "Overall CGPA: 8.49"
};

export const contactInfo = {
  email: "rahuljas2050@gmail.com",
  phone: "+91-8058992101",
  linkedin: "https://linkedin.com/in/rahul-rj",
  github: "https://github.com/rahulrj1"
};

export const achievements: Achievement[] = [
  { 
    title: "ICPC 2021", 
    description: "Secured top 9.4% (Rank 471 out of 4990+ teams) in ICPC Preliminary Round.",
    color: "#EAB308" // Yellow
  },
  { 
    title: "MCM Scholarship", 
    description: "Consistently recognized among the top 10% students each semester at IIT Indore.",
    color: "#3B82F6" // Blue
  },
  { 
    title: "Competitive Programming", 
    description: "Solved 1K+ problems on LeetCode. Expert on Codeforces. 4* on CodeChef.",
    color: "#10B981" // Green
  },
  { 
    title: "Sports Gold Medal", 
    description: "Awarded Gold Medal on achieving 1st rank in chess competition at Intra-IIT Sports Meet.",
    color: "#F97316" // Orange
  }
];

export const publication: Publication = {
  title: "LSTM Based Real-Time Transient Stability Assessment Using Synchrophasors",
  authors: "A. Iqbal, Rahul Kumar, U. Soni and T. Jain",
  conference: "2024 6th Global Power, Energy and Communication Conference (GPECOM), Budapest, Hungary",
  year: "2024",
  doi: "10.1109/GPECOM61896.2024.10582708",
  link: "https://ieeexplore.ieee.org/document/10582708",
  description: "Proposed a data-driven model based on Long Short-Term Memory (LSTM) neural networks to identify the transient stability status of power systems in real-time."
};
