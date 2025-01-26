import React from "react";

const Steps = () => {
  return (
    <div className="container mx-auto px-6 py-24">
      {/* Steps Tag */}
      <div className="inline-flex items-center space-x-2 bg-light-bg px-4 py-2 rounded-full mb-8">
        <img src="/steps-icon.svg" alt="" className="h-4 w-4" />
        <span className="text-sm font-medium text-gray-800">HOW IT WORKS</span>
      </div>

      {/* Steps Heading */}
      <h2 className="text-4xl font-bold text-gray-900 mb-16">
        Get started in just a few steps
      </h2>

      {/* Steps Grid - Changed to 2 columns */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl mx-auto">
        {/* Step 1 */}
        <div className="relative">
          <div className="bg-white rounded-2xl p-8 shadow-sm hover:shadow-md transition-shadow duration-300">
            <div className="absolute -top-4 left-8 bg-primary text-white w-8 h-8 rounded-full flex items-center justify-center font-semibold">
              1
            </div>
            <img src="/steps/download.svg" alt="" className="h-12 w-12 mb-6" />
            <h3 className="text-xl font-semibold mb-4">Download the App</h3>
            <p className="text-gray-600">
              Get our app from the App Store or Google Play Store
            </p>
          </div>
        </div>

        {/* Step 2 */}
        <div className="relative">
          <div className="bg-white rounded-2xl p-8 shadow-sm hover:shadow-md transition-shadow duration-300">
            <div className="absolute -top-4 left-8 bg-primary text-white w-8 h-8 rounded-full flex items-center justify-center font-semibold">
              2
            </div>
            <img src="/steps/create.svg" alt="" className="h-12 w-12 mb-6" />
            <h3 className="text-xl font-semibold mb-4">Create Account</h3>
            <p className="text-gray-600">
              Sign up and verify your identity in minutes
            </p>
          </div>
        </div>

        {/* Step 3 */}
        <div className="relative">
          <div className="bg-white rounded-2xl p-8 shadow-sm hover:shadow-md transition-shadow duration-300">
            <div className="absolute -top-4 left-8 bg-primary text-white w-8 h-8 rounded-full flex items-center justify-center font-semibold">
              3
            </div>
            <img src="/steps/fund.svg" alt="" className="h-12 w-12 mb-6" />
            <h3 className="text-xl font-semibold mb-4">Fund Your Wallet</h3>
            <p className="text-gray-600">
              Add funds using your preferred payment method
            </p>
          </div>
        </div>

        {/* Step 4 */}
        <div className="relative">
          <div className="bg-white rounded-2xl p-8 shadow-sm hover:shadow-md transition-shadow duration-300">
            <div className="absolute -top-4 left-8 bg-primary text-white w-8 h-8 rounded-full flex items-center justify-center font-semibold">
              4
            </div>
            <img src="/steps/send.svg" alt="" className="h-12 w-12 mb-6" />
            <h3 className="text-xl font-semibold mb-4">Start Sending</h3>
            <p className="text-gray-600">
              Make instant payments to institutions globally
            </p>
          </div>
        </div>
      </div>

      {/* CTA Section */}
      <div className="mt-16 text-center">
        <button className="inline-flex items-center space-x-2 text-gray-800 bg-primary/10 hover:bg-primary hover:text-white px-8 py-4 rounded-full transition-all duration-300 group">
          <span className="font-medium">Get Started Now</span>
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
  );
};

export default Steps;
