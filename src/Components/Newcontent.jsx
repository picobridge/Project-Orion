import { Play } from "lucide-react";

export default function Newcontent() {
  return (
    <section className="relative overflow-hidden bg-red-600">
      {/* Subtle texture overlay */}
      <div className="absolute inset-0 opacity-[0.03]" style={{
        backgroundImage: `radial-gradient(circle at 1px 1px, white 1px, transparent 0)`,
        backgroundSize: '2.5rem 2.5rem'
      }} />
      
      <div className="flex relative flex-col lg:grid lg:grid-cols-2">
        {/* Left Column - Text Content */}
        <div
          data-aos="fade-right"
          className="flex relative min-h-auto lg:min-h-[85vh] flex-col justify-center px-[1.5rem] py-[3rem] sm:px-[2.5rem] sm:py-[4rem] lg:px-[3.5rem] lg:py-[6rem] xl:px-[5rem]"
        >
          <div className="mx-auto w-full max-w-[44rem] space-y-[1.5rem] lg:space-y-[2rem]">
            
            {/* Section Label */}
            <div className="flex items-center gap-[0.75rem]">
              <div className="w-[2rem] h-[0.125rem] bg-[#FDE68A]" />
              <p className="text-[0.8125rem] font-semibold tracking-[0.2em] uppercase text-[#FDE68A]">
                Meet Our Founder
              </p>
            </div>

            <h1 className="text-balance text-[2rem] sm:text-[2.5rem] md:text-[3rem] lg:text-[2.75rem] xl:text-[3.25rem] font-bold leading-[1.15] text-white">
             A Passion for Education, 
              <span className="text-[#FDE68A]">A Heart for Children</span>
              <br />
             
            </h1>

            <div className="space-y-[1rem] sm:space-y-[1.25rem] text-[0.9375rem] sm:text-[1rem] leading-[1.75] text-white/80">
              <p className="text-pretty">
                <span className="font-semibold text-white">Uzoamaka Emelda Aniehe</span>{" "}
                is the proprietress of Bright Rainbows Academy Ishieke, Ebonyi State, where she leads with a single purpose: raising well-grounded children in a school that is both loving and fun.
              </p>

              <p className="text-pretty hidden sm:block">
                Her passion for education was shaped early — serving as Head Girl at Alasi Primary School, Agbor, and Senior Prefect at Marist Comprehensive Academy, Uturu. She holds a degree from the Federal University of Technology, Owerri (FUTO) and a Postgraduate Diploma in Education (PGDE) from Usman Danfodio University, Sokoto, and is currently preparing to pursue a Master of Education degree.
              </p>

              <p className="text-pretty">
                Mrs. Aniehe's vision is simple: a warm, nurturing environment where every child flourishes morally, socially, and intellectually — and where curiosity, creativity, and excellence thrive.
              </p>
            </div>

            {/* Signature */}
            <div className="pt-[0.75rem] border-t border-white/15">
              <p className="text-[0.9375rem] sm:text-[1rem] text-white">
                <span className="font-semibold">— Mrs. Uzoamaka Aniehe</span>
                <span className="text-white/40 ml-[0.5rem]">|</span>
                <span className="text-[#FDE68A] font-medium ml-[0.5rem]">Principal & Proprietress</span>
              </p>
            </div>

            {/* Video Thumbnail - Hidden on mobile, shown on sm+ */}
            <div className="relative mt-[1rem] sm:mt-[1.5rem] w-full max-w-[30rem] overflow-hidden rounded-[1rem] shadow-2xl ring-1 ring-white/10 group cursor-pointer hidden sm:block">
              <div className="aspect-video relative">
                <img 
                  src="img1.jpeg" 
                  alt="School video thumbnail" 
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-[1.03]" 
                />
                {/* Play Button Overlay */}
                <button
                  className="absolute inset-0 flex items-center justify-center bg-black/20 transition-all duration-300 group-hover:bg-black/35"
                  aria-label="Play video"
                >
                 
                </button>
              </div>
            </div>
          </div>
        </div>

        {/* Right Column - Image */}
        <div
          data-aos="fade-left"
          className="flex relative min-h-auto lg:min-h-[85vh] items-center justify-center px-[1.5rem] py-[2rem] sm:px-[2.5rem] sm:py-[3rem] lg:px-[3rem] lg:py-[6rem]"
        >
          {/* MOBILE: Only Principal Image - Full Width, No Decorative Frame */}
          <div className="w-full lg:hidden">
            <div className="relative w-full max-w-[22rem] mx-auto">
              <div className="relative aspect-[3/4] w-full overflow-hidden rounded-[1rem] shadow-xl">
                <img
                  src="ceo.jpeg"
                  alt="Mrs. Uzoamaka Aniehe - Principal & Proprietress"
                  className="w-full h-full object-cover"
                />
                {/* Subtle gradient overlay at bottom */}
                <div className="absolute bottom-0 left-0 right-0 h-[20%] bg-gradient-to-t from-black/30 to-transparent" />
              </div>

              {/* Floating badge */}
              <div className="absolute -bottom-[0.75rem] left-[50%] -translate-x-1/2 bg-white rounded-[0.75rem] shadow-lg px-[1rem] py-[0.625rem] whitespace-nowrap">
                <p className="text-[0.6875rem] text-slate-400 uppercase tracking-[0.1em] font-medium text-center">CEO / Principal</p>
                <p className="text-[0.9375rem] font-bold text-[#B91C1C] text-center">Mrs. Uzoamaka Aniehe</p>
              </div>
            </div>
          </div>

          {/* TABLET: Principal Image with subtle frame */}
          <div className="hidden md:block lg:hidden w-full max-w-[26rem]">
            <div className="relative w-full">
              <div className="absolute -top-[0.5rem] -left-[0.5rem] w-full h-full rounded-[1rem] border-2 border-[#FDE68A]/25 -z-10" />
              <div className="absolute -bottom-[0.5rem] -right-[0.5rem] w-full h-full rounded-[1rem] bg-[#FDE68A]/5 -z-10" />
              
              <div className="relative aspect-[3/4] w-full overflow-hidden rounded-[1rem] shadow-xl ring-1 ring-white/10">
                <img
                  src="ceo.jpeg"
                  alt="Mrs. Uzoamaka Aniehe - Principal & Proprietress"
                  className="w-full h-full object-cover"
                />
                <div className="absolute bottom-0 left-0 right-0 h-[25%] bg-gradient-to-t from-[#B91C1C]/40 to-transparent" />
              </div>

              {/* Floating badge */}
              <div className="absolute -bottom-[1rem] -left-[1rem] bg-white rounded-[0.875rem] shadow-xl px-[1.25rem] py-[0.875rem] border border-white/20">
                <p className="text-[0.75rem] text-slate-400 uppercase tracking-[0.1em] font-medium">CEO / Principal</p>
                <p className="text-[1.125rem] font-bold text-[#B91C1C]">Mrs. Uzoamaka Aniehe</p>
              </div>
            </div>
          </div>

          {/* DESKTOP: Full layout with decorative elements */}
          <div className="hidden lg:block relative w-full max-w-[28rem]">
            {/* Decorative frame */}
            <div className="absolute -top-[0.75rem] -left-[0.75rem] w-full h-full rounded-[1.25rem] border-2 border-[#FDE68A]/30 -z-10" />
            <div className="absolute -bottom-[0.75rem] -right-[0.75rem] w-full h-full rounded-[1.25rem] bg-[#FDE68A]/8 -z-10" />
            
            <div className="relative aspect-[3/4] w-full overflow-hidden rounded-[1.25rem] shadow-2xl ring-1 ring-white/10">
              <img
                src="ceo.jpeg"
                alt="Mrs. Uzoamaka Aniehe - Principal & Proprietress"
                className="w-full h-full object-cover"
              />
              {/* Subtle gradient overlay at bottom */}
              <div className="absolute bottom-0 left-0 right-0 h-[25%] bg-gradient-to-t from-[#B91C1C]/40 to-transparent" />
            </div>

            {/* Floating badge */}
            <div className="absolute -bottom-[1rem] -left-[1rem] bg-white rounded-[0.875rem] shadow-xl px-[1.25rem] py-[0.875rem] border border-white/20">
              <p className="text-[0.75rem] text-slate-400 uppercase tracking-[0.1em] font-medium">CEO / Principal</p>
              <p className="text-[1.125rem] font-bold text-[#B91C1C]">Mrs. Uzoamaka Aniehe</p>
            </div>
          </div>

          {/* Decorative elements - desktop only */}
          <div className="absolute top-[4rem] right-[4rem] hidden lg:block">
            <div className="w-[1rem] h-[1rem] rounded-full bg-[#FDE68A]/25" />
          </div>
          <div className="absolute top-[6rem] right-[6rem] hidden lg:block">
            <div className="w-[0.5rem] h-[0.5rem] rounded-full bg-[#FDE68A]/35" />
          </div>
          <div className="absolute bottom-[6rem] right-[3rem] hidden lg:block">
            <div className="w-[0.75rem] h-[0.75rem] rounded-full bg-white/15" />
          </div>
        </div>
      </div>

      {/* Floating patterns - hidden on mobile */}
      <img
        src="pattern4.png"
        className="absolute top-[5rem] right-[3rem] hidden lg:block w-[4rem] h-[4rem] "
        alt=""
      />
      <img
        src="pattern5.png"
        className="absolute bottom-[5rem] left-[1rem] hidden lg:block w-[10rem] h-[10rem] "
        alt=""
      />
      
      {/* Cloud decorations - bottom */}
      <div className="absolute bottom-0 left-0 right-0">
        <img src="cloudimg.png" className="w-full" alt="Clouds" />
      </div>
      <div className="absolute -top-1 right-0 rotate-180">
        <img src="cloudimg.png" className="w-full" alt="Clouds" />
      </div>
    </section>
  );
}