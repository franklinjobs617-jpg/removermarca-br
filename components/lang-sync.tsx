// components/lang-sync.tsx
"use client"

import { usePathname } from "next/navigation"
import { useEffect } from "react"

export function LangSync() {
    const pathname = usePathname()

    useEffect(() => {
        // 根据当前路径在浏览器端实时修改 html 的 lang 属性
        const lang = pathname.startsWith('/en') ? "en" : "pt-BR"
        document.documentElement.lang = lang
    }, [pathname])

    return null // 这个组件不渲染任何内容
}