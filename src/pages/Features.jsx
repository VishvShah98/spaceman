import React from "react";
import { FaCog, FaLightbulb, FaEnvelope } from 'react-icons/fa';
import FeaturesBox from "../components/FeaturesBox/FeaturesBox";

function Features() {
  const featuresArray = [
    {
        icon: <FaCog size="24" color="white"/>, // Settings icon
        title: "Donec bibendum",
        description:
          "This app website template with a sleek & modern design will convince your clients.",
      },
      {
        icon: <FaLightbulb size="24" color="white"/>, // Lightbulb icon
        title: "Aenean quis quam",
        description:
          "An app landing page with a hassle-free setup and loads of content modules.",
      },
      {
        icon: <FaEnvelope size="24" color="white"/>, // Telegram icon
        title: "Vivamus ultrices",
        description:
          "Get this mobile app website template and many others from our collection.",
      },
  ];
  return (
    <div  className="bg-[#ECF1FF] pt-36 pb-36">
      <div className="text-center uppercase mb-4">
        <span id="features" className="text-[#EF106E] text-md md:text-lg font-bold">
          App Features
        </span>
      </div>
      <div className="text-center mb-5 md:mb-20 lg:mb-28">
        <span className="text-3xl md:text-7xl text-[#1D154B] font-black uppercase tracking-tighter">
          Made for users
        </span>
      </div>
      <div className="flex flex-col justify-around items-center space-y-10 lg:flex-row lg:space-y-0 lg:justify-center lg:space-x-10">
        {featuresArray.map((props, index) => (
          <FeaturesBox key={index} {...props} />
        ))}
      </div>
    </div>
  );
}

export default Features;
