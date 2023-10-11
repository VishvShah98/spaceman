import React, { useState } from "react";
import background from "../assets/demo-bg.webp";
import app_video from "../assets/app-video.mp4";

function Demo() {
  const [showVideo, setShowVideo] = useState(false);

  return (
    <div
      id="demo"
      className="bg-cover bg-center h-screen text-white flex flex-col justify-center items-center relative" // added 'relative' for positioning
      style={{ backgroundImage: `url(${background})` }}
    >
      <div className="text-center uppercase mb-6">
        <span className="text-[#EF106E] text-1xl font-bold">
          Showcase Your App
        </span>
      </div>
      <div className="text-center mb-12 ">
        <span className="text-4xl md:text-7xl font-black tracking-tighter uppercase">
          Solving <br /> Real Problems
        </span>
      </div>
      <div>
        <button
          className="uppercase bg-custom-gradient transition-opacity opacity-90 hover:opacity-100 py-4 px-4 text-base text-white font-medium rounded hover:bg-pink-600"
          onClick={() => setShowVideo(true)}
        >
          Watch Demo
        </button>
      </div>

      {/* Video overlay */}
      {showVideo && (
        <div className="absolute h-screen bg-black z-[1000] flex justify-center items-center">
          <video className="h-screen w-screen" autoPlay loop src={app_video}></video>
          <button
          id="closeButton"
            className="absolute top-4 right-4 py-2 px-3 mx-10 my-7  text-white rounded z-[1000]"
            onMouseEnter={() =>
              (document.getElementById("closeButton").style.background =
                "#FF1493")
            }
            onMouseLeave={() =>
              (document.getElementById("closeButton").style.background =
                "linear-gradient(130deg, rgb(182, 53, 156) 0%, rgb(239, 10, 106) 100%)")
            }
            style={{
              background:
                "linear-gradient(130deg, rgb(182, 53, 156) 0%, rgb(239, 10, 106) 100%)",
              transition: "background 0.5s ease-in-out",
            }}
            onClick={() => setShowVideo(false)}
          >
      
            Close
          </button>
        </div>
      )}
    </div>
  );
}

export default Demo;
