import React from "react";

import offerLighning from "../images/offers/offer-lightning.png";
import offerDollar from "../images/offers/offer-dollar.png";
import sevis from "../images/offers/sevis.png";
import wes from "../images/offers/wes.png";
import visa from "../images/offers/visa.png";
import stanford from "../images/offers/stanford.png";
import ghana from "../images/offers/ghana.png";
import byu from "../images/offers/byu.png";
import unilag from "../images/offers/unilag.png";
import playstore from "../images/hero/playstore-icon.png";
import apple from "../images/hero/apple-icon.png";
import secureIcon from "../images/hero/secure-icon.png";
import tuitionBg from "../images/offers/offer-tuition-bg.png";
import dollarBg from "../images/offers/offer-dollar-bg.png";
import leftBg from "../images/offers/offer-l-bg.png";
import rightBg from "../images/offers/offer-r-bg.png";

const Offers = () => {
  return (
    <div className="w-full bg-black text-white py-24">
      {/* Left Background Image */}
      <div className="absolute left-0  z-10">
        <img src={leftBg} alt="" className="w-[250px] object-cover" />
      </div>

      {/* Right Background Image */}
      <div className="absolute right-0   z-10">
        <img src={rightBg} alt="" className="w-[250px] object-cover" />
      </div>
      <div className="container mx-auto px-6 relative">
        {/* Offers Tag */}
        <div className="flex flex-col items-center text-center">
          <div className="inline-flex items-center space-x-2 bg-white/10 px-4 py-2 rounded-full mb-8">
            <img src={secureIcon} alt="" className="h-4 w-4" />
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
            <div className="bg-[#FFFBEB] text-black rounded-3xl p-12 relative">
              {/* Background Elements */}
              <div className="absolute bottom-0 right-0 w-full h-full overflow-hidden z-0 opacity-50">
                <div className="absolute bottom-0 right-0 bg-yellow-500/20 h-32 w-32 rounded-tr-3xl" />
                <img
                  src={tuitionBg}
                  alt=""
                  className="absolute bottom-0 right-0 h-48 w-48 object-contain"
                />
              </div>
              {/* Content with higher z-index */}
              <div className="relative z-10">
                <div className="mb-6">
                  <img
                    src="/images/offers/offer-lightning.png"
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
                  Seamlessly pay local and international educational expenses
                  using our fast and convenient online payments platform from
                  the comfort of your home.
                </p>
                <div className="grid grid-cols-2 gap-4">
                  <img src={stanford} alt="Stanford" className="h-12" />
                  <img src={ghana} alt="University of Ghana" className="h-12" />
                  <img src={byu} alt="Other University" className="h-12" />
                  <img src={unilag} alt="Other University" className="h-12" />
                </div>
              </div>
            </div>

            {/* Offer 2 - SEVIS & Applications */}
            <div className="bg-[#EFF6FF] text-black rounded-3xl p-12 relative">
              {/* Background Elements */}
              <div className="absolute bottom-0 right-0 w-full h-full overflow-hidden z-0 opacity-50">
                <div className="absolute bottom-0 right-0 bg-blue-500/20 h-32 w-32 rounded-tr-3xl" />
                <img
                  src={dollarBg}
                  alt=""
                  className="absolute bottom-0 right-0 h-48 w-48 object-contain"
                />
              </div>
              {/* Content with higher z-index */}
              <div className="relative z-10">
                <div className="mb-6">
                  <img
                    src="/images/offers/offer-dollar.png"
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
                  We help you get closer to your study abroad and relocation
                  goals faster by promptly completing your payment orders for
                  credential evaluation, immigration, and visa purposes.
                </p>
                <div className="grid grid-cols-3 gap-4">
                  <img
                    src="/images/offers/sevis.png"
                    alt="SEVIS"
                    className="h-12"
                  />
                  <img src={wes} alt="WES" className="h-12" />
                  <img src={visa} alt="Visa Applications" className="h-12" />
                </div>
              </div>
            </div>
          </div>

          {/* CTA Button */}
          <div className="mt-16">
            <button className="inline-flex items-center space-x-2 bg-primary text-black px-6 py-3 rounded-full hover:bg-primary/90 transition-colors">
              <span>Download app</span>
              <img src={playstore} alt="" className="h-5 w-5" />
              <img src={apple} alt="" className="h-5 w-5" />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Offers;
