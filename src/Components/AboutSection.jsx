import React from 'react';

function AboutSection() {
  return (
    <section className="relative overflow-hidden bg-[#f5f3f7] overflow-x-hidden">
      <div className="flex flex-col lg:flex-row items-stretch min-h-[100vh] lg:min-h-[85vh]">
        
        {/* Left Content Section - Subtle warm cream/off-white */}
        <div
          data-aos="fade-right"
          className="flex-1 px-[1.5rem] py-[3rem] sm:px-[2.5rem] sm:py-[4rem] lg:px-[3.5rem] lg:py-[5rem] xl:px-[5rem] flex flex-col justify-center bg-[#f5f3f7] text-slate-800 relative"
        >
          {/* Very subtle decorative line pattern */}
          <div className="absolute inset-0 opacity-[0.04]" style={{
            backgroundImage: `linear-gradient(95deg, #1e293b 1px, transparent 1px)`,
            backgroundSize: '4rem 4rem'
          }} />
          
          <div className="relative z-10 max-w-[42rem]">
            {/* Section Label */}
            <div className="flex items-center gap-[0.75rem] mb-[1.25rem]">
              <div className="w-[2rem] h-[0.125rem] text-[#ebac24]" />
              <p className="text-[0.8125rem] font-semibold tracking-[0.2em] uppercase text-[#ebac24]">
                Bright Rainbows Vision
              </p>
            </div>

            <h1 className="text-[2.25rem] sm:text-[2.75rem] lg:text-[3.25rem] xl:text-[3.75rem] font-bold mb-[1.5rem] leading-[1.15] tracking-tight text-slate-900">
              About Bright-Rainbow
              <br />
              <span className="text-[#ebac24]">Academy</span>
            </h1>

            <div className="space-y-[1.125rem] mb-[2.5rem] text-[1rem] lg:text-[1.0625rem] leading-[1.75] text-slate-600">
              <p>
                Bright Rainbows Academy is a modern, value-driven educational
                institution offering quality education from Creche through Primary
                levels, with plans for continuous expansion through secondary
                education.
              </p>

              <p>
                We provide a safe, nurturing, and stimulating learning environment
                where every child can discover their potential and thrive. Our
                holistic approach focuses not only on academic excellence but also
                on character building, critical thinking, and moral development.
              </p>
            </div>

            {/* Vision Section */}
            <div className="space-y-[0.75rem] pt-[1.5rem] border-t border-slate-200">
              <div className="flex items-center gap-[0.625rem] mb-[0.5rem]">
                <div className="w-[1.5rem] h-[0.125rem] bg-[#C4A35A]" />
                <h2 className="text-[1.5rem] sm:text-[1.75rem] font-bold text-slate-900">Our Vision</h2>
              </div>
              <p className="text-[1rem] lg:text-[1.0625rem] leading-[1.75] text-slate-500">
                Our vision at Bright Rainbows Academy is to grow into a leading
                educational institution that provides continuous, high-quality
                learning from early childhood through secondary education. We aim to
                nurture well-rounded, confident, and compassionate learners equipped
                with the knowledge, skills, and values to excel in life and
                contribute positively to society.
              </p>
            </div>

            {/* Stats Row */}
            <div className="flex flex-wrap gap-[2rem] sm:gap-[3rem] mt-[2.5rem] pt-[1.5rem] border-t border-slate-200">
              <div>
                <p className="text-[2rem] sm:text-[2.5rem] font-bold text-[#ebac24] leading-none">6+</p>
                <p className="text-[0.8125rem] text-slate-400 mt-[0.375rem] tracking-wide uppercase">Years Experience</p>
              </div>
              <div>
                <p className="text-[2rem] sm:text-[2.5rem] font-bold text-[#ebac24] leading-none">70+</p>
                <p className="text-[0.8125rem] text-slate-400 mt-[0.375rem] tracking-wide uppercase">Happy Students</p>
              </div>
              <div>
                <p className="text-[2rem] sm:text-[2.5rem] font-bold text-[#ebac24] leading-none">12+</p>
                <p className="text-[0.8125rem] text-slate-400 mt-[0.375rem] tracking-wide uppercase">Expert Teachers</p>
              </div>
            </div>
          </div>
        </div>

        {/* Right Image Gallery Section - Professional asymmetric layout */}
        <div
          data-aos="fade-left"
          className="flex-1 relative bg-[#f5f3f7] flex items-center justify-center p-[1.5rem] sm:p-[2rem] lg:p-[2.5rem] xl:p-[3rem]"
        >
          {/* Decorative Elements - very subtle */}
          <div className="absolute top-[2.5rem] right-[2.5rem] w-[1.25rem] h-[1.25rem] border border-[#C4A35A]/25 rounded-full" />
          <div className="absolute top-[4rem] right-[4.5rem] w-[0.5rem] h-[0.5rem] bg-[#C4A35A]/15 rounded-full" />
          <div className="absolute bottom-[3rem] right-[2rem] w-[2rem] h-[2rem] border border-[#C4A35A]/15 rounded-full" />
          <div className="absolute top-[3rem] left-[2rem] w-[1.5rem] h-[1.5rem] border border-slate-300/30 rounded-md rotate-12" />

          {/* Main Image Gallery - Professional asymmetric bento-style layout */}
          <div className="w-full max-w-[48rem] relative z-10">
            <div className="grid grid-cols-12 auto-rows-[minmax(0,1fr)] gap-[0.75rem] sm:gap-[1rem] h-[28rem] sm:h-[34rem] lg:h-[38rem] xl:h-[42rem]">
              
              {/* Large featured image - spans 7 cols, 4 rows */}
              <div className="col-span-12 sm:col-span-7 row-span-3 sm:row-span-4 relative group overflow-hidden rounded-2xl shadow-sm">
                <img
                  src="grid1.jpeg"
                  alt="Children learning and playing in a bright, colorful classroom environment"
                  className="w-full h-full object-cover transition-transform duration-700 ease-out group-hover:scale-[1.03]"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/30 via-transparent to-transparent" />
                <div className="absolute bottom-[1rem] left-[1rem] right-[1rem]">
                 
                </div>
              </div>

              {/* Top right image - spans 5 cols, 2 rows */}
              <div className="col-span-6 sm:col-span-5 row-span-2 relative group overflow-hidden rounded-2xl shadow-sm">
                <img
                  src="grid3.jpeg"
                  alt="Student reading and studying with focused concentration"
                  className="w-full h-full object-cover transition-transform duration-700 ease-out group-hover:scale-[1.03]"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/20 via-transparent to-transparent" />
              </div>

              {/* Middle right image - spans 5 cols, 2 rows */}
              <div className="col-span-6 sm:col-span-5 row-span-2 relative group overflow-hidden rounded-2xl shadow-sm">
                <img
                  src="img9.jpeg"
                  alt="Teacher engaging with students in an interactive classroom setting"
                  className="w-full h-full object-cover transition-transform duration-700 ease-out group-hover:scale-[1.03]"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/20 via-transparent to-transparent" />
              </div>

              {/* Bottom left wide image - spans 4 cols, 2 rows */}
              <div className="col-span-4 row-span-2 relative group overflow-hidden rounded-2xl shadow-sm hidden sm:block">
                <img
                  src="img8.jpeg"
                  alt="Students collaborating on a creative project"
                  className="w-full h-full object-cover transition-transform duration-700 ease-out group-hover:scale-[1.03]"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/20 via-transparent to-transparent" />
              </div>

              {/* Bottom middle image - spans 4 cols, 2 rows */}
              <div className="col-span-4 row-span-2 relative group overflow-hidden rounded-2xl shadow-sm hidden sm:block">
                <img
                  src="img10.jpeg"
                  alt="Outdoor learning activities and play"
                  className="w-full h-full object-cover transition-transform duration-700 ease-out group-hover:scale-[1.03]"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/20 via-transparent to-transparent" />
              </div>

              {/* Bottom right image - spans 4 cols, 2 rows */}
              <div className="col-span-4 row-span-2 relative group overflow-hidden rounded-2xl shadow-sm hidden sm:block">
                <img
                  src="img5.jpeg"
                  alt="School facilities and learning spaces"
                  className="w-full h-full object-cover transition-transform duration-700 ease-out group-hover:scale-[1.03]"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/20 via-transparent to-transparent" />
              </div>

              {/* Mobile-only: additional images in a row */}
              <div className="col-span-6 row-span-1 relative group overflow-hidden rounded-xl shadow-sm sm:hidden">
                <img
                  src="img6.jpeg"
                  alt="Students collaborating"
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="col-span-6 row-span-1 relative group overflow-hidden rounded-xl shadow-sm sm:hidden">
                <img
                  src="img7.jpeg"
                  alt="Outdoor activities"
                  className="w-full h-full object-cover"
                />
              </div>

            </div>
          </div>

          {/* Floating pattern decoration */}
          <div
            className="absolute top-[4rem] right-[4rem] hidden lg:block opacity-40"
            data-aos="fade-down"
            data-aos-delay="300"
          >
         
          </div>
        </div>
      </div>
    </section>
  );
}

export default AboutSection;