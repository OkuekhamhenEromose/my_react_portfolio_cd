import React from "react";
import { ImFacebook, ImTwitter, ImGithub, ImLinkedin } from "react-icons/im";
import { motion } from "framer-motion";

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
      delayChildren: 0.1,
    },
  },
};

const itemVariants = {
  hidden: {
    opacity: 0,
    y: 10,
    scale: 0.8,
  },
  visible: {
    opacity: 1,
    y: 0,
    scale: 1,
    transition: {
      type: "spring",
      stiffness: 300,
      damping: 20,
    },
  },
};

const hoverVariants = {
  hover: {
    scale: 1.1,
    y: -2,
    transition: {
      type: "spring",
      stiffness: 400,
      damping: 10,
    },
  },
  tap: {
    scale: 0.95,
  },
};

const Socials = ({ className = "", isVertical = false }) => {
  const socialLinks = [
    {
      href: "https://www.facebook.com/eromose.eromose.1",
      icon: ImFacebook,
      color: "text-[#3b5998]",
      label: "Facebook",
    },
    {
      href: "https://x.com/EhiEromoCharles",
      icon: ImTwitter,
      color: "text-[#55acee]",
      label: "Twitter",
    },
    {
      href: "https://github.com/OkuekhamhenEromose",
      icon: ImGithub,
      color: "text-[#181616] dark:text-gray-300",
      label: "GitHub",
    },
    {
      href: "https://www.linkedin.com/in/eromosele-charles-152181337/",
      icon: ImLinkedin,
      color: "text-[#007bb6]",
      label: "LinkedIn",
    },
  ];

  return (
    <div className={className}>
      <motion.ul
        className={`flex flex-wrap ${
          isVertical ? "flex-col gap-y-2" : "gap-x-2 xs:gap-x-3"
        } items-center justify-center`}
        variants={containerVariants}
        initial="hidden"
        animate="visible"
      >
        {socialLinks.map((social, index) => {
          const IconComponent = social.icon;
          return (
            <motion.li
              key={social.label}
              className={`${social.color}`}
              variants={itemVariants}
              whileHover="hover"
              whileTap="tap"
            >
              <motion.a
                href={social.href}
                target="_blank"
                rel="noopener noreferrer"
                className={`
                  ${
                    isVertical
                      ? "flex items-center gap-3 p-2 rounded-lg hover:bg-gray-100 dark:hover:bg-gray-700 w-full text-base"
                      : "block p-2 rounded-full hover:bg-gray-100 dark:hover:bg-gray-700 text-lg xs:text-xl"
                  } 
                  transition-colors duration-300
                `}
                variants={hoverVariants}
                aria-label={social.label}
              >
                <IconComponent className="w-full h-auto" />
                {isVertical && (
                  <span className="text-sm font-medium text-gray-700 dark:text-gray-300">
                    {social.label}
                  </span>
                )}
              </motion.a>
            </motion.li>
          );
        })}
      </motion.ul>
    </div>
  );
};

export default Socials;
