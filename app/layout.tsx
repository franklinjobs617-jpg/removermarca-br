import type React from "react"
import type { Metadata } from "next"
import { Inter } from "next/font/google"
import "./globals.css"
import { AuthProvider } from "@/lib/auth-context"
import { FooterWrapper } from "@/components/footer-wrapper" // 导入全局页脚 
import Script from "next/script"
import { GoogleAnalytics } from '@next/third-parties/google'
import PayPalProviderWrapper from "@/components/PayPalProviderWrapper";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
})

export const metadata: Metadata = {
  title: "Remover Marca d'Água de Foto Online Grátis em 4K - RemoverMarca",
  description: "O melhor removedor de IA do Brasil. Remova logos, carimbos e marcas d'água de fotos online grátis. Tecnologia PicWish para limpeza extrema em 4K Ultra.",
  openGraph: {
    title: "Remover Marca d'Água de Foto Online Grátis em 4K - RemoverMarca",
    description: "O melhor removedor de IA do Brasil. Remova logos, carimbos e marcas d'água de fotos online grátis. Tecnologia PicWish para limpeza extrema em 4K Ultra.",
    url: "https://removermarca.com",
    images: [
      {
        url: "https://removermarca.com/og-image.png",
        width: 1200,
        height: 630,
        alt: "RemoverMarca.com",
      },
    ],
  },
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="pt-BR" suppressHydrationWarning>
      <body className={`${inter.variable} antialiased font-sans`}>
        <AuthProvider>
          <div className="flex flex-col min-h-screen">
            <main className="flex-grow">
              <PayPalProviderWrapper>

                {children}
              </PayPalProviderWrapper>
            </main>
            <FooterWrapper />
          </div>
        </AuthProvider>
      </body>

      <GoogleAnalytics gaId="G-3NNE8Y1VC0" />
      <Script
        id="microsoft-clarity"
        strategy="afterInteractive" // 在页面交互后加载，不影响首屏速度
        dangerouslySetInnerHTML={{
          __html: `
                (function(c,l,a,r,i,t,y){
                    c[a]=c[a]||function(){(c[a].q=c[a].q||[]).push(arguments)};
                    t=l.createElement(r);t.async=1;t.src="https://www.clarity.ms/tag/"+i;
                    y=l.getElementsByTagName(r)[0];y.parentNode.insertBefore(t,y);
                })(window, document, "clarity", "script", "v07km7j8jp");
              `,
        }}
      />
    </html>
  )
}