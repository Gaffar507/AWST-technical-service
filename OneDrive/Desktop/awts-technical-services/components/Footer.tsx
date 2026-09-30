import { MapPin, Phone, MessageCircle } from "lucide-react";
import Image from "next/image";

export default function Footer() {
  return (
    <footer className="bg-slate-950 text-slate-400 pt-16 pb-12 border-t border-slate-800">
      <div className="container-custom">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 mb-12">
          
          {/* Col 1: Brand & About */}
          <div>
            <div>
                <div className="mb-1 flex items-start justify-start">
                <Image
                  src="/awts-logo.jpeg"
                  alt="A.W.T.S Logo"
                  width={100}
                  height={100}
                  className="mb-4 m-0 rounded-[5px] h-auto w-auto"
                />
                </div>
            </div>
            
            <p className="text-sm text-slate-400 leading-relaxed mb-6">
              Alwadi Almudea Technical Services (A.W.T.S) offers top-tier painting, property maintenance, tiling, and carpentry work across Dubai, UAE.
            </p>
            <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-slate-900 border border-slate-800 text-xs text-emerald-400 font-medium">
              <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
              <span>Available in Dubai</span>
            </div>
          </div>

          {/* Col 2: Core Services */}
          <div>
            <h4 className="text-white text-base font-semibold mb-4">
              Our Services
            </h4>
            <ul className="space-y-2.5 text-sm">
              <li>
                <a href="#services" className="hover:text-white transition-colors">
                  Wall Painting & Decorating
                </a>
              </li>
              <li>
                <a href="#services" className="hover:text-white transition-colors">
                  General Property Maintenance
                </a>
              </li>
              <li>
                <a href="#services" className="hover:text-white transition-colors">
                  Tile Fixing & Interlock
                </a>
              </li>
              <li>
                <a href="#services" className="hover:text-white transition-colors">
                  Wood Flooring & Carpentry
                </a>
              </li>
            </ul>
          </div>

          {/* Col 3: Business Hours */}
          <div>
            <h4 className="text-white text-base font-semibold mb-4">
              Service Hours
            </h4>
            <ul className="space-y-2 text-sm text-slate-400">
              <li className="flex justify-between">
                <span>Monday - Saturday:</span>
                <span className="text-slate-300">8:00 AM - 8:00 PM</span>
              </li>
              <li className="flex justify-between">
                <span>Sunday:</span>
                <span className="text-slate-300">Emergency Support</span>
              </li>
              <li className="pt-2 text-xs text-slate-500">
                WhatsApp responses available 24/7
              </li>
            </ul>
          </div>

          {/* Col 4: Contact Info */}
          <div>
            <h4 className="text-white text-base font-semibold mb-4">
              Get in Touch
            </h4>

<div className="space-y-3 text-sm">
  <p className="flex items-start gap-2.5">
    <MapPin className="w-4 h-4 text-[#0077B6] shrink-0 mt-0.5" />
    <span>P.O. Box : 185894, Ayal Nasir, Deira, Dubai - U.A.E</span>
  </p>
  
  <p className="flex items-center gap-2.5">
    <Phone className="w-4 h-4 text-[#0077B6] shrink-0" />
    <a href="tel:+971547690757" className="hover:text-white transition-colors">
      +971 54 769 0757
    </a>
  </p>
  
  <p className="flex items-center gap-2.5">
    <MessageCircle className="w-4 h-4 text-[#0077B6] shrink-0" />
    
    <a
      href="https://wa.me/971547690757?text=Hi%20AWTS%20Technical%20Services,%20I%20want%20to%20get%20a%20quick%20discussion..."
      target="_blank"
      rel="noopener noreferrer"
      className="hover:text-emerald-400 transition-colors"
    >
      WhatsApp Quick Quote
    </a>
  </p>
</div>

          </div>

        </div>

        {/* Bottom Copyright Line */}
        <div className="pt-8 border-t border-slate-900 text-center text-xs text-slate-500 flex flex-col sm:flex-row items-center justify-between gap-4">
          <p>© {new Date().getFullYear()} Alwadi Almudea Technical Services. All rights reserved.</p>
          <p className="text-slate-600">Built for Dubai Property Owners</p>
        </div>
      </div>
    </footer>
  );
}