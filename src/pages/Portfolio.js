import React, { useState } from "react";
import { Link } from "react-router-dom";
import { ExternalLink, Github, ChevronLeft, ChevronRight } from "lucide-react";
import Skills from "../components/Skills";
import { portfolioProjects, projectCategories } from "../components/dummydata";
import { motion } from "framer-motion";

// 🔹 Animation Variants
const fadeInUp = {
  initial: { opacity: 0, y: 20 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.6 },
};

const staggerContainer = {
  animate: {
    transition: {
      staggerChildren: 0.15,
    },
  },
};

const Portfolio = () => {
  const [activeCategory, setActiveCategory] = useState("all");
  const [filteredProjects, setFilteredProjects] = useState(portfolioProjects);
  const [currentPage, setCurrentPage] = useState(1);
  const projectsPerPage = 4;

  const handleCategoryChange = (categoryId) => {
    setActiveCategory(categoryId);
    setCurrentPage(1); // Reset to first page
    if (categoryId === "all") {
      setFilteredProjects(portfolioProjects);
    } else {
      const filtered = portfolioProjects.filter(
        (project) => project.category === categoryId
      );
      setFilteredProjects(filtered);
    }
  };

  // Pagination logic
  const totalPages = Math.ceil(filteredProjects.length / projectsPerPage);
  const startIndex = (currentPage - 1) * projectsPerPage;
  const currentProjects = filteredProjects.slice(
    startIndex,
    startIndex + projectsPerPage
  );

  const handlePrevPage = () => setCurrentPage((p) => Math.max(p - 1, 1));
  const handleNextPage = () => setCurrentPage((p) => Math.min(p + 1, totalPages));

  return (
    <motion.section
      id="portfolio"
      className="section bg-white flex flex-col justify-center"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.8, delay: 0.2 }}
    >
      <div className="container mx-auto flex flex-col lg:flex-row items-center justify-center gap-8 lg:gap-12 px-4 mt-20">
        {/* 🔹 Left Side - Text */}
        <motion.div
          className="w-full lg:w-2/5 flex flex-col items-center lg:items-start text-center lg:text-left"
          variants={staggerContainer}
          initial="initial"
          animate="animate"
        >
          <motion.h1 className="h1 mb-4" variants={fadeInUp}>
            Portfolio
          </motion.h1>

          <motion.p className="p mb-3" variants={fadeInUp}>
            Here you'll find a collection of projects I've built—ranging from
            full-stack applications to problem-solving experiments. Each project
            reflects my focus on clean code, scalable architecture, and
            user-friendly design.
          </motion.p>

          <motion.p className="p mb-5" variants={fadeInUp}>
            I enjoy turning ideas into working solutions, and this portfolio
            showcases the range of technologies and skills I bring to every
            build.
          </motion.p>

          <motion.div variants={fadeInUp}>
            <Link to="/contact" className="btn">
              Hire Me
            </Link>
          </motion.div>
        </motion.div>

        {/* 🔹 Right Side - Projects */}
        <motion.div
          className="w-full lg:w-3/5 mt-8 lg:mt-0"
          variants={staggerContainer}
          initial="initial"
          animate="animate"
        >
          {/* Project grid */}
          <motion.div
            className="grid grid-cols-2 gap-3 md:gap-4 mb-4"
            variants={staggerContainer}
          >
            {currentProjects.map((project) => (
              <motion.div
                key={project.id}
                className="group relative overflow-hidden rounded-lg shadow-md hover:shadow-lg transition-all duration-300"
                variants={fadeInUp}
                whileHover={{ y: -5 }}
              >
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-36 md:h-40 object-cover group-hover:scale-105 transition-transform duration-500"
                />

                {/* Overlay */}
                <div className="absolute inset-0 bg-black bg-opacity-0 group-hover:bg-opacity-70 transition-all duration-300 flex items-center justify-center opacity-0 group-hover:opacity-100">
                  <div className="text-center text-white p-4">
                    <h3 className="h3 text-white text-sm mb-1">
                      {project.title}
                    </h3>
                    <p className="p text-xs mb-3 opacity-90">
                      {project.description}
                    </p>
                    <div className="flex justify-center gap-2">
                      <a
                        href={project.liveLink}
                        target="_blank"
                        rel="noreferrer"
                        className="p-1.5 bg-white bg-opacity-20 rounded-full hover:bg-opacity-30 transition"
                      >
                        <ExternalLink size={14} />
                      </a>
                      <a
                        href={project.github}
                        target="_blank"
                        rel="noreferrer"
                        className="p-1.5 bg-white bg-opacity-20 rounded-full hover:bg-opacity-30 transition"
                      >
                        <Github size={14} />
                      </a>
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </motion.div>

          {/* Pagination */}
          {totalPages > 1 && (
            <motion.div
              className="flex justify-center items-center gap-4 mb-4"
              variants={fadeInUp}
            >
              <button
                onClick={handlePrevPage}
                disabled={currentPage === 1}
                className={`p-2 rounded-full transition-all duration-300 ${
                  currentPage === 1
                    ? "bg-gray-100 text-gray-400 cursor-not-allowed"
                    : "bg-gray-200 text-gray-600 hover:bg-gray-300"
                }`}
              >
                <ChevronLeft size={16} />
              </button>

              <span className="text-sm text-gray-600 font-medium">
                {currentPage} of {totalPages}
              </span>

              <button
                onClick={handleNextPage}
                disabled={currentPage === totalPages}
                className={`p-2 rounded-full transition-all duration-300 ${
                  currentPage === totalPages
                    ? "bg-gray-100 text-gray-400 cursor-not-allowed"
                    : "bg-gray-200 text-gray-600 hover:bg-gray-300"
                }`}
              >
                <ChevronRight size={16} />
              </button>
            </motion.div>
          )}

          {/* Categories */}
          <motion.div
            className="flex flex-wrap justify-center gap-2"
            variants={fadeInUp}
          >
            {projectCategories.map((category) => (
              <button
                key={category.id}
                onClick={() => handleCategoryChange(category.id)}
                className={`px-4 py-2 text-xs font-medium rounded-full transition-all duration-300 ${
                  activeCategory === category.id
                    ? "bg-gray-800 text-white shadow-md"
                    : "bg-gray-100 text-gray-600 hover:bg-gray-200"
                }`}
              >
                {category.name}
                <span className="ml-1 opacity-75">({category.count})</span>
              </button>
            ))}
          </motion.div>
        </motion.div>
      </div>

      {/* 🔹 Skills Section */}
      <div className="flex-shrink-0">
        <Skills />
      </div>
    </motion.section>
  );
};

export default Portfolio;
