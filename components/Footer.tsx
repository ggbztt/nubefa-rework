export default function Footer() {
  return (
    <footer className="w-full bg-white pt-20 pb-10 border-t border-gray-200">
      <div className="max-w-[1400px] mx-auto px-6">
        
        {/* Grilla Principal del Mega Footer */}
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-10 mb-16">
          
          {/* Brand & Mision */}
          <div className="col-span-2 lg:col-span-1">
            <h3 className="text-2xl font-bold text-[#2ca01c] tracking-tight mb-4">nubefa</h3>
            <p className="text-sm text-gray-500 leading-relaxed">
              La telegestión de MYPEs más completa y robusta. Operando desde las nubes para el mundo.
            </p>
          </div>

          {/* Col 1 */}
          <div>
            <h4 className="font-bold text-gray-900 mb-5">Características</h4>
            <ul className="space-y-3 text-sm text-gray-600">
              <li><a href="#" className="hover:text-[#2ca01c] hover:underline">Factura Electrónica</a></li>
              <li><a href="#" className="hover:text-[#2ca01c] hover:underline">Control de Inventario</a></li>
              <li><a href="#" className="hover:text-[#2ca01c] hover:underline">Gestión de Cobros</a></li>
              <li><a href="#" className="hover:text-[#2ca01c] hover:underline">Nubefa Assist IA</a></li>
            </ul>
          </div>

          {/* Col 2 */}
          <div>
            <h4 className="font-bold text-gray-900 mb-5">Por Industria</h4>
            <ul className="space-y-3 text-sm text-gray-600">
              <li><a href="#" className="hover:text-[#2ca01c] hover:underline">Retail y Ventas</a></li>
              <li><a href="#" className="hover:text-[#2ca01c] hover:underline">Prestadores de Servicio</a></li>
              <li><a href="#" className="hover:text-[#2ca01c] hover:underline">Educación e Institutos</a></li>
              <li><a href="#" className="hover:text-[#2ca01c] hover:underline">Ferreterías</a></li>
            </ul>
          </div>

          {/* Col 3 */}
          <div>
            <h4 className="font-bold text-gray-900 mb-5">Herramientas Gratis</h4>
            <ul className="space-y-3 text-sm text-gray-600">
              <li><a href="#" className="hover:text-[#2ca01c] hover:underline">Calculadora IGV</a></li>
              <li><a href="#" className="hover:text-[#2ca01c] hover:underline">Plantillas de Excel</a></li>
              <li><a href="#" className="hover:text-[#2ca01c] hover:underline">Generador de Boletas</a></li>
            </ul>
          </div>

          {/* Col 4 (Contacto) */}
          <div>
            <h4 className="font-bold text-gray-900 mb-5">Contacto y Ventas</h4>
            <ul className="space-y-3 text-sm text-gray-600">
              <li className="flex items-center gap-2"><span className="text-xl">📞</span> 993 400 767</li>
              <li className="flex items-center gap-2"><span className="text-xl">📞</span> 325 64 68</li>
              <li className="flex items-center gap-2"><span className="text-xl">✉️</span> ventas@nubefa.com</li>
              <li className="flex items-start gap-2 pt-2 border-t border-gray-100 mt-2">
                <span className="text-xl">📍</span> 
                <span>Av. Betancourt 1097, <br/> Los Olivos, Lima</span>
              </li>
            </ul>
          </div>

        </div>

        {/* Zona Inferior (Copyright y Políticas) */}
        <div className="pt-8 border-t border-gray-200 flex flex-col md:flex-row justify-between items-center gap-4 text-xs text-gray-500">
          <p>© {new Date().getFullYear()} Nubefa ERP. Todos los derechos reservados.</p>
          <div className="flex items-center gap-4">
            <a href="#" className="hover:text-gray-900">Términos de Servicio</a>
            <a href="#" className="hover:text-gray-900">Privacidad y Cookies</a>
            <a href="#" className="hover:text-gray-900">Libro de Reclamaciones</a>
          </div>
        </div>
      </div>
    </footer>
  );
}
