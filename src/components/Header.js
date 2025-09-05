import React from "react";
import Socials from "./Socials";
import Logo from "../img/header/SmallSquareLogoJpg-removebg-preview.png";
import MobileNav from "./MobileNav";
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <header className="bg-pink-200 fixed w-full px-[30px] lg:px-[100px] z-30 h-[100px] lg:h-[140px] flex items-center">
      <div className="flex flex-row items-center justify-between w-full">
        {/* Logo */}
        <Link to={"/"} className="max-w-[90px]">
          <img src={Logo} alt="portfolio-logo" className="w-full" />
        </Link>

        {/* Nav links: show from md (≈768px) upward */}
        <nav className="hidden md:flex gap-x-8 font-semibold">
          <Link to="/" className="text-[#696c6d] hover:text-primary transition">
            Home
          </Link>
          <Link to="/about" className="text-[#696c6d] hover:text-primary transition">
            About
          </Link>
          <Link to="/services" className="text-[#696c6d] hover:text-primary transition">
            Services
          </Link>
          <Link to="/portfolio" className="text-[#696c6d] hover:text-primary transition">
            Portfolio
          </Link>
          <Link to="/testimonials" className="text-[#696c6d] hover:text-primary transition">
            Testimonials
          </Link>
          <Link to="/blog" className="text-[#696c6d] hover:text-primary transition">
            Blog
          </Link>
          <Link to="/contact" className="text-[#696c6d] hover:text-primary transition">
            Contact
          </Link>
        </nav>

        {/* Social icons (always visible) */}
        <Socials />

        {/* MobileNav only below md */}
        <div className="md:hidden flex justify-end">
          <MobileNav />
        </div>
      </div>
    </header>
  );
};

export default Header;
