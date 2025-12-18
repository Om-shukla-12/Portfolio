import React from "react";
import {
  FaHtml5,
  FaCss3Alt,
  FaJs,
  FaReact,
  // FaNodeJs,
  // FaGitAlt,
} from "react-icons/fa";
import { SiTailwindcss, SiGithub } from "react-icons/si";

const skills = [
  { icon: <FaHtml5 />, color: "text-orange-500",name:"HTML5" },
  { icon: <FaCss3Alt />, color: "text-blue-500", name: "CSS3" },
  { icon: <FaJs />, color: "text-yellow-400", name: "JavaScript" },
  { icon: <FaReact />, color: "text-cyan-400", name: "React Js" },
  { icon: <SiTailwindcss />, color: "text-sky-400", name: "Tailwind CSS" },
//   { icon: <FaNodeJs />, color: "text-green-500" },
//   { icon: <FaGitAlt />, color: "text-red-500" },
  { icon: <SiGithub />, color: "text-gray-300", name: "GitHub" },
];

const Skills = () => {
  return (
    <section
      id="skills"
      className="w-full  px-6 py-10 flex items-center"
    >
      <div className="max-w-8xl mx-auto grid grid-cols-3 sm:grid-cols-4 md:grid-cols-6 gap-22">
        {skills.map((skill, index) => (
          <div
            key={index}
            className={`text-8xl ${skill.color} 
            flex flex-col items-center justify-center 
            transition-transform duration-300 
            hover:scale-125`}
          >
            {skill.icon}
            <p className="text-xl mt-2 text-center">{skill.name}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Skills;
