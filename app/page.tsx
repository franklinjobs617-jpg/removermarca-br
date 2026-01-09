"use client"

import { Header } from "@/components/header"
import { UploadArea } from "@/components/upload-area"
import { BeforeAfterSlider } from "@/components/before-after-slider"
import { SampleImages } from "@/components/sample-images"
import { 
  Check, 
  Zap, 
  ShieldCheck, 
  Star, 
  ArrowRight, 
  HelpCircle, 
  Sparkles,
  MousePointer2
} from "lucide-react"
import Link from "next/link"

export default function Home() {
  return (
    <div className="min-h-screen bg-[#f8fafc]">
      <Header />

    <main className="pt-12 pb-20">
        {/* --- 1:1 视觉还原 HERO SECTION (全端兼容版) --- */}
{/* --- SECTION 1: HERO (全端优化版) --- */}
<section className="relative pt-12 md:pt-20 pb-16 overflow-hidden bg-dot-grid">
  <div className="max-w-7xl mx-auto px-4 sm:px-6 grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-16 items-center">
    
    {/* --- 右侧/上传框：在移动端排在第一位 (order-1) --- */}
    <div className="order-1 md:order-2 relative flex justify-center lg:justify-end animate-in fade-in slide-in-from-top-4 lg:slide-in-from-right duration-1000">
      <div className="w-full max-w-[480px] bg-white rounded-[32px] md:rounded-[56px] p-6 md:p-12 shadow-[0_40px_80px_-20px_rgba(0,0,0,0.1)] border border-slate-50 relative z-10 flex flex-col items-center">
        <div className="space-y-5 text-center lg:text-left block md:hidden">
        {/* 顶部标签 */}
        <div className="inline-flex items-center gap-2 px-3 py-1 bg-blue-50 border border-blue-100 rounded-full w-fit mx-auto lg:mx-0">
          <Sparkles className="w-3.5 h-3.5 text-blue-600 fill-blue-600" />
          <span className="text-[10px] font-black text-blue-700 uppercase tracking-widest">Tecnologia IA 2026</span>
        </div>
        
        {/* 主标题 */}
        <h1 className="text-4xl md:text-5xl lg:text-6xl font-black text-slate-900 leading-[1.15] tracking-tight">
          Ferramenta de IA para <br className="hidden sm:block" />
          <span className="text-blue-600 italic">tirar marca d&apos;água</span> <br className="hidden sm:block" />
          online grátis
        </h1>
        
        {/* 副标题 */}
        <p className="text-sm md:text-lg text-slate-500 max-w-md mx-auto lg:mx-0 font-medium leading-relaxed">
          O jeito mais rápido e profissional de <strong className="text-slate-900">remover marca d&apos;água de imagem</strong> sem perder qualidade ou deixar borrões.
        </p>
 
      </div>
        {/* 上传区域 */}
        <div className="w-full mt-4 md:mt-0">
          <UploadArea />
        </div>
        
        {/* 示例图区域 (移动端稍微缩小间距) */}
        <div className="w-full pt-6 border-t border-slate-50 text-center">
          <p className="text-[10px] font-black text-slate-400 uppercase tracking-[0.2em] mb-4">Não tem foto? Tente estas:</p>
          <SampleImages />
        </div>

        {/* 底部法律小字 */}
        <div className="mt-6">
          <p className="text-[9px] text-slate-300 text-center uppercase font-black tracking-widest leading-relaxed">
            Ao carregar, você concorda com nossos <Link href="/termos-de-uso" className="underline hover:text-blue-500">Termos</Link>
          </p>
        </div>
      </div> 
    </div>

    {/* --- 左侧/文字和对比图：在移动端排在第二位 (order-2) --- */}
    <div className="order-2 md:order-1 flex flex-col space-y-8 animate-in fade-in slide-in-from-bottom-4 lg:slide-in-from-left duration-700">
      <div className="space-y-5 text-center lg:text-left hidden md:block">
        {/* 顶部标签 */}
        <div className="inline-flex items-center gap-2 px-3 py-1 bg-blue-50 border border-blue-100 rounded-full w-fit mx-auto lg:mx-0">
          <Sparkles className="w-3.5 h-3.5 text-blue-600 fill-blue-600" />
          <span className="text-[10px] font-black text-blue-700 uppercase tracking-widest">Tecnologia IA 2026</span>
        </div>
        
        {/* 主标题 */}
        <h1 className="text-3xl md:text-5xl font-black text-slate-900 leading-[1.15] tracking-tight">
          Ferramenta de IA para <br className="hidden sm:block" />
          <span className="text-blue-600 italic">tirar marca d&apos;água</span> <br className="hidden sm:block" />
          online grátis
        </h1>
        
        {/* 副标题 */}
        <p className="text-sm md:text-md text-slate-500 max-w-md mx-auto lg:mx-0 font-medium leading-relaxed">
          O jeito mais rápido e profissional de <strong className="text-slate-900">remover marca d&apos;água de imagem</strong> sem perder qualidade ou deixar borrões.
        </p> 
      </div>

      {/* 对比滑块预览图：核心修复部分 */}
      <div className="relative group w-full max-w-lg mx-auto lg:mx-0">
        {/* 修复：移动端调小了标签高度 */}
        <div className="absolute -top-3 -left-2 bg-blue-600 text-white px-2 py-1 rounded-lg shadow-xl z-20 text-[9px] font-black uppercase tracking-widest flex items-center gap-1.5">
           <MousePointer2 className="w-2.5 h-2.5" />
           Antes / Depois
        </div>
        
        {/* 修复：移动端减小了圆角和白边宽度，防止溢出 */}
        <div className="rounded-[20px] md:rounded-[32px] overflow-hidden shadow-2xl border-[4px] md:border-[6px] border-white ring-1 ring-slate-100 bg-white transition-all duration-500 group-hover:scale-[1.01]">
          <BeforeAfterSlider />
        </div>
      </div>
    </div>

  </div>
</section>

        {/* --- SECTION 2: HOW TO (SEO 步骤) --- */}
        <section id="how-to" className="py-24 bg-white border-y border-slate-100">
          <div className="max-w-7xl mx-auto px-6">
            <h2 className="text-3xl md:text-4xl font-black text-center text-slate-900 mb-16 tracking-tight uppercase italic">
              Como remover marca d&apos;água de foto <span className="text-blue-600">passo a passo</span>
            </h2>
            <div className="grid md:grid-cols-3 gap-8">
              {[
                { title: "Upload", desc: "Selecione a imagem que deseja limpar do seu dispositivo ou simplesmente arraste para a área branca acima." },
                { title: "Processamento", desc: "Nossa inteligência artificial detecta automaticamente a marca d'água e reconstrói as texturas originais." },
                { title: "Download", desc: "Verifique o resultado em alta resolução e baixe sua foto limpa sem perda de DPI ou custos ocultos." },
              ].map((item, idx) => (
                <figure key={idx} className="relative p-10 bg-[#f8fafc] rounded-[48px] border border-slate-100 hover:bg-blue-50/30 transition-colors group">
                  <span className="text-7xl font-black text-blue-600/5 absolute top-6 right-8 group-hover:text-blue-600/10 transition-colors italic">{idx + 1}</span>
                  <figcaption className="relative z-10">
                    <h3 className="text-xl font-black text-slate-900 mb-4 uppercase tracking-tighter">
                      {item.title}
                    </h3>
                    <p className="text-slate-500 leading-relaxed font-medium text-sm">{item.desc}</p>
                  </figcaption>
                </figure>
              ))}
            </div>
            <p className="text-center mt-12 text-slate-400 font-medium text-sm italic">
              Precisa de ajuda detalhada? Veja nosso guia de <Link href="/como-remover-marca-dagua-de-foto" className="text-blue-600 font-bold hover:underline">como tirar a marca d&apos;água de uma foto</Link> profissionalmente.
            </p>
          </div>
        </section>

        {/* --- SECTION 3: WHY US (SEO 提示卡片) --- */}
        <section id="why-us" className="max-w-7xl mx-auto px-6 py-32">
          <article className="grid lg:grid-cols-3 gap-16 items-start">
            <div className="space-y-6">
              <h2 className="text-4xl font-black text-slate-900 leading-tight uppercase italic tracking-tighter">
                Dicas profissionais <br />
                <span className="text-blue-600">sem perder a <br /> qualidade</span>
              </h2>
              <p className="text-slate-500 font-medium leading-relaxed italic">
                Utilizamos redes neurais de última geração para garantir que a remoção de logos e carimbos seja invisível até para profissionais.
              </p>
            </div>
            
            <div className="lg:col-span-2 grid sm:grid-cols-2 gap-6">
              {[
                { icon: <ShieldCheck className="w-6 h-6 text-emerald-500" />, title: "Privacidade LGPD", desc: "Suas fotos são deletadas automaticamente após 24 horas. 100% seguro e criptografado." },
                { icon: <Zap className="w-6 h-6 text-blue-500" />, title: "IA de Ponta", desc: "Utilizamos inpainting neural para reconstruir os pixels ocultos com perfeição tátil." },
                { icon: <Star className="w-6 h-6 text-amber-400" />, title: "Grátis e Ilimitado", desc: "Processe quantas imagens precisar. Créditos diários disponíveis para todos os brasileiros." },
                { icon: <Check className="w-6 h-6 text-blue-500" />, title: "Fidelidade 4K", desc: "Diferente de outros, mantemos o DPI original para que sua foto não fique pixelada." },
              ].map((feature, i) => (
                <div key={i} className="p-8 bg-white rounded-[32px] border border-slate-100 shadow-sm space-y-4">
                  <div className="w-12 h-12 bg-slate-50 rounded-2xl flex items-center justify-center">{feature.icon}</div>
                  <h3 className="text-lg font-black text-slate-900 uppercase tracking-tight">{feature.title}</h3>
                  <p className="text-slate-500 text-xs leading-relaxed font-medium">{feature.desc}</p>
                </div>
              ))}
            </div>
          </article>
        </section>

        {/* --- SECTION 4: COMPARISON (SEO 对比表) --- */}
        <section id="comparison" className="max-w-7xl mx-auto px-6 mb-32">
          <div className="bg-[#0f172a] rounded-[56px] p-8 md:p-16 overflow-hidden relative shadow-2xl">
            <div className="absolute top-0 right-0 w-80 h-80 bg-blue-600/10 rounded-full blur-[120px] -mr-40 -mt-40" />
            <h2 className="text-2xl md:text-3xl font-black text-white text-center mb-12 uppercase italic tracking-widest relative z-10">
              Nossa IA vs. Métodos Tradicionais
            </h2>
            <div className="overflow-x-auto relative z-10 no-scrollbar">
              <table className="w-full text-left border-collapse min-w-[650px]">
                <thead>
                  <tr className="text-slate-500 text-[10px] uppercase font-black tracking-[0.3em] border-b border-slate-800">
                    <th className="py-8 px-6">Recurso</th>
                    <th className="py-8 px-6 text-blue-400 bg-blue-500/5 font-black">RemoverMarca (IA)</th>
                    <th className="py-8 px-6">Photoshop (Manual)</th>
                    <th className="py-8 px-6">Apps Mobile</th>
                  </tr>
                </thead>
                <tbody className="text-white text-sm font-bold">
                  <tr className="border-b border-slate-800/50">
                    <td className="py-8 px-6 text-slate-500 uppercase text-[11px]">Tempo de Execução</td>
                    <td className="py-8 px-6 text-blue-400 font-black italic">&lt; 5 segundos</td>
                    <td className="py-8 px-6 text-slate-400">10-20 minutos</td>
                    <td className="py-8 px-6 text-slate-400">1-2 minutos</td>
                  </tr>
                  <tr className="border-b border-slate-800/50">
                    <td className="py-8 px-6 text-slate-500 uppercase text-[11px]">Dificuldade</td>
                    <td className="py-8 px-6 text-blue-400 font-black italic">Nula (Automático)</td>
                    <td className="py-8 px-6 text-slate-400">Alta (Requer curso)</td>
                    <td className="py-8 px-6 text-slate-400">Média</td>
                  </tr>
                  <tr>
                    <td className="py-8 px-6 text-slate-500 uppercase text-[11px]">Preservação de Textura</td>
                    <td className="py-8 px-6 text-blue-400 font-black italic uppercase">Excelente</td>
                    <td className="py-8 px-6 text-slate-400">Perfeita</td>
                    <td className="py-8 px-6 text-slate-400">Baixa / Média</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        </section>

        {/* --- SECTION 5: FAQ (SEO 问答) --- */}
        <section id="faq" className="max-w-4xl mx-auto px-6">
          <div className="flex flex-col items-center mb-16 space-y-4 text-center">
             <HelpCircle className="w-12 h-12 text-blue-600 opacity-20" />
             <h2 className="text-4xl font-black text-slate-900 tracking-tighter uppercase italic">Perguntas Frequentes</h2>
          </div>
          <div className="space-y-4">
            {[
              { q: "É realmente gratuito para tirar marca d'água?", a: "Sim, o RemoverMarca.com oferece uma versão gratuita funcional com créditos diários para todos os brasileiros. Você pode limpar suas fotos profissionais sem pagar nada." },
              { q: "O site funciona para remover logo de vídeo?", a: "Atualmente focamos 100% na perfeição de imagens estáticas (JPG, PNG, WebP). Para vídeos, consulte nossa página de [serviços B2B](/contato)." },
              { q: "Minhas fotos estão seguras?", a: "Totalmente. Seguimos a LGPD. Suas fotos são processadas via conexão SSL criptografada e excluídas permanentemente dos nossos servidores logo após o download." },
            ].map((faq, i) => (
              <details key={i} className="group bg-white rounded-[32px] border border-slate-100 shadow-sm overflow-hidden transition-all hover:border-blue-100">
                <summary className="flex items-center justify-between p-7 cursor-pointer list-none font-black text-slate-800 uppercase text-xs tracking-widest transition-colors group-hover:text-blue-600">
                  <span className="pr-4">{faq.q}</span>
                  <span className="text-blue-600 text-xl font-black transition-transform group-open:rotate-45">+</span>
                </summary>
                <div className="px-7 pb-8 text-slate-500 font-medium leading-relaxed border-t border-slate-50 pt-6 text-sm italic">
                  {faq.a}
                </div>
              </details>
            ))}
          </div>
        </section>
      </main> 
    </div>
  )
}