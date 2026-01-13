import type React from "react"
import type { Metadata } from "next"
import { Inter } from "next/font/google"
import "./globals.css"
import { AuthProvider } from "@/lib/auth-context"
import { Footer } from "@/components/footer" // 导入全局页脚 
import Script from "next/script" 

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
})

export const metadata: Metadata = {
  title: "Remover Marca d'Água de Foto Online Grátis em 4K - RemoverMarca",
  description: "O melhor removedor de IA do Brasil. Remova logos, carimbos e marcas d'água de fotos online grátis. Tecnologia PicWish para limpeza extrema em 4K Ultra.",
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="pt-BR" suppressHydrationWarning>
      <body className={`${inter.variable} antialiased font-sans`}>
        {/* 加载 Google SDK */}
        <Script src="https://accounts.google.com/gsi/client" strategy="beforeInteractive" />
        
        <AuthProvider>
          <div className="flex flex-col min-h-screen">
            <main className="flex-grow">{children}</main>
            <Footer /> 
            

          </div>
        </AuthProvider> 
      </body>

     
    </html>
  )
}