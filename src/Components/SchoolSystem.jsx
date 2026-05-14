import React from "react";
import {
  Baby,
  Blocks,
  GraduationCap,
  BookOpen,
  Sun,
  Shield,
  Bus,
  Users,
  Heart,
  Sparkles,
  CheckCircle2,
  ArrowRight,
  Star,
  Lightbulb,
  Music,
  Monitor,
  Library,
  School,
} from "lucide-react";

const stages = [
  {
    id: 1,
    title: "Creche",
    subtitle: "For Babies & Toddlers",
    age: "Birth – 2 years",
    icon: Baby,
    description:
      "A safe, clean, and loving environment for busy parents and working mums who need trusted daytime care for their little ones.",
    features: [
      "Clean, well-ventilated, and child-safe rooms",
      "Age-appropriate toys for sensory and motor development",
      "Soft music and educational videos suited to their age",
      "Supervised playtime for early social interaction",
      "Trained, experienced nannies providing attentive care",
      "Focus on cleanliness, comfort, rest, and emotional safety",
    ],
    highlight:
      "At this stage, we focus on care, bonding, play, and early stimulation — building a strong emotional and physical foundation for future learning.",
  },
  {
    id: 2,
    title: "Preschool",
    subtitle: "Nursery 1 – 3",
    age: "Ages 3 – 5",
    icon: Blocks,
    description:
      "Following Nigeria's early childhood education standards through fun, interactive, and stress-free learning experiences.",
    features: [
      "Learning through stories, songs, rhymes, and pictures",
      "Educational videos and TV programmes that teach",
      "Hands-on activities: colouring, counting, matching, drawing",
      "Guided playtime to boost confidence and creativity",
      "Introduction to letters, numbers, shapes, and communication",
      "Trained nursery teachers who understand child development",
    ],
    highlight:
      "This stage builds communication, curiosity, independence, and classroom comfort — fully preparing children for primary school.",
  },
  {
    id: 3,
    title: "Primary School",
    subtitle: "Primary 1 – 6",
    age: "Ages 6 – 11",
    icon: GraduationCap,
    description:
      "The academic backbone of Bright Rainbows Academy, following the Nigerian primary curriculum with modern teaching methods.",
    features: [
      "Qualified, experienced teachers delivering structured lessons",
      "Group learning and classroom collaboration for teamwork",
      "Strong focus on literacy, numeracy, science, and moral education",
      "Regular assessments to track each child's progress",
      "Emphasis on discipline, self-confidence, and leadership",
      "Computer lab, library, school band, clubs, and events",
    ],
    highlight:
      "Students become confident, well-rounded learners fully prepared for the challenges of secondary school and beyond.",
  },
];

const specialFeatures = [
  {
    icon: Sun,
    title: "Steady Solar Power",
    desc: "Uninterrupted learning with reliable electricity all day long.",
  },
  {
    icon: Shield,
    title: "Safe & Secure",
    desc: "Fenced campus, controlled access, and dedicated security staff.",
  },
  {
    icon: Bus,
    title: "School Bus Service",
    desc: "Convenient transport so distance is never a barrier.",
  },
  {
    icon: Monitor,
    title: "Modern Learning Tools",
    desc: "Child-friendly classrooms equipped with up-to-date technology.",
  },
  {
    icon: Heart,
    title: "Affordable Quality",
    desc: "Top-tier education at prices families can manage.",
  },
  {
    icon: Users,
    title: "Strong Community",
    desc: "A thriving partnership between parents, teachers, and staff.",
  },
];

