import bgImg from '../images/features/features-bg.png';
import wQrCode from '../images/downloadApp/w-qr-code.png';
import wAppleIcon from '../images/downloadApp/w-apple-icon.png';
import wPlaystoreIcon from '../images/downloadApp/w-playstore-icon.png';

const DownloadApp = () => {
  return (
    <div className="bg-light-bg rounded-3xl mx-6 my-24 relative overflow-hidden">
      {/* Background Image */}
      <div className="absolute opacity-30 w-[350px] right-0">
        <img src={bgImg} alt="" className="w-full h-full object-cover" />
      </div>

      {/* Content */}
      <div className="container mx-auto px-12 py-16 flex flex-col md:flex-row items-center justify-between relative z-10">
        {/* Left Content */}
        <div className="max-w-xl">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">
            Download the Pay4Me
            <br />
            App Today!
          </h2>
          <p className="text-gray-600 mb-8">
            Our custom QR code will take you to your app store
            <br />
            to download our awesome native apps
          </p>
          <div className="flex space-x-4">
            <button className="flex items-center space-x-2 bg-black text-white px-6 py-3 rounded-full hover:bg-black/90 transition-colors">
              <img
                src={wAppleIcon}
                alt=""
                className="h-5 w-5"
              />
              <div className="text-left">
                <div className="text-xs">Download on</div>
                <div className="text-sm font-medium">App Store</div>
              </div>
            </button>
            <button className="flex items-center space-x-2 bg-black text-white px-6 py-3 rounded-full hover:bg-black/90 transition-colors">
              <img
                src={wPlaystoreIcon}
                alt=""
                className="h-5 w-5"
              />
              <div className="text-left">
                <div className="text-xs">Download on</div>
                <div className="text-sm font-medium">Play Store</div>
              </div>
            </button>
          </div>
        </div>

        {/* Right Content - QR Code */}
        <div className="mt-8 md:mt-0">
          <div className="bg-white p-4 rounded-2xl shadow-lg">
            <img
              src={wQrCode}
              alt="QR Code"
              className="w-48 h-48"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default DownloadApp;
