"use client"

import { useState, useRef, useCallback } from "react"
import Image from "next/image"
import { usePathname } from "next/navigation"

interface BeforeAfterSliderProps {
  beforeImage?: string
  afterImage?: string
  beforeLabel?: string
  afterLabel?: string
}

export function BeforeAfterSlider({
  beforeImage = "/images/image-before.webp",
  afterImage = "/images/image.avif",
  beforeLabel,
  afterLabel
}: BeforeAfterSliderProps) {
  const pathname = usePathname()
  const [sliderPosition, setSliderPosition] = useState(50)
  const [isDragging, setIsDragging] = useState(false)
  const containerRef = useRef<HTMLDivElement>(null)

  const isEn = pathname?.startsWith('/en')

  const labels = {
    before: beforeLabel || (isEn ? "Before" : "Antes"),
    after: afterLabel || (isEn ? "After" : "Depois"),
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
      className="relative w-full h-[300px] md:h-[500px] rounded-[32px] overflow-hidden cursor-ew-resize select-none shadow-2xl bg-slate-100 group"
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
          src={beforeImage}
          alt={labels.altBefore}
          fill
          priority
          fetchPriority="high"
          className="object-cover pointer-events-none"
        />
      </div>

      {/* After Image (清理后的) */}
      <div
        className="absolute inset-0 overflow-hidden"
        style={{ clipPath: `inset(0 ${100 - sliderPosition}% 0 0)` }}
      >
        <Image
          src={afterImage}
          alt={labels.altAfter}
          fill
          priority
          fetchPriority="high"
          className="object-cover pointer-events-none"
        />
      </div>

      {/* Slider Handle (中间的滑块线) */}
      <div
        className="absolute top-0 bottom-0 w-1 bg-white shadow-[0_0_10px_rgba(0,0,0,0.3)] z-10"
        style={{ left: `${sliderPosition}%` }}
      >
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-12 h-12 bg-white rounded-full shadow-2xl flex items-center justify-center border-4 border-white group-active:scale-90 transition-transform">
          <div className="flex gap-1">
            <div className="w-1.5 h-6 bg-slate-200 rounded-full" />
            <div className="w-1.5 h-6 bg-slate-200 rounded-full" />
          </div>
        </div>
      </div>

      {/* 视觉提示标签 */}
      <div className="absolute top-6 left-6 z-20 pointer-events-none">
        <span className="bg-black/20 backdrop-blur-md text-white text-xs px-4 py-2 rounded-full font-black uppercase tracking-widest border border-white/20">
          {labels.before}
        </span>
      </div>
      <div className="absolute top-6 right-6 z-20 pointer-events-none">
        <span className="bg-purple-600/60 backdrop-blur-md text-white text-xs px-4 py-2 rounded-full font-black uppercase tracking-widest border border-white/20">
          {labels.after}
        </span>
      </div>
    </div>
  )
}