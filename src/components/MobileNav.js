import React, { useState, useEffect, useRef } from "react";
import { X, Menu, Sun, Moon } from "lucide-react";
import { motion } from "framer-motion";
import Socials from "./Socials";
import { NavLink } from "react-router-dom";

const menuVariants = {
  hidden: { x: "100%" },
  show: {
    x: 0,
    transition: { ease: [0.6, 0.01, -0.05, 0.9], duration: 0.6 },
  },
};

const MobileNav = ({ theme, toggleTheme }) => {
  const [openMenu, setOpenMenu] = useState(false);
  const menuRef = useRef(null);

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (menuRef.current && !menuRef.current.contains(event.target)) {
        setOpenMenu(false);
      }
    };
    if (openMenu) {
      document.addEventListener("mousedown", handleClickOutside);
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "unset";
    }
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
      document.body.style.overflow = "unset";
    };
  }, [openMenu]);

  const navItems = [
    { name: "Home", href: "/" },
    { name: "About", href: "/about" },
    { name: "Services", href: "/services" },
    { name: "Portfolio", href: "/portfolio" },
    { name: "Testimonials", href: "/testimonials" },
    { name: "Contact", href: "/contact" },
  ];

  return (
    <nav className="text-[#003366] lg:hidden flex items-center">
      {/* Theme Toggle Button */}
      <motion.button
        onClick={toggleTheme}
        className="p-2 transition-colors hover:shadow-lg rounded-full mr-2 xs:mr-3"
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
      >
        {theme === "light" ? (
          <Moon className="w-5 h-5 xs:mr-6" />
        ) : (
          <Sun className="w-5 h-5 text-yellow-400" />
        )}
      </motion.button>

      {/* Menu Icon */}
      <motion.div
        onClick={() => setOpenMenu(true)}
        className="cursor-pointer flex justify-end p-2 hover:bg-gray-100 rounded-lg transition-colors duration-200"
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
      >
        <Menu />
      </motion.div>

      {/* Backdrop */}
      {openMenu && (
        <motion.div
          className="fixed inset-0 z-40"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
        />
      )}

      {/* Sidebar Menu */}
      <motion.div
        ref={menuRef}
        variants={menuVariants}
        initial="hidden"
        animate={openMenu ? "show" : "hidden"}
        className="bg-white dark:bg-gray-800 w-full absolute top-0 right-0 max-w-xs h-screen z-50 dark:border-gray-700 flex flex-col justify-between"
      >
        {/* Close Icon and Theme Toggle */}
        <div className="absolute top-6 right-6 flex items-center gap-3">
          {/* Theme Toggle inside menu */}
          <motion.button
            onClick={toggleTheme}
            className="p-2 rounded-full bg-white dark:bg-gray-800 dark:border-gray-700 transition-colors hover:shadow-lg"
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
          >
            {theme === "light" ? (
              <Moon className="w-5 h-5 text-gray-800 dark:text-gray-200" />
            ) : (
              <Sun className="w-5 h-5 text-yellow-400" />
            )}
          </motion.button>

          {/* Close Icon */}
          <motion.div
            onClick={() => setOpenMenu(false)}
            className="text-[#003366] dark:text-gray-200 cursor-pointer p-2 hover:bg-gray-100 dark:hover:bg-gray-700 rounded-full transition-colors duration-200"
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
          >
            <X size={28} />
          </motion.div>
        </div>

        {/* Menu Links */}
        <div className="flex-1 flex flex-col justify-center items-center px-8">
          <motion.ul
            className="space-y-4 w-full"
            initial={{ opacity: 0, y: 20 }}
            animate={openMenu ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
            transition={{ delay: 0.2, staggerChildren: 0.1 }}
          >
            {navItems.map((item, index) => (
              <motion.li
                key={item.name}
                initial={{ opacity: 0, x: 20 }}
                animate={
                  openMenu ? { opacity: 1, x: 0 } : { opacity: 0, x: 20 }
                }
                transition={{ delay: 0.3 + index * 0.1 }}
                className="flex justify-center"
              >
                <NavLink
                  to={item.href}
                  onClick={() => setOpenMenu(false)}
                  className={({ isActive }) =>
                    isActive
                      ? "nav-link active text-xl font-bold inline-block px-3 py-1"
                      : "nav-link text-xl font-bold inline-block px-3 py-1"
                  }
                >
                  {item.name}
                </NavLink>
              </motion.li>
            ))}
          </motion.ul>
        </div>

        {/* Social Icons - Bottom */}
        <div className="flex justify-center items-center py-6 xs:py-8 px-4">
          <div className="w-full text-center">
            <p className="text-sm xs:text-base font-semibold text-[#003366] dark:text-gray-400 mb-3 xs:mb-4">
              Connect with me
            </p>
            <Socials className="flex justify-center flex-wrap gap-2 xs:gap-3" />
          </div>
        </div>
      </motion.div>
    </nav>
  );
};

export default MobileNav;
