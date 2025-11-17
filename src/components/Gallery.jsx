import G1 from '../assets/G1.jpg';
import G2 from '../assets/G2.jpg';
import G5 from '../assets/G5.jpg';

const imgs = [G1,G2,G5];

export default function Gallery() {
  return (
    <section className="max-w-7xl mx-auto px-4 pb-16">
      <h2 className="text-3xl md:text-4xl font-extrabold mb-6">
        Galeria de fotos</h2>

      <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
        {imgs.map((src, i) => (
          <img
            key={i}
            src={src}
            alt={`gal-${i + 1}`}
            loading="lazy"
            decoding="async"
            referrerPolicy="no-referrer"
            onError={(e)=>{ e.currentTarget.src = '/placeholder.jpg' }}
            className="w-full h-auto object-contain"
            style={{ aspectRatio: '16 / 9' }}  // quita esta línea si quieres altura natural
          />
        ))}
      </div>
    </section>
  );
}
