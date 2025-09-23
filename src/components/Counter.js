import React from "react";
import { project } from "./dummydata";
import CountUp from "react-countup";
import { motion } from "framer-motion";

// Enhanced upward animation with spring effect
const cardAnimation = {
  hidden: { 
    opacity: 0, 
    y: 100, // Start further below
    scale: 0.8 
  },
  visible: {
    opacity: 1,
    y: 0,
    scale: 1,
    transition: {
      type: "spring",
      stiffness: 100,
      damping: 15,
      mass: 0.5
    }
  }
};

// Stagger container for sequential animation
const staggerContainer = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.2, // Increased delay for more dramatic effect
      delayChildren: 0.3 // Small delay before starting
    }
  }
};

const Counter = () => {
  return (
    <motion.div
      className="mx-auto grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-5"
      variants={staggerContainer}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.2 }} // Trigger when 20% visible
    >
      {project.map((item, index) => (
        <motion.div
          key={item.id}
          className="
            bg-white dark:bg-[#2a2a2d] 
            rounded-lg shadow-md p-4 md:p-5 
            transition-transform duration-300 ease-in-out hover:-translate-y-2 hover:shadow-lg
            text-center border border-gray-100 dark:border-gray-700
          "
          variants={cardAnimation}
          whileHover={{ 
            scale: 1.05,
            transition: { type: "spring", stiffness: 300 }
          }}
          custom={index} // Pass index for custom delays
        >
          {/* Icon with animation */}
          <motion.div 
            className="mb-1 md:mb-2 flex justify-center text-gray-800 dark:text-gray-200"
            initial={{ scale: 0, rotate: -180 }}
            whileInView={{ scale: 1, rotate: 0 }}
            transition={{ delay: 0.5 + (index * 0.1), type: "spring" }}
            viewport={{ once: true }}
          >
            {item.icon}
          </motion.div>

          {/* Number with countup */}
          <motion.h2 
            className="h2 text-[#003366] dark:text-gray-200 mb-1"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ delay: 0.7 + (index * 0.1) }}
            viewport={{ once: true }}
          >
            <CountUp 
              enableScrollSpy 
              duration={3} 
              end={item.num} 
              delay={0.5}
            />+
          </motion.h2>

          {/* Title */}
          <motion.h3 
            className="h3 text-[#003366] dark:text-gray-300"
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.9 + (index * 0.1) }}
            viewport={{ once: true }}
          >
            {item.title}
          </motion.h3>
        </motion.div>
      ))}
    </motion.div>
  );
};

export default Counter;