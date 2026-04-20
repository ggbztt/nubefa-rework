import Link from 'next/link';

export default function Header() {
  return (
    <>
      <div className="w-full bg-[#1c1d1f] text-white text-sm py-2 flex justify-center items-center font-medium">
        Comienza hoy y ahorra un 90 % durante 3 meses*. <a href="#pricing" className="ml-2 underline font-bold hover:text-qb-green transition-colors">Oferta por tiempo limitado</a>
      </div>
      <header className="sticky top-0 z-50 w-full bg-white border-b border-qb-border shadow-sm">
      <div className="max-w-[1400px] mx-auto px-6 h-20 flex items-center justify-between">
        <div className="flex items-center gap-10">
          {/* Logo Brand */}
          <Link href="/" className="text-2xl font-bold text-qb-green tracking-tight">
            n u b e f a
          </Link>
          
          {/* Mega-Menú Navegador */}
          <nav className="hidden md:flex items-center gap-8 text-[15px] font-medium text-qb-text-main">
            {/* Pestaña con despliegue */}
            <div className="group relative cursor-pointer py-6">
              <span className="hover:text-qb-green transition-colors">Para PyMEs ▼</span>
              
              {/* Dropdown Ficticio de la pestaña */}
              <div className="absolute top-[75px] left-0 w-[400px] bg-white border border-qb-border shadow-xl rounded-lg p-6 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200 z-[100]">
                <div className="grid grid-cols-2 gap-4">
                  <div>
                    <h4 className="text-xs text-qb-text-muted font-bold uppercase mb-3">Popular</h4>
                    <ul className="space-y-3">
                      <li><Link href="#" className="hover:text-qb-green block">Factura Electrónica</Link></li>
                      <li><Link href="#" className="hover:text-qb-green block">Punto de Venta</Link></li>
                      <li><Link href="#" className="hover:text-qb-green block">Control Inventario</Link></li>
                    </ul>
                  </div>
                  <div>
                    <h4 className="text-xs text-qb-text-muted font-bold uppercase mb-3">Avanzado</h4>
                    <ul className="space-y-3">
                      <li><Link href="#" className="hover:text-qb-green block">Reportes Contables</Link></li>
                      <li><Link href="#" className="hover:text-qb-green block">Sujetos RUC/DNI</Link></li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
            
            {/* Pestañas directas */}
            <Link href="#contadores" className="hover:text-qb-green transition-colors py-6">
              Para Contadores
            </Link>
            <Link href="#pricing" className="hover:text-qb-green transition-colors py-6">
              Planes y Precios
            </Link>
            <Link href="#aprender" className="hover:text-qb-green transition-colors py-6">
              Aprender y Soporte
            </Link>
          </nav>
        </div>

        {/* Action Buttons Nav */}
        <div className="hidden md:flex items-center gap-5">
          <Link href="/login" className="text-[15px] font-semibold text-qb-text-main hover:text-qb-green transition-colors">
            Iniciar sesión
          </Link>
          <Link href="/register" className="bg-qb-green hover:bg-qb-green-dark text-white text-[15px] font-semibold py-2 px-6 rounded-full transition-all hover:scale-105">
            Comprar ahora
          </Link>
        </div>
      </div>
    </header>
    </>
  );
}
