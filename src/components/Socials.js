import React from "react";
import { ImFacebook, ImTwitter, ImGithub, ImLinkedin } from "react-icons/im";

const Socials = ({ className = "" }) => {
  return (
    <div className={className}>
      <ul className="flex gap-x-4">
        <li className="text-[#3b5998] text-xl">
          <a href="https://www.facebook.com/eromose.eromose.1" target="_blank" rel="noopener noreferrer">
            <ImFacebook />
          </a>
        </li>
        <li className="text-[#55acee] text-xl">
          <a href="https://x.com/EhiEromoCharles" target="_blank" rel="noopener noreferrer">
            <ImTwitter />
          </a>
        </li>
        <li className="text-[#181616] text-xl">
          <a href="https://github.com/OkuekhamhenEromose" target="_blank" rel="noopener noreferrer">
            <ImGithub />
          </a>
        </li>
        <li className="text-[#007bb6] text-xl">
          <a href="https://www.linkedin.com/in/eromosele-charles-152181337/" target="_blank" rel="noopener noreferrer">
            <ImLinkedin />
          </a>
        </li>
      </ul>
    </div>
  );
};

export default Socials;
