import React from 'react'
import { motion } from 'framer-motion'

const projDetails = [
  {
      title :  "MindNest - Mental Wellness Platform",
      description : "MindNest is a mental wellness platform designed to provide users with resources and tools to improve their mental health. The platform offers features such as mood tracking, guided meditation sessions, and access to professional counseling services.",
      technologies : ["HTML", "CSS", "JavaScript", "Python", "Django", "SQLite", "NLP"],
      Github_link : "https://github.com/Om-shukla-12/MindNest-main/tree/main/MindNest-main",
      image: "/mindnest.png"
   },
   {
      title :  "Online Bookstore",
      description : "An online bookstore application that allows users to browse, search, and purchase books. The application features user authentication, a shopping cart, and an admin panel for managing inventory and orders.",
      technologies : ["React.js", "Node.js", "Express.js", "MongoDB"],
      Github_link : "https://github.com/Om-shukla-12/BOOK-STORE-project",
      image: "/bookstore.jpeg"
   },
   {
    title : "Pokemon catcher",
    description : "A fun and interactive web application that allows users to catch and collect virtual Pokémon. Users can explore different locations, encounter various Pokémon species, and build their collection.",
    technologies : ["React.js", "RESTful APIs"],
    Github_link : "https://github.com/Om-shukla-12/pokemon",
    live_link: "https://ompokemon.netlify.app/",
    image: "/pokemon.png"
   },
   {
    title : "Todo List Application",
    description : "A simple and intuitive Todo List application that helps users manage their tasks efficiently. Users can add, edit, delete, and mark tasks as completed. The application also supports categorizing tasks and setting deadlines.",
    technologies : ["React.js", "CSS", "Local Storage"],
    Github_link : "https://github.com/Om-shukla-12/TodoApp/tree/main/Todo",
    live_link:"https://omtodo.netlify.app/",
    image: "/todo.png"
   }
]

export const Projects = () => {
  return (
    <section id='projects' className='py-20 px-6 md:px-16 w-full relative z-10'>
      <motion.div 
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5 }}
        className="text-center mb-16"
      >
        <h2 className='font-bold text-3xl md:text-4xl text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-blue-400 mb-4 inline-block'>
            Featured Projects
        </h2>
        <div className="w-24 h-1 bg-gradient-to-r from-purple-500 to-blue-500 mx-auto rounded-full"></div>
      </motion.div>

      <div className='max-w-6xl mx-auto flex flex-col gap-10 md:gap-14'>
        {projDetails.map((proj, index)=> (
        <motion.div 
          key={index}
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: index * 0.1 }}
          className={`flex flex-col md:flex-row gap-8 items-center bg-white/5 backdrop-blur-lg border border-white/10 rounded-3xl p-6 md:p-8 shadow-[0_8px_30px_rgba(140,80,255,0.1)] hover:bg-white/10 transition-colors duration-300 ${index % 2 !== 0 ? 'md:flex-row-reverse' : ''}`}
        >
          {/* Project Image */}
          <div className='w-full md:w-1/2 overflow-hidden rounded-2xl group cursor-pointer'>
             <img 
               src={proj.image} 
               alt={proj.title} 
               className='w-full h-auto object-cover transform transition-transform duration-700 group-hover:scale-105' 
               onError={(e) => {
                 e.target.src = 'https://via.placeholder.com/600x400/1e1e2f/ffffff?text=Project+Preview';
               }}
             />
          </div>

          {/* Project Details */}
          <div className='w-full md:w-1/2 flex flex-col'>            
            <h3 className='text-2xl md:text-3xl text-white font-bold mb-4'>{proj.title}</h3>
            <p className='leading-relaxed text-gray-300 mb-6 text-sm md:text-base'>{proj.description}</p>
            
            <div className='flex flex-wrap gap-2 mb-8'>
              {proj.technologies.map((tech, i) => (
                <span key={i} className='px-3 py-1 text-xs md:text-sm font-medium text-purple-300 bg-purple-500/10 border border-purple-500/20 rounded-full'>
                  {tech}
                </span>
              ))}
            </div>

            <div className='flex gap-4 mt-auto'>
              <a 
                href={proj.Github_link} 
                target='_blank' 
                rel='noopener noreferrer' 
                className='px-6 py-2.5 rounded-full text-sm font-semibold bg-white/10 text-white hover:bg-white/20 transition duration-300 flex items-center gap-2'
              >
                GitHub
              </a>
              {proj.live_link && (
                <a 
                  href={proj.live_link} 
                  target='_blank' 
                  rel='noopener noreferrer' 
                  className='px-6 py-2.5 rounded-full text-sm font-semibold bg-gradient-to-r from-purple-500 to-blue-500 text-white shadow-lg hover:shadow-purple-500/50 hover:scale-105 transition-all duration-300 flex items-center gap-2'
                >
                  Live Demo
                </a>
              )}
            </div>
          </div>
        </motion.div>
        ))}
      </div>
    </section>
  )
}
