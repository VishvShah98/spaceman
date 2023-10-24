import { useEffect } from "react";
import background from "../assets/hero-bg.jpg";
import bg from "../assets/app-screen2.webp";
import bg2 from "../assets/app-screen3.jpg";
import video from "../assets/appvideo-screen.mp4";
import Phone from "../components/Phone/Phone";
import AppStore from "../components/AppStore/AppStore";
import GooglePlay from "../components/GooglePlay/GooglePlay";

import { motion } from "framer-motion";

function HomePage() {

  const images = [bg, bg2];

  useEffect(() => {
    // Preload images
    images.forEach((imgSrc, index) => {
      const img = new Image();
      img.src = imgSrc;
    });
  }, []);

  const handleNavigation = (e, sectionId) => {
    e.preventDefault();
    const sectionElement = document.getElementById(sectionId);
    if (sectionElement) {
      sectionElement.scrollIntoView({ behavior: "smooth" });
    }
    // toggleMenu(); // Close the menu when a menu item is clicked
  };
  return (
    <div id="homepage">
      <div
        className="bg-cover bg-center h-screen text-white"
        style={{ backgroundImage: `url(${background})` }}
      >
        <button
          id="downloadButton"
          onClick={(e) => handleNavigation(e, "download")}
          style={{
            background:
              "linear-gradient(130deg, rgb(182, 53, 156) 0%, rgb(239, 10, 106) 100%)",
            transition: "background 0.5s ease-in-out",
          }}
          onMouseEnter={() =>
            (document.getElementById("downloadButton").style.background =
              "#FF1493")
          }
          onMouseLeave={() =>
            (document.getElementById("downloadButton").style.background =
              "linear-gradient(130deg, rgb(182, 53, 156) 0%, rgb(239, 10, 106) 100%)")
          }
          className="uppercase relative top-0 left-0 py-4 px-4 mx-10 my-7 text-base text-white font-medium rounded hover:bg-pink-600"
        >
          Download
        </button>
        <div className="hidden  md:block absolute top-0 right-0 py-4 px-4 mx-32 my-7  ">
          <p>Available on iOS and Android</p>
        </div>
        <motion.div
          initial={{ rotateX: 90 }}
          animate={{ rotateX: 0 }}
          transition={{ duration: 0.95 }}
          className="text-center  uppercase pt-8 "
        >
          <div className="text-center uppercase mb-6">
            <span className="text-[#EF106E] text-1xl font-bold">
              Showcase Your App
            </span>
          </div>
          <div className="text-center">
            <span className="text-4xl md:text-7xl font-black tracking-tighter ">
              App Website <br /> Template
            </span>
          </div>
        </motion.div>
      </div>

      <div className="relative h-0">
        <div className="flex justify-center items-center bg-transparent">
          {/* <div className="flex flex-row space-x-4"> */}
          {/* Show three phones for large screens */}
          <motion.div
            initial={{ y: 1000 }}
            animate={{ y: 0 }}
            transition={{ duration: 0.75 }}
            className="hidden lg:block -mt-64 mr-8"
          >
            <Phone type="small" backgroundImage={bg} />
          </motion.div>
          <motion.div
            initial={{ y: 1000 }}
            animate={{ y: 0 }}
            transition={{ duration: 0.5 }}
            className="hidden lg:block -mt-80"
          >
            <Phone type="medium" backgroundImage={video} />
          </motion.div>
          <motion.div
            initial={{ y: 1000 }}
            animate={{ y: 0 }}
            transition={{ duration: 0.95 }}
            className="hidden lg:block -mt-64 ml-8"
          >
            <Phone type="small" backgroundImage={bg2} />
          </motion.div>

          {/* For medium screens, hide small phones behind the medium phone */}

          {/* Left Small Phone */}
          <motion.div
            initial={{ y: 1000 }}
            animate={{ y: 0 }}
            transition={{ duration: 0.75 }}
            className="hidden md:block lg:hidden -mt-64 -mr-20"
          >
            <Phone type="small" backgroundImage={bg} />
          </motion.div>

          {/* Center Medium Phone */}
          <motion.div
            initial={{ y: 1000 }}
            animate={{ y: 0 }}
            transition={{ duration: 0.5 }}
            className="hidden md:block lg:hidden -mt-80 z-10"
          >
            <Phone type="medium" backgroundImage={video} />
          </motion.div>

          {/* Right Small Phone */}
          <motion.div
            initial={{ y: 1000 }}
            animate={{ y: 0 }}
            transition={{ duration: 0.75 }}
            className="hidden md:block lg:hidden -mt-64 -ml-20"
          >
            <Phone type="small" backgroundImage={bg2} />
          </motion.div>

          {/* Show only one medium phone for small screens */}
          <motion.div
            initial={{ y: 1000 }}
            animate={{ y: 0 }}
            transition={{ duration: 0.5 }}
            className="block md:hidden -mt-80"
          >
            <Phone type="medium" backgroundImage={video} />
          </motion.div>
          {/* </div> */}
        </div>
      </div>

      <div className="h-screen bg-[#ECF1FF] flex flex-col justify-center items-center md:flex-row md:space-x-4 pt-80 pt-64">
        <button className="mb-4 md:mb-0">
          {/* Add margin-bottom and remove margin-right for smaller screens */}
          <AppStore />
        </button>
        <button>
          <GooglePlay />
        </button>
      </div>
    </div>
  );
}

export default HomePage;
