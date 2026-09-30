"use client";

import { useState } from "react";

export default function ContactForm() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
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
    submissionData.append("email", formData.email);
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
          email: "",
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
    <div className="bg-white p-8 sm:p-10 rounded-2xl border border-gray-500/40 shadow-xs mb-10">
      <h2 className="text-xl font-bold text-slate-900 mb-6">
        Send a Service Request
      </h2>

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
            Email Address (Optional)
          </label>
          <input
            type="email"
            placeholder="yourname@example.com"
            value={formData.email}
            onChange={(e) => setFormData({ ...formData, email: e.target.value })}
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
            <option value="Wall Painting & Decorating">
              Wall Painting & Decorating
            </option>
            <option value="General Property Maintenance">
              General Property Maintenance
            </option>
            <option value="Tile Fixing & Interlock">
              Tile Fixing & Interlock
            </option>
            <option value="Wood Flooring & Carpentry">
              Wood Flooring & Carpentry
            </option>
          </select>
        </div>

        <div>
          <label className="block text-xs font-bold text-slate-700 uppercase mb-1.5">
            Message / Requirement (Optional)
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

        {status.msg && (
        <div
          className={`p-4 rounded-xl text-sm font-semibold mb-4 ${
            status.type === "success"
              ? "bg-emerald-50 text-emerald-700 border border-emerald-200"
              : "bg-red-50 text-red-700 border border-red-200"
          }`}
        >
          {status.msg}
        </div>
      )}
      </form>
    </div>
  );
}