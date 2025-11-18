export default function Footer(){
  // 🔁 Cambia estos links y el número de WhatsApp
  const LINKS = {  
    facebook:  'https://www.facebook.com/crunnuevodespertar',  
    whatsapp:  'https://wa.me/529811951494?text=Hola%20quiero%20mas%20informacion'
  };

  // Iconos SVG (sin dependencias)
  const IconIG = (props) => (
    <svg viewBox="0 0 24 24" fill="none" {...props}>
      <rect x="2" y="2" width="20" height="20" rx="5" stroke="currentColor" strokeWidth="2"/>
      <circle cx="12" cy="12" r="4.5" stroke="currentColor" strokeWidth="2"/>
      <circle cx="17.5" cy="6.5" r="1.5" fill="currentColor"/>
    </svg>
  );
  const IconFB = (props) => (
    <svg viewBox="0 0 24 24" fill="currentColor" {...props}>
      <path d="M13.5 10.5V8.25c0-.62.5-1.12 1.12-1.12h1.63V4.5h-2.75A3.5 3.5 0 0 0 10 8v2.5H8v3h2v8h3v-8h2.25l.5-3h-2.25z"/>
    </svg>
  );
  const IconWA = (props) => (
    <svg viewBox="0 0 24 24" fill="currentColor" {...props}>
      <path d="M20.52 3.48A11.94 11.94 0 0 0 12.03 0C5.47 0 .12 5.35.12 11.93c0 2.1.56 4.14 1.63 5.94L0 24l6.32-1.7a11.9 11.9 0 0 0 5.7 1.45h.01c6.56 0 11.91-5.35 11.91-11.93 0-3.18-1.24-6.17-3.42-8.34zM12.03 21.3h-.01a9.4 9.4 0 0 1-4.79-1.31l-.34-.2-3.75 1 1-3.66-.22-.35a9.34 9.34 0 0 1-1.44-4.85c0-5.14 4.19-9.31 9.33-9.31 2.49 0 4.82.97 6.57 2.72a9.22 9.22 0 0 1 2.75 6.58c0 5.14-4.19 9.38-9.33 9.38zm5.46-6.92c-.3-.15-1.78-.88-2.06-.98-.28-.1-.48-.15-.68.15-.2.3-.78.98-.96 1.18-.18.2-.36.22-.66.07-.3-.15-1.27-.47-2.42-1.49-.89-.77-1.49-1.71-1.67-2.01-.18-.3-.02-.46.13-.61.13-.13.3-.33.45-.5.15-.17.2-.3.3-.5.1-.2.05-.37-.02-.52-.07-.15-.68-1.64-.93-2.24-.24-.59-.5-.51-.68-.52h-.58c-.2 0-.52.07-.79.37-.27.3-1.05 1.02-1.05 2.5s1.08 2.9 1.23 3.1c.15.2 2.13 3.25 5.16 4.55.72.31 1.28.49 1.72.63.72.23 1.38.2 1.9.12.58-.09 1.78-.73 2.03-1.43.25-.7.25-1.3.18-1.43-.07-.13-.27-.2-.57-.35z"/>
    </svg>
  );

  const iconClass = "w-6 h-6 md:w-7 md:h-7";

  return (
    <footer className="mt-12 border-t border-white/10">
      <div className="max-w-7xl mx-auto px-4 py-8 grid md:grid-cols-3 gap-6 text-sm">
        <div>
          <h4 className="font-semibold">Un Nuevo Despertar</h4>
          <p className="text-white/70">Av. Lázaro Cárdenas 117, Sector, Las Flores, 24095 San Francisco de Campeche, Camp.</p>
          <p className="text-white/70">L–D 12:00–22:00 • Tel:  (981) 1951494</p>
        </div>

        <div>
          <h4 className="font-semibold">Secciones</h4>
          <ul className="mt-2 space-y-1 text-white/70">
            <li><a href="/" className="hover:underline">Inicio</a></li>
            <li><a href="/menu" className="hover:underline">Menú</a></li>
          </ul>
        </div>

        <div>
          <h4 className="font-semibold">Redes</h4>
          <div className="mt-2 flex items-center gap-4">
            <a href={LINKS.instagram} target="_blank" rel="noopener noreferrer" aria-label="Instagram"
               className="text-white/70 hover:text-coral transition">
              <IconIG className={iconClass} />
            </a>
            <a href={LINKS.facebook} target="_blank" rel="noopener noreferrer" aria-label="Facebook"
               className="text-white/70 hover:text-coral transition">
              <IconFB className={iconClass} />
            </a>
            <a href={LINKS.whatsapp} target="_blank" rel="noopener noreferrer" aria-label="WhatsApp"
               className="text-white/70 hover:text-coral transition">
              <IconWA className={iconClass} />
            </a>
          </div>
        </div>
      </div>

      <div className="border-t border-white/10 py-4 text-center text-xs text-white/50">
        © {new Date().getFullYear()} Un Nuevo Despertar. Todos los derechos reservados.
      </div>
    </footer>
  );
}
