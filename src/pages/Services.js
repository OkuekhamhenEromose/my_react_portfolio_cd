import React from "react";
import { services } from "../components/dummydata";
import { motion } from "framer-motion";

// Animation variants
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

const Services = () => {
  return (
    <motion.section
      className="section bg-gray-50"
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6 }}
    >
      <div className="container mx-auto px-4 flex flex-col justify-between h-full py-10">
        {/* Section Heading */}
        <motion.div
          className="text-center"
          variants={fadeInUp}
          initial="initial"
          whileInView="animate"
          viewport={{ once: true }}
        >
          <h1 className="h1 mb-6 mt-4">Services</h1>
        </motion.div>

        {/* Services Grid */}
        <motion.div
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 flex-grow place-items-center"
          variants={staggerContainer}
          initial="initial"
          whileInView="animate"
          viewport={{ once: true }}
        >
          {services.map((item) => {
            const IconComponent = item.icon;

            return (
              <motion.div
                key={item.id}
                className="relative bg-white rounded-xl p-5 shadow-lg overflow-hidden group cursor-pointer transition-all duration-300 max-w-sm w-full"
                variants={fadeInUp}
                whileHover={{
                  y: -10,
                  transition: { duration: 0.2 },
                }}
              >
                {/* Icon with backdrop effect */}
                <div className="flex justify-center mb-2 relative z-10">
                  <motion.div
                    className="w-16 h-16 rounded-full flex items-center justify-center 
                               bg-gray-300/30 backdrop-blur-md shadow-lg 
                               group-hover:bg-gray-800 transition-colors duration-300"
                    whileHover={{
                      rotate: 5,
                      scale: 1.05,
                      transition: { duration: 0.2 },
                    }}
                  >
                    <IconComponent className="text-2xl text-[#003366] group-hover:text-white transition-colors duration-300" />
                  </motion.div>
                </div>

                {/* Title */}
                <h3 className="h3 text-center mb-2 group-hover:text-blue-600 transition-colors duration-300 relative z-10">
                  {item.title}
                </h3>

                {/* Description */}
                <p className="text-sm text-center leading-relaxed group-hover:text-gray-800 transition-colors duration-300 relative z-10">
                  {item.desc}
                </p>

                {/* Hidden Learn More Link */}
                <div className="text-center mt-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300 relative z-10">
                  <span className="text-blue-600 text-sm font-medium inline-flex items-center">
                    Learn more
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="h-4 w-4 ml-1"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M14 5l7 7m0 0l-7 7m7-7H3"
                      />
                    </svg>
                  </span>
                </div>
              </motion.div>
            );
          })}
        </motion.div>
      </div>
    </motion.section>
  );
};

export default Services;
