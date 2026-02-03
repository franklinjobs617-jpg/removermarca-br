import type React from "react"
import type { Metadata } from "next"
import { Inter } from "next/font/google"
import "./globals.css"
import { AuthProvider } from "@/lib/auth-context"
import { FooterWrapper } from "@/components/footer-wrapper" // 导入全局页脚 
import Script from "next/script"
import { GoogleAnalytics } from '@next/third-parties/google'
import PayPalProviderWrapper from "@/components/PayPalProviderWrapper";

import { headers } from 'next/headers';
import { LangSync } from '@/components/lang-sync'
const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
})

export const metadata: Metadata = {
  title: "Remover Marca d'Água de Foto Online Grátis em 4K - RemoverMarca",
  description: "O melhor removedor de IA do Brasil. Remova logos, carimbos e marcas d'água de fotos online grátis. Tecnologia PicWish para limpeza extrema em 4K Ultra.",
  keywords: [
    "remover marca dagua",
    "remover marca d'água de foto",
    "remover marca d'água",
    "tirar marca d'água",
    "apagar marca d'água",
    "removedor de marca d'água",
    "watermark remover"
  ],
  alternates: {
    canonical: "https://removermarca.com",
    languages: {
      "pt-BR": "https://removermarca.com",
      "en-US": "https://removermarca.com/en",
    },
  },
  openGraph: {
    title: "Remover Marca d'Água de Foto Online Grátis em 4K - RemoverMarca",
    description: "O melhor removedor de IA do Brasil. Remova logos, carimbos e marcas d'água de fotos online grátis. Tecnologia PicWish para limpeza extrema em 4K Ultra.",
    url: "https://removermarca.com",
    siteName: "RemoverMarca",
    images: [
      {
        url: "https://removermarca.com/og-image.png",
        width: 1200,
        height: 630,
        alt: "RemoverMarca - Ferramenta de IA para remover marca d'água",
      },
    ],
    locale: "pt_BR",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Remover Marca d'Água de Foto Online Grátis em 4K",
    description: "O melhor removedor de IA do Brasil. Remova logos, carimbos e marcas d'água de fotos online grátis.",
    images: ["https://removermarca.com/og-image.png"],
  },
}

export default async function RootLayout({ children }: { children: React.ReactNode }) {
  // 1. 服务端获取路径 (用于首屏 SEO)
  const headerList = await headers();
  const pathname = headerList.get('x-current-path') || "";

  const isEn = pathname.startsWith('/en');
  const lang = isEn ? "en" : "pt-BR";

  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "SoftwareApplication",
    "name": "RemoverMarca",
    "operatingSystem": "Windows, macOS, Android, iOS",
    "applicationCategory": "MultimediaApplication",
    "offers": {
      "@type": "Offer",
      "price": "0",
      "priceCurrency": "USD"
    },
    "aggregateRating": {
      "@type": "AggregateRating",
      "ratingValue": "4.9",
      "ratingCount": "1250"
    }
  }

  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": [
      {
        "@type": "Question",
        "name": "É realmente gratuito remover marca d'água?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Sim, o RemoverMarca.com oferece uma versão gratuita com créditos diários para remover marca d'água de foto."
        }
      },
      {
        "@type": "Question",
        "name": "Como tirar marca d'água de foto funciona?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Nossa IA usa tecnologia de inpainting neural para reconstruir texturas automaticamente e remover marca d'água sem perder qualidade."
        }
      },
      {
        "@type": "Question",
        "name": "É seguro usar o removedor de marca d'água?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Totalmente seguro. Seguimos a LGPD, usamos conexão SSL criptografada e deletamos suas fotos em 24h."
        }
      }
    ]
  }

  return (
    <html lang={lang} suppressHydrationWarning>
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
        />
      </head>
      <body className={`${inter.variable} antialiased font-sans`}>
        <LangSync />

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

      {/* <GoogleAnalytics gaId="G-3NNE8Y1VC0" />
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
      /> */}
    </html>
  )
}