// src/components/NavBar.jsx
import { useState } from 'react';
import { Link, NavLink } from 'react-router-dom';
import logo from '../assets/A2.jpeg'; // ⬅️ pon tu logo

export default function NavBar() {
  const [open, setOpen] = useState(false);

  const base =
    'px-3 py-2 rounded-xl transition hover:bg-white/10';
  const active = ({ isActive }) =>
    `${base} ${isActive ? 'bg-white/10 text-white' : 'text-white/90'}`;

  const close = () => setOpen(false);

  return (
    <header className="sticky top-0 z-50 bg-oceano/80 backdrop-blur border-b border-white/10">
      <div
        className="
          max-w-7xl mx-auto 
          px-4 
          h-14 flex items-center justify-between
          [padding-left:env(safe-area-inset-left)]
          [padding-right:env(safe-area-inset-right)]
        "
      >
        {/* Logo + nombre */}
        <Link to="/" className="flex items-center gap-3" onClick={close}>
          <img
            src={logo}
            alt="Cordelia"
            className="h-9 w-9 rounded-full object-cover"
          />
          <span className="font-bold tracking-wide text-yellow-300">
          UN NUEVO DESPERTAR
          </span>
        </Link>

        {/* Links desktop */}
        <nav className="hidden md:flex items-center gap-1">
          <NavLink to="/" className={active} onClick={close}>Inicio</NavLink>
          <NavLink to="/menu" className={active} onClick={close}>Menú</NavLink>
          <NavLink to="/nosotros" className={active} onClick={close}>Nosotros</NavLink>
          <NavLink to="/contacto" className={active} onClick={close}>Contacto</NavLink>
        </nav>

        {/* Botón hamburguesa (móvil) */}
        <button
          className="md:hidden p-2 rounded-lg hover:bg-white/10"
          aria-label="Abrir menú"
          onClick={() => setOpen(v => !v)}
        >
          {/* ícono hamburguesa */}
          <svg width="24" height="24" viewBox="0 0 24 24" className="text-white">
            <path d="M3 6h18M3 12h18M3 18h18" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
          </svg>
        </button>
      </div>

      {/* Menú móvil desplegable */}
      <div className={`${open ? 'block' : 'hidden'} md:hidden`}>
        <div className="bg-oceano/95 border-t border-white/10">
          <div className="px-4 py-3 flex flex-col gap-2">
            <NavLink to="/" className={active} onClick={close}>Inicio</NavLink>
            <NavLink to="/menu" className={active} onClick={close}>Menú</NavLink>
            <NavLink to="/nosotros" className={active} onClick={close}>Nosotros</NavLink>
            <NavLink to="/contacto" className={active} onClick={close}>Contactos</NavLink>
          </div>
        </div>
      </div>
    </header>
  );
}
