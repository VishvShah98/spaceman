import React from "react";
import background from "../assets/demo-bg.webp";
import AppStoreLight from "../components/AppStore/AppStoreLight";
import GooglePlayLight from "../components/GooglePlay/GooglePlayLight";
function Download() {
  const handleNavigation = (e, sectionId) => {
    e.preventDefault();
    const sectionElement = document.getElementById(sectionId);
    if (sectionElement) {
      sectionElement.scrollIntoView({ behavior: "smooth" });
    }
    // toggleMenu(); // Close the menu when a menu item is clicked
  };
  return (
    <div
      id="download"
      className="bg-cover bg-center h-screen text-white flex flex-col justify-center items-center"
      style={{ backgroundImage: `url(${background})` }}
    >
      <div className="text-center uppercase mb-6">
        <span className="text-[#EF106E] text-1xl font-bold">
          Get the app website template
        </span>
      </div>
      <div className="text-center mb-12 w-[50%]">
        <span className="text-4xl md:text-7xl font-black tracking-tighter uppercase">
          Download today
        </span>
      </div>
      <div className="flex flex-col justify-center items-center">
        <button className="mb-6">
          {/* Add margin-bottom and remove margin-right for smaller screens */}
          <AppStoreLight />
        </button>
        <button>
          <GooglePlayLight />
        </button>
      </div>
     
      <div
        className="relative  bg-[#EF106E] py-2 px-3  mt-10 rounded-lg cursor-pointer z-50 transition-opacity opacity-80 hover:opacity-100 flex items-center justify-center"
        onClick={(e) => handleNavigation(e, "homepage")}
      >
        Back to top
      </div>
      <div className="text-center mt-10">
        <span className="text-white text-lg ">Vishv Shah - 2023</span>
      </div>
    </div>
  );
}

export default Download;
