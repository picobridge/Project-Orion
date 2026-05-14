import React, { useState, useEffect, useRef } from "react";
import { Link } from "react-scroll";
import {
  Menu,
  X,
  Phone,
  Mail,
  Calendar,
  Facebook,
  Twitter,
  Linkedin,
  Instagram,
  Youtube,
} from "lucide-react";

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
      "Our school inspires curiosity, creativity, and confidence — helping every pupil develop strong values and essential skills for tomorrow's world.",
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

export default function HeaderWithSlider() {
  // Header states
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  
  // Slider states
  const [currentSlide, setCurrentSlide] = useState(0);
  
  // Track if we're in the slider section
  const [inSliderSection, setInSliderSection] = useState(true);
  const sliderRef = useRef(null);

  const navLinks = [
    { to: "about", label: "About Us" },
    { to: "corevalues", label: "Core Values" },
    { to: "gallery", label: "Our Gallery" },
    { to: "process", label: "Admission Process", duration: 1000 },
    { to: "footer", label: "Contact Us" },
    { to: "facilities", label: "Facilities" },
  ];

  // Handle scroll - close mobile menu and detect slider section
  useEffect(() => {
    const handleScroll = () => {
      const scrollY = window.scrollY;
      setScrolled(scrollY > 20);
      
      // Close mobile menu on scroll
      if (isOpen) setIsOpen(false);
      
      // Check if we're still in the slider section
      if (sliderRef.current) {
        const sliderBottom = sliderRef.current.getBoundingClientRect().bottom;
        setInSliderSection(sliderBottom > 80); // 80px threshold for navbar height
      }
    };

    window.addEventListener("scroll", handleScroll);
    // Initial check
    handleScroll();
    
    return () => window.removeEventListener("scroll", handleScroll);
  }, [isOpen]);

  // Auto-advance slides
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % slides.length);
    }, 5000);

    return () => clearInterval(interval);
  }, []);

  const handleNavClick = () => setIsOpen(false);

  // Determine navbar background
  const isTransparent = inSliderSection && !scrolled;

  return (
    <div className="relative">
      {/* Fixed Header */}
      <div 
        className="fixed top-0 left-0 right-0 z-50 transition-all duration-300"
        data-aos="fade-up"
      >
        {/* Top Contact Bar - Hidden when transparent */}
        <div className={`border-b border-gray-200/20 hidden md:block transition-all duration-300 ${
          isTransparent ? "opacity-0 pointer-events-none h-0 overflow-hidden" : "bg-white opacity-100"
        }`}>
          <div className="max-w-7xl mx-auto px-6 lg:px-8">
            <div className="flex items-center justify-between py-2 gap-3">
              <div className="flex items-center gap-6 text-xs">
                <a
                  href="tel:+2347070044177"
                  className="flex items-center gap-2 text-[#FFBF00] hover:text-[#e6ac00] transition-colors"
                >
                  <Phone size={16} className="text-[#FFBF00]" />
                  <span className="font-bold">070 700 441 77</span>
                </a>

                <a
                  href="mailto:brightrainbowsacademy@gmail.com"
                  className="flex items-center gap-2 text-[#FFBF00] hover:text-[#e6ac00] transition-colors"
                >
                  <Mail size={16} className="text-[#FFBF00]" />
                  <span className="font-bold">brightrainbowsacademy@gmail.com</span>
                </a>

                <div className="flex items-center gap-2 text-[#FFBF00]">
                  <Calendar size={16} className="text-[#FFBF00]" />
                  <span className="font-bold">Mon - Fri 8am - 6pm</span>
                </div>
              </div>

              <div className="flex items-center gap-4">
                <div className="flex items-center gap-3">
                  {[Facebook, Twitter, Youtube, Instagram, Linkedin].map((Icon, i) => (
                    <a
                      key={i}
                      href="#"
                      className="text-gray-500 hover:text-[#FFBF00] transition-colors duration-200"
                      aria-label={Icon.name}
                    >
                      <Icon size={18} />
                    </a>
                  ))}
                </div>

                <button className="bg-[#FFBF00] hover:bg-[#e6ac00] text-white px-4 py-2 rounded-md font-semibold transition-all duration-200 whitespace-nowrap text-xs uppercase tracking-wide">
                  <Link to="footer" smooth={true} duration={700}>
                    Contact Us
                  </Link>
                </button>
              </div>
            </div>
          </div>
        </div>

        {/* Navigation Bar */}
        <nav
          className={`transition-all duration-300 ${
            isTransparent 
              ? "bg-transparent border-b border-white/10" 
              : "bg-white border-b border-gray-100 shadow-md"
          }`}
        >
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex items-center justify-between h-16">
              {/* Logo */}
              <div className="flex-shrink-0">
                <img 
                  src={isTransparent ? "logo.png" : "logo.png"} 
                  width={65} 
                  alt="Bright Rainbows Academy" 
                  className="h-auto" 
                />
              </div>

              {/* Desktop Navigation */}
              <div className="hidden md:flex items-center gap-8">
                {navLinks.map((link) => (
                  <Link
                    key={link.to}
                    to={link.to}
                    smooth={true}
                    duration={link.duration || 700}
                    className={`font-medium transition-colors duration-200 cursor-pointer text-sm relative group ${
                      isTransparent 
                        ? "text-white hover:text-[#FFBF00]" 
                        : "text-gray-800 hover:text-[#FFBF00]"
                    }`}
                  >
                    {link.label}
                    <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-[#FFBF00] transition-all duration-300 group-hover:w-full" />
                  </Link>
                ))}
              </div>

              {/* Mobile Menu Button */}
              <button
                onClick={() => setIsOpen(!isOpen)}
                className={`md:hidden p-2 rounded-lg transition-all duration-200 ${
                  isTransparent
                    ? "text-white hover:bg-white/20 hover:text-[#FFBF00]"
                    : "text-gray-700 hover:bg-gray-100 hover:text-[#FFBF00]"
                }`}
                aria-label="Toggle menu"
              >
                {isOpen ? <X size={24} /> : <Menu size={24} />}
              </button>
            </div>

            {/* Mobile Navigation */}
            <div
              className={`md:hidden overflow-hidden transition-all duration-300 ease-in-out ${
                isOpen ? "max-h-[500px] opacity-100 pb-4" : "max-h-0 opacity-0"
              }`}
            >
              <div className={`flex flex-col gap-1 pt-2 border-t ${
                isTransparent ? "border-white/20" : "border-gray-100"
              }`}>
                {navLinks.map((link) => (
                  <Link
                    key={link.to}
                    to={link.to}
                    smooth={true}
                    duration={link.duration || 700}
                    onClick={handleNavClick}
                    className={`text-left font-medium transition-all duration-200 py-3 px-3 rounded-lg cursor-pointer ${
                      isTransparent
                        ? "text-white hover:text-[#FFBF00] hover:bg-white/10"
                        : "text-gray-800 hover:text-[#FFBF00] hover:bg-gray-50"
                    }`}
                  >
                    {link.label}
                  </Link>
                ))}
                
                {/* Mobile Contact Info */}
                <div className={`mt-4 pt-4 border-t flex flex-col gap-3 px-3 ${
                  isTransparent ? "border-white/20" : "border-gray-100"
                }`}>
                  <a
                    href="tel:+2347070044177"
                    className="flex items-center gap-2 text-[#FFBF00] text-sm font-bold"
                  >
                    <Phone size={16} />
                    070 700 441 77
                  </a>
                  <div className="flex items-center gap-3">
                    {[Facebook, Twitter, Youtube, Instagram, Linkedin].map((Icon, i) => (
                      <a
                        key={i}
                        href="#"
                        className={`transition-colors ${
                          isTransparent 
                            ? "text-white/70 hover:text-[#FFBF00]" 
                            : "text-gray-400 hover:text-[#FFBF00]"
                        }`}
                        aria-label={Icon.name}
                      >
                        <Icon size={20} />
                      </a>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </nav>
      </div>

      {/* Landing Slider Section */}
      <div 
        ref={sliderRef}
        className="relative w-screen h-screen overflow-hidden"
        data-aos="fade-up"
        data-aos-delay="400"
      >
        <div className="relative max-w-8xl m-auto h-full">
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
                <h1 className="font-bold text-white">{slide.subtitle}</h1>
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
          <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
          </svg>
        </button>

        <button
          onClick={() => setCurrentSlide((prev) => (prev + 1) % slides.length)}
          className="absolute right-4 top-1/2 -translate-y-1/2 z-10 bg-white/20 hover:bg-white/40 text-white p-3 rounded-full transition-colors duration-200"
          aria-label="Next slide"
        >
          <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
          </svg>
        </button>
      </div>
    </div>
  );
}