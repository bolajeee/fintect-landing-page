import React, { useState } from "react";

// Import images
// import jimmy from "../images/testimonials/jimmy.png";
// import palmer from "../images/testimonials/palmer.png";
// import hannah from "../images/testimonials/hannah.png";
// import secure from "../images/hero/secure-icon.png";
import VideoDemo from "./VideoDemo";

const Testimonials = () => {
  const testimonials = [
    {
      name: "Jimmy Adewale",
      role: "Entrepreneur",
      image: "/images/testimonials/jimmy.png",
      content:
        "The payment process was smooth and efficient. Highly recommended!",
    },
    {
      name: "Palmer Nicole",
      role: "PhD Student",
      image: "/images/testimonials/palmer.png",
      content: "Made my international tuition payments hassle-free.",
    },
    {
      name: "Hannah Adams",
      role: "Senior Therapist",
      image: "/images/testimonials/hannah.png",
      content: "Great service for handling educational payments globally.",
    },
  ];

  // State for tracking current slide
  const [currentSlide, setCurrentSlide] = useState(0);

  // Function to handle next slide
  const nextSlide = () => {
    setCurrentSlide((prev) =>
      prev === testimonials.length - 1 ? 0 : prev + 1
    );
  };

  // Function to handle previous slide
  const prevSlide = () => {
    setCurrentSlide((prev) =>
      prev === 0 ? testimonials.length - 1 : prev - 1
    );
  };

  // Function to directly navigate to a slide
  const goToSlide = (index) => {
    setCurrentSlide(index);
  };

  return (
    <>
      <div className="container mx-auto px-6 py-24 relative">
        <VideoDemo />

        {/* Content */}
        <div className="relative z-10 pt-24">
          {/* Testimonials Tag */}
          <div className="inline-flex items-center space-x-2 bg-light-bg px-4 py-2 rounded-full mb-8">
            <img
              src="/images/hero/secure-icon.png"
              alt=""
              className="h-4 w-4"
            />
            <span className="text-sm font-medium text-gray-800">
              TESTIMONIALS
            </span>
          </div>

          {/* Testimonials Heading */}
          <div className="max-w-2xl">
            <h2 className="text-4xl font-bold text-gray-900 mb-16">
              Don't take our words for it,
              <br />
              Take theirs.
            </h2>
          </div>

          {/* Testimonials Carousel */}
          <div className="relative max-w-6xl mx-auto">
            {/* Navigation Buttons */}
            <button
              onClick={prevSlide}
              className="absolute left-0 top-1/2 -translate-y-1/2 -translate-x-12 z-10 bg-white rounded-full p-2 shadow-md hover:bg-gray-50"
            >
              {/* <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-6 w-6"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M15 19l-7-7 7-7"
              />
            </svg> */}
            </button>
            <button
              onClick={nextSlide}
              className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-12 z-10 bg-white rounded-full p-2 shadow-md hover:bg-gray-50"
            >
              {/* <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-6 w-6"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M9 5l7 7-7 7"
              />
            </svg> */}
            </button>

            {/* Testimonial Cards */}
            <div className="overflow-hidden">
              <div
                className="flex transition-transform duration-500 ease-in-out"
                style={{ transform: `translateX(-${currentSlide * 33.333}%)` }}
              >
                {testimonials.map((testimonial, index) => (
                  <div key={index} className="w-1/3 flex-shrink-0 px-4">
                    <div className="bg-white rounded-2xl p-6 shadow-sm hover:shadow-md transition-shadow duration-300">
                      <div className="relative">
                        <img
                          src={testimonial.image}
                          alt={testimonial.name}
                          className="w-full h-48 object-cover rounded-xl mb-4"
                        />
                        <div className="absolute bottom-0 left-0 right-0 p-4 bg-gradient-to-t from-black/60 to-transparent rounded-b-xl">
                          <h3 className="text-white font-semibold">
                            {testimonial.name}
                          </h3>
                          <p className="text-white/80 text-sm">
                            {testimonial.role}
                          </p>
                        </div>
                      </div>
                      <p className="text-gray-600 mt-4">
                        {testimonial.content}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Navigation Dots */}
            <div className="flex justify-center mt-8 space-x-2">
              {testimonials.map((_, index) => (
                <button
                  key={index}
                  onClick={() => goToSlide(index)}
                  className={`w-2 h-2 rounded-full transition-colors ${
                    index === currentSlide ? "bg-primary" : "bg-gray-300"
                  }`}
                />
              ))}
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Testimonials;
