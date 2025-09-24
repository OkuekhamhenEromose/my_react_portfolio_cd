import React, { useState, useEffect, useRef } from "react";
import { X, Menu } from "lucide-react";
import { motion } from "framer-motion";
import Socials from "./Socials"; // ✅ import socials component

const menuVariants = {
  hidden: { x: "100%" },
  show: {
    x: 0,
    transition: { ease: [0.6, 0.01, -0.05, 0.9], duration: 0.6 },
  },
};

const MobileNav = () => {
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
    { name: "Home", href: "#home" },
    { name: "About", href: "#about" },
    { name: "Services", href: "#services" },
    { name: "Portfolio", href: "#portfolio" },
    { name: "Testimonials", href: "#testimonials" },
    { name: "Contact", href: "#contact" },
  ];

  return (
    <nav className="text-[#003366] lg:hidden">
      {/* Menu Icon */}
      <motion.div
        onClick={() => setOpenMenu(true)}
        className="text-3xl cursor-pointer flex justify-end p-2 hover:bg-gray-100 rounded-lg transition-colors duration-200"
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
      >
        <Menu />
      </motion.div>

      {/* Backdrop (🔹 removed blur) */}
      {openMenu && (
        <motion.div
          className="fixed inset-0 z-40"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
        />
      )}

      {/* Sidebar Menu (🔹 removed blur) */}
      <motion.div
        ref={menuRef}
        variants={menuVariants}
        initial="hidden"
        animate={openMenu ? "show" : "hidden"}
        className="bg-white shadow-2xl w-full absolute top-0 right-0 max-w-xs h-screen z-50 border-l border-gray-200 flex flex-col justify-between"
      >
        {/* Close Icon */}
        <motion.div
          onClick={() => setOpenMenu(false)}
          className="absolute z-30 right-6 top-6 text-[#003366] cursor-pointer p-2 hover:bg-gray-100 rounded-full transition-colors duration-200"
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.9 }}
        >
          <X size={28} />
        </motion.div>

        {/* Menu Links */}
        <div className="flex-1 flex flex-col justify-center items-center px-8">
          <motion.ul
            className="space-y-8"
            initial={{ opacity: 0, y: 20 }}
            animate={openMenu ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
            transition={{ delay: 0.2, staggerChildren: 0.1 }}
          >
            {navItems.map((item, index) => (
              <motion.li
                key={item.name}
                initial={{ opacity: 0, x: 20 }}
                animate={openMenu ? { opacity: 1, x: 0 } : { opacity: 0, x: 20 }}
                transition={{ delay: 0.3 + index * 0.1 }}
              >
                <a
                  href={item.href}
                  onClick={() => setOpenMenu(false)}
                  className="text-[#003366] font-bold text-2xl hover:text-blue-600 transition-colors duration-300 block py-2"
                >
                  {item.name}
                </a>
              </motion.li>
            ))}
          </motion.ul>
        </div>

        {/* Social Icons - Bottom */}
        <div className="flex justify-center items-center py-10">
          <Socials className="flex" />
        </div>
      </motion.div>
    </nav>
  );
};

export default MobileNav;
