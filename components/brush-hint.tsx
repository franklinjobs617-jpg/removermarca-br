"use client"

import { useState, useEffect } from "react"
import { Paintbrush, X } from "lucide-react"

interface BrushHintProps {
  locale?: string
  show?: boolean
}

export function BrushHint({ locale = "pt", show = true }: BrushHintProps) {
  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    if (show) {
      const timer = setTimeout(() => setIsVisible(true), 2000)
      return () => clearTimeout(timer)
    }
  }, [show])

  if (!isVisible || !show) return null

  const isEn = locale === "en"

  const content = isEn ? {
    title: "Use the Brush Tool",
    description: "Paint over the watermark areas you want to remove. Our AI will automatically detect and clean these marked regions.",
    cta: "Got it!"
  } : {
    title: "Use o Pincel",
    description: "Pinte sobre as áreas da marca d'água que deseja remover. Nossa IA detectará automaticamente e limpará essas regiões marcadas.",
    cta: "Entendi!"
  }

  return (
    <div className="absolute top-4 left-1/2 -translate-x-1/2 max-w-sm bg-blue-600 text-white rounded-2xl p-4 shadow-2xl z-50 animate-in slide-in-from-top duration-500">
      <button
        onClick={() => setIsVisible(false)}
        className="absolute top-2 right-2 p-1 text-blue-200 hover:text-white rounded-full hover:bg-blue-500 transition-colors"
      >
        <X size={14} />
      </button>

      <div className="flex items-start gap-3">
        <div className="p-2 bg-blue-500 rounded-lg shrink-0">
          <Paintbrush size={16} />
        </div>
        <div>
          <h3 className="font-black text-sm mb-2">{content.title}</h3>
          <p className="text-blue-100 text-xs leading-relaxed mb-3 font-medium">
            {content.description}
          </p>
          <button
            onClick={() => setIsVisible(false)}
            className="text-xs font-bold bg-white text-blue-600 px-3 py-1 rounded-lg hover:bg-blue-50 transition-colors"
          >
            {content.cta}
          </button>
        </div>
      </div>
    </div>
  )
}