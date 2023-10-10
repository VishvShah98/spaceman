import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

function Carousel({ CarouselData }) {
  const [currentIndex, setCurrentIndex] = useState(0);

  const nextSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % CarouselData.length);
  };

  const prevSlide = () => {
    setCurrentIndex(
      (prevIndex) => (prevIndex - 1 + CarouselData.length) % CarouselData.length
    );
  };

  return (
    <div className="carousel-container flex flex-col justify-between">
      <div className="flex-grow flex justify-center items-center overflow-hidden relative">
        {/* Current Element */}
        <AnimatePresence mode="wait">
          <motion.div
            key={currentIndex}
            className="flex justify-center items-center"
          >
            {CarouselData[currentIndex]}
          </motion.div>
        </AnimatePresence>
      </div>

      <div className="flex justify-center items-center mb-4 mt-16">
        <button
          onClick={prevSlide}
          className="text-2xl text-gray-400 hover:text-gray-700 mr-4"
        >
          &lt;
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
          &gt;
        </button>
      </div>
    </div>
  );
}

export default Carousel;
