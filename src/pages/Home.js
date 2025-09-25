import React from "react";
import { Link } from "react-router-dom";
import HeroProf from "../img/home/IMG_9910-removebg-preview.png";
import { motion } from "framer-motion";
import { Prism as SyntaxHighlighter } from "react-syntax-highlighter";
import { vscDarkPlus } from "react-syntax-highlighter/dist/esm/styles/prism";
import charlesEromoseCV from "../assets/CharlesEromoseCV.pdf"; // CV file

// Animation Variants
const fadeInUpBounce = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { type: "spring", stiffness: 120, damping: 10 },
  },
};
const staggerContainer = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.15 } },
};
const fadeInDown = {
  hidden: { opacity: 0, y: -20 },
  visible: { opacity: 1, y: 0, transition: { duration: 1.0, ease: "easeOut" } },
};
const zoomIn = {
  initial: { opacity: 0, scale: 0.4 },
  animate: {
    opacity: 1,
    scale: 1,
    transition: { duration: 2.0, ease: "easeOut" },
  },
};

const Home = () => {
  const handleDownloadCV = () => {
    const link = document.createElement("a");
    link.href = charlesEromoseCV;
    link.download = "Charles_Eromose_CV.pdf";
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  return (
    <motion.section
      id="home"
      className="section flex items-center"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.8, delay: 0.2 }}
    >
      <div className="container mx-auto flex flex-col lg:flex-row items-center justify-between px-3 sm:px-4 lg:px-8 h-full">
        {/* 🔹 Left Side */}
        <motion.div
          className="w-full lg:w-[53%] flex flex-col items-center lg:items-start text-center lg:text-left justify-center mt-10 lg:mt-20 order-2 lg:order-1"
          variants={staggerContainer}
        >
          <motion.p
            className="text-sm sm:text-base text-gray-800 font-semibold tracking-wider max-[375px]:text-xs"
            variants={fadeInDown}
          >
            Hello There!
          </motion.p>

          <motion.h1
            className="
              text-2xl xs:text-3xl sm:text-4xl md:text-5xl lg:text-6xl
              font-bold text-gray-800 mb-2 sm:mb-3 lg:mb-4 leading-tight
              max-[375px]:text-xl max-[375px]:leading-snug
            "
            variants={fadeInDown}
          >
            I'm <span className="text-[#003366]">Charles Eromose</span>,
          </motion.h1>

          {/* Code Block */}
          <motion.div
            className="
    w-full 
    max-w-lg sm:max-w-[90%] md:max-w-4xl lg:max-w-5xl 
    max-[375px]:max-w-[90%] max-[375px]:mx-auto
  "
            variants={zoomIn}
          >
            <div
              className="
      code-display overflow-x-auto rounded-lg
      max-[375px]:p-2 max-[375px]:bg-slate-800/90
    "
            >
              <SyntaxHighlighter
                language="typescript"
                customStyle={{
                  margin: 0,
                  borderRadius: "10px",
                  background: "rgba(30, 41, 59, 0.95)",
                  backdropFilter: "blur(10px)",
                  fontSize: "0.7rem", // smaller font for 375px
                  lineHeight: "1.2rem", // tighter spacing
                  padding: "0.75rem",
                  boxShadow: "0 8px 18px rgba(0,0,0,0.15)",
                  whiteSpace: "pre",
                }}
                style={vscDarkPlus}
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
  skills: ["UI/UX design", "API development", "cloud solutions"],
  availability: "Open to opportunities 🚀"
};`}
              </SyntaxHighlighter>
            </div>
          </motion.div>

          {/* Buttons */}
          <motion.div
            className="mt-4 mb-6 flex sm:flex-row gap-4 justify-center lg:justify-start max-[375px]:flex-col max-[375px]:gap-2"
            variants={staggerContainer}
          >
            <motion.a
              variants={fadeInUpBounce}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <Link
                to="/portfolio"
                className="btn text-sm sm:text-base md:text-lg px-4 py-2 max-[375px]:w-full"
              >
                View My Works
              </Link>
            </motion.a>

            <motion.button
              onClick={handleDownloadCV}
              variants={fadeInUpBounce}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="
                relative inline-block btn border border-blue-600 text-[#003366] group overflow-hidden
                bg-gray-300/30 backdrop-blur-md shadow-lg dark:bg-gray-800/50
                text-sm sm:text-base md:text-lg px-4 py-2 max-[375px]:w-full
              "
            >
              <span className="absolute inset-0 h-full w-0 bg-blue-600 transition-all duration-300 ease-linear group-hover:w-full"></span>
              <span className="relative z-10 group-hover:text-white">
                Download CV
              </span>
            </motion.button>
          </motion.div>
        </motion.div>

        {/* 🔹 Right Side - Image */}
        <motion.div
          className="w-full lg:w-1/2 flex justify-center lg:justify-end order-1 lg:order-2"
          initial={{ opacity: 0, x: 50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
        >
          <img
            src={HeroProf}
            alt="Charles Eromose"
            className="
              max-w-[70%] sm:max-w-[60%] md:max-w-[55%] lg:max-w-[80%] h-auto drop-shadow-lg
              max-[375px]:max-w-[75%] max-[375px]:mt-4
            "
          />
        </motion.div>
      </div>
    </motion.section>
  );
};

export default Home;
