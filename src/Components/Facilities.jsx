import React from "react";
import {
  Music,
  Monitor,
  BookOpen,
  UtensilsCrossed,
  Sun,
  Building2,
  Armchair,
  Wind,
  CheckCircle2,
  Sparkles,
} from "lucide-react";

const facilities = [
  {
    id: 1,
    title: "School Band",
    icon: Music,
    color: "from-amber-500 to-orange-500",
    bgColor: "bg-amber-50",
    iconColor: "text-amber-600",
    borderColor: "border-amber-200",
    points: [
      "Develops cooperation, coordination, and musical rhythm",
      "Performs at parades, assemblies, and special occasions",
      "Promotes self-expression, self-control, and school spirit",
      "Encourages creativity beyond the classroom",
    ],
    summary: "Helps children discover and develop their musical talents while bringing energy to school life.",
  },
  {
    id: 2,
    title: "Computer Room",
    icon: Monitor,
    color: "from-blue-500 to-cyan-500",
    bgColor: "bg-blue-50",
    iconColor: "text-blue-600",
    borderColor: "border-blue-200",
    points: [
      "Hands-on computer education from an early age",
      "Basic computer literacy and keyboarding skills",
      "Encourages digital learning, research, and innovation",
      "Prepares students for today's technology-driven world",
    ],
    summary: "Early exposure to technology builds confident, tech-savvy learners ready for the future.",
  },
  {
    id: 3,
    title: "School Library",
    icon: BookOpen,
    color: "from-emerald-500 to-teal-500",
    bgColor: "bg-emerald-50",
    iconColor: "text-emerald-600",
    borderColor: "border-emerald-200",
    points: [
      "Large collection of age-appropriate books and resources",
      "Encourages healthy reading habits from a young age",
      "Supports homework, classroom learning, and research",
      "Book borrowing system to take learning home",
    ],
    summary: "A quiet sanctuary where students develop a lifelong love of reading and strong language skills.",
  },
  {
    id: 4,
    title: "School Cafeteria",
    icon: UtensilsCrossed,
    color: "from-rose-500 to-pink-500",
    bgColor: "bg-rose-50",
    iconColor: "text-rose-600",
    borderColor: "border-rose-200",
    points: [
      "Clean, organized space for meals, snacks, and drinks",
      "Helps students stay energized throughout the school day",
      "Encourages healthy eating habits and nutrition awareness",
      "Convenient for students who spend extended hours at school",
    ],
    summary: "Ensuring every child is well-nourished and cared for, both in and out of the classroom.",
  },
  {
    id: 5,
    title: "Solar Power & Steady Electricity",
    icon: Sun,
    color: "from-yellow-400 to-amber-500",
    bgColor: "bg-yellow-50",
    iconColor: "text-yellow-600",
    borderColor: "border-yellow-200",
    points: [
      "Reliable electricity for all classrooms and buildings",
      "Zero interruptions to learning and teaching activities",
      "Powers fans, TVs, computer lab, and learning tools",
      "Maintains a comfortable learning environment at all times",
    ],
    summary: "Parents can rest easy knowing their children learn in a fully powered, comfortable setting.",
  },
  {
    id: 6,
    title: "Spacious, Well-Ventilated Classrooms",
    icon: Building2,
    color: "from-indigo-500 to-purple-500",
    bgColor: "bg-indigo-50",
    iconColor: "text-indigo-600",
    borderColor: "border-indigo-200",
    points: [
      "Large classrooms with low student-to-space ratios",
      "Excellent airflow and natural ventilation",
      "Bright, welcoming, and friendly learning atmosphere",
      "Safe and comfortable seating arrangements",
    ],
    summary: "Thoughtfully designed spaces that keep students healthy, comfortable, and focused on learning.",
  },
  {
    id: 7,
    title: "Comfortable Furniture",
    icon: Armchair,
    color: "from-violet-500 to-fuchsia-500",
    bgColor: "bg-violet-50",
    iconColor: "text-violet-600",
    borderColor: "border-violet-200",
    points: [
      "Ergonomic chairs designed for children of all ages",
      "Promotes good posture and physical well-being",
      "Reduces fatigue during long classroom sessions",
      "Safe, durable, and long-lasting materials",
    ],
    summary: "When students sit comfortably, they learn better, focus longer, and enjoy school more.",
  },
  {
    id: 8,
    title: "Classroom Fans",
    icon: Wind,
    color: "from-sky-500 to-blue-500",
    bgColor: "bg-sky-50",
    iconColor: "text-sky-600",
    borderColor: "border-sky-200",
    points: [
      "Keeps classrooms cool and fresh during hot weather",
      "Helps students stay comfortable and attentive",
      "Ensures uninterrupted learning even in high temperatures",
      "Creates a happier, healthier classroom environment",
    ],
    summary: "A cool, breezy classroom keeps students refreshed, happy, and ready to learn.",
  },
];

