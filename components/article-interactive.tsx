"use client"

import { useEffect, useState } from "react"

export function ArticleInteractive() {
    const [scrollProgress, setScrollProgress] = useState(0)

    // 监听滚动计算进度条
    useEffect(() => {
        const handleScroll = () => {
            const totalHeight = document.documentElement.scrollHeight - document.documentElement.clientHeight
            const progress = (window.scrollY / totalHeight) * 100
            setScrollProgress(progress)
        }
        window.addEventListener("scroll", handleScroll)
        return () => window.removeEventListener("scroll", handleScroll)
    }, [])

    // 平滑滚动处理函数
    const scrollToSection = (id: string) => {
        const element = document.getElementById(id)
        if (element) {
            // 这里我们不需要 offset，因为 section 上加了 scroll-mt-32
            element.scrollIntoView({ behavior: "smooth" })
        }
    }

    const navItems = [
        { id: "quick-answer", label: "Quick Answer" },
        { id: "ai-vs-manual", label: "AI vs Manual" },
        { id: "step-guide", label: "Step-by-Step" },
        { id: "top-tools", label: "Top 3 Tools" },
        { id: "legal-faq", label: "Legal FAQ" },
    ]

    return (
        <>
            {/* 1. 顶部进度条 (z-index 确保在最顶层) */}
            <div
                className="fixed top-0 left-0 h-1.5 bg-gradient-to-r from-blue-400 to-blue-600 z-[100] transition-all duration-150 ease-out shadow-[0_0_10px_rgba(37,99,235,0.5)]"
                style={{ width: `${scrollProgress}%` }}
            />

            {/* 2. 悬浮导航栏 (Sticky Nav) */}
            <nav className="sticky top-0 z-40 bg-white/80 backdrop-blur-xl border-b border-slate-200/60 overflow-x-auto no-scrollbar">
                <div className="max-w-[850px] mx-auto px-6 h-14 flex items-center gap-2">
                    {navItems.map((item) => (
                        <button
                            key={item.id}
                            onClick={() => scrollToSection(item.id)}
                            className="whitespace-nowrap px-4 py-1.5 rounded-full text-xs font-bold uppercase tracking-wide
                                     border border-transparent hover:bg-blue-50 hover:text-blue-600 hover:border-blue-100 
                                     text-slate-500 transition-all active:scale-95"
                        >
                            {item.label}
                        </button>
                    ))}
                </div>
            </nav>
        </>
    )
}