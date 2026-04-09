import React from "react";
import { FaLinkedin } from "react-icons/fa";
import { VscGithub } from "react-icons/vsc";

const Footer = () => {
  return (
    <footer className="w-full mt-24 px-6 md:px-16 pt-12 pb-8 border-t border-white/10 bg-black/40 backdrop-blur-xl relative z-10">
      <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center justify-between gap-8 md:gap-0">
        
        {/* Brand / Copyright */}
        <div className="flex flex-col items-center md:items-start">
          <a
            href="#home"
            className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-blue-400 font-bold text-2xl tracking-wide mb-2 inline-block"
          >
            Om Shukla
          </a>
          <p className="text-sm text-gray-400">
            © {new Date().getFullYear()} All rights reserved.
          </p>
        </div>

        {/* Navigation Links */}
        <ul className="flex flex-wrap justify-center gap-x-8 gap-y-4 text-sm font-medium text-gray-300">
          <li><a href="#about" className="hover:text-purple-400 transition-colors duration-300">About</a></li>
          <li><a href="#experience" className="hover:text-purple-400 transition-colors duration-300">Experience</a></li>
          <li><a href="#projects" className="hover:text-purple-400 transition-colors duration-300">Projects</a></li>
          <li><a href="#contact" className="hover:text-purple-400 transition-colors duration-300">Contact</a></li>
        </ul>

        {/* Social Icons */}
        <div className="flex gap-4">
          <a
            href="https://www.linkedin.com/in/om-shukal-1a1196274/"
            target="_blank"
            rel="noopener noreferrer"
            className="w-10 h-10 rounded-full bg-white/5 border border-white/10 flex items-center justify-center text-xl text-gray-300 hover:text-white hover:bg-purple-500/20 hover:border-purple-500/50 transition-all duration-300 shadow-lg hover:shadow-[0_0_15px_rgba(140,80,255,0.4)]"
            aria-label="LinkedIn"
          >
            <FaLinkedin />
          </a>

          <a
            href="https://github.com/Om-shukla-12"
            target="_blank"
            rel="noopener noreferrer"
            className="w-10 h-10 rounded-full bg-white/5 border border-white/10 flex items-center justify-center text-xl text-gray-300 hover:text-white hover:bg-blue-500/20 hover:border-blue-500/50 transition-all duration-300 shadow-lg hover:shadow-[0_0_15px_rgba(59,130,246,0.4)]"
            aria-label="GitHub"
          >
            <VscGithub />
          </a>
        </div>
      </div>
      
      {/* Decorative center line */}
      <div className="max-w-6xl mx-auto mt-8 h-[1px] bg-gradient-to-r from-transparent via-white/10 to-transparent"></div>
    </footer>
  );
};

export default Footer;
