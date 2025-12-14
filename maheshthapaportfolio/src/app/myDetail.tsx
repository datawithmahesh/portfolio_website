import { ReactElement } from "react";
import { FaGithub, FaLinkedin, FaFacebook, FaInstagram, } from "react-icons/fa";

export const socials: Social[] = [
  { url: "https://github.com/datawithmahesh", icon: <FaGithub />, name: "GitHub" },
  { url: "https://www.linkedin.com/in/mahesh-thapa-001b36364/", icon: <FaLinkedin />, name: "LinkedIn" },
  { url: "https://www.facebook.com/maheshthapa01", icon: <FaFacebook />, name: "Facebook" },
  { url: "https://www.instagram.com/iamaheshh_/", icon: <FaInstagram />, name: "Instagram" },
];

// EDIT FROM HERE


export const desc= 'Enthusiastic Data Scientist and machine Learning Engineer';
export const logo = '/logo.jpg'; // place logo.svg in /public
export const profile = '/profile.jpg'; // place profile.jpg in /public
export const name = 'Mahesh Bahadur Thapa';
export const tagline = 'Computer Engineer · Enthusiastic Data Scientist/Machine Learning Engineer';
export const homeDesc='With an open mind and a strong will to grow, I aim to create things that inspire and add value. I’m constantly learning, refining, and striving to make a positive mark.'

export const about = `
I’m a Computer Engineer with a growing passion for Data Science, Machine Learning, and Analytical problem-solving.
I enjoy exploring data-driven insights, building intelligent solutions, and continuously improving my technical and analytical skills.
My goal is to combine curiosity and technology to create meaningful outcomes that make an impact.
 `;


export const contact: Contact = {
  email: 'maheshthapa3150@gmail.com',
  phone: '+977-9840776800',
  website: 'https://maheshbahadurthapa.com.np',
  location: 'Kathmandu, Nepal',
};



export const resumeUrl = 'https://drive.google.com/file/d/1G53gcDBvkddaZ3wJCtqlhJ2DzAE_p5yO/view?usp=sharing'; // place resume.pdf in /public or use external URL

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
type SkillCategory = {
  category: string;
  skills: string[];
};

export const skillsByCategory: SkillCategory[] = [
  {
    category: 'Data Analysis',
    skills: [
      'Excel',
      'SQL',
      'MySQL',
      'Python',
      'Pandas',
      'NumPy',
      'Matplotlib',
      'Seaborn',
      'Plotly',
      'Tableau'
    ],
  },
  {
    category: 'Data Science',
    skills: [
      'Statistics',
      'Probability',
      'Hypothesis Testing',
      'Exploratory Data Analysis (EDA)',
      'Data Cleaning & Preprocessing',
      'Machine Learning Fundamentals',
      'Natural Language Processing (NLP)',
      'Text Classification',
      'Clustering',
      'Dimensionality Reduction',
      'Model Evaluation & Validation'
    ],
  },
  {
    category: 'Machine Learning',
    skills: [
      'Supervised Learning: Regression, Classification (Logistic, Decision Trees, SVM, Random Forest)',
      'Unsupervised Learning: Clustering (K-Means), PCA',
      'Neural Networks',
      'Reinforcement Learning',
      'Time Series Forecasting'
    ],
  },
  {
    category: 'Tools & Frameworks',
    skills: [
      'Scikit-learn',
      'FastAPI',
      'Streamlit',
      'Jupyter Notebook',
      'Google Colab',
      'VS Code',
      'Git & GitHub'
    ],
  },

  {
    category: "Soft Skills",
    skills: [
      "Problem-Solving & Critical Thinking",
      "Curiosity & Continuous Learning",
      "Analytical Thinking",
      "Attention to Detail",
      "Communication Skills",
      "Storytelling with Data",
      "Collaboration & Teamwork",
      "Adaptability & Flexibility",
      "Time Management & Organization",
      "Ethical Thinking in AI & Data"
    ],
  },
];


