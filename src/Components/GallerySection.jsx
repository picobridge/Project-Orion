
import { useState } from "react";
import { X, ChevronLeft, ChevronRight } from "lucide-react";

function GallerySection() {
  const [selectedImage, setSelectedImage] = useState(null);
  const [currentIndex, setCurrentIndex] = useState(0);

  const galleryItems = [
    {
      id: 1,
      src: "img1.jpeg",
      alt: "School Learning",
      title: "Primary School Learning",
      span: "col-span-1 row-span-1",
    },
    {
      id: 2,
      src: "img2.jpeg",
      alt: "School Learning",
      title: "Pre-Nursery Learning",
      span: "col-span-1 row-span-1",
    },
    {
      id: 3,
      src: "img3.jpeg",
       alt: "Outdoor View of School",
      title: "Outdoor View",
      span: "col-span-1 row-span-1",
    },
     {
      id: 4,
      src: "img4.jpeg",
      alt: "Security Post",
      title: "Outdoor View",
      span: "col-span-1 row-span-1",
    },
    {
      id: 5,
      src: "img5.jpeg",
      alt: "Team building activity",
      title: "Team Building",
      span: "col-span-1 md:col-span-2 row-span-1 md:row-span-2",
    },
    {
      id: 6,
      src: "grid3.jpeg",
      alt: "Classroom learning",
      title: "Modern Classroom",
      span: "col-span-1 row-span-1",
    },
    {
      id: 7,
      src: "img7.jpeg",
   
      span: "col-span-1 row-span-1",
    },
    {
      id: 8,
      src: "img11.jpeg",
      alt: "Graduation ceremony",
      title: "Graduation Day",
      span: "col-span-1 row-span-1",
    },
     {
      id: 10,
      src: "img10.jpeg",
      alt: "Modern Playground",
      title: "Playground Section",
      span: "col-span-1 row-span-1",
    },
    
  ];

  const openLightbox = (index) => {
    setCurrentIndex(index);
    setSelectedImage(galleryItems[index]);
    document.body.style.overflow = "hidden";
  };

  const closeLightbox = () => {
    setSelectedImage(null);
    document.body.style.overflow = "auto";
  };

  const goToPrevious = (e) => {
    e.stopPropagation();
    const newIndex = currentIndex === 0 ? galleryItems.length - 1 : currentIndex - 1;
    setCurrentIndex(newIndex);
    setSelectedImage(galleryItems[newIndex]);
  };

  const goToNext = (e) => {
    e.stopPropagation();
    const newIndex = currentIndex === galleryItems.length - 1 ? 0 : currentIndex + 1;
    setCurrentIndex(newIndex);
    setSelectedImage(galleryItems[newIndex]);
  };

  return (
    <>
      <section
        data-aos="fade-up"
        className="relative bg-[#f5f3f7] py-[4rem] md:py-[5rem] lg:py-[6rem] px-[1rem] sm:px-[1.5rem] lg:px-[2rem]"
      >
        {/* Subtle background pattern */}
        <div className="absolute inset-0 opacity-[0.02]" style={{
          backgroundImage: `radial-gradient(circle at 1px 1px, #1e293b 1px, transparent 0)`,
          backgroundSize: '2.5rem 2.5rem'
        }} />

        <div className="max-w-[80rem] mx-auto relative z-10">
          {/* Section heading */}
          <div className="text-center mb-[2.5rem] md:mb-[3.5rem] lg:mb-[4rem]">
            <div className="flex items-center justify-center gap-[0.75rem] mb-[1rem]">
              <div className="w-[2rem] h-[0.125rem] bg-[#e6ab2d]" />
              <p className="text-[0.8125rem] font-semibold tracking-[0.2em] uppercase text-[#e6ab2d]">
                Our Memories
              </p>
              <div className="w-[2rem] h-[0.125rem] bg-[#e6ab2d]" />
            </div>

            <h2 className="text-[2rem] sm:text-[2.5rem] md:text-[3rem] lg:text-[3.5rem] font-bold text-slate-900 mb-[0.75rem] leading-[1.15] tracking-tight">
              Our <span className="text-[#e6ab2d]">Gallery</span>
            </h2>
            <p className="text-[1rem] md:text-[1.0625rem] text-slate-500 max-w-[36rem] mx-auto leading-[1.7]">
              Capturing the vibrant moments, achievements, and joy that make our school community truly special.
            </p>
          </div>

          {/* Masonry Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-[0.75rem] sm:gap-[1rem] lg:gap-[1.25rem] auto-rows-[16rem] sm:auto-rows-[18rem] md:auto-rows-[20rem] lg:auto-rows-[16rem]">
            {galleryItems.map((item, index) => (
              <div
                key={item.id}
                className={`${item.span} relative rounded-[1rem] overflow-hidden shadow-md hover:shadow-xl transition-all duration-500 cursor-pointer group`}
                onClick={() => openLightbox(index)}
              >
                <img
                  src={item.src || "/placeholder.svg"}
                  alt={item.alt}
                  className="w-full h-full object-cover transition-transform duration-700 ease-out group-hover:scale-[1.08]"
                />
                
                {/* Overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                
                {/* Content on hover */}
                <div className="absolute bottom-0 left-0 right-0 p-[1.25rem] translate-y-[1rem] opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-500">
                  <h3 className="text-white font-bold text-[1.0625rem] mb-[0.25rem]">
                    {item.title}
                  </h3>
                  <p className="text-white/70 text-[0.8125rem]">
                    {item.alt}
                  </p>
                </div>

                {/* Corner accent */}
                <div className="absolute top-[1rem] right-[1rem] w-[2.5rem] h-[2.5rem] rounded-full bg-white/10 backdrop-blur-sm flex items-center justify-center opacity-0 group-hover:opacity-100 transition-all duration-500 scale-75 group-hover:scale-100">
                  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M15 3h6v6M9 21H3v-6M21 3l-7 7M3 21l7-7"/>
                  </svg>
                </div>
              </div>
            ))}
          </div>

          {/* View More Button */}
          
        </div>

        {/* Decorative elements */}
        <img
          src="pattern4.png"
          className="absolute top-[3rem] left-[1.5rem] hidden md:block w-[3rem] h-[3rem] opacity-20"
          alt=""
        />
        <img
          src="pattern2.png"
          className="absolute bottom-[4rem] right-[1.5rem] hidden md:block w-[3rem] h-[3rem] opacity-20 rotate-180"
          alt=""
        />
      </section>

      {/* Lightbox Modal */}
      {selectedImage && (
        <div 
          className="fixed inset-0 z-50 flex items-center justify-center bg-black/90 backdrop-blur-sm"
          onClick={closeLightbox}
        >
          {/* Close button */}
          <button
            onClick={closeLightbox}
            className="absolute top-[1.5rem] right-[1.5rem] z-10 w-[3rem] h-[3rem] rounded-full bg-white/10 backdrop-blur-sm flex items-center justify-center text-white hover:bg-white/20 transition-colors duration-300"
          >
            <X size={24} />
          </button>

          {/* Navigation */}
          <button
            onClick={goToPrevious}
            className="absolute left-[1rem] md:left-[2rem] top-1/2 -translate-y-1/2 z-10 w-[3rem] h-[3rem] rounded-full bg-white/10 backdrop-blur-sm flex items-center justify-center text-white hover:bg-white/20 transition-colors duration-300"
          >
            <ChevronLeft size={28} />
          </button>

          <button
            onClick={goToNext}
            className="absolute right-[1rem] md:right-[2rem] top-1/2 -translate-y-1/2 z-10 w-[3rem] h-[3rem] rounded-full bg-white/10 backdrop-blur-sm flex items-center justify-center text-white hover:bg-white/20 transition-colors duration-300"
          >
            <ChevronRight size={28} />
          </button>

          {/* Image */}
          <div 
            className="max-w-[90vw] max-h-[85vh] relative"
            onClick={(e) => e.stopPropagation()}
          >
            <img
              src={selectedImage.src}
              alt={selectedImage.alt}
              className="max-w-full max-h-[85vh] object-contain rounded-[0.5rem]"
            />
            <div className="absolute bottom-0 left-0 right-0 p-[1.25rem] bg-gradient-to-t from-black/60 to-transparent rounded-b-[0.5rem]">
              <h3 className="text-white font-bold text-[1.125rem]">{selectedImage.title}</h3>
              <p className="text-white/70 text-[0.875rem] mt-[0.25rem]">{selectedImage.alt}</p>
            </div>
          </div>

          {/* Image counter */}
          <div className="absolute bottom-[1.5rem] left-1/2 -translate-x-1/2 text-white/60 text-[0.875rem] font-medium">
            {currentIndex + 1} / {galleryItems.length}
          </div>
        </div>
      )}
    </>
  );
}

export default GallerySection;