"use client"

import { useState, useEffect } from "react"
import { useRouter } from "next/navigation"
import { Header } from "@/components/header"
import { UploadArea } from "@/components/upload-area"
import { BeforeAfterSlider } from "@/components/before-after-slider"
import { SampleImages } from "@/components/sample-images"
import {
  Check,
  Zap,
  ShieldCheck,
  Star,
  HelpCircle,
  Sparkles,
  MousePointer2,
  UploadCloud
} from "lucide-react"
import Link from "next/link"

export default function Home() {
  const [isGlobalDragging, setIsGlobalDragging] = useState(false)
  const router = useRouter()

  // --- 逻辑：处理文件并跳转 ---
  const handleFileProcess = (file: File) => {
    if (!file.type.startsWith("image/")) return
    const reader = new FileReader()
    reader.onload = (e) => {
      sessionStorage.setItem("uploadedImage", e.target?.result as string)
      router.push("/editor")
    }
    reader.readAsDataURL(file)
  }

  // --- 逻辑：全局事件监听 ---
  useEffect(() => {
    // 1. 处理 Ctrl+V 粘贴
    const handlePaste = (e: ClipboardEvent) => {
      const items = e.clipboardData?.items
      if (!items) return

      for (let i = 0; i < items.length; i++) {
        if (items[i].type.indexOf("image") !== -1) {
          const file = items[i].getAsFile()
          if (file) handleFileProcess(file)
        }
        else if (items[i].type === "text/plain") {
          items[i].getAsString((text) => {
            if (text.match(/^https?:\/\/.*\.(png|jpg|jpeg|webp|gif|bmp)/i)) {
              sessionStorage.setItem("uploadedImageUrl", text)
              router.push("/editor")
            }
          })
        }
      }
    }

    // 2. 全局拖拽逻辑
    let dragCounter = 0
    const handleDragEnter = (e: DragEvent) => {
      e.preventDefault()
      dragCounter++
      if (e.dataTransfer?.items && e.dataTransfer.items.length > 0) {
        setIsGlobalDragging(true)
      }
    }
    const handleDragLeave = (e: DragEvent) => {
      e.preventDefault()
      dragCounter--
      if (dragCounter === 0) setIsGlobalDragging(false)
    }
    const handleDrop = (e: DragEvent) => {
      e.preventDefault()
      setIsGlobalDragging(false)
      dragCounter = 0
      const file = e.dataTransfer?.files[0]
      if (file) handleFileProcess(file)
    }

    window.addEventListener("paste", handlePaste)
    window.addEventListener("dragenter", handleDragEnter)
    window.addEventListener("dragover", (e) => e.preventDefault())
    window.addEventListener("dragleave", handleDragLeave)
    window.addEventListener("drop", handleDrop)

    return () => {
      window.removeEventListener("paste", handlePaste)
      window.removeEventListener("dragenter", handleDragEnter)
      window.removeEventListener("dragleave", handleDragLeave)
      window.removeEventListener("drop", handleDrop)
    }
  }, [router])

  return (
    <div className="min-h-screen bg-gray-50 relative">
      <Header />

      {/* --- 全屏拖拽覆盖层 (修复颜色：使用高级感深色磨砂) --- */}
      {isGlobalDragging && (
        <div className="fixed inset-0 z-200 bg-slate-900/60 backdrop-blur-xl flex flex-col items-center justify-center animate-in fade-in duration-300">
          <div className="absolute top-10 left-10 w-20 h-20 border-t-[8px] border-l-[8px] border-white/40 rounded-tl-3xl"></div>
          <div className="absolute top-10 right-10 w-20 h-20 border-t-[8px] border-r-[8px] border-white/40 rounded-tr-3xl"></div>
          <div className="absolute bottom-10 left-10 w-20 h-20 border-b-[8px] border-l-[8px] border-white/40 rounded-bl-3xl"></div>
          <div className="absolute bottom-10 right-10 w-20 h-20 border-b-[8px] border-r-[8px] border-white/40 rounded-br-3xl"></div>
          <div className="text-center space-y-4">
            <div className="w-20 h-20 bg-blue-600 rounded-2xl flex items-center justify-center mx-auto shadow-2xl animate-bounce">
              <UploadCloud className="w-10 h-10 text-white" />
            </div>
            <h2 className="text-white text-4xl md:text-5xl font-black  tracking-tighter">Solte para enviar</h2>
          </div>
        </div>
      )}

      <main className="pt-12 pb-20">
        {/* --- SECTION 1: HERO --- */}
        <section className="relative pt-12 md:pt-20 pb-16 overflow-hidden bg-dot-grid">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-16 items-center">

            {/* 右侧/上传框 */}
            <div className="order-1 md:order-2 relative flex justify-center lg:justify-end animate-in fade-in slide-in-from-top-4 lg:slide-in-from-right duration-1000">
              <div className="w-full max-w-120 bg-white rounded-4xl md:rounded-[56px] p-6 md:p-12 shadow-[0_40px_80px_-20px_rgba(0,0,0,0.1)] border border-slate-50 relative z-10 flex flex-col items-center">
                <div className="space-y-5 text-center lg:text-left block md:hidden">
                  <div className="inline-flex items-center gap-2 px-3 py-1 bg-blue-50 border border-blue-100 rounded-full w-fit mx-auto lg:mx-0">
                    <Sparkles className="w-3.5 h-3.5 text-blue-600 fill-blue-600" />
                    <span className="text-[10px] font-black text-blue-700  tracking-widest">Tecnologia IA 2026</span>
                  </div>
                  <h1 className="text-4xl md:text-5xl lg:text-6xl font-black text-slate-900 leading-[1.15] tracking-tight">
                    Ferramenta de IA para <br className="hidden sm:block" />
                    <span className="text-blue-600 italic">tirar marca d&apos;água</span> <br />
                    online grátis
                  </h1>
                  <p className="text-sm md:text-lg text-slate-500 max-w-md mx-auto lg:mx-0 font-medium leading-relaxed">
                    O jeito mais rápido e profissional de <strong className="text-slate-900">remover marca d&apos;água de imagem</strong> sem perder quality ou dejar borrões.
                  </p>
                </div>
                <div className="w-full mt-4 md:mt-0">
                  <UploadArea />
                </div>
                <div className="w-full pt-6 border-t border-slate-50 text-center">
                  <p className="text-[10px] font-black text-slate-400  tracking-[0.2em] mb-4">Não tem foto? Tente estas:</p>
                  <SampleImages />
                </div>
                <div className="mt-6">
                  <p className="text-[9px] text-slate-300 text-center  font-black tracking-widest leading-relaxed">
                    Ao carregar, você concorda com nossos <Link href="/termos-de-uso" className="underline hover:text-blue-500">Termos</Link>
                  </p>
                </div>
              </div>
            </div>

            {/* 左侧/文字和对比图 */}
            <div className="order-2 md:order-1 flex flex-col space-y-8 animate-in fade-in slide-in-from-bottom-4 lg:slide-in-from-left duration-700">
              <div className="space-y-5 text-center lg:text-left hidden md:block">
                <div className="inline-flex items-center gap-2 px-3 py-1 bg-blue-50 border border-blue-100 rounded-full w-fit mx-auto lg:mx-0">
                  <Sparkles className="w-3.5 h-3.5 text-blue-600 fill-blue-600" />
                  <span className="text-[10px] font-black text-blue-700  tracking-widest">Tecnologia IA 2026</span>
                </div>
                <h1 className="text-3xl md:text-5xl font-black text-slate-900 leading-[1.15] tracking-tight">
                  Ferramenta de IA para <br className="hidden sm:block" />
                  <span className="text-blue-600 italic">tirar marca d&apos;água</span> <br />
                  online grátis
                </h1>
                <p className="text-sm md:text-md text-slate-500 max-w-md mx-auto lg:mx-0 font-medium leading-relaxed">
                  O jeito mais rápido e profissional de <strong className="text-slate-900">remover marca d&apos;água de imagem</strong> sem perder qualidade ou deixar borrões.
                </p>
              </div>

              <div className="relative group w-full max-w-lg mx-auto lg:mx-0">
                <div className="absolute -top-3 -left-2 bg-blue-600 text-white px-2 py-1 rounded-lg shadow-xl z-20 text-[9px] font-black  tracking-widest flex items-center gap-1.5">
                  <MousePointer2 className="w-2.5 h-2.5" />
                  Antes / Depois
                </div>
                <div className="rounded-[20px] md:rounded-4xl overflow-hidden shadow-2xl border-[4px] md:border-[6px] border-white ring-1 ring-slate-100 bg-white transition-all duration-500 group-hover:scale-[1.01]">
                  <BeforeAfterSlider />
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* --- SECTION 2: HOW TO --- */}
        <section id="how-to" className="py-24 bg-white border-y border-slate-100">
          <div className="max-w-7xl mx-auto px-6">
            <h2 className="text-3xl md:text-4xl font-black text-center text-slate-900 mb-16 tracking-tight  italic">
              Como remover marca d&apos;água de foto <span className="text-blue-600">passo a passo</span>
            </h2>
            <div className="grid md:grid-cols-3 gap-8">
              {[
                { title: "Upload", desc: "Selecione a imagem que deseja limpar do seu dispositivo ou simplesmente arraste para a área branca acima." },
                { title: "Processamento", desc: "Nossa inteligência artificial detecta automaticamente a marca d'água e reconstrói as texturas originais." },
                { title: "Download", desc: "Verifique o resultado em alta resolução e baixe sua foto limpa sem perda de DPI ou custos ocultos." },
              ].map((item, idx) => (
                <figure key={idx} className="relative p-10 bg-gray-50 rounded-[48px] border border-slate-100 hover:bg-blue-50/30 transition-colors group">
                  <span className="text-7xl font-black text-blue-600/5 absolute top-6 right-8 group-hover:text-blue-600/10 transition-colors italic">{idx + 1}</span>
                  <figcaption className="relative z-10">
                    <h3 className="text-xl font-black text-slate-900 mb-4  tracking-tighter">
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

        {/* --- SECTION 3: WHY US --- */}
        <section id="why-us" className="max-w-7xl mx-auto px-6 py-32">
          <article className="grid lg:grid-cols-3 gap-16 items-start">
            <div className="space-y-6">
              <h2 className="text-4xl font-black text-slate-900 leading-tight  italic tracking-tighter">
                Dicas profissionais <br />
                <span className="text-blue-600">sem perder a <br /> qualidade</span>
              </h2>
              <div className="h-1.5 w-20 bg-blue-600 rounded-full" />
            </div>
            <div className="lg:col-span-2 grid sm:grid-cols-2 gap-6">
              {[
                { icon: <ShieldCheck className="w-6 h-6 text-emerald-500" />, title: "Privacidade LGPD", desc: "Suas fotos são deletadas automaticamente após 24 horas. 100% seguro e criptografado." },
                { icon: <Zap className="w-6 h-6 text-blue-500" />, title: "IA de Ponta", desc: "Utilizamos inpainting neural para reconstruir os pixels ocultos com perfeição tátil." },
                { icon: <Star className="w-6 h-6 text-amber-400" />, title: "Grátis e Ilimitado", desc: "Processe quantas imagens precisar. Créditos diários disponíveis para todos os brasileiros." },
                { icon: <Check className="w-6 h-6 text-blue-500" />, title: "Fidelidade 4K", desc: "Diferente de outros, mantemos o DPI original para que sua foto não fique pixelada." },
              ].map((feature, i) => (
                <div key={i} className="p-8 bg-white rounded-4xl border border-slate-100 shadow-sm space-y-4">
                  <div className="w-12 h-12 bg-slate-50 rounded-2xl flex items-center justify-center">{feature.icon}</div>
                  <h3 className="text-lg font-black text-slate-900  tracking-tight">{feature.title}</h3>
                  <p className="text-slate-500 text-xs leading-relaxed font-medium">{feature.desc}</p>
                </div>
              ))}
            </div>
          </article>
        </section>

        {/* --- SECTION 4: COMPARISON (深度优化响应式对比区) --- */}
        <section id="comparison" className="max-w-7xl mx-auto px-4 md:px-6 mb-32">
          <div className="bg-gray-900 rounded-[40px] md:rounded-[56px] p-5 md:p-16 overflow-hidden relative shadow-2xl">
            {/* 背景装饰光晕 */}
            <div className="absolute top-0 right-0 w-80 h-80 bg-blue-600/10 rounded-full blur-[120px] -mr-40 -mt-40" />

            <h2 className="text-3xl md:text-4xl font-black text-center text-slate-900 my-8 tracking-tight  italic text-white">
              Nossa IA vs. <br className="md:hidden" /> Métodos Tradicionais
            </h2>

            {/* --- 1. 桌面端视图 (lg以上显示完整表格) --- */}
            <div className="hidden lg:block relative z-10">
              <table className="w-full text-left border-collapse">
                <thead>
                  <tr className="text-slate-500 text-sm font-black tracking-[0.1em] border-b border-slate-800">
                    <th className="py-8 px-6">Recurso</th>
                    <th className="py-8 px-6 text-blue-400 bg-blue-500/5 font-black">RemoverMarca (IA)</th>
                    <th className="py-8 px-6">Photoshop (Manual)</th>
                    <th className="py-8 px-6">Apps Mobile</th>
                  </tr>
                </thead>
                <tbody className="text-white text-sm font-bold">
                  <tr className="border-b border-slate-800/50">
                    <td className="py-8 px-6 text-slate-500">Tempo de Execução</td>
                    <td className="py-8 px-6 text-blue-400 font-black italic text-lg">&lt; 5 segundos</td>
                    <td className="py-8 px-6 text-slate-400">10-20 minutos</td>
                    <td className="py-8 px-6 text-slate-400">1-2 minutos</td>
                  </tr>
                  <tr className="border-b border-slate-800/50">
                    <td className="py-8 px-6 text-slate-500">Dificuldade</td>
                    <td className="py-8 px-6 text-blue-400 font-black italic text-lg">Nula (Automático)</td>
                    <td className="py-8 px-6 text-slate-400">Alta (Requer curso)</td>
                    <td className="py-8 px-6 text-slate-400">Média</td>
                  </tr>
                  <tr>
                    <td className="py-8 px-6 text-slate-500">Preservação de Textura</td>
                    <td className="py-8 px-6 text-blue-400 font-black italic text-lg  tracking-tight">Excelente</td>
                    <td className="py-8 px-6 text-slate-400">Perfeita</td>
                    <td className="py-8 px-6 text-slate-400">Baixa / Média</td>
                  </tr>
                </tbody>
              </table>
            </div>

            {/* --- 2. 移动端视图 (lg以下显示宽屏堆叠卡片) --- */}
            <div className="lg:hidden space-y-8 relative z-10">
              {[
                {
                  label: "Tempo de Execução",
                  our: "< 5 segundos",
                  ps: "10-20 min",
                  apps: "1-2 min"
                },
                {
                  label: "Dificuldade",
                  our: "Nula (Auto)",
                  ps: "Alta (Curso)",
                  apps: "Média"
                },
                {
                  label: "Preservação de Textura",
                  our: "Excelente",
                  ps: "Perfeita",
                  apps: "Baixa / Média"
                }
              ].map((item, idx) => (
                <div key={idx} className="space-y-4">
                  {/* 分类标题：字号加大，颜色更亮一点点 */}
                  <div className="flex items-center gap-3">
                    <div className="h-px flex-1 bg-slate-800"></div>
                    <h3 className="text-slate-400 text-xs font-black  tracking-[0.2em] whitespace-nowrap">{item.label}</h3>
                    <div className="h-px flex-1 bg-slate-800"></div>
                  </div>

                  {/* 对比容器 */}
                  <div className="flex flex-col gap-3">
                    {/* 我们的优势：占满宽度，极具冲击力的字号 */}
                    <div className="bg-gradient-to-r from-blue-600/20 to-blue-600/5 border border-blue-500/30 rounded-3xl p-6 shadow-xl shadow-blue-900/20">
                      <div className="flex justify-between items-start mb-2">
                        <p className="text-blue-500 text-[10px] font-black  tracking-widest">RemoverMarca (IA)</p>
                        <span className="text-[10px] bg-blue-600 text-white px-2 py-0.5 rounded-md font-bold">Vencedor</span>
                      </div>
                      <p className="text-blue-400 font-black italic text-xl tracking-tighter ">{item.our}</p>
                    </div>

                    {/* 竞品对比：并排显示，增加字号 */}
                    <div className="grid grid-cols-2 gap-3">
                      <div className="p-4 bg-slate-800/40 rounded-2xl border border-white/5">
                        <p className="text-slate-500 text-[9px] font-black  mb-1 tracking-wider">Photoshop</p>
                        <p className="text-slate-200 text-sm font-black italic">{item.ps}</p>
                      </div>
                      <div className="p-4 bg-slate-800/40 rounded-2xl border border-white/5">
                        <p className="text-slate-500 text-[9px] font-black  mb-1 tracking-wider">Apps Mobile</p>
                        <p className="text-slate-200 text-sm font-black italic">{item.apps}</p>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>

          </div>
        </section>

        {/* --- SECTION 5: FAQ --- */}
        <section id="faq" className="max-w-4xl mx-auto px-6">
          <div className="flex flex-col items-center mb-16 space-y-4 text-center">
            <HelpCircle className="w-12 h-12 text-blue-600 opacity-20" />
            <h2 className="text-4xl font-black text-slate-900 tracking-tighter  italic">Perguntas Frequentes</h2>
          </div>
          <div className="space-y-4">
            {[
              { q: "É realmente gratuito para tirar marca d'água?", a: "Sim, o RemoverMarca.com oferece uma version gratuita funcional com créditos diários para todos os brasileiros. Você pode limpar suas fotos profissionais sem pagar nada." },
              { q: "O site funciona para remover logo de vídeo?", a: "Atualmente focamos 100% na perfeição de imagens estáticas (JPG, PNG, WebP). Para vídeos, consulte nossa página de [serviços B2B](/contato)." },
              { q: "Minhas fotos estão seguras?", a: "Totalmente. Seguimos a LGPD. Suas fotos são processadas via conexão SSL criptografada e excluídas permanentemente dos nossos servidores logo após o download." },
            ].map((faq, i) => (
              <details key={i} className="group bg-white rounded-4xl border border-slate-100 shadow-sm overflow-hidden transition-all hover:border-blue-100">
                <summary className="flex items-center justify-between p-7 cursor-pointer list-none font-black text-slate-800  text-sm tracking-widest transition-colors group-hover:text-blue-600">
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