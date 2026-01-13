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
          className="bg-[#007bff] hover:bg-[#0069d9] text-white px-14 py-5 rounded-[24px] font-black text-2xl md:text-3xl transition-all active:scale-95 mb-12 shadow-2xl shadow-blue-200 tracking-tight"
        >
          Subir imagem
        </button>
        
        <div className="space-y-3">
          <h3 className="text-2xl md:text-3xl font-black text-[#1e293b] tracking-tighter">
            ou arraste um arquivo,
          </h3>
          <p className="text-slate-400 text-sm font-bold tracking-tight">
            Cole imagem ou <span className="text-blue-500 font-extrabold cursor-help border-b border-blue-200">Ctrl+V</span>
          </p>
        </div>
      </div>
    </div>
  )
}