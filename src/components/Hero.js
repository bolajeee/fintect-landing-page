import React from "react";

const Hero = () => {
  return (
    <div className="min-h-screen bg-white">
      {/* Navigation */}
      <nav className="container mx-auto px-6 py-4 mt-4 flex items-center justify-between bg-slate-700 rounded-full text-white ">
        <div className="flex items-center">
          <img src="/logo.svg" alt="Pay4Me App" className="h-8" />
        </div>

        <div className="hidden md:flex items-center space-x-8">
          <a
            href="#"
            className="text-white hover:text-primary transition-colors opacity-80 hover:opacity-100"
          >
            Home
          </a>
          <a
            href="#"
            className="text-white hover:text-primary transition-colors"
          >
            About
          </a>
          <a
            href="#"
            className="text-white hover:text-primary transition-colors"
          >
            Blog
          </a>
          <a
            href="#"
            className="text-white hover:text-primary transition-colors"
          >
            Support
          </a>
        </div>

        <button className="btn-primary">
          <span>Download app</span>
          <div className="flex items-center space-x-1">
            <img src="/playstore-icon.svg" alt="" className="h-5 w-5" />
            <img src="/apple-icon.svg" alt="" className="h-5 w-5" />
          </div>
        </button>
      </nav>

      {/* Hero Content */}
      <div className="container mx-auto px-6 pt-16 pb-24">
        <div className="text-center">
          {/* Tag */}
          <div className="inline-flex items-center space-x-2 bg-light-bg px-4 py-2 rounded-full mb-8">
            <img src="/secure-icon.svg" alt="" className="h-4 w-4" />
            <span className="text-sm font-medium text-gray-800">
              SECURE. GLOBAL. FAST
            </span>
          </div>

          {/* Heading */}
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 max-w-4xl mx-auto leading-tight mb-6">
            Reliable Payment Solutions for International Education
          </h1>

          {/* Subtitle */}
          <p className="text-lg text-gray-600 max-w-2xl mx-auto mb-12">
            The easiest and fastest way to pay tuition and fees to educational
            institutions, businesses, and government agencies worldwide.
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row items-center justify-center space-y-4 sm:space-y-0 sm:space-x-4 mb-12">
            <button className="btn-primary">
              <span>Download app</span>
              <div className="flex items-center space-x-1">
                <img src="/playstore-icon.svg" alt="" className="h-5 w-5" />
                <img src="/apple-icon.svg" alt="" className="h-5 w-5" />
              </div>
            </button>
            <button className="btn-secondary">
              <span>Watch Demo</span>
              <img src="/play-icon.svg" alt="" className="h-5 w-5" />
            </button>
          </div>

          {/* Trust Badge */}
          <div className="flex items-center justify-center space-x-3 mb-16">
            <div className="flex -space-x-2">
              <img
                src="/avatar1.jpg"
                className="h-8 w-8 rounded-full border-2 border-white"
                alt=""
              />
              <img
                src="/avatar2.jpg"
                className="h-8 w-8 rounded-full border-2 border-white"
                alt=""
              />
              <img
                src="/avatar3.jpg"
                className="h-8 w-8 rounded-full border-2 border-white"
                alt=""
              />
            </div>
            <p className="text-gray-600">Trusted by 3k+ Students Globally</p>
          </div>

          {/* Hero Image Section */}
          <div className="relative w-full max-w-5xl mx-auto aspect-[4/3] md:aspect-[16/9]">
            <div className="absolute inset-0 bg-light-bg rounded-full overflow-hidden">
              {/* Badges and Hero Image */}
              <div className="absolute top-[10%] left-[10%] flex items-center space-x-2 bg-white p-3 rounded-xl shadow-lg">
                <img src="/techstars.svg" alt="" className="h-6 w-6" />
                <p className="text-sm font-medium">Backed by Techstars</p>
              </div>

              <div className="absolute inset-0 flex items-center justify-center">
                <img
                  src="/hero-image.jpg"
                  alt=""
                  className="w-3/4 h-auto object-cover"
                />
              </div>

              <div className="absolute bottom-[15%] left-[5%] flex items-center space-x-2 bg-white p-3 rounded-xl shadow-lg">
                <img src="/google.svg" alt="" className="h-6 w-6" />
                <div className="text-yellow-400 text-sm">★★★★★</div>
                <p className="text-sm font-medium">5 star Google rating</p>
              </div>

              <div className="absolute top-[15%] right-[10%] bg-white p-4 rounded-xl shadow-lg">
                <div className="flex justify-between items-center mb-2">
                  <span className="text-sm text-gray-600">Wallet Balance</span>
                  <span className="text-xs text-gray-500">$ USD</span>
                </div>
                <div className="text-2xl font-bold text-gray-900 mb-4">
                  $ 22,850.00
                </div>
                <div className="flex space-x-2">
                  <button className="px-3 py-1.5 text-sm border border-gray-200 rounded-lg hover:bg-gray-50 transition-colors">
                    + Fund Wallet
                  </button>
                  <button className="px-3 py-1.5 text-sm border border-gray-200 rounded-lg hover:bg-gray-50 transition-colors">
                    Withdraw
                  </button>
                </div>
              </div>
            </div>
          </div>

          {/* Leading Brands Partner Section */}
          <div className="mt-24">
            <h3 className="text-center text-gray-500 uppercase tracking-wider mb-12">
              Leading Brands Partner with us
            </h3>
            <div className="flex justify-between items-center max-w-6xl mx-auto px-6">
              <img
                src="/brands/across.svg"
                alt="Across The Horizon"
                className="h-8 object-contain"
              />
              <img
                src="/brands/mpower.svg"
                alt="MPower Financing"
                className="h-8 object-contain"
              />
              <img
                src="/brands/prodigy.svg"
                alt="Prodigy Finance"
                className="h-8 object-contain"
              />
              <img
                src="/brands/techstars.svg"
                alt="Techstars"
                className="h-8 object-contain"
              />
              <img
                src="/brands/stripe.svg"
                alt="Stripe"
                className="h-8 object-contain"
              />
              <img
                src="/brands/paystack.svg"
                alt="Paystack"
                className="h-8 object-contain"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