export interface Certification {
  id: string;
  title: string;
  issuer: string;
  date: string; // YYYY-MM or formatted
  credentialUrl?: string;
}
export const certifications: Certification[] = [
  {
    id: '1',
    title: 'Data Science with Python',
    issuer: 'BROADWAY INFOSYS',
    date: '11th May, 2025 - 11th Aug, 2025',
    credentialUrl: 'https://drive.google.com/file/d/1bqnhY5uQK-J62wG4vL0W5D-oRFHjmPbn/view?usp=sharing',
  },
    {
    id: '2',
    title: 'Data Analytics BootCamp',
    issuer: 'AlexTheAnalyst',
    date: '5th Aug, 2025 - 5th Nov, 2025',
    credentialUrl: 'https://drive.google.com/file/d/1gKR3tiDZIVOl9nlusnd7OxeKIv1CeYM-/view?usp=sharing',
  },
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

  {
    id: '1',
    title: 'NEPALI HOUSE PRICE PREDICTION MODEL',
    slug: 'NEPALI-HOUSE-PRICE-PREDICTION-MODEL',
    shortDescription: 'A machine learning project that predicts house prices in Nepal based on features like location, size, and amenities. The model compares Linear Regression, Random Forest, and Gradient Boosting to find the most accurate predictions. Built with an interactive Streamlit app for real-time price estimation.',
    images: ['/house.jpg'],
    repoUrl: 'https://github.com/datawithmahesh/Nepali_House_Pricing_Model',
    website_link:'https://nepalihousepriceprediction.streamlit.app/',
    tech: ['Python','Streamlit', 'Pandas', 'NumPy','Jupyter Notebook', 'Scikit-Learn', 'Matplotlib', 'Seaborn', 'Streamlit Cloud'],
    // year: 2021,
  },
  {
    id: '2',
    title: 'RESUME CLASSIFICATION ANALYSIS MODEL',
    slug: 'RESUME-CLASSIFICATION-ANALYSIS-MODEL',
    shortDescription: 'A machine learning project that automatically classifies resumes into job domains such as Data Science, Web Development, and HR using NLP techniques. The Streamlit app allows users to upload resumes and instantly view their predicted category',
    images: ['/resume.jpg'],
    repoUrl: 'https://github.com/datawithmahesh/Resume_Classification',
    website_link:'https://resumeclassificationmodel.streamlit.app/',
    tech: ['Python','Streamlit', 'Pandas', 'NumPy','Jupyter Notebook', 'Scikit-Learn', 'Matplotlib', 'Seaborn', 'Streamlit Cloud'],
    // year: 2021,
  },
  {
    id: '3',
    title: 'CAFE MANAGEMENT SYSTEM',
    slug: 'CAFE-MANAGEMENT-SYSTEM',
    shortDescription: 'Desktop application that connects the kitchen department with counter and manages orders of the customers and generates bills.',
    images: ['/cafe.jpg'],
    repoUrl: 'https://github.com/datawithmahesh/CAFE-MANAGEMENT-SYSTEM/tree/main/CAFEMANAGEMENT',
    tech: ['SQL', 'C#.NET'],
    // year: 2021,
  },
  {
    id: '4',
    title: 'MOBILE SALES AND CUSTOMER MANAGEMENT SYSTEM',
    slug: 'MOBILE-SALES-AND-CUSTOMER-MANAGEMENT-SYSTEM',
    shortDescription: "Tracks the purchase and sales history of any mobile shop with its stock level update.",
    images: ['/mobile.jpg'],
    repoUrl: 'https://github.com/datawithmahesh/MOBILE-SALES-AND-CUSTOMER-MANAGEMENT-SYSTEM/tree/main/Mobile_Sales_and_Customer_Management_System',
    tech: ['MySQL', 'Hibernate', 'Java', 'Spring Boot'],
    // year: 2025,
  },
  {
    id: '5',
    title: 'TWITTER SENTIMENT ANALYSIS MODEL',
    slug: 'TWITTER SENTIMENT ANALYSIS MODEL',
    shortDescription: 'This project aims to classify tweets into positive, negative, or neutral sentiments using machine learning.It was developed as a mini data science project to practice NLP techniques and model deployment using Streamlit..',
    images: ['/twitter.jpg'],
    repoUrl: 'https://github.com/datawithmahesh/twitter_training_sentiment_model',
    website_link:'https://twitterdatasentimentmodel.streamlit.app/',
    tech: ['Python','Streamlit', 'Pandas', 'NumPy', 'Scikit-Learn', 'Matplotlib', 'Seaborn', 'NLTK', 'Streamlit Cloud'],
    // year: 2021,
  },  
  {
    id: '6',
    title: 'EMPLOYEE SALARY PREDICTION MODEL',
    slug: 'EMPLOYEE SALARY PREDICTION MODEL',
    shortDescription: 'This project predicts employee salaries based on various factors such as experience, education, and role using machine learning regression techniques.',
    images: ['/salary.jpg'],
    repoUrl: 'https://github.com/datawithmahesh/Salary_regression',
    website_link:'https://employeesalaryregression.streamlit.app/',
    tech: ['Python','Streamlit', 'Pandas', 'NumPy','Jupyter Notebook', 'Scikit-Learn', 'Matplotlib', 'Seaborn', 'Streamlit Cloud'],
    // year: 2021,
  },
  {
    id: '7',
    title: 'LOAN APPROVAL CLASSIFICATION MODEL',
    slug: 'LOAN APPROVAL CLASSIFICATION MODEL',
    shortDescription: 'A machine learning project designed to classify whether a loan application will be approved or not based on applicant information such as income, home ownership, loan amount, loan intent, interest rate, and credit-related details. The model was built using Support Vector Machine (SVM) for binary classification.',
    images: ['/loan.jpg'],
    repoUrl: 'https://github.com/datawithmahesh/loan_classification',
    website_link:'https://loandataclassification.streamlit.app/',
    tech: ['Python','Streamlit', 'Pandas', 'NumPy', 'Jupyter Notebook','Scikit-Learn', 'Matplotlib', 'Seaborn', 'Streamlit Cloud'],
    // year: 2021,
  },
  {
    id: '8',
    title: 'COVID-19 Classification Model',
    slug: 'COVID-19 Classification Model',
    shortDescription: 'This project predicts whether an individual is COVID-19 positive or negative based on symptoms such as cough, fever, sore throat, headache, and known contact history. The model was built using Support Vector Machine (SVM)',
    images: ['/covid.jpg'],
    repoUrl: 'https://github.com/datawithmahesh/Covid_Classification',
    website_link:'https://classificationcovidmvp.streamlit.app/',
    tech: ['Python','Streamlit', 'Pandas', 'NumPy', 'Jupyter Notebook','Scikit-Learn', 'Matplotlib', 'Seaborn', 'SVM', 'Streamlit Cloud'],
    // year: 2021,
  },
  {
    id: '9',
    title: 'BBC NEWS TEXT CLASSIFICATION MODEL',
    slug: 'BBC NEWS TEXT CLASSIFICATION MODEL',
    shortDescription: 'This project classifies BBC news articles into categories such as business, tech, politics, sport, and entertainment using Logistic Regression and TF-IDF vectorization. It applies advanced NLP preprocessing like stopword removal, stemming, and text cleaning to achieve accurate news topic prediction.',
    images: ['/text_data.jpg'],
    repoUrl: 'https://github.com/datawithmahesh/BBC_text_data_news_classification',
    website_link:'https://newsclassificationtextdata.streamlit.app/',
    tech: ['Python','Streamlit', 'Pandas', 'NumPy', 'Jupyter Notebook','Scikit-Learn', 'Matplotlib', 'TF-IDF','Seaborn', 'NLTK', 'Streamlit Cloud'],
    // year: 2021,
  },
  {
    id: '10',
    title: 'EMPLOYEE SALARY CLUSTERING MODEL',
    slug: 'BBC NEWS TEXT CLASSIFICATION MODEL',
    shortDescription: 'This project groups employees into distinct clusters based on their age, years of experience, education level, and salary using Principal Component Analysis (PCA) and K-Means clustering. It helps visualize and understand hidden salary patterns among employees with similar profiles.',
    images: ['/PCA_salary.jpg'],
    repoUrl: 'https://github.com/datawithmahesh/PCA_clustering_salary_data',
    website_link:'https://pcaclusteringsalarydata.streamlit.app/',
    tech: ['Python','Streamlit', 'Pandas', 'NumPy', 'Jupyter Notebook','Scikit-Learn', 'Matplotlib', 'Seaborn', 'Streamlit Cloud','PCA', 'K-Means'],
    // year: 2021,
  },
];

