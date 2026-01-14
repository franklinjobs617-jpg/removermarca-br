import { NextRequest, NextResponse } from 'next/server';
import jwt from 'jsonwebtoken';
import { prisma } from '@/lib/prisma';

// 积分对应表：根据 type 确定增加多少积分
const getCreditsAmount = (type: string): number => {
  if (type.includes('credits_200')) return 200;
  if (type.includes('credits_50')) return 50;
  if (type.includes('credits_10')) return 10;
  if (type.includes('plan_studio')) return 1000;
  if (type.includes('plan_expert')) return 300;
  if (type.includes('plan_basic')) return 45;
  if (type.includes('plan_pro')) return 120;
  if (type.includes('plan_mini')) return 15;
  return 0;
};

export async function POST(req: NextRequest) {
  const authHeader = req.headers.get('Authorization');
  if (!authHeader) return NextResponse.json({ status: "error" }, { status: 401 });

  try {
    const token = authHeader.split(" ")[1];
    const decoded: any = jwt.verify(token, process.env.JWT_SECRET!);
    const { type } = await req.json();

    // 1. 查找用户
    const user = await prisma.user.findUnique({ where: { email: decoded.email } });
    if (!user) throw new Error("User not found");

    // 2. 调用外部 Stripe 接口获取支付 URL (走 Next.js 服务端 fetch，无跨域限制)
    const stripeRes = await fetch('https://inewline.com/prod-api/stripe/getPayUrl', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({
        googleUserId: user.email,
        type: type
      })
    });

    const resData = await stripeRes.json();

    if (resData.code === 200 && resData.data) {
      // 3. 【核心逻辑】：更新用户积分 (注意数据库是 varchar 类型)
      const addedCredits = getCreditsAmount(type);
      const currentCredits = parseInt(user.credits || "0");
      const currentScore = parseInt(user.score || "0");

      await prisma.user.update({
        where: { id: user.id },
        data: {
          credits: (currentCredits + addedCredits).toString(),
          score: (currentScore + addedCredits).toString()
        }
      });

      // 4. 记录支付流水
      await prisma.pay.create({
        data: {
          userId: user.id,
          email: user.email,
          googleUserId: user.googleUserId,
          type: type,
          checkoutUrl: resData.data,
          status: "1", // 1.待支付
          businessType: "3", // Stripe
          orderNo: `RE-${Date.now()}`
        }
      });

      return NextResponse.json({ status: "success", url: resData.data });
    }
    
    return NextResponse.json({ status: "error", message: resData.msg }, { status: 400 });

  } catch (error: any) {
    console.error("Pay Route Error:", error.message);
    return NextResponse.json({ status: "error", message: error.message }, { status: 500 });
  }
}