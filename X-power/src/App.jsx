import { useState } from "react";
import Header from "../src/Header/header.jsx";
import HeroSection from "../src/HeroSection/heroSection.jsx";
import Seperator from "../src/Seperator/seperator.jsx";
import Service from "../src/Service+/service.jsx";
import Products from "../src/Products/products.jsx";
import TrainingPlan from "../src/TrainingPlan/trainingPlan.jsx";
import VideoClips from "../src/VideoClips/videoClips.jsx";
import Blogs from "../src/Blogs/blogs.jsx";
import Footer from "../src/Footer/footer.jsx";

function App() {
  return (
    <>
      <Header />
      <HeroSection />
      <Seperator />
      <Service />
      <Products />
      <TrainingPlan />
      <VideoClips />
      <Blogs />
      <Footer />
    </>
  );
}

export default App;
