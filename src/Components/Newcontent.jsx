import { Play } from "lucide-react";

export default function Newcontent() {
  return (
    <div className="flex relative flex-col lg:grid lg:grid-cols-2 bg-[#f2f0f9]">
      {/* Left Column - Text Content */}
      <section
        data-aos="fade-right"
        className="flex relative min-h-screen flex-col justify-center px-6 py-16 sm:px-10 sm:py-20 lg:min-h-0 lg:px-12 lg:py-24 xl:px-16"
      >
        <div className="mx-auto w-full max-w-2xl space-y-8 lg:space-y-10">
          <h1 className=" text-balance text-[] text-4xl font-bold leading-tight text-foreground sm:text-5xl md:text-6xl lg:text-5xl xl:text-6xl">
            Welcome to Bright <p className="text-[#FFBF00]">Rainbows Academy</p>
          </h1>

          <div className="space-y-6 text-base leading-relaxed text-muted-foreground sm:text-lg lg:text-base xl:text-lg">
            <p className="text-pretty">
              We are pleased to showcase our strong academic curriculum, our
              world-class facilities, and the holistic nature of our educational
              program that helps each one of our students to respect and
              appreciate the world and their growing role within it.{" "}
            </p>

            <p className="text-pretty">
              We deeply love what we do at Bright Rainbows Academy, and we are
              sure this will be evident as you continue your journey through the
              pages of this website.
            </p>

            <p className="text-foreground">
              - Greg Hughes -{" "}
              <span className="font-semibold">Head of School</span>
            </p>
          </div>

          {/* Video Thumbnail */}
          <div className="relative mt-8 w-full max-w-lg overflow-hidden rounded-xl shadow-2xl lg:mt-10">
            <div className="aspect-video relative">
              <img src="img1.jpeg" fill className="object-cover" />
              {/* Play Button Overlay */}
              <button
                className="absolute inset-0 flex items-center justify-center bg-black/20 transition-colors hover:bg-black/30"
                aria-label="Play video"
              >
                <div className="flex h-16 w-16 items-center justify-center rounded-full bg-white/90 shadow-xl transition-transform hover:scale-110 sm:h-20 sm:w-20">
                  <Play className="h-8 w-8 fill-foreground text-foreground sm:h-10 sm:w-10" />
                </div>
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Right Column - Newsletter Cover */}
      <section
        data-aos="fade-left"
        className="flex relative min-h-screen items-center justify-center bg-muted/30 px-6 py-16 sm:px-10 sm:py-20 lg:min-h-0 lg:bg-transparent lg:px-12 lg:py-24"
      >
        <div className="relative w-full max-w-md">
          <div className="relative aspect-[3/4] w-full overflow-hidden rounded-2xl shadow-2xl ring-1 ring-black/5">
            <img
              src="ceo.jpg"
              fill
              className="object-cover w-full h-full"
              priority
            />
          </div>
          {/* RSS and Bell Icons */}
        </div>

        <img
          src="pattern4.png"
          className="absolute top-28 right-24 hidden md:block"
        />
      </section>
      <img
        src="pattern5.png"
        className="absolute bottom-28 left-2 hidden md:block"
      />
    </div>
  );
}
