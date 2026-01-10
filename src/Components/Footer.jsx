import { Facebook, Instagram, Linkedin, Twitter, ArrowUp } from "lucide-react";
import { useState, useEffect } from "react";
import { Link } from "react-scroll";

function Footer() {
  const [showScroll, setShowScroll] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setShowScroll(window.scrollY > 300);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <footer className="w-full  border-t border-gray-200">
      {/* Section with headline */}
      <div className="bg-[#F2F0F9] py-12 md:py-16 px-4 md:px-8 relative">
        <div className="max-w-7xl mx-auto">
          <div className="flex flex-col md:flex-row items-center justify-between gap-8">
            <div className="flex-1">
              {/* Orange accent mark */}
              <div className="flex items-start gap-4">
                <div className="w-2 h-20 bg-orange-500 rounded-full mt-2"></div>
                <h2
                  data-aos="fade-right"
                  className="text-4xl md:text-5xl font-bold text-black leading-tight"
                >
                  What are you waiting for? Give your child the bright future
                  they deserve!{" "}
                </h2>
              </div>
            </div>

            {/* Book a Visit button */}
            <button
              data-aos="fade-in"
              className="cursor-pointer flex-shrink-0 w-40 h-40 rounded-full bg-red-600 hover:bg-red-700 transition-colors flex items-center justify-center"
            >
              <span className="text-white cursor-pointer text-center text-lg font-semibold">
                Book a Visit
              </span>
            </button>
          </div>
        </div>
      </div>

      {/* Main footer content */}
      <div className="bg-white px-4 md:px-8 py-12">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8 md:gap-12 relative">
            {/* Academics column */}
            <div>
              <h3 className="text-red-600 font-bold text-lg mb-6">
                Quick Links
              </h3>
              <ul className="space-y-3">
                <li>
                  <a
                    href="#"
                    className="text-gray-700 hover:text-red-600 transition-colors text-sm"
                  >
                    <Link to="about" smooth={true} duration={1000}>
                      {" "}
                      About us{" "}
                    </Link>
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    className="text-gray-700 hover:text-red-600 transition-colors text-sm"
                  >
                    <Link to="about" smooth={true} duration={1000}>
                      {" "}
                      Core values{" "}
                    </Link>
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    className="text-gray-700 hover:text-red-600 transition-colors text-sm"
                  >
                    {" "}
                    <Link to="process" smooth={true} duration={1000}>
                      {" "}
                      Admission Process{" "}
                    </Link>
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    className="text-gray-700 hover:text-red-600 transition-colors text-sm"
                  >
                    Contact Us
                  </a>
                </li>
              </ul>
            </div>

            {/* About Turkish column */}
            <div>
              <h3 className="text-red-600 font-bold text-lg mb-6">
                About BrightRainbows
              </h3>
              <ul className="space-y-3">
                <li>
                  <a
                    href="#"
                    className="text-gray-700 hover:text-red-600 transition-colors text-sm"
                  >
                    CEO Message
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    className="text-gray-700 hover:text-red-600 transition-colors text-sm"
                  >
                    BrightRainbows International School
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    className="text-gray-700 hover:text-red-600 transition-colors text-sm"
                  >
                    BrightRainbows Educations
                  </a>
                </li>
              </ul>
            </div>

            {/* Contact column */}
            <div>
              <h3 className="text-red-600 font-bold text-lg mb-6">Contact</h3>
              <div className="space-y-4">
                <p className="text-gray-700 text-sm leading-relaxed">
                  Location: Abakaliki, Ebonyi State, Nigeria{" "}
                </p>
                <p className="text-gray-700 text-sm">Phone: 07070044177</p>
                <a
                  href="mailto:brightrainbowacademy@gmail.com"
                  className="text-gray-700 hover:text-red-600 transition-colors text-sm break-all"
                >
                  Email: brightrainbowsacademy@gmail.com{" "}
                </a>
              </div>
            </div>

            {/* Social icons */}
            <div className="flex flex-col items-center md:items-end justify-start gap-6">
              <div className="flex gap-4">
                <a
                  href="#"
                  className="w-10 h-10 rounded-full border border-gray-400 flex items-center justify-center hover:bg-gray-100 transition-colors"
                  aria-label="Facebook"
                >
                  <Facebook className="w-5 h-5 text-black" />
                </a>
                <a
                  href="#"
                  className="w-10 h-10 rounded-full border border-gray-400 flex items-center justify-center hover:bg-gray-100 transition-colors"
                  aria-label="Twitter"
                >
                  <Twitter className="w-5 h-5 text-black" />
                </a>
                <a
                  href="#"
                  className="w-10 h-10 rounded-full border border-gray-400 flex items-center justify-center hover:bg-gray-100 transition-colors"
                  aria-label="LinkedIn"
                >
                  <Linkedin className="w-5 h-5 text-black" />
                </a>
                <a
                  href="#"
                  className="w-10 h-10 rounded-full border border-gray-400 flex items-center justify-center hover:bg-gray-100 transition-colors"
                  aria-label="Instagram"
                >
                  <Instagram className="w-5 h-5 text-black" />
                </a>
              </div>

              {/* Scroll to top button */}
              {showScroll && (
                <button
                  onClick={scrollToTop}
                  className="w-12 h-12 rounded-full border border-gray-400 flex items-center justify-center hover:bg-gray-100 transition-colors"
                  aria-label="Scroll to top"
                >
                  <ArrowUp className="w-5 h-5 text-black" />
                </button>
              )}
            </div>
          </div>
        </div>
      </div>

      {/* Footer divider */}
      <div className="border-t border-gray-200"></div>
    </footer>
  );
}
export default Footer;
