"use client"

import { useRef } from "react"
import { useRouter } from "next/navigation"

interface UploadTriggerProps {
  children: React.ReactNode
  className?: string
  locale?: string
}

export function UploadTrigger({ children, className = "", locale = "pt" }: UploadTriggerProps) {
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

  const handleClick = (e: React.MouseEvent) => {
    e.preventDefault()
    fileInputRef.current?.click()
  }

  return (
    <>
      <input
        type="file"
        ref={fileInputRef}
        onChange={handleFileChange}
        accept="image/*"
        className="hidden"
      />
      <button
        onClick={handleClick}
        className={className}
      >
        {children}
      </button>
    </>
  )
}