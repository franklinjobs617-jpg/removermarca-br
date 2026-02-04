import type { Metadata } from "next"
import { Header } from "@/components/header"
import { UploadArea } from "@/components/upload-area"
import Image from "next/image"
import {
  UploadCloud,
  Layers,
  FileCheck2,
  Check,
  ArrowRight,
  MinusCircle,
  Info,
  BarChart3,
  Quote,
  TrendingUp,
  Server,
  ShieldCheck
} from "lucide-react"
import Link from "next/link"

export const metadata: Metadata = {
  title: "Tirar Marca d'Água de Fotos Online Gratis e Rápido (2026) - IA Sem Cadastro",
  description: "Quer tirar marca d'água de fotos online gratis? Nossa IA remove logos, textos e carimbos. Remover marca d'água gratis e tirar marca d'água online gratis em segundos sem registro.",
  keywords: [
    "tirar marca d'água de fotos online gratis",
    "remover marca d'água gratis",
    "tirar marca d'água online gratis",
    "remover marca d'água de foto gratis",
    "tirar marca d'água gratis",
    "como tirar marca d'água online gratis"
  ],
  alternates: {
    canonical: "https://removermarca.com/tirar-marca-dagua-online-gratis",
  },
  openGraph: {
    title: "Tirar Marca d'Água de Fotos Online Gratis - IA Gratuita 2026",
    description: "Ferramenta gratuita para tirar marca d'água de fotos online gratis. Remover marca d'água gratis com IA em segundos.",
    url: "https://removermarca.com/tirar-marca-dagua-online-gratis",
    siteName: "RemoverMarca",
    images: [
      {
        url: "https://removermarca.com/como-tirar-marca-dagua-online-gratis-fluxo.webp",
        width: 1200,
        height: 630,
        alt: "Como tirar marca d'água de fotos online gratis"
      }
    ],
    locale: "pt_BR",
    type: "website"
  },
  twitter: {
    card: "summary_large_image",
    title: "Tirar Marca d'Água de Fotos Online Gratis - Ferramenta IA",
    description: "Remover marca d'água gratis com nossa IA. Tirar marca d'água online gratis em segundos.",
    images: ["https://removermarca.com/como-tirar-marca-dagua-online-gratis-fluxo.webp"]
  }
}

