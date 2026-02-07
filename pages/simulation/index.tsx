import Link from "next/link";

export default function SimulationPage() {
  return (
    <main dir="rtl" className="min-h-screen p-8">
      <h1 className="text-3xl font-bold mb-4">סימולציה מלאה</h1>
      <p className="text-slate-700 mb-6">עמוד סימולציה בסיסי פעיל — ניתן להרחיב בהמשך עם טיימר וחלקי בחינה.</p>
      <div className="flex gap-3">
        <Link href="/practice" className="bg-brand text-white px-4 py-2 rounded-lg font-semibold">
          מעבר לתרגול
        </Link>
        <Link href="/dashboard" className="border border-brand text-brand px-4 py-2 rounded-lg font-semibold bg-white">
          חזרה לדשבורד
        </Link>
      </div>
    </main>
  );
}
