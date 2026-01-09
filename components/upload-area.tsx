"use client"

import type React from "react"

import { useState } from "react"
import { useRouter } from "next/navigation"

export function UploadArea() {
  const [isDragging, setIsDragging] = useState(false)
  const router = useRouter()

  const handleDragOver = (e: React.DragEvent) => {
    e.preventDefault()
    setIsDragging(true)
  }

  const handleDragLeave = () => {
    setIsDragging(false)
  }

  const handleDrop = (e: React.DragEvent) => {
    e.preventDefault()
    setIsDragging(false)

    const files = Array.from(e.dataTransfer.files)
    if (files.length > 0 && files[0].type.startsWith("image/")) {
      sessionStorage.setItem("uploadedImage", URL.createObjectURL(files[0]))
      router.push("/editor")
    }
  }

  const handleFileSelect = (e: React.ChangeEvent<HTMLInputElement>) => {
    const files = e.target.files
    if (files && files.length > 0) {
      sessionStorage.setItem("uploadedImage", URL.createObjectURL(files[0]))
      router.push("/editor")
    }
  }

  return (
    <div
      className={`relative bg-gradient-to-br from-blue-50 to-cyan-50 rounded-3xl p-8 border-2 border-dashed transition-all ${
        isDragging ? "border-blue-500 bg-blue-100 scale-105" : "border-gray-300"
      }`}
      onDragOver={handleDragOver}
      onDragLeave={handleDragLeave}
      onDrop={handleDrop}
    >
      <div className="flex flex-col items-center gap-6">
        {/* Upload Icon */}
        <div className="w-16 h-16 bg-blue-500 rounded-full flex items-center justify-center shadow-lg">
          <svg className="w-8 h-8 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M7 16a4 4 0 01-.88-7.903A5 5 0 1115.9 6L16 6a5 5 0 011 9.9M15 13l-3-3m0 0l-3 3m3-3v12"
            />
          </svg>
        </div>

        {/* Upload Button */}
        <label className="cursor-pointer">
          <input type="file" accept="image/*" className="hidden" onChange={handleFileSelect} />
          <div className="px-12 py-4 bg-blue-500 text-white rounded-full font-bold text-lg hover:bg-blue-600 transition-all hover:shadow-lg hover:scale-105">
            UPLOAD FOTO
          </div>
        </label>

        {/* Drag Text */}
        <p className="text-gray-600 font-medium">Arraste aqui</p>
      </div>
    </div>
  )
}
