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
    <section id="facilities" className="py-[5rem] md:py-[7rem] bg-[#FDFBF7] overflow-x-hidden">
      <div className="max-w-[80rem] mx-auto px-[1rem] sm:px-[1.5rem] lg:px-[2rem]">
        {/* Section Header */}
        <div className="text-center max-w-[48rem] mx-auto mb-[3.5rem] md:mb-[5rem]">
          <div className="flex items-center justify-center gap-[0.75rem] mb-[1rem]">
            <div className="w-[2rem] h-[0.125rem] bg-[#FFBF00]" />
            <p className="text-[0.8125rem] font-semibold tracking-[0.2em] uppercase text-[#FFBF00]">
              What We Offer
            </p>
            <div className="w-[2rem] h-[0.125rem] bg-[#FFBF00]" />
          </div>

          <h2 className="text-[2rem] md:text-[2.5rem] lg:text-[3rem] font-bold text-slate-900 mb-[0.75rem] leading-[1.15] tracking-tight">
            World-Class <span className="text-[#FFBF00]">Facilities</span>
          </h2>
          <p className="text-[1rem] md:text-[1.0625rem] text-slate-500 leading-[1.75] max-w-[40rem] mx-auto">
            Designed for learning, comfort, and overall growth. At Bright Rainbows Academy, 
            we believe children learn best in a setting that is safe, secure, and well-equipped.
          </p>
        </div>

        {/* Facilities Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-[1.25rem] lg:gap-[1.5rem]">
          {facilities.map((facility, index) => {
            const Icon = facility.icon;
            return (
              <div
                key={facility.id}
                className="group relative bg-white rounded-[1.25rem] border border-slate-100 hover:border-[#FFBF00]/20 shadow-sm hover:shadow-xl transition-all duration-500 ease-out overflow-hidden flex flex-col"
                data-aos="fade-up"
                data-aos-delay={index * 80}
              >
                {/* Top Gold Accent Bar */}
                <div className="h-[0.25rem] w-full bg-[#FFBF00]" />

                <div className="p-[1.5rem] lg:p-[1.75rem] flex-1 flex flex-col">
                  {/* Icon */}
                  <div className="w-[3.5rem] h-[3.5rem] rounded-[0.875rem] bg-[#FFBF00]/8 text-[#FFBF00] flex items-center justify-center mb-[1.25rem] group-hover:bg-[#FFBF00] group-hover:text-white transition-all duration-300">
                    <Icon size={26} strokeWidth={1.8} />
                  </div>

                  {/* Title */}
                  <h3 className="text-[1.125rem] font-bold text-slate-900 mb-[0.75rem] group-hover:text-[#FFBF00] transition-colors duration-300">
                    {facility.title}
                  </h3>

                  {/* Points */}
                  <ul className="space-y-[0.5rem] mb-[1.25rem] flex-1">
                    {facility.points.map((point, i) => (
                      <li key={i} className="flex items-start gap-[0.5rem] text-[0.8125rem] text-slate-500 leading-[1.6]">
                        <CheckCircle2
                          size={14}
                          className="mt-[0.2rem] flex-shrink-0 text-[#FFBF00]"
                          strokeWidth={2.5}
                        />
                        <span>{point}</span>
                      </li>
                    ))}
                  </ul>

                  {/* Summary Box */}
                  <div className="mt-auto p-[0.875rem] rounded-[0.75rem] bg-[#FFBF00]/5 border border-[#FFBF00]/10">
                    <p className="text-[0.8125rem] text-slate-600 italic leading-[1.6]">
                      {facility.summary}
                    </p>
                  </div>
                </div>

                {/* Hover Gradient Overlay */}
                <div className="absolute inset-0 bg-gradient-to-br from-[#FFBF00] to-[#FFBF00] opacity-0 group-hover:opacity-[0.02] transition-opacity duration-500 pointer-events-none" />
              </div>
            );
          })}
        </div>

        {/* Bottom CTA */}
        <div className="text-center mt-[3.5rem] md:mt-[4.5rem]">
          <div className="inline-flex items-center gap-[0.75rem] px-[2rem] py-[1rem] bg-[#FFBF00] text-white font-semibold text-[0.9375rem] rounded-full shadow-lg hover:bg-[#E5AC00] hover:shadow-xl transition-all duration-300 hover:-translate-y-[0.125rem] cursor-pointer">
            <Sparkles size={20} strokeWidth={2} />
            <span>Schedule a School Tour</span>
          </div>
          <p className="text-[0.8125rem] text-slate-400 mt-[1rem]">
            See our facilities in person and experience the Bright Rainbows difference.
          </p>
        </div>
      </div>
    </section>
  );
}