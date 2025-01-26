import React from "react";

const Testimonials = () => {
  const testimonials = [
    {
      name: "Jimmy Adewale",
      role: "Entrepreneur",
      image: "/testimonials/jimmy.jpg",
      content:
        "The payment process was smooth and efficient. Highly recommended!",
    },
    {
      name: "Palmer Nicole",
      role: "PhD Student",
      image: "/testimonials/palmer.jpg",
      content: "Made my international tuition payments hassle-free.",
    },
    {
      name: "Hannah Adams",
      role: "Senior Therapist",
      image: "/testimonials/hannah.jpg",
      content: "Great service for handling educational payments globally.",
    },
    {
      name: "Lex Brown",
      role: "Masters Student",
      image: "/testimonials/lex.jpg",
      content: "The best solution for international student payments.",
    },
  ];

  return (
    <div className="container mx-auto px-6 py-24">
      {/* Testimonials Tag */}
      <div className="inline-flex items-center space-x-2 bg-light-bg px-4 py-2 rounded-full mb-8">
        <img src="/testimonial-icon.svg" alt="" className="h-4 w-4" />
        <span className="text-sm font-medium text-gray-800">TESTIMONIALS</span>
      </div>

      {/* Testimonials Heading */}
      <div className="max-w-2xl">
        <h2 className="text-4xl font-bold text-gray-900 mb-16">
          Don't take our words for it,
          <br />
          Take theirs.
        </h2>
      </div>

      {/* Testimonials Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
        {testimonials.map((testimonial, index) => (
          <div
            key={index}
            className="bg-white rounded-2xl p-6 shadow-sm hover:shadow-md transition-shadow duration-300"
          >
            <div className="relative">
              <img
                src={testimonial.image}
                alt={testimonial.name}
                className="w-full h-48 object-cover rounded-xl mb-4"
              />
              <div className="absolute bottom-0 left-0 right-0 p-4 bg-gradient-to-t from-black/60 to-transparent rounded-b-xl">
                <h3 className="text-white font-semibold">{testimonial.name}</h3>
                <p className="text-white/80 text-sm">{testimonial.role}</p>
              </div>
            </div>
            <p className="text-gray-600 mt-4">{testimonial.content}</p>
          </div>
        ))}
      </div>

      {/* Navigation Dots */}
      <div className="flex justify-center mt-8 space-x-2">
        <button className="w-2 h-2 rounded-full bg-primary"></button>
        <button className="w-2 h-2 rounded-full bg-gray-300"></button>
        <button className="w-2 h-2 rounded-full bg-gray-300"></button>
      </div>
    </div>
  );
};

export default Testimonials;
