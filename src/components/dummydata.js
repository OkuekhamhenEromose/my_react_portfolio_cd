import { FaHeart, FaGlobe, FaUser } from 'react-icons/fa';
import { 
  FaPalette,  
  FaMobile, 
  FaServer, 
  FaCloud, 
  FaCode,  
  FaDatabase,
} from 'react-icons/fa';


import image1 from "../img/testimonials/brightnwachukwu.jpeg";
import image2 from "../img/testimonials/enoch olisa.jpeg";
import image3 from "../img/testimonials/monicaholmsremmen.jpeg";
import image4 from "../img/testimonials/samuelokpe.jpeg";
import image5 from "../img/testimonials/michaelojemoron.jpeg";
import image6 from "../img/testimonials/nathanielnosa.jpeg";

// Stats Project Data
export const project = [
  {
    id: 1,
    icon: <FaHeart className="text-[#003366] text-3xl" />,
    num: 65,
    title: "HAPPY CLIENTS",
  },
  {
    id: 2,
    icon: <FaUser className="text-[#003366] text-3xl" />,
    num: 101,
    title: "PROJECTS COMPLETED",
  },
  {
    id: 3,
    icon: <FaGlobe className="text-[#003366] text-3xl" />,
    num: 108,
    title: "FILES DOWNLOADED",
  },
  {
    id: 4,
    icon: <FaCloud className="text-[#003366] text-3xl" />,
    num: 1446,
    title: "LINES OF CODE",
  },
];


// Portfolio Projects (Detailed)
export const portfolioProjects = [
  {
    id: 1,
    title: "Listings App (Backend)",
    description:
      "A backend-driven property listings API built with Django and Django REST Framework. Supports property creation, categorization, search, filtering, and structured REST endpoints for frontend consumption.",
    category: "Backend",
    image: "/img/portfolio/insomnia1.png",
    demoLink: "https://housing-properties.onrender.com",
    githubLink: "https://github.com/OkuekhamhenEromose/housing_properties",
  },
  {
    id: 2,
    title: "Real Estate Website",
    description:
      "A responsive real estate frontend application for showcasing properties for sale and rent. Built with HTML, CSS, and JavaScript, featuring property cards, clean layouts, and user-friendly navigation.",
    category: "Frontend",
    image: "/img/portfolio/realestate-img.png",
    demoLink: "https://dancing-youtiao-914380.netlify.app",
    githubLink: "https://github.com/OkuekhamhenEromose/RealEstateModern",
  },
  {
    id: 3,
    title: "EthaHospital App",
    description:
      "A frontend clone of a hospital website built with TypeScript, Tailwind CSS, and Framer Motion. Emphasizes modern UI design, accessibility, and smooth animated interactions.",
    category: "Frontend",
    image: "/img/portfolio/ethahospital.png",
    demoLink: "https://ettahospitalclone.vercel.app/",
    githubLink: "https://github.com/OkuekhamhenEromose/hospitaltypescriptreact",
  },
  {
    id: 4,
    title: "CH-Travels",
    description:
      "A modern travel agency website built with React and Framer Motion. Focused on smooth animations, engaging UI transitions, and a polished user experience for exploring travel destinations.",
    category: "Frontend",
    image: "/img/portfolio/chtravels.png",
    demoLink: "https://shiny-scone-6fc98c.netlify.app",
    githubLink: "https://github.com/OkuekhamhenEromose/chardevtravel",
  },
  {
    id: 5,
    title: "Resume Builder",
    description:
      "A Python and Django REST Framework–powered resume builder that exposes secure APIs to generate structured, professional resumes from user input.",
    category: "Backend",
    image: "/img/portfolio/resumebuilder.png",
    demoLink: "https://renewschool-1.onrender.com",
    githubLink: "https://github.com/OkuekhamhenEromose/myresume",
  },
  {
    id: 6,
    title: "CHBlog App",
    description:
      "A full-stack blogging platform built with React, Tailwind CSS, Django, and Django REST Framework. Implements role-based authentication, protected routes, CRUD operations, and secure API communication.",
    category: "Full-Stack",
    image: "/img/portfolio/chblog.png",
    demoLink: "https://multiblogapp.netlify.app/blog",
    githubLink: "https://github.com/ehihameneromosele/fullblogc",
  },
  {
    id: 7,
    title: "EthaHospital Management System",
    description:
      "Production-ready hospital management system with Google OAuth.",
    category: "Full-Stack",
    image: "/img/portfolio/ethahospital.png",
    demoLink: "https://dhospitalback.onrender.com/api/",
    githubLink: "https://github.com/OkuekhamhenEromose/dhospitalback",
  },
  {
    id: 8,
    title: "Portfolio",
    description:
      "A personal portfolio website built with HTML, CSS, and JavaScript to showcase projects, skills, and contact information with a clean and professional layout.",
    category: "Frontend",
    image: "/img/portfolio/portfolio.png",
    demoLink: "https://timely-axolotl-0f4be3.netlify.app/",
    githubLink: "https://github.com/OkuekhamhenEromose/portfolio-original",
  },
  {
    id: 9,
    title: "Advanced Portfolio",
    description:
      "A next-generation portfolio built with Next.js and Framer Motion, focusing on performance, smooth animations, SEO optimization, and a modern developer-focused presentation.",
    category: "Frontend",
    image: "/img/portfolio/nextportfolio.png",
    demoLink: "charleseromose.netlify.app",
    githubLink: "https://github.com/OkuekhamhenEromose/nextportfoliooriginal",
  },
];