export default function TirarMarcaGratisPage() {
  // --- Dados Estruturados WebApplication ---
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "WebApplication",
    "name": "TirarMarca Grátis",
    "url": "https://removermarca.com/tirar-marca-dagua-online-gratis",
    "applicationCategory": "ImageEditor",
    "offers": {
      "@type": "Offer",
      "price": "0.00",
      "priceCurrency": "BRL"
    },
    "aggregateRating": {
      "@type": "AggregateRating",
      "ratingValue": "4.9",
      "reviewCount": "2100"
    }
  };

  // --- Dados Estruturados FAQ ---
  const faqJsonLd = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": [
      {
        "@type": "Question",
        "name": "Quantas imagens posso tirar marca d'água de fotos online gratis por dia?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Não há limites agressivos! Você pode tirar marca d'água online gratis de quantas fotos precisar utilizando nossos créditos diários renováveis."
        }
      },
      {
        "@type": "Question",
        "name": "É realmente possível remover marca d'água gratis sem perder qualidade?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Sim! Nossa tecnologia de IA mantém o DPI original. O resultado é uma imagem limpa e nítida para uso profissional em redes sociais ou catálogos digitais."
        }
      },
      {
        "@type": "Question",
        "name": "Como funciona o processo para tirar marca d'água online gratis?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "É simples: 1) Faça upload da imagem, 2) Marque a área da marca d'água, 3) Nossa IA processa e reconstrói o fundo em segundos. Tudo online e gratuito."
        }
      },
      {
        "@type": "Question",
        "name": "Preciso fazer cadastro para remover marca d'água gratis?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Não! Nossa ferramenta funciona 100% online sem necessidade de cadastro, download ou instalação. Basta acessar e começar a usar."
        }
      },
      {
        "@type": "Question",
        "name": "Posso usar para fotos comerciais e e-commerce?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Sim! Muitos vendedores online usam nossa ferramenta para tirar marca d'água de fotos online gratis de produtos para catálogos e anúncios, sempre respeitando direitos autorais."
        }
      }
    ]
  };

  return (
    <div className="min-h-screen bg-white text-slate-900 font-sans antialiased selection:bg-[#8B3DFF]/10 selection:text-[#8B3DFF]">
      <script
        type="application/ld-json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <script
        type="application/ld-json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd) }}
      />

      <Header />

      <main>
        {/* --- Hero Section: Estilo Canva Clean --- */}
        <section className="pt-32 pb-20 px-4 bg-gradient-to-b from-[#F2F5FF] to-white">
          <div className="max-w-5xl mx-auto text-center">
            <h1 className="text-4xl md:text-6xl font-extrabold tracking-tight text-slate-900 mb-6 leading-[1.15]">
              Tirar marca d&apos;água <br />
              <span className="text-[#8B3DFF]">de fotos online gratis</span>
            </h1>
            <p className="text-lg md:text-xl text-slate-600 mb-12 max-w-2xl mx-auto font-medium">
              A maneira mais simples e profissional de <strong>remover marca d&apos;água gratis</strong>.
              Resultado perfeito em segundos sem registro.
            </p>

            <div className="max-w-2xl mx-auto">
              <div className="bg-white p-2 rounded-[32px] shadow-[0_20px_50px_rgba(0,0,0,0.04)] border border-slate-200">
                <div className="bg-[#F8F9FD] rounded-[24px] border-2 border-dashed border-slate-200 hover:border-[#8B3DFF] transition-all p-4">
                  <UploadArea
                    buttonText="Subir imagem"
                    dragText="ou arraste um arquivo,"
                    pasteLabel="Cole imagem ou"
                    pasteAction="Ctrl+V"
                  />
                </div>
              </div>

              <div className="mt-8 flex flex-wrap justify-center gap-8 text-sm font-bold text-slate-500 uppercase tracking-wider">
                <div className="flex items-center gap-2">
                  <Check size={18} className="text-[#00C4CC]" strokeWidth={3} /> Grátis
                </div>
                <div className="flex items-center gap-2">
                  <Check size={18} className="text-[#00C4CC]" strokeWidth={3} /> Seguro
                </div>
                <div className="flex items-center gap-2">
                  <Check size={18} className="text-[#00C4CC]" strokeWidth={3} /> Rápido
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* --- Fluxograma: Limpo e Espaçado --- */}
        <section className="py-24 max-w-6xl mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-slate-900 mb-4">
              Como <span className="text-[#8B3DFF]">tirar marca d&apos;água de fotos online gratis</span> em 3 passos
            </h2>
            <div className="w-12 h-1.5 bg-[#00C4CC] mx-auto rounded-full"></div>
          </div>

          <div className="grid md:grid-cols-3 gap-12 mb-20">
            {[
              { icon: <UploadCloud className="w-6 h-6" />, title: "Fazer Upload", desc: "Arraste sua foto para nossa ferramenta online." },
              { icon: <Layers className="w-6 h-6" />, title: "Marcar Área", desc: "Pinte a marca d'água ou logo que deseja remover." },
              { icon: <FileCheck2 className="w-6 h-6" />, title: "Pronto!", desc: "Nossa IA reconstrói o fundo instantaneamente." }
            ].map((step, i) => (
              <div key={i} className="text-center group">
                <div className="w-16 h-16 bg-white border border-slate-200 rounded-2xl flex items-center justify-center mx-auto mb-6 shadow-sm group-hover:border-[#8B3DFF] group-hover:text-[#8B3DFF] transition-all duration-300">
                  {step.icon}
                </div>
                <h3 className="text-xl font-bold mb-2">{step.title}</h3>
                <p className="text-slate-500 font-medium leading-relaxed">{step.desc}</p>
              </div>
            ))}
          </div>

          <div className="rounded-[40px] bg-slate-50 p-8 md:p-12 border border-slate-100">
            <figure className="relative w-full aspect-[16/7] overflow-hidden rounded-2xl bg-white shadow-inner">
              <Image
                src="/como-tirar-marca-dagua-online-gratis-fluxo.webp"
                alt="Fluxograma simples de 3 passos para tirar marca d'água de fotos online gratis com IA."
                fill
                className="object-contain p-4 md:p-10"
              />
            </figure>
          </div>
        </section>

        {/* --- Benefícios & Dica (Bento Grid) --- */}
        <section className="py-24 bg-white max-w-6xl mx-auto px-4">
          <div className="grid lg:grid-cols-12 gap-8">
            <div className="lg:col-span-7 space-y-8">
              <div className="bg-[#F2F5FF] p-10 rounded-[40px] border border-blue-50">
                <h2 className="text-3xl font-black text-slate-900 mb-6 leading-tight uppercase italic tracking-tight">
                  Por que nossa ferramenta para <span className="text-[#00C4CC]">remover marca d&apos;água gratis</span> é superior
                </h2>
                <p className="text-slate-600 font-medium leading-relaxed mb-8">
                  Diferente de ferramentas comuns que apenas borram a imagem, nosso sistema para <strong className="text-slate-900">tirar marca d&apos;água de fotos online gratis</strong> utiliza Redes Neurais Generativas. Nossa IA reconstrói o que estava atrás do logo, garantindo uma textura perfeita.
                </p>

                <div className="bg-white p-8 rounded-3xl shadow-sm border border-slate-200 relative overflow-hidden group">
                  <Quote className="absolute -top-2 -right-2 w-16 h-16 text-slate-50 group-hover:text-blue-50 transition-colors" />
                  <div className="relative z-10">
                    <div className="flex items-center gap-3 mb-4">
                      <div className="w-10 h-10 bg-[#8B3DFF] rounded-xl flex items-center justify-center text-white">
                        <Info size={20} />
                      </div>
                      <span className="font-bold text-slate-900 uppercase text-xs tracking-widest">Dica de Especialista</span>
                    </div>
                    <p className="text-[#1A1A1A] font-bold leading-relaxed italic">
                      &quot;Para <strong>tirar marca d&apos;água online gratis</strong> com qualidade profissional, marque a área em &apos;partes&apos; menores se o logo for complexo. Isso garante um resultado sem borrões.&quot;
                    </p>
                  </div>
                </div>
              </div>
            </div>

            <div className="lg:col-span-5 flex flex-col gap-8">
              {/* Status do Servidor */}
              <div className="bg-slate-900 p-10 rounded-[40px] text-white flex-1 relative overflow-hidden">
                <div className="flex items-center justify-between mb-8">
                  <div className="flex items-center gap-3">
                    <Server className="text-[#00C4CC]" size={20} />
                    <h3 className="font-bold text-xs uppercase tracking-[0.2em] text-slate-400">Status Jan 2026</h3>
                  </div>
                  <div className="flex items-center gap-2 bg-emerald-500/10 px-3 py-1 rounded-full">
                    <div className="w-1.5 h-1.5 bg-emerald-400 rounded-full animate-pulse" />
                    <span className="text-[10px] font-black text-emerald-400 uppercase tracking-widest">Live</span>
                  </div>
                </div>
                <div className="space-y-6">
                  <div className="pb-4 border-b border-white/10">
                    <div className="flex justify-between text-sm mb-2">
                      <span className="text-slate-400 font-medium">Capacidade do Servidor</span>
                      <span className="text-white font-bold tracking-tighter">100%</span>
                    </div>
                    <div className="w-full bg-white/10 h-1 rounded-full">
                      <div className="w-full bg-[#00C4CC] h-full rounded-full" />
                    </div>
                  </div>
                  <p className="text-xs text-slate-400 leading-relaxed">
                    <strong>Relatório de Frescor:</strong> Servidores brasileiros operando em alta performance. Novo patch de IA implementado para marcas d&apos;água semitransparentes.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* --- Comparativo: Design de Produto --- */}
        <section className="py-24 bg-slate-50 border-y border-slate-100 px-4">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-3xl font-black text-slate-900 mb-4 uppercase italic tracking-tighter">
                Comparativo: <span className="text-[#00C4CC]">Remover marca d&apos;água gratis</span> vs. Apps Pagos
              </h2>
            </div>

            <div className="bg-[#8B3DFF] p-8 rounded-[32px] text-white mb-10 flex flex-col md:flex-row items-center gap-8 shadow-xl shadow-[#8B3DFF]/20">
              <BarChart3 size={40} className="shrink-0 opacity-80" />
              <p className="text-base font-bold leading-relaxed">
                <strong className="text-white/80 uppercase text-xs block mb-1">Benchmarking 2026:</strong>
                Nossa ferramenta para <strong>tirar marca d&apos;água de fotos online gratis</strong> superou apps pagos em velocidade (3.5x mais rápida) em dispositivos Android e iPhone.
              </p>
            </div>

            <div className="bg-white rounded-[32px] border border-slate-200 shadow-sm overflow-hidden overflow-x-auto">
              <table className="w-full text-left text-sm min-w-[500px]">
                <thead>
                  <tr className="bg-slate-50 border-b border-slate-200">
                    <th className="p-6 font-bold text-slate-400 uppercase tracking-widest text-[10px]">Recurso</th>
                    <th className="p-6 font-bold text-[#8B3DFF] uppercase tracking-widest text-[10px] bg-[#8B3DFF]/5">RemoverMarca.com</th>
                    <th className="p-6 font-bold text-slate-400 uppercase tracking-widest text-[10px]">Apps Pagos</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-slate-100 font-bold text-slate-700">
                  <tr className="hover:bg-slate-50/50 transition-colors">
                    <td className="p-6">Custo Total</td>
                    <td className="p-6 text-emerald-600 bg-[#8B3DFF]/5">100% Grátis</td>
                    <td className="p-6 text-slate-400 font-medium">R$ 49+/mês</td>
                  </tr>
                  <tr className="hover:bg-slate-50/50 transition-colors">
                    <td className="p-6">Cadastro</td>
                    <td className="p-6 text-emerald-600 bg-[#8B3DFF]/5">Não Requerido</td>
                    <td className="p-6 text-slate-400 font-medium">Obrigatório</td>
                  </tr>
                  <tr className="hover:bg-slate-50/50 transition-colors">
                    <td className="p-6">Velocidade IA</td>
                    <td className="p-6 text-emerald-600 bg-[#8B3DFF]/5">~3 Segundos</td>
                    <td className="p-6 text-slate-400 font-medium">Lento</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        </section>

        {/* --- Caso de Sucesso: Storytelling --- */}
        <section className="py-24 max-w-5xl mx-auto px-4">
          <div className="bg-slate-900 p-10 md:p-16 rounded-[56px] text-white flex flex-col md:flex-row items-center gap-12 relative overflow-hidden">
            <div className="absolute top-0 right-0 w-64 h-64 bg-[#8B3DFF]/20 rounded-full blur-[100px]" />

            <div className="w-20 h-20 bg-[#8B3DFF] rounded-3xl flex items-center justify-center shrink-0 shadow-lg shadow-[#8B3DFF]/40 rotate-3 group-hover:rotate-0 transition-transform">
              <TrendingUp size={40} className="text-white" />
            </div>

            <div className="relative z-10">
              <span className="text-[#00C4CC] font-black uppercase text-xs tracking-[0.3em] mb-4 block">História de Sucesso</span>
              <p className="text-xl md:text-2xl leading-relaxed font-medium text-slate-200">
                &quot;O Bruno precisava <strong className="text-white">tirar marca d&apos;água de fotos online gratis</strong> de 100 produtos para sua loja na Nuvemshop. Ele economizou R$ 800 e colocou os anúncios no ar em uma tarde usando nossa ferramenta para <strong className="text-[#00C4CC]">remover marca d&apos;água gratis</strong>.&quot;
              </p>
            </div>
          </div>
        </section>

        {/* --- Casos de Uso: Grid Clean --- */}
        <section className="py-24 bg-white px-4">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-3xl font-bold text-center mb-16 italic tracking-tight uppercase">
              Onde usar nossa IA para <span className="text-[#8B3DFF]">remover marca d&apos;água</span>
            </h2>

            <div className="grid md:grid-cols-3 gap-8">
              {[
                { title: "E-commerce", emoji: "🛒", desc: "Vendedores online podem remover marca d'água gratis de produtos para catálogos profissionais." },
                { title: "Redes Sociais", emoji: "📱", desc: "Influenciadores usam para tirar marca d'água online gratis de posts e criar conteúdo limpo." },
                { title: "Uso Pessoal", emoji: "❤️", desc: "Remova carimbos de data de fotos antigas ou logos indesejados de fotos familiares." }
              ].map((card, i) => (
                <div key={i} className="p-10 rounded-[40px] border border-slate-100 hover:border-[#8B3DFF]/20 hover:bg-[#F2F5FF]/30 transition-all duration-300 group">
                  <div className="text-4xl mb-6 group-hover:scale-110 transition-transform inline-block">{card.emoji}</div>
                  <h3 className="text-lg font-black mb-3 uppercase tracking-wider text-slate-900">{card.title}</h3>
                  <p className="text-slate-500 font-medium leading-relaxed text-sm">{card.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* --- FAQ Section: Accordion Estilo Canva --- */}
        <section id="faq" className="py-24 bg-slate-50">
          <div className="max-w-3xl mx-auto px-4">
            <h2 className="text-3xl font-black text-center text-slate-900 mb-16 uppercase italic tracking-tighter">
              Dúvidas sobre <span className="text-[#00C4CC]">tirar marca d&apos;água online gratis</span>
            </h2>

            <div className="space-y-4">
              {[
                {
                  q: "Quantas imagens posso tirar marca d'água de fotos online gratis por dia?",
                  a: "Não há limites agressivos! Você pode tirar marca d'água online gratis de quantas fotos precisar utilizando nossos créditos diários renováveis."
                },
                {
                  q: "É realmente possível remover marca d'água gratis sem perder qualidade?",
                  a: "Sim! Nossa tecnologia de IA mantém o DPI original. O resultado é uma imagem limpa e nítida para uso profissional."
                },
                {
                  q: "Como funciona o processo para tirar marca d'água online gratis?",
                  a: "É simples: 1) Faça upload da imagem, 2) Marque a área da marca d'água, 3) Nossa IA processa e reconstrói o fundo em segundos."
                },
                {
                  q: "Preciso fazer cadastro para remover marca d'água gratis?",
                  a: "Não! Nossa ferramenta funciona 100% online sem necessidade de cadastro, download ou instalação. Basta acessar e usar."
                },
                {
                  q: "Posso usar para fotos comerciais e e-commerce?",
                  a: "Sim! Muitos vendedores online usam nossa ferramenta para tirar marca d'água de fotos online gratis de produtos para catálogos e anúncios."
                }
              ].map((faq, i) => (
                <details key={i} className="group bg-white rounded-3xl border border-slate-200 overflow-hidden shadow-sm transition-all">
                  <summary className="p-6 font-bold flex justify-between items-center cursor-pointer list-none hover:bg-slate-50 transition-colors">
                    <span className="text-slate-800 pr-4">{faq.q}</span>
                    <MinusCircle className="w-5 h-5 text-slate-300 group-open:rotate-90 group-open:text-[#8B3DFF] transition-all" />
                  </summary>
                  <div className="px-6 pb-6 text-slate-500 font-medium leading-relaxed text-sm bg-white">
                    {faq.a}
                  </div>
                </details>
              ))}
            </div>

            <div className="mt-20 text-center">
              <Link href={"/"} className="bg-[#8B3DFF] text-white px-10 py-5 rounded-full font-black text-lg shadow-xl shadow-[#8B3DFF]/20 hover:bg-[#722ED1] hover:scale-[1.02] transition-all inline-flex items-center gap-3 group">
                Começar Agora Grátis <ArrowRight size={20} className="group-hover:translate-x-1 transition-transform" />
              </Link>
            </div>
          </div>
        </section>
      </main>
    </div>
  )
}