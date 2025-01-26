import React from "react";

const VideoDemo = () => {
  return (
    <div className="container mx-auto px-6 py-24">
      <div className="text-center">
        <h2 className="text-4xl font-bold text-gray-900 mb-16">
          Why We Built the Pay4Me App
        </h2>

        {/* Video Container */}
        <div className="relative max-w-4xl mx-auto aspect-video rounded-3xl overflow-hidden bg-gray-100">
          {/* Video Thumbnail with Play Button */}
          <div className="absolute inset-0 flex items-center justify-center">
            <img
              src="/app-preview.jpg"
              alt="App Preview"
              className="w-full h-full object-cover"
            />
            <button className="absolute flex items-center justify-center w-16 h-16 bg-white rounded-full shadow-lg hover:scale-110 transition-transform duration-300">
              <img src="/play-icon.svg" alt="Play" className="w-6 h-6" />
            </button>
          </div>
        </div>

        {/* YouTube Channel Link */}
        <div className="mt-8 flex items-center justify-center space-x-2">
          <img src="/youtube-icon.svg" alt="" className="w-6 h-6" />
          <span className="text-gray-600">Pay4Me Team</span>
        </div>
      </div>
    </div>
  );
};

export default VideoDemo;
