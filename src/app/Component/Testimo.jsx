"use client"
import React, { useState } from "react";

const testimonials = [
  {
    name: "John Doe",
    role: "Software Engineer",
    image: "https://via.placeholder.com/80",
    feedback:
      "This platform has been a game-changer for my career. The user interface is seamless, and the support is exceptional!",
  },
  {
    name: "Jane Smith",
    role: "Product Manager",
    image: "https://via.placeholder.com/80",
    feedback:
      "I absolutely love the experience here. It's intuitive and well-designed, making my daily tasks much easier.",
  },
  {
    name: "Michael Brown",
    role: "UI/UX Designer",
    image: "https://via.placeholder.com/80",
    feedback:
      "The attention to detail is incredible! Everything works perfectly, and the team behind this is amazing.",
  },
];

const TestimonialSlider = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const prevSlide = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? testimonials.length - 1 : prevIndex - 1
    );
  };

  const nextSlide = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === testimonials.length - 1 ? 0 : prevIndex + 1
    );
  };

  return (
    <div className="w-full max-w-3xl mx-auto p-6 bg-white rounded-lg shadow-md">
      <div className="relative flex items-center justify-center">
        {/* Previous Button */}
        <button
          onClick={prevSlide}
          className="absolute left-0 p-2 text-white bg-gray-800 rounded-full shadow hover:bg-gray-700 focus:outline-none"
        >
          &larr;
        </button>

        {/* Testimonial Content */}
        <div className="text-center">
          <img
            src={testimonials[currentIndex].image}
            alt={testimonials[currentIndex].name}
            className="w-20 h-20 mx-auto mb-4 rounded-full"
          />
          <h3 className="text-lg font-semibold">{testimonials[currentIndex].name}</h3>
          <p className="text-sm text-gray-600">{testimonials[currentIndex].role}</p>
          <p className="mt-4 text-gray-700 italic">
            "{testimonials[currentIndex].feedback}"
          </p>
        </div>

        {/* Next Button */}
        <button
          onClick={nextSlide}
          className="absolute right-0 p-2 text-white bg-gray-800 rounded-full shadow hover:bg-gray-700 focus:outline-none"
        >
          &rarr;
        </button>
      </div>

      {/* Indicators */}
      <div className="flex items-center justify-center mt-4 space-x-2">
        {testimonials.map((_, index) => (
          <button
            key={index}
            onClick={() => setCurrentIndex(index)}
            className={`w-3 h-3 rounded-full ${
              currentIndex === index ? "bg-gray-800" : "bg-gray-400"
            }`}
          ></button>
        ))}
      </div>
    </div>
  );
};

export default TestimonialSlider;