export default function NigerianSchoolSystem() {
  return (
    <section id="about" className="py-[5rem] md:py-[7rem] bg-[#f5f3f7] overflow-x-hidden">
      <div className="max-w-[80rem] mx-auto px-[1rem] sm:px-[1.5rem] lg:px-[2rem]">
        
        {/* Section Header */}
        <div className="text-center max-w-[48rem] mx-auto mb-[3.5rem] md:mb-[5rem]">
          <div className="flex items-center justify-center gap-[0.75rem] mb-[1.25rem]">
            <div className="w-[2rem] h-[0.125rem] bg-[#FFBF00]" />
            <p className="text-[0.8125rem] font-semibold tracking-[0.2em] uppercase text-[#FFBF00]">
              Our Academic Structure
            </p>
            <div className="w-[2rem] h-[0.125rem] bg-[#FFBF00]" />
          </div>
          
          <h2 className="text-[2rem] md:text-[2.5rem] lg:text-[3rem] font-bold text-slate-900 mb-[1rem] leading-[1.15] tracking-tight">
            How We Fit Into the{" "}
            <span className="text-[#FFBF00]">Nigerian School System</span>
          </h2>
          <p className="text-[1rem] md:text-[1.0625rem] text-slate-500 leading-[1.75] max-w-[40rem] mx-auto">
            Bright Rainbows Academy follows the standard Nigerian school system while exceeding expectations through high-quality care, modern facilities, and a focus on every child's unique needs — from birth through primary completion.
          </p>
        </div>

        {/* Stage Progress Bar (Desktop) */}
        <div className="hidden lg:flex items-center justify-between max-w-[56rem] mx-auto mb-[4rem] relative">
          <div className="absolute top-1/2 left-[3rem] right-[3rem] h-[0.125rem] bg-slate-200 -translate-y-1/2 z-0" />
          <div className="absolute top-1/2 left-[3rem] right-[3rem] h-[0.125rem] bg-[#FFBF00] -translate-y-1/2 z-0" />
          {stages.map((stage, index) => {
            const Icon = stage.icon;
            return (
              <div
                key={stage.id}
                className="relative z-10 flex flex-col items-center gap-[0.75rem] bg-[#f5f3f7] px-[1rem]"
                data-aos="zoom-in"
                data-aos-delay={index * 150}
              >
                <div
                  className="w-[3.5rem] h-[3.5rem] rounded-full bg-white shadow-md flex items-center justify-center text-[#FFBF00] border-2 border-[#FFBF00]/30 transition-transform duration-300 hover:scale-110"
                >
                  <Icon size={22} strokeWidth={2} />
                </div>
                <div className="text-center">
                  <p className="font-bold text-slate-900 text-[0.875rem]">{stage.title}</p>
                  <p className="text-[0.75rem] text-slate-400 mt-[0.125rem]">{stage.age}</p>
                </div>
              </div>
            );
          })}
        </div>

        {/* Stages Cards */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-[1.5rem] mb-[5rem]">
          {stages.map((stage, index) => {
            const Icon = stage.icon;
            return (
              <div
                key={stage.id}
                className="group relative bg-white rounded-[1.25rem] border border-slate-100 hover:border-[#FFBF00]/20 shadow-sm hover:shadow-xl transition-all duration-500 ease-out overflow-hidden flex flex-col"
                data-aos="fade-up"
                data-aos-delay={index * 100}
              >
                {/* Top Gold Bar */}
                <div className="h-[0.25rem] w-full bg-[#FFBF00]" />

                <div className="p-[1.75rem] lg:p-[2rem] flex-1 flex flex-col">
                  {/* Header */}
                  <div className="flex items-center gap-[1rem] mb-[1.25rem]">
                    <div className="w-[3.5rem] h-[3.5rem] rounded-[0.875rem] bg-[#FFBF00]/8 text-[#FFBF00] flex items-center justify-center flex-shrink-0 group-hover:bg-[#FFBF00] group-hover:text-white transition-all duration-300">
                      <Icon size={26} strokeWidth={1.8} />
                    </div>
                    <div>
                      <span className="text-[0.6875rem] font-semibold text-slate-400 uppercase tracking-[0.1em]">
                        {stage.age}
                      </span>
                      <h3 className="text-[1.25rem] font-bold text-slate-900 group-hover:text-[#FFBF00] transition-colors duration-300">
                        {stage.title}
                      </h3>
                      <p className="text-[0.8125rem] text-slate-400">{stage.subtitle}</p>
                    </div>
                  </div>

                  {/* Description */}
                  <p className="text-slate-500 text-[0.9375rem] leading-[1.7] mb-[1.25rem]">
                    {stage.description}
                  </p>

                  {/* Features */}
                  <ul className="space-y-[0.625rem] mb-[1.5rem] flex-1">
                    {stage.features.map((feature, i) => (
                      <li
                        key={i}
                        className="flex items-start gap-[0.625rem] text-[0.875rem] text-slate-500 leading-[1.6]"
                      >
                        <CheckCircle2
                          size={16}
                          className="mt-[0.25rem] flex-shrink-0 text-[#FFBF00]"
                          strokeWidth={2.5}
                        />
                        <span>{feature}</span>
                      </li>
                    ))}
                  </ul>

                  {/* Highlight Box */}
                  <div className="mt-auto p-[1rem] rounded-[0.875rem] bg-[#FFBF00]/5 border border-[#FFBF00]/10">
                    <div className="flex items-start gap-[0.5rem]">
                      <Lightbulb
                        size={16}
                        className="mt-[0.125rem] flex-shrink-0 text-[#FFBF00]"
                      />
                      <p className="text-[0.8125rem] text-slate-600 italic leading-[1.6]">
                        {stage.highlight}
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        {/* What Makes Us Special */}
        <div className="mb-[3rem]">
          <div className="text-center mb-[3rem]">
            <div className="flex items-center justify-center gap-[0.75rem] mb-[1rem]">
              <div className="w-[2rem] h-[0.125rem] bg-[#FFBF00]" />
              <p className="text-[0.8125rem] font-semibold tracking-[0.2em] uppercase text-[#FFBF00]">
                Why Choose Us
              </p>
              <div className="w-[2rem] h-[0.125rem] bg-[#FFBF00]" />
            </div>
            
            <h3 className="text-[1.75rem] md:text-[2.25rem] font-bold text-slate-900 mb-[0.75rem] leading-[1.2]">
              What Makes{" "}
              <span className="text-[#FFBF00]">Bright Rainbows Academy</span>{" "}
              So Special?
            </h3>
            <p className="text-[1rem] text-slate-500 max-w-[36rem] mx-auto leading-[1.7]">
              We go above and beyond the standard curriculum to provide an
              environment where every child can truly thrive.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-[1.25rem]">
            {specialFeatures.map((feature, index) => {
              const Icon = feature.icon;
              return (
                <div
                  key={index}
                  className="flex items-start gap-[1rem] p-[1.5rem] bg-white rounded-[1rem] border border-slate-100 shadow-sm hover:shadow-md hover:border-[#FFBF00]/20 transition-all duration-300 group"
                  data-aos="fade-up"
                  data-aos-delay={index * 80}
                >
                  <div className="w-[2.75rem] h-[2.75rem] rounded-[0.75rem] bg-[#FFBF00]/8 text-[#FFBF00] flex items-center justify-center flex-shrink-0 group-hover:bg-[#FFBF00] group-hover:text-white transition-colors duration-300">
                    <Icon size={22} strokeWidth={1.8} />
                  </div>
                  <div>
                    <h4 className="font-bold text-slate-900 mb-[0.25rem] text-[0.9375rem] group-hover:text-[#FFBF00] transition-colors duration-300">
                      {feature.title}
                    </h4>
                    <p className="text-[0.8125rem] text-slate-500 leading-[1.6]">
                      {feature.desc}
                    </p>
                  </div>
                </div>
              );
            })}
          </div>
        </div>

        {/* Decorative Pattern */}
        <div className="relative">
          <img
            src="pattern3.png"
            className="absolute -top-[6rem] right-[2rem] hidden md:block w-[4rem] h-[4rem] opacity-40"
            alt=""
          />
        </div>
      </div>
    </section>
  );
}