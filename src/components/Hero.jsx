// src/components/Hero.jsx
import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';

import img1 from '../assets/A1.jpg';
import img2 from '../assets/G6.jpg';
import img3 from '../assets/G7.jpg';

const slides = [img1, img2, img3];
const AUTOPLAY_MS = 2000; // ⬅️ 2 segundos

export default function Hero() {
  const [index, setIndex] = useState(0);
  const [paused, setPaused] = useState(false);
  const total = slides.length;

  // Auto-play cada 2s
  useEffect(() => {
    if (paused || total <= 1) return;
    const id = setInterval(() => setIndex((i) => (i + 1) % total), AUTOPLAY_MS);
    return () => clearInterval(id);
  }, [paused, total]);

  const prev = () => setIndex((i) => (i - 1 + total) % total);
  const next = () => setIndex((i) => (i + 1) % total);

  return (
    <section
      className="relative isolate px-4 mb-2 md:mb-4"
      id="top"
      onMouseEnter={() => setPaused(true)}
      onMouseLeave={() => setPaused(false)}
    >
      <div className="relative overflow-hidden min-h-[58vh] md:min-h-[64vh] rounded-none">
        <div className="absolute inset-0 -z-10 overflow-hidden">
          <div
            className="h-full w-full flex transition-transform duration-700 ease-out"
            style={{ transform: `translateX(-${index * 100}%)` }}
          >
            {slides.map((src, i) => (
              <div key={i} className="min-w-full h-full">
                <img
                  src={src}
                  alt={`slide-${i + 1}`}
                  className="h-full w-full object-cover"
                  loading="lazy"
                />
              </div>
            ))}
          </div>
          <div className="absolute inset-0 bg-black/35" />
        </div>

        <div className="relative grid place-items-center text-center h-full">
         
        </div>

        <button onClick={prev} aria-label="Anterior" className="absolute left-3 top-1/2 -translate-y-1/2 bg-black/35 hover:bg-black/55 text-white rounded-full p-2">
          <svg width="22" height="22" viewBox="0 0 24 24" fill="none"><path d="M15 19l-7-7 7-7" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/></svg>
        </button>
        <button onClick={next} aria-label="Siguiente" className="absolute right-3 top-1/2 -translate-y-1/2 bg-black/35 hover:bg-black/55 text-white rounded-full p-2">
          <svg width="22" height="22" viewBox="0 0 24 24" fill="none"><path d="M9 5l7 7-7 7" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/></svg>
        </button>

        <div className="absolute bottom-3 left-1/2 -translate-x-1/2 flex gap-2">
          {slides.map((_, i) => (
            <button
              key={i}
              onClick={() => setIndex(i)}
              aria-label={`Ir al slide ${i + 1}`}
              className={`h-2.5 w-2.5 rounded-full transition ${i === index ? 'bg-white' : 'bg-white/50 hover:bg-white/80'}`}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
