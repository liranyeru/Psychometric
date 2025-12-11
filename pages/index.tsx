
export default function Home(){
  return (
    <main dir="rtl" className="min-h-screen flex flex-col items-center justify-center">
      <div className="bg-white shadow-lg rounded-2xl p-8 w-full max-w-md text-center">
        <h1 className="text-3xl font-bold mb-4 text-slate-800">PsychoYeru</h1>
        <p className="mb-6 text-slate-600">
          מערכת אימון פסיכומטרי מתקדמת: כמותי, מילולי, אנגלית וסימולציות מלאות.
        </p>
        <div className="flex flex-col gap-3">
          <a href="/login" className="w-full bg-brand text-white py-2 rounded-lg font-semibold">התחברות</a>
          <a href="/register" className="w-full border border-brand text-brand py-2 rounded-lg font-semibold bg-white">
            הרשמה
          </a>
          <a href="/practice" className="w-full text-sm text-slate-500 underline">
            תרגול מהיר כאורח
          </a>
        </div>
      </div>
    </main>
  );
}
