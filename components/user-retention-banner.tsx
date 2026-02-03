"use client"

import { useState, useEffect } from "react"
import { X, Gift, Users, History } from "lucide-react"

interface UserRetentionBannerProps {
    locale?: string
    trigger?: 'immediate' | 'after-download' | 'after-time' | 'editor-engagement'
    delay?: number
    onOpenLogin?: () => void
}

export function UserRetentionBanner({
    locale = "pt",
    trigger = "after-time",
    delay = 30000, // 30秒默认延迟
    onOpenLogin
}: UserRetentionBannerProps) {
    const [isVisible, setIsVisible] = useState(false)
    const [shouldShow, setShouldShow] = useState(false)

    // 监听用户行为事件
    useEffect(() => {
        const handleUserEngagement = () => {
            if (trigger === 'after-download') {
                setShouldShow(true)
            }
        }

        const handleEditorEngagement = () => {
            if (trigger === 'editor-engagement') {
                setShouldShow(true)
            }
        }

        // 监听下载事件
        window.addEventListener('user-downloaded-image', handleUserEngagement)
        // 监听编辑器交互事件
        window.addEventListener('user-engaged-editor', handleEditorEngagement)

        // 时间延迟触发
        if (trigger === 'after-time') {
            const timer = setTimeout(() => {
                setShouldShow(true)
            }, delay)
            return () => clearTimeout(timer)
        }

        // 立即显示
        if (trigger === 'immediate') {
            setShouldShow(true)
        }

        return () => {
            window.removeEventListener('user-downloaded-image', handleUserEngagement)
            window.removeEventListener('user-engaged-editor', handleEditorEngagement)
        }
    }, [trigger, delay])

    // 显示动画延迟
    useEffect(() => {
        if (shouldShow) {
            const timer = setTimeout(() => setIsVisible(true), 500)
            return () => clearTimeout(timer)
        }
    }, [shouldShow])


    if (!isVisible || !shouldShow) return null

    const isEn = locale === "en"

    const content = isEn ? {
        title: "Love the results? 🎉",
        subtitle: "Create a free account to save your work and get daily credits",
        features: [
            { icon: <History className="w-4 h-4" />, text: "Save processing history" },
            { icon: <Gift className="w-4 h-4" />, text: "Daily free credits" },
            { icon: <Users className="w-4 h-4" />, text: "Invite friends for bonuses" }
        ],
        cta: "Sign Up Free",
        dismiss: "Maybe later"
    } : {
        title: "Gostou do resultado? 🎉",
        subtitle: "Crie uma conta gratuita para salvar seu trabalho e ganhar créditos diários",
        features: [
            { icon: <History className="w-4 h-4" />, text: "Histórico de processamentos" },
            { icon: <Gift className="w-4 h-4" />, text: "Créditos diários gratuitos" },
            { icon: <Users className="w-4 h-4" />, text: "Convide amigos e ganhe bônus" }
        ],
        cta: "Cadastrar Grátis",
        dismiss: "Talvez depois"
    }

    return (
        <div className="fixed bottom-6 right-6 max-w-sm bg-white rounded-3xl shadow-2xl border border-slate-100 p-6 z-50 animate-in slide-in-from-bottom duration-500">
            <button
                onClick={() => setIsVisible(false)}
                className="absolute top-4 right-4 p-1 text-slate-400 hover:text-slate-600 rounded-full hover:bg-slate-50 transition-colors"
            >
                <X size={16} />
            </button>

            <div className="mb-4">
                <h3 className="font-black text-slate-900 text-lg mb-2">{content.title}</h3>
                <p className="text-slate-600 text-sm font-medium">{content.subtitle}</p>
            </div>

            <div className="space-y-3 mb-6">
                {content.features.map((feature, index) => (
                    <div key={index} className="flex items-center gap-3 text-sm text-slate-600">
                        <div className="text-blue-600">{feature.icon}</div>
                        <span className="font-medium">{feature.text}</span>
                    </div>
                ))}
            </div>

            <div className="flex gap-3">
                <button
                    onClick={() => setIsVisible(false)}
                    className="flex-1 px-4 py-2 text-slate-500 hover:text-slate-700 font-bold text-sm transition-colors"
                >
                    {content.dismiss}
                </button>
                <button
                    onClick={() => {
                        setIsVisible(false)
                        onOpenLogin?.()
                    }}
                    className="flex-1 px-4 py-2 bg-blue-600 text-white rounded-xl font-bold text-sm hover:bg-blue-700 transition-colors"
                >
                    {content.cta}
                </button>
            </div>
        </div>
    )
}