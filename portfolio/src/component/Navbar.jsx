import React, { useState } from "react";

const Navbar = () => {
  const [open, setOpen] = useState(false);

  return (
    <nav
      className="fixed top-4 left-1/2 -translate-x-1/2 z-50
      w-[92%] md:w-[85%] lg:w-[75%]
      backdrop-blur-md bg-white/10 border border-white/20
      rounded-2xl px-6 py-4
      shadow-[0_0_20px_rgba(140,80,255,0.3)]"
    >
      {/* Navbar Container */}
      <div className="flex justify-between items-center">
        
        {/* Logo */}
        <a
          href="#home"
          className="text-transparent bg-clip-text bg-gradient-to-r
          from-purple-400 to-blue-400 font-bold text-2xl"
        >
          Om Shukla
        </a>

        {/* Desktop Menu */}
        <ul className="hidden md:flex space-x-6 text-gray-300">
          <li><a href="#home" className="hover:text-white">Home</a></li>
          <li><a href="#about" className="hover:text-white">About</a></li>
          <li><a href="#projects" className="hover:text-white">Projects</a></li>
          <li><a href="#contact" className="hover:text-white">Contact</a></li>
        </ul>

        {/* Mobile Button */}
        <button
          className="md:hidden text-white text-2xl"
          onClick={() => setOpen(!open)}
        >
          ☰
        </button>
      </div>

      {/* Mobile Menu */}
      {open && (
        <ul
          className="md:hidden mt-6 space-y-4 text-center
          bg-white/10 backdrop-blur-md
          border border-white/20 rounded-xl p-4 text-gray-300"
        >
          <li>
            <a href="#home" onClick={() => setOpen(false)} className="block hover:text-white">
              Home
            </a>
          </li>
          <li>
            <a href="#about" onClick={() => setOpen(false)} className="block hover:text-white">
              About
            </a>
          </li>
          <li>
            <a href="#projects" onClick={() => setOpen(false)} className="block hover:text-white">
              Projects
            </a>
          </li>
          <li>
            <a href="#contact" onClick={() => setOpen(false)} className="block hover:text-white">
              Contact
            </a>
          </li>
        </ul>
      )}
    </nav>
  );
};

export default Navbar;
