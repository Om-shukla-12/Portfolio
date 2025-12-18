import React from "react";
import { FaLinkedin } from "react-icons/fa";
import { VscGithub } from "react-icons/vsc";

const Footer = () => {
  return (
    <footer
      className="w-full mt-16 px-6 py-8 border-t border-white/10 
      bg-black/40 backdrop-blur-md text-gray-300"
    >
      <div className="max-w-6xl mx-auto flex flex-col md:flex-row 
      items-center justify-between gap-6 text-center md:text-left">

        {/* Copyright */}
        <p className="text-sm">
          © {new Date().getFullYear()}{" "}
          <span className="text-white font-semibold">Om Shukla</span>.  
          All rights reserved.
        </p>

        {/* Navigation Links */}
        <ul className="flex flex-wrap justify-center gap-6 text-sm">
         
          <li><a  href="#contact">Contact</a></li>
          <li><a href="#about">About</a></li>
          <li>Privacy & Policy</li>
          <li>Terms & Conditions </li>
          
        </ul>

        {/* Social Icons */}
        <div className="flex gap-5 text-2xl">
          <a
            href="https://www.linkedin.com/in/om-shukal-1a1196274/"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-blue-500 transition-transform hover:scale-110"
          >
            <FaLinkedin />
          </a>

          <a
            href="https://github.com/Om-shukla-12"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-gray-100 transition-transform hover:scale-110"
          >
            <VscGithub />
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
