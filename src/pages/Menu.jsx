const data = {
Servicios: [

  { name: 'SERVICIO MEDICO', emoji: '🩺' },
  { name: 'SERVICIO PSICOLOGICO', emoji: '🧠' },
  { name: 'CONSEJERIA', emoji: '💬' },
  { name: 'TERAPIA OCUPACIONAL', emoji: '🤲' },
  { name: 'ESTUDIO BIBLICO', emoji: '📖' },
  { name: 'PROGRAMA 12 PASOS', emoji: '🔄' },
  { name: 'CRISTOTERAPIA', emoji: '✝️' },
  { name: 'ACONDICIONAMIENTO FISICO', emoji: '🏋️‍♂️' },
  { name: 'Cristoterapia', emoji: '✝️' }, // Repetido, mismo emoji
  { name: 'Estudio Biblico', emoji: '📖' }, // Repetido
],


Instalaciones: [
  { name: 'RECAMARAS CLIMATIZADAS', emoji: '🛏️❄️' },
  { name: 'SANITARIOS LIMPIOS', emoji: '🚻✨' },
  { name: 'COMEDOR CLIMATIZADO', emoji: '🍽️❄️' },
  { name: 'AREA DE PSICOLOGIA', emoji: '🧠🏢' },
],



}


export default function Menu(){
return (
<section className="max-w-7xl mx-auto px-4 py-12">
<h1 className="text-3xl md:text-4xl font-extrabold">SERVICIOS E INSTALACIONES</h1>
<p className="text-white/70 mt-2">¿Necesitas ayuda? ¡No estas solo!.</p>
<div className="mt-8 grid md:grid-cols-3 gap-8">
{Object.entries(data).map(([cat, items])=> (
<div key={cat} className="rounded-2xl border border-white/10 p-6 bg-white/5">
<h2 className="text-2xl font-bold mb-4">{cat}</h2>
<ul className="space-y-3">
{items.map(it=> (
<li key={it.name} className="flex items-start justify-between gap-3">
<div>
<p className="font-semibold">{it.name}</p>
<p className="text-sm text-white/70">{it.desc}</p>
</div>
<span className="text-coral font-bold whitespace-nowrap">{it.price}</span>
</li>
))}
</ul>
</div>
))}
</div>
</section>
)
}