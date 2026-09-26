"use client";

import { useState } from "react";

const faqs = [
  {
    question: "Which areas in Dubai do you provide services?",
    answer:
      "We cover all major locations across Dubai, including Downtown, Dubai Marina, Business Bay, JLT, Palm Jumeirah, Arabian Ranches, JVC, and surrounding areas.",
  },
  {
    question: "How do I get an instant quote for my project?",
    answer:
      "Simply click the 'Chat on WhatsApp' button or call us directly at +971 56 941 3314. You can send photos or videos of the issue, and we'll provide an estimated quote right away.",
  },
  {
    question: "Do you offer emergency property maintenance support?",
    answer:
      "Yes, our technical team is active and available for urgent maintenance, tile repairs, and painting work across residential and commercial units.",
  },
  {
    question: "Are your painting and tiling materials guaranteed?",
    answer:
      "Absolutely. We only use high-grade paints, adhesives, and materials suited for the UAE climate, ensuring durable and long-lasting quality.",
  },
];

export default function Faq() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const toggleFaq = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section className="py-20 bg-slate-50 text-slate-900 border-t border-slate-200">
      <div className="container-custom max-w-4xl">
        <div className="text-center mb-14">
          <span className="text-sm font-bold tracking-wider text-[#0077B6] uppercase mb-2 block">
            Got Questions?
          </span>
          <h2 className="heading-2">Frequently Asked Questions</h2>
        </div>

        <div className="space-y-4">
          {faqs.map((faq, idx) => (
            <div
              key={idx}
              className="bg-white rounded-xl border border-slate-200 overflow-hidden shadow-sm transition"
            >
              <button
                onClick={() => toggleFaq(idx)}
                className="w-full text-left p-5 sm:p-6 font-bold text-base sm:text-lg flex items-center justify-between gap-4 text-slate-900 hover:text-[#0077B6] transition"
              >
                <span>{faq.question}</span>
                <span className="text-xl font-bold text-[#0077B6]">
                  {openIndex === idx ? "−" : "+"}
                </span>
              </button>

              {openIndex === idx && (
                <div className="px-5 pb-6 sm:px-6 text-slate-600 text-sm sm:text-base leading-relaxed border-t border-slate-100 pt-4">
                  {faq.answer}
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}