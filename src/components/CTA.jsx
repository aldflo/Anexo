import ubi from '../assets/A3.png';

export default function CTA(){
  return (
    <section className="px-4 py-12">
      <div className="max-w-7xl mx-auto text-center">
        <h3 className="text-2xl md:text-3xl font-bold">¿Necesitas la ayuda? ¡NO ESTAS SOLO!</h3>

        <img
          src={ubi}
          alt="Ubicación UN NUEVO DESPERTAR"
          loading="lazy"
          className="mx-auto mt-6 w-full max-w-3xl h-auto object-contain"
        />
      </div>
    </section>
  );
}
