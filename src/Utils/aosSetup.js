// src/utils/aosSetup.js
import AOS from "aos";
import "aos/dist/aos.css";

export const initAOS = () => {
  AOS.init({
    duration: 1000, // animation duration in ms
    once: true, // animation occurs only once
    offset: 100, // trigger point from viewport
    easing: "ease-in-out",
  });
};
