import React from "react";
import { motion } from "framer-motion";
import {
  FaHtml5,
  FaCss3Alt,
  FaJs,
  FaReact,
} from "react-icons/fa";
import { SiTailwindcss, SiGithub } from "react-icons/si";

const skills = [
  { icon: <FaHtml5 />, color: "text-orange-500", bg: "bg-orange-500/10", name: "HTML5" },
  { icon: <FaCss3Alt />, color: "text-blue-500", bg: "bg-blue-500/10", name: "CSS3" },
  { icon: <FaJs />, color: "text-yellow-400", bg: "bg-yellow-400/10", name: "JavaScript" },
  { icon: <FaReact />, color: "text-cyan-400", bg: "bg-cyan-400/10", name: "React Js" },
  { icon: <SiTailwindcss />, color: "text-sky-400", bg: "bg-sky-400/10", name: "Tailwind CSS" },
  { icon: <SiGithub />, color: "text-gray-300", bg: "bg-gray-500/10", name: "GitHub" },
];

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
    },
  },
};

const itemVariants = {
  hidden: { y: 20, opacity: 0 },
  visible: {
    y: 0,
    opacity: 1,
  },
};

const Skills = () => {
  return (
    <section id="skills" className="w-full py-20 px-6 md:px-16 flex flex-col items-center z-10 relative">
      <motion.div 
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5 }}
        className="text-center mb-16"
      >
        <h2 className="font-bold text-3xl md:text-4xl text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-blue-400 mb-4 inline-block">
          My Skills
        </h2>
        <div className="w-16 h-1 bg-gradient-to-r from-purple-500 to-blue-500 mx-auto rounded-full"></div>
      </motion.div>

      <motion.div 
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        className="max-w-5xl mx-auto grid grid-cols-2 sm:grid-cols-3 md:grid-cols-6 gap-6 md:gap-8 lg:gap-12"
      >
        {skills.map((skill, index) => (
          <motion.div
            variants={itemVariants}
            key={index}
            whileHover={{ y: -10 }}
            className={`flex flex-col items-center justify-center p-6 rounded-2xl border border-white/5 bg-white/5 backdrop-blur-md shadow-lg ${skill.bg} hover:border-white/20 transition-all duration-300`}
          >
            <div className={`text-5xl md:text-6xl mb-4 ${skill.color} drop-shadow-md`}>
              {skill.icon}
            </div>
            <p className="text-gray-300 font-medium text-sm md:text-base text-center tracking-wide">{skill.name}</p>
          </motion.div>
        ))}
      </motion.div>
    </section>
  );
};

export default Skills;
