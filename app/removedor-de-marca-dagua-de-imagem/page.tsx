import type { Metadata } from "next"
import { Header } from "@/components/header"
import { UploadArea } from "@/components/upload-area"
import Link from "next/link"

// 严格保留 SEO 元数据
export const metadata: Metadata = {
  title: "Removedor de Marca d'Água de Imagem Online (2026) - IA Grátis",
  description: "Use o melhor removedor de marca d'água de imagem online. Tecnologia de IA para apagar logos e textos sem perder qualidade. Rápido, gratuito e seguro!",
  alternates: {
    canonical: "https://removermarca.com/removedor-de-marca-dagua-de-imagem",
  },
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

  return (
    <div className="min-h-screen bg-white">
      {/* 注入 JSON-LD */}
      <script
        type="application/ld-json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />

      <Header />

      <main className="max-w-[1000px] mx-auto px-[4%] pt-24 pb-16">
        {/* Tool Box Section */}
        <section className="bg-[#fdfdfd] border border-gray-200 rounded-[24px] p-10 text-center mb-10 shadow-sm">
          <h1 className="text-3xl md:text-5xl font-bold text-gray-900 mb-4 tracking-tight">
            O melhor removedor de marca d'água de imagem com IA em 2026
          </h1>
          <p className="text-gray-600 mb-8 max-w-2xl mx-auto">
            Nossa inteligência artificial avançada permite <strong>remover marca d'água de imagem</strong> mantendo a textura e os detalhes originais. Grátis, rápido e online.
          </p>
          
          {/* 复用项目已有的上传组件 */}
          <div className="max-w-2xl mx-auto">
            <UploadArea />
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
            Como apagar marca d'água de imagem sem borrar o fundo
          </h2>
          <div className="grid md:grid-cols-2 gap-6 mt-8">
            <div className="p-6 rounded-xl bg-gray-50 border-l-4 border-blue-600">
              <h3 className="font-bold text-lg mb-2">Inpainting Neural</h3>
              <p className="text-gray-600">Nossa IA reconstrói os pixels ocultos analisando o contexto da imagem ao redor do objeto removido.</p>
            </div>
            <div className="p-6 rounded-xl bg-gray-50 border-l-4 border-blue-600">
              <h3 className="font-bold text-lg mb-2">Preservação de DPI</h3>
              <p className="text-gray-600">Diferente de outros sites, mantemos a densidade de pixels para impressões de alta qualidade.</p>
            </div>
          </div>
        </section>

        {/* Formatos Section */}
        <section className="py-10">
          <h2 className="text-2xl font-bold mb-6 relative pb-2 after:content-[''] after:absolute after:left-0 after:bottom-0 after:w-12 after:h-1 after:bg-blue-600">
            Formatos suportados: De JPG a WebP com alta fidelidade
          </h2>
          <div className="overflow-x-auto mt-6 rounded-xl border border-gray-200">
            <table className="w-full text-left min-w-[500px]">
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
              <p><strong>Aguarde:</strong> Nossa IA processa o <strong>removedor de marca d'água de imagem</strong> em segundos.</p>
            </div>
          </div>
        </section>

        {/* FAQ Section */}
        <section id="faq" className="py-10">
          <h2 className="text-2xl font-bold mb-6 relative pb-2 after:content-[''] after:absolute after:left-0 after:bottom-0 after:w-12 after:h-1 after:bg-blue-600">
            FAQ: Dúvidas sobre o removedor de imagem online
          </h2>
          <div className="space-y-4 mt-6">
            <details className="group bg-gray-50 rounded-xl p-4 cursor-pointer">
              <summary className="font-bold flex justify-between items-center list-none">
                A qualidade da imagem diminui?
                <span className="group-open:rotate-180 transition-transform">↓</span>
              </summary>
              <p className="pt-4 text-gray-600 border-t mt-4 border-gray-200">
                Não. Nosso algoritmo foi treinado para realizar o preenchimento inteligente sem comprimir o arquivo original significativamente.
              </p>
            </details>
            <details className="group bg-gray-50 rounded-xl p-4 cursor-pointer">
              <summary className="font-bold flex justify-between items-center list-none">
                É seguro para fotos privadas?
                <span className="group-open:rotate-180 transition-transform">↓</span>
              </summary>
              <p className="pt-4 text-gray-600 border-t mt-4 border-gray-200">
                Sim. Seguimos a LGPD. Suas imagens são processadas de forma criptografada e excluídas dos nossos servidores após a sessão.
              </p>
            </details>
          </div>
        </section>
      </main>

    
    </div>
  )
}