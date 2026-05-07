import { Play } from "lucide-react";

export default function Newcontent() {
  return (
    <div className="flex relative flex-col lg:grid lg:grid-cols-2 bg-[#f2f0f9]">
      {/* Left Column - Text Content */}
      <section
        data-aos="fade-right"
        className="flex relative min-h-screen flex-col justify-center px-[1.5rem] py-[4rem] sm:px-[2.5rem] sm:py-[5rem] lg:min-h-0 lg:px-[3rem] lg:py-[6rem] xl:px-[4rem]"
      >
        <div className="mx-auto w-full max-w-[50rem] space-y-[2rem] lg:space-y-[2.5rem]">
          <h1 className="text-balance text-[2.25rem] font-bold leading-tight text-foreground sm:text-[3.125rem] md:text-[3.75rem] lg:text-[3.125rem] xl:text-[3.75rem]">
            Welcome to <span className="text-[#dc2626]">Bright</span> <p className="text-[#FFBF00]">Rainbows Academy</p>
          </h1>

          <div className="space-y-[1.5rem] text-base leading-relaxed text-muted-foreground sm:text-lg lg:text-base xl:text-lg">
            <p className="text-pretty">
              <span className="font-bold">Uzoamaka Emelda Aniehe </span>is the proprietress of Bright Rainbows Academy Ishieke, Ebonyi State, where she leads with a single purpose: raising well-grounded children in a school that is both loving and fun.

Her passion for education was shaped early — serving as Head Girl at Alasi Primary School, Agbor, and Senior Prefect at Marist Comprehensive Academy, Uturu. 
            </p>

            <p className="text-pretty">
             She holds a degree from the Federal University of Technology, Owerri (FUTO) and a Postgraduate Diploma in Education (PGDE) from Usman Danfodio University, Sokoto, and is currently preparing to pursue a Master of Education degree.

Mrs. Aniehe's vision is simple: a warm, nurturing environment where every child flourishes morally, socially, and intellectually — and where curiosity, creativity, and excellence thrive.
            </p>

            <p className="text-foreground">
              - Mrs Uzoamaka Aniehe  -{" "}
              <span className="font-semibold">Principal </span>
            </p>
          </div>

          {/* Video Thumbnail */}
          <div className="relative mt-[2rem] w-full max-w-[32rem] overflow-hidden rounded-[0.75rem] shadow-2xl lg:mt-[2.5rem]">
            <div className="aspect-video relative">
              <img src="img1.jpeg" fill className="object-cover" />
              {/* Play Button Overlay */}
              <button
                className="absolute inset-0 flex items-center justify-center bg-black/20 transition-colors hover:bg-black/30"
                aria-label="Play video"
              >
               
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Right Column - Newsletter Cover */}
      <section
        data-aos="fade-left"
        className="flex relative min-h-screen items-center justify-center bg-muted/30 px-[1.5rem] py-[4rem] sm:px-[2.5rem] sm:py-[5rem] lg:min-h-0 lg:bg-transparent lg:px-[3rem] lg:py-[6rem]"
      >
        <div className="relative w-full max-w-[28rem]">
          <div className="relative aspect-[3/4] w-full overflow-hidden rounded-[1rem] shadow-2xl ring-1 ring-black/5">
            <img
              src="ceo.jpeg"
              fill
              className="object-cover w-full h-full"
              priority
            />
          </div>
          {/* RSS and Bell Icons */}
        </div>

        <img
          src="pattern4.png"
          className="absolute top-[7rem] right-[6rem] hidden md:block"
        />
      </section>
      <img
        src="pattern5.png"
        className="absolute bottom-[7rem] left-[0.125rem] hidden md:block"
      />
    </div>
  );
}