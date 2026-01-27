"use client"

import { useState, useRef, useCallback } from "react"
import Image from "next/image"
import { usePathname } from "next/navigation" // 引入路径检测钩子

export function BeforeAfterSlider() {
  const pathname = usePathname() // 获取当前路径
  const [sliderPosition, setSliderPosition] = useState(50)
  const [isDragging, setIsDragging] = useState(false)
  const containerRef = useRef<HTMLDivElement>(null)

  // 判断是否为英文环境
  const isEn = pathname?.startsWith('/en')

  // 定义多语言文案
  const labels = {
    before: isEn ? "Before" : "Antes",
    after: isEn ? "After" : "Depois",
    altBefore: isEn ? "Photo before removing watermark" : "Antes de remover marca d'água",
    altAfter: isEn ? "Photo after removing watermark" : "Depois de remover marca d'água"
  }

  const handleMove = useCallback((clientX: number) => {
    if (!containerRef.current) return

    const rect = containerRef.current.getBoundingClientRect()
    const x = clientX - rect.left
    const percentage = (x / rect.width) * 100

    setSliderPosition(Math.min(Math.max(percentage, 0), 100))
  }, [])

  const handleMouseDown = () => setIsDragging(true)
  const handleMouseUp = () => setIsDragging(false)

  const handleMouseMove = (e: React.MouseEvent) => {
    if (!isDragging) return
    handleMove(e.clientX)
  }

  const handleTouchMove = (e: React.TouchEvent) => {
    if (!isDragging) return
    handleMove(e.touches[0].clientX)
  }

  return (
    <div
      ref={containerRef}
      className="relative w-full h-[300px] md:h-[400px] rounded-2xl overflow-hidden cursor-ew-resize select-none shadow-inner bg-slate-100"
      onMouseDown={handleMouseDown}
      onMouseUp={handleMouseUp}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseUp}
      onTouchStart={handleMouseDown}
      onTouchEnd={handleMouseUp}
      onTouchMove={handleTouchMove}
    >
      {/* Before Image (带有水印) */}
      <div className="absolute inset-0">
        <Image
          src="/images/image-before.webp"
          alt={labels.altBefore} // 适配 SEO
          fill
          priority
          fetchPriority="high"
          sizes="(max-width: 768px) 100vw, 50vw"
          className="object-cover pointer-events-none"
        />
      </div>

      {/* After Image (清理后的) */}
      <div
        className="absolute inset-0 overflow-hidden"
        style={{ clipPath: `inset(0 ${100 - sliderPosition}% 0 0)` }}
      >
        <Image
          src="/images/image.avif"
          alt={labels.altAfter} // 适配 SEO
          fill
          priority
          fetchPriority="high"
          sizes="(max-width: 768px) 100vw, 50vw"
          className="object-cover pointer-events-none"
        />
      </div>

      {/* Slider Handle (中间的滑块线) */}
      <div
        className="absolute top-0 bottom-0 w-1 bg-white shadow-[0_0_10px_rgba(0,0,0,0.2)] z-10"
        style={{ left: `${sliderPosition}%` }}
      >
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-10 h-10 md:w-12 md:h-12 bg-white rounded-full shadow-2xl flex items-center justify-center border border-slate-200 group-active:scale-90 transition-transform">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 512 512"
            className="w-4 h-4 text-slate-600"
            fill="currentColor"
          >
            <path d="M502.6 406.6l-96 96c-9.2 9.2-22.9 11.9-34.9 6.9S352 492.9 352 480l0-64-320 0c-17.7 0-32-14.3-32-32s14.3-32 32-32l320 0 0-64c0-12.9 7.8-24.6 19.8-29.6s25.7-2.2 34.9 6.9l96 96c12.5 12.5 12.5 32.8 0 45.3zM9.4 150.6c-12.5-12.5-12.5-32.8 0-45.3l96-96c9.2-9.2 22.9-11.9 34.9-6.9S160 19.1 160 32l0 64 320 0c17.7 0 32 14.3 32 32s-14.3 32-32 32l-320 0 0 64c0 12.9-7.8 24.6-19.8 29.6s-25.7 2.2-34.9-6.9l-96-96z" />
          </svg>
        </div>
      </div>

      {/* 视觉提示标签 */}
      <div className="absolute bottom-4 left-4 z-20 pointer-events-none">
        <span className="bg-black/40 backdrop-blur-md text-white text-[10px] px-2 py-1 rounded font-bold uppercase tracking-widest">
          {labels.before}
        </span>
      </div>
      <div className="absolute bottom-4 right-4 z-20 pointer-events-none">
        <span className="bg-blue-600/60 backdrop-blur-md text-white text-[10px] px-2 py-1 rounded font-bold uppercase tracking-widest">
          {labels.after}
        </span>
      </div>
    </div>
  )
}