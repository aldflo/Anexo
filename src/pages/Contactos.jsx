// src/pages/Contacto.jsx

const MAP_EMBED =
 "https://www.google.com/maps?q=19.8401943,-90.547116&z=17&output=embed";
// Abre la app de Google Maps (tu link)
const MAP_DIRECTIONS = "https://maps.app.goo.gl/FHPjUw9QskG2WafDA";

export default function Contacto() {
  return (
    <section className="max-w-7xl mx-auto px-4 py-12">
      <h1 className="text-3xl md:text-4xl font-extrabold mb-6">Contáctanos</h1>

      {/* MAPA + INFO */}
      <div className="grid lg:grid-cols-2 gap-8">
        {/* Mapa responsive, sin bordes */}
        <div className="relative w-full aspect-video overflow-hidden rounded-2xl">
          <iframe
            src={MAP_EMBED}
            loading="lazy"
            allowFullScreen
            referrerPolicy="no-referrer-when-downgrade"
            className="absolute inset-0 w-full h-full border-0"
            title="Ubicación Centro de Reabilitacion"
          />
        </div>

        {/* Datos */}
        <div className="space-y-4">
          <h2 className="text-xl font-semibold">Un Nuevo Despertar</h2>
          <p className="text-white/80">
            Av. Lázaro Cárdenas 117, Sector, Las Flores, 24095 San Francisco de Campeche, Camp.
            L–D 12:00–22:00 • Tel.{" "}
            <a href="tel:+529811026456" className="text-turquesa underline hover:opacity-80">
              (981) 1951394
            </a>
          </p>

          <a
            href={MAP_DIRECTIONS}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block px-4 py-2 rounded-xl bg-coral text-tinta font-semibold hover:opacity-90"
          >
            Cómo llegar
          </a>

          {/* Redes rápidas */}
          <div className="flex items-center gap-3">
           
            <a
              href="https://www.facebook.com/crunnuevodespertar"
              target="_blank" rel="noopener noreferrer" aria-label="Facebook"
              className="rounded-full p-3 hover:scale-105 transition" style={{ background: "#1877F2" }}
            >
              <svg viewBox="0 0 24 24" className="w-6 h-6 text-white" fill="none" stroke="currentColor" strokeWidth="2">
                <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3.64l.36-4H14V7a1 1 0 0 1 1-1h3z"/>
              </svg>
            </a>

            <a
              href="https://wa.me/529811951394?text=Hola%20quiero%20reservar%20una%20mesa"
              target="_blank" rel="noopener noreferrer" aria-label="WhatsApp"
              className="rounded-full p-3 hover:scale-105 transition" style={{ background: "#25D366" }}
            >
              <svg viewBox="0 0 24 24" className="w-6 h-6 text-white" fill="currentColor">
                <path d="M20.52 3.48A11.77 11.77 0 0 0 12 0 12 12 0 0 0 1.6 17.94L0 24l6.2-1.6A12 12 0 0 0 12 24a12 12 0 0 0 8.52-20.52ZM12 22a10 10 0 1 1 0-20 10 10 0 0 1 0 20Zm5.5-7.1c-.3-.15-1.77-.87-2.05-.97s-.47-.15-.67.15-.77.97-.95 1.17-.35.22-.65.07a8.16 8.16 0 0 1-2.4-1.48 8.93 8.93 0 0 1-1.65-2.05c-.17-.3 0-.46.13-.61.13-.13.3-.35.44-.52a2.06 2.06 0 0 0 .3-.52.55.55 0 0 0 0-.52c0-.15-.67-1.6-.92-2.2s-.49-.5-.67-.5h-.57a1.1 1.1 0 0 0-.78.37 3.28 3.28 0 0 0-1 2.43 5.69 5.69 0 0 0 1.2 3.02 12.88 12.88 0 0 0 4.9 4.6c2.94 1.27 3.5.95 4.14.89a2.73 2.73 0 0 0 1.8-1.27 2.23 2.23 0 0 0 .15-1.27c-.06-.06-.26-.15-.56-.3Z"/>
              </svg>
            </a>
          </div>
        </div>
      </div>

      {/* FORMULARIO (Netlify Forms) — deja igual si ya lo tienes */}
      {/* ... */}
    </section>
  );
}
