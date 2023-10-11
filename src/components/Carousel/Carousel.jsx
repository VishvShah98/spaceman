import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

function Carousel({ CarouselData }) {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [direction, setDirection] = useState(0);

  const nextSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % CarouselData.length);
  };

  const prevSlide = () => {
    setCurrentIndex(
      (prevIndex) => (prevIndex - 1 + CarouselData.length) % CarouselData.length
    );
  };

  const handleDragEnd = (e, info) => {
    if (info.offset.x > 150) {
      prevSlide();
      setDirection(-1);
    } else if (info.offset.x < -150) {
      nextSlide();
      setDirection(1);
    }
  };

  const slideVariants = {
    hidden: (direction) => ({
      opacity: 0,
      x: direction > 0 ? 100 : -100
    }),
    visible: {
      opacity: 1,
      x: 0,
      transition: {
        duration: 0.5
      }
    },
    exit: (direction) => ({
      opacity: 0,
      x: direction < 0 ? 100 : -100,
      transition: {
        duration: 0.5
      }
    })
  };

  return (
    <div className="carousel-container flex flex-col justify-between">
      <div className="flex-grow flex justify-center items-center overflow-hidden relative">
        <AnimatePresence initial={false} custom={direction} mode='wait'>
          <motion.div
            key={currentIndex}
            custom={direction}
            initial="hidden"
            animate="visible"
            exit="exit"
            variants={slideVariants}
            drag="x"
            dragConstraints={{ left: 0, right: 0 }}
            onDragEnd={handleDragEnd}
            className="flex justify-center items-center cursor-grabbing"
          >
            {CarouselData[currentIndex]}
          </motion.div>
        </AnimatePresence>
      </div>

      <div className="flex justify-center items-center mb-4 mt-16">
        <button
          onClick={() => {
            prevSlide();
            setDirection(-1);
          }}
          className="text-2xl text-gray-400 hover:text-gray-700 mr-4"
        >
          &lt;
        </button>

        {CarouselData.map((_, index) => (
          <span
            key={index}
            onClick={() => {
              setCurrentIndex(index);
              setDirection(index > currentIndex ? 1 : -1);
            }}
            className={`inline-block h-3 w-3 rounded-full mx-1 ${
              index === currentIndex ? "bg-pink-500" : "bg-gray-300"
            } cursor-pointer`}
          ></span>
        ))}

        <button
          onClick={() => {
            nextSlide();
            setDirection(1);
          }}
          className="text-2xl text-gray-400 hover:text-gray-700 ml-4"
        >
          &gt;
        </button>
      </div>
    </div>
  );
}

export default Carousel;
