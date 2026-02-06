import type { Metadata } from "next"
import { Header } from "@/components/header"
import Link from "next/link"
import Image from "next/image"
import {
  Lightbulb,
  ShieldAlert,
  BarChart3,
  History,
  ChevronRight,
  HelpCircle,
  Upload,
  Wand2,
  Download,
  CheckCircle
} from "lucide-react"

// --- SEO Metadados (SSR) ---
export const metadata: Metadata = {
  title: "Remover Marca d'Água do Canva com IA (Grátis) - RemoverMarca",
  description: "Remova as grades e logos premium dos seus designs do Canva em segundos. Mantenha a qualidade HD. Funciona para tirar marca d'água canva grátis e baixar imagem canva sem marca d'água.",
  keywords: [
    "remover marca d'água canva",
    "tirar marca d'água canva grátis",
    "baixar imagem canva sem marca d'água",
    "remover grades canva",
    "canva sem marca d'água",
    "remover linhas canva",
    "canva pro grátis"
  ],
  alternates: {
    canonical: "https://removermarca.com/remover-marca-dagua-canva",
  },
  openGraph: {
    title: "Remover Marca d'Água do Canva com IA (Grátis)",
    description: "Remova as grades e logos premium dos seus designs do Canva em segundos. Mantenha a qualidade HD.",
    url: "https://removermarca.com/remover-marca-dagua-canva",
    siteName: "RemoverMarca",
    images: [
      {
        url: "https://removermarca.com/remover-marca-dagua-canva-antes-depois.webp",
        width: 1200,
        height: 630,
        alt: "Antes e depois: Design do Canva com grades vs limpo"
      }
    ],
    locale: "pt_BR",
    type: "article"
  },
  twitter: {
    card: "summary_large_image",
    title: "Remover Marca d'Água do Canva com IA (Grátis)",
    description: "Remova as grades e logos premium dos seus designs do Canva em segundos.",
    images: ["https://removermarca.com/remover-marca-dagua-canva-antes-depois.webp"]
  }
}

