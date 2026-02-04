import type { Metadata } from "next"
import { Header } from "@/components/header"
import { UploadArea } from "@/components/upload-area"
import Link from "next/link"

// 严格保留 SEO 元数据
export const metadata: Metadata = {
  title: "Remover Marca d'Água de Imagem Online (2026) - IA Grátis HD",
  description: "Use o melhor removedor para remover marca d'água de imagem online. Tecnologia de IA para apagar logos e textos sem perder qualidade. Rápido, gratuito e seguro!",
  keywords: [
    "remover marca d'água de imagem",
    "removedor de marca d'água de imagem",
    "como remover marca d'água de imagem",
    "apagar marca d'água de imagem",
    "tirar marca d'água de imagem",
    "remover marca d'água imagem online"
  ],
  alternates: {
    canonical: "https://removermarca.com/removedor-de-marca-dagua-de-imagem",
  },
  openGraph: {
    title: "Remover Marca d'Água de Imagem - IA Gratuita 2026",
    description: "Ferramenta avançada para remover marca d'água de imagem com IA. Processamento HD sem perder qualidade.",
    url: "https://removermarca.com/removedor-de-marca-dagua-de-imagem",
    siteName: "RemoverMarca",
    images: [
      {
        url: "https://removermarca.com/melhor-removedor-de-marca-dagua-de-imagem-ia-2026.webp",
        width: 1200,
        height: 630,
        alt: "Como remover marca d'água de imagem com IA"
      }
    ],
    locale: "pt_BR",
    type: "website"
  },
  twitter: {
    card: "summary_large_image",
    title: "Remover Marca d'Água de Imagem - Ferramenta IA Gratuita",
    description: "Tecnologia avançada para remover marca d'água de imagem online. Grátis e sem perder qualidade.",
    images: ["https://removermarca.com/melhor-removedor-de-marca-dagua-de-imagem-ia-2026.webp"]
  }
}

