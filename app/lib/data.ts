// ─────────────────────────────────────────────────────────────
//  Single source of truth for portfolio content.
//  Edit here; every section reads from this file.
// ─────────────────────────────────────────────────────────────

export const profile = {
  name: "Aniket Mestry",
  fullName: "Aniket Atmaram Mestry",
  role: "Full-Stack & Flutter Developer",
  location: "Vengurla, Maharashtra, India",
  timezone: "Asia/Kolkata",
  email: "aniketmestry2103@gmail.com",
  phone: "+91 82638 29478",
  github: "https://github.com/AniketMestry21",
  linkedin: "https://www.linkedin.com/in/aniket-mestry/",
  resumeUrl: "/Aniket-Mestry-CV.pdf",
  available: true,
  // Hero
  greeting: "Hi, I'm Aniket Mestry.",
  tagline:
    "Full-Stack & Flutter Developer at Vengurla Tech, turning ideas into well-architected products across web, mobile, and desktop — from Flutter clients on Clean Architecture to Node.js APIs and Next.js front-ends.",
  // About
  letter: [
    "I'm a Full-Stack and Flutter developer focused on building complete products — the mobile interface, the API behind it, and the data layer underneath.",
    "Over the past year at Vengurla Tech, I've delivered cross-platform applications end to end, with a strong emphasis on clean architecture, predictable state management, and secure authentication.",
    "I value maintainable, well-structured code and continually strengthen my fundamentals through data structures and algorithms.",
  ],
};

export const facts = [
  ["Role", "Full-Stack Developer, Vengurla Tech"],
  ["Experience", "1+ year building for production"],
  ["Location", "Vengurla, Maharashtra, India"],
  ["Education", "B.Tech in Computer Science, 2025"],
  ["Focus", "Clean Architecture & scalable systems"],
  ["Currently exploring", "Riverpod, secure auth, DSA"],
];

export type SkillGroup = {
  title: string;
  items: string[];
};

export const skillGroups: SkillGroup[] = [
  {
    title: "Languages",
    items: ["Dart", "JavaScript", "Java", "SQL", "C"],
  },
  {
    title: "Frontend",
    items: [
      "React.js",
      "Next.js",
      "HTML5",
      "CSS3",
      "Bootstrap",
      "jQuery",
      "Responsive / Mobile-First",
    ],
  },
  {
    title: "Mobile",
    items: ["Flutter", "Riverpod", "MVVM", "Clean Architecture"],
  },
  {
    title: "Backend",
    items: ["Node.js", "Next.js", "REST APIs", "PHP", "Express.js"],
  },
  {
    title: "Data & Services",
    items: ["MySQL", "MS SQL Server", "Firebase (FCM)", "JWT Auth"],
  },
  {
    title: "Tools & Practice",
    items: ["Git", "Postman", "OOP", "Design Principles", "Agile / SDLC"],
  },
];

// Compact ticker list for the marquee
export const marqueeSkills = [
  "Flutter",
  "Riverpod",
  "Clean Architecture",
  "Next.js",
  "React",
  "Node.js",
  "Express",
  "REST APIs",
  "JWT Auth",
  "Firebase",
  "MySQL",
  "MS SQL Server",
  "Dart",
  "TypeScript",
  "MVVM",
  "Git",
];

export type Experience = {
  role: string;
  company: string;
  location: string;
  period: string;
  current?: boolean;
  points: string[];
  stack: string[];
};

export const experience: Experience[] = [
  {
    role: "Full-Stack Developer",
    company: "Vengurla Tech",
    location: "Vengurla, Maharashtra",
    period: "Jun 2025 — Present",
    current: true,
    points: [
      "Developed 3+ cross-platform applications with Flutter, MVVM, and Clean Architecture (data / domain / presentation).",
      "Built and enhanced web applications using React, Next.js, Node.js, and Bootstrap.",
      "Integrated REST APIs, Firebase push notifications, and JWT authentication with refresh tokens.",
      "Implemented analytics dashboards and data-visualization features for sharper user insight.",
      "Collaborated in an Agile, cross-functional team using Git, Postman, and MySQL to ship maintainable software.",
    ],
    stack: ["Flutter", "React", "Next.js", "Node.js", "Firebase", "MySQL"],
  },
  {
    role: "Java Developer Intern",
    company: "WoRisGo",
    location: "Remote",
    period: "Mar 2025 — Apr 2025",
    points: [
      "Worked across Core Java — OOP, Collections, Multithreading, and Exception Handling.",
      "Developed Spring Boot applications with Maven for build and dependency management.",
      "Implemented Hibernate ORM over MySQL for efficient CRUD and database mapping.",
    ],
    stack: ["Java", "Spring Boot", "Hibernate", "Maven", "MySQL"],
  },
  {
    role: "Web Developer Intern",
    company: "Business Web Solutions",
    location: "Remote",
    period: "Oct 2022 — Dec 2022",
    points: [
      "Gained hands-on experience with HTML, CSS, JavaScript, jQuery, Bootstrap, React, Python, and Django.",
      "Built web applications and dynamic interfaces across both front-end and back-end.",
    ],
    stack: ["HTML", "CSS", "JavaScript", "React", "Django"],
  },
];

export type Project = {
  index: string;
  name: string;
  category: string;
  year: string;
  summary: string;
  highlights: string[];
  stack: string[];
  featured?: boolean;
  note?: string;
};

export const projects: Project[] = [
  {
    index: "01",
    name: "Vego",
    category: "Travel Agency Management",
    year: "2025",
    featured: true,
    summary:
      "A full-stack travel-agency management system that streamlines customer, driver, vehicle, and trip operations across mobile and backend.",
    highlights: [
      "Architected the Flutter client with Clean Architecture and Riverpod for scalable, testable code.",
      "Secured access with JWT auth, refresh tokens, encrypted local storage, and role-based control.",
      "Integrated Firebase Cloud Messaging, document uploads, and on-demand PDF report generation.",
      "Backed by a Node.js / Express API over Microsoft SQL Server.",
    ],
    stack: [
      "Flutter",
      "Dart",
      "Riverpod",
      "Node.js",
      "Express.js",
      "MS SQL Server",
      "JWT",
      "Firebase",
    ],
  },
  {
    index: "02",
    name: "Fake Product Identification",
    category: "Blockchain · Anti-Counterfeit",
    year: "2023",
    summary:
      "A blockchain-backed counterfeit-detection platform using QR authentication and immutable on-chain product records.",
    highlights: [
      "Stored product records immutably on Ethereum for tamper-proof verification.",
      "Built manufacturer registration, product management, and QR generation modules.",
      "Validated scanned QR data against the chain for real-time authenticity checks.",
    ],
    stack: ["PHP", "MySQL", "Web3.js", "Ethereum", "Ganache", "MetaMask"],
  },
];

export const education = {
  institution: "Dr. Babasaheb Ambedkar Technological University, Lonere",
  degree: "B.Tech in Computer Science",
  period: "Oct 2021 — May 2025",
  
};

export const navLinks = [
  { id: "about", label: "About" },
  { id: "skills", label: "Skills" },
  { id: "work", label: "Experience" },
  { id: "projects", label: "Projects" },
  { id: "contact", label: "Contact" },
];