// ✅ Categories aligned with "category" field above
export const projectCategories = [
  { id: "all", name: "All Projects", count: 9 },
  { id: "Frontend", name: "Frontend", count: 5 },
  { id: "Backend", name: "Backend", count: 2 },
  { id: "Full-Stack", name: "Full-Stack", count: 2 },
];


// Statistics
export const statistics = [
  { id: 1, num: 65, title: "HAPPY CLIENTS" },
  { id: 2, num: 101, title: "PROJECTS COMPLETED" },
  { id: 3, num: 108, title: "FILES DOWNLOADED" },
  { id: 4, num: 1446, title: "LINES OF CODE" },
];

// Services
export const services = [
  { 
    id: 1, 
    icon: FaPalette, 
    title: "UI/UX & Creative Design", 
    desc: "Intuitive, user-centered interfaces that combine aesthetics with functionality to engage and convert users." 
  },
  { 
    id: 2, 
    icon: FaCode, 
    title: "Full-Stack Development", 
    desc: "End-to-end development from responsive frontends to powerful backends, APIs, and databases for robust web applications." 
  },
  { 
    id: 3, 
    icon: FaMobile, 
    title: "Responsive & Cross-Device Apps", 
    desc: "Websites and apps that adapt seamlessly across devices, ensuring consistent speed and performance everywhere." 
  },
  { 
    id: 4, 
    icon: FaServer, 
    title: "Scalable Architecture", 
    desc: "Designing and deploying systems that scale efficiently, handle traffic growth, and maintain performance under load." 
  },
  { 
    id: 5, 
    icon: FaCloud, 
    title: "Cloud & DevOps (AWS/Docker)", 
    desc: "Deployment and management on AWS cloud, containerization with Docker, and CI/CD pipelines for faster, reliable delivery." 
  },
  { 
    id: 6, 
    icon: FaDatabase, 
    title: "Database Management", 
    desc: "Designing, optimizing, and maintaining SQL/NoSQL databases to ensure secure, efficient, and scalable data handling." 
  },
];

// Navigation Links
export const navlink = [
  { url: "/", text: "Home" },
  { url: "/about", text: "About" },
  { url: "/services", text: "Services" },
  { url: "/portfolio", text: "Portfolio" },
  { url: "/testimonials", text: "Testimonials" },
  { url: "/blog", text: "Blog" },
  { url: "/contact", text: "Contact" },
];

// Home Data
export const home = [
  {
    text: "HELLO I'M",
    name: "CHARLES EROMOSE",
    post: "FULL STACK DEVELOPER",
    design: "UI / UX DESIGNER",
    desc: "I'm a passionate developer with expertise in creating modern, responsive web applications using cutting-edge technologies.",
  },
];

// About Data
export const about = [
  {
    desc: "With over 3 years of experience in web development, I specialize in creating scalable and efficient solutions. My expertise spans across frontend and backend technologies, ensuring seamless user experiences.",
    desc1: "I'm committed to writing clean, maintainable code and staying updated with the latest industry trends to deliver exceptional results for every project.",
    cover: "./images/man.png",
  },
];

// ✅ Testimonials Data
export const testimonials = [
  {
    id: 1,
    text: "Charles has an exceptional eye for detail. He approaches UI/UX challenges with creativity while ensuring performance and accessibility aren’t compromised. What stands out most is his consistency — he always delivers with precision and a positive attitude, even under tight deadlines",
    image: image1,
    name: "Bright Nwachukwu",
    post: "Product/Project Management || Software Engineering: Heavy- Front End",
  },
  {
    id: 2,
    text: "Charles is more than just a talented developer — he’s a professional who uplifts the entire team. His calm approach under pressure, willingness to mentor others, and ability to translate technical concepts into simple terms make him a rare asset. He combines empathy with expertise, and that’s a quality you don’t often find.",
    image: image2,
    name: "Enoch Olisa",
    post: "Software Quality Engineer with CTFL | Test Automation Engineer with CTAL-TAE | Software Project Manager with PMP",
  },
  {
    id: 3,
    text: "Charles is the kind of engineer every team needs. He’s collaborative, reliable, and never shies away from responsibility. Beyond writing excellent code, he brings energy to discussions, asks the right questions, and motivates others to push their limits. A true problem-solver.",
    image: image3,
    name: "Monica Holm-Remmen",
    post: "Recruiter & Career Consultant. Connecting High-Performing Professionals and Top Talent with Leading Employers",
  },
  {
    id: 4,
    text: "What I admire most about Charles is his resilience and curiosity. He doesn’t just stop at solving a bug — he digs deeper to understand why it happened and how to prevent it in the future. That mindset reflects his commitment to building not just apps, but sustainable solutions.",
    image: image4,
    name: "Samuel Okpe",
    post: "Software Engineer | Business Enthusiast",
  },
  {
    id: 5,
    text: "I’ve seen very few engineers who embrace learning as quickly and effectively as Charles. Whether it’s mastering new frameworks, adopting best practices, or diving into DevOps tools, he adapts seamlessly. His attitude toward growth makes him a valuable teammate in any fast-paced environment.",
    image: image5,
    name: "Michael Ojemoron",
    post: "Entrepreneur|Cloud Architect|Community Builder|Technical Writer|MERN Stack|Python/Django|AI|LLM",
  },
  {
    id: 6,
    text: "Working with Charles has been an absolute privilege. His ability to break down complex problems into clear, scalable solutions shows not only strong technical skills but also a deep understanding of software engineering principles. He has an admirable discipline toward clean code and architecture",
    image: image6,
    name: "Nathaniel Nosa",
    post: "Full-Stack Developer | TypeScript | Django | MERN",
  },
];
