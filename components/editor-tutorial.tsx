"use client"

import { useState, useEffect } from "react"
import { X, ArrowRight, MousePointer2, ZoomIn, Download } from "lucide-react"

interface EditorTutorialProps {
  isOpen: boolean
  onClose: () => void
  locale: string
}

export function EditorTutorial({ isOpen, onClose, locale }: EditorTutorialProps) {
  const [currentStep, setCurrentStep] = useState(0)

  const steps = locale === 'en' ? [
    {
      title: "Welcome to the Editor!",
      description: "Let's take a quick tour to help you get the most out of our AI watermark removal tool.",
      icon: <MousePointer2 className="w-6 h-6 text-blue-600" />
    },
    {
      title: "Upload Your Image",
      description: "Click the + button on the left sidebar to add more images, or drag and drop files directly onto the editor.",
      icon: <ArrowRight className="w-6 h-6 text-blue-600" />
    },
    {
      title: "Mark the Watermark",
      description: "Use the brush tool to paint over the watermark areas you want to remove. The AI will automatically detect and remove these marked areas.",
      icon: <MousePointer2 className="w-6 h-6 text-blue-600" />
    },
    {
      title: "Use the Tools",
      description: "Use the zoom controls at the top to get a better view. Hold and drag to move the image around.",
      icon: <ZoomIn className="w-6 h-6 text-blue-600" />
    },
    {
      title: "Save Your Work",
      description: "Once processing is complete, click the SAVE button to download your clean image.",
      icon: <Download className="w-6 h-6 text-blue-600" />
    }
  ] : [
    {
      title: "Bem-vindo ao Editor!",
      description: "Vamos fazer um tour rápido para ajudar você a aproveitar ao máximo nossa ferramenta de IA para remover marca d'água.",
      icon: <MousePointer2 className="w-6 h-6 text-blue-600" />
    },
    {
      title: "Carregue Sua Imagem",
      description: "Clique no botão + na barra lateral esquerda para adicionar mais imagens, ou arraste e solte arquivos diretamente no editor.",
      icon: <ArrowRight className="w-6 h-6 text-blue-600" />
    },
    {
      title: "Marque a Marca d'Água",
      description: "Use o pincel para pintar sobre as áreas da marca d'água que deseja remover. Nossa IA detectará automaticamente e removerá essas áreas marcadas.",
      icon: <MousePointer2 className="w-6 h-6 text-blue-600" />
    },
    {
      title: "Use as Ferramentas",
      description: "Use os controles de zoom no topo para ter uma melhor visualização. Segure e arraste para mover a imagem.",
      icon: <ZoomIn className="w-6 h-6 text-blue-600" />
    },
    {
      title: "Salve Seu Trabalho",
      description: "Quando o processamento estiver completo, clique no botão SALVAR para baixar sua imagem limpa.",
      icon: <Download className="w-6 h-6 text-blue-600" />
    }
  ]

  const nextStep = () => {
    if (currentStep < steps.length - 1) {
      setCurrentStep(currentStep + 1)
    } else {
      onClose()
    }
  }

  const prevStep = () => {
    if (currentStep > 0) {
      setCurrentStep(currentStep - 1)
    }
  }

  useEffect(() => {
    if (isOpen) {
      setCurrentStep(0)
    }
  }, [isOpen])

  if (!isOpen) return null

  const currentStepData = steps[currentStep]
  const isLastStep = currentStep === steps.length - 1

  return (
    <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-[100] p-4">
      <div className="bg-white rounded-3xl p-8 max-w-md w-full shadow-2xl animate-in zoom-in duration-300">
        <div className="flex items-center justify-between mb-6">
          <div className="flex items-center gap-3">
            {currentStepData.icon}
            <span className="text-xs font-black text-slate-400 uppercase tracking-widest">
              {locale === 'en' ? 'Tutorial' : 'Tutorial'} {currentStep + 1}/{steps.length}
            </span>
          </div>
          <button
            onClick={onClose}
            className="p-2 text-slate-400 hover:text-slate-600 rounded-full hover:bg-slate-50 transition-colors"
          >
            <X size={20} />
          </button>
        </div>

        <div className="mb-8">
          <h3 className="text-xl font-black text-slate-900 mb-4">
            {currentStepData.title}
          </h3>
          <p className="text-slate-600 leading-relaxed">
            {currentStepData.description}
          </p>
        </div>

        <div className="flex items-center justify-between">
          <div className="flex gap-2">
            {steps.map((_, index) => (
              <div
                key={index}
                className={`w-2 h-2 rounded-full transition-colors ${
                  index === currentStep ? 'bg-blue-600' : 'bg-slate-200'
                }`}
              />
            ))}
          </div>

          <div className="flex gap-3">
            {currentStep > 0 && (
              <button
                onClick={prevStep}
                className="px-4 py-2 text-slate-600 hover:text-slate-800 font-bold text-sm transition-colors"
              >
                {locale === 'en' ? 'Back' : 'Voltar'}
              </button>
            )}
            <button
              onClick={nextStep}
              className="px-6 py-2 bg-blue-600 text-white rounded-xl font-bold text-sm hover:bg-blue-700 transition-colors"
            >
              {isLastStep 
                ? (locale === 'en' ? 'Got it!' : 'Entendi!') 
                : (locale === 'en' ? 'Next' : 'Próximo')
              }
            </button>
          </div>
        </div>
      </div>
    </div>
  )
}