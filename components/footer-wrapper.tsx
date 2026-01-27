"use client" // 必须标记为客户端组件

import { usePathname } from "next/navigation"
import { Footer } from "@/components/footer"      // 你的葡文 Footer
import { FooterEn } from "@/components/footer-en" // 你的英文 Footer

export function FooterWrapper() {
    const pathname = usePathname()

    // 如果路径以 /en 开头，显示英文 Footer
    // 注意：需要处理 pathname 可能为 null 的边缘情况（虽然极少发生）
    if (pathname && pathname.startsWith("/en")) {
        return <FooterEn />
    }

    // 否则显示默认（葡文）Footer
    return <Footer />
}