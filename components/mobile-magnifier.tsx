"use client"

import { useState, useEffect, useRef } from "react"

interface MobileMagnifierProps {
  isActive: boolean
  imageUrl: string
  touchPosition: { x: number; y: number }
  containerRef: React.RefObject<HTMLElement>
  zoom?: number
}

export function MobileMagnifier({ 
  isActive, 
  imageUrl, 
  touchPosition, 
  containerRef,
  zoom = 2 
}: MobileMagnifierProps) {
  const [magnifierPosition, setMagnifierPosition] = useState({ x: 0, y: 0 })
  const [isVisible, setIsVisible] = useState(false)
  const magnifierRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    if (!isActive || !containerRef.current) {
      setIsVisible(false)
      return
    }

    const container = containerRef.current
    const containerRect = container.getBoundingClientRect()
    
    // 计算放大镜位置（在手指上方2厘米处）
    const magnifierSize = 80
    const offsetY = -100 // 手指上方2厘米
    
    let x = touchPosition.x - magnifierSize / 2
    let y = touchPosition.y + offsetY - magnifierSize / 2

    // 边界检测，确保放大镜不超出屏幕
    const screenPadding = 10
    x = Math.max(screenPadding, Math.min(x, window.innerWidth - magnifierSize - screenPadding))
    y = Math.max(screenPadding, Math.min(y, window.innerHeight - magnifierSize - screenPadding))

    setMagnifierPosition({ x, y })
    setIsVisible(true)
  }, [isActive, touchPosition, containerRef])

  if (!isVisible || !isActive) return null

  // 计算背景位置以显示正确的图像区域
  const backgroundX = -(touchPosition.x * zoom - 40)
  const backgroundY = -(touchPosition.y * zoom - 40)

  return (
    <div
      ref={magnifierRef}
      className="fixed pointer-events-none z-[200] w-20 h-20 rounded-full border-4 border-white shadow-2xl overflow-hidden"
      style={{
        left: magnifierPosition.x,
        top: magnifierPosition.y,
        backgroundImage: `url(${imageUrl})`,
        backgroundSize: `${zoom * 100}%`,
        backgroundPosition: `${backgroundX}px ${backgroundY}px`,
        backgroundRepeat: 'no-repeat'
      }}
    >
      {/* 十字准线 */}
      <div className="absolute inset-0 flex items-center justify-center">
        <div className="w-full h-px bg-blue-500 opacity-50"></div>
        <div className="absolute w-px h-full bg-blue-500 opacity-50"></div>
      </div>
      
      {/* 放大倍数指示器 */}
      <div className="absolute bottom-1 right-1 bg-black bg-opacity-70 text-white text-xs px-1 rounded">
        {zoom}x
      </div>
    </div>
  )
}