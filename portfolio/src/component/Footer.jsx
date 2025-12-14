import React from 'react'

const Footer = () => {
  return (
    <div>
        <footer className="text-center p-4 mt-8 bg-white/10 backdrop-blur-md
        border border-white/20 rounded-2xl text-gray-300 shadow-[0_0_20px_rgba(140,80,255,0.3)]">
          <p>&copy; {new Date().getFullYear()} Om Shukla. All rights reserved.</p>
        </footer>
    </div>
  )
}

export default Footer