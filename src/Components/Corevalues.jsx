import React, { useEffect, useRef } from "react";
import {
  GraduationCap,
  Heart,
  Lightbulb,
  Shield,
  Gamepad2,
  Globe,
} from "lucide-react";

function CoreValues() {
  const sectionRef = useRef(null);
  
  const values = [
    {
      icon: GraduationCap,
      title: "Excellence in Education",
      description:
        "We strive for the highest standards in teaching, learning, and personal growth, helping every child reach their full potential.",
    },
    {
      icon: Heart,
      title: "Faith and Integrity",
      description:
        "We uphold honesty, fairness, and strong moral principles in all we do—building trust within our school community.",
    },
    {
      icon: Lightbulb,
      title: "Curiosity and Innovation",
      description:
        "We embrace modern teaching methods and technology to make learning engaging, relevant, and effective.",
    },
    {
      icon: Shield,
      title: "Safety and Security",
      description:
        "We prioritize the well-being of every pupil through a secure, well-supervised, and protected learning environment.",
    },
    {
      icon: Gamepad2,
      title: "Discipline and Responsibility",
      description:
        "We develop responsible individuals who are self-motivated, punctual, and mindful of their duties.",
    },
    {
      icon: Globe,
      title: "Global Citizenship",
      description:
        "We encourage cultural awareness and global thinking, helping students develop empathy, open-mindedness, and a readiness to engage with the world.",
    },
  ];

  useEffect(() => {
    // Intersection Observer for scroll animations
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("animate-in");
          }
        });
      },
      { threshold: 0.1, rootMargin: "0px 0px -50px 0px" }
    );

    const elements = sectionRef.current?.querySelectorAll(".reveal");
    elements?.forEach((el) => observer.observe(el));

    return () => observer.disconnect();
  }, []);

  return (
    <section
      ref={sectionRef}
      className="relative py-20 md:py-28 lg:py-32 bg-gradient-to-b from-[#faf8fb] to-[#f5f3f7] overflow-hidden"
    >
      {/* Subtle background pattern */}
      <div className="absolute inset-0 opacity-[0.03]" style={{
        backgroundImage: `radial-gradient(circle at 1px 1px, #dc2626 1px, transparent 0)`,
        backgroundSize: '40px 40px'
      }} />

      <div className="relative container mx-auto px-4 sm:px-6 lg:px-8 xl:px-12 max-w-7xl">
        {/* Section Header */}
        <div className="text-center mb-16 md:mb-20 reveal opacity-0 translate-y-6 transition-all duration-700 ease-out">
         
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-900 mb-5 tracking-tight">
            Our Core Values
          </h2>
          <div className="w-20 h-1 bg-gradient-to-r from-[#dc2626] to-pink-400 mx-auto rounded-full mb-6" />
          <p className="text-gray-600 text-base sm:text-lg leading-relaxed max-w-2xl mx-auto">
            At Bright Rainbows Academy, we guide students across all facets of school life—from academics to character development, preparing them to become responsible global citizens.
          </p>
        </div>

        {/* Main Grid Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-6 items-center">
          {/* Left Column - 3 values */}
          <div className="lg:col-span-4 space-y-5 md:space-y-6">
            {values.slice(0, 3).map((value, index) => (
              <div
                key={`left-${index}`}
                className="reveal opacity-0 translate-x-[-30px] transition-all duration-700 ease-out group"
                style={{ transitionDelay: `${index * 150}ms` }}
              >
                <div className="relative bg-white rounded-2xl p-5 md:p-6 shadow-sm hover:shadow-xl transition-all duration-300 border border-gray-100/80 hover:border-red-100 group-hover:-translate-y-1">
                  {/* Hover accent line */}
                  <div className="absolute left-0 top-6 bottom-6 w-1 bg-gradient-to-b from-[#dc2626] to-pink-400 rounded-r-full opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                  
                  <div className="flex items-start gap-4">
                    <div className="relative flex-shrink-0">
                      <div className="bg-gradient-to-br from-[#dc2626] to-red-700 p-3 rounded-xl shadow-lg shadow-red-200/50 group-hover:scale-110 transition-transform duration-300">
                        <value.icon className="h-5 w-5 text-white" strokeWidth={2} />
                      </div>
                    </div>
                    <div className="flex-1 min-w-0">
                      <h3 className="font-bold text-gray-900 mb-1.5 text-base sm:text-lg group-hover:text-[#dc2626] transition-colors duration-300">
                        {value.title}
                      </h3>
                      <p className="text-sm text-gray-500 leading-relaxed">
                        {value.description}
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Center Image */}
          <div className="lg:col-span-4 flex justify-center order-first lg:order-none mb-8 lg:mb-0 reveal opacity-0 scale-95 transition-all duration-1000 ease-out">
            <div className="relative">
              {/* Outer decorative ring */}
              <div className="absolute -inset-3 rounded-full border-2 border-dashed border-red-200/60 animate-[spin_25s_linear_infinite]" />
              <div className="absolute -inset-6 rounded-full border border-red-100/40 animate-[spin_30s_linear_infinite_reverse]" />
              
              {/* Glow effect */}
              <div className="absolute inset-0 rounded-full bg-gradient-to-br from-red-100/40 to-pink-100/40 blur-2xl" />
              
              {/* Main image container */}
              <div className="relative w-56 h-56 sm:w-64 sm:h-64 md:w-72 md:h-72 rounded-full overflow-hidden border-[6px] border-white shadow-2xl shadow-red-100/50">
                <img
                  src="img10.jpeg"
                  alt="Bright Rainbows Academy"
                  className="object-cover w-full h-full hover:scale-105 transition-transform duration-700"
                />
                {/* Subtle overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-red-900/10 to-transparent" />
              </div>
              
              {/* Floating badge */}
              <div className="absolute -bottom-2 left-1/2 -translate-x-1/2 bg-white px-4 py-2 rounded-full shadow-lg border border-gray-100">
                <span className="text-xs font-semibold text-gray-700">Est. 2010</span>
              </div>
            </div>
          </div>

          {/* Right Column - 3 values */}
          <div className="lg:col-span-4 space-y-5 md:space-y-6">
            {values.slice(3, 6).map((value, index) => (
              <div
                key={`right-${index}`}
                className="reveal opacity-0 translate-x-[30px] transition-all duration-700 ease-out group"
                style={{ transitionDelay: `${(index + 3) * 150}ms` }}
              >
                <div className="relative bg-white rounded-2xl p-5 md:p-6 shadow-sm hover:shadow-xl transition-all duration-300 border border-gray-100/80 hover:border-red-100 group-hover:-translate-y-1">
                  {/* Hover accent line */}
                  <div className="absolute right-0 top-6 bottom-6 w-1 bg-gradient-to-b from-[#dc2626] to-pink-400 rounded-l-full opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                  
                  <div className="flex items-start gap-4">
                    <div className="relative flex-shrink-0">
                      <div className="bg-gradient-to-br from-[#dc2626] to-red-700 p-3 rounded-xl shadow-lg shadow-red-200/50 group-hover:scale-110 transition-transform duration-300">
                        <value.icon className="h-5 w-5 text-white" strokeWidth={2} />
                      </div>
                    </div>
                    <div className="flex-1 min-w-0">
                      <h3 className="font-bold text-gray-900 mb-1.5 text-base sm:text-lg group-hover:text-[#dc2626] transition-colors duration-300">
                        {value.title}
                      </h3>
                      <p className="text-sm text-gray-500 leading-relaxed">
                        {value.description}
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Decorative corner elements */}
      <img
        src="pattern5.png"
        alt=""
        className="absolute bottom-20 left-4 w-16 h-16 hidden lg:block animate-bounce"
        style={{ animationDuration: '3s' }}
      />
      <img
        src="pattern3.png"
        alt=""
        className="absolute top-24 right-8 w-20 h-20  hidden lg:block animate-bounce"
        style={{ animationDuration: '4s', animationDelay: '1s' }}
      />

      {/* CSS for animations */}
      <style>{`
        .animate-in {
          opacity: 1 !important;
          transform: translate(0, 0) scale(1) !important;
        }
      `}</style>
    </section>
  );
}

export default CoreValues;