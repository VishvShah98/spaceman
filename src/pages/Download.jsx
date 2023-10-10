import React from "react";
import background from "../assets/demo-bg.webp";
import AppStoreLight from "../components/AppStore/AppStoreLight";
import GooglePlayLight from "../components/GooglePlay/GooglePlayLight";
function Download() {
  return (
    <div
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
          <GooglePlayLight/>
        </button>
      </div>
      <div className="text-center mt-24">
        <span className="text-white text-lg ">
          Vishv Shah - 2023
        </span>
      </div>
    </div>
  );
}

export default Download;
