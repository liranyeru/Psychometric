
import { useState } from "react";
import { signIn } from "next-auth/react";

export default function Login(){
  const [email,setEmail] = useState("");
  const [password,setPassword] = useState("");

  async function submit(e:any){
    e.preventDefault();
    await signIn("credentials",{ email, password, callbackUrl:"/dashboard" });
  }

  return (
    <main dir="rtl" className="min-h-screen flex items-center justify-center">
      <div className="bg-white shadow-lg rounded-2xl p-8 w-full max-w-md">
        <h1 className="text-2xl font-bold mb-4 text-center">התחברות ל־PsychoYeru</h1>
        <form onSubmit={submit} className="flex flex-col gap-3">
          <input className="border p-2 rounded" placeholder="אימייל" onChange={e=>setEmail(e.target.value)}/>
          <input className="border p-2 rounded" placeholder="סיסמה" type="password" onChange={e=>setPassword(e.target.value)}/>
          <button type="submit" className="w-full bg-brand text-white py-2 rounded-lg font-semibold">
            התחברות
          </button>
        </form>
        <p className="mt-4 text-center text-sm">
          אין לך משתמש? <a href="/register" className="text-brand underline">הרשמה</a>
        </p>
      </div>
    </main>
  );
}
