import type { Metadata } from "next"
import { Header } from "@/components/header"
import Link from "next/link"
import {
    Search,
    HelpCircle,
    BookOpen,
    ShieldCheck,
    Zap,
    MessageSquare,
    ArrowRight,
    ChevronRight,
    Lock,
    Cpu
} from "lucide-react"

// --- 1. SEO Metadata (标题与描述) ---
export const metadata: Metadata = {
    title: "Como Tirar Marca d'Água de Foto: Central de Ajuda & FAQ 2026",
    description: "Tire todas as suas dúvidas sobre como remover marca d'água de foto grátis e online. Guia técnico, segurança de dados LGPD e tutorial completo em 4K.",
    alternates: {
        canonical: "https://removermarca.com/como-tirar-marca-dagua",
    },
}

export default function FAQPage() {
    // JSON-LD 结构化数据 (有利于 Google 展示搜索列表)
    const jsonLd = {
        "@context": "https://schema.org",
        "@type": "FAQPage",
        "mainEntity": [
            {
                "@type": "Question",
                "name": "Como tirar a marca d'água de uma foto online grátis?",
                "acceptedAnswer": {
                    "@type": "Answer",
                    "text": "Para tirar a marca d'água de fotos online gratis, acesse o RemoverMarca.com, carregue sua imagem, pinte a área do logo e clique em processar. A IA reconstruirá o fundo instantaneamente."
                }
            },
            {
                "@type": "Question",
                "name": "É seguro usar o removedor de marca da agua online?",
                "acceptedAnswer": {
                    "@type": "Answer",
                    "text": "Sim, nossa plataforma segue a LGPD. As fotos são processadas via SSL e deletadas automaticamente após 1 hora de inatividade."
                }
            }
        ]
    };

    return (
        <div className="min-h-screen bg-[#fcfdfe] text-slate-900 font-sans">
            <script type="application/ld-json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
            <Header />
            <main className="max-w-225 mx-auto px-4 pt-24 pb-20">


                {/* 1. Q&A 头部 - 知识库风格 */}
                <header className="mb-12 text-center sm:text-left animate-in fade-in slide-in-from-top-4 duration-700">
                    <div className="flex items-center justify-center sm:justify-start gap-2 text-blue-600 font-black uppercase text-[10px] tracking-[0.3em] mb-4">
                        <HelpCircle size={14} /> Suporte Técnico & FAQ
                    </div>
                    <h1 className="text-3xl md:text-5xl font-black text-slate-900 tracking-tighter mb-8 uppercase italic leading-tight">
                        Como tirar <span className="text-blue-600">marca d&apos;água</span>: <br /> Guia de Respostas Rápidas
                    </h1>
                </header>

                {/* 2. 快速导航锚点 */}
                <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-20">
                    {[
                        { name: "Tutorial", icon: <BookOpen size={18} />, href: "#tutorial", color: "text-blue-600" },
                        { name: "Grátis", icon: <Zap size={18} />, href: "#gratis", color: "text-amber-500" },
                        { name: "Segurança", icon: <ShieldCheck size={18} />, href: "#seguranca", color: "text-emerald-500" },
                        { name: "Técnico", icon: <MessageSquare size={18} />, href: "#tecnico", color: "text-purple-500" },
                    ].map(cat => (
                        <Link key={cat.name} href={cat.href} className="flex flex-col items-center gap-3 p-6 bg-white border border-slate-100 rounded-4xl shadow-sm hover:shadow-md hover:-translate-y-1 transition-all group">
                            <div className={`${cat.color} group-hover:scale-110 transition-transform`}>{cat.icon}</div>
                            <span className="font-black text-[10px] uppercase tracking-widest text-slate-400 group-hover:text-slate-900">{cat.name}</span>
                        </Link>
                    ))}
                </div>

                {/* 3. 核心内容区块 */}

                {/* --- CATEGORIA: TUTORIAL --- */}
                <section id="tutorial" className="mb-20 scroll-mt-24">
                    <h2 className="flex items-center gap-2 text-xl font-black uppercase tracking-tight text-slate-400 mb-8 italic">
                        <div className="w-2 h-2 bg-blue-600 rounded-full animate-pulse" /> Tutorial de Uso
                    </h2>
                    <div className="space-y-4 font-bold">
                        <details className="group bg-white border border-slate-200 rounded-4xl overflow-hidden" open>
                            <summary className="flex items-center justify-between p-6 cursor-pointer list-none text-slate-800 uppercase text-xs tracking-widest hover:text-blue-600">
                                <span>Como remover marca d&apos;água de foto passo a passo?</span>
                                <ChevronRight className="w-5 h-5 text-blue-600 group-open:rotate-90 transition-transform" />
                            </summary>
                            <div className="px-8 pb-8 pt-2 text-slate-600 text-sm leading-relaxed border-t border-slate-50 italic">
                                <p className="mt-4">Para <strong>remover marca d&apos;água de foto</strong> profissionalmente: 1. Suba a imagem no site; 2. Marque o objeto indesejado com o pincel; 3. Deixe que nossa IA processe a reconstrução neural.</p>
                                <Link href="/" className="mt-6 inline-flex items-center gap-2 text-blue-600 font-black uppercase text-[10px] tracking-widest underline underline-offset-8">Iniciar processo agora <ArrowRight size={14} /></Link>
                            </div>
                        </details>
                    </div>
                </section>

                {/* --- CATEGORIA: SEGURANÇA (新增内容) --- */}
                <section id="seguranca" className="mb-20 scroll-mt-24">
                    <h2 className="flex items-center gap-2 text-xl font-black uppercase tracking-tight text-slate-400 mb-8 italic">
                        <div className="w-2 h-2 bg-emerald-500 rounded-full" /> Privacidade & Dados
                    </h2>
                    <div className="space-y-4">
                        <div className="p-8 bg-emerald-50 border border-emerald-100 rounded-[40px] shadow-sm">
                            <h3 className="flex items-center gap-2 font-black text-emerald-900 uppercase text-xs tracking-widest mb-4">
                                <Lock size={16} /> É seguro usar o Removedor Marca d&apos;Água?
                            </h3>
                            <p className="text-emerald-800/80 text-sm font-medium leading-relaxed mb-4">
                                Sim. Nossa infraestrutura brasileira é 100% compatível com a <strong>LGPD (Lei Geral de Proteção de Dados)</strong>.
                            </p>
                            <ul className="text-[11px] font-bold text-emerald-700/60 uppercase space-y-2">
                                <li className="flex items-center gap-2">• Criptografia de Ponta-a-Ponta (SSL)</li>
                                <li className="flex items-center gap-2">• Deleção automática de imagens em 1 hora</li>
                                <li className="flex items-center gap-2">• Sem armazenamento de dados biométricos ou pessoais</li>
                            </ul>
                        </div>
                    </div>
                </section>

                {/* --- CATEGORIA: TÉCNICO (新增内容) --- */}
                <section id="tecnico" className="mb-20 scroll-mt-24">
                    <h2 className="flex items-center gap-2 text-xl font-black uppercase tracking-tight text-slate-400 mb-8 italic">
                        <div className="w-2 h-2 bg-purple-500 rounded-full" /> Especificações Técnicas
                    </h2>
                    <div className="grid md:grid-cols-2 gap-4">
                        <div className="p-8 bg-white border border-slate-200 rounded-[40px] group hover:border-purple-200 transition-all">
                            <Cpu className="text-purple-500 mb-4 group-hover:scale-110 transition-transform" />
                            <h3 className="font-black text-slate-900 uppercase text-xs tracking-widest mb-3">Motor IA Core-V4.2</h3>
                            <p className="text-slate-500 text-sm font-medium leading-relaxed italic">
                                Utilizamos algoritmos de <strong>Inpainting Neural</strong> que geram novos pixels baseados no contexto, garantindo que o <strong>removedor de marca da agua</strong> não borre a textura original.
                            </p>
                        </div>
                        <div className="p-8 bg-white border border-slate-200 rounded-[40px] group hover:border-purple-200 transition-all">
                            <ShieldCheck className="text-purple-500 mb-4 group-hover:scale-110 transition-transform" />
                            <h3 className="font-black text-slate-900 uppercase text-xs tracking-widest mb-3">Resolução 4K Ultra</h3>
                            <p className="text-slate-500 text-sm font-medium leading-relaxed italic">
                                Preservamos o DPI e os metadados do arquivo. Ao <strong>tirar marca d&apos;água online gratis</strong> aqui, você obtém uma saída nítida para impressões comerciais.
                            </p>
                        </div>
                    </div>
                </section>

                {/* 4. 底部引流区域 */}
                <div className="mt-24 p-12 bg-slate-900 text-white rounded-[60px] text-center relative overflow-hidden shadow-2xl">
                    <div className="absolute top-0 right-0 w-64 h-64 bg-blue-600/10 rounded-full blur-[100px]" />
                    <h2 className="text-2xl font-black uppercase italic tracking-tighter mb-4">Pronto para limpar suas imagens?</h2>
                    <p className="text-slate-400 text-sm font-medium mb-8">Comece agora gratuitamente com a tecnologia líder do Brasil.</p>
                    <Link href="/" className="bg-blue-600 text-white px-12 py-5 rounded-2xl font-black text-sm uppercase tracking-[0.2em] shadow-xl shadow-blue-900/50 hover:bg-blue-500 transition-all active:scale-95 inline-block">
                        Acessar Ferramenta
                    </Link>
                </div>

            </main>
        </div>
    )
}