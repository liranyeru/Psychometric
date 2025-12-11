
export default function Dashboard(){
  return (
    <main dir="rtl" className="min-h-screen p-8">
      <h1 className="text-3xl font-bold mb-4">דשבורד PsychoYeru</h1>
      <p className="text-slate-700 mb-4">כאן יופיעו התקדמות, סימולציות אחרונות ונקודות חולשה.</p>
      <a href="/practice" className="inline-block bg-brand text-white px-4 py-2 rounded-lg font-semibold">
        התחלת תרגול
      </a>
    </main>
  );
}
