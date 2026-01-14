import { NextRequest, NextResponse } from 'next/server';
import jwt from 'jsonwebtoken';
import { prisma } from '@/lib/prisma';

export async function POST(req: NextRequest) {
  const authHeader = req.headers.get('Authorization');
  if (!authHeader) return NextResponse.json({ status: "error" }, { status: 401 });

  try {
    const token = authHeader.split(" ")[1];
    const decoded: any = jwt.verify(token, process.env.JWT_SECRET!);
    
    const user = await prisma.user.findUnique({ where: { email: decoded.email } });
    if (!user) return NextResponse.json({ status: "error" }, { status: 404 });

    const currentCredits = parseInt(user.credits || "0");

    if (currentCredits > 0) {
      // 【关键修复】：使用 id 进行更新
      const updated = await prisma.user.update({
        where: { id: user.id },
        data: { credits: (currentCredits - 1).toString() }
      });
      return NextResponse.json({ status: "success", credits: parseInt(updated.credits || "0") });
    }
    return NextResponse.json({ status: "error", message: "Créditos insuficientes" }, { status: 402 });
  } catch (e) {
    return NextResponse.json({ status: "error" }, { status: 401 });
  }
}