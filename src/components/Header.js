import React, { useEffect, useState } from "react";
import Socials from "./Socials";
import Logo from "../img/header/SmallSquareLogoJpg-removebg-preview.png";
import MobileNav from "./MobileNav";
import { NavLink, Link } from "react-router-dom";
import { Sun, Moon } from "lucide-react";

const Header = () => {
  const [isVisible, setIsVisible] = useState(true);
  const [theme, setTheme] = useState(
    localStorage.getItem("theme") || "light"
  );

  // toggle theme
  const toggleTheme = () => {
    const newTheme = theme === "light" ? "dark" : "light";
    setTheme(newTheme);
    localStorage.setItem("theme", newTheme);
    document.documentElement.classList.toggle("dark", newTheme === "dark");
  };

  // set initial theme
  useEffect(() => {
    if (theme === "dark") {
      document.documentElement.classList.add("dark");
    } else {
      document.documentElement.classList.remove("dark");
    }
  }, [theme]);

  // hide/show header on scroll
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 0) {
        setIsVisible(false);
      } else {
        setIsVisible(true);
      }
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header
      className={`fixed w-full px-[20px] lg:px-[40px] z-30 h-[100px] lg:h-[80px] flex items-center transition-transform duration-500 ${
        isVisible ? "translate-y-0" : "-translate-y-full"
      }`}
    >
      <div className="flex flex-row items-center justify-between w-full">
        {/* Logo */}
        <Link to={"/"} className="max-w-[60px] mt-4">
          <img src={Logo} alt="portfolio-logo" className="w-full" />
        </Link>

        {/* Nav + Socials grouped */}
        <div className="hidden md:flex items-center gap-x-2">
          {/* Nav links */}
          <nav
            className="
              flex gap-x-8 font-semibold 
              px-12 py-4 rounded-full
              bg-gray-300/30 backdrop-blur-md shadow-lg
              dark:bg-gray-800/50
            "
          >
            <NavLink to="/" end className={({ isActive }) => (isActive ? "nav-link active" : "nav-link")}>
              Home
            </NavLink>
            <NavLink to="/about" className={({ isActive }) => (isActive ? "nav-link active" : "nav-link")}>
              About
            </NavLink>
            <NavLink to="/services" className={({ isActive }) => (isActive ? "nav-link active" : "nav-link")}>
              Services
            </NavLink>
            <NavLink to="/portfolio" className={({ isActive }) => (isActive ? "nav-link active" : "nav-link")}>
              Portfolio
            </NavLink>
            <NavLink to="/testimonials" className={({ isActive }) => (isActive ? "nav-link active" : "nav-link")}>
              Testimonials
            </NavLink>
            <NavLink to="/contact" className={({ isActive }) => (isActive ? "nav-link active" : "nav-link")}>
              Contact
            </NavLink>
          </nav>

          {/* Social icons */}
          <Socials />

          {/* Theme toggle button */}
          <button
            onClick={toggleTheme}
            className="ml-8 p-2 rounded-full transition-colors"
          >
            {theme === "light" ? (
              <Moon className="w-5 h-5 text-gray-800" />
            ) : (
              <Sun className="w-5 h-5 text-yellow-400" />
            )}
          </button>
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
