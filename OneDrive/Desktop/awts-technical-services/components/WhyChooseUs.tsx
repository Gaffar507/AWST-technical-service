import Image from "next/image";

const features = [
  {
    title: "Licensed & Experienced Technicians",
    description: "Our team consists of skilled professionals with years of hands-on experience in Dubai technical services.",
    icon: "🛠️",
  },
  {
    title: "Affordable & Transparent Pricing",
    description: "No hidden charges or unexpected costs. Get upfront estimates before any project begins.",
    icon: "🏷️",
  },
  {
    title: "On-Time Service Guaranteed",
    description: "We value your time. Our team arrives promptly and completes work within the agreed timeframe.",
    icon: "⏱️",
  },
  {
    title: "100% Work Quality Satisfaction",
    description: "We use premium materials and precise techniques to ensure durable, clean, and top-class finishes.",
    icon: "✨",
  },
];

export default function WhyChooseUs() {
  return (
    <section className="py-20 bg-white text-slate-900 overflow-hidden">
      <div className="container-custom">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          
          {/* Left Column: Image Showcase */}
          <div className="lg:col-span-5 relative">
            <div className="relative rounded-2xl overflow-hidden shadow-2xl border border-slate-200 bg-slate-100 h-[450px]">
              <Image
                src="https://images.unsplash.com/photo-1504307651254-35680f356dfd?q=80&w=1000&auto=format&fit=crop"
                alt="A.W.T.S Quality Technical Work"
                fill
                sizes="(max-width: 1024px) 100vw, 40vw"
                className="object-cover object-center"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-slate-950/80 via-transparent to-transparent" />
              
              {/* Experience Badge */}
              <div className="absolute bottom-6 left-6 right-6 bg-white/95 backdrop-blur-md p-4 rounded-xl shadow-lg border border-slate-100">
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 rounded-lg bg-[#0077B6] text-white flex items-center justify-center font-bold text-xl">
                    AWTS
                  </div>
                  <div>
                    <p className="text-base font-bold text-slate-900">Alwadi Almudea Technical Services</p>
                    <p className="text-xs text-slate-600">Delivering Excellence Across Dubai, UAE</p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Right Column: Features List */}
          <div className="lg:col-span-7">
            <span className="text-sm font-bold tracking-wider text-[#0077B6] uppercase mb-2 block">
              Why Choose AWTS
            </span>
            <h2 className="heading-2 mb-6">
              Your Trusted Partner for Technical & Contracting Solutions
            </h2>
            <p className="text-slate-600 text-base sm:text-lg mb-8 leading-relaxed">
              We specialize in providing high-standard property maintenance, wall painting, tile fitting, and carpentry work tailored to residential and commercial needs in Dubai.
            </p>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              {features.map((item, idx) => (
                <div
                  key={idx}
                  className="p-5 rounded-xl border border-slate-100 bg-slate-50/80 hover:bg-slate-50 transition duration-200"
                >
                  <div className="text-2xl mb-3">{item.icon}</div>
                  <h3 className="text-base font-bold text-slate-900 mb-1">
                    {item.title}
                  </h3>
                  <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                    {item.description}
                  </p>
                </div>
              ))}
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}