import React from "react";

const Home = () => {
  return (
    <section
      id="home"
      className="min-h-screen w-full
      flex flex-col lg:flex-row
      justify-center lg:justify-between items-center
      gap-12 lg:gap-20
      px-6 sm:px-10 lg:px-16
      bg-gradient-to-r from-indigo-950 to-fuchsia-950 text-white"
    >
      {/* Profile Image */}
      <div
        className="
        order-1 lg:order-2
        mt-24 lg:mt-0
        h-40 w-40 sm:h-48 sm:w-48 lg:h-60 lg:w-60
        rounded-full border-2 border-white
        overflow-hidden
        transition-transform duration-300
        hover:scale-105 hover:shadow-xl"
      >
        <img
          src="image.png"
          alt="Om Shukla"
          className="w-full h-full object-cover object-top"
        />
      </div>

      {/* Text Content */}
      <div
        className="
        order-2 lg:order-1
        max-w-xl
        text-center lg:text-left"
      >
        <p className="text-2xl sm:text-3xl lg:text-5xl font-extrabold leading-tight">
          Hi, I'm{" "}
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-blue-400">
            Om Shukla
          </span>
        </p>

        <p className="mt-4 text-base sm:text-lg text-gray-200 leading-relaxed">
          A passionate developer who builds fast, beautiful, and futuristic web
          experiences using React & modern technologies.
        </p>

        <div
          className="mt-8 inline-block border border-white/30
          rounded-full px-6 py-3
          transition-transform duration-300
          hover:scale-105 hover:shadow-xl"
        >
          <a
            href="resume.pdf"
            target="_blank"
            rel="noopener noreferrer"
            className="font-semibold text-transparent bg-clip-text
            bg-gradient-to-r from-purple-400 to-blue-400"
          >
            View My Resume
          </a>
        </div>
      </div>
    </section>
  );
};

export default Home;
