import React from "react";
import {
  FaRegFileAlt,
  FaSchool,
  FaClipboardCheck,
  FaRocket,
} from "react-icons/fa";

function Process() {
  const steps = [
    {
      number: 1,
      title: "Submit Application",
      description:
        "Complete the official enrollment form with your child's details and your contact information. Visit our school or contact us to begin the process.",
      icon: <FaRegFileAlt />,
    },
    {
      number: 2,
      title: "School Visit & Meeting",
      description:
        "Schedule a tour of our facilities and meet with our staff to discuss your child's needs, our curriculum, and answer any questions you may have.",
      icon: <FaSchool />,
    },
    {
      number: 3,
      title: "Assessment & Placement",
      description:
        "Your child will undergo a simple age-appropriate assessment to determine the best class placement for their learning journey.",
      icon: <FaClipboardCheck />,
    },
    {
      number: 4,
      title: "Welcome to Bright-Rainbow",
      description:
        "After completing enrollment formalities and fee payment, your child officially becomes part of the Bright Rainbows family. We'll provide all necessary materials for a smooth start.",
      icon: <FaRocket />,
    },
  ];

  return (
    <section id="process" className="relative overflow-hidden bg-red-600">
      {/* Subtle texture overlay */}
      <div className="absolute inset-0 opacity-[0.03]" style={{
        backgroundImage: `radial-gradient(circle at 1px 1px, white 1px, transparent 0)`,
        backgroundSize: '2.5rem 2.5rem'
      }} />

      <div className="relative z-10 py-[5rem] md:py-[7rem] px-[1rem] sm:px-[1.5rem] lg:px-[2rem]">
        <div className="max-w-[80rem] mx-auto">
          
          {/* Section Header */}
          <div className="text-center mb-[3rem] md:mb-[4rem]">
            <p className="text-[#FDE68A] font-semibold text-[0.8125rem] md:text-[0.875rem] mb-[0.75rem] uppercase tracking-[0.2em]">
              Enrollment Steps
            </p>
            <h2 className="text-[2rem] sm:text-[2.5rem] md:text-[3rem] lg:text-[3.5rem] font-bold text-white text-balance max-w-[48rem] mx-auto leading-[1.15] tracking-tight">
              Your Journey to <span className="text-[#FDE68A]">Bright Rainbows</span> Starts Here
            </h2>
            <p className="text-white/70 text-[1rem] md:text-[1.0625rem] mt-[1rem] max-w-[40rem] mx-auto leading-[1.75]">
              Joining our school is simple and straightforward. Follow these four easy steps to enroll your child.
            </p>
          </div>

          {/* Steps */}
          <div
            data-aos="fade-up"
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-[1.5rem] lg:gap-[2rem] mb-[3rem]"
          >
            {steps.map((step, index) => (
              <div key={index} className="flex flex-col items-center relative group">
                <div className="relative mb-[1.5rem] flex flex-col items-center">
                  {/* Icon Circle */}
                  <div className="w-[6rem] h-[6rem] bg-white/10 rounded-full p-[0.25rem] flex items-center justify-center shadow-lg border border-white/20 group-hover:border-[#FDE68A]/40 transition-colors duration-500">
                    <div className="w-full h-full bg-white rounded-full flex items-center justify-center text-[1.75rem] text-[#B91C1C] group-hover:scale-105 transition-transform duration-500">
                      {step.icon}
                    </div>
                  </div>

                  {/* Number Badge */}
                  <div className="absolute -top-[0.25rem] -right-[0.25rem] w-[1.75rem] h-[1.75rem] rounded-full bg-[#FDE68A] text-[#B91C1C] flex items-center justify-center font-bold text-[0.8125rem] shadow-md">
                    {step.number}
                  </div>

                  {/* Arrow Connector - Desktop Only */}
                  {index < steps.length - 1 && (
                    <div className="hidden lg:block absolute top-[2.5rem] -right-[1.5rem] transform translate-x-1/2">
                      <svg
                        className="w-[1.5rem] h-[1.5rem] text-[#FDE68A]/60"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M13 5l7 7-7 7M5 5l7 7-7 7"
                        />
                      </svg>
                    </div>
                  )}
                </div>

                {/* Text Content */}
                <h3 className="text-[1.0625rem] font-bold text-white text-center mb-[0.5rem] group-hover:text-[#FDE68A] transition-colors duration-300">
                  {step.title}
                </h3>
                <p className="text-white/60 text-center text-[0.875rem] leading-[1.7] max-w-[16rem]">
                  {step.description}
                </p>
              </div>
            ))}
          </div>

          {/* CTA */}
          <div className="text-center">
            <a 
              href="tel:+2347070044177"
              className="inline-flex items-center gap-[0.75rem] px-[2rem] py-[1rem] bg-white text-[#B91C1C] font-bold text-[0.9375rem] rounded-full shadow-xl hover:bg-[#FDE68A] transition-all duration-300 hover:-translate-y-[0.125rem]"
            >
              <FaRegFileAlt size={18} />
              <span>Begin Enrollment Now</span>
            </a>
            <p className="text-[0.8125rem] text-white/50 mt-[0.75rem]">
              Questions? Call us at 070 700 441 77
            </p>
          </div>
        </div>
      </div>

      {/* Decorative Clouds */}
           <div className="absolute bottom-0 left-0 right-0">
        <img src="cloudimg.png" className="w-full" alt="Clouds" />
      </div>
      <div className="absolute -top-1 right-0 rotate-180">
        <img src="cloudimg.png" className="w-full" alt="Clouds" />
      </div>
    </section>
  );
}

export default Process;