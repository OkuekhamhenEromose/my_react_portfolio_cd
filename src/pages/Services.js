import React from "react";
import { motion } from "framer-motion";
import { services } from "../components/dummydata";
import { ArrowRight } from "lucide-react";
import { NavLink } from "react-router-dom"; // ✅ import NavLink

const Services = () => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.3,
      },
    },
  };

  const cardVariants = {
    hidden: { opacity: 0, scale: 0.5, y: 50 },
    visible: {
      opacity: 1,
      scale: 1,
      y: 0,
      transition: { type: "spring", duration: 0.8, bounce: 0.4 },
    },
  };

  return (
    <section className="section dark:bg-darkbg transition-colors duration-300">
      <div className="container mt-12 mx-auto px-3 sm:px-4 flex flex-col justify-between h-full py-4">
        {/* Heading */}
        <motion.div
          className="text-center"
          initial={{ opacity: 0, y: -30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, ease: "easeOut" }}
        >
          <h1 className="h1 mb-2 text-[#003366] dark:text-gray-200">
            Services
          </h1>
        </motion.div>

        {/* Services Grid */}
        <motion.div
          className="
            grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 
            gap-4 sm:gap-6 flex-grow place-items-center
          "
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          {services.map((item) => {
            const IconComponent = item.icon;

            return (
              <motion.div
                key={item.id}
                className="
                  relative bg-white dark:bg-[#2a2a2d] 
                  rounded-xl p-4 sm:p-5 shadow-lg overflow-hidden 
                  group cursor-pointer max-w-xs w-full
                  max-[375px]:p-3
                "
                variants={cardVariants}
                whileHover={{ scale: 1.05, y: -8 }}
              >
                {/* Icon */}
                <div className="flex justify-center mb-2">
                  <div
                    className="
                      w-12 h-12 sm:w-16 sm:h-16 
                      rounded-full flex items-center justify-center 
                      bg-gray-300/30 dark:bg-gray-700/50 
                      backdrop-blur-md shadow-lg 
                      group-hover:bg-gray-800 dark:group-hover:bg-gray-600 
                      transition-colors duration-300
                    "
                  >
                    <IconComponent
                      className="
                        text-xl sm:text-2xl 
                        text-[#003366] dark:text-gray-200 
                        group-hover:text-white transition-colors duration-300
                      "
                    />
                  </div>
                </div>

                {/* Title */}
                <h3
                  className="
                    text-base sm:text-lg font-semibold 
                    text-center mb-2 
                    text-[#003366] dark:text-gray-200 
                    group-hover:text-blue-600 dark:group-hover:text-blue-400 
                    transition-colors duration-300
                  "
                >
                  {item.title}
                </h3>

                {/* Description */}
                <p
                  className="
                    text-xs sm:text-sm 
                    text-center leading-relaxed 
                    text-gray-700 dark:text-gray-400 
                    group-hover:text-gray-800 dark:group-hover:text-gray-200 
                    transition-colors duration-300
                  "
                >
                  {item.desc}
                </p>

                {/* View Project */}
                <div
                  className="
                    text-center mt-3 sm:mt-4 
                    opacity-0 group-hover:opacity-100 
                    transition-opacity duration-300
                  "
                >
                  <NavLink
                    to="/portfolio"
                    className="
                      text-blue-600 dark:text-blue-400 
                      text-xs sm:text-sm font-medium 
                      inline-flex items-center hover:underline
                    "
                  >
                    View Project <ArrowRight className="w-3 h-3 sm:w-4 sm:h-4 ml-1" />
                  </NavLink>
                </div>
              </motion.div>
            );
          })}
        </motion.div>
      </div>
    </section>
  );
};

export default Services;