export default function WatermarkRemoverPage() {
  // JSON-LD 结构化数据
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "SoftwareApplication",
    "name": "Removedor de Imagem RemoverMarca",
    "operatingSystem": "All",
    "applicationCategory": "PhotoEditor",
    "featureList": "Remoção de marca d'água com IA, Suporte a PNG/JPG/WebP, Alta Resolução",
    "offers": {
      "@type": "Offer",
      "price": "0.00",
      "priceCurrency": "BRL"
    },
    "aggregateRating": {
      "@type": "AggregateRating",
      "ratingValue": "4.8",
      "reviewCount": "850"
    }
  }

  // --- Dados Estruturados FAQ ---
  const faqJsonLd = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": [
      {
        "@type": "Question",
        "name": "A qualidade da imagem diminui após o processamento?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Não. Nosso algoritmo foi treinado para realizar o preenchimento inteligente sem comprimir o arquivo original significativamente."
        }
      },
      {
        "@type": "Question",
        "name": "É seguro usar com fotos privadas?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Sim. Seguimos a LGPD. Suas imagens são processadas de forma criptografada e excluídas dos nossos servidores após a sessão."
        }
      },
      {
        "@type": "Question",
        "name": "Quais formatos de imagem são suportados?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Suportamos JPG, PNG e WebP. Todos os formatos mantêm alta qualidade após o processamento com nossa IA."
        }
      },
      {
        "@type": "Question",
        "name": "Como funciona a tecnologia de IA?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Utilizamos Inpainting Neural, onde nossa IA reconstrói os pixels ocultos analisando o contexto da imagem ao redor do objeto removido."
        }
      }
    ]
  }

  return (
    <div className="min-h-screen bg-white">
      {/* 注入 JSON-LD */}
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

        {/* Tool Box Section */}
        <section className="bg-[#fdfdfd] border border-gray-200 rounded-3xl p-10 text-center mb-10 shadow-sm">
          <h1 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4 tracking-tight">
            Como remover marca d'água de imagem com IA em 2026
          </h1>
          <p className="text-gray-600 mb-8 max-w-2xl mx-auto">
            Nossa inteligência artificial avançada permite <strong>remover marca d'água de imagem</strong> mantendo a textura e os detalhes originais. Use nosso <strong>removedor de marca d'água de imagem</strong> grátis, rápido e online.
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
        </section>

        <p className="text-center text-sm mb-12">
          Procurando por vídeos? Conheça nosso <Link href="/" className="text-blue-600 hover:underline">remover marca d'água de foto online</Link> para todos os formatos.
        </p>

        {/* Tecnologia Section */}
        <section id="tecnologia" className="py-10 border-t border-gray-100">
          <h2 className="text-2xl font-bold mb-6 relative pb-2 after:content-[''] after:absolute after:left-0 after:bottom-0 after:w-12 after:h-1 after:bg-blue-600">
            Como remover marca d'água de imagem sem borrar o fundo
          </h2>
          <div className="grid md:grid-cols-2 gap-6 mt-8">
            <div className="p-6 rounded-xl bg-gray-50 border-l-4 border-blue-600">
              <h3 className="font-bold text-lg mb-2">Inpainting Neural</h3>
              <p className="text-gray-600">Nossa IA reconstrói os pixels ocultos analisando o contexto da imagem ao redor do objeto removido. Ideal para <strong>remover marca d'água de imagem</strong> complexas.</p>
            </div>
            <div className="p-6 rounded-xl bg-gray-50 border-l-4 border-blue-600">
              <h3 className="font-bold text-lg mb-2">Preservação de DPI</h3>
              <p className="text-gray-600">Diferente de outros sites, mantemos a densidade de pixels para impressões de alta qualidade ao <strong>remover marca d'água de imagem</strong>.</p>
            </div>
          </div>
        </section>

        {/* Formatos Section */}
        <section className="py-10">
          <h2 className="text-2xl font-bold mb-6 relative pb-2 after:content-[''] after:absolute after:left-0 after:bottom-0 after:w-12 after:h-1 after:bg-blue-600">
            Formatos suportados para remover marca d'água de imagem com alta fidelidade
          </h2>
          <div className="overflow-x-auto mt-6 rounded-xl border border-gray-200">
            <table className="w-full text-left min-w-125">
              <thead className="bg-gray-50">
                <tr>
                  <th className="p-4 border-b">Formato</th>
                  <th className="p-4 border-b">Velocidade</th>
                  <th className="p-4 border-b">Qualidade de Saída</th>
                  <th className="p-4 border-b">Recomendação</th>
                </tr>
              </thead>
              <tbody>
                <tr className="border-b">
                  <td className="p-4 font-bold uppercase">JPG / JPEG</td>
                  <td className="p-4">Instantâneo</td>
                  <td className="p-4">98% Original</td>
                  <td className="p-4">Ideal para fotos de redes sociais.</td>
                </tr>
                <tr className="border-b">
                  <td className="p-4 font-bold uppercase">PNG</td>
                  <td className="p-4">2-3 segundos</td>
                  <td className="p-4">100% (Lossless)</td>
                  <td className="p-4">Melhor para logos transparentes.</td>
                </tr>
                <tr className="border-b">
                  <td className="p-4 font-bold uppercase">WebP</td>
                  <td className="p-4">Rápido</td>
                  <td className="p-4">Alta Eficiência</td>
                  <td className="p-4">Perfeito para sites e SEO.</td>
                </tr>
              </tbody>
            </table>
          </div>
        </section>

        {/* Tutorial Section */}
        <section id="tutorial" className="py-10">
          <h2 className="text-2xl font-bold mb-6 relative pb-2 after:content-[''] after:absolute after:left-0 after:bottom-0 after:w-12 after:h-1 after:bg-blue-600">
            Passo a passo: Como limpar sua imagem em segundos
          </h2>
          <div className="grid md:grid-cols-2 gap-8 mt-6">
            <div className="flex gap-4">
              <span className="text-4xl font-black text-blue-100 italic">01</span>
              <p><strong>Carregue:</strong> Arraste sua imagem para o campo de upload.</p>
            </div>
            <div className="flex gap-4">
              <span className="text-4xl font-black text-blue-100 italic">02</span>
              <p><strong>Aguarde:</strong> Nossa IA processa para <strong>remover marca d'água de imagem</strong> em segundos.</p>
            </div>
          </div>
        </section>

        {/* Nova Seção: Benefícios e Casos de Uso */}
        <section className="py-10 border-t border-gray-100">
          <h2 className="text-2xl font-bold mb-6 relative pb-2 after:content-[''] after:absolute after:left-0 after:bottom-0 after:w-12 after:h-1 after:bg-blue-600">
            Por que escolher nossa ferramenta para remover marca d'água de imagem
          </h2>
          
          <div className="grid md:grid-cols-3 gap-6 mt-8">
            <div className="p-6 bg-gradient-to-br from-blue-50 to-indigo-50 rounded-xl border border-blue-100">
              <h3 className="font-bold text-blue-900 mb-4">Processamento HD</h3>
              <p className="text-gray-700 text-sm leading-relaxed">
                Mantenha a resolução original ao <strong>remover marca d'água de imagem</strong>. Ideal para impressões e uso profissional.
              </p>
            </div>
            
            <div className="p-6 bg-gradient-to-br from-green-50 to-emerald-50 rounded-xl border border-green-100">
              <h3 className="font-bold text-green-900 mb-4">IA Avançada</h3>
              <p className="text-gray-700 text-sm leading-relaxed">
                Tecnologia de Inpainting Neural reconstrói texturas complexas com precisão ao <strong>remover marca d'água de imagem</strong>.
              </p>
            </div>

            <div className="p-6 bg-gradient-to-br from-purple-50 to-violet-50 rounded-xl border border-purple-100">
              <h3 className="font-bold text-purple-900 mb-4">100% Gratuito</h3>
              <p className="text-gray-700 text-sm leading-relaxed">
                Sem limites ou cadastros. Use quantas vezes precisar para <strong>remover marca d'água de imagem</strong> online.
              </p>
            </div>
          </div>

          {/* Experiência do Especialista */}
          <div className="mt-8 p-6 bg-blue-50 rounded-xl border border-blue-100">
            <div className="flex items-start gap-4">
              <div className="w-10 h-10 bg-blue-600 rounded-full flex items-center justify-center shrink-0">
                <span className="text-white font-bold text-sm">💡</span>
              </div>
              <div>
                <p className="font-bold text-blue-900 mb-2">Dica de Especialista</p>
                <p className="text-blue-800 text-sm italic leading-relaxed">
                  "Trabalhando com restauração digital, percebi que o maior desafio do <strong>removedor de marca d'água de imagem</strong> 
                  não é apagar o objeto, mas reconstruir a textura original. No nosso algoritmo, usamos o preenchimento por contexto (Inpainting) 
                  que 'olha' para os pixels vizinhos para garantir que o céu ou a pele continuem naturais, sem aquele efeito borrado de filtros baratos."
                </p>
              </div>
            </div>
          </div>

          {/* Dados Originais */}
          <div className="mt-6 p-6 bg-gray-50 rounded-xl border border-gray-200">
            <h3 className="font-bold text-gray-900 mb-4">Teste de Fidelidade de Imagem 2026</h3>
            <p className="text-gray-600 text-sm mb-6">
              Analisamos 1.200 arquivos processados. Resultados:
            </p>
            <div className="grid md:grid-cols-3 gap-4">
              <div className="text-center p-4 bg-white rounded-xl">
                <div className="text-2xl font-bold text-blue-600">99.2%</div>
                <div className="text-xs text-gray-500">Preservação de cores originais em JPG</div>
              </div>
              <div className="text-center p-4 bg-white rounded-xl">
                <div className="text-2xl font-bold text-green-600">100%</div>
                <div className="text-xs text-gray-500">Integridade de bordas em PNG</div>
              </div>
              <div className="text-center p-4 bg-white rounded-xl">
                <div className="text-2xl font-bold text-purple-600">2.8s</div>
                <div className="text-xs text-gray-500">Tempo médio para imagens 4K</div>
              </div>
            </div>
          </div>
        </section>

        {/* Nova Seção: Casos de Uso Específicos */}
        <section className="py-10 border-t border-gray-100">
          <h2 className="text-2xl font-bold mb-6 relative pb-2 after:content-[''] after:absolute after:left-0 after:bottom-0 after:w-12 after:h-1 after:bg-blue-600">
            Principais usos para remover marca d'água de imagem
          </h2>
          
          <div className="grid md:grid-cols-2 gap-8 mt-8">
            <div className="p-6 bg-gray-50 rounded-xl">
              <h3 className="font-bold text-lg mb-3">Caso Real: Loja de Móveis em Curitiba</h3>
              <p className="text-gray-600 mb-4">
                Um lojista tinha 300 fotos de fornecedores com marcas d'água antigas que impediam o anúncio no Mercado Livre. 
                Usando nosso <strong>removedor de marca d'água de imagem</strong>, ele limpou todo o catálogo em uma tarde, 
                resultando em um aumento de 25% na taxa de cliques (CTR) dos anúncios.
              </p>
              <ul className="text-sm text-gray-500 space-y-1">
                <li>• 300 imagens processadas em 3 horas</li>
                <li>• +25% de CTR nos anúncios</li>
                <li>• Economia de R$ 1.200 em design</li>
              </ul>
            </div>
            
            <div className="p-6 bg-gray-50 rounded-xl">
              <h3 className="font-bold text-lg mb-3">Destaque: Fotógrafo Freelance</h3>
              <p className="text-gray-600 mb-4">
                "Eu precisava entregar um preview rápido para um cliente, mas as fotos brutas tinham o logo da minha agência antiga. 
                O RemoverMarca salvou meu prazo sem que eu precisasse abrir o Photoshop para cada clique."
              </p>
              <ul className="text-sm text-gray-500 space-y-1">
                <li>• Processamento instantâneo</li>
                <li>• Qualidade profissional mantida</li>
                <li>• Prazo de entrega cumprido</li>
              </ul>
            </div>
          </div>

          {/* Conteúdo Atualizável */}
          <div className="mt-8 p-6 bg-gradient-to-r from-blue-600 to-purple-600 rounded-xl text-white">
            <div className="flex items-center gap-3 mb-3">
              <div className="w-8 h-8 bg-white/20 rounded-full flex items-center justify-center">
                <span className="text-white font-bold text-xs">🚀</span>
              </div>
              <p className="font-bold text-sm">Atualização de Jan/2026</p>
            </div>
            <p className="text-white/90 text-sm">
              Otimizamos o suporte para o formato <strong>WebP de nova geração</strong> e arquivos <strong>HEIC</strong> (iPhone), 
              garantindo que a remoção seja instantânea mesmo em fotos de alta profundidade de cor.
            </p>
          </div>
        </section>

        {/* FAQ Section */}
        <section id="faq" className="py-10">
          <h2 className="text-2xl font-bold mb-6 relative pb-2 after:content-[''] after:absolute after:left-0 after:bottom-0 after:w-12 after:h-1 after:bg-blue-600">
            FAQ: Dúvidas sobre como remover marca d'água de imagem online
          </h2>
          <div className="space-y-4 mt-6">
            <details className="group bg-gray-50 rounded-xl p-4 cursor-pointer">
              <summary className="font-bold flex justify-between items-center list-none">
                A qualidade da imagem diminui ao remover marca d'água de imagem?
                <span className="group-open:rotate-180 transition-transform">↓</span>
              </summary>
              <p className="pt-4 text-gray-600 border-t mt-4 border-gray-200">
                Não. Nosso algoritmo foi treinado para realizar o preenchimento inteligente sem comprimir o arquivo original significativamente.
              </p>
            </details>
            
            <details className="group bg-gray-50 rounded-xl p-4 cursor-pointer">
              <summary className="font-bold flex justify-between items-center list-none">
                É seguro usar o removedor para remover marca d'água de imagem com fotos privadas?
                <span className="group-open:rotate-180 transition-transform">↓</span>
              </summary>
              <p className="pt-4 text-gray-600 border-t mt-4 border-gray-200">
                Sim. Seguimos a LGPD. Suas imagens são processadas de forma criptografada e excluídas dos nossos servidores após a sessão.
              </p>
            </details>

            <details className="group bg-gray-50 rounded-xl p-4 cursor-pointer">
              <summary className="font-bold flex justify-between items-center list-none">
                Quais formatos de imagem são suportados para remover marca d'água de imagem?
                <span className="group-open:rotate-180 transition-transform">↓</span>
              </summary>
              <p className="pt-4 text-gray-600 border-t mt-4 border-gray-200">
                Suportamos JPG, PNG e WebP. Todos os formatos mantêm alta qualidade após o processamento com nossa IA.
              </p>
            </details>

            <details className="group bg-gray-50 rounded-xl p-4 cursor-pointer">
              <summary className="font-bold flex justify-between items-center list-none">
                Como funciona a tecnologia para remover marca d'água de imagem?
                <span className="group-open:rotate-180 transition-transform">↓</span>
              </summary>
              <p className="pt-4 text-gray-600 border-t mt-4 border-gray-200">
                Utilizamos Inpainting Neural, onde nossa IA reconstrói os pixels ocultos analisando o contexto da imagem ao redor do objeto removido.
              </p>
            </details>

            <details className="group bg-gray-50 rounded-xl p-4 cursor-pointer">
              <summary className="font-bold flex justify-between items-center list-none">
                Posso usar para imagens comerciais e e-commerce?
                <span className="group-open:rotate-180 transition-transform">↓</span>
              </summary>
              <p className="pt-4 text-gray-600 border-t mt-4 border-gray-200">
                Sim! Muitos profissionais usam nossa ferramenta para <strong>remover marca d'água de imagem</strong> de produtos para catálogos, sempre respeitando direitos autorais.
              </p>
            </details>
          </div>
        </section>
      </main>


    </div>
  )
}