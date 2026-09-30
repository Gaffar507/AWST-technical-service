import CtaBanner from "@/components/CTABanner";
import Footer from "@/components/Footer";
import GlobalHero from "@/components/GlobalHero";
import Image from "next/image";
import { Target, Gem, Clock, PhoneCall } from "lucide-react";
import FAQ from "@/components/FAQ";

const stats = [
  { label: "Client Satisfaction", value: "100%" },
  { label: "Core Services", value: "4 Major Divisions" },
  { label: "Response Time", value: "Under 1 Hour" },
  { label: "Service Coverage", value: "All Across Dubai" },
];

const values = [
  {
    title: "Precision Workmanship",
    desc: "We focus on clean finishes, accurate measurements, and long-lasting quality materials for every project.",
    icon: Target,
  },
  {
    title: "Transparent & Fair Pricing",
    desc: "No hidden charges or unexpected surprises. Clear quotes provided upfront before any work begins.",
    icon: Gem,
  },
  {
    title: "Punctual & Reliable",
    desc: "We respect your schedule. Our technicians arrive on time and complete projects within agreed deadlines.",
    icon: Clock,
  },
  {
    title: "Dedicated Client Support",
    desc: "Direct communication via WhatsApp and direct call for real-time updates and fast assistance.",
    icon: PhoneCall,
  },
];

export default function AboutPage() {
  return (
    <div className="bg-slate-50 text-slate-900 min-h-screen">

      {/* Hero Banner */}
      <GlobalHero 
        title='About Alwadi Almudea' 
        subTitle='Your Trusted Technical Services Partner in Dubai' 
        desc="Delivering high-quality painting, property maintenance, tile fixing, and carpentry solutions tailored to residential villas, apartments, and commercial spaces."
      />

      {/* Main Story & Image Section */}
      <section className="py-20 bg-white">
        <div className="container-custom">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            
{/* Left Column: Image */}
<div className="lg:col-span-5 relative w-full">
  <div className="relative rounded overflow-hidden shadow-2xl border border-slate-200 h-[300px] sm:h-[400px] lg:h-[480px] bg-slate-100">
    <Image
      src="/images/commited.png"
      alt="A.W.T.S Professional Technical Work"
      fill
      sizes="(max-width: 1024px) 100vw, 40vw"
      className="object-cover object-center"
      priority
    />

    {/* Gradient Overlay */}
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
                      Professional Contracting & Maintenance in UAE
                    </p>
                  </div>
                </div>
              </div>
  </div>
</div>

            {/* Right Column: Story */}
            <div className="lg:col-span-7">
              <span className="text-sm font-bold tracking-wider text-[#0077B6] uppercase mb-2 block">
                Who We Are
              </span>
              <h2 className="heading-2 mb-6">
                Commitment to Quality, Reliability & Excellence
              </h2>
              <p className="text-slate-600 text-base sm:text-lg leading-relaxed mb-6">
                Alwadi Almudea Technical Services (A.W.T.S) was established to provide Dubai property owners with dependably high-standard maintenance and contracting services. Whether it's a complete villa repainting, delicate tile restoration, custom wood flooring, or everyday general fixes, our skilled team handles each task with extreme precision.
              </p>
              <p className="text-slate-600 text-base sm:text-lg leading-relaxed mb-8">
                We understand that your property is a major investment. That’s why we prioritize clean execution, durable materials, and direct communication every step of the way.
              </p>

              {/* Stats Grid */}
              <div className="grid grid-cols-2 gap-4 sm:gap-8 pt-6 border-t border-slate-200">
                {stats.map((st, idx) => (
                  <div key={idx}>
                    <p className="text-xl sm:text-2xl font-bold text-[#0077B6]">{st.value}</p>
                    <p className="text-xs text-slate-500 font-medium mt-1">{st.label}</p>
                  </div>
                ))}
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* Core Values Section */}
      <section className="py-20 bg-slate-50 border-t border-slate-200">
        <div className="container-custom">
          <div className="text-center max-w-2xl mx-auto mb-14">
            <span className="text-sm font-bold tracking-wider text-[#0077B6] uppercase mb-2 block">
              Our Principles
            </span>
            <h2 className="heading-2">Why Property Owners Trust A.W.T.S</h2>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {values.map((v, idx) => {
              const IconComponent = v.icon;

              return (
                <div
                  key={idx}
                  className="bg-white p-6 rounded-2xl border border-slate-200 shadow-sm hover:shadow-md transition duration-200"
                >
                  <div className="w-8 h-8 rounded-lg text-[#0063cd] flex items-center justify-center mb-4">
                    <IconComponent className="w-6 h-6 sm:w-7 sm:h-7" />
                  </div>
                  <h3 className="text-lg font-bold text-slate-900 mb-2">{v.title}</h3>
                  <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">{v.desc}</p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* FAQ Section */} 
      <FAQ/>

      {/* Quick Contact CTA Banner */}
      <CtaBanner 
        title="Need Expert Maintenance or Painting in Dubai?" 
        description="Get in touch with our technical team today for a free on-site consultation and instant price quote." 
      />
      
      {/* Footer Section */}
      <Footer />
    </div>
  );
}