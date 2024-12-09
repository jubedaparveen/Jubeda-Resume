"use client"
import React, { useState, useEffect } from "react";

const ImageSlider = () => {

  const slides = [
    { id: 1, text: "Slide 1", bgColor: "bg-blue-500" },
    { id: 2, text: "Slide 2", bgColor: "bg-green-500" },
    { id: 3, text: "Slide 3", bgColor: "bg-red-500" },
  ];

  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) =>
        prevIndex === slides.length - 1 ? 0 : prevIndex + 1
      );
    }, 3000); // Change slide every 3 seconds
    return () => clearInterval(interval); // Cleanup interval on component unmount
  }, [slides.length]);

  return (
    <div className="relative w-full max-w-3xl mx-auto overflow-hidden rounded-lg">
      <div
        className="flex transition-transform duration-700"
        style={{transform: `translateX(-${currentIndex * 100}%)`,}}>
        {slides.map((slide, i) => (
          <div
            key={slide.i}
            className={`flex-shrink-0 w-full h-64 ${slide.bgColor} flex items-center justify-center text-white text-xl font-bold`}
          >
            {slide.text}
          </div>
        ))}
      </div>


      {/* Navigation dots */}
      <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 flex space-x-2">
        {slides.map((_, index) => (
          <button
            key={index}
            className={`w-3 h-3 rounded-full ${index === currentIndex ? "bg-white" : "bg-gray-400"}`}
            onClick={() => setCurrentIndex(index)}
          />
        ))}
      </div>
    </div>
  );
};

export default ImageSlider;
