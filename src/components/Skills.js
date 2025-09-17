import React from "react";
import {
  SiHtml5,
  SiCss3,
  SiJavascript,
  SiReact,
  SiNodedotjs,
  SiPython,
  SiMongodb,
  SiGit,
  SiDocker,
  SiAmazonaws
} from "react-icons/si";

const Skills = () => {
  const skills = [
    { icon: SiHtml5, name: "HTML5" },
    { icon: SiCss3, name: "CSS3" },
    { icon: SiJavascript, name: "JavaScript" },
    { icon: SiReact, name: "React" },
    { icon: SiNodedotjs, name: "Node.js" },
    { icon: SiPython, name: "Python" },
    { icon: SiMongodb, name: "MongoDB" },
    { icon: SiGit, name: "Git" },
    { icon: SiDocker, name: "Docker" },
    { icon: SiAmazonaws, name: "AWS" }
  ];

  // Duplicate the skills array to create seamless looping
  const duplicatedSkills = [...skills, ...skills];

  return (
    <section className="w-full py-4 bg-white">
      <div className="container mx-auto px-4">
        <h2 className="text-xl md:text-2xl font-bold text-center mb-4 text-gray-800">
          Technologies I Work With
        </h2>
        
        <div className="overflow-hidden">
          <div className="flex gap-5 md:gap-8 animate-slideLeft">
            {duplicatedSkills.map((skill, index) => {
              const IconComponent = skill.icon;
              return (
                <div 
                  key={index} 
                  className="flex flex-col items-center gap-1 min-w-[45px] flex-shrink-0 transition-transform duration-300 hover:scale-110"
                >
                  <IconComponent className="text-xl md:text-2xl text-gray-700" />
                  <span className="font-medium text-gray-600 text-[10px] md:text-xs">
                    {skill.name}
                  </span>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;