
import { getSession } from "next-auth/react";

export default function Dashboard(){
  return (
    <main dir="rtl" className="p-10">
      <h1 className="text-3xl mb-4">ברוך הבא ל־PsychoYeru!</h1>
      <p>זהו הדשבורד הראשוני שלך. בעתיד יופיע כאן מצב התקדמות.</p>
    </main>
  );
}

Dashboard.auth = true;
