import React from "react";

const Steps = () => {
  return (
    <div className="container mx-auto px-6 py-24">
      {/* Steps Tag */}
      <div className="flex flex-col items-center text-center">
        <div className="inline-flex items-center space-x-2 bg-light-bg px-4 py-2 rounded-full mb-8">
          <img src="/steps-icon.svg" alt="" className="h-4 w-4" />
          <span className="text-sm font-medium text-gray-800">
            HOW IT WORKS
          </span>
        </div>

        {/* Steps Heading */}
        <h2 className="text-4xl font-bold text-gray-900 mb-16">
          4 Simple Steps to Get Started
        </h2>

        {/* Steps Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-6xl mx-auto">
          {/* Step 1 */}
          <div className="bg-white rounded-3xl p-12 shadow-sm">
            <span className="text-xl text-gray-400 mb-4 block">1.</span>
            <h3 className="text-2xl font-semibold mb-4">
              Download the Mobile App
            </h3>
            <p className="text-gray-600 mb-8">
              Get started by downloading our mobile app, available on iOS and
              Android.
            </p>
            <div className="flex justify-center">
              <img
                src="/qr-code.png"
                alt="QR Code"
                className="w-48 h-48 object-contain"
              />
            </div>
          </div>

          {/* Step 2 */}
          <div className="bg-white rounded-3xl p-12 shadow-sm">
            <span className="text-xl text-gray-400 mb-4 block">2.</span>
            <h3 className="text-2xl font-semibold mb-4">Sign up on the app.</h3>
            <p className="text-gray-600 mb-8">
              Sign up with your details, verify your identity, and set up your
              payment preferences.
            </p>
            <div className="flex justify-center bg-light-bg rounded-3xl p-4">
              <img
                src="/signup-screen.png"
                alt="Sign Up Screen"
                className="w-48 object-contain"
              />
            </div>
          </div>

          {/* Step 3 */}
          <div className="bg-white rounded-3xl p-12 shadow-sm">
            <span className="text-xl text-gray-400 mb-4 block">3.</span>
            <h3 className="text-2xl font-semibold mb-4">
              Setup Payment Details
            </h3>
            <p className="text-gray-600 mb-8">
              Securely link your local bank account or mobile wallet to the
              Pay4Me app.
            </p>
            <div className="flex justify-center items-center space-x-4">
              <img src="/bank-icon.png" alt="Bank" className="w-16 h-16" />
              <img src="/arrow.svg" alt="Arrow" className="w-8 h-8" />
              <img src="/wallet-icon.png" alt="Wallet" className="w-16 h-16" />
            </div>
          </div>

          {/* Step 4 */}
          <div className="bg-white rounded-3xl p-12 shadow-sm">
            <span className="text-xl text-gray-400 mb-4 block">4.</span>
            <h3 className="text-2xl font-semibold mb-4">
              Complete Your Payment
            </h3>
            <p className="text-gray-600 mb-8">
              Choose your preferred payment method and finalize the transaction
              securely.
            </p>
            <div className="flex justify-center">
              <img
                src="/checkmark.svg"
                alt="Complete"
                className="w-24 h-24 text-primary"
              />
            </div>
          </div>
        </div>

        {/* CTA Button */}
        <div className="mt-16">
          <button className="inline-flex items-center space-x-2 bg-primary text-white px-6 py-3 rounded-full hover:bg-primary/90 transition-colors">
            <span>Download app</span>
            <img src="/playstore-icon.svg" alt="" className="h-5 w-5" />
            <img src="/apple-icon.svg" alt="" className="h-5 w-5" />
          </button>
        </div>
      </div>
    </div>
  );
};

export default Steps;
