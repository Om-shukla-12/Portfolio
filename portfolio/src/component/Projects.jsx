import React from 'react'

const projDetails = [
  {
      title :  "MindNest - Mental Wellness Platform",
      description : "MindNest is a mental wellness platform designed to provide users with resources and tools to improve their mental health. The platform offers features such as mood tracking, guided meditation sessions, and access to professional counseling services.",
      technologies : "HTML, CSS, JavaScript, Python (Django), SQLite, NLP",
      Github_link : "https://github.com/Om-shukla-12/MindNest-main/tree/main/MindNest-main",
      image: "/mindnest.png"
   },

   {
      title :  "Online Bookstore",
      description : "An online bookstore application that allows users to browse, search, and purchase books. The application features user authentication, a shopping cart, and an admin panel for managing inventory and orders.",
      technologies : "React.js, Node.js, Express.js, MongoDB",
      Github_link : "https://github.com/Om-shukla-12/BOOK-STORE-project",
      image: "/bookstore.jpeg"
   },
   {
    title : "Pokemon catcher",
    description : "A fun and interactive web application that allows users to catch and collect virtual Pokémon. Users can explore different locations, encounter various Pokémon species, and build their collection.",
    technologies : "React.js, RESTful APIs",
    Github_link : "https://github.com/Om-shukla-12/pokemon",
    live_link: "https://ompokemon.netlify.app/",
    image: "/pokemon.png"
   },
   {
    title : "Todo List Application",
    description : "A simple and intuitive Todo List application that helps users manage their tasks efficiently. Users can add, edit, delete, and mark tasks as completed. The application also supports categorizing tasks and setting deadlines.",
    technologies : "React.js, CSS, Local Storage",
    Github_link : "https://github.com/Om-shukla-12/TodoApp/tree/main/Todo",
    live_link:"https://omtodo.netlify.app/",
    image: "/todo.png"
   }
  ]


export const Projects = () => {
  return (
    <div id='projects' className='border border-white/20 rounded-2xl bg-gradient-to-r from-violet-950  to-gray-900 my-16 px-6 md:px-16'>
        <h2 className='font-bold text-3xl text-center mb-6 text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-blue-400'>
            Projects
        </h2>

        <div className='max-w-8xl mx-auto p-6 flex flex-col gap-8  backdrop-blur-md '>
         {projDetails.map((proj,index)=> (
          <div key={index} className='mb-8 flex flex-row gap-6  border border-white/20 rounded-2xl p-6 shadow-[0_0_20px_rgba(140,80,255,0.3)] hover:scale-105 hover:shadow-2xl transition-transform duration-300
          flex-wrap md:flex-nowrap justify-between items-center'>
            <div className=' w-2xl items-center mb-4'>
               <img src={proj.image} alt={proj.title} className='border rounded-2xl object-cover' />
            </div>
            <div className='flex flex-col'>            
            <h3 className='text-xl text-white font-semibold mb-2'>{proj.title}</h3>
            <p className='leading-relaxed text-gray-200 mb-4'>{proj.description}</p>
            <p className='text-sm text-gray-300 mb-2'><strong>Technologies:</strong> {proj.technologies}</p>
            <div className='flex gap-4'>
              <a href={proj.Github_link} target='_blank' rel='noopener noreferrer' className='text-blue-400 hover:text-blue-300'>GitHub</a>
              {proj.live_link && <a href={proj.live_link} target='_blank' rel='noopener noreferrer' className='text-green-400 hover:text-green-300'>Live Demo</a>}
            </div>
            </div>
          </div>
         ))}
        </div>
    </div>

  )
}

