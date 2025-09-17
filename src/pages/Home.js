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
    <motion.section
      id="home"
      className="section bg-gray-50 flex items-center"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.8, delay: 0.2 }}
    >
      <div className="container mx-auto flex flex-col lg:flex-row items-center justify-between px-4 sm:px-6 lg:px-12 h-full gap-10">
        
        {/* 🔹 Left Side - Text + Code */}
        <motion.div
          className="w-full lg:w-1/2 flex flex-col items-center lg:items-start text-center lg:text-left justify-start"
          variants={staggerContainer}
          initial="initial"
          animate="animate"
        >
          {/* Intro heading */}
          <motion.p
            className="text-base sm:text-lg text-gray-600 font-semibold tracking-wider"
            variants={fadeInUp}
          >
            THIS IS ME
          </motion.p>

          {/* Name */}
          <motion.h1
            className="whitespace-nowrap text-2xl xs:text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-gray-800 mb-3 sm:mb-4 lg:mb-5 leading-tight"
            variants={fadeInUp}
          >
            CHARLES EROMOSE
          </motion.h1>

          {/* Code block */}
          <motion.div className="w-full" variants={fadeInUp}>
            <div className="code-display">
              <SyntaxHighlighter
                language="typescript"
                customStyle={{
                  margin: 0,
                  padding: "1.5rem",
                  borderRadius: "20px",
                  background: "rgba(30, 41, 59, 0.9)",
                  backdropFilter: "blur(10px)",
                }}
                style={vscDarkPlus}
              >
{`const aboutMe: DeveloperProfile = {
  name: "Charles Eromose",
  role: "Full Stack Engineer",
  experience: "3+ years",
  stack: {
    frontend: ["React", "TailwindCSS"],
    backend: ["Django", "Node.js"],
    cloud: ["AWS"]
  },
  skills: ["UI design", "API development", "cloud solutions"],
  availability: "Open to opportunities 🚀"
};`}
              </SyntaxHighlighter>
            </div>
          </motion.div>

          {/* Hire Me button */}
          <motion.div
            className="mt-6 flex justify-center lg:justify-start"
            variants={fadeInUp}
          >
            <Link
              to={"/contact"}
              className="px-6 py-3 bg-blue-600 text-white font-medium rounded-md hover:bg-blue-700 transition-colors duration-300 text-sm md:text-base"
            >
              HIRE ME
            </Link>
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
