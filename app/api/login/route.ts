import { NextRequest, NextResponse } from 'next/server';
import jwt from 'jsonwebtoken';
import { prisma } from '@/lib/prisma';

export async function POST(req: NextRequest) {
  try {
    const { token, guestCredits } = await req.json(); // 前端传来的 ya29... 令牌和游客积分

    // 1. 获取客户端 IP
    const forwarded = req.headers.get('x-forwarded-for');
    const ip = forwarded ? forwarded.split(',')[0] : '127.0.0.1';

    // 2. 向谷歌验证 Access Token 并获取用户信息
    const googleRes = await fetch(`https://www.googleapis.com/oauth2/v3/userinfo`, {
      headers: { Authorization: `Bearer ${token}` }
    });
    
    const payload = await googleRes.json();
    
    if (!payload || !payload.email) {
      throw new Error("Token Google inválido");
    }

    const email = payload.email;
    const googleId = payload.sub;
    const bonus = parseInt(guestCredits || "0"); // 待合并的游客积分

    const today = new Date();
    today.setHours(0, 0, 0, 0);

    let user = await prisma.user.findUnique({ where: { email } });

    if (user) {
      // --- 老用户：合并逻辑 ---
      const current = parseInt(user.credits || "0");
      let finalCredits = current + bonus; // 现有积分 + 游客积分

      const lastActive = user.updateTime ? new Date(user.updateTime) : new Date(0);
      lastActive.setHours(0, 0, 0, 0);

      // 执行每日补分：如果合并后还是0分且跨天了，补到1分
      if (lastActive < today && finalCredits === 0) {
        finalCredits = 1;
      }

      const updateData: any = {
        accessToken: token,
        ip: ip,
        credits: finalCredits.toString()
      };

      user = await prisma.user.update({
        where: { id: user.id },
        data: updateData
      });
    } else {
      // --- 新用户：合并逻辑 ---
      user = await prisma.user.create({
        data: { 
          email, 
          googleUserId: googleId, 
          name: payload.name, 
          givenName: payload.given_name,
          familyName: payload.family_name,
          picture: payload.picture, 
          credits: (3 + bonus).toString(), // 初始3分 + 游客积分
          score: "3",
          accessToken: token,
          ip: ip,
          type: "3"
        }
      });
    }

    // 生成你自己应用的 JWT
    const JWT_SECRET = process.env.JWT_SECRET || "removermarca-v2-prod-secret-key-2026-pt-br-secure";
    const serverToken = jwt.sign({ email }, JWT_SECRET, { expiresIn: '7d' });

    return NextResponse.json({
      status: "success",
      token: serverToken,
      user: { email: user.email, credits: parseInt(user.credits || "0") }
    });

  } catch (error: any) {
    console.error("Auth Error:", error.message);
    return NextResponse.json({ status: "error", message: error.message }, { status: 401 });
  }
}