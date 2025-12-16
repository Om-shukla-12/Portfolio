import React from "react";
import Navbar from "./component/Navbar";
import Home from "./component/Home";
import About from "./component/About";
import {Projects} from "./component/Projects";
import { Contact } from "./component/Contact";
import Footer from "./component/Footer";

const App = () => {
  const sentence = "Welcome to My Portfolio";
  return (
  
    <div
      className="relative min-h-screen w-full   px-6 md:px-10 py-5 bg-gradient-to-r
from-purple-950 to-gray-900  overflow-hidden "
    >
      <header className="mb-18">
        <Navbar />
      </header>
      <div className="text-center mt-4">
        <h1 className="text-5xl font-bold mb-4 text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-blue-400">{sentence.split("").map((char,index) => (
          <span key={index} className="inline-block transition-transform duration-300 hover:scale-150">
            {
              char=== " " ? "\u00A0" : char
          }</span>
        ))}</h1>
      </div>
      <div>
      <div className="m-8 shadow-black hover:shadow-2xl hover:scale-105 hover:duration-700 transition-transform duration-300 
      rounded-2xl md:mx-16  ">
        <Home />
      </div>
        <About/>
      </div>
      <div  className="m-8  md:mx-16  ">
        <Projects  />
      </div>
      <div className="m-8 
      rounded-2xl md:mx-16  ">
          <Contact />
      </div>
      <Footer />
    </div>

  );
};

export default App;
