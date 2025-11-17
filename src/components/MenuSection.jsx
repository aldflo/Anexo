
import G1 from '../assets/G1.jpg';
import G2 from '../assets/G2.jpg';
import G5 from '../assets/G5.jpg';

import { Link } from 'react-router-dom';

const items = [
  
  {
   
   
    img: G1,
  },
  {  img: G2 },
  {  img: G5 },
 
];

export default function MenuSection(){
  return (
    <section className="max-w-7xl mx-auto px-4 pt-8 md:pt-10 pb-16" id="menu">
      <div className="flex items-end justify-between gap-4">
        <h2 className="text-3xl md:text-4xl font-extrabold">Instalaciones y Servicios</h2>
        <Link to="/menu" className="text-turquesa hover:underline">Ver todo</Link>
      </div>

      <div className="mt-8 grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {items.map((it)=> (
          <article key={it.name} className="bg-transparent p-0">
            {/* Pura imagen, sin bordes ni fondo */}
            <img
              src={it.img || '/placeholder.jpg'}
              alt={it.name}
              loading="lazy"
              decoding="async"
              referrerPolicy="no-referrer"
              onError={(e)=>{ e.currentTarget.src = '/placeholder.jpg' }}
              className="w-full h-auto object-contain mb-3"
              style={{ aspectRatio: '4 / 3' }}  // cambia a '16 / 9' o quítalo si no lo necesitas
            />

            <div className="flex items-start justify-between gap-3 px-1">
              <div>
                <h3 className="text-xl font-semibold">{it.name}</h3>
                <p className="text-white/70 text-sm">{it.desc}</p>
              </div>
              <span className="text-coral font-bold">${it.price}</span>
            </div>

            <p className="mt-2 text-xs uppercase tracking-wide text-white/50 px-1">{it.cat}</p>
          </article>
        ))}
      </div>
    </section>
  );
}
