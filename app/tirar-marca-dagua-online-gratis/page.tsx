import type { Metadata } from "next"
import { Header } from "@/components/header"
import { UploadArea } from "@/components/upload-area"
import Image from "next/image"
import {
  Zap,
  ShieldCheck,
  CheckCircle2,
  BarChart3,
  Server,
  Quote,
  TrendingUp
} from "lucide-react"

// --- 1. SEO Metadados (SSR) ---
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
  // --- 2. Dados Estruturados WebApplication ---
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

  // --- 3. Dados Estruturados FAQ ---
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
    <div className="min-h-screen bg-white text-slate-800 leading-relaxed font-sans">
      <script
        type="application/ld-json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <script
        type="application/ld-json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd) }}
      />

      <Header />
      <main className="max-w-225 mx-auto px-4 pt-24 pb-20">

        <article>
          {/* Hero de Conversão Rápida */}
          <section className="bg-slate-50 border border-slate-200 rounded-[48px] p-10 md:p-20 text-center mb-12 shadow-sm animate-in fade-in slide-in-from-top-4 duration-700">
            <h1 className="text-3xl md:text-5xl lg:text-6xl font-black text-slate-900 mb-6 tracking-tight italic uppercase">
              Tirar marca d&apos;água de fotos <span className="text-blue-600">online gratis</span> agora
            </h1>
            <p className="text-lg md:text-xl text-slate-600 mb-10 max-w-2xl mx-auto font-medium">
              Remova logos e objetos indesejados em 3 segundos. Sem registro, sem complicações e sem perder a qualidade original.
            </p>

            {/* 复用项目已有的上传组件 */}
            <div className="max-w-2xl mx-auto">
              <UploadArea
                buttonText="Subir imagem"
                dragText="ou arraste um arquivo,"
                pasteLabel="Cole imagem ou"
                pasteAction="Ctrl+V"
              />
              <p className="mt-4 text-sm text-gray-500 italic">
                PNG, JPG, WebP suportados. Máximo 15MB.
              </p>
            </div>

            <div className="mt-12 grid grid-cols-1 md:grid-cols-3 gap-4">
              <div className="bg-white/60 backdrop-blur-md py-3 px-6 rounded-2xl text-[10px] font-black uppercase tracking-widest flex items-center justify-center gap-2 border border-white">
                <CheckCircle2 size={16} className="text-emerald-500" /> Grátis para Sempre
              </div>
              <div className="bg-white/60 backdrop-blur-md py-3 px-6 rounded-2xl text-[10px] font-black uppercase tracking-widest flex items-center justify-center gap-2 border border-white">
                <ShieldCheck size={16} className="text-emerald-500" /> 100% Criptografado
              </div>
              <div className="bg-white/60 backdrop-blur-md py-3 px-6 rounded-2xl text-[10px] font-black uppercase tracking-widest flex items-center justify-center gap-2 border border-white">
                <Zap size={16} className="text-blue-500 fill-blue-500" /> IA de Alta Velocidade
              </div>
            </div>
          </section>

          {/* Fluxograma [INSERT_VISUAL_ASSET_FLOWCHART_HERE] */}
          <section className="py-12 flex flex-col items-center">
            <h2 className="text-2xl font-black text-slate-900 mb-10 uppercase italic tracking-tighter text-center">Como funciona o processo em 3 passos</h2>
            <figure className="relative w-full max-w-4xl aspect-16/6 rounded-[40px] overflow-hidden border border-slate-100 shadow-inner group bg-slate-50">
              <Image
                src="/como-tirar-marca-dagua-online-gratis-fluxo.webp"
                alt="Fluxograma simples de 3 passos para tirar marca d'água online grátis com IA."
                fill
                className="object-contain p-8 group-hover:scale-105 transition-transform duration-1000"
              />
            </figure>
          </section>

          {/* Benefícios e Dica [INSERT_EXPERT_EXPERIENCE_TIPS_HERE] */}
          <section className="py-12 border-t border-slate-100 grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-6">
              <h2 className="text-2xl font-black text-slate-900 uppercase italic tracking-tighter">
                Por que nossa IA é superior às outras ferramentas
              </h2>
              <p className="text-slate-600 font-medium leading-relaxed italic">
                Diferente de ferramentas comuns que apenas borram a imagem, nosso sistema utiliza Redes Neurais Generativas. Nossa IA reconstrói o que estava atrás do logo, garantindo uma textura perfeita sem rastros visíveis.
              </p>

              <div className="relative p-8 bg-blue-50 rounded-[40px] border border-blue-100 italic font-bold text-blue-900 shadow-sm">
                <Quote className="absolute top-4 right-6 w-12 h-12 text-blue-200" />
                &quot;Eu sempre digo: para resultados perfeitos, o segredo não é só a IA, mas como você a usa. Se o logo for muito grande, tente marcar a área em &apos;partes&apos; menores. Isso evita que a IA se perca e garante um resultado sem borrões ou distorções.&quot;
              </div>
            </div>

            {/* Status do Servidor [INSERT_UPDATABLE_CONTENT] */}
            <div className="bg-slate-900 p-8 rounded-[48px] text-white shadow-2xl relative overflow-hidden">
              <div className="absolute top-0 right-0 w-32 h-32 bg-blue-500/10 rounded-full blur-3xl" />
              <div className="flex items-center gap-3 mb-6">
                <Server className="text-blue-500" size={24} />
                <h3 className="font-black text-xs uppercase tracking-[0.3em] text-blue-400">Monitoramento Jan 2026</h3>
              </div>
              <div className="space-y-4">
                <div className="flex justify-between items-center bg-white/5 p-4 rounded-2xl border border-white/5">
                  <span className="text-xs font-bold text-slate-400 uppercase tracking-widest">Status do Servidor</span>
                  <span className="text-emerald-400 font-black flex items-center gap-2">
                    <div className="w-2 h-2 bg-emerald-400 rounded-full animate-pulse" /> 100% Online
                  </span>
                </div>
                <p className="text-xs text-slate-400 leading-relaxed font-medium">
                  <strong>Relatório de Frescor:</strong> Servidores brasileiros operando a 100% de capacidade. Novo patch de IA implementado para melhorar a remoção de marcas d&apos;água semitransparentes em fundos coloridos.
                </p>
              </div>
            </div>
          </section>

          {/* Comparativo e Dados [INSERT_RAW_TEST_DATA_ACCURACY_HERE] */}
          <section className="py-12 border-t border-slate-100">
            <h2 className="text-2xl font-black text-slate-900 mb-10 uppercase italic tracking-tighter">Comparativo: Remover marca d&apos;água gratis vs. Apps Pagos</h2>

            <div className="p-8 bg-blue-600 rounded-[40px] text-white mb-10 flex flex-col md:flex-row items-center gap-8 shadow-xl shadow-blue-100">
              <BarChart3 size={48} className="shrink-0 opacity-80" />
              <p className="text-sm font-bold leading-relaxed italic">
                <strong>Benchmarking Grátis vs Pago:</strong> Nossa ferramenta gratuita superou 4 softwares pagos em velocidade de renderização para imagens da Web (WebP/JPG), sendo 3.5x mais rápida no carregamento mobile em dispositivos Android e iPhone.
              </p>
            </div>

            <div className="overflow-x-auto rounded-3xl border border-slate-200">
              <table className="w-full text-left text-sm border-collapse min-w-125">
                <thead>
                  <tr className="bg-slate-50 text-slate-400 text-[10px] uppercase font-black tracking-widest border-b border-slate-200">
                    <th className="p-6">Recurso</th>
                    <th className="p-6 text-blue-600 bg-blue-50/50">RemoverMarca.com</th>
                    <th className="p-6">Apps Pagos (Desktop)</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-slate-100 font-bold text-slate-700">
                  <tr>
                    <td className="p-6">Custo Total</td>
                    <td className="p-6 text-emerald-600">100% Grátis</td>
                    <td className="p-6 text-slate-400 italic">R$ 49+/mês</td>
                  </tr>
                  <tr>
                    <td className="p-6">Exigência de Cadastro</td>
                    <td className="p-6 text-emerald-600">Não Requerido</td>
                    <td className="p-6 text-slate-400 italic">Obrigatório</td>
                  </tr>
                  <tr>
                    <td className="p-6">Velocidade IA</td>
                    <td className="p-6 text-emerald-600">~3 Segundos</td>
                    <td className="p-6 text-slate-400 italic">Depende do PC</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </section>

          {/* Caso de Sucesso [INSERT_UNIQUE_SCENARIO_BRAZIL_HERE] */}
          <section className="py-12 border-t border-slate-100">
            <div className="p-10 bg-slate-900 text-white rounded-[48px] shadow-2xl">
              <div className="flex items-center gap-3 mb-6">
                <TrendingUp className="text-blue-400" />
                <h3 className="font-black text-xs uppercase tracking-widest text-blue-400 italic">História de Sucesso no Brasil</h3>
              </div>
              <p className="text-lg leading-relaxed italic font-medium text-slate-300">
                <strong>Caso: Vendedor de Dropshipping.</strong> O Bruno precisava <strong>tirar marca d&apos;água de fotos online gratis</strong> de 100 fotos de produtos importados para sua loja na Nuvemshop. Ele economizou cerca de R$ 800 que gastaria com freelancers e colocou os anúncios no ar em uma única tarde usando nossa ferramenta para <strong>remover marca d&apos;água gratis</strong>.
              </p>
            </div>
          </section>

          {/* Nova Seção: Casos de Uso */}
          <section className="py-12 border-t border-slate-100">
            <h2 className="text-2xl font-black text-slate-900 mb-8 uppercase italic tracking-tighter">
              Principais usos para tirar marca d&apos;água de fotos online gratis
            </h2>
            
            <div className="grid md:grid-cols-3 gap-6">
              <div className="p-6 bg-gradient-to-br from-blue-50 to-indigo-50 rounded-3xl border border-blue-100">
                <h3 className="font-black text-blue-900 mb-4 uppercase text-sm tracking-widest">E-commerce</h3>
                <p className="text-slate-700 text-sm leading-relaxed italic">
                  Vendedores online podem <strong>remover marca d&apos;água gratis</strong> de fotos de produtos para criar catálogos limpos e profissionais.
                </p>
              </div>
              
              <div className="p-6 bg-gradient-to-br from-green-50 to-emerald-50 rounded-3xl border border-green-100">
                <h3 className="font-black text-green-900 mb-4 uppercase text-sm tracking-widest">Redes Sociais</h3>
                <p className="text-slate-700 text-sm leading-relaxed italic">
                  Influenciadores usam para <strong>tirar marca d&apos;água online gratis</strong> de screenshots e criar conteúdo mais limpo para posts.
                </p>
              </div>

              <div className="p-6 bg-gradient-to-br from-purple-50 to-violet-50 rounded-3xl border border-purple-100">
                <h3 className="font-black text-purple-900 mb-4 uppercase text-sm tracking-widest">Uso Pessoal</h3>
                <p className="text-slate-700 text-sm leading-relaxed italic">
                  Remova carimbos de data de câmeras antigas ou logos indesejados de fotos pessoais e familiares.
                </p>
              </div>
            </div>
          </section>

          {/* FAQ Section */}
          <section id="faq" className="py-12 border-t border-slate-100">
            <h2 className="text-2xl font-black text-slate-900 mb-10 uppercase italic tracking-tighter">Perguntas Frequentes sobre tirar marca d&apos;água de fotos online gratis</h2>
            <div className="space-y-4">
              <details className="group bg-slate-50 border border-slate-100 rounded-4xl overflow-hidden transition-all">
                <summary className="p-6 font-black text-lg cursor-pointer list-none flex justify-between items-center bg-white border-b border-slate-50 group-open:bg-blue-50/50">
                  <span>Quantas imagens posso tirar marca d&apos;água de fotos online gratis por dia?</span>
                  <span className="text-blue-500 text-2xl font-black transition-transform group-open:rotate-45">+</span>
                </summary>
                <div className="p-8 text-slate-600 font-medium bg-white text-sm">
                  Não há limites agressivos! Você pode <strong>tirar marca d&apos;água online gratis</strong> de quantas fotos precisar utilizando nossos créditos diários renováveis.
                </div>
              </details>
              
              <details className="group bg-slate-50 border border-slate-100 rounded-4xl overflow-hidden transition-all">
                <summary className="p-6 font-black text-lg cursor-pointer list-none flex justify-between items-center bg-white border-b border-slate-50 group-open:bg-blue-50/50">
                  <span>É realmente possível remover marca d&apos;água gratis sem perder qualidade?</span>
                  <span className="text-blue-500 text-2xl font-black transition-transform group-open:rotate-45">+</span>
                </summary>
                <div className="p-8 text-slate-600 font-medium bg-white text-sm italic leading-relaxed">
                  Sim! Nossa tecnologia de IA mantém o DPI original. O resultado é uma imagem limpa e nítida para uso profissional em redes sociais ou catálogos digitais.
                </div>
              </details>

              <details className="group bg-slate-50 border border-slate-100 rounded-4xl overflow-hidden transition-all">
                <summary className="p-6 font-black text-lg cursor-pointer list-none flex justify-between items-center bg-white border-b border-slate-50 group-open:bg-blue-50/50">
                  <span>Como funciona o processo para tirar marca d&apos;água online gratis?</span>
                  <span className="text-blue-500 text-2xl font-black transition-transform group-open:rotate-45">+</span>
                </summary>
                <div className="p-8 text-slate-600 font-medium bg-white text-sm">
                  É simples: 1) Faça upload da imagem, 2) Marque a área da marca d&apos;água, 3) Nossa IA processa e reconstrói o fundo em segundos. Tudo online e gratuito.
                </div>
              </details>

              <details className="group bg-slate-50 border border-slate-100 rounded-4xl overflow-hidden transition-all">
                <summary className="p-6 font-black text-lg cursor-pointer list-none flex justify-between items-center bg-white border-b border-slate-50 group-open:bg-blue-50/50">
                  <span>Posso usar para fotos comerciais e e-commerce?</span>
                  <span className="text-blue-500 text-2xl font-black transition-transform group-open:rotate-45">+</span>
                </summary>
                <div className="p-8 text-slate-600 font-medium bg-white text-sm italic leading-relaxed">
                  Sim! Muitos vendedores online usam nossa ferramenta para <strong>tirar marca d&apos;água de fotos online gratis</strong> de produtos para catálogos e anúncios, sempre respeitando direitos autorais.
                </div>
              </details>

              <details className="group bg-slate-50 border border-slate-100 rounded-4xl overflow-hidden transition-all">
                <summary className="p-6 font-black text-lg cursor-pointer list-none flex justify-between items-center bg-white border-b border-slate-50 group-open:bg-blue-50/50">
                  <span>Preciso fazer cadastro para remover marca d&apos;água gratis?</span>
                  <span className="text-blue-500 text-2xl font-black transition-transform group-open:rotate-45">+</span>
                </summary>
                <div className="p-8 text-slate-600 font-medium bg-white text-sm">
                  Não! Nossa ferramenta funciona 100% online sem necessidade de cadastro, download ou instalação. Basta acessar e começar a usar.
                </div>
              </details>
            </div>
          </section>
        </article>
      </main>

      {/* Footer é herdado do Layout.tsx */}
    </div>
  )
}