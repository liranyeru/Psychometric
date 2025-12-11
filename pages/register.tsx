
import { useState } from "react";
import axios from "axios";

export default function Register(){
  const [email,setEmail]=useState("");
  const [password,setPassword]=useState("");

  async function register(e:any){
    e.preventDefault();
    await axios.post("/api/register",{ email, password });
    alert("נרשמת בהצלחה! אפשר להתחבר.");
    window.location.href = "/login";
  }

  return (
    <main dir="rtl" className="min-h-screen flex items-center justify-center">
      <div className="bg-white shadow-lg rounded-2xl p-8 w-full max-w-md">
        <h1 className="text-2xl font-bold mb-4 text-center">הרשמה ל־PsychoYeru</h1>
        <form onSubmit={register} className="flex flex-col gap-3">
          <input className="border p-2 rounded" placeholder="אימייל" onChange={e=>setEmail(e.target.value)}/>
          <input className="border p-2 rounded" placeholder="סיסמה" type="password" onChange={e=>setPassword(e.target.value)}/>
          <button type="submit" className="w-full bg-brand text-white py-2 rounded-lg font-semibold">
            הרשמה
          </button>
        </form>
        <p className="mt-4 text-center text-sm">
          כבר רשום? <a href="/login" className="text-brand underline">התחברות</a>
        </p>
      </div>
    </main>
  );
}
