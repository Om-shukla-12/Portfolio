import React from "react";
import { motion } from "framer-motion";

const About = () => {
  return (
    <section id="about" className="py-20 px-6 md:px-16 w-full relative z-10">
      <motion.div 
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
        className="max-w-4xl mx-auto"
      >
        <div className="text-center mb-10">
          <h2 className="font-bold text-3xl md:text-4xl text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-blue-400 inline-block mb-3">
            About Me
          </h2>
          <div className="w-20 h-1 bg-gradient-to-r from-purple-500 to-blue-500 mx-auto rounded-full"></div>
        </div>

        <motion.div 
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="relative p-8 md:p-10 bg-white/5 backdrop-blur-xl border border-white/10 rounded-3xl shadow-[0_8px_32px_rgba(140,80,255,0.15)] overflow-hidden group"
        >
          {/* Decorative elements */}
          <div className="absolute top-0 right-0 w-32 h-32 bg-purple-500/10 rounded-full blur-3xl group-hover:bg-purple-500/20 transition-all duration-500"></div>
          <div className="absolute bottom-0 left-0 w-32 h-32 bg-blue-500/10 rounded-full blur-3xl group-hover:bg-blue-500/20 transition-all duration-500"></div>

          <div className="relative z-10">
            <h3 className="text-2xl font-bold text-white mb-6 flex items-center gap-3">
              Hello! I'm Om Shukla <span className="animate-wave inline-block origin-bottom-right">👋</span>
            </h3>

            <div className="space-y-4 text-gray-300 leading-relaxed text-[15px] md:text-[17px]">
              <p>
                I am a Web Developer and an Information Technology graduate with a strong interest in software
                development and problem-solving. I enjoy building practical, beautiful web
                applications using modern technologies like <span className="text-blue-400 font-medium">React.js</span>.
              </p>

              <p>
                My journey includes creating projects such as an Online Bookstore and MindNest—a
                mental wellness platform focused on user experience and real-world
                impact. I am eager to learn, adaptable, and highly motivated to contribute to
                a growth-oriented organization while continuing to master new skills in the ever-evolving tech landscape.
              </p>
            </div>
          </div>
        </motion.div>
      </motion.div>
    </section>
  );
};

export default About;
