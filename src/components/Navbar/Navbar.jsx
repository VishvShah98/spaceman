import { useState } from "react";
import { AiOutlineMenu, AiOutlineClose } from "react-icons/ai";
import "./Navbar.css";

function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  const handleNavigation = (e, sectionId) => {
    e.preventDefault();
    const sectionElement = document.getElementById(sectionId);
    if (sectionElement) {
      sectionElement.scrollIntoView({ behavior: "smooth" });
    }
    // toggleMenu(); // Close the menu when a menu item is clicked
  };
  
  

  return (
    <div>
      <button
      id="menuButton"
        onClick={toggleMenu}
        onMouseEnter={() => document.getElementById("menuButton").style.background="#FF1493"}
        onMouseLeave={() => document.getElementById("menuButton").style.background="linear-gradient(130deg, rgb(182, 53, 156) 0%, rgb(239, 10, 106) 100%)"}
        className="fixed top-0 right-0 py-2 px-3 mx-10 my-7 text-3xl text-white rounded z-[999] "
        style={{
          background:
            "linear-gradient(130deg, rgb(182, 53, 156) 0%, rgb(239, 10, 106) 100%)",
            transition: "background 0.5s ease-in-out"
        }}
      >
        {isOpen ? <AiOutlineClose /> : <AiOutlineMenu />}
      </button>
      {isOpen !== null && (
        <div
          className={`z-[998] fixed top-0 left-0 w-full h-screen bg-[#1B1348] bg-opacity-95  text-white transform transition-transform duration-1000 ease-in-out ${
            isOpen ? "translate-y-0" : "-translate-y-full"
          }`}
        >
          {/* Content of the list */}
          <div className="h-full flex flex-col justify-center text-center md:justify-end items-center md:items-start md:text-left">
            <ul className="space-y-2 py-8 px-7 uppercase text-4xl md:text-5xl font-black">
              <li>
                <a className="hover:text-[#EF106E]" href="#" onClick={(e) => handleNavigation(e, 'about')}>
                  About
                </a>
              </li>
              <li>
                <a className="hover:text-[#EF106E]" href="#" onClick={(e) => handleNavigation(e, 'features')} >
                  Features
                </a>
              </li>
              <li>
                <a className="hover:text-[#EF106E]" href="#" onClick={(e) => handleNavigation(e, 'demo')}>
                  Demo
                </a>
              </li>
              <li>
                <a className="hover:text-[#EF106E]" href="#" onClick={(e) => handleNavigation(e, 'screenshots')}>
                  Screenshots
                </a>
              </li>
              <li>
                <a className="hover:text-[#EF106E]" href="#" onClick={(e) => handleNavigation(e, 'team')}>
                  Team
                </a>
              </li>
              <li>
                <a className="hover:text-[#EF106E]" href="#" onClick={(e) => handleNavigation(e, 'download')}>
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
