import React, { useState, useEffect } from "react";
import { MdKeyboardArrowRight, MdKeyboardArrowLeft } from "react-icons/md";

const Carousel = ({ slides = [], autoSlideInterval = 3000 }) => {
  const [currentSlide, setCurrentSlide] = useState(0);

  // Auto slide effect
  useEffect(() => {
    if (slides.length === 0) return;

    const intervalId = setInterval(() => {
      setCurrentSlide((prev) => (prev === slides.length - 1 ? 0 : prev + 1));
    }, autoSlideInterval);

    return () => {
      clearInterval(intervalId); // Clean up the interval on unmount
    };
  }, [slides.length, autoSlideInterval]);

  if (slides.length === 0) {
    return (
      <div className="text-center text-gray-500">No slides available.</div>
    );
  }

  const handlePrev = () => {
    setCurrentSlide((prev) => (prev === 0 ? slides.length - 1 : prev - 1));
  };

  const handleNext = () => {
    setCurrentSlide((prev) => (prev === slides.length - 1 ? 0 : prev + 1));
  };

  return (
    <div className="relative w-full mx-4 md:mx-20">
      {/* Card */}
      <div className="h-[300px] md:h-[500px] bg-[#f6f3ef] rounded-lg shadow-md overflow-hidden flex items-center p-4">
        <div className="w-1/2 h-full bg-gray-400 flex items-center justify-center rounded-xl">
          {/* Placeholder for image */}
          <div className="w-1/2 h-full bg-gray-400 rounded-md"></div>
        </div>
        <div className="w-1/2 p-6">
          <h2 className="text-lg md:text-2xl font-bold text-gray-800">
            {slides[currentSlide]?.title || "No Title"}
          </h2>
          <p className="text-gray-600 text-sm md:text-base mt-4">
            {slides[currentSlide]?.description || "No Description"}
          </p>
          <ul className="mt-2 md:mt-6 space-y-1 md:space-y-2">
            {slides[currentSlide]?.benefits?.map((benefit, index) => (
              <li key={index} className="flex items-center space-x-2">
                <span className="text-green-500">✔</span>
                <span className="text-gray-700">{benefit}</span>
              </li>
            ))}
          </ul>
          <button className="mt-2 md:mt-6 bg-green-600 text-white px-4 py-2 rounded-lg hover:bg-green-700">
            Learn More
          </button>
        </div>
      </div>

      {/* Navigation Controls */}
      <div className="w-full flex justify-center items-center mt-8">
        <button
          onClick={handlePrev}
          className="bg-gray-800 text-white mx-10 w-10 h-10 font-bold flex justify-center items-center rounded-full hover:bg-gray-700"
        >
        <MdKeyboardArrowLeft />
        </button>
        <div className="flex space-x-2">
          {slides.map((_, index) => (
            <div
              key={index}
              className={`w-10 md:w-[200px] h-1 rounded-full ${
                index === currentSlide ? "bg-gray-600" : "bg-gray-300"
              }`}
              onClick={() => setCurrentSlide(index)}
            ></div>
          ))}
        </div>
        <button
          onClick={handleNext}
          className="bg-gray-800 text-white  mx-10 w-10 h-10 flex justify-center items-center font-bold rounded-full hover:bg-gray-700"
        >
        <MdKeyboardArrowRight />
        </button>
      </div>
    </div>
  );
};

export default Carousel;
