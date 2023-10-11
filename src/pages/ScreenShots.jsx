import React from "react";
import Carousel from "../components/Carousel/Carousel";
import PhoneScreenshots from "../components/Phone/PhoneScreenshots";
import img1 from "../assets/app-screen1.webp";
import img2 from "../assets/app-screen2.webp";
import img3 from "../assets/app-screen3.jpg";
import img4 from "../assets/app-screen5.webp";
import img5 from "../assets/app-screen6.webp";
import img6 from "../assets/app-screen4.webp";

function ScreenShots() {
  const imagesFirstSet = [img2, img1, img3];
  const imagesSecondSet = [img6, img5, img4];

  return (
    <div  className="bg-[#ECF1FF] leading-tight pt-36">
      <div className="text-center uppercase mb-4">
        <span id="screenshots" className="text-[#EF106E] text-md md:text-lg font-bold">
          App Preview
        </span>
      </div>
      <div className="text-center mb-5 md:mb-20 lg:mb-28">
        <span className="text-3xl md:text-7xl text-[#1D154B] font-black uppercase tracking-tighter">
          Screenshots
        </span>
      </div>
      <Carousel
        CarouselData={[
          <PhoneScreenshots images={imagesFirstSet} />,
          <PhoneScreenshots images={imagesSecondSet} />,
        ]}
      />
    </div>
  );
}

export default ScreenShots;
