import React from "react";

const Features = () => {
  return (
    <div className="bg-light-bg rounded-3xl mt-24 px-20 py-16">
      {/* Features Tag */}
      <div className="inline-flex items-center space-x-2 bg-white/80 px-4 py-2 rounded-full mb-8">
        <img src="/feature-icon.svg" alt="" className="h-4 w-4" />
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
            <img src="/features/global.svg" alt="" className="h-12 w-12" />
          </div>
          <h3 className="text-xl font-semibold mb-4">Global Accessibility</h3>
          <p className="text-gray-600 mb-8">
            Effortlessly send tuition and other payments to educational
            institutions worldwide, no matter where you are.
          </p>
          <button className="inline-flex items-center space-x-2 text-gray-800 bg-primary/10 hover:bg-primary hover:text-white px-6 py-3 rounded-full transition-all duration-300 group">
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
            <img src="/features/fast.svg" alt="" className="h-12 w-12" />
          </div>
          <h3 className="text-xl font-semibold mb-4">
            Fast & Reliable Transactions
          </h3>
          <p className="text-gray-600 mb-8">
            Ensure your payments are processed quickly, helping you meet
            important deadlines without stress.
          </p>
          <button className="inline-flex items-center space-x-2 text-gray-800 bg-primary/10 hover:bg-primary hover:text-white px-6 py-3 rounded-full transition-all duration-300 group">
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
            <img src="/features/secure.svg" alt="" className="h-12 w-12" />
          </div>
          <h3 className="text-xl font-semibold mb-4">Secure & Transparent</h3>
          <p className="text-gray-600 mb-8">
            Enjoy peace of mind with secure payment processing and complete
            transparency on fees and conversion rates.
          </p>
          <button className="inline-flex items-center space-x-2 text-gray-800 bg-primary/10 hover:bg-primary hover:text-white px-6 py-3 rounded-full transition-all duration-300 group">
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
  );
};

export default Features;
