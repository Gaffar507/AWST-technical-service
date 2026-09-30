import Image from "next/image";

interface ServiceItem {
  id: string;
  title: string;
  description: string;
  iconBg: string;
  badgeColor: string;
  badgeText: string;
  image: string;
  features: string[];
}

const servicesData: ServiceItem[] = [
  {
    id: "painting",
    title: "Wall Painting & Decorating",
    description:
      "High-quality interior and exterior painting services for residential villas, apartments, and commercial offices in Dubai.",
    iconBg: "bg-[#0077B6]",
    badgeColor: "bg-[#0077B6]/10 text-[#0077B6] border-[#0077B6]/30",
    badgeText: "Most Requested",
    image:
      "https://images.unsplash.com/photo-1562259949-e8e7689d7828?q=80&w=800&auto=format&fit=crop",
    features: [
      "Villa & Apartment Painting",
      "Interior & Exterior Coating",
      "Wall Preparation & Crack Repair",
      "Decorative Wall Finishes",
    ],
  },
  {
    id: "maintenance",
    title: "General Maintenance",
    description:
      "Comprehensive facility and property maintenance solutions ensuring your home or business runs smooth and damage-free.",
    iconBg: "bg-[#2A9D8F]",
    badgeColor: "bg-[#2A9D8F]/10 text-[#2A9D8F] border-[#2A9D8F]/30",
    badgeText: "24/7 Support",
    image:
      "/images/maintenance.jpg",
    features: [
      "AC Maintenance & Cleaning",
      "Plumbing & Leak Repairs",
      "Electrical Inspections & Fixes",
      "Annual Maintenance Contracts",
    ],
  },
  {
    id: "tile-fixing",
    title: "Tile Fixing & Flooring",
    description:
      "Expert ceramic, porcelain, and marble tile installation with precision leveling for bathrooms, kitchens, and outdoor spaces.",
    iconBg: "bg-[#E76F51]",
    badgeColor: "bg-[#E76F51]/10 text-[#E76F51] border-[#E76F51]/30",
    badgeText: "Precision Finishing",
    image:
      "https://images.unsplash.com/photo-1584622650111-993a426fbf0a?q=80&w=800&auto=format&fit=crop",
    features: [
      "Floor & Wall Tile Fixing",
      "Marble & Granite Fitting",
      "Bathroom & Kitchen Renovation",
      "Outdoor Interlock & Grouting",
    ],
  },
  {
    id: "carpentry",
    title: "Wood Flooring & Carpentry",
    description:
      "Custom wooden flooring, door installation, wardrobe repairs, and specialized wood polishing services.",
    iconBg: "bg-[#9B5DE5]",
    badgeColor: "bg-[#9B5DE5]/10 text-[#9B5DE5] border-[#9B5DE5]/30",
    badgeText: "Custom Workmanship",
    image:
      "https://images.unsplash.com/photo-1538688525198-9b88f6f53126?q=80&w=800&auto=format&fit=crop",
    features: [
      "Parquet & Parquet Repair",
      "Door Lock & Hinge Fixing",
      "Custom Cabinets & Furniture",
      "Wood Polish & Varnish Coating",
    ],
  },
];

export default function Services() {
  return (
    <section id="services" className="py-20">
      <div className="container-custom">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="text-sm font-bold tracking-wider text-[#0077B6] uppercase mb-2 block">
            What We Do
          </span>
          <h2 className="heading-2 font-extrabold mb-4">
            Our Professional Technical Services
          </h2>
          <p className="text-slate-600 text-base sm:text-lg">
            Delivering top-tier maintenance, painting, tiling, and carpentry solutions across Dubai with guaranteed reliability and precision.
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {servicesData.map((service) => (
            <div
              key={service.id}
              className="bg-white rounded-2xl border border-slate-200 overflow-hidden shadow-sm hover:shadow-xl transition-all duration-300 flex flex-col group"
            >
              {/* Card Image Banner */}
              <div className="relative h-70 w-full overflow-hidden bg-slate-100">
                <Image
                  src={service.image}
                  alt={service.title}
                  fill
                  sizes="(max-width: 768px) 100vw, 50vw"
                  className="object-cover object-center group-hover:scale-105 transition-transform duration-500 ease-out"
                />
                <div className="absolute inset-0 bg-linear-to-t from-slate-950/70 via-transparent to-transparent" />
                
                {/* Floating Badge */}
                <span
                  className={`absolute top-4 right-4 text-xs font-semibold px-3 py-1 rounded-full border backdrop-blur-md bg-white/90 ${service.badgeColor}`}
                >
                  {service.badgeText}
                </span>
              </div>

              {/* Card Content */}
              <div className="p-6 sm:p-8 flex-1 flex flex-col justify-between">
                <div>
                  <h3 className="text-xl font-bold text-slate-900 mb-3 group-hover:text-[#0077B6] transition-colors">
                    {service.title}
                  </h3>
                  <p className="text-slate-600 text-sm sm:text-base mb-6 leading-relaxed">
                    {service.description}
                  </p>

                  {/* Bullet Points */}
                  <ul className="space-y-2.5 mb-8">
                    {service.features.map((feat, idx) => (
                      <li
                        key={idx}
                        className="flex items-center text-xs sm:text-sm text-slate-700 font-medium"
                      >
                        <span className="w-4 h-4 rounded-full bg-emerald-100 text-emerald-600 flex items-center justify-center mr-2.5 text-xs font-bold">
                          ✓
                        </span>
                        {feat}
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Card Direct WhatsApp Action */}
                <a
                  href={`https://wa.me/971547690757?text=Hi%20AWTS,%20I%20am%20interested%20in%20your%20${encodeURIComponent(
                    service.title
                  )}%20services.`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full py-3 px-4 rounded-xl border border-slate-300 hover:border-[#0077B6] text-slate-700 hover:text-[#0077B6] hover:bg-sky-50/50 font-semibold text-sm flex items-center justify-center gap-2 transition-all duration-200"
                >
                  <span>Book {service.title.split(" ")[0]} Service</span>
                  <svg
                    className="w-4 h-4"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M14 5l7 7m0 0l-7 7m7-7H3"
                    />
                  </svg>
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}