import { useState } from "react";
import { AiOutlineMenu, AiOutlineClose } from "react-icons/ai";
import "./Navbar.css";

function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div>
      <button
        onClick={toggleMenu}
        className="fixed top-0 right-0 py-2 px-3 mx-10 my-7 text-3xl bg-custom-gradient text-white rounded z-[999] hover:bg-pink"
      >
        {isOpen ? <AiOutlineClose /> : <AiOutlineMenu />}
      </button>
      {isOpen !== null && (
        <div className={`z-[998] fixed top-0 left-0 w-full h-screen bg-[#1B1348] bg-opacity-95  text-white transform transition-transform duration-1000 ease-in-out ${isOpen ? 'translate-y-0' : '-translate-y-full'}`}>
          {/* Content of the list */}
          <div className="h-full flex flex-col justify-center text-center md:justify-end items-center md:items-start md:text-left">
            <ul className="space-y-2 py-8 px-7 uppercase text-4xl md:text-5xl font-black">
              <li>
                <a className="hover:text-[#EF106E]" href="#home">
                  About
                </a>
              </li>
              <li>
                <a className="hover:text-[#EF106E]" href="#about">
                  Features
                </a>
              </li>
              <li>
                <a className="hover:text-[#EF106E]" href="#projects">
                  Demo
                </a>
              </li>
              <li>
                <a className="hover:text-[#EF106E]" href="#contact">
                  Screenshots
                </a>
              </li>
              <li>
                <a className="hover:text-[#EF106E]" href="#contact">
                  Testimonials
                </a>
              </li>
              <li>
                <a className="hover:text-[#EF106E]" href="#contact">
                  Team
                </a>
              </li>
              <li>
                <a className="hover:text-[#EF106E]" href="#contact">
                  Download
                </a>
              </li>
            </ul>
          </div>
        </div>
      )}
    </div>
  );
}

export default Navbar;
