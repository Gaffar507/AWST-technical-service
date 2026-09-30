"use client";

import { useState } from "react";
import Image from "next/image";
import Footer from "@/components/Footer";
import GlobalHero from "@/components/GlobalHero";
import CtaBanner from "@/components/CTABanner";
import FAQ from "@/components/FAQ";

interface ServiceDetail {
  id: string;
  category: "painting" | "maintenance" | "tiling" | "carpentry";
  title: string;
  shortDesc: string;
  image: string;
  highlights: string[];
  pricingHint: string;
}

const servicesList: ServiceDetail[] = [
  {
    id: "painting-interior-exterior",
    category: "painting",
    title: "Interior & Exterior Wall Painting",
    shortDesc:
      "Premium wall painting, villa repaint, waterproofing coat, and crack restoration services across Dubai.",
    image:"/images/painting-services-in-dubai.webp",
      // "https://images.unsplash.com/photo-1589939705384-5185137a7f0f?q=80&w=1000&auto=format&fit=crop",
    highlights: [
      "Villa & Apartment Repainting",
      "Dust-free Sanding & Surface Prep",
      "Moisture-Resistant Outer Coating",
      "Jotun & Premium Paint Brands",
    ],
    pricingHint: "Free Inspection & Discussion",
  },
  {
    id: "general-property-maintenance",
    category: "maintenance",
    title: "Comprehensive Property Maintenance",
    shortDesc:
      "Complete home maintenance including AC servicing, leak repair, electrical checks, and general fixes.",
     image:"https://images.unsplash.com/photo-1581092160607-ee22621dd758?q=80&w=1000&auto=format&fit=crop",
    highlights: [
      "24/7 Emergency Repairs",
      "AC Filter Cleaning & Gas Refill",
      "Plumbing Leak Detection",
      "Annual Maintenance Contract (AMC)",
    ],
    pricingHint: "Affordable Package Rates",
  },
  {
    id: "tile-fixing-interlock",
    category: "tiling",
    title: "Tile Fixing, Grouting & Interlock",
    shortDesc:
      "Precision floor & wall tile fitting, bathroom renovation, and outdoor interlock installation.",
    image:"/images/tile-fixing.png",
      // "https://images.unsplash.com/photo-1584622650111-993a426fbf0a?q=80&w=1000&auto=format&fit=crop",
    highlights: [
      "Ceramic, Porcelain & Marble Fitting",
      "Bathroom & Kitchen Remodeling",
      "Waterproof Grouting & Sealing",
      "Outdoor Driveway Interlock",
    ],
    pricingHint: "Customized Per Sqft Rates",
  },
  {
    id: "wood-flooring-carpentry",
    category: "carpentry",
    title: "Wood Flooring & Custom Carpentry",
    shortDesc:
      "Parquet floor installation, door fixing, custom shelving, and wooden furniture polishing.",
    image:"/images/wood flooring.png",
      // "https://images.unsplash.com/photo-1538688525198-9b88f6f53126?q=80&w=1000&auto=format&fit=crop",
    highlights: [
      "Wooden Parquet Installation",
      "Door Lock & Hinge Maintenance",
      "Cabinet & Wardrobe Restoration",
      "Wood Polish & Varnish Finish",
    ],
    pricingHint: "Transparent Pricing",
  },
];

