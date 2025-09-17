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

import Image1 from "../img/portfolio/1.png";
import Image2 from "../img/portfolio/2.png";
import Image3 from "../img/portfolio/3.png";
import Image4 from "../img/portfolio/4.png";

// Stats Project Data
export const project = [
  {
    id: 1,
    icon: <FaCloud className="text-gray-500 text-3xl" />,
    num: 89,
    title: "HAPPY CLIENTS",
  },
  {
    id: 2,
    icon: <FaHeart className="text-gray-500 text-3xl" />,
    num: 231,
    title: "PROJECTS COMPLETED",
  },
  {
    id: 3,
    icon: <FaGlobe className="text-gray-500 text-3xl" />,
    num: 108,
    title: "FILES DOWNLOADED",
  },
  {
    id: 4,
    icon: <FaUser className="text-gray-500 text-3xl" />,
    num: 1446,
    title: "LINES OF CODE",
  },
];

// Portfolio
export const portfolio = [
  { id: 1, cover: "../images/port/port1.jpg", name: "Brand", category: "marketing", title: "Brex Logo" },
  { id: 2, cover: "../images/port/port2.jpg", name: "Brand", category: "design", title: "Brex Logo" },
  { id: 3, cover: "../images/port/port3.jpg", name: "Brand", category: "development", title: "Brex Logo" },
  { id: 4, cover: "../images/port/port4.jpg", name: "Brand", category: "marketing", title: "Brex Logo" },
  { id: 5, cover: "../images/port/port5.jpg", name: "Brand", category: "design", title: "Brex Logo" },
  { id: 6, cover: "../images/port/port6.jpg", name: "Brand", category: "development", title: "Brex Logo" },
];

// Portfolio Projects (Detailed)
export const portfolioProjects = [
  {
    id: 1,
    image: Image1,
    title: "E-Commerce Platform",
    category: "web",
    description: "Full-stack e-commerce solution with React and Node.js",
    technologies: ["React", "Node.js", "MongoDB"],
    link: "#"
  },
  {
    id: 2,
    image: Image2,
    title: "Mobile Banking App",
    category: "mobile",
    description: "Secure mobile banking application with real-time transactions",
    technologies: ["React Native", "Firebase", "Redux"],
    link: "#"
  },
  {
    id: 3,
    image: Image3,
    title: "Task Management Dashboard",
    category: "web",
    description: "Professional project management tool with team collaboration",
    technologies: ["Vue.js", "Express", "PostgreSQL"],
    link: "#"
  },
  {
    id: 4,
    image: Image4,
    title: "Brand Identity Design",
    category: "design",
    description: "Complete brand identity package with logo and guidelines",
    technologies: ["Figma", "Adobe Creative Suite", "Sketch"],
    link: "#"
  },
  {
    id: 5,
    image: Image1,
    title: "Weather Forecast App",
    category: "mobile",
    description: "Real-time weather app with location-based forecasting",
    technologies: ["Flutter", "Weather API", "SQLite"],
    link: "#"
  },
  {
    id: 6,
    image: Image2,
    title: "Restaurant Website",
    category: "web",
    description: "Modern restaurant website with online ordering system",
    technologies: ["React", "Strapi", "Stripe"],
    link: "#"
  }
];

export const projectCategories = [
  { id: "all", name: "All Projects", count: 6 },
  { id: "web", name: "Web Development", count: 3 },
  { id: "mobile", name: "Mobile Apps", count: 2 },
  { id: "design", name: "Design", count: 1 }
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
    text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam porttitordapibus dictum.Fusce faucibus ligula scelerisque, eleifend turpis in",
    image: "./images/testimonials/team-1.png",
    name: "Alamin Musa",
    post: "Front End Developer",
  },
  {
    id: 2,
    text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam porttitordapibus dictum.Fusce faucibus ligula scelerisque, eleifend turpis in",
    image: "./images/testimonials/team-2.png",
    name: "Alex Ander",
    post: "Back End Developer",
  },
  {
    id: 3,
    text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam porttitordapibus dictum.Fusce faucibus ligula scelerisque, eleifend turpis in",
    image: "./images/testimonials/team-3.png",
    name: "GorkCoder",
    post: "React Developer",
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
