import React from "react";

const About = () => {
  return (
    <section id="about" className="my-16 px-6 md:px-16">
      <h1 className="font-bold text-3xl text-center mb-6 text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-blue-400">
        About Me
      </h1>

      <div className="max-w-4xl mx-auto p-6 bg-white/10 backdrop-blur-md border border-white/20 rounded-2xl text-white shadow-[0_0_20px_rgba(140,80,255,0.3)]">
        <h3 className="text-xl font-semibold">
          Hello! I’m Om Shukla 👋
        </h3>

        <p className="mt-4 leading-relaxed text-gray-200">
          I am a final-year IT student with a strong interest in software
          development and problem-solving. I enjoy building practical web
          applications using modern technologies like React.js and Java.
        </p>

        <p className="mt-3 leading-relaxed text-gray-200">
          I have worked on projects such as an Online Bookstore and MindNest, a
          mental wellness platform focused on user experience and real-world
          impact. I am eager to learn, adaptable, and motivated to contribute to
          a growth-oriented organization.
        </p>
      </div>
    </section>
  );
};

export default About;
