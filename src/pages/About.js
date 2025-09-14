import React from "react";
import AbtIMG from "../img/about/IMG_8173.JPG";
import { Link } from "react-scroll";
import Counter from "../components/Counter";

const About = () => {
  return (
    <section className="section min-h-fit py-12 lg:py-16">
      <div className="container mx-auto h-full relative">
        <div className="flex flex-col lg:flex-row h-full items-center justify-center gap-12 lg:gap-16 text-center lg:text-left">
          {/* Image Container - Optimized for viewport */}
          <div className="w-full lg:w-2/5 order-2 lg:order-none flex justify-center">
            <div className="w-4/5 sm:w-3/5 lg:w-full max-w-md">
              <img
                src={AbtIMG}
                alt="Charles Eromose"
                className="w-full h-auto object-contain rounded-lg shadow-lg"
              />
            </div>
          </div>

          {/* Text Content - Optimized spacing */}
          <div className="w-full lg:w-3/5 z-10 flex flex-col justify-start items-center lg:items-start px-4 sm:px-0">
            <h1 className="h1 text-4xl md:text-5xl lg:text-6xl mb-4 lg:mb-6">
              About Me
            </h1>
            <div className="max-w-xl">
              <p className="mb-4 lg:mb-5 text-gray-700 leading-relaxed text-sm md:text-base">
                I'm Charles Eromose Okuekhahmen, a Full Stack Engineer with 3+
                years of experience in web development, databases, and network
                engineering. I've built solutions from school systems to
                e-commerce and blogs, delivering clean UIs, efficient APIs, and
                secure databases that create real impact.
              </p>
              <p className="mb-6 lg:mb-8 text-gray-700 leading-relaxed text-sm md:text-base">
                I enjoy simplifying complex problems into scalable
                solutions—whether through query optimization, secure
                authentication, or cloud deployments with AWS. I'm passionate
                about writing clean, maintainable code and building technology
                that truly makes a difference.
              </p>
            </div>
            <Link
              to={"/portfolio"}
              className="btn px-6 text-base md:text-lg"
            >
              View My Works
            </Link>

            {/* Counter Section - Compact design */}
            <div className="w-full mt-4 lg:mt-6">
              <Counter />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
