import type { Metadata } from "next"
import { Header } from "@/components/header"
import { UploadArea } from "@/components/upload-area"
import Link from "next/link"
import { 
  Zap, 
  ShieldCheck, 
  Clock, 
  CheckCircle2, 
  BarChart3, 
  MousePointerClick,
  HelpCircle
} from "lucide-react"

export const metadata: Metadata = {
  title: "Tirar Marca d'Água Online Grátis e Rápido (2026) - IA Sem Cadastro",
  description: "Quer tirar marca d'água online grátis? Nossa IA remove logos, textos e carimbos de fotos em segundos. Sem registro, sem download e com alta qualidade original.",
  alternates: {
    canonical: "https://removermarca.com/tirar-marca-dagua-online-gratis",
  },
}

export default function TirarGratisPage() {
  // JSON-LD para busca estruturada
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
  }

  return (
    <div className="min-h-screen bg-white text-[#2f3542]">
      <script
        type="application/ld-json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />

      <Header />

      <main>
        {/* HERO SECTION - Foco em Ação Rápida */}
        <section className="pt-24 pb-16 bg-gradient-to-b from-white to-[#f1f2f6] rounded-b-[40px]">
          <div className="max-w-[1100px] mx-auto px-6 text-center">
            <article className="animate-in fade-in slide-in-from-top-4 duration-700">
              <h1 className="text-3xl md:text-5xl font-black text-black mb-6 tracking-tight">
                Tirar marca d&apos;água <span className="text-[#ff4757] italic">online grátis</span> agora
              </h1>
              <p className="text-lg text-gray-600 mb-10 max-w-2xl mx-auto">
                Remova logos e objetos indesejados em 3 segundos. Sem registro, sem complicações e sem perder a qualidade original.
              </p>
              
              <div className="max-w-2xl mx-auto mb-10 group">
                <div className="bg-white border-4 border-dashed border-[#ff4757] rounded-[32px] p-2 shadow-2xl shadow-red-100 transition-all hover:border-[#2ed573]">
                  <UploadArea />
                </div>
                <p className="mt-4 text-xs font-bold text-gray-400 uppercase tracking-widest flex items-center justify-center gap-2">
                  <ShieldCheck size={14} className="text-[#2ed573]" />
                  Totalmente seguro conforme LGPD. Suas fotos são privadas.
                </p>
              </div>

              {/* Trust Bar Badges */}
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4 max-w-3xl mx-auto">
                <div className="bg-[#f1f2f6] py-3 px-6 rounded-2xl text-xs font-black uppercase tracking-widest flex items-center justify-center gap-2">
                  <CheckCircle2 size={16} className="text-[#2ed573]" /> Grátis para Sempre
                </div>
                <div className="bg-[#f1f2f6] py-3 px-6 rounded-2xl text-xs font-black uppercase tracking-widest flex items-center justify-center gap-2">
                  <ShieldCheck size={16} className="text-[#2ed573]" /> 100% Criptografado
                </div>
                <div className="bg-[#f1f2f6] py-3 px-6 rounded-2xl text-xs font-black uppercase tracking-widest flex items-center justify-center gap-2">
                  <Zap size={16} className="text-[#ff4757] fill-[#ff4757]" /> IA de Alta Velocidade
                </div>
              </div>
            </article>
          </div>
        </section>

        {/* BENEFÍCIOS SECTION */}
        <section className="max-w-[1100px] mx-auto px-6 py-20 border-b border-gray-100">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-2xl md:text-3xl font-black mb-6 flex items-center gap-3 italic uppercase tracking-tighter">
                <Zap className="text-[#ff4757] fill-[#ff4757]" /> Por que nossa IA é a melhor
              </h2>
              <p className="text-gray-600 leading-relaxed mb-6 font-medium">
                Diferente de ferramentas comuns que apenas borram a imagem, nosso sistema utiliza <strong>Redes Neurais Generativas</strong>. Ao tirar marca d&apos;água online grátis aqui, a IA reconstrói o que estava atrás do logo, garantindo uma textura perfeita e invisível.
              </p>
              <div className="bg-red-50 border-l-4 border-[#ff4757] p-6 rounded-r-2xl italic text-sm text-red-900 shadow-sm">
                &quot;O segredo da perfeição não é só a IA, mas como você a usa. Se o logo for grande, marque a área em partes menores para garantir que a textura seja reconstruída sem distorções.&quot;
              </div>
            </div>
            <div className="bg-[#2f3542] p-8 rounded-[40px] shadow-2xl relative overflow-hidden group">
               <BarChart3 className="absolute -bottom-6 -right-6 w-32 h-32 text-white/5 group-hover:rotate-12 transition-transform duration-700" />
               <h3 className="text-white font-black text-xl mb-6 uppercase tracking-widest">Teste de Estresse (2025)</h3>
               <div className="space-y-6 relative z-10">
                  <div className="flex justify-between items-end">
                    <span className="text-gray-400 text-[10px] font-black uppercase">Precisão IA</span>
                    <span className="text-[#2ed573] font-black text-2xl">98%</span>
                  </div>
                  <div className="w-full bg-gray-700 h-2 rounded-full overflow-hidden">
                    <div className="bg-[#2ed573] h-full w-[98%]" />
                  </div>
                  <div className="flex justify-between text-[10px] font-black text-gray-400 uppercase tracking-tighter">
                    <span>Tempo: 2.4 segundos</span>
                    <span>Qualidade: 100% Original</span>
                  </div>
               </div>
            </div>
          </div>
        </section>

        {/* COMPARATIVO TABLE */}
        <section className="max-w-[1100px] mx-auto px-6 py-20">
          <h2 className="text-2xl md:text-3xl font-black mb-10 flex items-center gap-3 italic uppercase tracking-tighter">
            <Zap className="text-[#ff4757] fill-[#ff4757]" /> Comparativo de Mercado
          </h2>
          <div className="overflow-x-auto rounded-[32px] border border-gray-200 shadow-sm">
            <table className="w-full border-collapse min-w-[600px] text-sm">
              <thead>
                <tr className="bg-[#2f3542] text-white">
                  <th className="p-6 text-left font-black uppercase tracking-widest text-[10px]">Recurso</th>
                  <th className="p-6 bg-[#2ed573]/10 text-[#2ed573] font-black uppercase tracking-widest text-[10px]">RemoverMarca.com</th>
                  <th className="p-6 font-black uppercase tracking-widest text-[10px]">Apps Pagos</th>
                </tr>
              </thead>
              <tbody className="font-bold text-gray-700">
                <tr className="border-b border-gray-100">
                  <td className="p-6">Custo Total</td>
                  <td className="p-6 bg-[#e8f5e9] text-[#2ed573]">100% Grátis</td>
                  <td className="p-6 text-gray-400 font-medium">R$ 49+/mês</td>
                </tr>
                <tr className="border-b border-gray-100">
                  <td className="p-6">Exigência de Cadastro</td>
                  <td className="p-6 bg-[#e8f5e9] text-[#2ed573]">Não Requerido</td>
                  <td className="p-6 text-gray-400 font-medium">Obrigatório</td>
                </tr>
                <tr className="border-b border-gray-100">
                  <td className="p-6">Velocidade IA</td>
                  <td className="p-6 bg-[#e8f5e9] text-[#2ed573]">~3 Segundos</td>
                  <td className="p-6 text-gray-400 font-medium">Depende do PC</td>
                </tr>
                <tr>
                  <td className="p-6">Facilidade</td>
                  <td className="p-6 bg-[#e8f5e9] text-[#2ed573]">Online (Browser)</td>
                  <td className="p-6 text-gray-400 font-medium">Instalação Pesada</td>
                </tr>
              </tbody>
            </table>
          </div>
        </section>

        {/* SEO LINKS BLOCK */}
        <div className="max-w-[1100px] mx-auto px-6 mb-20">
          <div className="bg-gray-50 p-8 rounded-[32px] border border-gray-100 text-sm leading-relaxed">
            <span className="font-black text-[#ff4757] uppercase mr-2 tracking-widest text-xs">Dica Pro:</span>
            Se você precisa de um guia detalhado, veja nosso artigo sobre <Link href="/como-remover-marca-dagua-de-foto" className="text-blue-600 font-bold hover:underline">como remover marca d&apos;água de foto</Link> passo a passo. Para usuários avançados, use o <Link href="/remover-de-marca-dagua-de-imagem" className="text-blue-600 font-bold hover:underline">removedor de marca d&apos;água de imagem</Link> profissional.
          </div>
        </div>

        {/* FAQ SECTION */}
        <section id="faq" className="max-w-[800px] mx-auto px-6 py-20 border-t border-gray-100">
          <h2 className="text-2xl font-black mb-10 text-center uppercase italic tracking-tighter">Perguntas Frequentes (FAQ)</h2>
          <div className="space-y-4">
            <details className="group bg-white border border-gray-200 p-6 rounded-2xl cursor-pointer hover:shadow-md transition-shadow">
              <summary className="font-black flex justify-between items-center list-none uppercase text-xs tracking-widest">
                Quantas imagens posso tirar por dia?
                <span className="text-[#ff4757] text-xl font-bold transition-transform group-open:rotate-45">+</span>
              </summary>
              <p className="mt-4 pt-4 border-t border-gray-50 text-gray-500 text-sm leading-relaxed">
                Não há limites! Você pode <strong>tirar marca d&apos;água online grátis</strong> de quantas fotos precisar utilizando nossos créditos diários renováveis.
              </p>
            </details>
            <details className="group bg-white border border-gray-200 p-6 rounded-2xl cursor-pointer hover:shadow-md transition-shadow">
              <summary className="font-black flex justify-between items-center list-none uppercase text-xs tracking-widest">
                Minha foto perde resolução?
                <span className="text-[#ff4757] text-xl font-bold transition-transform group-open:rotate-45">+</span>
              </summary>
              <p className="mt-4 pt-4 border-t border-gray-50 text-gray-500 text-sm leading-relaxed">
                Nossa tecnologia mantém o DPI original. O resultado é uma imagem limpa e nítida para uso profissional em redes sociais ou e-commerce.
              </p>
            </details>
          </div>
        </section>

        {/* USO RECOMENDADO BOX */}
        <section className="max-w-[1100px] mx-auto px-6 pb-20">
          <div className="bg-[#2f3542] text-white p-8 rounded-[32px] text-sm italic font-medium opacity-90 text-center">
            <strong>Uso Recomendado:</strong> Ideal para empreendedores de Dropshipping no Brasil que precisam limpar catálogos de fornecedores ou recuperar fotos antigas de redes sociais.
          </div>
        </section>
      </main> 
    </div>
  )
}