import React from "react";

const Footer = () => {
  return (
    <footer className="bg-white">
      <div className="container mx-auto px-6 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-12">
          {/* Company Info */}
          <div className="space-y-6">
            <img src="/logo.svg" alt="Pay4Me App" className="h-8" />
            <div className="flex items-center space-x-2 text-gray-600">
              <img src="/email-icon.svg" alt="" className="h-4 w-4" />
              <span>support@pay4me.app</span>
            </div>
            <div className="flex space-x-4">
              <a href="#" className="text-gray-600 hover:text-primary">
                <img
                  src="/social/instagram.svg"
                  alt="Instagram"
                  className="h-6 w-6"
                />
              </a>
              <a href="#" className="text-gray-600 hover:text-primary">
                <img
                  src="/social/twitter.svg"
                  alt="Twitter"
                  className="h-6 w-6"
                />
              </a>
              <a href="#" className="text-gray-600 hover:text-primary">
                <img
                  src="/social/facebook.svg"
                  alt="Facebook"
                  className="h-6 w-6"
                />
              </a>
              <a href="#" className="text-gray-600 hover:text-primary">
                <img
                  src="/social/tiktok.svg"
                  alt="TikTok"
                  className="h-6 w-6"
                />
              </a>
              <a href="#" className="text-gray-600 hover:text-primary">
                <img
                  src="/social/youtube.svg"
                  alt="YouTube"
                  className="h-6 w-6"
                />
              </a>
            </div>
          </div>

          {/* Company Links */}
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

          {/* Resources Links */}
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

          {/* Legal Links */}
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
        </div>

        {/* App Store Buttons */}
        <div className="flex flex-col md:flex-row justify-between items-center border-t border-gray-200 pt-8">
          <p className="text-sm text-gray-600 mb-4 md:mb-0">
            © 2020 - 2024 Pay4Me, Inc.
          </p>
          <div className="flex space-x-4">
            <button className="flex items-center space-x-2 bg-black text-white px-4 py-2 rounded-lg hover:bg-black/90 transition-colors">
              <img src="/apple-icon.svg" alt="" className="h-5 w-5" />
              <div className="text-left">
                <div className="text-[10px]">Download on</div>
                <div className="text-xs font-medium">App Store</div>
              </div>
            </button>
            <button className="flex items-center space-x-2 bg-black text-white px-4 py-2 rounded-lg hover:bg-black/90 transition-colors">
              <img src="/playstore-icon.svg" alt="" className="h-5 w-5" />
              <div className="text-left">
                <div className="text-[10px]">Download on</div>
                <div className="text-xs font-medium">Play Store</div>
              </div>
            </button>
          </div>
        </div>

        {/* Legal Text */}
        <p className="text-xs text-gray-500 mt-8 max-w-4xl">
          Pay4Me is a financial technology company making it easier for
          international students and immigrants to pay their tuition and fees in
          minutes. We offer our products and services in partnership with
          licensed transmitters and banking partners in their respective
          jurisdictions. All trademarks, logos, and brand names are the property
          of their respective owners. All company, product, and service names
          used on this website are for identification purposes only. Use of
          these names, trademarks and brands do not imply endorsement.
        </p>
      </div>
    </footer>
  );
};

export default Footer;