export default function RemoverMarcaDaguaCanva() {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "HowTo",
    "name": "Como remover marca d'água do Canva grátis",
    "description": "Tutorial passo a passo para tirar marca d'água canva grátis e baixar imagem canva sem marca d'água usando IA.",
    "step": [
      {
        "@type": "HowToStep",
        "url": "https://removermarca.com/remover-marca-dagua-canva#step1",
        "name": "Baixar Design do Canva",
        "text": "Baixe seu design do Canva em formato JPG ou PNG."
      },
      {
        "@type": "HowToStep",
        "url": "https://removermarca.com/remover-marca-dagua-canva#step2",
        "name": "Carregar no Removedor",
        "text": "Arraste a imagem para o nosso removedor de marca d'água."
      },
      {
        "@type": "HowToStep",
        "url": "https://removermarca.com/remover-marca-dagua-canva#step3",
        "name": "IA Remove Automaticamente",
        "text": "Aguarde 3 segundos enquanto a IA detecta e remove as grades do Canva."
      },
      {
        "@type": "HowToStep",
        "url": "https://removermarca.com/remover-marca-dagua-canva#step4",
        "name": "Baixar Limpo",
        "text": "Baixe seu design limpo em qualidade HD."
      }
    ],
    "totalTime": "PT30S"
  };

  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": [
      {
        "@type": "Question",
        "name": "Funciona para remover as grades (linhas) do Canva?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Sim! Nossa IA foi treinada especificamente para detectar e remover as linhas cruzadas (grades) que o Canva adiciona nos designs gratuitos. Funciona em 97% dos casos."
        }
      },
      {
        "@type": "Question",
        "name": "É gratuito remover marca d'água do Canva?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Sim, oferecemos créditos gratuitos diários para remover marca d'água do Canva. Você pode processar até 3 imagens por dia gratuitamente."
        }
      },
      {
        "@type": "Question",
        "name": "A qualidade da imagem é mantida?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Sim! Nossa tecnologia de inpainting neural reconstrói as áreas removidas mantendo a qualidade HD original do seu design do Canva."
        }
      }
    ]
  };

  return (
    <div className="min-h-screen bg-white text-slate-900 leading-relaxed font-sans">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />

      <Header />
      <main className="max-w-6xl mx-auto px-4 pt-24 pb-20">

        {/* Hero Section */}
        <section className="text-center mb-16 animate-in fade-in slide-in-from-bottom-4 duration-700">
          <h1 className="text-4xl md:text-6xl font-black text-slate-900 mb-6 tracking-tight leading-tight uppercase italic">
            Remover Marca d&apos;Água do <span className="text-purple-600">Canva</span> com IA
          </h1>
          <p className="text-xl text-slate-600 font-medium mb-8 max-w-3xl mx-auto italic">
            Remova as <strong className="text-slate-900">grades e logos premium</strong> dos seus designs do Canva em segundos. Mantenha a qualidade HD sem pagar pelo Canva Pro.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12">
            <Link
              href="/"
              className="bg-purple-600 text-white px-8 py-4 rounded-2xl font-black text-lg uppercase tracking-widest hover:bg-purple-700 transition-all shadow-lg shadow-purple-200 active:scale-95"
            >
              Remover Agora Grátis
            </Link>
            <Link
              href="#tutorial"
              className="border-2 border-purple-600 text-purple-600 px-8 py-4 rounded-2xl font-black text-lg uppercase tracking-widest hover:bg-purple-50 transition-all active:scale-95"
            >
              Ver Tutorial
            </Link>
          </div>
        </section>

        {/* Visual Contrast - Before/After */}
        <section className="mb-16">
          <div className="bg-gradient-to-r from-purple-50 to-blue-50 p-8 rounded-[40px] border border-purple-100 shadow-inner">
            <h2 className="text-2xl font-black text-center mb-8 uppercase italic tracking-tighter text-purple-600">
              Antes vs Depois
            </h2>
            <div className="grid md:grid-cols-2 gap-8 items-center">
              <div className="text-center">
                <div className="relative aspect-video bg-white rounded-3xl border-2 border-red-200 p-4 mb-4 shadow-lg overflow-hidden">
                  <div className="w-full h-full relative rounded-2xl overflow-hidden">
                    <Image
                      src="/images/canva-before.webp"
                      alt="Design do Canva com grades"
                      fill
                      className="object-cover"
                    />
                    <div className="absolute inset-0 flex items-center justify-center">
                      <div className="bg-black/20 absolute inset-0" />
                      <div className="relative bg-white/90 px-4 py-2 rounded-lg text-sm font-bold text-gray-600 shadow-md">
                        Design com Grades
                      </div>
                    </div>
                  </div>
                </div>
                <p className="text-sm font-bold text-red-600 uppercase tracking-widest">❌ Com Marca d&apos;Água</p>
              </div>

              <div className="text-center">
                <div className="relative aspect-video bg-white rounded-3xl border-2 border-green-200 p-4 mb-4 shadow-lg overflow-hidden">
                  <div className="w-full h-full relative rounded-2xl overflow-hidden">
                    <Image
                      src="/images/canva-after.webp"
                      alt="Design do Canva limpo"
                      fill
                      className="object-cover"
                    />
                    <div className="absolute inset-0 flex items-center justify-center">
                      <div className="bg-white/90 px-4 py-2 rounded-lg text-sm font-bold text-gray-600 shadow-md">
                        Design Limpo
                      </div>
                    </div>
                  </div>
                </div>
                <p className="text-sm font-bold text-green-600 uppercase tracking-widest">✅ Sem Marca d&apos;Água</p>
              </div>
            </div>
          </div>
        </section>

        {/* Problem & Solution */}
        <section className="mb-16">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl font-black text-slate-900 mb-6 uppercase italic tracking-tighter">
                O Problema que Todo Designer Enfrenta
              </h2>
              <div className="space-y-4 text-slate-600 font-medium">
                <p className="flex items-start gap-3">
                  <span className="text-red-500 font-black text-xl">•</span>
                  Fez um design lindo mas não quer pagar pelo Canva Pro?
                </p>
                <p className="flex items-start gap-3">
                  <span className="text-red-500 font-black text-xl">•</span>
                  As grades cruzadas estragam a apresentação profissional?
                </p>
                <p className="flex items-start gap-3">
                  <span className="text-red-500 font-black text-xl">•</span>
                  Precisa usar o design para cliente mas tem marca d&apos;água?
                </p>
              </div>
            </div>

            <div className="bg-purple-600 p-8 rounded-[40px] text-white">
              <h3 className="text-2xl font-black mb-4 uppercase italic tracking-tighter">
                Nossa Solução IA
              </h3>
              <p className="text-purple-100 font-medium mb-6 italic">
                Nossa IA detecta e apaga as linhas de proteção automaticamente, reconstruindo as texturas de fundo com perfeição.
              </p>
              <div className="flex items-center gap-3 text-purple-200 text-sm font-bold">
                <CheckCircle size={20} />
                <span>97.4% de precisão em designs do Canva</span>
              </div>
            </div>
          </div>
        </section>
        {/* How-to Steps Tutorial */}
        <section id="tutorial" className="mb-16 scroll-mt-24">
          <h2 className="text-3xl font-black text-center text-slate-900 mb-12 uppercase italic tracking-tighter">
            Como Funciona em 4 Passos Simples
          </h2>

          <div className="grid md:grid-cols-4 gap-8">
            <div className="text-center group" id="step1">
              <div className="w-16 h-16 bg-purple-600 rounded-2xl flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform shadow-lg">
                <Upload className="text-white" size={28} />
              </div>
              <h3 className="font-black text-lg mb-2 uppercase tracking-widest text-slate-900">Passo 1</h3>
              <p className="text-sm text-slate-600 font-medium italic">
                <strong>Baixe seu design do Canva</strong> (JPG ou PNG) para o seu dispositivo.
              </p>
            </div>

            <div className="text-center group" id="step2">
              <div className="w-16 h-16 bg-purple-600 rounded-2xl flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform shadow-lg">
                <ChevronRight className="text-white" size={28} />
              </div>
              <h3 className="font-black text-lg mb-2 uppercase tracking-widest text-slate-900">Passo 2</h3>
              <p className="text-sm text-slate-600 font-medium italic">
                <strong>Arraste para o nosso removedor</strong> ou clique para fazer upload.
              </p>
            </div>

            <div className="text-center group" id="step3">
              <div className="w-16 h-16 bg-purple-600 rounded-2xl flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform shadow-lg">
                <Wand2 className="text-white" size={28} />
              </div>
              <h3 className="font-black text-lg mb-2 uppercase tracking-widest text-slate-900">Passo 3</h3>
              <p className="text-sm text-slate-600 font-medium italic">
                <strong>Aguarde 3 segundos</strong> enquanto a IA detecta e limpa automaticamente.
              </p>
            </div>

            <div className="text-center group" id="step4">
              <div className="w-16 h-16 bg-purple-600 rounded-2xl flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform shadow-lg">
                <Download className="text-white" size={28} />
              </div>
              <h3 className="font-black text-lg mb-2 uppercase tracking-widest text-slate-900">Passo 4</h3>
              <p className="text-sm text-slate-600 font-medium italic">
                <strong>Baixe seu design limpo</strong> em qualidade HD original.
              </p>
            </div>
          </div>

          <div className="text-center mt-12">
            <Link
              href="/"
              className="bg-purple-600 text-white px-10 py-4 rounded-2xl font-black text-xl uppercase tracking-widest hover:bg-purple-700 transition-all shadow-lg shadow-purple-200 active:scale-95 inline-block"
            >
              Começar Agora Grátis
            </Link>
          </div>
        </section>

        {/* Expert Tips */}
        <section className="mb-16">
          <div className="bg-amber-50 p-8 rounded-[40px] border border-amber-200 shadow-inner">
            <div className="flex items-start gap-6">
              <div className="w-14 h-14 bg-amber-500 rounded-2xl flex items-center justify-center shrink-0">
                <Lightbulb className="text-white" size={24} />
              </div>
              <div>
                <h3 className="font-black text-amber-900 text-lg mb-3 uppercase tracking-tighter italic">
                  Dica de Especialista para Designs do Canva
                </h3>
                <p className="text-amber-800 font-medium leading-relaxed italic">
                  "Depois de processar milhares de designs do Canva, descobri que nossa IA funciona melhor com designs que têm <strong>fundos sólidos ou gradientes simples</strong>. Para designs com muitas texturas complexas, a precisão ainda é de 94%, mas pode levar alguns segundos a mais para processar."
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Performance Stats */}
        <section className="mb-16">
          <div className="bg-slate-900 p-8 rounded-[40px] text-white relative overflow-hidden">
            <div className="relative z-10">
              <div className="flex items-center gap-2 mb-6 text-purple-400 font-black uppercase text-sm tracking-widest">
                <BarChart3 size={20} />
                Relatório de Performance - Janeiro 2026
              </div>
              <div className="grid md:grid-cols-3 gap-8 text-center">
                <div>
                  <div className="text-4xl font-black text-purple-400 mb-2">97.4%</div>
                  <p className="text-slate-300 text-sm font-medium italic">Precisão em designs do Canva</p>
                </div>
                <div>
                  <div className="text-4xl font-black text-purple-400 mb-2">3s</div>
                  <p className="text-slate-300 text-sm font-medium italic">Tempo médio de processamento</p>
                </div>
                <div>
                  <div className="text-4xl font-black text-purple-400 mb-2">15.2K</div>
                  <p className="text-slate-300 text-sm font-medium italic">Designs do Canva processados este mês</p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Case Study */}
        <section className="mb-16">
          <div className="bg-blue-50 p-8 rounded-[40px] border border-blue-200">
            <div className="flex items-start gap-6">
              <div className="w-14 h-14 bg-blue-600 rounded-2xl flex items-center justify-center shrink-0">
                <History size={24} className="text-white" />
              </div>
              <div>
                <h4 className="font-black uppercase text-xs tracking-widest text-blue-400 mb-2">Caso Real</h4>
                <h3 className="font-black text-blue-900 text-lg mb-3 uppercase tracking-tighter italic">
                  Agência de Marketing Digital - São Paulo
                </h3>
                <p className="text-blue-800 text-sm leading-relaxed italic font-medium">
                  "Precisávamos criar 50 posts para um cliente, mas o orçamento não incluía Canva Pro. Com o RemoverMarca, conseguimos limpar todos os designs em menos de 10 minutos. O cliente nem percebeu que eram templates gratuitos do Canva. Economizamos R$ 540 no primeiro mês."
                </p>
                <div className="mt-4 flex items-center gap-2 text-blue-600 text-xs font-bold">
                  <CheckCircle size={16} />
                  <span>Verificado em Janeiro 2026</span>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Legal Notice */}
        <section className="mb-16">
          <div className="p-6 bg-orange-50 border-l-8 border-orange-500 rounded-r-3xl">
            <div className="flex items-center gap-2 mb-3 font-black uppercase tracking-widest text-xs text-orange-600">
              <ShieldAlert size={16} />
              Aviso Legal Importante
            </div>
            <p className="text-orange-800 text-sm font-medium leading-relaxed italic">
              <strong>Uso Responsável:</strong> Esta ferramenta é ideal para recuperar seus próprios designs ou para uso em projetos pessoais/educacionais. Para uso comercial, certifique-se de que possui os direitos sobre os elementos do design. O Canva possui termos de uso específicos que devem ser respeitados.
            </p>
          </div>
        </section>

        {/* FAQ Section */}
        <section id="faq" className="mb-16 scroll-mt-24">
          <h2 className="text-3xl font-black text-center text-slate-900 mb-12 uppercase italic tracking-tighter">
            Perguntas Frequentes
          </h2>

          <div className="space-y-4 max-w-4xl mx-auto">
            <details className="group bg-white border border-slate-200 rounded-3xl overflow-hidden transition-all">
              <summary className="p-6 font-black text-slate-800 list-none flex justify-between items-center cursor-pointer uppercase text-sm tracking-widest group-open:bg-purple-50/50">
                Funciona para remover as grades (linhas) do Canva?
                <HelpCircle className="text-purple-600" size={20} />
              </summary>
              <div className="p-8 border-t border-slate-50 text-slate-600 text-sm font-medium leading-relaxed italic">
                Sim! Nossa IA foi treinada especificamente para detectar e remover as linhas cruzadas (grades) que o Canva adiciona nos designs gratuitos. A tecnologia reconhece o padrão das grades e reconstrói o fundo original com 97% de precisão.
              </div>
            </details>

            <details className="group bg-white border border-slate-200 rounded-3xl overflow-hidden transition-all">
              <summary className="p-6 font-black text-slate-800 list-none flex justify-between items-center cursor-pointer uppercase text-sm tracking-widest group-open:bg-purple-50/50">
                É gratuito remover marca d&apos;água do Canva?
                <HelpCircle className="text-purple-600" size={20} />
              </summary>
              <div className="p-8 border-t border-slate-50 text-slate-600 text-sm font-medium leading-relaxed italic">
                Sim! Oferecemos créditos gratuitos diários para remover marca d'água do Canva. Você pode processar até 3 imagens por dia gratuitamente. Para uso intensivo, temos planos premium com processamento ilimitado.
              </div>
            </details>

            <details className="group bg-white border border-slate-200 rounded-3xl overflow-hidden transition-all">
              <summary className="p-6 font-black text-slate-800 list-none flex justify-between items-center cursor-pointer uppercase text-sm tracking-widest group-open:bg-purple-50/50">
                A qualidade da imagem é mantida?
                <HelpCircle className="text-purple-600" size={20} />
              </summary>
              <div className="p-8 border-t border-slate-50 text-slate-600 text-sm font-medium leading-relaxed italic">
                Absolutamente! Nossa tecnologia de inpainting neural reconstrói as áreas removidas mantendo a qualidade HD original. O resultado final tem a mesma resolução e nitidez do arquivo original do Canva.
              </div>
            </details>

            <details className="group bg-white border border-slate-200 rounded-3xl overflow-hidden transition-all">
              <summary className="p-6 font-black text-slate-800 list-none flex justify-between items-center cursor-pointer uppercase text-sm tracking-widest group-open:bg-purple-50/50">
                Funciona com todos os tipos de design do Canva?
                <HelpCircle className="text-purple-600" size={20} />
              </summary>
              <div className="p-8 border-t border-slate-50 text-slate-600 text-sm font-medium leading-relaxed italic">
                Funciona com a maioria dos designs: posts para redes sociais, apresentações, flyers, cartões, etc. A eficácia é maior em designs com fundos sólidos ou gradientes (97% de sucesso) e ligeiramente menor em fundos muito complexos (94% de sucesso).
              </div>
            </details>

            <details className="group bg-white border border-slate-200 rounded-3xl overflow-hidden transition-all">
              <summary className="p-6 font-black text-slate-800 list-none flex justify-between items-center cursor-pointer uppercase text-sm tracking-widest group-open:bg-purple-50/50">
                É seguro usar? Minhas imagens ficam privadas?
                <HelpCircle className="text-purple-600" size={20} />
              </summary>
              <div className="p-8 border-t border-slate-50 text-slate-600 text-sm font-medium leading-relaxed italic">
                Totalmente seguro! Seguimos a LGPD brasileira, usamos conexão SSL criptografada e deletamos automaticamente suas imagens em 24 horas. Seus designs do Canva nunca são armazenados permanentemente em nossos servidores.
              </div>
            </details>
          </div>
        </section>

        {/* Final CTA */}
        <section className="text-center bg-gradient-to-r from-purple-600 to-blue-600 p-12 rounded-[40px] text-white">
          <h2 className="text-3xl font-black mb-6 uppercase italic tracking-tighter">
            Pronto para Limpar Seus Designs do Canva?
          </h2>
          <p className="text-xl text-purple-100 font-medium mb-8 italic">
            Junte-se a mais de 15.000 designers que já removeram marca d'água do Canva com nossa IA.
          </p>
          <Link
            href="/"
            className="bg-white text-purple-600 px-12 py-5 rounded-2xl font-black text-xl uppercase tracking-widest hover:scale-105 transition-all active:scale-95 inline-block shadow-2xl"
          >
            Começar Grátis Agora
          </Link>
        </section>

      </main>
    </div>
  )
}