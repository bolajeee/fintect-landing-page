import React from "react";
import Hero from "./components/Hero";
import Features from "./components/Features";
import Steps from "./components/Steps";
import Offers from "./components/Offers";

import Testimonials from "./components/Testimonials";
import FAQ from "./components/FAQ";
import DownloadApp from "./components/DownloadApp";
import Footer from "./components/Footer";
import BlogPage from "./components/BlogPage";

function App() {
  return (
    <div className="App">
      <Hero />
      <Features />
      <Steps />
      <Offers />

      <Testimonials />
      <FAQ />
      <BlogPage />
      <DownloadApp />
      <Footer />
    </div>
  );
}

export default App;
