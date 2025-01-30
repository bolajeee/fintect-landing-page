import React from "react";

import logo from "../images/hero/logo.png";
import email from "../images/footer/email-icon.png";
import ig from "../images/footer/ig-icon.png";
import x from "../images/footer/x-icon.png";
import facebook from "../images/footer/facebook-icon.png";
import tictok from "../images/footer/tictok-icon.png";
import youtube from "../images/footer/youtube-icon.png";
import wApple from "../images/downloadApp/w-apple-icon.png";
import wPlaystore from "../images/downloadApp/w-playstore-icon.png";
import bgImg from "../images/features/features-bg.png";

const Footer = () => {
  return (
    <footer className="bg-white">
      <div className="container mx-auto px-6 py-12">
        {/* Main Grid */}
        <div className="grid grid-cols-1 md:grid-cols-7 gap-8 mb-12">
          {/* Company Info - 2 columns wide */}
          <div className="md:col-span-2 space-y-6">
            <img src={logo} alt="Pay4Me App" className="h-8" />
            <div className="flex items-center space-x-2 text-gray-600">
              <img src={email} alt="" className="h-4 w-4" />
              <span>support@pay4me.app</span>
            </div>
            <div className="flex space-x-4">
              <a href="#" className="text-gray-600 hover:text-primary">
                <img src={ig} alt="Instagram" className="h-6 w-6" />
              </a>
              <a href="#" className="text-gray-600 hover:text-primary">
                <img src={x} alt="Twitter" className="h-6 w-6" />
              </a>
              <a href="#" className="text-gray-600 hover:text-primary">
                <img src={facebook} alt="Facebook" className="h-6 w-6" />
              </a>
              <a href="#" className="text-gray-600 hover:text-primary">
                <img src={tictok} alt="TikTok" className="h-6 w-6" />
              </a>
              <a href="#" className="text-gray-600 hover:text-primary">
                <img src={youtube} alt="YouTube" className="h-6 w-6" />
              </a>
            </div>
          </div>

          {/* Links Sections - 1 column each */}
          <div>
            <h3 className="font-semibold mb-4">Company</h3>
            <ul className="space-y-3">
              <li>
                <a href="#" className="text-gray-600 hover:text-primary">
                  About
                </a>
              </li>
              <li>
                <a href="#" className="text-gray-600 hover:text-primary">
                  Blog
                </a>
              </li>
              <li>
                <a href="#" className="text-gray-600 hover:text-primary">
                  How it Works
                </a>
              </li>
              <li>
                <a href="#" className="text-gray-600 hover:text-primary">
                  Careers
                </a>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="font-semibold mb-4">Resources</h3>
            <ul className="space-y-3">
              <li>
                <a href="#" className="text-gray-600 hover:text-primary">
                  Android Reviews
                </a>
              </li>
              <li>
                <a href="#" className="text-gray-600 hover:text-primary">
                  iOS Reviews
                </a>
              </li>
              <li>
                <a href="#" className="text-gray-600 hover:text-primary">
                  Testimonials
                </a>
              </li>
              <li>
                <a href="#" className="text-gray-600 hover:text-primary">
                  FAQs
                </a>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="font-semibold mb-4">Legal</h3>
            <ul className="space-y-3">
              <li>
                <a href="#" className="text-gray-600 hover:text-primary">
                  Terms of Service
                </a>
              </li>
              <li>
                <a href="#" className="text-gray-600 hover:text-primary">
                  Privacy Policy
                </a>
              </li>
              <li>
                <a href="#" className="text-gray-600 hover:text-primary">
                  KYC/AML Policy
                </a>
              </li>
            </ul>
          </div>

          {/* Download Section - 2 columns wide */}
          <div className="md:col-span-2 space-y-4">
            <h3 className="font-semibold mb-4">Download App</h3>
            <div className="flex space-x-4">
              <button className="flex items-center space-x-2 bg-black text-white px-4 py-2 rounded-lg hover:bg-black/90 transition-colors">
                <img src={wApple} alt="" className="h-5 w-5" />
                <div className="text-left">
                  <div className="text-[10px]">Download on</div>
                  <div className="text-xs font-medium">App Store</div>
                </div>
              </button>
              <button className="flex items-center space-x-2 bg-black text-white px-4 py-2 rounded-lg hover:bg-black/90 transition-colors">
                <img src={wPlaystore} alt="" className="h-5 w-5" />
                <div className="text-left">
                  <div className="text-[10px]">Download on</div>
                  <div className="text-xs font-medium">Play Store</div>
                </div>
              </button>
            </div>
            <p className="text-sm text-gray-600">
              Depending on your mobile device, download our awesome native app
              to start enjoying all the benefits of pay4Me.
            </p>
          </div>
        </div>

        {/* Copyright and Legal Text */}
        <div className="flex flex-col items-center border-t border-b border-gray-200 pt-8 pb-8">
          <p className="text-sm text-gray-600 mb-4 md:mb-0 text-center">
            © 2020 - 2024 Pay4Me, Inc.
          </p>
        </div>

        <div className="flex flex-row">
          <img src={bgImg} alt="Pay4Me App" className="h-16" />
          <p className="text-xs text-gray-500 mt-8 ">
            Pay4Me is a financial technology company making it easier for
            international students and immigrants to pay their tuition and fees
            in minutes. We offer our products and services in partnership with
            licensed transmitters and banking partners in their respective
            jurisdictions. All trademarks, logos, and brand names are the
            property of their respective owners. All company, product, and
            service names used on this website are for identification purposes
            only. Use of these names, trademarks and brands do not imply
            endorsement.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
