"use client"

import { useRef } from "react"

export function UploadArea() {
  const fileInputRef = useRef<HTMLInputElement>(null)

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0]
    if (file) {
      const reader = new FileReader()
      reader.onload = (event) => {
        sessionStorage.setItem("uploadedImage", event.target?.result as string)
        window.location.href = "/editor"
      }
      reader.readAsDataURL(file)
    }
  }

  return (
    <div className="w-full flex flex-col items-center">
      
      <input
        type="file"
        ref={fileInputRef}
        onChange={handleFileChange}
        accept="image/*"
        className="hidden"
      />
      
      {/* 1:1 还原 remove.bg 的蓝色大按钮 */}
      <button 
        onClick={() => fileInputRef.current?.click()}
        className="w-full max-w-[400px] bg-[#007bff] hover:bg-[#0069d9] cursor-pointer text-white py-5 rounded-full font-black text-xl md:text-2xl shadow-[0_15px_30px_rgba(0,123,255,0.3)] transition-all active:scale-[0.98] uppercase tracking-widest mb-6"
      >
        Subir imagem
      </button>
      
      {/* 桌面端显示的辅助文字 */}
      <div className="hidden lg:block text-center space-y-2">
        <p className="text-slate-900 font-bold text-xl">ou arraste um arquivo,</p>
        <p className="text-slate-400 text-sm font-medium">Cole imagem ou <span className="text-blue-500 underline">URL</span></p>
      </div>
    </div>
  )
}