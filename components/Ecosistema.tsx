"use client";

import { useState } from 'react';

const tabs = [
  { id: 'ventas', title: 'Ventas y Facturas', desc: 'Emite comprobantes en paralelo.', icon: 'M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z', color: 'text-[#2ca01c]', bg: 'bg-[#e5f5e3]' },
  { id: 'compras', title: 'Compras e Inventario', desc: 'Gestiona stock en sedes.', icon: 'M20 7l-8-4-8 4m16 0l-8 4m8-4v10l-8 4m0-10L4 7m8 4v10M4 7v10l8 4', color: 'text-[#0077c5]', bg: 'bg-[#e2f1fb]' },
  { id: 'caja', title: 'Flujo de Caja y Bancos', desc: 'Supervisa tu rentabilidad real.', icon: 'M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z', color: 'text-[#c68600]', bg: 'bg-[#fff5e2]' },
  { id: 'reportes', title: 'Análisis y Reportes', desc: 'Todo tu balance descargable exportado.', icon: 'M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z', color: 'text-[#7e22ce]', bg: 'bg-[#f3e8ff]' }
];

export default function Ecosistema() {
  const [activeTab, setActiveTab] = useState(tabs[0].id);

  return (
    <section className="w-full bg-white py-24 border-b border-qb-border">
      <div className="max-w-[1400px] mx-auto px-6">
        
        {/* Cabecera del Título */}
        <h2 className="text-4xl md:text-[3.25rem] font-extrabold text-center mb-6 tracking-tight text-qb-text-main">
          Todo nuevo. Todo en un solo lugar.
        </h2>
        <p className="text-xl text-qb-text-muted text-center mb-16 max-w-3xl mx-auto">
          Gestiona todas las ramas críticas de tu negocio desde un ecosistema unificado que corre velozmente tanto en tablets, navegadores como en teléfonos.
        </p>

        {/* Ecosistema Grid Split */}
        <div className="flex flex-col lg:flex-row gap-12 lg:gap-8 items-stretch">
          
          {/* Navegación Vertical a la Izquierda */}
          <div className="w-full lg:w-1/3 flex flex-col gap-3">
            {tabs.map(tab => {
              const isActive = activeTab === tab.id;
              return (
                <button 
                  key={tab.id}
                  onClick={() => setActiveTab(tab.id)}
                  className={`flex flex-col items-start gap-1 p-6 rounded-2xl text-left border-2 transition-all duration-300 ${isActive ? 'bg-[#1c1d1f] border-[#1c1d1f] shadow-lg' : 'bg-transparent border-transparent hover:bg-qb-gray-light'}`}
                >
                  <div className="flex items-center gap-4 w-full">
                    <div className={`w-12 h-12 rounded-full flex items-center justify-center shrink-0 transition-colors ${isActive ? tab.bg : 'bg-transparent border border-gray-300'}`}>
                      <svg className={`w-6 h-6 ${isActive ? tab.color : 'text-gray-500'}`} fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d={tab.icon}></path>
                      </svg>
                    </div>
                    <div>
                      <h4 className={`text-xl font-bold transition-colors ${isActive ? 'text-white' : 'text-qb-text-main'}`}>{tab.title}</h4>
                    </div>
                  </div>
                  {/* Contenedor expandible suave en el tab activo */}
                  {isActive && (
                    <div className="mt-4 ml-16 animate-fade-in-up">
                        <p className="text-[#a5a7ad] font-medium leading-relaxed">{tab.desc}</p>
                        <span className="text-[#36b622] font-bold mt-3 block flex items-center gap-1 group">
                          Explorar módulo <span className="group-hover:translate-x-1 transition-transform">→</span>
                        </span>
                    </div>
                  )}
                </button>
              );
            })}
          </div>

          {/* Súper Lienzo Interactivo a la Derecha */}
          <div className="w-full lg:w-2/3 min-h-[550px]">
            <div className="w-full h-full bg-[#f4f5f8] rounded-[32px] p-8 md:p-12 border border-qb-border relative overflow-hidden transition-all duration-500 flex flex-col items-center justify-center">
               
               {/* Resplandor luminoso de fondo de caja */}
               <div className={`absolute -top-40 -right-40 w-[600px] h-[600px] rounded-full blur-[120px] opacity-20 transition-colors duration-[800ms] ${activeTab === 'ventas' ? 'bg-[#2ca01c]' : activeTab === 'compras' ? 'bg-[#0077c5]' : activeTab === 'caja' ? 'bg-[#c68600]' : 'bg-[#7e22ce]'}`}></div>

               {/* Mockup Blanco Principal (Re-renderizado según key React) */}
               <div className="w-full max-w-[650px] aspect-video bg-white rounded-2xl shadow-[0_30px_60px_-15px_rgba(0,0,0,0.1)] border border-gray-200 z-10 p-6 flex flex-col animate-fade-in-up" key={activeTab}>
                  
                  {/* Falso Toolbar Superior */}
                  <div className="w-full h-8 flex justify-between items-center border-b border-gray-100 pb-5 mb-6">
                     <div className="flex items-center gap-3">
                       <div className={`w-3 h-3 rounded-full ${activeTab === 'ventas' ? 'bg-[#2ca01c]' : activeTab === 'compras' ? 'bg-[#0077c5]' : activeTab === 'caja' ? 'bg-yellow-500' : 'bg-purple-500'}`}></div>
                       <span className="font-bold text-gray-800 uppercase tracking-widest text-xs">
                         Gráficas de {tabs.find(t => t.id === activeTab)?.title}
                       </span>
                     </div>
                     <div className="w-20 h-6 bg-gray-100 rounded-full"></div>
                  </div>

                  {/* Cuerpo de cuadros abstractos emulando UX */}
                  <div className="flex-1 w-full grid grid-cols-3 gap-4">
                     {/* Elemento de gráfico Grande */}
                     <div className="col-span-2 bg-gray-50 rounded-xl flex items-end p-4 gap-3 relative">
                        <span className="absolute top-4 left-4 text-xs font-bold text-gray-400">Rendimiento Histórico</span>
                        <div className="w-1/4 bg-gray-200 h-1/4 rounded-t-md hover:bg-gray-300 transition-colors"></div>
                        <div className="w-1/4 bg-gray-200 h-2/4 rounded-t-md hover:bg-gray-300 transition-colors"></div>
                        <div className="w-1/4 bg-[#1c1d1f] h-[85%] rounded-t-md"></div>
                        <div className="w-1/4 bg-gray-200 h-1/2 rounded-t-md hover:bg-gray-300 transition-colors"></div>
                     </div>
                     
                     {/* KPIs laterales */}
                     <div className="col-span-1 flex flex-col gap-4">
                       <div className="h-1/2 bg-gray-50 rounded-xl p-4 flex flex-col justify-center">
                          <span className="text-xs text-gray-400 font-semibold">Tasa de Efectividad</span>
                          <span className="text-3xl font-black text-gray-800 mt-1">92%</span>
                       </div>
                       <div className="h-1/2 bg-gray-50 rounded-xl p-4 flex flex-col justify-end gap-2">
                          <div className="w-full h-1.5 bg-gray-200 rounded-full overflow-hidden">
                            <div className="w-[60%] h-full bg-[#1c1d1f]"></div>
                          </div>
                          <div className="w-full h-1.5 bg-gray-200 rounded-full overflow-hidden">
                            <div className="w-[85%] h-full bg-gray-400"></div>
                          </div>
                       </div>
                     </div>
                  </div>
               </div>

            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
