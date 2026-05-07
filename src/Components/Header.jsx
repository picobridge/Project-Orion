import React from "react";
import { useState, useEffect } from "react";
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

function Header() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  // Close mobile menu on scroll
  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
      if (isOpen) setIsOpen(false);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [isOpen]);

  const navLinks = [
    { to: "about", label: "About Us" },
    { to: "corevalues", label: "Core Values" },
    { to: "gallery", label: "Our Gallery" },
    { to: "process", label: "Admission Process", duration: 1000 },
    { to: "footer", label: "Contact Us" },
    { to: "facilities", label: "Facilities" },
  ];

  const handleNavClick = () => setIsOpen(false);

  return (
    <div className="w-full sticky top-0 z-50" data-aos="fade-up">
      {/* Top Contact Bar */}
      <div className="bg-white border-b border-gray-200 hidden md:block">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="flex items-center justify-between py-2 gap-3">
            {/* Contact Information */}
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

            {/* Social Icons & Contact Button */}
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
        className={`bg-white border-b border-gray-100 transition-shadow duration-300 ${
          scrolled ? "shadow-md" : ""
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16">
            {/* Logo */}
            <div className="flex-shrink-0">
              <img src="logo.png" width={65} alt="Bright Rainbows Academy" className="h-auto" />
            </div>

            {/* Desktop Navigation */}
            <div className="hidden md:flex items-center gap-8">
              {navLinks.map((link) => (
                <Link
                  key={link.to}
                  to={link.to}
                  smooth={true}
                  duration={link.duration || 700}
                  className="text-gray-800 font-medium hover:text-[#FFBF00] transition-colors duration-200 cursor-pointer text-sm relative group"
                >
                  {link.label}
                  <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-[#FFBF00] transition-all duration-300 group-hover:w-full" />
                </Link>
              ))}
            </div>

            {/* Mobile Menu Button */}
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="md:hidden p-2 rounded-lg text-gray-700 hover:bg-gray-100 hover:text-[#FFBF00] transition-all duration-200"
              aria-label="Toggle menu"
            >
              {isOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>

          {/* Mobile Navigation */}
          <div
            className={`md:hidden overflow-hidden transition-all duration-300 ease-in-out ${
              isOpen ? "max-h-96 opacity-100 pb-4" : "max-h-0 opacity-0"
            }`}
          >
            <div className="flex flex-col gap-1 pt-2 border-t border-gray-100">
              {navLinks.map((link) => (
                <Link
                  key={link.to}
                  to={link.to}
                  smooth={true}
                  duration={link.duration || 700}
                  onClick={handleNavClick}
                  className="text-left text-gray-800 font-medium hover:text-[#FFBF00] hover:bg-gray-50 transition-all duration-200 py-3 px-3 rounded-lg cursor-pointer"
                >
                  {link.label}
                </Link>
              ))}
              
              {/* Mobile Contact Info */}
              <div className="mt-4 pt-4 border-t border-gray-100 flex flex-col gap-3 px-3">
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
                      className="text-gray-400 hover:text-[#FFBF00] transition-colors"
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
  );
}

export default Header;