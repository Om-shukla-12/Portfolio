import React from "react";

const Home = () => {
  return (
    <section
      id="home"
      className="min-h-screen flex flex-col md:flex-row
      justify-around items-center px-6 md:px-16
      bg-gradient-to-r from-indigo-950 to-fuchsia-950 text-white"
    >
      {/* Profile Image - TOP on mobile, RIGHT on desktop */}
      <div
        className="order-1 md:order-2
        mt-20 md:mt-0 h-60 w-60 rounded-full border-2 border-white
        overflow-hidden hover:scale-105 hover:shadow-xl
        transition-transform duration-300"
      >
        <img
          src="image.png"
          alt="Om Shukla"
          className="w-full h-full object-cover object-top"
        />
      </div>

      {/* Text Content - BELOW image on mobile, LEFT on desktop */}
      <div
        className="order-2 md:order-1
        max-w-xl text-center md:text-left mt-8 md:mt-0"
      >
        <p className="text-3xl sm:text-4xl md:text-5xl font-extrabold leading-tight">
          Hi, I'm{" "}
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-blue-400">
            Om Shukla
          </span>
        </p>

        <p className="mt-4 text-lg text-gray-200">
          A passionate developer who builds fast, beautiful, and futuristic web
          experiences using React & modern technologies.
        </p>

        <div
          className="mt-8 inline-block border rounded-full px-6 py-3
          hover:scale-105 hover:shadow-xl transition"
        >
          <a
            href="#projects"
            className="font-bold text-transparent bg-clip-text
            bg-gradient-to-r from-purple-400 to-blue-400"
          >
            View My Projects
          </a>
        </div>
      </div>
    </section>
  );
};

export default Home;
