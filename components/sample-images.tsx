"use client"

import { useRouter } from "next/navigation"
import Image from "next/image"

// 定义数据结构：url 为预览图 (webp)，dest 为编辑器加载的图 (png)
const samples = [
  {
    id: 1,
    thumbnail: "/diverse-person-portrait.webp",
    dest: "/diverse-person-portrait.png"
  },
  {
    id: 2,
    thumbnail: "/vast-mountain-valley.webp",
    dest: "/vast-mountain-valley.png"
  },
  {
    id: 3,
    thumbnail: "/diverse-products-still-life.webp",
    dest: "/diverse-products-still-life.png"
  },
  {
    id: 4,
    thumbnail: "/abstract-geometric.webp",
    dest: "/abstract-geometric.png"
  },
]

export function SampleImages() {
  const router = useRouter()

  const handleSampleClick = (pngUrl: string) => {
    // 1. 将对应的 .png 格式图片存入存储，确保编辑器加载的是无损图
    sessionStorage.setItem("uploadedImage", pngUrl);

    // 2. 清理旧数据
    sessionStorage.removeItem("uploadedImageUrl");

    // 3. 跳转
    router.push("/editor");
  }

  return (
    <div className="w-full">
      <p className="text-[10px] font-black text-slate-400 mb-4 uppercase tracking-[0.2em] text-center sm:text-left">
        Amostras:
      </p>
      <div className="flex gap-3 md:gap-4 justify-center sm:justify-start">
        {samples.map((sample) => (
          <button
            key={sample.id}
            onClick={() => handleSampleClick(sample.dest)}
            className="relative w-14 h-14 md:w-16 md:h-16 rounded-xl md:rounded-2xl cursor-pointer overflow-hidden border-2 border-transparent hover:border-blue-500 transition-all hover:scale-110 active:scale-95 shadow-sm bg-slate-100"
          >
            {/* 使用 Next.js 内置 Image 组件优化预览图 */}
            <Image
              src={sample.thumbnail}
              alt={`Amostra ${sample.id}`}
              fill
              sizes="(max-width: 768px) 56px, 64px"
              className="object-cover"
            />
          </button>
        ))}
      </div>
    </div>
  )
}