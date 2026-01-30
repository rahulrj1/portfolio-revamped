import { Experience, Project, SkillCategory, Education } from "@/types";

export const experiences: Experience[] = [
  {
    company: 'Ocrolus - Team Automation India (Remote)',
    role: 'Software Engineer (Backend)',
    duration: 'Apr 2025 – Present',
    description: [
      'Owned the Template Parser Service (TPS) for automated bank statement processing, resolving critical client issues and improving extraction effectiveness to 90%+ for top-tier banks.',
      'Built RFB test suites in Java (Spring Boot) to continuously validate TPS behavior and trigger alerts on test failures.',
      'Designed and developed a RAG-based chatbot (Ollie) for CX support, implementing vector embeddings and LLM-based retrieval from data.',
      'Led end-to-end delivery of Ollie, including HLD, LLD, infrastructure setup, load testing, and production readiness.'
    ]
  },
  {
    company: 'Zomato - Team OneSupport (Gurugram)',
    role: 'Software Development Engineer-I, Backend',
    duration: 'Nov 2024 – Mar 2025',
    description: [
      'Worked on OneSupport, a backend SDK powering post-order support across Zomato, Blinkit, District, and Hyperpure.',
      'Led SDK integration into the Merchant KAM (Key Accounts Manager) app, delivering features and fixes for rollout, improving ticket resolution metrics via automation-driven escalations.',
      'Played a key role in optimizing infra costs by $7,000+ p.m. through efficient data management: enabling SQS bulk fetching, adding pre-enqueue validations, merging low-usage workers, and archiving old MongoDB data.',
      'Resolved a critical authorization bug, preventing Vendor Managers from accessing tickets outside their scope, ensuring data privacy.'
    ]
  },
  {
    company: 'Jio Platforms - Team Jio Edge Cloud (Navi Mumbai)',
    role: 'Software Development Engineer',
    duration: 'Aug 2023 – Oct 2024',
    description: [
      'Built backend services for the Jio Edge Cloud platform, including a datacenter management tool that reduced cluster provisioning time by 70% by replacing manual workflows.',
      'Developed Go REST APIs backed by MongoDB, leveraging aggregation pipelines for efficient and scalable data access.',
      'Implemented fine-grained authorization using OpenFGA, enabling policy-driven access control across platform resources.',
      'Integrated Cisco APIC APIs to fetch switch metadata and expose it via internal backend services.',
      'Containerized backend services using Docker and deployed on K8s, across VM-based and containerized environments.'
    ]
  }
];

export const projects: Project[] = [
  {
    title: 'Online Chess Platform',
    tech: ['ExpressJS', 'WebSockets', 'MongoDB', 'ReactJS', 'JWT', 'Bcrypt'],
    description: 'Built a real-time multiplayer chess platform using WebSockets to enable low-latency 2-player gameplay.',
    details: [
      'Designed & implemented core chess engine logic with move validation, turn enforcement & illegal-move prevention.',
      'Implemented secure authentication using JWT and bcrypt, managing session state via HTTP cookies.',
      'Developed REST APIs using Express.js, persisting game state and user data in MongoDB schemas.'
    ],
    link: 'https://github.com/rahulrj1' 
  },
  {
    title: 'Notes Managing Application',
    tech: ['Django', 'REST APIs', 'MySQL'],
    description: 'Secure and scalable note creation, retrieval, updates, and deletion.',
    details: [
      'Built REST APIs using Django, enabling secure and scalable note creation, retrieval, updates, and deletion.',
      'Modeled relational data in MySQL with optimized queries and schema design to ensure data consistency and persistence.'
    ],
    link: 'https://github.com/rahulrj1'
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
