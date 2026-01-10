import React from "react";
import {
  FaRegFileAlt, // Application form
  FaSchool, // School visit
  FaClipboardCheck, // Assessment
  FaRocket, // Welcome
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
      title: "School Visit and Meeting",
      description:
        "Schedule a tour of our facilities and meet with our staff to discuss your child's needs, our curriculum, and answer any questions you may have.",
      icon: <FaSchool />,
    },
    {
      number: 3,
      title: "Assessment and Placement",
      description:
        "Your child will undergo a simple age-appropriate assessment to determine the best class placement for their learning journey.",
      icon: <FaClipboardCheck />,
    },
    {
      number: 4,
      title: "Welcome to Bright-Rainbow Schools",
      description:
        "After completing enrollment formalities and fee payment, your child officially becomes part of the Bright Rainbows family. We'll provide you with all necessary materials and information for a smooth start.",
      icon: <FaRocket />,
    },
  ];

  return (
    <section className="relative bg-red-600 py-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div data-aos="fade-up" className="text-center mb-16">
          <p className="text-orange-300 font-semibold text-sm md:text-base mb-3">
            How it works?
          </p>
          <h2 className="text-4xl md:text-5xl font-bold text-white text-balance">
            What is the process to Enroll Your Child
          </h2>
        </div>

        {/* Steps */}
        <div
          data-aos="fade-up"
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-20"
        >
          {steps.map((step, index) => (
            <div key={index} className="flex flex-col items-center relative">
              <div className="relative mb-8 flex flex-col items-center">
                <div className="w-24 h-24 bg-red-500 rounded-full p-1 flex items-center justify-center shadow-lg">
                  <div className="w-full h-full bg-white rounded-full flex items-center justify-center text-4xl text-red-600">
                    {step.icon}
                  </div>
                </div>

                {index < steps.length - 1 && (
                  <div className="hidden lg:block absolute top-10 -right-12 transform">
                    <svg
                      className="w-8 h-8 text-white"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2.5}
                        d="M13 5l7 7-7 7M5 5l7 7-7 7"
                      />
                    </svg>
                  </div>
                )}
              </div>

              {/* Text Content */}
              <h3 className="text-lg font-bold text-white text-center mb-3">
                {step.title}
              </h3>
              <p className="text-red-100 text-center text-sm leading-relaxed">
                {step.description}
              </p>
            </div>
          ))}
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
