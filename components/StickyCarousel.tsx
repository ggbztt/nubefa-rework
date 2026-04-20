"use client";

import { useState, useEffect, useRef } from 'react';

const scrollFeatures = [
  {
    id: "accuracy",
    tag: "PRECISIÓN",
    title: "Precisión en la que puedes confiar.",
    desc: "Nos aseguramos de que cada centavo cuadre. Nuestro motor de conciliación aprende de tus hábitos y categoriza cada gasto automáticamente para tu tranquilidad contable.",
    btnText: "Descubre la automatización"
  },
  {
    id: "invoicing",
    tag: "FACTURACIÓN",
    title: "Cobra más rápido con facturas inteligentes.",
    desc: "Personaliza tus comprobantes, envíalos por WhatsApp o email con un botón de pago integrado. Tus clientes pagan al instante y la factura se registra como cobrada sola.",
    btnText: "Emite tu primera factura"
  },
  {
    id: "insights",
    tag: "REPORTES",
    title: "Decisiones basadas en datos reales.",
    desc: "No esperes a fin de mes para saber si ganaste dinero. Nuestro panel de flujo de caja te muestra qué entra, qué sale y tu rentabilidad exacta en tiempo real.",
    btnText: "Ver panel de control"
  }
];

export default function StickyCarousel() {
  const [activeIndex, setActiveIndex] = useState(0);
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleScroll = () => {
      if (!containerRef.current) return;
      const sections = containerRef.current.querySelectorAll('.scroll-section');
      
      let newIndex = activeIndex;
      sections.forEach((section, index) => {
        const rect = section.getBoundingClientRect();
        // Si el elemento cruza la mitad de la pantalla, lo declaramos activo
        if (rect.top <= window.innerHeight / 2 && rect.bottom >= window.innerHeight / 2) {
          newIndex = index;
        }
      });
      
      if (newIndex !== activeIndex) {
        setActiveIndex(newIndex);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, [activeIndex]);

  return (
    <section className="w-full bg-white relative border-b border-qb-border" ref={containerRef}>
      <div className="max-w-[1400px] mx-auto px-6">
        <div className="flex flex-col lg:flex-row relative">
          
          {/* Lado Izquierdo: Textos que haces Scroll */}
          <div className="w-full lg:w-1/2 py-20 lg:py-32">
            <h2 className="text-4xl md:text-[3.25rem] font-extrabold text-[#1c1d1f] leading-[1.1] mb-12 tracking-tight">
              Flujos optimizados que le dan tranquilidad a tu negocio.
            </h2>
            
            <div className="flex flex-col">
              {scrollFeatures.map((feature, index) => (
                <div 
                  key={feature.id} 
                  className={`scroll-section transition-opacity duration-500 flex flex-col justify-center min-h-[40vh] lg:min-h-[60vh]
                    ${index === activeIndex ? 'opacity-100' : 'opacity-30'}
                  `}
                >
                  <span className="text-[11px] font-bold tracking-widest text-[#2ca01c] mb-4 uppercase">{feature.tag}</span>
                  <h3 className="text-3xl font-bold text-gray-900 mb-6">{feature.title}</h3>
                  <p className="text-xl text-gray-600 mb-8 leading-relaxed max-w-md">{feature.desc}</p>
                  <button className="self-start bg-transparent border-2 border-gray-900 hover:bg-gray-900 hover:text-white text-gray-900 font-bold py-3 px-8 rounded-full transition-colors text-base">
                    {feature.btnText}
                  </button>
                </div>
              ))}
            </div>
          </div>

          {/* Lado Derecho: Contenedor Sticky (Mockup cambiante) */}
          <div className="hidden lg:flex w-1/2 justify-end relative h-full">
             <div className="sticky top-0 h-screen w-full pl-12 flex items-center justify-center">
                
                {/* Cuadro Flotante tipo QuickBooks */}
                <div className="w-full max-w-[600px] aspect-[4/3] bg-[#f4f5f8] rounded-[2rem] border border-gray-200 shadow-2xl relative overflow-hidden flex flex-col items-center justify-center transition-all duration-700 ease-in-out transform">
                  
                  {/* Fondos dinámicos dependiendo del índice */}
                  <div className={`absolute inset-0 transition-opacity duration-700 ${activeIndex === 0 ? 'opacity-100 bg-[#e5f5e3]' : 'opacity-0'}`}></div>
                  <div className={`absolute inset-0 transition-opacity duration-700 ${activeIndex === 1 ? 'opacity-100 bg-[#e2f1fb]' : 'opacity-0'}`}></div>
                  <div className={`absolute inset-0 transition-opacity duration-700 ${activeIndex === 2 ? 'opacity-100 bg-[#fff5e2]' : 'opacity-0'}`}></div>

                  <div className="z-10 text-center px-10">
                    <div className="w-16 h-16 rounded-xl bg-white shadow flex items-center justify-center mx-auto mb-6">
                      <svg className="w-8 h-8 text-gray-600" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z"></path></svg>
                    </div>
                    <h4 className="text-xl font-bold text-gray-800 mb-2">Interfaz de {scrollFeatures[activeIndex].tag}</h4>
                    <p className="text-gray-600 text-sm">Aquí irá una captura de pantalla del Módulo de {scrollFeatures[activeIndex].title} interactuando mientras scrolleas.</p>
                  </div>
                </div>

             </div>
          </div>

        </div>
      </div>
    </section>
  );
}
