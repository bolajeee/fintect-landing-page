import React from "react";
import Hero from "./components/Hero";
import Features from "./components/Features";
import Steps from "./components/Steps";
import Offers from "./components/Offers";
import VideoDemo from "./components/VideoDemo";
import Testimonials from "./components/Testimonials";
import FAQ from "./components/FAQ";
import DownloadApp from "./components/DownloadApp";
import Footer from "./components/Footer";

function App() {
  return (
    <div className="App">
      <Hero />
      <Features />
      <Steps />
      <Offers />
      <VideoDemo />
      <Testimonials />
      <FAQ />
      <DownloadApp />
      <Footer />
    </div>
  );
}

export default App;
