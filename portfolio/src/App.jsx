import React from "react";
import Navbar from "./component/Navbar";
import Home from "./component/Home";
import About from "./component/About";
import Experience from "./component/Experience";
import { Projects } from "./component/Projects";
import { Contact } from "./component/Contact";
import Footer from "./component/Footer";
import Skills from "./component/Skills";
import { motion } from "framer-motion";
const App = () => {
  return (
    <div className="relative min-h-screen w-full bg-[#030014] overflow-hidden text-gray-100 flex flex-col font-sans">
      {/* Background glow effects */}
      <div className="fixed top-0 left-0 w-full h-full overflow-hidden -z-10 pointer-events-none">
        <div className="absolute top-[-10%] left-[-10%] w-[40%] h-[40%] rounded-full bg-purple-900/20 blur-[120px]"></div>
        <div className="absolute bottom-[-10%] right-[-10%] w-[40%] h-[40%] rounded-full bg-blue-900/20 blur-[120px]"></div>
      </div>

      <header className="z-50 border-b border-transparent">
        <Navbar />
      </header>

      <main className="flex-grow w-full flex flex-col items-center justify-center">
        <Home />
        <About />
        <Experience />
        <Skills />
        <Projects />
        <Contact />
       
      </main>

      <Footer />
    </div>
  );
};

export default App;
