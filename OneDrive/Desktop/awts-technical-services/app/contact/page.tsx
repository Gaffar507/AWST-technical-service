"use client";

import Footer from "@/components/Footer";
import GlobalHero from "@/components/GlobalHero";
import { useState } from "react";

export default function ContactPage() {
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    service: "Wall Painting & Decorating",
    message: "",
  });

  const [loading, setLoading] = useState(false);
  const [status, setStatus] = useState<{
    type: "success" | "error" | null;
    msg: string;
  }>({ type: null, msg: "" });

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setStatus({ type: null, msg: "" });

    const submissionData = new FormData();
    submissionData.append("name", formData.name);
    submissionData.append("phone", formData.phone);
    submissionData.append("service", formData.service);
    submissionData.append("message", formData.message);
    
    // Web3Forms Access Key from .env.local
    const accessKey = process.env.NEXT_PUBLIC_WEB3FORMS_ACCESS_KEY || "";
    submissionData.append("access_key", accessKey);

    try {
      const response = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        body: submissionData,
      });

      const data = await response.json();

      if (data.success) {
        setStatus({
          type: "success",
          msg: "Thank you! Your request has been sent successfully to our team inbox.",
        });
        setFormData({
          name: "",
          phone: "",
          service: "Wall Painting & Decorating",
          message: "",
        });
      } else {
        setStatus({
          type: "error",
          msg: "Something went wrong. Please try again or WhatsApp us directly.",
        });
      }
    } catch (error) {
      setStatus({
        type: "error",
        msg: "Failed to send request. Please check your network connection.",
      });
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="bg-slate-50 text-slate-900 min-h-screen ">

      {/* Simple & Clean Header */}
         <GlobalHero title='Contact Us' subTitle='Get in Touch with A.W.T.S' desc="Have a project or maintenance request in Dubai? Reach out directly or send us a quick message."/>

      <div className="container-custom max-w-6xl pt-20">
      
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-start">
          
          {/* Left Column: Essential Contact Info */}
          <div className="lg:col-span-5 space-y-4">
            
            <div className="bg-white p-6 rounded-2xl border border-slate-200/80 shadow-xs">
              <p className="text-xs font-bold uppercase tracking-wider text-slate-400 mb-1">
                Direct Call
              </p>
              <a
                href="tel:+971569413314"
                className="text-lg font-bold text-slate-900 hover:text-[#0077B6] transition block"
              >
                +971 56 941 3314
              </a>
              <p className="text-xs text-slate-500 mt-1">Mon - Sat: 8:00 AM - 8:00 PM</p>
            </div>

            <div className="bg-white p-6 rounded-2xl border border-slate-200/80 shadow-xs">
              <p className="text-xs font-bold uppercase tracking-wider text-slate-400 mb-1">
                WhatsApp Chat
              </p>
              <a
                href="https://wa.me/971569413314?text=Hi%20AWTS,%20I%20have%20an%20inquiry%20about%20your%20technical%20services."
                target="_blank"
                rel="noopener noreferrer"
                className="text-lg font-bold text-emerald-600 hover:underline block"
              >
                Chat on WhatsApp →
              </a>
              <p className="text-xs text-slate-500 mt-1">Fast response for project quotes</p>
            </div>

            <div className="bg-white p-6 rounded-2xl border border-slate-200/80 shadow-xs">
              <p className="text-xs font-bold uppercase tracking-wider text-slate-400 mb-1">
                Location
              </p>
              <p className="text-base font-bold text-slate-900">Dubai, United Arab Emirates</p>
              <p className="text-xs text-slate-500 mt-1">
                Serving villas, apartments & commercial properties
              </p>
            </div>

          </div>

          {/* Right Column: Ultra Clean Form */}
          <div className="lg:col-span-7">
            <div className="bg-white p-8 sm:p-10 rounded-2xl border border-gray-500/40 shadow-xs mb-10">
              <h2 className="text-xl font-bold text-slate-900 mb-6">
                Send a Service Request
              </h2>

              {status.msg && (
                <div
                  className={`p-4 rounded-xl text-sm font-semibold mb-6 ${
                    status.type === "success"
                      ? "bg-emerald-50 text-emerald-700 border border-emerald-200"
                      : "bg-red-50 text-red-700 border border-red-200"
                  }`}
                >
                  {status.msg}
                </div>
              )}

              <form onSubmit={handleSubmit} className="space-y-4">
                <div>
                  <label className="block text-xs font-bold text-slate-700 uppercase mb-1.5">
                    Full Name *
                  </label>
                  <input
                    type="text"
                    required
                    placeholder="Your Name"
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    className="w-full px-4 py-3 rounded-xl border border-gray-300 focus:border-[#0077B6] focus:ring-1 focus:ring-[#0077B6] outline-none text-sm text-slate-900 transition bg-slate-50/50 focus:bg-white"
                  />
                </div>

                <div>
                  <label className="block text-xs font-bold text-slate-700 uppercase mb-1.5">
                    Phone / WhatsApp *
                  </label>
                  <input
                    type="tel"
                    required
                    placeholder="+971 -- --- ----"
                    value={formData.phone}
                    onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                    className="w-full px-4 py-3 rounded-xl border border-gray-300 focus:border-[#0077B6] focus:ring-1 focus:ring-[#0077B6] outline-none text-sm text-slate-900 transition bg-slate-50/50 focus:bg-white"
                  />
                </div>

                <div>
                  <label className="block text-xs font-bold text-slate-700 uppercase mb-1.5">
                    Select Service *
                  </label>
                  <select
                    value={formData.service}
                    onChange={(e) => setFormData({ ...formData, service: e.target.value })}
                    className="w-full px-4 py-3 rounded-xl border border-gray-300 focus:border-[#0077B6] focus:ring-1 focus:ring-[#0077B6] outline-none text-sm text-slate-900 transition bg-slate-50/50 focus:bg-white"
                  >
                    <option value="Wall Painting & Decorating">Wall Painting & Decorating</option>
                    <option value="General Property Maintenance">General Property Maintenance</option>
                    <option value="Tile Fixing & Interlock">Tile Fixing & Interlock</option>
                    <option value="Wood Flooring & Carpentry">Wood Flooring & Carpentry</option>
                  </select>
                </div>

                <div>
                  <label className="block text-xs font-bold text-slate-700 uppercase mb-1.5">
                    Message / Requirement
                  </label>
                  <textarea
                    rows={3}
                    placeholder="Brief description of the work needed..."
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    className="w-full px-4 py-3 rounded-xl border border-gray-300 focus:border-[#0077B6] focus:ring-1 focus:ring-[#0077B6] outline-none text-sm text-slate-900 transition bg-slate-50/50 focus:bg-white resize-none"
                  />
                </div>

                <button
                  type="submit"
                  disabled={loading}
                  className="w-full py-3.5 px-6 rounded-xl bg-[#0077B6] hover:bg-[#002D62] text-white font-semibold text-sm transition shadow-sm cursor-pointer mt-2 disabled:opacity-50"
                >
                  {loading ? "Sending..." : "Send Email Request"}
                </button>
              </form>
            </div>
          </div>

        </div>
      </div>

      <Footer/>
    </div>
  );
}