import { NextRequest, NextResponse } from 'next/server';
import jwt from 'jsonwebtoken';
import { prisma } from '@/lib/prisma';

export async function GET(req: NextRequest) {
  const authHeader = req.headers.get('Authorization');
  if (!authHeader) return NextResponse.json({ status: "error" }, { status: 401 });

  try {
    const token = authHeader.split(" ")[1];

    const JWT_SECRET = process.env.JWT_SECRET || "removermarca-v2-prod-secret-key-2026-pt-br-secure";

    const decoded: any = jwt.verify(token, JWT_SECRET!);

    let user = await prisma.user.findUnique({ where: { email: decoded.email } });

    // 如果找不到用户或者用户没有 email，直接返回错误
    if (!user || !user.email) return NextResponse.json({ status: "error" }, { status: 404 });

    const today = new Date();
    today.setHours(0, 0, 0, 0);
    const lastActive = user.updateTime ? new Date(user.updateTime) : new Date(0);
    lastActive.setHours(0, 0, 0, 0);

    // 刷新页面时的每日补分逻辑
    if (lastActive < today) {
      if (parseInt(user.credits || "0") === 0) {
        // 【关键修复】：使用 id 进行更新，避免 email 的类型报错
        user = await prisma.user.update({
          where: { id: user.id },
          data: { credits: "1" }
        });
      }
    }

    return NextResponse.json({
      status: "success",
      user: { email: user.email, credits: parseInt(user.credits || "0") }
    });
  } catch (e) {
    return NextResponse.json({ status: "error" }, { status: 401 });
  }
}