import { Header } from "@/components/header"
import { HeroSection } from "@/components/home/heroSection"
import { GlobalDragDrop } from "@/components/home/globalDragDrop"
import { StaticContent } from "@/components/home/staticContent"
import { HomeWithRetention } from "@/components/home-with-retention"

export default function Home() {
  return (
    <div className="min-h-screen bg-gray-50 relative">
      {/* 仅包含全局拖拽逻辑的客户端组件 */}
      <GlobalDragDrop />

      <Header />

      <main className="pt-12 pb-20">
        {/* 首屏核心区：包含上传和对比图 */}
        <HeroSection />

        {/* 纯静态 HTML 区：SEO 核心，0 字节客户端 JS */}
        <StaticContent />
      </main>

      {/* 用户留存横幅和登录模态框 */}
      <HomeWithRetention locale="pt" />
    </div>
  )
}