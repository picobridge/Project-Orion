import { Play } from "lucide-react";

function ContentSection() {
  return (
    <div>
      <div className="min-h-screen bg-gradient-to-b from-slate-50 to-slate-100">
        {/* Hero Section */}
        <div className="max-w-7xl mx-auto px-6 py-20 lg:py-32">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
            {/* Left Column - Video Thumbnail */}
            <div className="relative group">
              <div className="relative w-full aspect-video rounded-lg overflow-hidden shadow-2xl">
                {/* Video Thumbnail Image */}
                <img
                  src="female-student.jpg"
                  alt="Join us for a Day of Service"
                  fill
                  className="object-cover"
                />

                {/* Play Button Overlay */}
                <div className="absolute inset-0 bg-black/20 group-hover:bg-black/30 transition-colors flex items-center justify-center">
                  <div className="bg-white rounded-full p-4 shadow-lg group-hover:scale-110 transition-transform">
                    <Play className="w-8 h-8 text-slate-900 fill-slate-900" />
                  </div>
                </div>

                {/* Text Overlay */}
                <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black via-black/50 to-transparent p-8">
                  <h2 className="text-3xl lg:text-4xl font-bold text-white font-serif">
                    Join us for a Day of Service
                  </h2>
                </div>
              </div>
            </div>

            {/* Right Column - Content */}
            <div className="space-y-6">
              <h1 className="text-4xl lg:text-5xl font-bold text-slate-900 font-serif leading-tight">
                Serving our community
              </h1>

              <div className="prose prose-lg max-w-none text-slate-700 space-y-4">
                <p className="text-base lg:text-lg leading-relaxed">
                  Events and programming offered by the{" "}
                  <a
                    href="#"
                    className="font-semibold text-slate-900 underline hover:text-slate-700 transition-colors"
                  >
                    Harvard Ed Portal
                  </a>
                  —including{" "}
                  <a
                    href="#"
                    className="font-semibold text-slate-900 underline hover:text-slate-700 transition-colors"
                  >
                    lectures, arts and culture events
                  </a>
                  ,{" "}
                  <a
                    href="#"
                    className="font-semibold text-slate-900 underline hover:text-slate-700 transition-colors"
                  >
                    public school partnerships
                  </a>
                  ,{" "}
                  <a
                    href="#"
                    className="font-semibold text-slate-900 underline hover:text-slate-700 transition-colors"
                  >
                    youth programming
                  </a>
                  , and more—support our neighbors and the greater community.
                  Throughout the year, Harvard students, faculty, staff, and
                  alumni participate in{" "}
                  <a
                    href="#"
                    className="font-semibold text-slate-900 underline hover:text-slate-700 transition-colors"
                  >
                    days of service
                  </a>
                  ,{" "}
                  <a
                    href="#"
                    className="font-semibold text-slate-900 underline hover:text-slate-700 transition-colors"
                  >
                    partner with local non-profits
                  </a>
                  , and{" "}
                  <a
                    href="#"
                    className="font-semibold text-slate-900 underline hover:text-slate-700 transition-colors"
                  >
                    organize seasonal drives
                  </a>
                  .
                </p>
              </div>

              {/* CTA Button */}
              <div className="pt-4">
                <button className="bg-slate-900 text-white px-8 py-3 rounded-lg font-semibold hover:bg-slate-800 transition-colors">
                  Learn More
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ContentSection;
