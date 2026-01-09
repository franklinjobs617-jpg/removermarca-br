import type { Metadata } from "next"
import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import Link from "next/link"
import { 
  CheckCircle2, 
  HelpCircle, 
  MousePointer2, 
  Zap, 
  ShieldCheck,
  ArrowRight
} from "lucide-react"

export const metadata: Metadata = {
  title: "Como Tirar a Marca d'Água de uma Foto (Guia Rápido 2026)",
  description: "Descubra como tirar a marca d'água de uma foto em segundos. Use nossa IA gratuita para limpar imagens sem perder qualidade. Guia fácil e 100% online.",
  alternates: {
    canonical: "https://removermarca.com/como-tirar-a-marca-dagua-de-uma-foto",
  },
}

export default function GuiaComoTirarMarcaPage() {
  // JSON-LD para FAQPage (Rich Snippets)
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": [{
      "@type": "Question",
      "name": "Como tirar a marca d'água de uma foto rápido?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Para tirar a marca d'água de uma foto rapidamente, acesse RemoverMarca.com, carregue sua imagem, selecione a área da marca com o pincel de IA e clique em processar. O resultado fica pronto em menos de 3 segundos."
      }
    },
    {
      "@type": "Question",
      "name": "É possível manter a qualidade original da foto?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Sim, nossa tecnologia de Inpainting IA reconstrói os pixels sem comprimir a imagem, mantendo a resolução e nitidez originais."
      }
    }]
  }

  return (
    <div className="min-h-screen bg-white text-slate-900 leading-relaxed font-sans">
      <script
        type="application/ld-json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />

      <Header />

      <main className="max-w-[800px] mx-auto px-4 sm:px-6 pt-24 pb-20">
        <article>
          {/* Título Principal */}
          <h1 className="text-3xl md:text-4xl lg:text-5xl font-black text-black mb-8 tracking-tight leading-tight italic uppercase">
            Como tirar a marca d&apos;água de uma foto (Guia Rápido 2026)
          </h1>
          
          <p className="text-lg text-slate-600 mb-10 font-medium italic">
            Muitas pessoas buscam <strong>como tirar a marca d&apos;água de uma foto</strong> para recuperar memórias antigas ou melhorar o visual de imagens pessoais. Com o avanço da IA em 2026, esse processo que levava horas agora é instantâneo.
          </p>

          {/* Snippet Bait Box (Otimizado para o Google) */}
          <div className="bg-blue-50 border-l-8 border-blue-500 p-8 rounded-r-3xl my-12 shadow-sm">
            <h2 className="text-xl md:text-2xl font-black text-blue-800 mb-6 flex items-center gap-2 uppercase tracking-tight">
              <CheckCircle2 className="text-blue-500" />
              Resposta Rápida: Como tirar a marca d&apos;água?
            </h2>
            <ul className="space-y-4">
              {[
                { step: "Passo 1", text: "Acesse o site", link: "remover marca d'água online", href: "/" },
                { step: "Passo 2", text: "Carregue sua foto (JPG, PNG ou WebP).", href: null },
                { step: "Passo 3", text: "Pinte sobre a marca d'água com o pincel de IA.", href: null },
                { step: "Passo 4", text: "Clique em \"Remover\" e baixe a imagem limpa.", href: null }
              ].map((item, i) => (
                <li key={i} className="flex items-start gap-3 font-bold text-slate-700 italic">
                  <span className="bg-blue-500 text-white w-6 h-6 rounded-full flex items-center justify-center text-[10px] shrink-0 mt-1 uppercase font-black">
                    {i + 1}
                  </span>
                  <span>
                    <strong>{item.step}:</strong> {item.text}{" "}
                    {item.link && (
                      <Link href={item.href!} className="text-blue-600 underline underline-offset-4 decoration-2">
                        {item.link}
                      </Link>
                    )}
                  </span>
                </li>
              ))}
            </ul>
          </div>

          <section className="py-10 border-t border-slate-50">
            <h2 className="text-2xl font-black mb-6 uppercase tracking-tighter italic">
              A resposta definitiva: Como tirar a marca d&apos;água de uma foto rápido?
            </h2>
            <p className="mb-8">
              A tecnologia evoluiu de simples retoques manuais para o que chamamos de <strong>Inpainting Neural</strong>. 
              Ao usar nossa ferramenta, você não está apenas apagando pixels, mas pedindo à IA para reconstruir o que deveria estar ali originalmente.
            </p>
            <div className="text-center">
              <Link 
                href="/" 
                className="bg-blue-600 hover:bg-blue-700 text-white px-10 py-5 rounded-full font-black text-xl uppercase tracking-widest transition-all shadow-xl shadow-blue-200 active:scale-95 inline-flex items-center gap-3"
              >
                Tirar Marca Agora - 100% Grátis <ArrowRight size={20} />
              </Link>
            </div>
          </section>

          <section className="py-10 border-t border-slate-50 font-medium">
            <h2 className="text-2xl font-black mb-6 uppercase tracking-tighter italic">
              Melhores métodos gratuitos para limpar fotos no celular e PC
            </h2>
            <p className="mb-6">
              Se você quer saber <strong>como tirar a marca d&apos;água de uma foto</strong> sem gastar nada, existem duas vias principais: o uso de ferramentas web ou apps móveis. Recomendamos a versão web pela maior capacidade de processamento da nossa IA de 2026.
            </p>
          </section>

          <section className="py-10 border-t border-slate-50">
            <h2 className="text-2xl font-black mb-6 uppercase tracking-tighter italic">
              Por que algumas fotos são mais difíceis de limpar?
            </h2>
            <p className="mb-8 leading-relaxed">
              Fotos com fundos complexos (como folhagens ou rostos) exigem mais da tecnologia de Inpainting. Para esses casos, confira nosso guia de <Link href="/como-remover-marca-dagua-de-foto" className="text-blue-600 font-bold hover:underline">como remover marca d&apos;água de foto</Link> avançado.
            </p>
            <figure className="bg-slate-50 p-6 rounded-[40px] border border-slate-100 shadow-inner">
              <div className="aspect-video bg-slate-200 rounded-[32px] flex items-center justify-center overflow-hidden">
                <span className="text-slate-400 font-black italic uppercase tracking-widest text-xs">Exemplo de Restauração 4K</span>
              </div>
              <figcaption className="text-center text-[10px] font-black text-slate-400 mt-6 uppercase tracking-[0.3em]">
                Exemplo de restauração em fundo desfocado (Bokeh).
              </figcaption>
            </figure>
          </section>

          <section className="py-10 border-t border-slate-50">
            <h2 className="text-2xl font-black mb-6 uppercase tracking-tighter italic">
              Dicas para manter a alta resolução após a remoção
            </h2>
            <p className="mb-6">
              Ao usar um <Link href="/remover-marca-dagua-de-imagem" className="text-blue-600 font-bold hover:underline">removedor de marca da agua</Link> de qualidade, você garante que os metadados e o DPI da imagem não sejam alterados, mantendo a nitidez necessária para impressões profissionais.
            </p>
          </section>

          {/* Perguntas Frequentes Interativas */}
          <section id="faq" className="mt-16 pt-10 border-t border-slate-200">
            <h2 className="text-3xl font-black mb-10 flex items-center gap-3 tracking-tighter italic uppercase">
              <HelpCircle className="text-blue-500" /> Perguntas Frequentes 2026
            </h2>
            <div className="space-y-4">
              <details className="group bg-slate-50 border border-slate-100 rounded-3xl overflow-hidden transition-all">
                <summary className="p-6 font-black text-lg cursor-pointer list-none flex justify-between items-center bg-white border-b border-slate-50 group-open:bg-blue-50/50">
                  <span>É seguro usar ferramentas online?</span>
                  <span className="text-blue-500 text-2xl font-black transition-transform group-open:rotate-45">+</span>
                </summary>
                <div className="p-8 text-slate-600 font-medium leading-relaxed bg-white">
                  <div className="flex items-center gap-3 mb-4 text-green-600 font-black text-xs uppercase tracking-widest">
                     <ShieldCheck size={18} /> Proteção SSL Ativa
                  </div>
                  Sim! Nossa plataforma utiliza criptografia SSL e deleta suas fotos automaticamente após 1 hora de processamento, respeitando integralmente a LGPD brasileira.
                </div>
              </details>
            </div>
          </section>
        </article>
      </main> 
    </div>
  )
}