import React from "react";
import { project } from "./dummydata";
import CountUp from "react-countup";

const Counter = () => {
  return (
      <div className="mx-auto grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-5">
        {project.map((item) => (
          <div 
            key={item.id} 
            className="bg-white rounded-lg shadow-md p-4 md:p-5 transition-transform duration-300 ease-in-out hover:-translate-y-1 text-center" 
            data-aos='zoom-in'
          >
            <div className="mb-1 md:mb-2 flex justify-center">
              {item.icon}
            </div>
            <h1 className="text-2xl md:text-3xl font-bold text-gray-800">
              <CountUp enableScrollSpy duration={2} end={item.num} />+
            </h1>
            <h3 className="text-xs md:text-sm text-gray-600 font-medium">
              {item.title}
            </h3>
          </div>
        ))}
      </div>
  );
};

export default Counter;