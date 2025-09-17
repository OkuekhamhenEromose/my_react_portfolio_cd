import React, { useState } from "react";
import { Link } from "react-router-dom";
import { ExternalLink, Github, ChevronLeft, ChevronRight } from "lucide-react";
import Skills from "../components/Skills";
import { portfolioProjects, projectCategories } from "../components/dummydata";

const Portfolio = () => {
  const [activeCategory, setActiveCategory] = useState("all");
  const [filteredProjects, setFilteredProjects] = useState(portfolioProjects);
  const [currentPage, setCurrentPage] = useState(1);
  const projectsPerPage = 4;

  const handleCategoryChange = (categoryId) => {
    setActiveCategory(categoryId);
    setCurrentPage(1); // Reset to first page when category changes
    if (categoryId === "all") {
      setFilteredProjects(portfolioProjects);
    } else {
      const filtered = portfolioProjects.filter(
        (project) => project.category === categoryId
      );
      setFilteredProjects(filtered);
    }
  };

  // Calculate pagination
  const totalPages = Math.ceil(filteredProjects.length / projectsPerPage);
  const startIndex = (currentPage - 1) * projectsPerPage;
  const currentProjects = filteredProjects.slice(startIndex, startIndex + projectsPerPage);

  const handlePrevPage = () => {
    setCurrentPage(prev => Math.max(prev - 1, 1));
  };

  const handleNextPage = () => {
    setCurrentPage(prev => Math.min(prev + 1, totalPages));
  };

  return (
    <div className="min-h-screen flex flex-col justify-center">
      {/* Main Portfolio Content */}
      <section className="flex-grow flex items-center py-6 bg-white">
        <div className="container mx-auto px-4">
          <div className="flex flex-col lg:flex-row items-center justify-center gap-8 lg:gap-12">
            
            {/* Left side - Text content */}
            <div className="w-full lg:w-2/5 flex flex-col items-center lg:items-start text-center lg:text-left">
              <h1 className="text-2xl md:text-3xl font-bold mb-4 text-gray-800">Portfolio</h1>
              <p className="text-gray-600 text-sm leading-relaxed mb-3">
                Here you'll find a collection of projects I've built—ranging from
                full-stack applications to problem-solving experiments. Each
                project reflects my focus on clean code, scalable architecture,
                and user-friendly design.
              </p>
              <p className="text-gray-600 text-sm leading-relaxed mb-5">
                I enjoy turning ideas into working solutions, and this portfolio
                showcases the range of technologies and skills I bring to every
                build.
              </p>
              <Link
                to="/contact"
                className="px-5 py-2 bg-gray-800 text-white font-medium rounded-md shadow hover:bg-gray-900 transition text-sm inline-block"
              >
                Hire Me
              </Link>
            </div>

            {/* Right side - Projects section */}
            <div className="w-full lg:w-3/5 mt-8 lg:mt-0">
              {/* Project grid */}
              <div className="grid grid-cols-2 gap-3 md:gap-4 mb-4">
                {currentProjects.map((project) => (
                  <div
                    key={project.id}
                    className="group relative overflow-hidden rounded-lg shadow-md hover:shadow-lg transition-all duration-300"
                  >
                    <div className="relative">
                      <img
                        src={project.image}
                        alt={project.title}
                        className="w-full h-36 md:h-40 object-cover group-hover:scale-105 transition-transform duration-500"
                      />
                      
                      {/* Overlay on hover */}
                      <div className="absolute inset-0 bg-black bg-opacity-0 group-hover:bg-opacity-70 transition-all duration-300 flex items-center justify-center opacity-0 group-hover:opacity-100">
                        <div className="text-center text-white p-4">
                          <h3 className="font-semibold text-sm mb-1">{project.title}</h3>
                          <p className="text-xs mb-3 opacity-90">{project.description}</p>
                          <div className="flex justify-center gap-2">
                            <button className="p-1.5 bg-white bg-opacity-20 rounded-full hover:bg-opacity-30 transition">
                              <ExternalLink size={14} />
                            </button>
                            <button className="p-1.5 bg-white bg-opacity-20 rounded-full hover:bg-opacity-30 transition">
                              <Github size={14} />
                            </button>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>

              {/* Pagination controls - positioned above category buttons */}
              {totalPages > 1 && (
                <div className="flex justify-center items-center gap-4 mb-4">
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
                </div>
              )}

              {/* Category filter buttons */}
              <div className="flex flex-wrap justify-center gap-2">
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
              </div>
            </div>
          </div>
        </div>
      </section>
      
      {/* Skills Section - Reduced spacing */}
      <div className="flex-shrink-0">
        <Skills />
      </div>
    </div>
  );
};

export default Portfolio;