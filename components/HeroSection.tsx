import Link from 'next/link';

export default function HeroSection() {
  return (
    <section className="w-full bg-qb-gray-light pt-16 pb-24 overflow-hidden relative">
      <div className="max-w-[1400px] mx-auto px-6 grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
        
        {/* === Lado Izquierdo: Copywriting Institucional === */}
        <div className="animate-fade-in-up md:pr-10 z-10">
          <div className="inline-block bg-white border border-qb-border text-xs font-bold text-qb-text-main px-3 py-1 rounded-full mb-6 uppercase tracking-wider">
            NUEVA PLATAFORMA ERP
          </div>
          <h1 className="text-5xl md:text-[3.5rem] font-extrabold text-[#1c1d1f] leading-[1.1] mb-6 tracking-tight">
            Automatiza tu negocio y vende sin límites.
          </h1>
          <p className="text-xl text-qb-text-muted leading-relaxed mb-8 max-w-[95%]">
            Nubefa es el software exacto para PyMEs. Emite facturas electrónicas, controla el inventario y supervisa cobros desde un sencillo panel.
          </p>
          <div className="flex flex-col sm:flex-row items-center gap-4 mb-4">
            <Link href="#pricing" className="w-full sm:w-auto bg-qb-green hover:bg-qb-green-dark text-white text-[1.1rem] font-semibold py-3.5 px-8 rounded-full transition-all hover:-translate-y-1 text-center shadow-lg shadow-qb-green/20">
              Ver planes y precios
            </Link>
            <Link href="/register" className="w-full sm:w-auto bg-transparent border border-gray-400 hover:border-gray-800 text-qb-text-main text-[1.1rem] font-semibold py-3.5 px-8 rounded-full transition-all text-center">
              Pruebe gratis por 30 días
            </Link>
          </div>
          <p className="text-sm text-qb-text-muted font-medium ml-2">
            Sujeto a términos y condiciones. Cancela cuando quieras.
          </p>
        </div>

        {/* === Lado Derecho: Composicion de Cuadros Grises (Falso Mockup) === */}
        <div className="relative w-full h-[500px] lg:h-[600px] animate-fade-in-up flex items-center justify-center z-10" style={{animationDelay: '0.2s'}}>
          
          {/* Mancha decorativa verde de fondo al estilo Intuit */}
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[450px] h-[450px] bg-qb-green/10 rounded-full blur-[80px] -z-10"></div>
          
          {/* Falsa Pantalla de Software (Main Box) */}
          <div className="relative w-full max-w-[550px] h-[400px] bg-white border border-qb-border shadow-2xl rounded-2xl overflow-hidden flex flex-col">
            {/* OSX Header Bar Falsa */}
            <div className="h-8 bg-qb-gray-light border-b border-qb-border flex items-center px-4 gap-2">
              <div className="w-3 h-3 rounded-full bg-red-400"></div>
              <div className="w-3 h-3 rounded-full bg-yellow-400"></div>
              <div className="w-3 h-3 rounded-full bg-green-400"></div>
            </div>
            
            {/* Lienzo del Cuadro Gris Falso */}
            <div className="flex-1 bg-gray-100 flex items-center justify-center relative p-6 border-4 border-white">
              <div className="text-center z-10">
                 <div className="w-16 h-16 mx-auto bg-gray-300 rounded-lg mb-4 flex items-center justify-center shadow-inner">
                    <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z"></path></svg>
                 </div>
                 <p className="text-gray-500 font-bold tracking-widest uppercase text-sm">Espacio para Mockup</p>
                 <p className="text-gray-400 text-xs mt-2 max-w-[200px] mx-auto">Acá montaremos un screenshot diagonal de las gráficas del ERP.</p>
              </div>
            </div>
          </div>
          
          {/* Card Flotante Decorativa 1 */}
          <div className="absolute top-[8%] -left-[10%] lg:-left-[15%] bg-white border border-qb-border shadow-xl rounded-xl p-4 w-52 opacity-95 transition-transform transform hover:scale-105 z-20">
             <div className="flex items-center gap-3">
               <div className="w-10 h-10 bg-green-100 text-qb-green flex items-center justify-center rounded-full font-bold">✓</div>
               <div>
                 <div className="text-[10px] text-gray-500 font-bold uppercase tracking-wide">Recibo Pagado</div>
                 <div className="font-bold text-gray-800 tracking-tight">S/. 1,250.00</div>
               </div>
             </div>
          </div>

          {/* Card Flotante Decorativa 2 */}
          <div className="absolute top-[65%] -right-[5%] lg:-right-[10%] bg-white border border-qb-border shadow-xl rounded-xl p-4 w-56 opacity-95 transition-transform transform hover:scale-105 z-20" style={{animation: 'gentleFloat 4s ease-in-out infinite'}}>
             <div className="flex items-center gap-3">
               <div className="w-10 h-10 bg-blue-100 text-qb-blue flex items-center justify-center rounded-full">
                 <svg className="w-5 h-5" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><polyline points="20 6 9 17 4 12"></polyline></svg>
               </div>
               <div>
                 <div className="text-[10px] text-gray-500 font-bold uppercase tracking-wide">Stock Inventario</div>
                 <div className="font-bold text-gray-800 tracking-tight">+45 Artículos</div>
               </div>
             </div>
          </div>

        </div>
      </div>
    </section>
  );
}
