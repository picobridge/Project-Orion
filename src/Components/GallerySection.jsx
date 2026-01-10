function GallerySection() {
  const galleryItems = [
    {
      id: 1,
      src: "../../public/img9.jpeg",
      alt: "School community gathering",
      className: "col-span-1 row-span-1",
    },
    {
      id: 2,
      src: "../../public/img8.jpeg",
      alt: "Teachers and staff",
      className: "col-span-1 row-span-1",
    },
    {
      id: 3,
      src: "../../public/img7.jpeg",
      alt: "Outdoor school event",
      className: "col-span-1 row-span-1",
    },
    {
      id: 4,
      src: "../../public/img4.jpeg",
      alt: "Team building activity",
      className: "col-span-2 row-span-1",
    },
    {
      id: 5,
      src: "../../public/img5.jpeg",
      alt: "Sports event",
      className: "col-span-1 row-span-1",
    },
  ];

  return (
    <section
      data-aos="fade-up"
      className="relative bg-gray-100 py-16 px-4 md:px-8 lg:px-12"
    >
      <div className="max-w-7xl mx-auto">
        {/* Section heading */}
        <div className="mb-12">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            Our Gallery
          </h2>
          <p className="text-lg text-gray-600">
            Moments from our school community
          </p>
        </div>

        {/* Bento grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 auto-rows-[300px]">
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
        src="../../public/pattern4.png"
        className="absolute top-12 left-2 hidden md:block"
      />

      <img
        src="../../public/pattern2.png"
        className="absolute bottom-28 right-2 hidden md:block rotate-180"
      />
    </section>
  );
}
export default GallerySection;
