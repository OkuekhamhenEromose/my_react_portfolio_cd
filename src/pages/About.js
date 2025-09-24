import React from "react";
import AbtIMG from "../img/about/IMG_8173.JPG";
import { Link } from "react-scroll";
import Counter from "../components/Counter";
import { motion } from "framer-motion";

const About = () => {
  // Enhanced animations
  const containerAnimation = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.3
      }
    }
  };

  const zoomIn = {
    hidden: { opacity: 0, scale: 0.9 },
    visible: {
      opacity: 1,
      scale: 1,
      transition: { 
        duration: 0.8, 
        ease: [0.25, 0.46, 0.45, 0.94] 
      }
    }
  };

  const fadeInDown = {
    hidden: { opacity: 0, y: -30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { 
        duration: 0.8, 
        ease: "easeOut" 
      }
    }
  };

  const fadeInUp = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { 
        duration: 0.8, 
        ease: "easeOut" 
      }
    }
  };

  return (
    <motion.section 
      className="section"
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.1 }}
      variants={containerAnimation}
    >
      <div className="container mt-20 mx-auto h-full flex flex-col lg:flex-row items-center justify-center gap-12 text-center lg:text-left px-4">
        
        {/* Image */}
        <motion.div 
          className="w-full lg:w-1/3 flex justify-center"
          variants={zoomIn}
        >
          <div className="max-w-[450px] sm:max-w-[400px]">
            <img
              src={AbtIMG}
              alt="Charles Eromose"
              className="w-full h-auto object-cover rounded-lg shadow-lg"
            />
          </div>
        </motion.div>

        {/* Text Content */}
        <motion.div 
          className="w-full lg:w-2/3 flex flex-col justify-center items-center lg:items-start"
          variants={containerAnimation}
        >
          <motion.h1
            className="h1 mb-4"
            variants={fadeInDown}
          >
            About Me
          </motion.h1>

          <div className="max-w-2xl">
            <motion.p
              className="mb-4 leading-relaxed text-base"
              variants={fadeInUp}
            >
              I'm Charles Eromose Okuekhahmen, a Full Stack Engineer with 3+
              years of experience in web development, databases, and network
              engineering. I've built solutions from school systems to
              e-commerce and blogs, delivering clean UIs, efficient APIs, and
              secure databases that create real impact.
            </motion.p>
            <motion.p
              className="mb-6 leading-relaxed text-base"
              variants={fadeInUp}
            transition={{ delay: 0.2 }}
            >
              I enjoy simplifying complex problems into scalable solutions—
              whether through query optimization, secure authentication, or
              cloud deployments with AWS. I'm passionate about writing clean,
              maintainable code and building technology that truly makes a
              difference.
            </motion.p>
          </div>

          <motion.div
            variants={fadeInUp}
            transition={{ delay: 0.4 }}
          >
            <Link to={"/portfolio"} className="btn text-base md:text-lg">
              View My Works
            </Link>
          </motion.div>

          {/* Counter Section */}
          <motion.div 
            className="w-full mt-10 mb-6"
            variants={fadeInUp}
            transition={{ delay: 0.6 }}
          >
            <Counter />
          </motion.div>
        </motion.div>
      </div>
    </motion.section>
  );
};

export default About;