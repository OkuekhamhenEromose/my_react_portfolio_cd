import React from "react";
import { Link } from "react-router-dom";
import HeroProf from "../img/home/IMG_9910-removebg-preview.png";
import { motion } from "framer-motion";
import { Prism as SyntaxHighlighter } from "react-syntax-highlighter";
import { vscDarkPlus } from "react-syntax-highlighter/dist/esm/styles/prism";

// Import your CV file - make sure to place it in the src/assets or public folder
import charlesEromoseCV from "../assets/CharlesEromoseCV.pdf"; // Update path accordingly

// Fade-in-up variant for individual items
// Fade-in-up with bounce variant
const fadeInUpBounce = {
  hidden: { opacity: 0, y: 20 }, // start slightly below
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      type: "spring", // gives a bounce effect
      stiffness: 120, // bounce intensity
      damping: 10, // how quickly it settles
    },
  },
};

// Stagger container for sequential animation
const staggerContainer = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.15, // delay between children
    },
  },
};

// Define the fadeInDown variant
const fadeInDown = {
  hidden: { opacity: 0, y: -20 }, // start slightly above
  visible: {
    opacity: 1,
    y: 0, // end at original position
    transition: { duration: 1.0, ease: "easeOut" },
  },
};

const zoomIn = {
  initial: { opacity: 0, scale: 0.4 },
  animate: { opacity: 1, scale: 1 },
  transition: { duration: 2.0, ease: "easeOut" },
};

const Home = () => {
  // Function to handle CV download
  const handleDownloadCV = () => {
    // If using import method (CV in src/assets folder)
    const link = document.createElement("a");
    link.href = charlesEromoseCV;
    link.download = "Charles_Eromose_CV.pdf";
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  return (
    // home section container
    <motion.section
      id="home"
      className="section flex items-center"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.8, delay: 0.2 }}
    >
      <div className="container mx-auto flex flex-col lg:flex-row items-center justify-between px-3 sm:px-4 lg:px-8 h-full">
        {/* 🔹 Left Side - Text */}
        <motion.div
          className="w-full lg:w-1/2 flex flex-col items-center lg:items-start text-center lg:text-left justify-center mt-10 lg:mt-20 order-2 lg:order-1"
          variants={staggerContainer}
          initial="initial"
          animate="animate"
        >
          <motion.p
            className="text-base sm:text-lg text-gray-800 font-semibold tracking-wider"
            variants={fadeInDown}
            initial="hidden"
            animate="visible"
          >
            Hello There!
          </motion.p>
          {/* Name and role */}
          <motion.h1
            className="text-2xl xs:text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-gray-800 mb-2 sm:mb-3 lg:mb-4 leading-tight whitespace-nowrap"
            variants={fadeInDown} // updated
            initial="hidden"
            animate="visible"
          >
            I'm <span className="text-[#003366]">Charles Eromose</span>,
          </motion.h1>

          {/* Code block */}
          {/* Code Block with Zoom-in */}
          <motion.div
            className="w-full max-w-lg sm:max-w-xl lg:max-w-2xl"
            variants={zoomIn} // 🔹 Apply zoom-in animation
            initial="initial"
            animate="animate"
          >
            <div className="code-display">
              <SyntaxHighlighter
                language="typescript"
                customStyle={{
                  margin: 0,
                  borderRadius: "16px",
                  background: "rgba(30, 41, 59, 0.95)",
                  backdropFilter: "blur(10px)",
                  fontSize: "0.875rem",
                  boxShadow: "0 10px 25px rgba(0, 0, 0, 0.2)",
                  overflow: "visible",
                  whiteSpace: "pre",
                }}
                style={vscDarkPlus}
                wrapLines={false}
                showLineNumbers={false}
              >
                {`const aboutMe: DeveloperProfile = {
  name: "Charles Eromose",
  role: "Full Stack Engineer", 
  experience: "4+ years",
  stack: {
    frontend: ["React.js", "TailwindCSS", "Next.js", "TypeScript"],
    backend: ["Django", "Node.js", "Python"],
    database: ["PostgreSQL", "MySQL", "SQL Server"],
    cloud: ["AWS", "Vercel", "Netlify"]
  },
  skills: [
    "UI/UX design", 
    "API development", 
    "cloud solutions"
  ],
  availability: "Open to opportunities 🚀"
};`}
              </SyntaxHighlighter>
            </div>
          </motion.div>
          {/* Buttons */}
          <motion.div
            className="mt-4 mb-6 flex sm:flex-row gap-4 justify-center lg:justify-start"
            variants={staggerContainer}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: false, amount: 0.3 }}
          >
            {/* View My Works button */}
            <motion.a
              variants={fadeInUpBounce}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <Link to="/portfolio" className="btn text-base md:text-lg">
                View My Works
              </Link>
            </motion.a>

            {/* Download CV button - Updated with download functionality */}
            <motion.button
              onClick={handleDownloadCV}
              variants={fadeInUpBounce}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="
                relative inline-block btn 
                border border-blue-600 text-[#003366] group overflow-hidden
                bg-gray-300/30 backdrop-blur-md shadow-lg 
                dark:bg-gray-800/50
                text-base md:text-lg
              "
            >
              {/* Expanding background */}
              <span className="absolute inset-0 h-full w-0 bg-blue-600 transition-all duration-300 ease-linear group-hover:w-full"></span>

              {/* Text */}
              <span className="relative z-10 group-hover:text-white">
                Download CV
              </span>
            </motion.button>
          </motion.div>
        </motion.div>

        {/* 🔹 Right Side - Hero Image */}
        <motion.div
          className="w-full lg:w-1/2 flex justify-center lg:justify-end order-1 lg:order-2"
          initial={{ opacity: 0, x: 50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
        >
          <img
            src={HeroProf}
            alt="Charles Eromose"
            className="max-w-[70%] sm:max-w-[60%] md:max-w-[55%] lg:max-w-[80%] h-auto drop-shadow-lg"
          />
        </motion.div>
      </div>
    </motion.section>
  );
};

export default Home;
