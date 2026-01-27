"use client"

import { useRef } from "react"
import { useRouter } from "next/navigation"

// 定义组件接收的文字接口
interface UploadAreaProps {
  buttonText: string;
  dragText: string;
  pasteLabel: string;
  pasteAction: string;
  locale?: string; // 新增：用于判断跳转路径
}

export function UploadArea({ buttonText, dragText, pasteLabel, pasteAction, locale = "pt" }: UploadAreaProps) {
  const fileInputRef = useRef<HTMLInputElement>(null)
  const router = useRouter()

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0]
    if (file) {
      const blobUrl = URL.createObjectURL(file)
      sessionStorage.setItem("uploadedImage", blobUrl)
      const targetPath = locale === "en" ? "/en/editor" : "/editor"
      router.push(targetPath)
    }
  }

  return (
    <div className="w-full mt-4 md:mt-0">
      <div className="flex flex-col items-center justify-center text-center group h-full w-full">
        <input
          type="file"
          ref={fileInputRef}
          onChange={handleFileChange}
          accept="image/*"
          className="hidden"
        />

        <button
          onClick={(e) => { e.stopPropagation(); fileInputRef.current?.click(); }}
          className="bg-[#007bff] hover:bg-[#0069d9] text-white px-14 py-5 rounded-3xl font-black text-2xl md:text-3xl transition-all active:scale-95 mb-12 shadow-2xl shadow-blue-200 tracking-tight uppercase"
        >
          {/* 注入按钮文字 */}
          {buttonText}
        </button>

        <div className="space-y-3">
          <h3 className="text-2xl md:text-3xl font-black text-[#1e293b] tracking-tighter">
            {/* 注入拖拽文字 */}
            {dragText}
          </h3>
          <p className="text-slate-400 text-sm font-bold tracking-tight">
            {/* 注入粘贴文字 */}
            {pasteLabel} <span className="text-blue-500 font-extrabold cursor-help border-b border-blue-200">{pasteAction}</span>
          </p>
        </div>
      </div>
    </div>
  )
}