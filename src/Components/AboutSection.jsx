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
          About Bright-Rainbow-Academy
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
        <div className="relative z-10 flex justify-center items-center">
          <img
            src="img1.jpeg"
            width={400}
            height={800}
            className="object-contain drop-shadow-lg"
            priority
          />
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
