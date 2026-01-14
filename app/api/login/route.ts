import { NextRequest, NextResponse } from 'next/server';
import jwt from 'jsonwebtoken';
import { prisma } from '@/lib/prisma';

export async function POST(req: NextRequest) {
  try {
    const { token } = await req.json(); // 前端传来的 ya29... 令牌

    // 1. 获取客户端 IP
    const forwarded = req.headers.get('x-forwarded-for');
    const ip = forwarded ? forwarded.split(',')[0] : '127.0.0.1';

    // 2. 向谷歌验证 Access Token 并获取用户信息
    // 这一步是安全的，谷歌会返回该 token 对应的用户资料
    const googleRes = await fetch(`https://www.googleapis.com/oauth2/v3/userinfo`, {
      headers: { Authorization: `Bearer ${token}` }
    });
    
    const payload = await googleRes.json();
    
    if (!payload || !payload.email) {
      throw new Error("Token Google inválido");
    }

    const email = payload.email;
    const googleId = payload.sub;

    const today = new Date();
    today.setHours(0, 0, 0, 0);

    let user = await prisma.user.findUnique({ where: { email } });

    if (user) {
      // --- 老用户：更新逻辑 ---
      const updateData: any = {
        accessToken: token, // 存入 ya29 格式
        ip: ip,
      };

      const lastActive = user.updateTime ? new Date(user.updateTime) : new Date(0);
      lastActive.setHours(0, 0, 0, 0);

      if (lastActive < today) {
        if (parseInt(user.credits || "0") === 0) {
          updateData.credits = "1";
        }
      }

      user = await prisma.user.update({
        where: { id: user.id },
        data: updateData
      });
    } else {
      // --- 新用户：创建逻辑 ---
      user = await prisma.user.create({
        data: { 
          email, 
          googleUserId: googleId, 
          name: payload.name, 
          givenName: payload.given_name,
          familyName: payload.family_name,
          picture: payload.picture, 
          credits: "3",
          score: "3",
          accessToken: token, // 存入 ya29 格式
          ip: ip,
          type: "3"
        }
      });
    }

    // 生成你自己应用的 JWT
    const serverToken = jwt.sign({ email }, process.env.JWT_SECRET!, { expiresIn: '7d' });

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