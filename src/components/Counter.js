import React from "react";
import { project } from "./dummydata";
import CountUp from "react-countup";

const Counter = () => {
  return (
    <div className="mx-auto grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-5">
      {project.map((item) => (
        <div
          key={item.id}
          className="
            bg-white dark:bg-[#2a2a2d] 
            rounded-lg shadow-md p-4 md:p-5 
            transition-transform duration-300 ease-in-out hover:-translate-y-1 
            text-center
          "
          data-aos="zoom-in"
        >
          {/* Icon */}
          <div className="mb-1 md:mb-2 flex justify-center text-gray-800 dark:text-gray-200">
            {item.icon}
          </div>

          {/* Number */}
          <h2 className="h2 text-[#003366] dark:text-gray-200">
            <CountUp enableScrollSpy duration={2} end={item.num} />+
          </h2>

          {/* Title */}
          <h3 className="h3 text-[#003366] dark:text-gray-300">
            {item.title}
          </h3>
        </div>
      ))}
    </div>
  );
};

export default Counter;
