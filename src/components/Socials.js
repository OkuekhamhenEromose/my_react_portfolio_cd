import React from "react";
import { ImFacebook, ImTwitter, ImGithub, ImLinkedin } from "react-icons/im";

const Socials = ({ className = "" }) => {
  return (
    <div className={className}>
      <ul className="flex gap-x-4">
        <li className="text-[#3b5998] text-xl">
          <a href="https://facebook.com" target="_blank" rel="noopener noreferrer">
            <ImFacebook />
          </a>
        </li>
        <li className="text-[#55acee] text-xl">
          <a href="https://twitter.com" target="_blank" rel="noopener noreferrer">
            <ImTwitter />
          </a>
        </li>
        <li className="text-[#181616] text-xl">
          <a href="https://github.com" target="_blank" rel="noopener noreferrer">
            <ImGithub />
          </a>
        </li>
        <li className="text-[#007bb6] text-xl">
          <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer">
            <ImLinkedin />
          </a>
        </li>
      </ul>
    </div>
  );
};

export default Socials;
