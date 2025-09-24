import { ReactElement } from "react";
import { FaGithub, FaLinkedin, FaFacebook, FaInstagram, } from "react-icons/fa";

export const socials: Social[] = [
  { url: "https://github.com/datawithmahesh", icon: <FaGithub />, name: "GitHub" },
  { url: "https://www.linkedin.com/in/mahesh-thapa-001b36364/", icon: <FaLinkedin />, name: "LinkedIn" },
  { url: "https://www.facebook.com/maheshthapa01", icon: <FaFacebook />, name: "Facebook" },
  { url: "https://www.instagram.com/iamaheshh_/", icon: <FaInstagram />, name: "Instagram" },
];

// EDIT FROM HERE


export const desc= 'Cybersecurity Analyst';
export const logo = '/logo.jpg'; // place logo.svg in /public
export const profile = '/profile.jpg'; // place profile.jpg in /public
export const name = 'Mahesh Bahadur Thapa';
export const tagline = 'Computer Engineer · Enthusiastic Data Scientist';
export const homeDesc='I am a Computer Engineer and Enthusiastic Data Scientist '

export const about = `
I am a Computer Engineer and Enthusiastic Data Scientist 
`;


export const contact: Contact = {
  email: 'maheshthapa3150@gmail.com',
  phone: '+977-9840776800',
  website: 'https://jagatsaund.com.np',
  location: 'Kathmandu, Nepal',
};



export const resumeUrl = 'https://drive.google.com/file/d/1mMu8qKet6n7-Dj3bIv5BcRSitah00S-_/view?usp=sharing'; // place resume.pdf in /public or use external URL

// -------------------------
// SEO
// -------------------------
export const seo: Seo = {
  title: `${name} — Portfolio`,
  description:
    'Portfolio of Mahesh Bahadur Thapa — Computer Engineer and Enthusiastic Data Scientist. Projects, skills, and contact information.',
  keywords: ['portfolio', 'AI Enthusiastic', 'computer engineer', 'Data Scientist', 'Mahesh Bahadur Thapa'],
  image: profile,
  siteUrl: 'https://your-domain.com',
};



// -------------------------
// Skills
// -------------------------
export const skills: Skill[] = [
  { name: 'Pandas', category: 'Data Analysis', level: 'Advanced', years: 0.5 },
  { name: 'SQL', category: 'Data Analyst', level: 'Advanced', years: 0.5 },
  {name: 'Excel', category: 'Data Analyst', level: 'Beginner', years:0.5},
  { name: 'Machine Learning', category: 'Data Science', level: 'Intermediate', years: 2 },
];

export interface Certification {
  id: string;
  title: string;
  issuer: string;
  date: string; // YYYY-MM or formatted
  credentialUrl?: string;
}
export const certifications: Certification[] = [
  // {
  //   id: '1',
  //   title: 'Introduction to Cybersecurity',
  //   issuer: 'CISCO Networking Academy',
  //   date: '2025-09',
  //   credentialUrl: 'https://drive.google.com/file/d/1eryC_9r_xx7-o26UausS5JYeuw9UFe8L/view?usp=sharing',
  // },
  //   {
  //   id: '2',
  //   title: 'Cybersecurity Basics',
  //   issuer: 'Cybrary',
  //   date: '2025-08',
  //   credentialUrl: 'https://drive.google.com/file/d/1SG6y7g48RRwl_pn_5iRebtS_YdG0nPfu/view?usp=sharing',
  // },
  // {  
  // id: '3',
  //   title: 'Ethical Hacker',
  //   issuer: 'CISCO Networking Academy',
  //   date: '2025-09',
  //   credentialUrl: 'https://drive.google.com/file/d/1O2JhB6up_9KHKsN-8d0eRwWV7EKS8GgH/view?usp=sharing',
  // },
  
];

// -------------------------
// Projects — add/remove as needed
// -------------------------
export const projects: Project[] = [

  // {
  //   id: 'project-pentest-lab',
  //   title: 'Pentest Lab Automation',
  //   slug: 'pentest-lab',
  //   shortDescription: 'Automation scripts and Vagrant setups to create reproducible pentest labs for training.',
  //   images: ['https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSTYlslbm-HoOgl-lgR2pSaoR7ZV-dmEZWZ4A&s', 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS-xripvZnkOB_lg58VHa5KuDHZ_n9nz0puAw&s'],
  //   repoUrl: 'https://github.com/your-username/pentest-lab',
  //   tech: ['Bash', 'Vagrant', 'Docker', 'Ansible'],
  //   year: 2023,
  // },
  // {
  //   id: 'project-portfolio',
  //   title: 'This Portfolio (Starter)',
  //   slug: 'portfolio',
  //   shortDescription: "This Next.js + TypeScript portfolio template you're using right now.",
  //   images: ['/projects/portfolio-1.png'],
  //   repoUrl: 'https://github.com/your-username/portfolio',
  //   tech: ['Next.js', 'TypeScript', 'Tailwind'],
  //   year: 2025,
  // },
];

