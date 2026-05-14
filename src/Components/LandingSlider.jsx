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
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [currentSlide, setCurrentSlide] = useState(0);
  const [inSliderSection, setInSliderSection] = useState(true);
  const sliderRef = useRef(null);
  const mobileMenuRef = useRef(null);

  const navLinks = [
    { to: "about", label: "About Us" },
    { to: "corevalues", label: "Core Values" },
    { to: "gallery", label: "Our Gallery" },
    { to: "process", label: "Admission Process", duration: 1000 },
    { to: "footer", label: "Contact Us" },
    { to: "facilities", label: "Facilities" },
  ];

  // Handle scroll
  useEffect(() => {
    const handleScroll = () => {
      const scrollY = window.scrollY;
      setScrolled(scrollY > 20);
      
      if (sliderRef.current) {
        const sliderBottom = sliderRef.current.getBoundingClientRect().bottom;
        setInSliderSection(sliderBottom > 80);
      }
    };

    window.addEventListener("scroll", handleScroll);
    handleScroll();
    
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Close mobile menu on resize to desktop
  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth >= 768) {
        setIsOpen(false);
      }
    };

    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  // Click outside to close mobile menu
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (mobileMenuRef.current && !mobileMenuRef.current.contains(event.target)) {
        setIsOpen(false);
      }
    };

    if (isOpen) {
      document.addEventListener("mousedown", handleClickOutside);
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "auto";
    }

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
      document.body.style.overflow = "auto";
    };
  }, [isOpen]);

  // Auto-advance slides
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % slides.length);
    }, 5000);

    return () => clearInterval(interval);
  }, []);

  const handleNavClick = () => setIsOpen(false);
  const isTransparent = inSliderSection && !scrolled;

  return (
    <div className="relative overflow-x-hidden">
      {/* Fixed Header */}
      <header 
        className="fixed top-0 left-0 right-0 z-50 transition-all duration-300"
        data-aos="fade-up"
      >
        {/* Top Contact Bar */}
        <div className={`border-b border-gray-200/20 hidden md:block transition-all duration-300 ${
          isTransparent ? "opacity-0 pointer-events-none h-0 overflow-hidden" : "bg-white opacity-100"
        }`}>
          <div className="max-w-[80rem] mx-auto px-[1rem] sm:px-[1.5rem] lg:px-[2rem]">
            <div className="flex items-center justify-between py-[0.5rem] gap-[0.75rem]">
              <div className="flex items-center gap-[1.5rem] text-[0.75rem]">
                <a href="tel:+2347070044177" className="flex items-center gap-[0.5rem] text-[#FFBF00] hover:text-[#e6ac00] transition-colors">
                  <Phone size={16} className="text-[#FFBF00]" />
                  <span className="font-bold">070 700 441 77</span>
                </a>
                <a href="mailto:brightrainbowsacademy@gmail.com" className="flex items-center gap-[0.5rem] text-[#FFBF00] hover:text-[#e6ac00] transition-colors">
                  <Mail size={16} className="text-[#FFBF00]" />
                  <span className="font-bold">brightrainbowsacademy@gmail.com</span>
                </a>
                <div className="flex items-center gap-[0.5rem] text-[#FFBF00]">
                  <Calendar size={16} className="text-[#FFBF00]" />
                  <span className="font-bold">Mon - Fri 8am - 6pm</span>
                </div>
              </div>
              <div className="flex items-center gap-[1rem]">
                <div className="flex items-center gap-[0.75rem]">
                  {[Facebook, Twitter, Youtube, Instagram, Linkedin].map((Icon, i) => (
                    <a key={i} href="#" className="text-gray-500 hover:text-[#FFBF00] transition-colors duration-200" aria-label={Icon.name}>
                      <Icon size={18} />
                    </a>
                  ))}
                </div>
                <button className="bg-[#FFBF00] hover:bg-[#e6ac00] text-white px-[1rem] py-[0.5rem] rounded-[0.375rem] font-semibold transition-all duration-200 whitespace-nowrap text-[0.6875rem] uppercase tracking-wide">
                  <Link to="footer" smooth={true} duration={700}>Contact Us</Link>
                </button>
              </div>
            </div>
          </div>
        </div>

        {/* Navigation Bar */}
        <nav className={`transition-all duration-300 ${
          isTransparent ? "bg-transparent border-b border-white/10" : "bg-white border-b border-gray-100 shadow-md"
        }`}>
          <div className="max-w-[80rem] mx-auto px-[1rem] sm:px-[1.5rem] lg:px-[2rem]">
            <div className="flex items-center justify-between h-[4rem]">
              {/* Logo */}
              <div className="flex-shrink-0">
                <img src="logo.png" width={65} alt="Bright Rainbows Academy" className="h-auto" />
              </div>

              {/* Desktop Navigation */}
              <div className="hidden md:flex items-center gap-[2rem]">
                {navLinks.map((link) => (
                  <Link
                    key={link.to}
                    to={link.to}
                    smooth={true}
                    duration={link.duration || 700}
                    className={`font-medium transition-colors duration-200 cursor-pointer text-[0.875rem] relative group ${
                      isTransparent ? "text-white hover:text-[#FFBF00]" : "text-gray-800 hover:text-[#FFBF00]"
                    }`}
                  >
                    {link.label}
                    <span className="absolute -bottom-[0.25rem] left-0 w-0 h-[0.125rem] bg-[#FFBF00] transition-all duration-300 group-hover:w-full" />
                  </Link>
                ))}
              </div>

              {/* Mobile Menu Button */}
              <button
                onClick={() => setIsOpen(!isOpen)}
                className={`md:hidden p-[0.5rem] rounded-lg transition-all duration-200 ${
                  isTransparent ? "text-white hover:bg-white/20 hover:text-[#FFBF00]" : "text-gray-700 hover:bg-gray-100 hover:text-[#FFBF00]"
                }`}
                aria-label="Toggle menu"
              >
                {isOpen ? <X size={24} /> : <Menu size={24} />}
              </button>
            </div>
          </div>
        </nav>
      </header>

      {/* Mobile Menu Overlay */}
      {isOpen && (
        <div 
          className="fixed inset-0 bg-black/50 z-[60] md:hidden backdrop-blur-sm"
          onClick={() => setIsOpen(false)}
        />
      )}

      {/* Mobile Navigation Drawer - SEPARATE from header */}
      <div
        ref={mobileMenuRef}
        className={`fixed top-0 right-0 h-full w-[80%] max-w-[20rem] z-[70] md:hidden transition-transform duration-300 ease-in-out ${
          isOpen ? "translate-x-0" : "translate-x-full"
        }`}
      >
        <div className="h-full bg-white shadow-2xl flex flex-col">
          {/* Drawer Header */}
          <div className="flex items-center justify-between p-[1rem] border-b border-gray-100">
            <span className="font-bold text-[1.125rem] text-slate-900">Menu</span>
            <button
              onClick={() => setIsOpen(false)}
              className="p-[0.5rem] rounded-lg text-gray-500 hover:bg-gray-100 hover:text-[#FFBF00] transition-colors"
              aria-label="Close menu"
            >
              <X size={24} />
            </button>
          </div>

          {/* Drawer Links */}
          <div className="flex-1 overflow-y-auto py-[0.5rem]">
            {navLinks.map((link) => (
              <Link
                key={link.to}
                to={link.to}
                smooth={true}
                duration={link.duration || 700}
                onClick={handleNavClick}
                className="block text-left font-medium transition-all duration-200 py-[0.875rem] px-[1.25rem] text-gray-800 hover:text-[#FFBF00] hover:bg-[#FFBF00]/5 border-b border-gray-50"
              >
                {link.label}
              </Link>
            ))}
          </div>

          {/* Drawer Footer */}
          <div className="p-[1.25rem] border-t border-gray-100 bg-gray-50">
            <a href="tel:+2347070044177" className="flex items-center gap-[0.5rem] text-[#FFBF00] text-[0.875rem] font-bold mb-[0.75rem]">
              <Phone size={18} />
              070 700 441 77
            </a>
            <a href="mailto:brightrainbowsacademy@gmail.com" className="flex items-center gap-[0.5rem] text-slate-500 text-[0.8125rem] mb-[1rem]">
              <Mail size={16} />
              brightrainbowsacademy@gmail.com
            </a>
            <div className="flex items-center gap-[1rem]">
              {[Facebook, Twitter, Youtube, Instagram, Linkedin].map((Icon, i) => (
                <a key={i} href="#" className="text-gray-400 hover:text-[#FFBF00] transition-colors" aria-label={Icon.name}>
                  <Icon size={20} />
                </a>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Landing Slider Section */}
      <div 
        ref={sliderRef}
        className="relative w-full h-[100dvh] overflow-hidden"
        data-aos="fade-up"
        data-aos-delay="400"
      >
        <div className="relative h-full">
          {slides.map((slide, index) => (
            <div
              key={slide.id}
              className={`absolute inset-0 transition-opacity duration-[2000ms] ease-in-out ${
                index === currentSlide ? "opacity-100 z-10" : "opacity-0 z-0"
              }`}
            >
              <img src={slide.image || "/placeholder.svg"} alt={slide.text} className="w-full h-full object-cover" />
              <div className="absolute inset-0 bg-gradient-to-r from-black/70 via-black/40 to-transparent" />
              <div className={`absolute inset-0 flex flex-col items-start justify-center px-[1.5rem] sm:px-[2.5rem] md:px-[3rem] lg:px-[5rem] xl:px-[8rem] transition-opacity duration-1000 ease-in-out ${
                index === currentSlide ? "opacity-100" : "opacity-0"
              }`}>
                <p className="text-[#FFBF00] text-[0.875rem] sm:text-[1rem] font-semibold tracking-[0.15em] uppercase mb-[0.75rem]">
                  {slide.subtitle}
                </p>
                <h2 className="text-white text-[2.25rem] sm:text-[3rem] md:text-[4rem] lg:text-[5rem] font-bold mb-[1rem] leading-[1.1] drop-shadow-lg max-w-[40rem]">
                  {slide.text}
                </h2>
                <p className="text-[1rem] sm:text-[1.125rem] md:text-[1.25rem] text-white/90 leading-[1.6] drop-shadow-md max-w-[32rem]">
                  {slide.maintext}
                </p>
                <div className="mt-[2rem] flex flex-wrap gap-[1rem]">
                  <button className="px-[1.5rem] py-[0.75rem] bg-[#FFBF00] text-white font-semibold rounded-full hover:bg-[#e6ac00] transition-colors duration-300 shadow-lg">
                    <Link to="about" smooth={true} duration={700}>Learn More</Link>
                  </button>
                  <button className="px-[1.5rem] py-[0.75rem] bg-white/10 backdrop-blur-sm text-white font-semibold rounded-full hover:bg-white/20 transition-colors duration-300 border border-white/30">
                    <Link to="footer" smooth={true} duration={700}>Contact Us</Link>
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Slide Indicators */}
        <div className="absolute bottom-[2rem] left-[1.5rem] sm:left-[2.5rem] md:left-[3rem] lg:left-[5rem] xl:left-[8rem] flex gap-[0.5rem] z-20">
          {slides.map((_, index) => (
            <button
              key={index}
              onClick={() => setCurrentSlide(index)}
              className={`transition-all duration-300 rounded-full ${
                index === currentSlide ? "bg-[#FFBF00] w-[2rem] h-[0.5rem]" : "bg-white/50 w-[0.5rem] h-[0.5rem] hover:bg-white/75"
              }`}
              aria-label={`Go to slide ${index + 1}`}
            />
          ))}
        </div>

        {/* Navigation Arrows - Hidden on mobile */}
        <button
          onClick={() => setCurrentSlide((prev) => (prev - 1 + slides.length) % slides.length)}
          className="hidden sm:flex absolute left-[1rem] top-1/2 -translate-y-1/2 z-20 bg-white/20 hover:bg-white/40 text-white p-[0.75rem] rounded-full transition-colors duration-200 backdrop-blur-sm"
          aria-label="Previous slide"
        >
          <svg className="w-[1.5rem] h-[1.5rem]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
          </svg>
        </button>
        <button
          onClick={() => setCurrentSlide((prev) => (prev + 1) % slides.length)}
          className="hidden sm:flex absolute right-[1rem] top-1/2 -translate-y-1/2 z-20 bg-white/20 hover:bg-white/40 text-white p-[0.75rem] rounded-full transition-colors duration-200 backdrop-blur-sm"
          aria-label="Next slide"
        >
          <svg className="w-[1.5rem] h-[1.5rem]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
          </svg>
        </button>
      </div>
    </div>
  );
}