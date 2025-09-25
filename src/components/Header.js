import React, { useEffect, useState } from "react";
import Socials from "./Socials";
import Logo from "../img/header/SmallSquareLogoJpg-removebg-preview.png";
import MobileNav from "./MobileNav";
import { NavLink, Link } from "react-router-dom";
import { Sun, Moon, Share2 } from "lucide-react";

const Header = () => {
  const [isVisible, setIsVisible] = useState(true);
  const [isSocialsOpen, setIsSocialsOpen] = useState(false);
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

  // toggle socials dropdown
  const toggleSocials = () => {
    setIsSocialsOpen(!isSocialsOpen);
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
        setIsSocialsOpen(false);
      } else {
        // scrolling up → show
        setIsVisible(true);
      }
      lastScrollY = window.scrollY;
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Close socials when clicking outside
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (isSocialsOpen && !event.target.closest('.socials-container')) {
        setIsSocialsOpen(false);
      }
    };

    document.addEventListener('click', handleClickOutside);
    return () => document.removeEventListener('click', handleClickOutside);
  }, [isSocialsOpen]);

  return (
    <header
      className={`fixed w-full px-4 xs:px-5 sm:px-6 md:px-6 lg:px-8 mt-4 z-30 h-16 lg:h-[60px] flex items-center transition-all duration-500 ${
        isVisible ? "translate-y-0 opacity-100" : "-translate-y-full opacity-0"
      }`}
    >
      <div className="flex flex-row items-center justify-between w-full max-w-7xl mx-auto">
        {/* Logo */}
        <Link to={"/"} className="max-w-[45px] xs:max-w-[50px] md:max-w-[55px] lg:max-w-[60px] xl:max-w-[65px]">
          <img src={Logo} alt="portfolio-logo" className="w-full" />
        </Link>

        {/* Nav + Socials grouped */}
        <div className="hidden md:flex items-center gap-x-3 md:gap-x-4 lg:gap-x-5 xl:gap-x-6 relative">
          {/* Nav links */}
          <nav
            className="
              flex gap-x-3 md:gap-x-4 lg:gap-x-5 xl:gap-x-6 font-semibold 
              px-4 md:px-5 lg:px-6 xl:px-8 py-2.5 md:py-3 lg:py-3 rounded-full
              bg-white shadow-lg border border-gray-200
              dark:bg-gray-800 dark:border-gray-700
              text-sm md:text-sm lg:text-base
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

          {/* Social icons toggle button (md to lg only) */}
          <div className="md:block xl:hidden relative socials-container">
            <button
              onClick={toggleSocials}
              className={`ml-1 md:ml-2 lg:ml-3 p-2 md:p-2.5 rounded-full bg-white shadow-lg border border-gray-200 
                dark:bg-gray-800 dark:border-gray-700 transition-all duration-300
                hover:shadow-xl hover:scale-105 ${
                  isSocialsOpen ? 'bg-blue-50 dark:bg-blue-900/20 border-blue-200 dark:border-blue-700' : ''
                }`}
              aria-label="Toggle social media links"
            >
              <Share2 
                className={`w-4 h-4 md:w-4 md:h-4 text-gray-600 dark:text-gray-300 transition-all duration-300 ${
                  isSocialsOpen ? 'rotate-180 text-blue-600 dark:text-blue-400' : ''
                }`} 
              />
            </button>

            {/* Dropdown social icons */}
            <div
              className={`absolute top-full right-0 mt-2 transition-all duration-300 ease-out ${
                isSocialsOpen
                  ? 'opacity-100 translate-y-0 visible'
                  : 'opacity-0 -translate-y-4 invisible'
              }`}
            >
              <div className="bg-white dark:bg-gray-800 rounded-2xl shadow-xl border border-gray-200 dark:border-gray-700 p-3 md:p-3 min-w-[160px] md:min-w-[170px]">
                <div className="text-xs md:text-sm font-medium text-gray-600 dark:text-gray-400 mb-2 text-center">
                  Connect with me
                </div>
                <Socials className="flex flex-col gap-1" isVertical={true} />
              </div>
            </div>
          </div>

          {/* Regular social icons (xl and up) */}
          <Socials className="hidden xl:flex ml-4 2xl:ml-6" />

          {/* Theme toggle button */}
          <button
            onClick={toggleTheme}
            className="ml-2 md:ml-3 lg:ml-4 xl:ml-5 p-1.5 md:p-2 rounded-full dark:bg-gray-800 dark:border-gray-700 transition-colors hover:shadow-lg hover:scale-105"
          >
            {theme === "light" ? (
              <Moon className="w-4 h-4 md:w-4 md:h-4 text-gray-800 dark:text-gray-200" />
            ) : (
              <Sun className="w-4 h-4 md:w-4 md:h-4 text-yellow-400" />
            )}
          </button>
        </div>

        {/* MobileNav only below md */}
        <div className="md:hidden flex justify-end items-center">
          <MobileNav theme={theme} toggleTheme={toggleTheme} />
        </div>
      </div>
    </header>
  );
};

export default Header;