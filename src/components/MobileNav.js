import React, { useState, useEffect, useRef } from "react";
import { IoMdClose } from "react-icons/io";
import { CgMenuRight } from "react-icons/cg";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";

const menuVariants = {
  hidden: {
    x: "100%",
  },
  show: {
    x: 0,
    transition: {
      ease: [0.6, 0.01, -0.05, 0.9],
    },
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
    }
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [openMenu]);

  return (
    <nav className="text-primary">
      {/* Menu Icon (always top-right on small screens) */}
      <div
        onClick={() => setOpenMenu(true)}
        className="text-3xl cursor-pointer flex justify-end"
      >
        <CgMenuRight />
      </div>

      {/* Backdrop */}
      {openMenu && <div className="fixed inset-0 bg-black/40 z-10"></div>}

      {/* Sidebar Menu */}
      <motion.div
        ref={menuRef}
        variants={menuVariants}
        initial="hidden"
        animate={openMenu ? "show" : "hidden"}
        className="bg-white shadow-2xl w-full absolute top-0 right-0 max-w-xs h-screen z-20"
      >
        {/* Close Icon */}
        <div
          onClick={() => setOpenMenu(false)}
          className="text-4xl absolute z-30 right-6 top-5 text-primary cursor-pointer"
        >
          <IoMdClose />
        </div>

        {/* Menu Links */}
        <ul className="h-full flex flex-col justify-center items-center gap-y-8 text-primary font-primary font-bold text-3xl">
          <li><Link to="/" onClick={() => setOpenMenu(false)}>Home</Link></li>
          <li><Link to="/about" onClick={() => setOpenMenu(false)}>About</Link></li>
          <li><Link to="/services" onClick={() => setOpenMenu(false)}>Services</Link></li>
          <li><Link to="/portfolio" onClick={() => setOpenMenu(false)}>Portfolio</Link></li>
          <li><Link to="/testimonials" onClick={() => setOpenMenu(false)}>Testimonials</Link></li>
          <li><Link to="/contact" onClick={() => setOpenMenu(false)}>Contact</Link></li>
        </ul>
      </motion.div>
    </nav>
  );
};

export default MobileNav;
