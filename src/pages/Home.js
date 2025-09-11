import React from "react";
import HeroProf from "../img/home/IMG_9910-removebg-preview.png";
import { Link } from "react-router-dom";

const Home = () => {
  return (
    <section className="section bg-gray-50 min-h-screen flex items-center py-12 md:py-20">
      <div className="container mx-auto h-full relative flex flex-col lg:flex-row items-center px-4 sm:px-6 lg:px-8">
        {/* Image Container */}
        <div className="w-full lg:flex-1 order-first lg:order-last mb-6 md:mb-8 lg:mb-0">
          <div className="flex justify-center lg:justify-end">
            <img 
              src={HeroProf} 
              alt="Charles Eromose" 
              className="max-w-[60%] xs:max-w-[55%] sm:max-w-[50%] md:max-w-[45%] lg:max-w-full h-auto"
            />
          </div>
        </div>
        
        {/* Text Content */}
        <div className="w-full lg:w-auto z-10 flex flex-col justify-center items-center lg:items-start text-center lg:text-left px-2 sm:px-4 lg:px-0 order-last lg:order-first mt-2 md:mt-4">
          <p className="text-base sm:text-lg text-gray-600 mb-3 sm:mb-4 font-semibold tracking-wider">
            THIS IS ME
          </p>
          <h1 className="text-3xl xs:text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold text-gray-800 mb-4 sm:mb-5 lg:mb-6 leading-tight">
            CHARLES EROMOSE
          </h1>
          <p className="text-base sm:text-lg md:text-xl text-gray-600 mb-6 sm:mb-7 lg:mb-8 max-w-xl leading-relaxed px-2 sm:px-0">
            Full Stack Engineer with 3+ years of experience building scalable web applications using React, Django, and Node.js. Skilled in UI design, API development, and cloud solutions with AWS.
          </p>
          <Link 
            to={'/contact'} 
            className="px-6 py-3 md:px-8 md:py-4 bg-blue-600 text-white font-medium rounded-md hover:bg-blue-700 transition-colors duration-300 text-sm md:text-base mb-4 sm:mb-0"
          >
            HIRE ME
          </Link>
        </div>
      </div>
    </section>
  );
};

export default Home;