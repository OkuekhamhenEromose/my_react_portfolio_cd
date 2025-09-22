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
  SiAmazonaws,
  SiPostgresql,
  SiNextdotjs,
  SiDjango,
  SiExpress,
} from "react-icons/si";

const Skills = () => {
  const skills = [
    { icon: SiHtml5, name: "HTML5" },
    { icon: SiCss3, name: "CSS3" },
    { icon: SiJavascript, name: "JavaScript" },
    { icon: SiReact, name: "React" },
    { icon: SiNextdotjs, name: "Next.js" },
    { icon: SiNodedotjs, name: "Node.js" },
    { icon: SiExpress, name: "Express.js" },
    { icon: SiPython, name: "Python" },
    { icon: SiDjango, name: "Django" },
    { icon: SiMongodb, name: "MongoDB" },
    { icon: SiPostgresql, name: "PostgreSQL" },
    { icon: SiGit, name: "Git" },
    { icon: SiDocker, name: "Docker" },
    { icon: SiAmazonaws, name: "AWS" },
  ];

  // Duplicate 3 times for seamless infinite loop
  const duplicatedSkills = [...skills, ...skills, ...skills];

  return (
    <section className="w-full bg-white dark:bg-darkbg py-4 transition-colors duration-300">
      <div className="container mx-auto px-4">
        <h2 className="h2 text-center mb-6 text-[#003366] dark:text-gray-200">
          Technologies I Work With
        </h2>

        <div className="overflow-hidden">
          <div className="flex gap-8 animate-slideLeft">
            {duplicatedSkills.map((skill, index) => {
              const IconComponent = skill.icon;
              return (
                <div
                  key={index}
                  className="flex flex-col items-center gap-2 min-w-[60px] flex-shrink-0 transition-transform duration-300 hover:scale-110"
                >
                  <IconComponent
                    className="transition duration-300 text-gray-800 dark:text-gray-200"
                    style={{ fontSize: "2.5rem" }}
                  />
                  <span className="font-medium text-gray-600 dark:text-gray-400 text-xs md:text-sm">
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
