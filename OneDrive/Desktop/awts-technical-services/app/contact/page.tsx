import ContactForm from "@/components/ContactForm";
import Footer from "@/components/Footer";
import GlobalHero from "@/components/GlobalHero";

export default function ContactPage() {
  return (
    <div className="bg-slate-50 text-slate-900 min-h-screen">
      {/* Header */}
      <GlobalHero
        title="Contact Us"
        subTitle="Get in Touch with A.W.T.S"
        desc="Have a project or maintenance request in Dubai? Reach out directly or send us a quick message."
      />

      <div className="container-custom max-w-6xl pt-20">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-start">
          {/* Left Column: Essential Contact Info */}
          <div className="lg:col-span-5 space-y-4">
            <div className="bg-white p-6 rounded-2xl border border-slate-200/80 shadow-xs">
              <p className="text-xs font-bold uppercase tracking-wider text-slate-400 mb-1">
                Direct Call
              </p>
              <a
                href="tel:+971547690757"
                className="text-lg font-bold text-slate-900 hover:text-[#0077B6] transition block"
              >
                +971 54 769 0757
              </a>
              <p className="text-xs text-slate-500 mt-1">
                Mon - Sat: 8:00 AM - 8:00 PM
              </p>
            </div>

            <div className="bg-white p-6 rounded-2xl border border-slate-200/80 shadow-xs">
              <p className="text-xs font-bold uppercase tracking-wider text-slate-400 mb-1">
                WhatsApp Chat
              </p>
              <a
                href="https://wa.me/971547690757?text=Hi%20AWTS,%20I%20have%20an%20inquiry%20about%20your%20technical%20services."
                target="_blank"
                rel="noopener noreferrer"
                className="text-lg font-bold text-emerald-600 hover:underline block"
              >
                Chat on WhatsApp →
              </a>
              <p className="text-xs text-slate-500 mt-1">
                Fast response for project quotes
              </p>
            </div>

            <div className="bg-white p-6 rounded-2xl border border-slate-200/80 shadow-xs">
              <p className="text-xs font-bold uppercase tracking-wider text-slate-400 mb-1">
                Location
              </p>
              <p className="text-base font-bold text-slate-900">
                Dubai, United Arab Emirates
              </p>
              <p className="text-xs text-slate-500 mt-1">
                Serving villas, apartments & commercial properties
              </p>
            </div>
          </div>

          {/* Right Column: Refactored Form Component */}
          <div className="lg:col-span-7">
            <ContactForm />
          </div>
        </div>
      </div>

      <Footer />
    </div>
  );
}