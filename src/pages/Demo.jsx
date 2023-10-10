import React from "react";
import background from "../assets/demo-bg.webp";
function Demo() {
  return (
    <div
      className="bg-cover bg-center h-screen text-white flex flex-col justify-center items-center"
      style={{ backgroundImage: `url(${background})` }}
    >
      <div className="text-center uppercase mb-6">
        <span className="text-[#EF106E] text-1xl font-bold">
          Showcase Your App
        </span>
      </div>
      <div className="text-center mb-12 ">
        <span className="text-4xl md:text-7xl font-black tracking-tighter uppercase">
          Solving <br/> Real Problems
        </span>
      </div>
      <div>
        <button className="uppercase bg-custom-gradient  py-4 px-4 text-base text-white font-medium rounded hover:bg-pink-600">
          Watch Demo
        </button>
      </div>
    </div>
  );
}

export default Demo;
