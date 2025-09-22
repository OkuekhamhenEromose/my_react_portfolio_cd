import React, { useEffect, useState } from "react";
import Socials from "./Socials";
import Logo from "../img/header/SmallSquareLogoJpg-removebg-preview.png";
import MobileNav from "./MobileNav";
import { NavLink, Link } from "react-router-dom";

const Header = () => {
  const [isVisible, setIsVisible] = useState(true);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 0) {
        setIsVisible(false); // hide when not at top
      } else {
        setIsVisible(true); // show when at top
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header
      className={`fixed w-full px-[30px] lg:px-[100px] z-30 h-[100px] lg:h-[80px] flex items-center transition-transform duration-500 ${
        isVisible ? "translate-y-0" : "-translate-y-full"
      }`}
    >
      <div className="flex flex-row items-center justify-between w-full">
        {/* Logo */}
        <Link to={"/"} className="max-w-[60px] mt-4">
          <img src={Logo} alt="portfolio-logo" className="w-full" />
        </Link>

        {/* Nav + Socials grouped */}
        <div className="hidden md:flex items-center gap-x-6">
          {/* Nav links */}
          <nav
            className="
              flex gap-x-8 font-semibold 
              px-12 py-4 rounded-full
              bg-gray-300/30 backdrop-blur-md
              shadow-lg
            "
          >
            <NavLink
              to="/"
              end
              className={({ isActive }) =>
                isActive ? "nav-link active" : "nav-link"
              }
            >
              Home
            </NavLink>
            <NavLink
              to="/about"
              className={({ isActive }) =>
                isActive ? "nav-link active" : "nav-link"
              }
            >
              About
            </NavLink>
            <NavLink
              to="/services"
              className={({ isActive }) =>
                isActive ? "nav-link active" : "nav-link"
              }
            >
              Services
            </NavLink>
            <NavLink
              to="/portfolio"
              className={({ isActive }) =>
                isActive ? "nav-link active" : "nav-link"
              }
            >
              Portfolio
            </NavLink>
            <NavLink
              to="/testimonials"
              className={({ isActive }) =>
                isActive ? "nav-link active" : "nav-link"
              }
            >
              Testimonials
            </NavLink>
            <NavLink
              to="/contact"
              className={({ isActive }) =>
                isActive ? "nav-link active" : "nav-link"
              }
            >
              Contact
            </NavLink>
          </nav>

          {/* Social icons */}
          <Socials />
        </div>

        {/* MobileNav only below md */}
        <div className="md:hidden flex justify-end">
          <MobileNav />
        </div>
      </div>
    </header>
  );
};

export default Header;
