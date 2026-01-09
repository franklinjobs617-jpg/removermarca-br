"use client"

import { Header } from "@/components/header"
import { UploadArea } from "@/components/upload-area"
import { BeforeAfterSlider } from "@/components/before-after-slider"
import { SampleImages } from "@/components/sample-images"
import { Check, Zap, ShieldCheck, Star, ArrowRight, HelpCircle } from "lucide-react"
import Link from "next/link"

export default function Home() {
  return (
    <div className="min-h-screen bg-[#f8fafc]">
      <Header />

      <main className="pt-24 pb-20">
        {/* 1. Hero Section - Foco em Conversão */}
        <section className="max-w-7xl mx-auto px-6 grid lg:grid-cols-2 gap-16 items-center mb-24">
          <div className="space-y-8">
            <div className="inline-flex items-center gap-2 px-3 py-1 bg-blue-50 border border-blue-100 rounded-full">
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-blue-400 opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-blue-500"></span>
              </span>
              <span className="text-[10px] font-black text-blue-600 uppercase tracking-widest">Tecnologia IA 2026</span>
            </div>
            <h1 className="text-5xl md:text-7xl font-black text-slate-900 leading-[1.1] tracking-tighter">
              Limpeza extrema em <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-cyan-500">
                4K Ultra.
              </span>
            </h1>
            <p className="text-xl text-slate-500 leading-relaxed max-w-lg font-medium">
              O removedor de IA mais limpo do Brasil. Remova logos, textos e imperfeições em segundos com reconstrução neural.
            </p>
            
            <div className="flex flex-wrap gap-6 pt-4 text-slate-400 font-bold text-xs uppercase tracking-widest">
              <div className="flex items-center gap-2"><Star className="w-4 h-4 text-amber-400 fill-amber-400" /> 4.9/5 Avaliações</div>
              <div className="flex items-center gap-2"><Zap className="w-4 h-4 text-blue-500 fill-blue-500" /> Processamento Instantâneo</div>
            </div>
          </div>

          <div className="relative group">
            <div className="absolute -inset-4 bg-gradient-to-r from-blue-100 to-cyan-100 rounded-[40px] blur-2xl opacity-50 group-hover:opacity-100 transition duration-1000"></div>
            <div className="relative bg-white border border-slate-100 rounded-[32px] p-2 shadow-2xl overflow-hidden">
              <UploadArea />
              <div className="p-4 bg-slate-50/50">
                <SampleImages />
              </div>
            </div>
          </div>
        </section>

        {/* 2. Comparison Slider Section (SEO 1) */}
        <section className="max-w-5xl mx-auto px-6 mb-32">
          <div className="text-center mb-10">
            <h2 className="text-sm font-black text-blue-600 uppercase tracking-[0.3em] mb-4">Qualidade Visual</h2>
            <p className="text-3xl font-black text-slate-900 mb-2">Visualizar Efeito Antes/Depois</p>
            <p className="text-slate-500 italic font-medium">Remoção inteligente de logos e carimbos de data em segundos.</p>
          </div>
          <div className="rounded-[32px] overflow-hidden shadow-2xl border-8 border-white">
            <BeforeAfterSlider />
          </div>
        </section>

        {/* 3. How-To Step Section (SEO 2) */}
        <section id="how-to" className="bg-white py-24 border-y border-slate-100">
          <div className="max-w-7xl mx-auto px-6">
            <h2 className="text-3xl md:text-4xl font-black text-center text-slate-900 mb-16">
              Como remover marca d'água de foto <span className="text-blue-600 italic">passo a passo</span>
            </h2>
            <div className="grid md:grid-cols-3 gap-8">
              {[
                { step: "01", title: "Upload", desc: "Selecione a imagem que deseja limpar do seu dispositivo ou arraste para a área de upload." },
                { step: "02", title: "IA Processa", desc: "Nossa inteligência artificial detecta automaticamente a marca d'água e reconstrói o fundo." },
                { step: "03", title: "Download", desc: "Verifique o resultado em alta resolução e baixe sua foto limpa sem custos ocultos." },
              ].map((item, idx) => (
                <figure key={idx} className="relative p-8 bg-[#f8fafc] rounded-[32px] border border-slate-100 hover:scale-[1.02] transition-transform">
                  <span className="text-6xl font-black text-blue-500/10 absolute top-4 right-6 italic">{item.step}</span>
                  <figcaption className="relative z-10">
                    <h3 className="text-xl font-black text-slate-900 mb-4 tracking-tight">{item.title}</h3>
                    <p className="text-slate-500 leading-relaxed font-medium">{item.desc}</p>
                  </figcaption>
                </figure>
              ))}
            </div>
            <div className="mt-12 text-center">
              <Link href="/como-remover-foto" className="inline-flex items-center gap-2 text-blue-600 font-black hover:gap-4 transition-all uppercase text-sm tracking-widest">
                Ver guia completo de remoção <ArrowRight className="w-4 h-4" />
              </Link>
            </div>
          </div>
        </section>

        {/* 4. Why Us Section (SEO 3) */}
        <section id="why-us" className="max-w-7xl mx-auto px-6 py-32">
          <article className="grid lg:grid-cols-3 gap-12">
            <div className="lg:col-span-1">
              <h2 className="text-4xl font-black text-slate-900 leading-tight mb-6">
                Dicas profissionais para apagar marca d'água <br />
                <span className="text-blue-600">sem perder qualidade</span>
              </h2>
              <div className="h-1.5 w-20 bg-blue-600 rounded-full" />
            </div>
            <div className="lg:col-span-2 grid sm:grid-cols-2 gap-8">
              {[
                { icon: <ShieldCheck className="w-6 h-6 text-green-500" />, title: "Privacidade LGPD", desc: "Suas fotos são deletadas automaticamente após 24 horas. Processamento 100% seguro e criptografado." },
                { icon: <Zap className="w-6 h-6 text-blue-500" />, title: "IA de Ponta", desc: "Utilizamos redes neurais generativas para reconstruir os pixels atrás do objeto removido com perfeição." },
                { icon: <Star className="w-6 h-6 text-amber-500" />, title: "Grátis e Ilimitado", desc: "Processe quantas imagens precisar. Oferecemos créditos diários gratuitos para todos os usuários brasileiros." },
                { icon: <Check className="w-6 h-6 text-blue-500" />, title: "Qualidade 4K", desc: "Diferente de apps simples, mantemos o DPI original para que sua foto não fique borrada ou pixelada." },
              ].map((feature, i) => (
                <div key={i} className="space-y-3 p-6 bg-white rounded-[24px] border border-slate-100 shadow-sm">
                  <div className="w-12 h-12 bg-slate-50 rounded-2xl flex items-center justify-center mb-4">{feature.icon}</div>
                  <h3 className="text-lg font-black text-slate-900">{feature.title}</h3>
                  <p className="text-slate-500 text-sm leading-relaxed font-medium">{feature.desc}</p>
                </div>
              ))}
            </div>
          </article>
        </section>

        {/* 5. Comparison Table Section (SEO 4) */}
        <section id="comparison" className="max-w-7xl mx-auto px-6 mb-32">
          <div className="bg-[#1e293b] rounded-[40px] p-8 md:p-16 overflow-hidden relative shadow-2xl">
            <div className="absolute top-0 right-0 w-64 h-64 bg-blue-600/10 rounded-full blur-[100px] -mr-32 -mt-32" />
            <h2 className="text-3xl font-black text-white text-center mb-12 relative z-10 italic">
              Comparativo: Nossa IA vs. Métodos Tradicionais
            </h2>
            <div className="overflow-x-auto relative z-10 no-scrollbar">
              <table className="w-full text-left border-collapse min-w-[600px]">
                <thead>
                  <tr className="border-b border-slate-700 text-slate-400 text-xs uppercase tracking-widest">
                    <th className="py-6 px-4">Recurso</th>
                    <th className="py-6 px-4 text-blue-400 font-black">RemoverMarca (IA)</th>
                    <th className="py-6 px-4">Photoshop (Manual)</th>
                    <th className="py-6 px-4">Apps Mobile</th>
                  </tr>
                </thead>
                <tbody className="text-white font-medium">
                  <tr className="border-b border-slate-800">
                    <td className="py-6 px-4 text-slate-400">Tempo de Execução</td>
                    <td className="py-6 px-4 text-blue-400 font-black">&lt; 5 segundos</td>
                    <td className="py-6 px-4">10-20 minutos</td>
                    <td className="py-6 px-4">1-2 minutos</td>
                  </tr>
                  <tr className="border-b border-slate-800">
                    <td className="py-6 px-4 text-slate-400">Dificuldade</td>
                    <td className="py-6 px-4 text-blue-400 font-black">Nula (Automático)</td>
                    <td className="py-6 px-4">Alta (Requer curso)</td>
                    <td className="py-6 px-4">Média</td>
                  </tr>
                  <tr>
                    <td className="py-6 px-4 text-slate-400">Preservação de Textura</td>
                    <td className="py-6 px-4 text-blue-400 font-black">Excelente</td>
                    <td className="py-6 px-4">Perfeita</td>
                    <td className="py-6 px-4">Baixa/Média</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        </section>

        {/* 6. FAQ Section (SEO 5) */}
        <section id="faq" className="max-w-3xl mx-auto px-6">
          <div className="flex items-center justify-center gap-3 mb-12">
            <HelpCircle className="w-8 h-8 text-blue-600" />
            <h2 className="text-3xl font-black text-slate-900 tracking-tight italic">Perguntas Frequentes</h2>
          </div>
          <div className="space-y-4">
            {[
              { q: "É realmente gratuito para tirar marca d'água?", a: "Sim! O RemoverMarca.com oferece uma versão gratuita com créditos diários para todos os usuários brasileiros." },
              { q: "O site funciona para remover logo de vídeo?", a: "Atualmente focamos em imagens para garantir a máxima qualidade. Visite nossa página de [removedor de marca d'água de vídeo](/removedor-de-video) para mais detalhes." },
              { q: "Qual o limite de tamanho da imagem?", a: "Suportamos arquivos de até 15MB nos formatos JPG, PNG e WebP para processamento ultra-rápido." },
            ].map((faq, i) => (
              <details key={i} className="group bg-white rounded-[24px] border border-slate-100 shadow-sm overflow-hidden transition-all">
                <summary className="flex items-center justify-between p-6 cursor-pointer list-none font-bold text-slate-800 hover:text-blue-600 transition-colors">
                  <span className="pr-4">{faq.q}</span>
                  <Check className="w-5 h-5 text-slate-300 group-open:rotate-45 transition-transform" />
                </summary>
                <div className="px-6 pb-6 text-slate-500 font-medium leading-relaxed border-t border-slate-50 pt-4">
                  {faq.a}
                </div>
              </details>
            ))}
          </div>
        </section>
      </main>

      <footer className="bg-slate-900 text-white py-20 border-t border-slate-800">
        <div className="max-w-7xl mx-auto px-6 grid md:grid-cols-3 gap-12">
          <div className="space-y-6">
            <span className="text-2xl font-black tracking-tighter italic">RemoverMarca</span>
            <p className="text-slate-400 text-sm font-medium leading-relaxed italic">
              Líder em ferramentas de edição baseadas em inteligência artificial para o mercado brasileiro. Limpeza sem rastros em 4K.
            </p>
          </div>
          <div className="space-y-6 text-sm">
            <h4 className="font-black uppercase tracking-widest text-slate-500 text-xs">Menu SEO</h4>
            <div className="flex flex-col gap-4">
              <Link href="/como-remover-foto" className="hover:text-blue-400 transition-colors">Como Tirar Marca d'Água</Link>
              <Link href="/online-gratis" className="hover:text-blue-400 transition-colors">Removedor Online Grátis</Link>
              <Link href="/termos-de-uso" className="hover:text-blue-400 transition-colors">Termos de Uso</Link>
            </div>
          </div>
          <div className="space-y-6 text-sm">
            <h4 className="font-black uppercase tracking-widest text-slate-500 text-xs">Contato & Suporte</h4>
            <p className="text-slate-400 font-medium">Equipe brasileira disponível para parcerias B2B e suporte técnico via API.</p>
            <div className="p-4 bg-slate-800 rounded-2xl border border-slate-700 font-bold text-blue-400 text-center">
              Made with ❤️ in Brazil
            </div>
          </div>
        </div>
        <div className="mt-16 text-center text-slate-600 text-[10px] font-bold uppercase tracking-widest">
          © 2026 RemoverMarca.com — Todos os direitos reservados conforme a LGPD.
        </div>
      </footer>
    </div>
  )
}