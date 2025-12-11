
import type { NextApiRequest, NextApiResponse } from "next";

const questions = [
  // Quantitative
  {
    id: 1,
    topic: "quant",
    text: "אחוזים: מחיר מוצר עלה מ-80 ל-100. בכמה אחוזים עלה המחיר?",
    options: ["20%", "25%", "30%", "40%"],
    correctIndex: 1,
    solution: "ההפרש הוא 20 על בסיס 80: 20/80=0.25 לכן 25%."
  },
  {
    id: 2,
    topic: "quant",
    text: "משוואה: פתרו את x במשוואה 3x + 6 = 15.",
    options: ["x = 2", "x = 3", "x = 4", "x = 5"],
    correctIndex: 1,
    solution: "3x+6=15 => 3x=9 => x=3."
  },
  // Verbal
  {
    id: 3,
    topic: "verbal",
    text: "אנלוגיות: ספר : ספרייה = ?",
    options: ["עץ : יער", "תלמיד : כיתה", "סירה : ים", "שלג : חורף"],
    correctIndex: 0,
    solution: "ספרים נמצאים בספרייה כמו עצים ביער."
  },
  {
    id: 4,
    topic: "verbal",
    text: "השלמת משפט: "הוא עבד קשה ______ שלא ירגיש חוסר ביטחון בבחינה."",
    options: ["כדי", "אף על פי", "מכיוון", "לכן"],
    correctIndex: 0,
    solution: "הכוונה למטרת העבודה הקשה: כדי שלא ירגיש חוסר ביטחון."
  },
  // English
  {
    id: 5,
    topic: "english",
    text: "Choose the correct word: "Her explanation was very ____; everyone understood the idea."",
    options: ["confusing", "clear", "rare", "weak"],
    correctIndex: 1,
    solution: ""clear" fits the meaning that everyone understood."
  },
  {
    id: 6,
    topic: "english",
    text: "Vocabulary: "rapid" means:",
    options: ["very slow", "very fast", "very old", "very loud"],
    correctIndex: 1,
    solution: ""rapid" = very fast."
  }
];

export default function handler(req: NextApiRequest, res: NextApiResponse){
  const { topic } = req.query;
  if(!topic) return res.status(400).json({ error:"topic is required" });
  const filtered = questions.filter(q=>q.topic===topic);
  res.status(200).json({ questions: filtered });
}
