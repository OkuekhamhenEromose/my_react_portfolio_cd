import { FaCloud, FaHeart, FaGlobe, FaUser } from 'react-icons/fa';
import { 
  FaPalette, 
  FaCode, 
  FaMobile, 
  FaPaintBrush, 
  FaIcons, 
  FaHeadset,
  FaMapMarkerAlt,
  FaPhone,
  FaEnvelope,
  FaFacebook,
  FaTwitter,
  FaInstagram,
  FaYoutube
} from 'react-icons/fa';

import image1 from "../img/testimonials/brightnwachukwu.jpeg";
import image2 from "../img/testimonials/enoch olisa.jpeg";
import image3 from "../img/testimonials/monicaholmsremmen.jpeg";
import image4 from "../img/testimonials/samuelokpe.jpeg";
import image5 from "../img/testimonials/michaelojemoron.jpeg";
import image6 from "../img/testimonials/nathanielnosa.jpeg";

import Image1 from "../img/portfolio/insomnia1.png";
import Image2 from "../img/portfolio/insomnia2.png";
import Image3 from "../img/portfolio/chtravels.png";
import Image4 from "../img/portfolio/realestate-img.png";
import Image5 from "../img/portfolio/Screenshot 2025-09-21 164622.png";
import Image6 from "../img/portfolio/portfolio-img.png";


// Stats Project Data
export const project = [
  {
    id: 1,
    icon: <FaCloud className="text-[#003366] text-3xl" />,
    num: 89,
    title: "HAPPY CLIENTS",
  },
  {
    id: 2,
    icon: <FaHeart className="text-[#003366] text-3xl" />,
    num: 231,
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
    icon: <FaUser className="text-[#003366] text-3xl" />,
    num: 1446,
    title: "LINES OF CODE",
  },
];

// Portfolio Projects (Detailed)
export const portfolioProjects = [
  {
    id: 1,
    title: "Portfolio Website",
    description: "A personal portfolio website showcasing my skills, projects, and contact information.",
    category: "Frontend",
    image: Image6,
    demoLink: "https://timely-axolotl-0f4be3.netlify.app",
    githubLink: "https://github.com/OkuekhamhenEromose/portfolio-original",
  },
  {
    id: 2,
    title: "Listings App",
    description: "Backend-powered listings platform for managing and showcasing property ads.",
    category: "Backend",
    image: Image2,
    demoLink: "https://housing-properties.onrender.com",
    githubLink: "https://github.com/OkuekhamhenEromose/housing_properties",
  },
  {
    id: 3,
    title: "Real Estate Website",
    description: "Property listings app for buying or renting homes. Featuring search, filters, and a clean UI.",
    category: "Frontend",
    image: Image4,
    demoLink: "https://dancing-youtiao-914380.netlify.app",
    githubLink: "https://github.com/OkuekhamhenEromose/RealEstateModern",
  },
  {
    id: 4,
    title: "CH-Travels",
    description: "A modern travel agency app that helps users explore destinations and book trips.",
    category: "Frontend",
    image: Image3,
    demoLink: "https://shiny-scone-6fc98c.netlify.app",
    githubLink: "https://github.com/OkuekhamhenEromose/chardevtravel",
  },
  {
    id: 5,
    title: "Resume Builder",
    description: "Resume generation web app with backend support for user data and storage.",
    category: "Backend",
    image: Image1,
    demoLink: "https://renewschool-1.onrender.com",
    githubLink: "https://github.com/OkuekhamhenEromose/myresume",
  },
  {
    id: 6,
    title: "CHBlog App",
    description: "Full-Stack blog app with authentication, post management, and modern UI.",
    category: "Full-Stack",
    image: Image5,
    demoLink: "https://subtle-blini-446f27.netlify.app/",
    githubLink: "https://github.com/OkuekhamhenEromose/blogfrontcd",
  },
];

// ✅ Categories aligned with "category" field above
export const projectCategories = [
  { id: "all", name: "All Projects", count: 6 },
  { id: "Frontend", name: "Frontend", count: 3 },
  { id: "Backend", name: "Backend", count: 2 },
  { id: "Full-Stack", name: "Full-Stack", count: 1 },
];


// Statistics
export const statistics = [
  { id: 1, num: 89, title: "HAPPY CLIENTS" },
  { id: 2, num: 231, title: "PROJECTS COMPLETED" },
  { id: 3, num: 108, title: "FILES DOWNLOADED" },
  { id: 4, num: 1446, title: "LINES OF CODE" },
];

// Services
export const services = [
  { id: 1, icon: FaPalette, title: "Creative Design", desc: "Custom UI/UX designs that improve user experience and boost engagement." },
  { id: 2, icon: FaCode, title: "Clean Code", desc: "Well-structured, maintainable code following best practices and modern development standards." },
  { id: 3, icon: FaMobile, title: "Responsive Design", desc: "Websites and applications that work flawlessly across all devices and screen sizes." },
  { id: 4, icon: FaPaintBrush, title: "Modern UI", desc: "Contemporary user interfaces using modern design principles and frameworks." },
  { id: 5, icon: FaIcons, title: "Icon Systems", desc: "Custom icon sets and icon integration for cohesive visual design systems." },
  { id: 6, icon: FaHeadset, title: "Awesome Support", desc: "Reliable technical support and maintenance services for your digital solutions." },
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

// ✅ Blog Data
export const blog = [
  {
    id: 1,
    title: "Master These Awesome",
    date: "Jun 27, 2022",
    author: "Dorian Gray",
    desc: "Lorem Ipsum has been standard. Lorem Ipsum is simply text of the printing and typesetting industry. Lorem Ipsum has been",
    cover: "./images/blog/b1.png",
  },
  {
    id: 2,
    title: "Best Design Items to Appeal",
    date: "Jun 27, 2022",
    author: "Dorian Gray",
    desc: "Lorem Ipsum has been standard. Lorem Ipsum is simply text of the printing and typesetting industry. Lorem Ipsum has been",
    cover: "./images/blog/b2.png",
  },
  {
    id: 3,
    title: "The 20 Best Lightroom Presets",
    date: "Jun 27, 2022",
    author: "Dorian Gray",
    desc: "Lorem Ipsum has been standard. Lorem Ipsum is simply text of the printing and typesetting industry. Lorem Ipsum has been",
    cover: "./images/blog/b3.png",
  },
];

// Contact Data
export const contact = [
  { icon: FaMapMarkerAlt, text1: "123 Developer Street", text2: "Lagos, Nigeria" },
  { icon: FaPhone, text1: "+234 812 3456 789", text2: "+234 907 6543 210" },
  { icon: FaEnvelope, text1: "hello@charleseromose.com", text2: "info@charleseromose.com" },
];

// Social Links
export const social = [
  { icon: FaFacebook },
  { icon: FaTwitter },
  { icon: FaInstagram },
  { icon: FaYoutube },
];
