import Image from "next/image";

export default function Hero() {
  return (
    <section className="relative bg-linear-to-r from-slate-950 via-slate-950/90 to-slate-950/90 text-white overflow-hidden py-16 sm:py-24 lg:py-28">
      
      {/* Background Overlay */}
      <div className="absolute inset-0 z-0 opacity-25">
        <Image
          src="/images/hero-bg.webp"
          alt="Technical Services Background"
          fill
          priority
          className="object-cover object-center"
        />
        <div className="absolute inset-0 z-10 pointer-events-none" />
      </div>

      <div className="container-custom relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          
          {/* Left Column: Text & Call to Actions */}
          <div className="lg:col-span-7">
            {/* Badge */}
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#0077B6]/10 border border-[#0077B6]/40 text-[#00d12de6] font-semibold text-xs sm:text-sm mb-6">
              <span className="w-2.5 h-2.5 rounded-full bg-emerald-400 animate-ping" />
              <span>Trusted Technical & Contracting Services in Dubai</span>
            </div>

            {/* Main Title */}
            <h1 className="text-3xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight leading-tight text-white mb-6">
              Complete Home & Commercial{" "}
              <span className="text-[#0077B6]">Technical Services</span> in UAE
            </h1>

            {/* Subtitle */}
            <p className="text-slate-300 text-base sm:text-lg font-normal leading-relaxed mb-8 max-w-xl">
              Specialized in professional Painting Work, General Property Maintenance, Tile Fixing, and Wood Flooring & Carpentry across Dubai.
            </p>

            {/* Core Services Quick List */}
            <div className="flex flex-wrap gap-2.5 mb-10">
              {[
                "Painting Work",
                "General Maintenance",
                "Tile Fixing",
                "Wood Flooring & Carpentry",
              ].map((service, idx) => (
                <span
                  key={idx}
                  className="px-3 py-1.5 rounded-md bg-slate-800/90 border border-slate-700/80 text-slate-200 text-xs sm:text-sm font-medium"
                >
                  ✓ {service}
                </span>
              ))}
            </div>

            {/* Buttons */}
            <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-4">
              <a
                href="https://wa.me/971569413314?text=Hi%20AWTS%20Technical%20Services,%20I%20want%20to%20get%20a%20free%20quote..."
                target="_blank"
                rel="noopener noreferrer"
                className="btn-whatsapp py-3.5 px-6 text-base font-semibold justify-center shadow-lg hover:shadow-emerald-500/20"
              >
                <svg className="w-5 h-5 fill-current" viewBox="0 0 24 24">
                  <path d="M.057 24l1.687-6.163c-1.041-1.804-1.588-3.849-1.587-5.946.003-6.556 5.338-11.891 11.893-11.891 3.181.001 6.167 1.24 8.413 3.488 2.245 2.248 3.481 5.236 3.48 8.414-.003 6.557-5.338 11.892-11.893 11.892-1.99-.001-3.951-.5-5.688-1.448l-6.305 1.654zm6.597-3.807c1.676.995 3.276 1.591 5.392 1.592 5.448 0 9.886-4.434 9.889-9.885.002-5.462-4.415-9.89-9.881-9.892-5.452 0-9.887 4.434-9.889 9.884-.001 2.225.651 3.891 1.746 5.634l-.999 3.648 3.742-.981z" />
                </svg>
                <span>Get Your Discussion on WhatsApp</span>
              </a>

              <a
                href="tel:+971569413314"
                className="btn-primary py-3.5 px-6 text-base font-semibold justify-center bg-[#0077B6] hover:bg-[#002D62] transition duration-200"
              >
                <svg
                  className="w-5 h-5 mr-2"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"
                  />
                </svg>
                <span>Call +971 56 941 3314</span>
              </a>
            </div>
          </div>

          {/* Right Column: Active Working Painter Showcase Image */}
          <div className="lg:col-span-5 relative">
            <div className="relative mx-auto max-w-md lg:max-w-none rounded-2xl overflow-hidden  backdrop-blur-sm p-0">
              <div className="relative h-[380px] sm:h-[500px] w-full rounded-xl overflow-hidden">
                <Image
                  src="/images/painting-services-in-dubai.webp"
                  alt="Professional Painter at Work - Wall Painting Technical Service"
                  fill
                  sizes="(max-width: 1024px) 100vw, 50vw"
                  className="object-cover object-center transform hover:scale-105 transition duration-500 ease-out"
                />
                <div className="absolute inset-0 bg-linear-to-t from-slate-950/90 via-transparent to-transparent" />
                
                {/* Floating Bottom Info Badge */}
                <div className="absolute bottom-4 left-4 right-4 bg-slate-900/60 backdrop-blur-md border border-slate-100/10 p-3 rounded-lg ">
                  <div className="flex items-center gap-3">
                    <div className="w-6 h-6 rounded-full p-4 bg-[#016ba4] flex items-center justify-center text-white font-bold text-lg">
                      ✓
                    </div>
                    <div>
                      <p className="text-sm font-bold text-white">Expert On-Site Technicians</p>
                      <p className="text-xs text-slate-300">Precision Painting, Tiling & Maintenance Work</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}