// -------------------------
// Experience
// -------------------------
export const experiences: Experience[] = [
  // {
  //   id: 'exp-jyoti-bank-isa',
  //   role: 'Information Security Analyst (Junior Assistant)',
  //   company: 'Jyoti Bikash Bank Ltd.',
  //   startDate: '2025-01-06',
  //   endDate: 'Present',
  //   location: 'Kathmandu, Nepal',
  //   description:
  //     'Working on day-to-day monitoring, SOC alerts triage, assisting with compliance and vulnerability management.',
  //   bullets: [
  //     'Triage security alerts and create incident tickets',
  //     'Perform periodic vulnerability scans and report findings',
  //     'Assist with security awareness activities for staff',
  //   ],
  // },
  // {
  //   id: 'exp-intern-cyber',
  //   role: 'Cybersecurity Intern',
  //   company: 'TechSecure Pvt. Ltd.',
  //   startDate: '2024-06-01',
  //   endDate: '2024-12-31',
  //   location: 'Kathmandu, Nepal',
  //   description:
  //     'Worked on penetration testing, vulnerability assessments, and automation scripts for internal security projects.',
  //   bullets: [
  //     'Conducted network vulnerability scans using Nmap and Nessus',
  //     'Prepared security reports for management',
  //     'Assisted in implementing SIEM dashboards (Wazuh)',
  //   ],
  // },
  //     {
  //   id: 'exp-jyoti-bank-isa3',
  //   role: 'Information Security Analyst (Junior Assistant)',
  //   company: 'Jyoti Bikash Bank Ltd.',
  //   startDate: '2025-01-06',
  //   endDate: 'Present',
  //   location: 'Kathmandu, Nepal',
  //   description:
  //     'Working on day-to-day monitoring, SOC alerts triage, assisting with compliance and vulnerability management.',
  //   bullets: [
  //     'Triage security alerts and create incident tickets',
  //     'Perform periodic vulnerability scans and report findings',
  //     'Assist with security awareness activities for staff',
  //   ],
  // },
];

// -------------------------
// Education
// -------------------------
export const education: Education[] = [
  {
    id: 'edu-be',
    school:'National Academy of Science and Technology',
    location: 'Dhangadhi, Nepal',
    university:'Pokhara University',
    degree: 'B.E. Computer Engineering',
    startDate: '2018',
    endDate: '2024',
    description: 'Focused on systems, networks and security-related coursework.',
  },
  //   {
  //   id: 'edu-isc',
  //   school:'National Academy of Science and Technology',
  //   location: 'Dhangadhi, Nepal',
  //   university:'Pokhara University',
  //   degree: 'B.E. Computer Engineering',
  //   startDate: '2018',
  //   endDate: '2025',
  //   description: 'Focused on systems, networks and security-related coursework.',
  // },
  //   {
  //   id: 'edu-slc',
  //   school:'National Academy of Science and Technology',
  //   location: 'Dhangadhi, Nepal',
  //   university:'Pokhara University',
  //   degree: 'B.E. Computer Engineering',
  //   startDate: '2018',
  //   endDate: '2025',
  //   description: 'Focused on systems, networks and security-related coursework.',
  // },

];














export interface Social {
  url: string;
  icon: ReactElement;
  name?: string; // optional
}


export interface Contact {
  email?: string;
  phone?: string;
  website?: string;
  location?: string;
}

export interface Seo {
  title: string;
  description: string;
  keywords?: string[];
  image?: string; // path to image (e.g. /og-image.png)
  siteUrl?: string;
}

export interface NavLink {
  id: string; // used for anchors: #projects
  label: string;
  href?: string; // optional full href
}

export interface Project {
  id: string;
  title: string;
  slug?: string; // optional friendly url
  shortDescription: string;
  longDescription?: string;
  images?: string[]; // paths relative to /public
  demoUrl?: string;
  repoUrl?: string;
  tech?: string[];
  year?: number;
  featured?: boolean;
  tags?: string[];
}

export interface Skill {
  name: string;
  category?: string; // e.g. "Frontend", "Security"
  level?: 'Beginner' | 'Intermediate' | 'Advanced' | 'Expert' | number; // optional numeric percent
  years?: number;
}

export interface Experience {
  id: string;
  role: string;
  company: string;
  startDate: string; // ISO (YYYY-MM) recommended
  endDate?: string; // 'Present' or ISO
  location?: string;
  description?: string;
  bullets?: string[];
}

export interface Education {
  id: string;
  school: string;
  university: string;
  degree: string;
  startDate?: string;
  endDate?: string;
  location?: string;
  description?: string;
}
// -------------------------
// Navigation
// -------------------------
export const navLinks: NavLink[] = [
  { id: 'home', label: 'Home', href: '/' },
  { id: 'about', label: 'About', href: '/about' },
  { id: 'skills', label: 'Skills', href: '/skills' },
  { id: 'portfolio', label: 'Portfolio', href: '/portfolio' },
  {id:'certification', label: 'Certification', href: '/certification'},
  { id: 'experience', label: 'Experience', href: '/experience' },
  { id: 'contact', label: 'Contact', href: '/contact' },
];




// -------------------------
// Theme / design tokens (used by UI components)
// -------------------------
export const theme = {
  primary: 'indigo-600', // Tailwind class token you can use as `bg-[theme.primary]` if you prefer
  accent: 'violet-500',
  muted: 'gray-400',
};




const myDetail = {
  logo,
  profile,
  name,
  tagline,
  about,
  contact,
  socials,
  resumeUrl,
  seo,
  navLinks,
  desc,
  skills,
  projects,
  experiences,
  certifications,
  homeDesc,
  education,
  theme,
};

export default myDetail;
