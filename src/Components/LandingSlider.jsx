import { useState, useEffect } from "react";

const slides = [
  {
    id: 1,
    image: "boy-holding-white-paper-school.jpg",
    text: "Academic Excellence",
    subtitle: "Nurturing Young Minds",
    maintext:
      "We provide a caring environment where children learn, grow, and discover their unique potential through engaging lessons and fun activities.",
  },
  {
    id: 2,
    image: "img11.jpeg",
    text: "Future Leaders",
    subtitle: "Learning Today, Leading Tomorrow",
    maintext:
      "Our school inspires curiosity, creativity, and confidence — helping every pupil develop strong values and essential skills for tomorrow’s world.",
  },
  {
    id: 3,
    image: "img7.jpeg",
    text: "Character & Discipline",
    subtitle: "Excellence in Education",
    maintext:
      "We offer quality education rooted in discipline, knowledge, and care — shaping well-rounded pupils with bright futures.",
  },
  {
    id: 4,
    image: "img2.jpeg",
    text: "Joyful Learning",
    subtitle: "Where Learning Feels Like Fun",
    maintext:
      "We blend learning and play to make every day exciting. Our goal is to help children explore, imagine, and learn with joy and confidence.",
  },
];

export default function LandingSlider() {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isTransitioning, setIsTransitioning] = useState(false);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % slides.length);
    }, 5000);

    return () => clearInterval(interval);
  }, []);

  return (
    <div
      className="relative w-screen h-screen overflow-hidden"
      data-aos="fade-up"
      data-aos-delay="400"
    >
      {/* Image Container */}
      <div className="relative max-w-8xl m-auto h-full ">
        {slides.map((slide, index) => (
          <div
            key={slide.id}
            className={`absolute inset-0 transition-opacity duration-2000 ease-in-out ${
              index === currentSlide ? "opacity-100" : "opacity-0"
            }`}
          >
            <img
              src={slide.image || "/placeholder.svg"}
              alt={slide.text}
              className="w-full h-full object-cover"
            />
            {/* Dark Overlay */}
            <div className="absolute inset-0 bg-gradient-to-r from-black/60 via-black/20 to-transparent" />

            {/* Text Content */}
            <div
              className={`absolute inset-0 flex flex-col items-start justify-center pl-12 md:pl-20 lg:pl-32 transition-opacity duration-1000 ease-in-out ${
                index === currentSlide ? "opacity-100" : "opacity-0"
              }`}
            >
              <h1 className=" font-bold text-white">{slide.subtitle}</h1>
              <h3 className="text-[#FFBF00] text-5xl md:text-6xl lg:text-7xl font-bold mb-4 drop-shadow-lg max-w-2xl">
                {slide.text}
              </h3>
              <p className="text-xl md:text-2xl text-white/90 drop-shadow-md max-w-xl">
                {slide.maintext}
              </p>
            </div>
          </div>
        ))}
      </div>

      {/* Slide Indicators */}
      <div className="absolute bottom-6 left-12 md:left-20 lg:left-32 flex gap-3 z-10">
        {slides.map((_, index) => (
          <button
            key={index}
            onClick={() => setCurrentSlide(index)}
            className={`transition-all duration-300 rounded-full ${
              index === currentSlide
                ? "bg-white w-8 h-3"
                : "bg-white/50 w-3 h-3 hover:bg-white/75"
            }`}
            aria-label={`Go to slide ${index + 1}`}
          />
        ))}
      </div>

      {/* Navigation Arrows */}
      <button
        onClick={() =>
          setCurrentSlide((prev) => (prev - 1 + slides.length) % slides.length)
        }
        className="absolute left-4 top-1/2 -translate-y-1/2 z-10 bg-white/20 hover:bg-white/40 text-white p-3 rounded-full transition-colors duration-200"
        aria-label="Previous slide"
      >
        <svg
          className="w-6 h-6"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M15 19l-7-7 7-7"
          />
        </svg>
      </button>

      <button
        onClick={() => setCurrentSlide((prev) => (prev + 1) % slides.length)}
        className="absolute right-4 top-1/2 -translate-y-1/2 z-10 bg-white/20 hover:bg-white/40 text-white p-3 rounded-full transition-colors duration-200"
        aria-label="Next slide"
      >
        <svg
          className="w-6 h-6"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M9 5l7 7-7 7"
          />
        </svg>
      </button>
    </div>
  );
}
