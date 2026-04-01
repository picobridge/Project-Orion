function AboutSection() {
  return (
    <div className="flex relative flex-col lg:flex-row items-stretch bg-red-600">
      {/* Left Content Section */}
      <div
        data-aos="fade-right"
        className="flex-1 px-8 py-12 lg:px-16 lg:py-20 flex flex-col justify-center text-white"
      >
        <p className="text-sm font-semibold tracking-wide mb-4">
          Bright Rainbows Vision
        </p>

        <h1 className="text-5xl lg:text-6xl font-bold mb-8 leading-tight">
          About Bright-Rainbow
          <br />
          Academy 
        </h1>

        <div className="space-y-6 mb-12 text-base lg:text-lg leading-relaxed">
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
            on character building, critical thinking, and moral
            development.{" "}
          </p>
        </div>

        {/* Vision Section */}
        <div className="space-y-4">
          <h2 className="text-4xl font-bold mb-6">Our Vision</h2>
          <p className="text-base lg:text-lg leading-relaxed">
            Our vision at Bright Rainbows Academy is to grow into a leading
            educational institution that provides continuous, high-quality
            learning from early childhood through secondary education. We aim to
            nurture well-rounded, confident, and compassionate learners equipped
            with the knowledge, skills, and values to excel in life and
            contribute positively to society.{" "}
          </p>
        </div>
      </div>

      {/* Right Image Section */}
      <div
        data-aos="fade-left"
        className="flex-1 relative flex items-center justify-center py-12 lg:py-0 overflow-hidden"
      >
        {/* Decorative Elements */}
        <div className="absolute top-16 right-12 w-6 h-6 border-2 border-white rounded-full opacity-80"></div>
        <div className="absolute top-24 right-24 w-3 h-3 bg-white rounded-full opacity-80"></div>
        <div className="absolute top-20 right-32 w-4 h-4 bg-white rounded-full opacity-80"></div>

        <div className="absolute bottom-32 right-8 text-white text-5xl font-light opacity-80">
          +
        </div>
        <div className="absolute bottom-12 right-4 w-12 h-12 bg-white rounded-full opacity-40"></div>

        {/* Main Image */}
        <div className="w-full sm:pr-6 pr-0.5">
            <div className="grid grid-cols-2 sm:grid-cols-3 gap-3 sm:gap-4 lg:gap-6">
              {/* Main hero image - large, spans 2 cols and 2 rows */}
              <div className="col-span-2 sm:col-span-2 sm:row-span-2">
                <img
                  src="grid1.jpeg"
                  alt="Children learning and playing in a bright, colorful classroom environment"
                  className="w-full h-full rounded-lg shadow-lg object-cover min-h-48 sm:min-h-80"
                />
              </div>

              {/* Image 2 - top right, tall */}
              <div className="col-span-1 sm:col-span-1 sm:row-span-1">
                <img
                  src="grid3.jpeg"
                  alt="Student reading and studying with focused concentration"
                  className="w-full h-full rounded-lg shadow-lg object-cover min-h-48 sm:min-h-80"
                />
              </div>

              {/* Image 3 - wide bottom left */}
              <div className="col-span-1 sm:col-span-1">
                <img
                  src="gird4.jpeg"
                  alt="Teacher engaging with students in an interactive classroom setting"
                  className="w-full h-full rounded-lg shadow-lg object-cover min-h-32 sm:min-h-40"
                />
              </div>

              {/* Image 4 - small bottom right */}
            
            </div>
          </div>
      </div>
      <div className="absolute bottom-0 -top-1 right-0">
        <img src="cloudimg.png" className="w-full rotate-180" />
      </div>
      <div className="absolute bottom-0 right-0">
        <img src="cloudimg.png" className="w-full" />
      </div>
      <div
        className="absolute top-24 right-32 hidden md:block"
        data-aos="fade-down"
      >
        <img src="pattern1.png" className="w-24 h-24" />
      </div>
    </div>
  );
}

export default AboutSection;
