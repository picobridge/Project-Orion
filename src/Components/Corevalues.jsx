import {
  GraduationCap,
  Heart,
  Lightbulb,
  Shield,
  Gamepad2,
  Globe,
} from "lucide-react";

export default function CoreValues() {
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
        "We uphold honesty, fairness, and strong moral principles in all we do—building trust within our school community .",
    },
    {
      icon: Lightbulb,
      title: "Curiosity and Innovation",
      description:
        "We embrace modern teaching methods and technology to make learning engaging, relevant, and effective. ",
    },
    {
      icon: Shield,
      title: "Safety and Security",
      description:
        "We prioritize the well-being of every pupil through a secure, well-supervised, and protected learning environment",
    },
    {
      icon: Gamepad2,
      title: "Discipline and Responsibility",
      description:
        "We develop responsible individuals who are self-motivated, punctual, and mindful of their duties",
    },
    {
      icon: Globe,
      title: "Global Citizenship",
      description:
        "We encourage cultural awareness and global thinking, helping students develop empathy, open-mindedness, and a readiness to engage with the world.",
    },
  ];

  return (
    <section className="py-16 relative md:py-24 bg-[#f5f3f7]">
      <div className="container mx-auto px-18 w-[70]">
        <h2 className="text-4xl font-bold mb-6 text-center" data-aos="fade-up">
          Our Core Values
        </h2>
        <p
          data-aos="fade-up"
          className="text-center text-gray-600 mb-4 text-sm md:text-base leading-relaxed max-w-3xl mx-auto"
        >
          {
            "At Bright Rainbows Academy, we guide students across all facets of school life—from academics to character development, preparing them to become responsible global citizens."
          }
        </p>
        <div className="mt-12 md:mt-16 relative">
          <div className="grid lg:grid-cols-3 gap-8 lg:gap-12 items-center">
            {/* Left Column */}
            <div data-aos="fade-right" className="space-y-6 lg:space-y-8">
              {values.slice(0, 3).map((value, index) => (
                <div
                  key={index}
                  className="bg-white p-6 rounded-lg shadow-sm hover:shadow-md transition-shadow"
                >
                  <div className="flex items-start gap-4">
                    <div className="bg-[#dc2626] p-3 rounded-lg flex-shrink-0">
                      <value.icon className="h-5 w-5 text-white" />
                    </div>
                    <div>
                      <h3 className="font-bold text-gray-900 mb-2 text-balance">
                        {value.title}
                      </h3>
                      <p className="text-sm text-gray-600 leading-relaxed text-pretty">
                        {value.description}
                      </p>
                    </div>
                  </div>
                </div>
              ))}
            </div>

            {/* Center Image */}
            <div
              data-aos="fade-in"
              className="flex justify-center lg:justify-center order-first lg:order-none"
            >
              <div className="relative">
                <div
                  className="absolute inset-0 rounded-full border-4 border-dashed border-pink-300 animate-spin"
                  style={{ animationDuration: "20s" }}
                ></div>
                <div className="relative w-64 h-64 md:w-80 md:h-80 rounded-full overflow-hidden border-8 border-white shadow-xl">
                  <img
                    src="img10.jpeg"
                    fill
                    className="object-cover w-full h-full"
                  />
                </div>
              </div>
            </div>

            {/* Right Column */}
            <div data-aos="fade-left" className="space-y-6 lg:space-y-8">
              {values.slice(3, 6).map((value, index) => (
                <div
                  key={index}
                  className="bg-white p-6 rounded-lg shadow-sm hover:shadow-md transition-shadow"
                >
                  <div className="flex items-start gap-4">
                    <div className="bg-[#dc2626] p-3 rounded-lg flex-shrink-0">
                      <value.icon className="h-5 w-5 text-white" />
                    </div>
                    <div>
                      <h3 className="font-bold text-gray-900 mb-2 text-balance">
                        {value.title}
                      </h3>
                      <p className="text-sm text-gray-600 leading-relaxed text-pretty">
                        {value.description}
                      </p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
      <img
        src="../../public/pattern5.png"
        className="absolute bottom-28 left-2 hidden md:block"
      />
      <img
        src="../../public/pattern3.png"
        className="absolute top-28 right-20 hidden md:block"
      />
    </section>
  );
}
