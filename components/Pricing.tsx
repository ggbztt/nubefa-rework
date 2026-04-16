import Link from 'next/link';

const plans = [
  { name: "Gratis", price: "0", limit: "1 Local / 1 Usuario", highlighted: false },
  { name: "Local", price: "39", limit: "1 Local / 2 Usuarios", highlighted: false },
  { name: "Duo Local", price: "69", limit: "2 Locales / 4 Usuarios", highlighted: true },
  { name: "Tri Local", price: "99", limit: "3 Locales / 6 Usuarios", highlighted: false }
];

export default function Pricing() {
  return (
    <section id="pricing" className="w-full bg-[#f4f5f8] py-24 pb-32">
      <div className="max-w-[1400px] mx-auto px-6">
        
        {/* Cabecera Pricing */}
        <h2 className="text-4xl md:text-[3.25rem] font-extrabold text-center mb-6 tracking-tight text-qb-text-main">
          Planes que se ajustan a tu negocio
        </h2>
        <p className="text-xl text-qb-text-muted text-center mb-16 max-w-2xl mx-auto">
          Todos los planes incluyen Facturación Electrónica ilimitada y acceso a todos los módulos.
        </p>
        
        {/* Grilla tabular */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 items-end relative">
          
          {/* Falso Decorativo para enmarcar el plan popular */}
          <div className="absolute hidden lg:block inset-0 m-auto w-full max-w-[1200px] h-[700px] bg-gradient-to-t from-gray-100 to-transparent pointer-events-none rounded-[3rem]"></div>

          {plans.map((plan, i) => (
            <div 
              key={i} 
              className={`relative flex flex-col bg-white rounded-[2rem] p-8 md:p-10 transition-all duration-300 z-10
                ${plan.highlighted 
                  ? 'border-2 border-[#2ca01c] shadow-2xl scale-105 translate-y-[-1rem]' 
                  : 'border border-gray-200 shadow-md hover:border-[#2ca01c] hover:shadow-xl'}
              `}
            >
              {/* Badge Recomendado */}
              {plan.highlighted && (
                <div className="absolute -top-4 left-1/2 -translate-x-1/2 bg-[#2ca01c] text-white px-4 py-1.5 rounded-full text-[11px] font-bold tracking-widest uppercase shadow-md">
                  MÁS POPULAR
                </div>
              )}

              {/* Título Plan */}
              <h3 className="text-2xl font-bold text-gray-800 mb-2">{plan.name}</h3>
              
              {/* Bloque Precio */}
              <div className="flex items-start gap-1 mb-2">
                 <span className="text-xl font-bold text-gray-800 mt-2">S/.</span>
                 <span className="text-6xl font-black text-gray-900 tracking-tighter">{plan.price}</span>
                 <span className="text-sm text-gray-500 font-medium mt-auto mb-2">/mes</span>
              </div>

              {/* Limites grises QuickBooks style */}
              <div className="bg-[#f4f5f8] px-4 py-2 rounded-xl text-center font-semibold text-sm text-gray-700 mt-6 mb-8">
                {plan.limit}
              </div>

              {/* Checklist */}
              <ul className="space-y-4 mb-10 flex-1">
                 <li className="flex items-center gap-3 text-sm font-medium text-gray-700">
                   <svg className="w-5 h-5 text-[#2ca01c] shrink-0" fill="currentColor" viewBox="0 0 20 20"><path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd"/></svg>
                   Facturas Ilimitadas
                 </li>
                 <li className="flex items-center gap-3 text-sm font-medium text-gray-700">
                   <svg className="w-5 h-5 text-[#2ca01c] shrink-0" fill="currentColor" viewBox="0 0 20 20"><path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd"/></svg>
                   Control de Inventarios
                 </li>
                 <li className="flex items-center gap-3 text-sm font-medium text-gray-700">
                   <svg className="w-5 h-5 text-[#2ca01c] shrink-0" fill="currentColor" viewBox="0 0 20 20"><path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd"/></svg>
                   Módulo Caja y POS
                 </li>
              </ul>

              {/* Boton CTA */}
              <Link 
                href="/register" 
                className={`w-full text-center py-3.5 px-6 rounded-full font-bold text-base transition-all hover:-translate-y-1 ${
                  plan.highlighted 
                    ? 'bg-[#2ca01c] text-white hover:bg-[#108000] shadow-lg shadow-[#2ca01c]/30' 
                    : 'bg-white text-gray-800 border-2 border-gray-200 hover:border-gray-800'
                }`}
              >
                 Comprar ahora
              </Link>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
