import React from "react";
import { motion } from "framer-motion";

const experiences = [
  {
    id: 3,
    title: "Assistant Professor",
    company: "Asian Institute Of Technology",
    date: "Apr 2026 - Present",
    description: "Teaching and mentoring students in Information Technology and computer science subjects, while contributing to academic growth and curriculum development.",
  },
  {
    id: 2,
    title: "Freelance Web Developer",
    company: "Self-Employed",
    date: "Apr 2026 - Present",
    description: "Delivering custom web solutions to clients, focusing on responsive design, modern web frameworks like React, and creating high-quality, scalable user experiences.",
  },
  {
    id: 1,
    title: "ReactJs Intern",
    company: "Elsner Technologies Pvt. Ltd.",
    date: "May-Jun 2025",
    description: "Developing scalable web applications using React. Collaborating with cross-functional teams to design new features and optimize existing systems.",
  },
];

const education = [
  {
    id: 1,
    degree: "Bachelor of Technology in Information Technology",
    institution: "LDRP Institute of Technology & Research (Kadi Sarva Vidhyalaya, Gandhinagar)",
    date: "2022 - 2026",
    description: "Focused on software engineering, data structures, algorithms, and web technologies. Active member of the coding club.",
  },
];

const TimelineItem = ({ item, isLeft }) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-100px" }}
      transition={{ duration: 0.5 }}
      className={`relative flex flex-col md:flex-row w-full mb-8 ${
        isLeft ? "md:flex-row-reverse" : ""
      } md:items-center`}
    >
      {/* Timeline Marker */}
      <div className="hidden md:block absolute left-1/2 transform -translate-x-1/2 w-3 h-3 rounded-full bg-purple-500 border-2 border-[#030014] z-10 box-content"></div>

      <div className="hidden md:block md:w-5/12"></div>

      <div className={`w-full md:w-5/12 p-6 md:p-8 bg-white/5 backdrop-blur-md border border-white/5 rounded-2xl shadow-[0_4px_30px_rgba(140,80,255,0.08)] hover:bg-white/10 hover:border-white/10 transition-all duration-300 ${isLeft ? "md:text-right" : "text-left"}`}>
        <span className="inline-block py-1 px-3 rounded-full bg-purple-500/10 text-purple-300 text-xs tracking-wider uppercase font-semibold mb-4 border border-purple-500/20">
          {item.date}
        </span>
        <h3 className="text-xl md:text-2xl font-bold text-white tracking-wide mb-1">
          {item.title || item.degree}
        </h3>
        <h4 className="text-base text-purple-200/80 mb-3 font-medium">
          {item.company || item.institution}
        </h4>
        <p className="text-slate-400 leading-relaxed text-sm md:text-base font-light">
          {item.description}
        </p>
      </div>
    </motion.div>
  );
};


const Experience = () => {
  return (
    <section id="experience" className="py-20 px-6 md:px-16 w-full relative">
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-blue-400 mb-4 inline-block">
            Experience & Education
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-purple-500 to-blue-500 mx-auto rounded-full"></div>
        </motion.div>

        <div className="relative">
          {/* Vertical Line */}
          <div className="hidden md:block absolute left-1/2 transform -translate-x-1/2 h-full w-0.5 bg-gradient-to-b from-purple-500/50 via-blue-500/50 to-transparent"></div>

          <div className="space-y-4 md:space-y-0">
            {experiences.map((exp, index) => (
              <TimelineItem key={`exp-${exp.id}`} item={exp} isLeft={index % 2 === 0} />
            ))}
            
            <div className="py-8 md:py-12">
              <div className="md:hidden text-center mb-6 text-xl font-bold text-purple-400">Education</div>
            </div>

            {education.map((edu, index) => (
              <TimelineItem key={`edu-${edu.id}`} item={edu} isLeft={(experiences.length + index) % 2 === 0} />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Experience;
