import React from "react";

import secureIcon from "../images/hero/secure-icon.png";
import globalIcon from "../images/features/global.png";
import fastIcon from "../images/features/fast.png";
import secureIcon2 from "../images/features/secure.png";
import featuresBg from "../images/features/features-bg.png";

const Features = () => {
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

  return (
    <div className="bg-[#E7FBCF] mt-24 py-20 relative overflow-hidden w-full">
      {/* Background Image - Positioned Absolutely */}
      <div className="absolute top-0 right-0 h-full">
        <img
          src="/images/features/features-bg.png"
          alt="features-bg"
          className="h-[540px] w-auto object-contain"
        />
      </div>

      {/* Content Container - With Relative Position for z-index */}
      <div className="container mx-auto px-6">
        <div className="relative z-10">
          {/* Features Tag */}
          <div className="inline-flex items-center space-x-2 bg-white/80 px-4 py-2 rounded-full mb-8">
            <img
              src="/images/hero/secure-icon.png"
              alt=""
              className="h-4 w-4"
            />
            <span className="text-sm font-medium text-gray-800">FEATURES</span>
          </div>

          {/* Features Heading */}
          <h2 className="text-4xl font-bold text-gray-900 mb-16">
            What Truly sets us apart
          </h2>

          {/* Features Grid */}
          <div className="grid grid-cols-3 gap-8">
            {/* Feature 1 */}
            <div className="bg-white rounded-2xl p-8">
              <div className="mb-6">
                <img
                  src="/images/features/global.png"
                  alt=""
                  className="h-12 w-12"
                />
              </div>
              <h3 className="text-xl font-semibold mb-4">
                Global Accessibility
              </h3>
              <p className="text-gray-600 mb-8">
                Effortlessly send tuition and other payments to educational
                institutions worldwide, no matter where you are.
              </p>
              <button className="inline-flex items-center space-x-2 text-gray-800 bg-primary  px-6 py-3 rounded-full transition-all duration-300 group">
                <span className="font-medium">Download app</span>
                <svg
                  className="w-5 h-5 transform group-hover:translate-x-1 transition-transform duration-300"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M17 8l4 4m0 0l-4 4m4-4H3"
                  />
                </svg>
              </button>
            </div>

            {/* Feature 2 */}
            <div className="bg-white rounded-2xl p-8">
              <div className="mb-6">
                <img
                  src="/images/features/fast.png"
                  alt=""
                  className="h-12 w-12"
                />
              </div>
              <h3 className="text-xl font-semibold mb-4">
                Fast & Reliable Transactions
              </h3>
              <p className="text-gray-600 mb-8">
                Ensure your payments are processed quickly, helping you meet
                important deadlines without stress.
              </p>
              <button className="inline-flex items-center space-x-2 text-gray-800 bg-primary hover:text-white px-6 py-3 rounded-full transition-all duration-300 group">
                <span className="font-medium">Download app</span>
                <svg
                  className="w-5 h-5 transform group-hover:translate-x-1 transition-transform duration-300"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M17 8l4 4m0 0l-4 4m4-4H3"
                  />
                </svg>
              </button>
            </div>

            {/* Feature 3 */}
            <div className="bg-white rounded-2xl p-8">
              <div className="mb-6">
                <img
                  src="/images/features/secure.png"
                  alt=""
                  className="h-12 w-12"
                />
              </div>
              <h3 className="text-xl font-semibold mb-4">
                Secure & Transparent
              </h3>
              <p className="text-gray-600 mb-8">
                Enjoy peace of mind with secure payment processing and complete
                transparency on fees and conversion rates.
              </p>
              <button className="inline-flex items-center space-x-2 text-gray-800 bg-primary  hover:text-white px-6 py-3 rounded-full transition-all duration-300 group">
                <span className="font-medium">Download app</span>
                <svg
                  className="w-5 h-5 transform group-hover:translate-x-1 transition-transform duration-300"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M17 8l4 4m0 0l-4 4m4-4H3"
                  />
                </svg>
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Features;
