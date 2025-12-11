
import { useState } from "react";
import axios from "axios";
import bcrypt from "bcryptjs";

export default function Register(){
  const [email,setEmail]=useState("");
  const [password,setPassword]=useState("");

  async function register(){
    const hashed = await bcrypt.hash(password,10);
    await axios.post("/api/register",{ email, password:hashed });
    alert("נרשמת בהצלחה! אפשר להתחבר");
  }

  return (
    <main dir="rtl" className="p-10 flex flex-col items-center">
      <div className="bg-white shadow-md p-8 rounded-xl w-80">
        <h1 className="text-2xl text-center mb-4">הרשמה</h1>
        <input className="border p-2 w-full mb-3" placeholder="אימייל" onChange={e=>setEmail(e.target.value)}/>
        <input className="border p-2 w-full mb-3" placeholder="סיסמה" type="password" onChange={e=>setPassword(e.target.value)}/>
        <button onClick={register} className="w-full bg-brand text-white py-2 rounded">הרשמה</button>
      </div>
    </main>
  );
}
