import React from "react";
import Header from "./Header";
import LandingSlider from "./LandingSlider";
import ContentSection from "./ContentSection";
import SecondContent from "./SecondContent.jsx";

function LandingPage() {
  return (
    <>
      <Header />
      <LandingSlider />
      <ContentSection />
      <SecondContent />
    </>
  );
}

export default LandingPage;
