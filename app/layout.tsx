import type React from "react"
import type { Metadata } from "next"
import { Inter } from "next/font/google"
import "./globals.css"
import { AuthProvider } from "@/lib/auth-context"
import { Footer } from "@/components/footer" // 导入全局页脚

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
})

export const metadata: Metadata = {
  title: "Remover Marca d'Água de Foto Online Grátis em 4K - RemoverMarca",
  description: "O melhor removedor de IA do Brasil. Remova logos, carimbos e marcas d'água de fotos online grátis. Tecnologia PicWish para limpeza extrema em 4K Ultra.",
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    // 添加 suppressHydrationWarning 以解决插件引起的 body 属性冲突
    <html lang="pt-BR" suppressHydrationWarning>
      <body className={`${inter.variable} antialiased font-sans`}>
        <AuthProvider>
          {/* 使用 flex-col 和 min-h-screen 确保页脚置底 */}
          <div className="flex flex-col min-h-screen">
            
            {/* 主要内容区域：flex-grow 会自动填满剩余空间 */}
            <main className="flex-grow">
              {children}
            </main>

            {/* 全局页脚 */}
            <Footer />
            
          </div>
        </AuthProvider>
      </body>
    </html>
  )
}