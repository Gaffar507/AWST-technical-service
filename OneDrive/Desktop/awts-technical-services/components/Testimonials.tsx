const reviews = [
  {
    name: "Tariq Al-Mansoor",
    role: "Villa Owner, Downtown Dubai",
    comment:
      "AWTS completed full interior painting for our 4-bedroom villa. Highly punctual, clean work, and zero mess left behind. Exceptional technical team!",
    rating: 5,
  },
  {
    name: "Sarah Jenkins",
    role: "Apartment Tenant, Dubai Marina",
    comment:
      "Quick response on WhatsApp! Their tiler came on the same day and replaced broken bathroom tiles seamlessly. Very fair pricing.",
    rating: 5,
  },
  {
    name: "Mohammad Imran",
    role: "Property Manager, Business Bay",
    comment:
      "We rely on AWTS for ongoing general office maintenance and woodwork. Professional, reliable, and straightforward contracting team.",
    rating: 5,
  },
];

export default function Testimonials() {
  return (
    <section className="py-20 text-black">
      <div className="container-custom">
        <div className="text-center max-w-2xl mx-auto mb-14">
          <span className="text-sm font-bold tracking-wider text-[#0077B6] uppercase mb-2 block">
            Client Feedback
          </span>
          <h2 className="heading-2">
            Trusted by Property Owners Across Dubai
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {reviews.map((rev, idx) => (
            <div
              key={idx}
              className="bg-gray-300/60 border border-slate-400/40 p-6 sm:p-8 rounded-2xl flex flex-col justify-between"
            >
              <div>
                <div className="flex items-center gap-1 text-amber-400 mb-4">
                  {[...Array(rev.rating)].map((_, i) => (
                    <span key={i}>★</span>
                  ))}
                </div>
                <p className="text-slate-800 text-sm sm:text-base leading-relaxed mb-6 italic">
                  "{rev.comment}"
                </p>
              </div>

              <div className="pt-4 border-t border-slate-700/50">
                <p className="text-black font-bold text-base">{rev.name}</p>
                <p className="text-slate-600 text-xs">{rev.role}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}