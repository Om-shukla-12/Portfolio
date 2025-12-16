import React from "react";
import { FaLinkedin } from "react-icons/fa";
import { VscGithub } from "react-icons/vsc";
const Footer = () => {
  return (
    <div>
      <footer
        className="text-center p-4 mt-8  border-t border-gray-700 bg-black/20
         text-gray-300  flex flex-row  object-center justify-between "
      >
        <p>&copy; {new Date().getFullYear()} Om Shukla. All rights reserved.</p>
        

        <div className="  flex gap-4 text-2xl ">
          <a
            href="https://www.linkedin.com/in/om-shukal-1a1196274/"
            className="text-white hover:underline"
          >
            <FaLinkedin />
          </a>
          <a
            href="https://github.com/Om-shukla-12"
            className="text-white  hover:underline"
          >
            <VscGithub />
          </a>
        </div>
      </footer>
    </div>
  );
};
export default Footer;
