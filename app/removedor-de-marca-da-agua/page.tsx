import type { Metadata } from "next"
import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import Link from "next/link"
import { 
  Zap, 
  ShieldCheck, 
  MousePointerClick, 
  Lock, 
  CheckCircle2, 
  FileSearch,
  ArrowRight
} from "lucide-react"

export const metadata: Metadata = {
  title: "Removedor de Marca da Agua Online e Gratis (2026)",
  description: "Precisa de um removedor de marca da agua simples? Use nossa ferramenta gratuita para limpar fotos sem instalação. Rápido, seguro e 100% online em 2026.",
  alternates: {
    canonical: "https://removermarca.com/removedor-de-marca-da-agua",
  },
}

export default function RemovedorMarcaDaguaInformativo() {
  return (
    <div className="min-h-screen bg-white text-slate-800">
      <Header />

      <main className="max-w-[900px] mx-auto px-4 sm:px-6 pt-24 pb-20">
        <article>
          {/* Hero Informativo */}
          <section className="bg-slate-50 border border-slate-200 rounded-[32px] p-8 md:p-12 text-center mb-10 shadow-sm animate-in fade-in slide-in-from-top-4 duration-700">
            <h1 className="text-3xl md:text-4xl font-black text-slate-900 mb-6 tracking-tight leading-tight">
              O que é um <span className="text-blue-600">removedor de marca da agua</span> e como ele funciona?
            </h1>
            <p className="text-lg text-slate-600 mb-8 max-w-2xl mx-auto font-medium">
              Descubra como nossa ferramenta online apaga elementos indesejados sem complicar sua vida.
            </p>
            <Link 
              href="/" 
              className="bg-blue-600 hover:bg-blue-700 text-white px-10 py-5 rounded-2xl font-black text-xl uppercase tracking-widest transition-all shadow-xl shadow-blue-100 active:scale-95 inline-block"
            >
              Subir Foto Grátis
            </Link>
            <p className="mt-8 text-xs font-bold text-slate-400 uppercase tracking-[0.2em] flex items-center justify-center gap-2">
              <Zap size={14} className="text-blue-500 fill-blue-500" />
              Processado por: Core-V4.2 IA (Jan 2026)
            </p>
          </section>

          <p className="text-lg leading-relaxed mb-12">
            Se você precisa de um <strong>removedor de marca da agua</strong> eficaz, sabe que a busca por qualidade e segurança é prioridade. Em nossa plataforma, ajudamos você a <Link href="/" className="text-blue-600 font-bold hover:underline italic">remover marca d&apos;água online</Link> de forma intuitiva, sem precisar baixar softwares pesados.
          </p>

          <section className="py-10 border-b border-slate-100">
            <h2 className="text-2xl font-black text-slate-900 mb-8 uppercase italic tracking-tighter">
              Por que usar um removedor de marca da agua online e gratis?
            </h2>
            <div className="grid md:grid-cols-2 gap-6 mb-8 font-medium">
              <div className="p-6 bg-white border border-slate-200 rounded-2xl shadow-sm hover:border-blue-200 transition-colors">
                <div className="w-10 h-10 bg-blue-50 rounded-lg flex items-center justify-center mb-4 text-blue-600">
                  <MousePointerClick size={24} />
                </div>
                <h3 className="font-black text-lg mb-2 uppercase tracking-tight">Simplicidade Total</h3>
                <p className="text-slate-500 text-sm leading-relaxed">
                  Ideal para quem não domina o Photoshop mas precisa de um resultado profissional rápido e limpo.
                </p>
              </div>
              <div className="p-6 bg-white border border-slate-200 rounded-2xl shadow-sm hover:border-blue-200 transition-colors">
                <div className="w-10 h-10 bg-green-50 rounded-lg flex items-center justify-center mb-4 text-green-600">
                  <ShieldCheck size={24} />
                </div>
                <h3 className="font-black text-lg mb-2 uppercase tracking-tight">Privacidade LGPD</h3>
                <p className="text-slate-500 text-sm leading-relaxed">
                  Diferente de apps suspeitos, não pedimos acesso aos seus dados privados ou redes sociais.
                </p>
              </div>
            </div>
          </section>

          <section id="passo-a-passo" className="py-12 border-b border-slate-100 scroll-mt-24">
            <h2 className="text-2xl font-black text-slate-900 mb-10 uppercase italic tracking-tighter">
              Passo a passo simples para iniciantes (Sem instalação)
            </h2>
            <div className="space-y-8">
              {[
                { step: "01", title: "Seleção", desc: "Arraste sua foto para o centro da tela inicial do nosso site." },
                { step: "02", title: "Marcação", desc: "Use o pincel inteligente sobre o carimbo, data ou texto indesejado." },
                { step: "03", title: "Conclusão", desc: "Clique em processar e baixe seu arquivo limpo em alta definição." }
              ].map((item, idx) => (
                <div key={idx} className="flex gap-6 items-start group">
                  <span className="text-4xl font-black text-blue-100 italic group-hover:text-blue-500 transition-colors">{item.step}</span>
                  <div>
                    <h4 className="font-black text-slate-900 uppercase text-sm mb-1 tracking-widest">{item.title}</h4>
                    <p className="text-slate-500 font-medium">{item.desc}</p>
                  </div>
                </div>
              ))}
            </div>
            <div className="mt-12 p-6 bg-blue-50 rounded-2xl border border-blue-100 flex items-center justify-between gap-4 flex-col sm:flex-row">
              <p className="text-sm font-bold text-blue-800 italic">Precisa de algo mais robusto para fotos profissionais?</p>
              <Link href="/remover-marca-dagua-de-imagem" className="flex items-center gap-2 text-xs font-black uppercase bg-white px-4 py-2 rounded-lg text-blue-600 shadow-sm hover:shadow-md transition-all">
                Ver Ferramenta HD <ArrowRight size={14} />
              </Link>
            </div>
          </section>

          <section className="py-12 border-b border-slate-100">
            <h2 className="text-2xl font-black text-slate-900 mb-8 uppercase italic tracking-tighter">
              Segurança de dados: Suas fotos estão protegidas?
            </h2>
            <div className="overflow-x-auto rounded-3xl border border-slate-200">
              <table className="w-full text-left text-sm border-collapse min-w-[500px]">
                <thead>
                  <tr className="bg-slate-50 text-slate-400 text-[10px] uppercase font-black tracking-widest">
                    <th className="p-6 border-b border-slate-200">Tipo de Risco</th>
                    <th className="p-6 border-b border-slate-200">Nossa Proteção</th>
                  </tr>
                </thead>
                <tbody className="text-slate-700 font-bold divide-y divide-slate-100">
                  <tr>
                    <td className="p-6 flex items-center gap-2"><Lock size={14} className="text-blue-400" /> Privacidade</td>
                    <td className="p-6">Arquivos deletados automaticamente após 1 hora.</td>
                  </tr>
                  <tr>
                    <td className="p-6 flex items-center gap-2"><ShieldCheck size={14} className="text-blue-400" /> Segurança SSL</td>
                    <td className="p-6">Conexão 100% criptografada via HTTPS (256-bit).</td>
                  </tr>
                  <tr>
                    <td className="p-6 flex items-center gap-2"><CheckCircle2 size={14} className="text-green-500" /> LGPD</td>
                    <td className="p-6 text-green-600 font-black italic">Conformidade total com a lei brasileira.</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </section>

          <section className="py-12">
            <h2 className="text-2xl font-black text-slate-900 mb-8 uppercase italic tracking-tighter">
              Diferença entre removedores de texto e de logotipos
            </h2>
            <figure className="bg-[#f8fafc] p-6 rounded-[40px] border border-slate-100 shadow-inner group">
              <div className="aspect-video bg-slate-200 rounded-[32px] flex items-center justify-center overflow-hidden relative">
                <span className="text-slate-400 font-black italic tracking-widest uppercase text-xs">Exemplo de Precisão IA 2026</span>
                <div className="absolute inset-0 bg-blue-600/5 group-hover:bg-transparent transition-all" />
              </div>
              <figcaption className="text-center text-[10px] font-black text-slate-400 mt-6 uppercase tracking-[0.3em]">
                Exemplo de restauração invisível em fundos complexos.
              </figcaption>
            </figure>
          </section>

          {/* Call to Action Final */}
          <section className="bg-amber-400 rounded-[40px] p-8 md:p-12 mt-10 text-center shadow-xl shadow-amber-100 border border-amber-300">
            <h2 className="text-3xl font-black text-slate-900 mb-6 uppercase italic tracking-tighter">
              Conclusão: Qual a melhor opção em 2026?
            </h2>
            <p className="text-slate-900 font-bold mb-10 text-lg">
              Para quem busca agilidade e custo zero, nosso <strong>removedor de marca da agua</strong> é a escolha definitiva.
            </p>
            <Link 
              href="/tirar-marca-dagua-online-gratis" 
              className="bg-slate-900 text-white px-10 py-5 rounded-2xl font-black text-xl uppercase tracking-widest hover:bg-black transition-all shadow-lg active:scale-95 inline-block"
            >
              Tirar Marca Grátis
            </Link>
          </section>
        </article>
      </main>

      <Footer />

      {/* Mobile CTA Sticky Navigation */}
      <nav className="lg:hidden fixed bottom-0 left-0 right-0 bg-white border-t border-slate-100 p-4 flex gap-4 z-[100] shadow-[0_-10px_30px_rgba(0,0,0,0.05)]">
        <Link 
          href="/" 
          className="flex-1 bg-blue-600 text-white py-4 rounded-xl font-black uppercase text-xs tracking-widest text-center shadow-lg shadow-blue-100 active:scale-95"
        >
          Tirar Marca Agora
        </Link>
        <Link 
          href="#passo-a-passo" 
          className="flex-1 bg-slate-100 text-slate-900 py-4 rounded-xl font-black uppercase text-xs tracking-widest text-center active:scale-95"
        >
          Ver Guia
        </Link>
      </nav>
    </div>
  )
}