// -------------------------
// Experience
// -------------------------
export const experiences: Experience[] = [
  {
    id: '1',
    role: 'Customer Service Representative and Quality Assurance',
    company: 'Daraz Nepal',
    startDate: 'Jan 2024',
    endDate: 'March 2024',
    location: 'Kathmandu, Nepal',
    description:
      'Delivered exceptional customer support and ensured process quality at Daraz Nepal, developing strong communication, problem-solving, and multitasking skills in a fast-paced environment.',
    bullets: [
      'Resolved customer queries with professionalism and care.',
      'Strengthened communication and interpersonal skills.',
      'Managed tasks efficiently under pressure.',
      'Developed confidence in problem-solving and customer understanding.',
    ],
  },
  {
    id: '2',
    role: 'Computer Science Lecturer',
    company: 'NASA National Secondary School',
    startDate: 'May 2024',
    endDate: 'Jun 2025',
    location: 'Kathmandu, Nepal',
    description:
      'Taught computer science concepts and practical coding sessions, inspiring students to think critically, solve problems, and innovate through technology.',
    bullets: [
      'Delivered engaging lessons on coding and digital tools.',
      'Fostered creativity and problem-solving in learning.',
      'Encouraged curiosity and innovation in the classroom.',
    ],
  },
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
    // startDate: '2018',
    endDate: '2024 AD',
    description: 'My journey at NAST College was filled with learning, teamwork, and hands-on exploration of technology.I worked on several projects, organized college functions, and developed strong presentation and leadership skills along the way.These experiences shaped my confidence, creativity, and curiosity to keep learning and building meaningful things.',
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
  website_link?: string;   
  // new thapeko hai ta   
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
  skillsByCategory,
  projects,
  experiences,
  certifications,
  homeDesc,
  education,
  theme,
};

export default myDetail;
