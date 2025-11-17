const quotes = [
{ name: 'Anonimo', text: '' },
{ name: 'Anonimo', text: '' },

]
export default function Testimonials(){
return (
<section className="max-w-7xl mx-auto px-4 pb-16">
<h2 className="text-3xl md:text-4xl font-extrabold mb-6">Opiniones</h2>
<div className="grid md:grid-cols-3 gap-6">
{quotes.map((q)=> (
<figure key={q.name} className="rounded-2xl border border-white/10 p-6 bg-white/5">
<blockquote className="text-white/90">“{q.text}”</blockquote>
<figcaption className="mt-4 text-white/60">— {q.name}</figcaption>
</figure>
))}
</div>
</section>
)
}