import React, { useState, useEffect } from "react";

function Carousel({ CarouselData }) {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [transitionOffset, setTransitionOffset] = useState(0);

  const nextSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % CarouselData.length);
  };

  const prevSlide = () => {
    setCurrentIndex(
      (prevIndex) => (prevIndex - 1 + CarouselData.length) % CarouselData.length
    );
  };

  useEffect(() => {
    const timer = setInterval(nextSlide, 3500);
    return () => clearInterval(timer);
  }, []);

  useEffect(() => {
    setTransitionOffset(-currentIndex * 100); // Adjust as needed
  }, [currentIndex]);

  return (
    <div className="carousel-container h-screen flex flex-col justify-between relative">
      {/* Sliding Carousel */}
      <div
        className="carousel-content flex-grow flex transition-transform duration-500"
        style={{
          transform: `translateX(${transitionOffset}%)`,
        }}
      >
        {CarouselData.map((item, index) => (
          <div key={index} className="carousel-slide w-screen">
            {item}
          </div>
        ))}
      </div>

      {/* Carousel Dots and Arrows */}
      <div className="flex justify-center items-center mb-4">
        <button
          onClick={prevSlide}
          className="text-2xl text-gray-400 hover:text-gray-700 mr-4"
        >
          &lt; {/* Left Arrow */}
        </button>

        {CarouselData.map((_, index) => (
          <span
            key={index}
            onClick={() => setCurrentIndex(index)}
            className={`inline-block h-3 w-3 rounded-full mx-1 ${
              index === currentIndex ? "bg-pink-500" : "bg-gray-300"
            } cursor-pointer`}
          ></span>
        ))}

        <button
          onClick={nextSlide}
          className="text-2xl text-gray-400 hover:text-gray-700 ml-4"
        >
          &gt; {/* Right Arrow */}
        </button>
      </div>
    </div>
  );
}

export default Carousel;
