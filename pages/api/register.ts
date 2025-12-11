
import { prisma } from "../../lib/prisma";

export default async function handler(req,res){
  if(req.method!=='POST') return res.status(405).end();
  const user = await prisma.user.create({ data:req.body });
  res.json(user);
}
