import React from "react";
import Socials from "./Socials";
import Logo from "../img/header/SmallSquareLogoJpg-removebg-preview.png";
import MobileNav from "./MobileNav";

import { Link } from "react-router-dom";

const Header = () => {
  return (
    <header className="bg-pink-200 fixed w-full px-[30px] lg:px-[100px] z-30 h-[100px] lg:h-[140px] flex items-center">
      <div className="flex flex-col lg:flex-row lg:items-center w-full justify-between">
        <Link to={"/"}>
          <img src={Logo} alt="" />
        </Link>
        <nav className="hidden lg:flex gap-x-12 font-semibold">
          <Link
            to={"/"}
            className="text-[#696c6d] hover:text-primary transition"
          >
            Home
          </Link>
          <Link
            to={"/"}
            className="text-[#696c6d] hover:text-primary transition"
          >
            About
          </Link>
          <Link
            to={"/"}
            className="text-[#696c6d] hover:text-primary transition"
          >
            Services
          </Link>
          <Link
            to={"/"}
            className="text-[#696c6d] hover:text-primary transition"
          >
            Portfolio
          </Link>
          <Link
            to={"/"}
            className="text-[#696c6d] hover:text-primary transition"
          >
            Testimonials
          </Link>
          <Link
            to={"/"}
            className="text-[#696c6d] hover:text-primary transition"
          >
            Blog
          </Link>
          <Link
            to={"/"}
            className="text-[#696c6d] hover:text-primary transition"
          >
            Contact
          </Link>
        </nav>
      </div>
    </header>
  );
};

export default Header;
