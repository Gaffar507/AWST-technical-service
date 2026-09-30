import Image from "next/image";
import { Wrench, Tag, Clock, Sparkles } from "lucide-react";

const features = [
  {
    title: "Licensed & Experienced Technicians",
    description:
      "Our team consists of skilled professionals with years of hands-on experience in Dubai technical services.",
    icon: Wrench,
  },
  {
    title: "Affordable & Transparent Pricing",
    description:
      "No hidden charges or unexpected costs. Get upfront estimates before any project begins.",
    icon: Tag,
  },
  {
    title: "On-Time Service Guaranteed",
    description:
      "We value your time. Our team arrives promptly and completes work within the agreed timeframe.",
    icon: Clock,
  },
  {
    title: "100% Work Quality Satisfaction",
    description:
      "We use premium materials and precise techniques to ensure durable, clean, and top-class finishes.",
    icon: Sparkles,
  },
];

export default function WhyChooseUs() {
  return (
    <section className="py-12 sm:py-16 md:py-20 bg-white text-slate-900 overflow-hidden border-t border-slate-300">
      <div className="container-custom px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
          
          {/* Left Column: Image Showcase */}
          <div className="lg:col-span-5 relative w-full">
            <div className="relative rounded overflow-hidden bg-slate-100 h-80 sm:h-105 lg:h-125 shadow-lg border border-slate-200/80">
              <Image
                src="/images/services.jpg"
                alt="A.W.T.S Quality Technical Work"
                fill
                sizes="(max-width: 1024px) 100vw, 40vw"
                className="object-cover object-center"
                priority
              />
              <div className="absolute inset-0 bg-linear-to-t from-slate-950/80 via-transparent to-transparent" />
              
              {/* Experience Badge */}
              <div className="absolute bottom-3 left-4 right-4 sm:bottom-6 sm:left-6 sm:right-6 bg-white/70 backdrop-blur-md p-2 sm:p-4 rounded-xl shadow-lg border border-white/40">
                <div className="flex items-center gap-3 sm:gap-4">
                  <div className="w-14 h-10 sm:w-16 sm:h-12 rounded-xl bg-[#0077B6] text-white flex items-center justify-center font-bold text-base sm:text-lg shrink-0">
                    AWTS
                  </div>
                  <div>
                    <p className="text-xs sm:text-sm md:text-base font-bold text-slate-900 leading-snug">
                      Alwadi Almudea Technical Services
                    </p>
                    <p className="text-[10px] sm:text-xs text-slate-700 mt-0.5">
                      Delivering Excellence Across Dubai, UAE
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Right Column: Features List */}
          <div className="lg:col-span-7">
            <span className="text-xs sm:text-sm font-bold tracking-wider text-[#0077B6] uppercase mb-2 block">
              Why Choose AWTS
            </span>
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-extrabold text-slate-900 tracking-tight mb-4 leading-tight">
              Your Trusted Partner for Technical & Contracting Solutions
            </h2>
            <p className="text-slate-600 text-sm sm:text-base md:text-lg mb-6 sm:mb-8 leading-relaxed">
              We specialize in providing high-standard property maintenance, wall painting, tile fitting, and carpentry work tailored to residential and commercial needs in Dubai.
            </p>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-6">
              {features.map((item, idx) => {
                const IconComponent = item.icon;

                return (
                  <div
                    key={idx}
                    className="p-4 sm:p-5 rounded-2xl border border-slate-200/80 bg-slate-50/60 hover:bg-slate-50 transition duration-200 shadow-xs hover:shadow-md"
                  >
                    {/* Icon Container Fix */}
                    <div className="mb-3.5 text-[#0077B6] w-10 h-10 rounded-xl flex items-center justify-center shrink-0">
                      <IconComponent className="w-7 h-7" />
                    </div>

                    <h3 className="text-sm sm:text-base font-bold text-slate-900 mb-1.5">
                      {item.title}
                    </h3>
                    <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                      {item.description}
                    </p>
                  </div>
                );
              })}
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}