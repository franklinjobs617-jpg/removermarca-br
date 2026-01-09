import { NextRequest, NextResponse } from 'next/server';

const API_KEY = process.env.PICWISH_API_KEY;
const API_BASE = "https://techhk.aoscdn.com/api/tasks/visual/external/watermark-remove";

// 轮询工具函数
const polling = async (taskId: string): Promise<string> => {
  const maxAttempts = 30; // 最大尝试次数
  for (let i = 0; i < maxAttempts; i++) {
    const res = await fetch(`${API_BASE}/${taskId}`, {
      headers: { "X-API-KEY": API_KEY! },
    });
    const json = await res.json();

    if (json.data) {
      const { progress, state, file } = json.data;
      if (state < 0) throw new Error("Processing failed");
      if (progress >= 100 && file) return file; // 处理完成，返回结果图链接
    }
    
    await new Promise(resolve => setTimeout(resolve, 1000)); // 等待1秒
  }
  throw new Error("Polling timeout");
};

export async function POST(req: NextRequest) {
  try {
    const formData = await req.formData();
    
    // 1. 创建任务
    // 注意：如果是从前端传来的文件，formData里应该有名为 'file' 的项
    const response = await fetch(API_BASE, {
      method: "POST",
      headers: { "X-API-KEY": API_KEY! },
      body: formData, // 直接转发接收到的 formData (包含图片文件)
    });

    const result = await response.json();

    if (result.status !== 200 || !result.data?.task_id) {
      return NextResponse.json({ error: result.message || "Failed to create task" }, { status: 400 });
    }

    // 2. 开始轮询结果
    const imageUrl = await polling(result.data.task_id);

    return NextResponse.json({ status: 200, url: imageUrl });
  } catch (error: any) {
    console.error("API Error:", error);
    return NextResponse.json({ error: error.message || "Internal Server Error" }, { status: 500 });
  }
}