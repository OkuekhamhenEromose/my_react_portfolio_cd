import React from "react";
import Socials from "./Socials";
import Logo from "../img/header/SmallSquareLogoJpg-removebg-preview.png";
import MobileNav from "./MobileNav";
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <header className="fixed w-full px-[30px] lg:px-[100px] z-30 h-[100px] lg:h-[80px] flex items-center">
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
              px-12 py-4 rounded-xl
              bg-gray-300/30 backdrop-blur-md
              shadow-lg
            "
          >
            <Link
              to="/"
              className="text-[#003366] hover:text-blue-700 transition"
            >
              Home
            </Link>
            <Link
              to="/about"
              className="text-[#003366] hover:text-blue-500 transition"
            >
              About
            </Link>
            <Link
              to="/services"
              className="text-[#003366] hover:text-blue-500 transition"
            >
              Services
            </Link>
            <Link
              to="/portfolio"
              className="text-[#003366] hover:text-blue-500 transition"
            >
              Portfolio
            </Link>
            <Link
              to="/testimonials"
              className="text-[#003366] hover:text-blue-500 transition"
            >
              Testimonials
            </Link>
            <Link
              to="/contact"
              className="text-[#003366] hover:text-[#0066cc] transition"
            >
              Contact
            </Link>
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
