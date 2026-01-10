"use client";

function GallerySection() {
  const galleryItems = [
    {
      id: 1,
      src: "img9.jpeg",
      alt: "School community gathering",
      className: "col-span-1 lg:col-span-1",
    },
    {
      id: 2,
      src: "img8.jpeg",
      alt: "Teachers and staff",
      className: "col-span-1 lg:col-span-1",
    },
    {
      id: 3,
      src: "img7.jpeg",
      alt: "Outdoor school event",
      className: "col-span-1 lg:col-span-1",
    },
    {
      id: 4,
      src: "img4.jpeg",
      alt: "Team building activity",
      className: "col-span-1 md:col-span-2 lg:col-span-2",
    },
    {
      id: 5,
      src: "img5.jpeg",
      alt: "Sports event",
      className: "col-span-1 lg:col-span-1",
    },
  ];

  return (
    <section
      data-aos="fade-up"
      className="relative bg-gray-100 py-16 px-4 md:px-6 lg:px-12"
    >
      <div className="max-w-7xl mx-auto">
        {/* Section heading */}
        <div className="mb-8 md:mb-10 lg:mb-12">
          <h2 className="text-3xl sm:text-4xl md:text-4xl lg:text-5xl font-bold text-gray-900 mb-3 md:mb-4">
            Our Gallery
          </h2>
          <p className="text-base md:text-lg text-gray-600">
            Moments from our school community
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-3 md:gap-4 lg:gap-5 auto-rows-[220px] sm:auto-rows-[250px] md:auto-rows-[280px] lg:auto-rows-[320px]">
          {galleryItems.map((item) => (
            <div
              key={item.id}
              className={`${item.className} rounded-lg overflow-hidden shadow-lg hover:shadow-xl transition-shadow duration-300 cursor-pointer group`}
            >
              <img
                src={item.src || "/placeholder.svg"}
                alt={item.alt}
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
              />
            </div>
          ))}
        </div>
      </div>

      <img
        src="pattern4.png"
        className="absolute top-12 left-2 hidden md:block"
        alt=""
      />
      <img
        src="pattern2.png"
        className="absolute bottom-28 right-2 hidden md:block rotate-180"
        alt=""
      />
    </section>
  );
}

export default GallerySection;
