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
    const link = document.createElement('a');
    link.href = charlesEromoseCV;
    link.download = 'Charles_Eromose_CV.pdf';
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

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
          <motion.p
            className="text-base sm:text-lg text-gray-800 font-semibold tracking-wider"
            variants={fadeInDown} // updated
            initial="hidden"
            animate="visible"
          >
            Hello There!
          </motion.p>

          
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