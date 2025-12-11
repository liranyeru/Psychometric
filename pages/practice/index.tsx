
export default function PracticeHome(){
  const cards = [
    { href:"/practice/quant", title:"חשיבה כמותית", desc:"אלגברה, אחוזים, גאומטריה, הסתברות" },
    { href:"/practice/verbal", title:"חשיבה מילולית", desc:"אנלוגיות, הבנת הנקרא, השלמת משפטים" },
    { href:"/practice/english", title:"אנגלית", desc:"אוצר מילים, השלמת משפטים, קריאה" }
  ];
  return (
    <main dir="rtl" className="min-h-screen p-8">
      <h1 className="text-3xl font-bold mb-6">תרגול לפי חלק</h1>
      <div className="grid gap-4 md:grid-cols-3">
        {cards.map(c=>(
          <a key={c.href} href={c.href} className="bg-white rounded-xl shadow p-4 hover:shadow-md transition">
            <h2 className="text-xl font-semibold mb-2">{c.title}</h2>
            <p className="text-sm text-slate-600">{c.desc}</p>
          </a>
        ))}
      </div>
    </main>
  );
}
