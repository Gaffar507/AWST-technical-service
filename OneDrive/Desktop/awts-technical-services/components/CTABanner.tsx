
export default function CtaBanner({title, description}: {title: string, description: string}) {
  return (
    <section className="py-16 bg-slate-950/90 text-white relative overflow-hidden border-t border-slate-500/30">
      
      
      {/* Subtle Background Accent Pattern */}
      <div className="absolute inset-0 opacity-10 bg-[radial-gradient(#0077B6_1px,transparent_1px)] bg-size-[16px_16px]" />

      <div className="container-custom relative z-10 text-center max-w-4xl mx-auto">
        <h2 className="heading-2 mb-6">
          {title}
        </h2>
        <p className="text-gray-300 text-base mb-8 max-w-2xl mx-auto">
          {description}
        </p>

        <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
          <a
            href="https://wa.me/971547690757?text=Hi%20AWTS,%20I%20want%20to%20get%20a%20quick%20discussion%20for%20my%20property."
            target="_blank"
            rel="noopener noreferrer"
            className="btn-whatsapp py-3 px-1 sm:py-3.5 sm:px-6 text-base font-semibold w-full sm:w-auto hover:shadow-emerald-500/20"
          >
            Chat on WhatsApp
          </a>

          <a
            href="tel:+971547690757"
            className="btn-primary py-3 px-1 sm:py-3.5 sm:px-6 text-base font-semibold bg-[#0077B6] hover:bg-sky-600 transition duration-200 w-full sm:w-auto"
          >
            Call +971 54 769 0757
          </a>
        </div>
      </div>
    </section>
  );
}