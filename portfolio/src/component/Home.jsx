import React from "react";
import { motion } from "framer-motion";

const Home = () => {
  const sentence = "Om Shukla";

  return (
    <section
      id="home"
      className="min-h-screen w-full flex flex-col lg:flex-row justify-center lg:justify-between items-center gap-12 lg:gap-20 px-6 sm:px-10 lg:px-24 pt-24 pb-12"
    >
      {/* Text Content */}
      <motion.div
        initial={{ opacity: 0, x: -50 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
        className="order-2 lg:order-1 flex flex-col items-center lg:items-start max-w-xl text-center lg:text-left z-10"
      >
        <h2 className="text-xl sm:text-2xl font-medium text-purple-400 mb-2">
          Hi, I am
        </h2>
        
        <h1 className="text-5xl sm:text-6xl md:text-7xl font-bold mb-4 text-transparent bg-clip-text bg-gradient-to-r from-purple-400 via-blue-400 to-purple-500 pb-2">
          {sentence.split("").map((char, index) => (
            <motion.span
              key={index}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1, duration: 0.5 }}
              whileHover={{ scale: 1.2, color: "#fff", transition: { duration: 0.2 } }}
              className="inline-block cursor-pointer"
            >
              {char === " " ? "\u00A0" : char}
            </motion.span>
          ))}
        </h1>

        <motion.p 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.8, duration: 0.5 }}
          className="mt-4 text-base sm:text-lg md:text-xl text-gray-300 leading-relaxed font-light"
        >
          A passionate software developer who builds fast, beautiful, and futuristic web
          experiences using <span className="text-white font-semibold">React & modern technologies</span>.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1, duration: 0.5 }}
          className="mt-10 flex gap-4"
        >
          <a
            href="myresume.pdf"
            target="_blank"
            rel="noopener noreferrer"
            className="group relative px-8 py-3 bg-white/10 backdrop-blur-md rounded-full border border-white/20 text-white font-medium overflow-hidden transition-all hover:border-purple-500/50 hover:bg-purple-500/10 hover:shadow-[0_0_20px_rgba(140,80,255,0.4)]"
          >
            <span className="relative z-10 group-hover:text-transparent group-hover:bg-clip-text group-hover:bg-gradient-to-r group-hover:from-purple-400 group-hover:to-blue-400 transition-all duration-300">
              View My Resume
            </span>
            <div className="absolute inset-0 h-full w-full bg-gradient-to-r from-purple-500 to-blue-500 opacity-0 group-hover:opacity-20 transition-opacity duration-300"></div>
          </a>
        </motion.div>
      </motion.div>

      {/* Profile Image */}
      <motion.div
        initial={{ opacity: 0, scale: 0.8, rotate: -5 }}
        animate={{ opacity: 1, scale: 1, rotate: 0 }}
        transition={{ duration: 0.8, delay: 0.2, type: "spring" }}
        className="order-1 lg:order-2 mt-20 lg:mt-0 relative z-10"
      >
        <div className="relative h-48 w-48 sm:h-56 sm:w-56 lg:h-80 lg:w-80 group">
          <div className="absolute inset-0 bg-gradient-to-tr from-purple-500 to-blue-500 rounded-full blur-[80px] opacity-40 group-hover:opacity-70 transition-opacity duration-500"></div>
          <div className="absolute inset-[-4px] bg-gradient-to-tr from-purple-400 to-blue-400 rounded-full animate-spin-slow opacity-50 group-hover:opacity-100 transition-opacity duration-300"></div>
          
          <div className="absolute inset-0 rounded-full border-2 border-white/20 overflow-hidden bg-[#0a0520] z-10">
            <img
              src="image.png"
              alt="Om Shukla"
              className="w-full h-full object-cover object-top transition-transform duration-700 group-hover:scale-110"
            />
          </div>
        </div>
      </motion.div>

      {/* Scroll Down Indicator */}
      <motion.div 
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 2, duration: 1 }}
        className="absolute bottom-10 left-1/2 -translate-x-1/2 hidden md:flex flex-col items-center gap-2"
      >
        <span className="text-gray-400 text-sm tracking-widest uppercase">Scroll</span>
        <motion.div 
          animate={{ y: [0, 8, 0] }}
          transition={{ repeat: Infinity, duration: 1.5 }}
          className="w-5 h-8 border-2 border-gray-400 rounded-full flex justify-center p-1"
        >
          <div className="w-1 h-2 bg-purple-400 rounded-full"></div>
        </motion.div>
      </motion.div>
    </section>
  );
};

export default Home;
