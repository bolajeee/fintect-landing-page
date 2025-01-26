import React from "react";

const Offers = () => {
  return (
    <div className="container mx-auto px-6 py-24 bg-black text-white">
      {/* Offers Tag */}
      <div className="flex flex-col items-center text-center">
        <div className="inline-flex items-center space-x-2 bg-white/10 px-4 py-2 rounded-full mb-8">
          <img src="/offer-icon.svg" alt="" className="h-4 w-4" />
          <span className="text-sm font-medium">WHAT WE OFFER</span>
        </div>

        {/* Offers Heading */}
        <h2 className="text-4xl font-bold mb-16">
          Simplified Payments for Your
          <br />
          Relocation Dreams
        </h2>

        {/* Offers Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-6xl mx-auto">
          {/* Offer 1 - Tuition Payments */}
          <div className="bg-[#FFFBEB] text-black rounded-3xl p-12">
            <div className="mb-6">
              <img
                src="/lightning-icon.svg"
                alt=""
                className="h-12 w-12 text-yellow-500"
              />
            </div>
            <h3 className="text-2xl font-semibold mb-4">
              Super fast tuition and
              <br />
              school fees payments
            </h3>
            <p className="text-gray-600 mb-12">
              Seamlessly pay local and international educational expenses using
              our fast and convenient online payments platform from the comfort
              of your home.
            </p>
            <div className="grid grid-cols-2 gap-4">
              <img
                src="/schools/stanford.svg"
                alt="Stanford"
                className="h-12"
              />
              <img
                src="/schools/ghana.svg"
                alt="University of Ghana"
                className="h-12"
              />
              <img src="/schools/byu.svg" alt="BYU" className="h-12" />
              <img
                src="/schools/other.svg"
                alt="Other University"
                className="h-12"
              />
            </div>
            <div className="absolute bottom-0 right-0 opacity-10">
              <div className="bg-yellow-500/20 h-32 w-32 rounded-tr-3xl" />
            </div>
          </div>

          {/* Offer 2 - SEVIS & Applications */}
          <div className="bg-[#EFF6FF] text-black rounded-3xl p-12">
            <div className="mb-6">
              <img
                src="/dollar-icon.svg"
                alt=""
                className="h-12 w-12 text-blue-500"
              />
            </div>
            <h3 className="text-2xl font-semibold mb-4">
              Pay for SEVIS, WES, Visa
              <br />
              Applications & More
            </h3>
            <p className="text-gray-600 mb-12">
              We help you get closer to your study abroad and relocation goals
              faster by promptly completing your payment orders for credential
              evaluation, immigration, and visa purposes.
            </p>
            <div className="grid grid-cols-3 gap-4">
              <img src="/services/sevis.svg" alt="SEVIS" className="h-12" />
              <img src="/services/wes.svg" alt="WES" className="h-12" />
              <img
                src="/services/visa.svg"
                alt="Visa Applications"
                className="h-12"
              />
            </div>
            <div className="absolute bottom-0 right-0 opacity-10">
              <div className="bg-blue-500/20 h-32 w-32 rounded-tr-3xl" />
            </div>
          </div>
        </div>

        {/* CTA Button */}
        <div className="mt-16">
          <button className="inline-flex items-center space-x-2 bg-primary text-black px-6 py-3 rounded-full hover:bg-primary/90 transition-colors">
            <span>Download app</span>
            <img src="/playstore-icon.svg" alt="" className="h-5 w-5" />
            <img src="/apple-icon.svg" alt="" className="h-5 w-5" />
          </button>
        </div>
      </div>
    </div>
  );
};

export default Offers;
