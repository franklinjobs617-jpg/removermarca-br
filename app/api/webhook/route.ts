import { NextRequest, NextResponse } from 'next/server';
import { prisma } from '@/lib/prisma';

// 积分对照表
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
  try {
    // 假设支付系统回调的 JSON 包含 googleUserId 和支付成功的 type
    const { googleUserId, type, status } = await req.json();

    // 只有当 status 表示成功时（假设成功是 "success" 或 "2"）
    if (status === "success" || status === "2") {
      
      // 1. 查找对应的用户
      const user = await prisma.user.findUnique({ where: { googleUserId } });
      if (!user) return NextResponse.json({ message: "User not found" }, { status: 404 });

      // 2. 检查这笔单子是否已经加过分了（防止重复回调重复加分）
      const existingPay = await prisma.pay.findFirst({
        where: { googleUserId, type, status: "1" }, // 寻找待支付的单子
        orderBy: { createTime: 'desc' }
      });

      if (existingPay) {
        const addedCredits = getCreditsAmount(type);
        const currentCredits = parseInt(user.credits || "0");

        // 3. 事务操作：更新用户积分 + 修改订单状态为 2 (成功)
        await prisma.$transaction([
          prisma.user.update({
            where: { id: user.id },
            data: { credits: (currentCredits + addedCredits).toString() }
          }),
          prisma.pay.update({
            where: { id: existingPay.id },
            data: { status: "2" } // 设为支付成功
          })
        ]);

        console.log(`Webhook: 积分发放成功! 用户:${user.email}, 增加:${addedCredits}`);
      }
    }

    return NextResponse.json({ message: "OK" });
  } catch (error: any) {
    console.error("Webhook Error:", error.message);
    return NextResponse.json({ message: "Error" }, { status: 500 });
  }
}