export default function Facilities() {
  return (
    <section id="facilities" className="py-20 md:py-28 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 md:mb-20">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-[#FFBF00]/10 text-[#FFBF00] font-semibold text-sm uppercase tracking-wider mb-4">
            <Sparkles size={16} />
            Our Campus
          </div>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 mb-4 leading-tight">
            World-Class <span className="text-[#FFBF00]">Facilities</span>
          </h2>
          <p className="text-lg text-gray-600 leading-relaxed">
            Designed for learning, comfort, and overall growth. At Bright Rainbows Academy, 
            we believe children learn best in a setting that is safe, secure, and well-equipped.
          </p>
        </div>

        {/* Facilities Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 lg:gap-8">
          {facilities.map((facility, index) => {
            const Icon = facility.icon;
            return (
              <div
                key={facility.id}
                className="group relative bg-white rounded-2xl border border-gray-100 hover:border-transparent shadow-sm hover:shadow-xl transition-all duration-500 ease-out overflow-hidden"
                data-aos="fade-up"
                data-aos-delay={index * 100}
              >
                {/* Top Color Bar */}
                <div className={`h-1.5 w-full bg-gradient-to-r ${facility.color}`} />

                <div className="p-6 lg:p-7">
                  {/* Icon */}
                  <div
                    className={`w-14 h-14 rounded-xl ${facility.bgColor} ${facility.iconColor} flex items-center justify-center mb-5 group-hover:scale-110 transition-transform duration-300`}
                  >
                    <Icon size={28} strokeWidth={1.8} />
                  </div>

                  {/* Title */}
                  <h3 className="text-xl font-bold text-gray-900 mb-3 group-hover:text-[#FFBF00] transition-colors duration-300">
                    {facility.title}
                  </h3>

                  {/* Points */}
                  <ul className="space-y-2.5 mb-4">
                    {facility.points.map((point, i) => (
                      <li key={i} className="flex items-start gap-2.5 text-sm text-gray-600 leading-relaxed">
                        <CheckCircle2
                          size={16}
                          className={`mt-0.5 flex-shrink-0 ${facility.iconColor}`}
                          strokeWidth={2.5}
                        />
                        <span>{point}</span>
                      </li>
                    ))}
                  </ul>

                  {/* Summary */}
                  <div className={`pt-4 border-t ${facility.borderColor}`}>
                    <p className="text-sm text-gray-500 italic leading-relaxed">
                      {facility.summary}
                    </p>
                  </div>
                </div>

                {/* Hover Gradient Overlay */}
                <div
                  className={`absolute inset-0 bg-gradient-to-br ${facility.color} opacity-0 group-hover:opacity-[0.03] transition-opacity duration-500 pointer-events-none`}
                />
              </div>
            );
          })}
        </div>

        {/* Bottom Summary */}
        <div className="mt-16 md:mt-20 bg-gray-900 rounded-3xl p-8 md:p-12 lg:p-16 text-center relative overflow-hidden">
          {/* Decorative Elements */}
          <div className="absolute top-0 left-0 w-64 h-64 bg-[#FFBF00]/10 rounded-full blur-3xl -translate-x-1/2 -translate-y-1/2" />
          <div className="absolute bottom-0 right-0 w-64 h-64 bg-[#FFBF00]/10 rounded-full blur-3xl translate-x-1/2 translate-y-1/2" />

          <div className="relative z-10 max-w-4xl mx-auto">
            <h3 className="text-2xl md:text-3xl font-bold text-white mb-6">
              In Summary
            </h3>
            <p className="text-gray-300 text-lg leading-relaxed mb-8">
              Bright Rainbows Academy's facilities are specifically designed to promote quality education, 
              safety and comfort, creativity and talent development, and modern learning experiences. 
              We believe that a school with the right environment makes students more confident 
              and paves the way for a successful future.
            </p>

            <div className="flex flex-wrap justify-center gap-4">
              {[
                "Quality Education",
                "Safety & Comfort",
                "Creativity & Talent",
                "Modern Learning",
              ].map((tag) => (
                <span
                  key={tag}
                  className="px-5 py-2.5 rounded-full bg-white/10 text-white font-medium text-sm border border-white/20 backdrop-blur-sm"
                >
                  {tag}
                </span>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}