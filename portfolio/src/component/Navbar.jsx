import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

const navLinks = [
  { name: "Home", href: "#home" },
  { name: "About", href: "#about" },
  { name: "Experience", href: "#experience" },
  { name: "Projects", href: "#projects" },
  { name: "Contact", href: "#contact" },
];

const Navbar = () => {
  const [open, setOpen] = useState(false);

  return (
    <nav className="fixed top-4 left-1/2 -translate-x-1/2 z-50 w-[92%] md:w-[85%] lg:w-[75%] backdrop-blur-xl bg-white/5 border border-white/10 rounded-2xl px-6 py-4 shadow-[0_4px_30px_rgba(140,80,255,0.2)]">
      <div className="flex justify-between items-center">
        {/* Logo */}
        <a
          href="#home"
          className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-blue-400 font-bold text-2xl tracking-wide"
        >
          Om Shukla
        </a>

        {/* Desktop Menu */}
        <ul className="hidden md:flex space-x-10 text-slate-300 font-medium text-sm tracking-wide">
          {navLinks.map((link) => (
            <li key={link.name}>
              <a
                href={link.href}
                className="hover:text-white transition-all duration-300 hover:text-purple-400 relative group"
              >
                {link.name}
                <span className="absolute -bottom-1 left-0 w-0 h-[2px] bg-purple-400 transition-all duration-300 group-hover:w-full"></span>
              </a>
            </li>
          ))}
        </ul>

        {/* Mobile Button */}
        <button
          className="md:hidden text-white text-2xl focus:outline-none"
          onClick={() => setOpen(!open)}
        >
          {open ? "✕" : "☰"}
        </button>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {open && (
          <motion.ul
            initial={{ opacity: 0, y: -20, height: 0 }}
            animate={{ opacity: 1, y: 0, height: "auto" }}
            exit={{ opacity: 0, y: -20, height: 0 }}
            transition={{ duration: 0.3 }}
            className="md:hidden mt-4 space-y-4 text-center overflow-hidden"
          >
            {navLinks.map((link) => (
              <motion.li
                key={link.name}
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.1 }}
              >
                <a
                  href={link.href}
                  onClick={() => setOpen(false)}
                  className="block text-gray-300 hover:text-white py-2 text-lg font-medium border-b border-white/5"
                >
                  {link.name}
                </a>
              </motion.li>
            ))}
          </motion.ul>
        )}
      </AnimatePresence>
    </nav>
  );
};

export default Navbar;
