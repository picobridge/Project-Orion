import React from "react";
import { useState } from "react";
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
    <div className="w-full">
      {/* Top Contact Bar */}
      <div className="bg-white border-b border-gray-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row md:items-center md:justify-between py-0 gap-3 md:gap-0">
            {/* Contact Information */}
            <div className="flex flex-col sm:flex-row sm:items-center gap-4 sm:gap-6 text-xs md:text-xs">
              {/* Phone 1 */}
              <a
                href="tel:+27073950511"
                className="flex items-center gap-2 text-amber-900 hover:text-amber-700 transition"
              >
                <Phone size={16} className="text-amber-900" />
                <span>070 7395 0511</span>
              </a>

              {/* Phone 2 */}
              <a
                href="tel:+27809808088"
                className="flex items-center gap-2 text-amber-900 hover:text-amber-700 transition"
              >
                <Phone size={16} className="text-amber-900" />
                <span>0809 808 6088</span>
              </a>

              {/* Email */}
              <a
                href="mailto:info@tfsikoyi.com"
                className="flex items-center gap-2 text-amber-900 hover:text-amber-700 transition"
              >
                <Mail size={16} className="text-amber-900" />
                <span>info@tfsikoyi.com</span>
              </a>

              {/* Hours */}
              <div className="flex items-center gap-2 text-gray-700">
                <Calendar size={16} className="text-amber-900" />
                <span>Mon - Fri 8am - 6pm</span>
              </div>
            </div>

            {/* Social Icons & Contact Button */}
            <div className="flex items-center gap-4">
              {/* Social Media Icons */}
              <div className="flex items-center gap-3">
                <a
                  href="#"
                  className="text-gray-600 hover:text-amber-900 transition"
                  aria-label="Facebook"
                >
                  <Facebook size={18} />
                </a>
                <a
                  href="#"
                  className="text-gray-600 hover:text-amber-900 transition"
                  aria-label="Twitter"
                >
                  <Twitter size={18} />
                </a>
                <a
                  href="#"
                  className="text-gray-600 hover:text-amber-900 transition"
                  aria-label="YouTube"
                >
                  <Youtube size={18} />
                </a>
                <a
                  href="#"
                  className="text-gray-600 hover:text-amber-900 transition"
                  aria-label="Instagram"
                >
                  <Instagram size={18} />
                </a>
                <a
                  href="#"
                  className="text-gray-600 hover:text-amber-900 transition"
                  aria-label="LinkedIn"
                >
                  <Linkedin size={18} />
                </a>
              </div>

              {/* Contact Button */}
              <button className="bg-amber-900 hover:bg-amber-800 text-white px-4 py-3 font-semibold transition whitespace-nowrap">
                CONTACT US
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Navigation Bar */}
      <nav className="bg-white border-b border-gray-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between text-sm py-2">
            {/* Logo */}
            <div className="flex-shrink-0">
              <div className="w-10 h-10 bg-gradient-to-br from-yellow-300 to-yellow-400 rounded-full flex items-center justify-center border-2 border-amber-900 shadow-sm">
                <span className="text-2xl font-bold text-amber-900">TI</span>
              </div>
            </div>

            {/* Desktop Navigation */}
            <div className="hidden md:flex items-center gap-8">
              <div className="group relative">
                <button className="text-gray-800 font-medium hover:text-amber-900 transition flex items-center gap-1">
                  About Us
                  <span className="text-sm">▼</span>
                </button>
              </div>

              <div className="group relative">
                <button className="text-gray-800 font-medium hover:text-amber-900 transition flex items-center gap-1">
                  Academics
                  <span className="text-sm">▼</span>
                </button>
              </div>

              <div className="group relative">
                <button className="text-gray-800 font-medium hover:text-amber-900 transition flex items-center gap-1">
                  Media Hub
                  <span className="text-sm">▼</span>
                </button>
              </div>

              <div className="group relative">
                <button className="text-gray-800 font-medium hover:text-amber-900 transition flex items-center gap-1">
                  Facility
                  <span className="text-sm">▼</span>
                </button>
              </div>

              <a
                href="#"
                className="text-gray-800 font-medium hover:text-amber-900 transition"
              >
                School Policies
              </a>

              <a
                href="#"
                className="text-gray-800 font-medium hover:text-amber-900 transition"
              >
                Contact Us
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
