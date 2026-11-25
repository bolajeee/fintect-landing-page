import React from "react";
import logo from "../images/hero/logo.png";
import emailIcon from "../images/footer/email-icon.png";
import igIcon from "../images/footer/ig-icon.png";
import xIcon from "../images/footer/x-icon.png";
import facebookIcon from "../images/footer/facebook-icon.png";
import tictokIcon from "../images/footer/tictok-icon.png";
import youtubeIcon from "../images/footer/youtube-icon.png";
import wAppleIcon from "../images/downloadApp/w-apple-icon.png";
import wPlaystoreIcon from "../images/downloadApp/w-playstore-icon.png";
import featuresBg from "../images/features/features-bg.png";

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
              <img
                src={emailIcon}
                alt=""
                className="h-4 w-4"
              />
              <span>support@pay4me.app</span>
            </div>
            <div className="flex space-x-4">
              <a href="https://instagram.com/pay4me" className="text-gray-600 hover:text-primary">
                <img
                  src={igIcon}
                  alt="Instagram"
                  className="h-6 w-6"
                />
              </a>
              <a href="https://twitter.com/pay4me" className="text-gray-600 hover:text-primary">
                <img
                  src={xIcon}
                  alt="Twitter"
                  className="h-6 w-6"
                />
              </a>
              <a href="https://facebook.com/pay4me" className="text-gray-600 hover:text-primary">
                <img
                  src={facebookIcon}
                  alt="Facebook"
                  className="h-6 w-6"
                />
              </a>
              <a href="https://tiktok.com/@pay4me" className="text-gray-600 hover:text-primary">
                <img
                  src={tictokIcon}
                  alt="TikTok"
                  className="h-6 w-6"
                />
              </a>
              <a href="https://youtube.com/pay4me" className="text-gray-600 hover:text-primary">
                <img
                  src={youtubeIcon}
                  alt="YouTube"
                  className="h-6 w-6"
                />
              </a>
            </div>
          </div>

          {/* Links Sections - 1 column each */}
          <div>
            <h3 className="font-semibold mb-4">Company</h3>
            <ul className="space-y-3">
              <li>
                <a href="/about" className="text-gray-600 hover:text-primary">
                  About Us
                </a>
              </li>
              <li>
                <a href="/careers" className="text-gray-600 hover:text-primary">
                  Careers
                </a>
              </li>
              <li>
                <a href="/press" className="text-gray-600 hover:text-primary">
                  Press
                </a>
              </li>
              <li>
                <a href="/news" className="text-gray-600 hover:text-primary">
                  News
                </a>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="font-semibold mb-4">Resources</h3>
            <ul className="space-y-3">
              <li>
                <a href="/blog" className="text-gray-600 hover:text-primary">
                  Blog
                </a>
              </li>
              <li>
                <a href="/newsletter" className="text-gray-600 hover:text-primary">
                  Newsletter
                </a>
              </li>
              <li>
                <a href="/events" className="text-gray-600 hover:text-primary">
                  Events
                </a>
              </li>
              <li>
                <a href="/help" className="text-gray-600 hover:text-primary">
                  Help Center
                </a>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="font-semibold mb-4">Legal</h3>
            <ul className="space-y-3">
              <li>
                <a href="/terms" className="text-gray-600 hover:text-primary">
                  Terms
                </a>
              </li>
              <li>
                <a href="/privacy" className="text-gray-600 hover:text-primary">
                  Privacy
                </a>
              </li>
              <li>
                <a href="/cookies" className="text-gray-600 hover:text-primary">
                  Cookies
                </a>
              </li>
              <li>
                <a href="/licenses" className="text-gray-600 hover:text-primary">
                  Licenses
                </a>
              </li>
            </ul>
          </div>

          {/* Download Section - 2 columns wide */}
          <div className="md:col-span-2 space-y-4">
            <h3 className="font-semibold mb-4">Download App</h3>
            <div className="flex space-x-4">
              <button className="flex items-center space-x-2 bg-black text-white px-4 py-2 rounded-lg hover:bg-black/90 transition-colors">
                <img
                  src={wAppleIcon}
                  alt=""
                  className="h-5 w-5"
                />
                <div className="text-left">
                  <div className="text-[10px]">Download on</div>
                  <div className="text-xs font-medium">App Store</div>
                </div>
              </button>
              <button className="flex items-center space-x-2 bg-black text-white px-4 py-2 rounded-lg hover:bg-black/90 transition-colors">
                <img
                  src={wPlaystoreIcon}
                  alt=""
                  className="h-5 w-5"
                />
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
            2020 - 2024 Pay4Me, Inc.
          </p>
        </div>

        <div className="flex flex-row">
          <img
            src={featuresBg}
            alt="Pay4Me App"
            className="h-16"
          />
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
