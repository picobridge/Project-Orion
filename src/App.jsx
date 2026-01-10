import { useState, useEffect } from "react";
import "./App.css";
import "../src/assets/Fonts/stylesheet.css";
import { initAOS } from "./Utils/aosSetup";
import React from "react";
import Header from "./Components/Header";
import LandingSlider from "./Components/LandingSlider";
import ContentSection from "./Components/ContentSection";
import Newcontent from "./Components/Newcontent.jsx";
import CoreValues from "./Components/Corevalues.jsx";
import AboutSection from "./Components/AboutSection.jsx";
import Process from "./Components/Process.jsx";
import GallerySection from "./Components/GallerySection.jsx";
import Footer from "./Components/Footer.jsx";
import { Element } from "react-scroll";
function App() {
  useEffect(() => {
    initAOS();
  }, []);
  return (
    <>
      <Header />

      <Element name="home">
        <LandingSlider />
      </Element>

      <Element name="newcontent">
        <Newcontent />
      </Element>

      <Element name="about">
        <AboutSection />
      </Element>

      <Element name="corevalues">
        <CoreValues />
      </Element>

      <Element name="process">
        <Process />
      </Element>

      <Element name="gallery">
        <GallerySection />
      </Element>

      <Element name="footer">
        <Footer />
      </Element>
    </>
  );
}

export default App;
