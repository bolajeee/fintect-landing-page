import React from "react";

const VideoDemo = () => {
  return (
    <div className="w-full mx-auto pt-24">
      <div className="text-center relative">
        <h2 className="text-4xl font-bold text-gray-900 mb-16">
          Why We Built the Pay4Me App
        </h2>

        {/* Video Container */}
        <div className="relative -mx-6 sm:-mx-12 lg:-mx-24 aspect-video rounded-3xl overflow-hidden bg-gray-100 z-10">
          {/* Video Thumbnail with Play Button */}
          <div className="absolute inset-0 flex items-center justify-center">
            <img
              src="/images/video/video-demo.png"
              alt="App Preview"
              className="w-full h-full object-cover"
            />
            <button className="absolute flex items-center justify-center w-16 h-16 bg-white rounded-full shadow-lg hover:scale-110 transition-transform duration-300">
              <img
                src="/images/video/youtube-play.png"
                alt="Play"
                className="w-6 h-6"
              />
            </button>
          </div>
          {/* Background Image */}
          <div className="absolute right-0 top-[59%] -z-10">
            <img
              src="/images/features/features-bg.png"
              alt=""
              className="w-[250px] object-cover ml-auto"
            />
          </div>
        </div>

        {/* YouTube Channel Link */}
        {/* <div className="mt-8 flex items-center justify-center space-x-2">
          <img src={youtubePlay}
            alt="" className="w-6 h-6" />
          <span className="text-gray-600">Pay4Me Team</span>
        </div> */}
      </div>
    </div>
  );
};

export default VideoDemo;
