import { NextRequest, NextResponse } from 'next/server';
import jwt from 'jsonwebtoken';
import { prisma } from '@/lib/prisma';

export async function POST(req: NextRequest) {
  const authHeader = req.headers.get('Authorization');
  if (!authHeader) return NextResponse.json({ status: "error" }, { status: 401 });

  try {
    const token = authHeader.split(" ")[1];
    const decoded: any = jwt.verify(token, process.env.JWT_SECRET!);
    const { type } = await req.json();

    const user = await prisma.user.findUnique({ where: { email: decoded.email } });
    if (!user || !user.googleUserId) throw new Error("Usuário não identificado");

    // 1. 仅请求支付链接
    const stripeRes = await fetch('https://api.removermarca.com/prod-api/stripe/getPayUrl', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({
        googleUserId: user.googleUserId, 
        type: type
      })
    });

    const resData = await stripeRes.json();

    if (stripeRes.ok && resData.code === 200 && resData.data) {
      // 2. 在数据库记录这笔单子，状态为 "1" (待支付)
      // 注意：此时绝对不操作 user 表的 credits 字段
      await prisma.pay.create({
        data: {
          userId: user.id,
          email: user.email,
          googleUserId: user.googleUserId,
          type: type,
          checkoutUrl: resData.data,
          status: "1", // 待支付
          businessType: "3", // Stripe
          orderNo: `RE-${Date.now()}` // 生成唯一订单号
        }
      });

      return NextResponse.json({ status: "success", url: resData.data });
    }
    
    return NextResponse.json({ status: "error", message: resData.msg }, { status: 400 });

  } catch (error: any) {
    return NextResponse.json({ status: "error", message: error.message }, { status: 500 });
  }
}