import React from "react"; 
import AbtIMG from "../img/about/IMG_8173.JPG";
import { Link } from "react-scroll";
import Counter from "../components/Counter";

const About = () => {
  return (
    <section className="section py-12 lg:py-20 bg-white">
      <div className="container mx-auto h-full">
        {/* Flex container */}
        <div className="flex flex-col lg:flex-row items-center justify-center gap-12 text-center lg:text-left">
          
          {/* Image */}
          <div className="w-full lg:w-1/3 flex justify-center">
            <div className="max-w-[450px] sm:max-w-[400px]">
              <img
                src={AbtIMG}
                alt="Charles Eromose"
                className="w-full h-auto object-cover rounded-lg shadow-lg"
              />
            </div>
          </div>

          {/* Text */}
          <div className="w-full lg:w-2/3 flex flex-col justify-center items-center lg:items-start px-4">
            <h1 className="text-4xl md:text-5xl font-bold mb-6">
              About Me
            </h1>
            <div className="max-w-2xl">
              <p className="mb-4 text-gray-700 leading-relaxed text-base">
                I'm Charles Eromose Okuekhahmen, a Full Stack Engineer with 3+
                years of experience in web development, databases, and network
                engineering. I've built solutions from school systems to
                e-commerce and blogs, delivering clean UIs, efficient APIs, and
                secure databases that create real impact.
              </p>
              <p className="mb-6 text-gray-700 leading-relaxed text-base">
                I enjoy simplifying complex problems into scalable solutions—
                whether through query optimization, secure authentication, or
                cloud deployments with AWS. I'm passionate about writing clean,
                maintainable code and building technology that truly makes a
                difference.
              </p>
            </div>
            <Link
              to={"/portfolio"}
              className="btn px-6 text-base md:text-lg"
            >
              View My Works
            </Link>

            {/* Counter Section */}
            <div className="w-full mt-14">
              <Counter />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
