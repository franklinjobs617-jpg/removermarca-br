import { NextRequest, NextResponse } from 'next/server';
import jwt from 'jsonwebtoken';
import { prisma } from '@/lib/prisma';

export async function POST(req: NextRequest) {
  try {
    const { token } = await req.json(); // 仅接收谷歌 Token

    // 1. 验证谷歌身份
    const googleRes = await fetch(`https://www.googleapis.com/oauth2/v3/userinfo`, {
      headers: { Authorization: `Bearer ${token}` }
    });
    const payload = await googleRes.json();
    if (!payload || !payload.email) throw new Error("Token Google inválido");

    const email = payload.email;
    const today = new Date();
    today.setHours(0, 0, 0, 0);

    let user = await prisma.user.findUnique({ where: { email } });

    if (user) {
      // --- 老用户：执行账户本身的每日补分逻辑 ---
      const lastActive = user.updateTime ? new Date(user.updateTime) : new Date(0);
      lastActive.setHours(0, 0, 0, 0);

      // 规则：跨天且账户积分为0，补到1分。不与任何外部积分合并。
      if (lastActive < today && parseInt(user.credits || "0") === 0) {
        user = await prisma.user.update({
          where: { id: user.id },
          data: {
            credits: "1",
            accessToken: token,
            ip: req.headers.get('x-forwarded-for')?.split(',')[0] || '127.0.0.1'
          }
        });
      }
    } else {
      // --- 新用户：初始赠送 3 分 ---
      user = await prisma.user.create({
        data: { 
          email, 
          googleUserId: payload.sub, 
          name: payload.name, 
          credits: "3", // 仅账户分
          score: "3",
          accessToken: token,
          ip: req.headers.get('x-forwarded-for')?.split(',')[0] || '127.0.0.1',
          type: "3"
        }
      });
    }

    const JWT_SECRET = process.env.JWT_SECRET || "removermarca-v2-prod-secret-key-2026-pt-br-secure";
    const serverToken = jwt.sign({ email }, JWT_SECRET, { expiresIn: '7d' });

    return NextResponse.json({
      status: "success",
      token: serverToken,
      user: { email: user.email, credits: parseInt(user.credits || "0") }
    });

  } catch (error: any) {
    return NextResponse.json({ status: "error", message: error.message }, { status: 401 });
  }
}