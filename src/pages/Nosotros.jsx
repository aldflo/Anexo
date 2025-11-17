import teamImg from '../assets/A1.jpg';
import team from '../assets/A4.jpg';


export default function Nosotros(){
  return (
    <section className="max-w-6xl mx-auto px-4 py-12">
      <h1 className="text-3xl md:text-4xl font-extrabold">Nuestra historia</h1>

      <div className="mt-6 grid md:grid-cols-2 gap-8 items-center">
        {/* Texto */}
        <div className="space-y-3 text-white/80">
          <p>
          Hace 12 años, nació nuestro Centro de Rehabilitación con un sueño claro: brindar un espacio seguro y profesional donde cada persona pudiera recuperar su bienestar físico y emocional. Desde entonces, hemos acompañado a cientos de pacientes en su camino hacia la recuperación, combinando atención personalizada, terapias innovadoras y un equipo humano comprometido con la salud de nuestros usuarios.
          </p>
          <p>
           Hoy, después de 12 años de trabajo, seguimos siendo un referente de calidad y confianza, y nuestra mayor satisfacción es ver cómo cada paciente alcanza sus metas y recupera su independencia y calidad de vida. Cada historia de éxito nos inspira a seguir adelante y a continuar ofreciendo un servicio que combina experiencia, dedicación y calidez humana.
          </p>
          
        </div>

        {/* Columna de imágenes (mismo tamaño/estilo para ambas) */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          {/* g4.jpeg */}
          <figure
            className="relative w-full overflow-hidden rounded-2xl"
            style={{ aspectRatio: '4 / 5' }} // mismo formato para las dos
          >
            <img
              src={team}
              alt="Equipo Cordelia 1"
              loading="lazy"
              className="absolute inset-0 h-full w-full object-cover"
            />
          </figure>

          {/* m4.png */}
          <figure
            className="relative w-full overflow-hidden rounded-2xl"
            style={{ aspectRatio: '4 / 5' }} // mismo formato para las dos
          >
            <img
              src={teamImg}
              alt="Equipo Cordelia 2"
              loading="lazy"
              className="absolute inset-0 h-full w-full object-cover"
            />
          </figure>
        </div>
      </div>

      <hr className="my-10 border-white/10" />

      {/* ---------- VIDEO LOCAL (sin bordes) ---------- */}
     
    
    </section>
  );
}
