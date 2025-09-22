import React from "react";
import { Link } from "react-router-dom";
import HeroProf from "../img/home/IMG_9910-removebg-preview.png";
import { motion } from "framer-motion";
import { Prism as SyntaxHighlighter } from "react-syntax-highlighter";
import { vscDarkPlus } from "react-syntax-highlighter/dist/esm/styles/prism";

const fadeInUp = {
  initial: { opacity: 0, y: 20 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.6 },
};

const staggerContainer = {
  animate: {
    transition: {
      staggerChildren: 0.1,
    },
  },
};

const Home = () => {
  return (
    // home section container
    <motion.section
      id="home"
      className="section bg-[#f5f7fa] flex items-center"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.8, delay: 0.2 }}
    >
      <div className="container mx-auto flex flex-col lg:flex-row items-center justify-between px-3 sm:px-4 lg:px-8 h-full">
        {/* 🔹 Left Side - Text + Code */}
        <motion.div
          className="w-full lg:w-1/2 flex flex-col items-center lg:items-start text-center lg:text-left justify-center mt-10 lg:mt-20"
          variants={staggerContainer}
          initial="initial"
          animate="animate"
        >
          {/* Intro heading */}
          <motion.p
            className="text-base sm:text-lg text-gray-800 font-semibold tracking-wider"
            variants={fadeInUp}
          >
            Hello There!
          </motion.p>

          {/* Name and role */}
          <motion.h1
            className="text-2xl xs:text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-gray-800 mb-2 sm:mb-3 lg:mb-4 leading-tight whitespace-nowrap"
            variants={fadeInUp}
          >
            I'm <span className="text-[#003366]">Charles Eromose</span>,
          </motion.h1>

          {/* Code block */}
          <motion.div
            className="w-full max-w-lg sm:max-w-xl lg:max-w-2xl"
            variants={fadeInUp}
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
            className="mt-4 mb-6 flex flex-col sm:flex-row gap-4 justify-center lg:justify-start"
            variants={staggerContainer}
          >
            {/* Hire Me Today button */}
            <motion.a
              href="/contact"
              className="btn"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              Let's Connect
            </motion.a>

            {/* Download CV button (outlined variation) */}
            <motion.a
              href="/cv"
              className="relative inline-block btn border border-blue-600 bg-transparent text-blue-600 group overflow-hidden"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              {/* Expanding background */}
              <span className="absolute inset-0 h-full w-0 bg-blue-600 transition-all duration-300 ease-linear group-hover:w-full"></span>

              {/* Text */}
              <span className="relative z-10 group-hover:text-white">
                Download CV
              </span>
            </motion.a>
          </motion.div>
        </motion.div>

        {/* 🔹 Right Side - Hero Image */}
        <motion.div
          className="w-full lg:w-1/2 flex justify-center lg:justify-end"
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
