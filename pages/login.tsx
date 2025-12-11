
import { useState } from "react";
import { signIn } from "next-auth/react";

export default function Login(){
  const [email,setEmail] = useState("");
  const [password,setPassword] = useState("");

  async function submit(){
    await signIn("credentials",{ email, password, callbackUrl:"/dashboard" });
  }

  return (
    <main dir="rtl" className="p-10 flex flex-col items-center">
      <div className="bg-white shadow-md p-8 rounded-xl w-80">
        <h1 className="text-2xl text-center mb-4">התחברות ל־PsychoYeru</h1>
        <input className="border p-2 w-full mb-3" placeholder="אימייל" onChange={e=>setEmail(e.target.value)}/>
        <input className="border p-2 w-full mb-3" placeholder="סיסמה" type="password" onChange={e=>setPassword(e.target.value)}/>
        <button onClick={submit} className="w-full bg-brand text-white py-2 rounded">התחבר</button>
      </div>
    </main>
  );
}
