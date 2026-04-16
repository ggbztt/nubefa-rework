export default function NubefaAssist() {
  return (
    <section className="w-full bg-[#000000] py-24 relative overflow-hidden text-white">
      {/* Círculos Radiales de Iluminación Ambiental (Estética Intuit) */}
      <div className="absolute -top-32 -right-32 w-[600px] h-[600px] bg-[#0077c5] opacity-20 blur-[130px] rounded-full pointer-events-none"></div>
      <div className="absolute -bottom-32 -left-32 w-[500px] h-[500px] bg-[#2ca01c] opacity-[0.15] blur-[120px] rounded-full pointer-events-none"></div>
      
      <div className="max-w-[1400px] mx-auto px-6 grid grid-cols-1 lg:grid-cols-2 gap-16 items-center relative z-10">
        
        {/* Copywriting (Lado Izquierdo) */}
        <div className="max-w-xl animate-fade-in-up">
          <div className="flex items-center gap-2 mb-6 text-[#0077c5] font-bold tracking-widest text-[13px] uppercase">
            <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20"><path d="M10 1l2.5 6 6 2.5-6 2.5L10 18l-2.5-6L1.5 9.5 7.5 7z"/></svg>
            NUEVO: NUBEFA ASSIST
          </div>
          <h2 className="text-5xl md:text-[3.5rem] font-extrabold mb-6 leading-[1.1] tracking-tight">
            Tu carga de trabajo, <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#0077c5] via-[#4db8ff] to-[#2ca01c]">
              completamente descargada.
            </span>
          </h2>
          <p className="text-xl text-gray-400 mb-10 leading-relaxed font-normal">
            Nuestra funcionalidad de automatización escanea tus plataformas, extrae y concilia facturas, y categoriza gastos sin que tú presiones una tecla. Tú simplemente revisas.
          </p>
          <button className="bg-white text-black font-semibold py-4 px-10 rounded-full hover:bg-gray-200 transition-all hover:scale-105 text-lg">
            Descubre cómo funciona
          </button>
        </div>

        {/* Mockup Levitante de "Aplicación Oscura" (Lado Derecho) */}
        <div className="relative w-full flex justify-end animate-fade-in-up" style={{animationDelay: '0.3s'}}>
          <div className="w-full max-w-[550px] bg-[#1d1e20] border border-gray-700/50 rounded-3xl shadow-[0_20px_50px_rgba(0,119,197,0.15)] p-0 relative overflow-hidden">
            
            {/* Header Falso del Panel */}
            <div className="px-6 py-5 border-b border-gray-800 bg-[#242528] flex items-center justify-between">
              <h3 className="text-xl font-bold flex items-center gap-3">
                <svg className="w-5 h-5 text-[#0077c5]" fill="currentColor" viewBox="0 0 20 20"><path d="M10 1l2.5 6 6 2.5-6 2.5L10 18l-2.5-6L1.5 9.5 7.5 7z"/></svg>
                Conciliación Bancaria Automática
              </h3>
              <div className="w-8 h-8 rounded-full bg-gray-700"></div>
            </div>

            {/* Falsas Filas de Datos */}
            <div className="p-6 space-y-4">
              
              {/* Fila Standard */}
              <div className="flex items-center justify-between border-b border-gray-800 pb-4">
                 <div>
                   <div className="text-sm text-gray-500 font-medium">12 Abr 2026</div>
                   <div className="font-semibold mt-1 tracking-wide">Proveedor IT Nacional</div>
                 </div>
                 <div className="text-right">
                   <div className="font-bold">- S/. 450.00</div>
                   <div className="text-xs bg-gray-800 text-gray-400 px-2 py-0.5 rounded mt-1 inline-block border border-gray-700">Manual</div>
                 </div>
              </div>

              {/* Fila Destacada (El efecto IA de QuickBooks) */}
              <div className="flex items-center justify-between bg-gradient-to-r from-[#0077c5]/20 to-transparent border border-[#0077c5]/40 rounded-xl p-4 relative animate-pulse shadow-inner shadow-[#0077c5]/10">
                 <div className="absolute top-0 left-0 w-1 h-full bg-[#0077c5] rounded-l-xl"></div>
                 <div className="pl-2">
                   <div className="text-xs text-[#52b6ff] flex items-center gap-1.5 font-bold uppercase tracking-widest">
                     <svg className="w-3 h-3" fill="currentColor" viewBox="0 0 20 20"><path d="M10 1l2.5 6 6 2.5-6 2.5L10 18l-2.5-6L1.5 9.5 7.5 7z"/></svg>
                     Sugerencia lista
                   </div>
                   <div className="font-bold text-white mt-1">Materiales Eléctricos Lima</div>
                 </div>
                 <div className="text-right">
                   <div className="font-bold">- S/. 1,200.00</div>
                   <div className="text-xs bg-[#0077c5] text-white px-3 py-1 rounded-full mt-1 inline-block font-semibold">Conciliar con un clic</div>
                 </div>
              </div>

              {/* Fila Standard 2 */}
              <div className="flex items-center justify-between pt-2">
                 <div>
                   <div className="text-sm text-gray-500 font-medium">10 Abr 2026</div>
                   <div className="font-semibold mt-1 tracking-wide">Depósito Factura F001-443</div>
                 </div>
                 <div className="text-right">
                   <div className="font-bold text-[#2ca01c]">+ S/. 3,250.00</div>
                   <div className="text-xs bg-gray-800 text-gray-400 px-2 py-0.5 rounded mt-1 inline-block border border-gray-700">Manual</div>
                 </div>
              </div>

            </div>

            {/* Bubble Mágico Flotante inferior */}

          </div>
        </div>
            <div 
              className="absolute -bottom-6 left-210 bg-[#0077c5] text-white px-5 py-4 rounded-2xl shadow-2xl flex items-center gap-3"
              style={{animation: 'gentleFloat 4s ease-in-out infinite'}}
            >
              <div className="w-10 h-10 bg-white/20 rounded-full flex items-center justify-center">
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path></svg>
              </div>
              <div>
                <div className="font-bold text-sm">4 gastos categorizados</div>
                <div className="text-xs font-medium text-blue-100">listos para guardar</div>
              </div>
              <style>{`
                @keyframes gentleFloat {
                  0%, 100% { transform: translateY(0); }
                  50% { transform: translateY(-6px); }
                }
              `}</style>
            </div>

      </div>
    </section>
  );
}
