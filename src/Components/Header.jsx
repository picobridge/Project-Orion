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
  return (
    <div className="w-full " data-aos="fade-up">
      {/* Top Contact Bar */}
      <div className="bg-white border-b border-gray-200">
        <div className="max-w-7xl mx-auto px-4 md:block px-6 lg:px-8 hidden">
          <div className="flex flex-col md:flex-row md:items-center md:justify-between py-0 gap-3 md:gap-0">
            {/* Contact Information */}
            <div className="flex flex-col sm:flex-row sm:items-center gap-4 sm:gap-6 text-xs md:text-xs">
              {/* Phone 1 */}
              <a
                href="tel:+234 7070044177"
                className="flex items-center gap-2 text-[#FFBF00] transition"
              >
                <Phone size={16} className="text-[#FFBF00] " />
                <span className="font-bold">070 700 441 77</span>
              </a>

              {/* Phone 2 */}

              {/* Email */}
              <a
                href="mailto:brightrainbowsacademy@gmail.com"
                className="flex items-center gap-2 text-[#FFBF00] transition"
              >
                <Mail size={16} className="text-[#FFBF00]" />
                <span className="font-bold">
                  brightrainbowsacademy@gmail.com
                </span>
              </a>

              {/* Hours */}
              <div className="flex items-center gap-2 text-[#FFBF00]">
                <Calendar size={16} className="text-[#FFBF00]" />
                <span className="font-bold">Mon - Fri 8am - 6pm</span>
              </div>
            </div>

            {/* Social Icons & Contact Button */}
            <div className="flex items-center gap-4">
              {/* Social Media Icons */}
              <div className="flex items-center gap-3">
                <a
                  href="#"
                  className="text-gray-600 hover:text-[#FFBF00] transition"
                  aria-label="Facebook"
                >
                  <Facebook size={18} />
                </a>
                <a
                  href="#"
                  className="text-gray-600 hover:text-[#FFBF00]  transition"
                  aria-label="Twitter"
                >
                  <Twitter size={18} />
                </a>
                <a
                  href="#"
                  className="text-gray-600 hover:text-[#FFBF00]  transition"
                  aria-label="YouTube"
                >
                  <Youtube size={18} />
                </a>
                <a
                  href="#"
                  className="text-gray-600 hover:text-[#FFBF00]  transition"
                  aria-label="Instagram"
                >
                  <Instagram size={18} />
                </a>
                <a
                  href="#"
                  className="text-gray-600 hover:text-[#FFBF00]  transition"
                  aria-label="LinkedIn"
                >
                  <Linkedin size={18} />
                </a>
              </div>

              {/* Contact Button */}
              <button className="bg-[#FFBF00]  hover:bg-[#FFBF00] cursor-pointer text-white px-4 py-3 font-semibold transition whitespace-nowrap">
                <Link to="footer" smooth={true} duration={700}>
                  <Link to="footer" smooth={true} duration={1000}>
                    {" "}
                    CONTACT US{" "}
                  </Link>
                </Link>
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Navigation Bar */}
      <nav className="bg-white border-b border-gray-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between text-sm py-1">
            {/* Logo */}
            <div className="flex-shrink-0">
              <img src="logo.png" width={70} />
            </div>

            {/* Desktop Navigation */}
            <div className="hidden md:flex items-center gap-8">
              <div className="group relative">
                <button className="text-gray-800 cursor-pointer font-medium hover:text-[#FFBF00] transition flex items-center gap-1">
                  <Link to="about" smooth={true} duration={700}>
                    {" "}
                    About Us
                  </Link>
                </button>
              </div>

              <div className="group relative">
                <button className="text-gray-800 font-medium  cursor-pointer hover:text-[#FFBF00] transition flex items-center gap-1">
                  <Link to="corevalues" smooth={true} duration={700}>
                    {" "}
                    Core Values{" "}
                  </Link>
                </button>
              </div>

              <div className="group relative">
                <button className="text-gray-800 cursor-pointer font-medium hover:text-[#FFBF00] transition flex items-center gap-1">
                  <Link to="gallery" smooth={true} duration={700}>
                    {" "}
                    Our Gallery
                  </Link>
                </button>
              </div>

              <a
                href="#"
                className="text-gray-800 font-medium hover:text-[#FFBF00] transition"
              >
                <Link to="process" smooth={true} duration={1000}>
                  {" "}
                  Admission Process{" "}
                </Link>
              </a>

              <a
                href="#"
                className="text-gray-800 font-medium hover:text-[#FFBF00] transition"
              >
                <Link to="footer" smooth={true} duration={700}>
                  Contact Us
                </Link>
              </a>
            </div>

            {/* Mobile Menu Button */}
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="md:hidden p-2 rounded-md text-gray-700 hover:text-amber-900"
              aria-label="Toggle menu"
            >
              {isOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>

          {/* Mobile Navigation */}
          {isOpen && (
            <div className="md:hidden pb-4 border-t border-gray-200">
              <div className="flex flex-col gap-3 pt-4">
                <button className="text-left text-gray-800 font-medium hover:text-amber-900 transition py-2">
                  About Us
                </button>
                <button className="text-left text-gray-800 font-medium hover:text-amber-900 transition py-2">
                  Academics
                </button>
                <button className="text-left text-gray-800 font-medium hover:text-amber-900 transition py-2">
                  Media Hub
                </button>
                <button className="text-left text-gray-800 font-medium hover:text-amber-900 transition py-2">
                  Facility
                </button>
                <a
                  href="#"
                  className="text-gray-800 font-medium hover:text-amber-900 transition py-2"
                >
                  School Policies
                </a>
                <a
                  href="#"
                  className="text-gray-800 font-medium hover:text-amber-900 transition py-2"
                >
                  Contact Us
                </a>
              </div>
            </div>
          )}
        </div>
      </nav>
    </div>
  );
}

export default Header;
