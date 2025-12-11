
import type { NextApiRequest, NextApiResponse } from "next";
import { prisma } from "../../lib/prisma";
import bcrypt from "bcryptjs";

export default async function handler(req: NextApiRequest, res: NextApiResponse){
  if(req.method !== "POST") return res.status(405).end();
  const { email, password } = req.body;
  if(!email || !password) return res.status(400).json({ error:"email and password required" });
  const hashed = await bcrypt.hash(password,10);
  const user = await prisma.user.create({
    data: { email, password: hashed }
  });
  res.status(201).json({ id: user.id, email: user.email });
}
