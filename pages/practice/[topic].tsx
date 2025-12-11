
import { useRouter } from "next/router";
import { useEffect, useState } from "react";
import axios from "axios";

type Question = {
  id: number;
  topic: string;
  text: string;
  options: string[];
  correctIndex: number;
  solution: string;
};

export default function PracticeTopic(){
  const router = useRouter();
  const { topic } = router.query;
  const [questions,setQuestions] = useState<Question[]>([]);
  const [index,setIndex] = useState(0);
  const [selected,setSelected] = useState<number|null>(null);
  const [showSolution,setShowSolution]=useState(false);

  useEffect(()=>{
    if(topic){
      axios.get(`/api/questions?topic=${topic}`).then(res=>setQuestions(res.data.questions));
    }
  },[topic]);

  if(!topic) return null;
  if(questions.length===0) return (
    <main dir="rtl" className="min-h-screen p-8">
      <h1 className="text-2xl font-bold mb-4">טעינת שאלות...</h1>
    </main>
  );

  const q = questions[index];

  function checkAnswer(i:number){
    setSelected(i);
    setShowSolution(true);
  }

  function next(){
    setSelected(null);
    setShowSolution(false);
    setIndex(i => (i+1) % questions.length);
  }

  const topicTitle = topic==="quant" ? "חשיבה כמותית" : topic==="verbal" ? "חשיבה מילולית" : "אנגלית";

  return (
    <main dir="rtl" className="min-h-screen p-8">
      <h1 className="text-2xl font-bold mb-4">{topicTitle}</h1>
      <div className="bg-white rounded-xl shadow p-6 max-w-2xl">
        <h2 className="font-semibold mb-3">שאלה {index+1} מתוך {questions.length}</h2>
        <p className="mb-4">{q.text}</p>
        <div className="flex flex-col gap-2 mb-4">
          {q.options.map((opt,i)=>(
            <button
              key={i}
              onClick={()=>checkAnswer(i)}
              className={
                "text-right border rounded px-3 py-2 " +
                (showSolution
                  ? i===q.correctIndex
                    ? "border-green-500 bg-green-50"
                    : i===selected
                      ? "border-red-500 bg-red-50"
                      : ""
                  : "hover:bg-slate-50")
              }
            >
              {opt}
            </button>
          ))}
        </div>
        {showSolution && (
          <div className="mt-4 p-3 rounded bg-slate-50 text-sm text-slate-700">
            <b>פתרון:</b> {q.solution}
          </div>
        )}
        <div className="mt-4 flex justify-between">
          <button onClick={()=>router.push("/practice")} className="text-sm text-slate-500 underline">
            חזרה לרשימת חלקים
          </button>
          <button onClick={next} className="bg-brand text-white px-4 py-2 rounded-lg text-sm font-semibold">
            שאלה הבאה
          </button>
        </div>
      </div>
    </main>
  );
}
