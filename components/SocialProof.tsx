"use client";

const testimonials = [
  {
    name: "Carlos Mendoza",
    role: "Gerente General, Distribuidora Lima Norte",
    quote: "Nubefa nos ahorró más de 12 horas semanales en cuadres contables. Ya no necesitamos llevar hojas de Excel por separado.",
    initials: "CM"
  },
  {
    name: "Andrea Quispe",
    role: "Contadora, Estudio AQ Asociados",
    quote: "La facturación electrónica ilimitada y la integración con SUNAT fueron exactamente lo que necesitábamos para escalar.",
    initials: "AQ"
  },
  {
    name: "Roberto Vargas",
    role: "Fundador, Ferretería El Constructor",
    quote: "Pasamos de perder inventario a tener control total de 3 locales desde un solo panel. El soporte es increíble.",
    initials: "RV"
  }
];

const integrations = [
  "SUNAT", "Izipay", "Interbank", "BCP", "BBVA", "PayPal", "Yape", "Plin", "Visa", "Mastercard", "Niubiz", "Google Sheets"
];

export default function SocialProof() {
  return (
    <section className="w-full bg-white py-24 overflow-hidden">
      <div className="max-w-[1400px] mx-auto px-6">

        {/* Encabezado */}
        <h2 className="text-4xl md:text-[3.25rem] font-extrabold text-center mb-6 tracking-tight text-qb-text-main">
          Miles de PyMEs ya confían en Nubefa
        </h2>
        <p className="text-xl text-qb-text-muted text-center mb-16 max-w-2xl mx-auto">
          Desde ferreterías hasta estudios contables, nuestros clientes simplifican su operación día a día.
        </p>

        {/* Grid de Testimonios */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-24">
          {testimonials.map((t, i) => (
            <div
              key={i}
              className="bg-[#f4f5f8] rounded-3xl p-8 flex flex-col justify-between border border-transparent hover:border-[#2ca01c]/30 transition-all duration-300 hover:shadow-lg"
            >
              {/* Estrellas */}
              <div className="flex gap-1 mb-5 text-yellow-400 text-lg">
                {[...Array(5)].map((_, j) => (
                  <svg key={j} className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
                    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                  </svg>
                ))}
              </div>

              {/* Cita */}
              <p className="text-[#393a3d] text-[15px] leading-relaxed mb-8 flex-1">
                &ldquo;{t.quote}&rdquo;
              </p>

              {/* Persona */}
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 rounded-full bg-gray-300 flex items-center justify-center text-white font-bold text-sm shrink-0">
                  {t.initials}
                </div>
                <div>
                  <div className="font-bold text-sm text-gray-900">{t.name}</div>
                  <div className="text-xs text-gray-500">{t.role}</div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Banda de Integraciones */}
        <div className="text-center mb-10">
          <h3 className="text-2xl font-bold text-qb-text-main mb-2">Conecta con tus herramientas favoritas</h3>
          <p className="text-qb-text-muted text-sm">Más de 10 integraciones disponibles y creciendo.</p>
        </div>
      </div>

      {/* Marquesina Infinita (sin JS, puro CSS) */}
      <div className="relative w-full">
        {/* Gradientes laterales de desvanecimiento */}
        <div className="pointer-events-none absolute inset-y-0 left-0 w-32 bg-gradient-to-r from-white to-transparent z-10"></div>
        <div className="pointer-events-none absolute inset-y-0 right-0 w-32 bg-gradient-to-l from-white to-transparent z-10"></div>

        <div className="flex gap-8 animate-marquee">
          {/* Duplicamos para simular loop infinito */}
          {[...integrations, ...integrations].map((name, i) => (
            <div
              key={i}
              className="shrink-0 w-44 h-20 bg-[#f4f5f8] border border-gray-200 rounded-2xl flex items-center justify-center hover:border-[#2ca01c]/40 transition-colors"
            >
              <span className="font-bold text-gray-500 tracking-wider text-sm uppercase">{name}</span>
            </div>
          ))}
        </div>
      </div>

      {/* Keyframes para el Scroll Infinito */}
      <style>{`
        @keyframes marquee {
          0% { transform: translateX(0); }
          100% { transform: translateX(-50%); }
        }
        .animate-marquee {
          animation: marquee 30s linear infinite;
          width: max-content;
        }
      `}</style>
    </section>
  );
}