export default function ServicesPage() {
  const [activeFilter, setActiveFilter] = useState<string>("all");

  const filteredServices =
    activeFilter === "all"
      ? servicesList
      : servicesList.filter((item) => item.category === activeFilter);

  return (
    <div className="bg-slate-50 text-slate-900 min-h-screen">
      <GlobalHero
        title="A.W.T.S Technical Services"
        subTitle="Our Professional Services"
        desc="From wall painting to general maintenance, tiling, and carpentry, we deliver reliable technical services for residential and commercial properties in Dubai."
      />

      {/* Simple Static Filter & Title Section (No Sticky Hustle) */}
      <section className="py-6 sm:py-8 bg-white border-b border-slate-200">
        <div className="container-custom px-4 text-center">
          {/* Mobile Display: Clean Heading */}
          <div className="md:hidden mt-4">
            <h2 className="text-2xl font-bold text-slate-900 tracking-tight">
              All Professional Services
            </h2>
          </div>

          {/* Large Display: Simple Static Filter Tabs */}
          <div className="hidden md:flex items-center justify-center gap-3">
            {[
              { id: "all", label: "All Services" },
              { id: "painting", label: "Painting" },
              { id: "maintenance", label: "Maintenance" },
              { id: "tiling", label: "Tile & Flooring" },
              { id: "carpentry", label: "Carpentry" },
            ].map((tab) => (
              <button
                key={tab.id}
                onClick={() => setActiveFilter(tab.id)}
                className={`px-5 py-2.5 rounded-full text-sm font-semibold transition-all duration-200 cursor-pointer ${
                  activeFilter === tab.id
                    ? "bg-[#0077B6] text-white shadow-sm"
                    : "bg-slate-100 text-slate-600 hover:bg-slate-200 hover:text-slate-900"
                }`}
              >
                {tab.label}
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Services Grid Section */}
      <section className="py-8 sm:py-12">
        <div className="container-custom px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 sm:gap-8">
            {filteredServices.map((service) => (
              <div
                key={service.id}
                className="bg-white rounded-2xl border border-slate-200/80 overflow-hidden shadow-xs hover:shadow-xl transition-all duration-300 flex flex-col justify-between"
              >
                <div>
                  <div className="relative h-56 sm:h-64 w-full overflow-hidden bg-slate-100">
                    <Image
                      src={service.image}
                      alt={service.title}
                      fill
                      sizes="(max-width: 768px) 100vw, 50vw"
                      className="object-cover object-center hover:scale-105 transition-transform duration-500"
                    />
                    <div className="absolute inset-0 bg-linear-to-t from-slate-950/70 via-transparent to-transparent" />
                    <span className="absolute bottom-4 left-4 text-xs font-semibold px-3 py-1 rounded-full bg-white/90 backdrop-blur-md text-[#0077B6] shadow-xs">
                      {service.pricingHint}
                    </span>
                  </div>

                  <div className="p-5 sm:p-8">
                    <h3 className="text-xl sm:text-2xl font-bold text-slate-900 mb-2.5">
                      {service.title}
                    </h3>
                    <p className="text-slate-600 text-sm sm:text-base leading-relaxed mb-6">
                      {service.shortDesc}
                    </p>

                    <h4 className="text-xs font-bold uppercase tracking-wider text-slate-400 mb-3">
                      Key Highlights
                    </h4>
                    <ul className="space-y-2.5 mb-6 sm:mb-8">
                      {service.highlights.map((feat, idx) => (
                        <li
                          key={idx}
                          className="flex items-center text-xs sm:text-sm text-slate-700 font-medium"
                        >
                          <span className="w-4 h-4 rounded-full bg-emerald-100 text-emerald-600 flex items-center justify-center mr-2.5 text-xs font-bold shrink-0">
                            ✓
                          </span>
                          {feat}
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>

                <div className="p-5 sm:p-8 pt-0">
                  <a
                    href={`https://wa.me/971569413314?text=Hi%20AWTS,%20I%20am%20interested%20in%20your%20${encodeURIComponent(
                      service.title
                    )}%20service.%20Please%20provide%20your%20full%20details.`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-full btn-whatsapp py-3 sm:py-3.5 px-6 font-semibold justify-center shadow-md hover:shadow-emerald-500/20 text-xs sm:text-sm"
                  >
                    <span>Request a free discussion on WhatsApp</span>
                  </a>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ Section */}
        <FAQ/>

      {/* Quick Contact CTA Banner */}
        <CtaBanner title="Need Custom Contracting or Maintenance in Dubai?" description="Call us directly or message on WhatsApp to get on-site estimation." />

      {/* Footer Section */}
        <Footer />
    </div>
  );
}