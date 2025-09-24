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
    let lastScrollY = window.scrollY;

    const handleScroll = () => {
      if (window.scrollY > lastScrollY) {
        // scrolling down → hide
        setIsVisible(false);
      } else {
        // scrolling up → show
        setIsVisible(true);
      }
      lastScrollY = window.scrollY;
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header
      className={`fixed w-full px-[20px] lg:px-[40px] mt-4 z-30 h-[70px] lg:h-[60px] flex items-center transition-all duration-500 ${
        isVisible ? "translate-y-0 opacity-100" : "-translate-y-full opacity-0"
      }`}
    >
      <div className="flex flex-row items-center justify-between w-full">
        {/* Logo */}
        <Link to={"/"} className="max-w-[60px]">
          <img src={Logo} alt="portfolio-logo" className="w-full" />
        </Link>

        {/* Nav + Socials grouped */}
        <div className="hidden md:flex items-center gap-x-2">
          {/* Nav links */}
          <nav
            className="
              flex gap-x-8 font-semibold 
              px-12 py-4 rounded-full
              bg-white shadow-lg border border-gray-200
              dark:bg-gray-800 dark:border-gray-700
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
          <Socials className="hidden xl:flex ml-24" />

          {/* Theme toggle button */}
          <button
            onClick={toggleTheme}
            className="ml-8 p-2 rounded-full bg-white shadow border border-gray-200 dark:bg-gray-800 dark:border-gray-700 transition-colors"
          >
            {theme === "light" ? (
              <Moon className="w-5 h-5 text-gray-800 dark:text-gray-200" />
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
