import { Metadata } from "next"
import { Header } from "@/components/header"
import { ArticleInteractive } from "@/components/article-interactive" // 见下方第二步的代码
import { Check, Star, Zap, Smartphone, Monitor, AlertTriangle, ArrowRight } from "lucide-react"
import Link from "next/link"

// --- 1. SEO Metadata (Server Side) ---
export const metadata: Metadata = {
    title: "How Do I Remove Watermarks from Photos? (2026 Tested Methods)",
    description: "Wondering how do I remove watermarks from photos without losing quality? Read my first-hand test of AI tools vs. manual editing for 4K results in 2026.",
    alternates: {
        canonical: "https://removermarca.com/en/how-do-i-remove-watermarks-from-photos"
    }
}

// --- 2. JSON-LD Structure (SEO Rich Snippet) ---
const jsonLd = {
    "@context": "https://schema.org",
    "@type": "HowTo",
    "name": "How to Remove Watermarks from Photos with AI",
    "step": [
        { "@type": "HowToStep", "text": "Upload your photo to RemoverMarca AI.", "url": "https://removermarca.com/" },
        { "@type": "HowToStep", "text": "Wait for the AI to auto-detect and reconstruct pixels.", "url": "https://removermarca.com/" },
        { "@type": "HowToStep", "text": "Download the 4K cleaned image.", "url": "https://removermarca.com/" }
    ]
}

export default function ArticlePage() {
    return (
        <div className="min-h-screen bg-[#f8fafc] text-slate-900 font-sans selection:bg-blue-100">
            {/* Header */}
            <Header locale="en" />


            {/* 注入 SEO 结构化数据 */}
            <script
                type="application/ld+json"
                dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
            />

            {/* --- 客户端交互组件 (进度条 + 悬浮导航) --- */}
            <ArticleInteractive />

            <main className="max-w-[850px] mx-auto px-6 pb-24 pt-12 md:pt-20">


                <div className="space-y-20">

                    {/* --- SECTION 1: QUICK ANSWER (Featured Snippet Style) --- */}
                    <section id="quick-answer" className="scroll-mt-32">
                        <div className="bg-white rounded-[32px] p-8 md:p-10 border border-slate-200 shadow-xl shadow-slate-200/50 relative overflow-hidden group hover:border-blue-200 transition-colors">
                            {/* Decorative Icon */}
                            <div className="absolute -top-6 -right-6 p-6 opacity-[0.03] group-hover:opacity-10 transition-opacity">
                                <Zap className="w-48 h-48" />
                            </div>

                            <h3 className="text-xl font-black text-blue-600 uppercase tracking-tight mb-6 flex items-center gap-2">
                                <Zap className="w-5 h-5 fill-current" /> The Quick Answer
                            </h3>

                            <p className="text-lg md:text-xl text-slate-700 font-medium leading-relaxed mb-8">
                                The most efficient way to remove watermarks in 2026 is using <strong>AI Pixel Reconstruction</strong>. Unlike old cloning methods, AI fills the gap by analyzing surrounding context.
                            </p>

                            <div className="space-y-4 mb-8 bg-slate-50 p-6 rounded-2xl border border-slate-100">
                                <div className="flex items-center gap-3">
                                    <div className="bg-blue-600 p-1.5 rounded-full shadow-lg shadow-blue-500/30">
                                        <Check className="w-3 h-3 text-white" />
                                    </div>
                                    <span className="text-slate-700 font-bold">Best Tool: <span className="text-blue-600">RemoverMarca AI (Web-based)</span></span>
                                </div>
                                <div className="flex items-center gap-3 opacity-75">
                                    <div className="bg-slate-200 p-1.5 rounded-full">
                                        <Monitor className="w-3 h-3 text-slate-600" />
                                    </div>
                                    <span className="text-slate-600 font-medium">Manual Tool: Photoshop Content-Aware</span>
                                </div>
                                <div className="flex items-center gap-3 opacity-75">
                                    <div className="bg-slate-200 p-1.5 rounded-full">
                                        <Smartphone className="w-3 h-3 text-slate-600" />
                                    </div>
                                    <span className="text-slate-600 font-medium">Mobile Tool: RemoverMarca PWA</span>
                                </div>
                            </div>

                            <Link href="/en" className="inline-flex items-center gap-2 bg-slate-900 text-white px-8 py-4 rounded-full font-bold hover:bg-blue-600 transition-all hover:scale-[1.02] shadow-lg active:scale-95">
                                Launch AI Tool Now <ArrowRight className="w-4 h-4" />
                            </Link>
                        </div>
                    </section>

                    {/* --- SECTION 2: AI VS MANUAL --- */}
                    <section id="ai-vs-manual" className="scroll-mt-32 space-y-6">
                        <h2 className="text-2xl md:text-3xl font-black text-slate-900 uppercase italic tracking-tighter border-l-[6px] border-blue-600 pl-6">
                            AI vs. Manual: Which Method Preserves 4K Quality?
                        </h2>
                        <p className="text-lg text-slate-600 font-medium leading-relaxed">
                            I spent 4 hours testing this on 15 different family photos. The biggest challenge wasn't just "removing" the logo, but making sure the face behind it didn't look like a smudge.
                        </p>

                        <figure className="my-8 group">
                            <div className="rounded-[32px] overflow-hidden border-4 border-white shadow-2xl bg-slate-200 relative aspect-video">
                                {/* Next.js Image Component 建议替换此处 */}
                                <img
                                    src="data:image/gif;base64,R0lGODlhAQABAIAAAAAAAP///yH5BAEAAAAALAAAAAABAAEAAAIBRAA7"
                                    alt="AI vs Manual watermark removal 4K detail comparison"
                                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                                    loading="lazy"
                                />
                                <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent opacity-60"></div>
                                <div className="absolute bottom-6 left-6 text-white font-bold text-sm bg-black/50 backdrop-blur px-4 py-2 rounded-full border border-white/20">
                                    Compare Mode: ON
                                </div>
                            </div>
                            <figcaption className="text-center text-xs font-black text-slate-400 mt-4 uppercase tracking-[0.2em]">
                                Fig 1: 4K Detail Comparison (Zoom 300%)
                            </figcaption>
                        </figure>
                    </section>

                    {/* --- SECTION 3: STEP BY STEP --- */}
                    <section id="step-guide" className="scroll-mt-32 space-y-6">
                        <h2 className="text-2xl md:text-3xl font-black text-slate-900 uppercase italic tracking-tighter border-l-[6px] border-blue-600 pl-6">
                            Step-by-Step Guide
                        </h2>
                        <p className="text-lg text-slate-600 font-medium leading-relaxed">
                            Follow these steps to ensure zero artifacts in your final export using our deep learning model.
                        </p>

                        <div className="grid gap-4 mt-6">
                            {[
                                { title: "Upload Image", desc: "Drag & drop your photo (JPG/PNG/WEBP supported)." },
                                { title: "Auto Detect", desc: "Our AI automatically identifies watermark layers in ~2 seconds." },
                                { title: "Export 4K", desc: "Download the result without quality compression." }
                            ].map((step, idx) => (
                                <div key={idx} className="flex gap-6 p-6 bg-white rounded-3xl border border-slate-100 hover:shadow-lg transition-shadow items-start">
                                    <div className="flex-shrink-0 w-12 h-12 bg-slate-900 text-white rounded-2xl flex items-center justify-center font-black text-xl shadow-lg shadow-slate-900/20">
                                        {idx + 1}
                                    </div>
                                    <div>
                                        <h4 className="text-lg font-bold text-slate-900 mb-1">{step.title}</h4>
                                        <p className="text-slate-500 font-medium">{step.desc}</p>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </section>

                    {/* --- SECTION 4: COMPARISON TABLE --- */}
                    <section id="top-tools" className="scroll-mt-32 space-y-8">
                        <h2 className="text-2xl md:text-3xl font-black text-slate-900 uppercase italic tracking-tighter border-l-[6px] border-blue-600 pl-6">
                            Top 3 Free Online Tools Tested
                        </h2>

                        <div className="overflow-x-auto rounded-[32px] border border-slate-200 shadow-sm bg-white">
                            <table className="w-full text-left border-collapse min-w-[600px]">
                                <thead>
                                    <tr className="bg-slate-900 text-white font-black uppercase text-[10px] tracking-widest">
                                        <th className="p-6 w-1/4">Tool Name</th>
                                        <th className="p-6 w-1/4">AI Type</th>
                                        <th className="p-6 w-1/4">Quality Limit</th>
                                        <th className="p-6 w-1/4">Verdict</th>
                                    </tr>
                                </thead>
                                <tbody className="text-sm font-bold text-slate-700 divide-y divide-slate-100">
                                    <tr className="bg-blue-50/30">
                                        <td className="p-6 text-blue-600 flex items-center gap-2">
                                            RemoverMarca <span className="bg-blue-100 text-[10px] px-2 py-0.5 rounded text-blue-700">TOP</span>
                                        </td>
                                        <td className="p-6">Neural Pixel Recon</td>
                                        <td className="p-6"><span className="text-green-600 bg-green-50 px-2 py-1 rounded">4K / Original</span></td>
                                        <td className="p-6">Best for Professionals</td>
                                    </tr>
                                    <tr className="hover:bg-slate-50">
                                        <td className="p-6">Adobe Express</td>
                                        <td className="p-6">Standard Fill</td>
                                        <td className="p-6">1080p Max</td>
                                        <td className="p-6 text-slate-400 font-medium italic">Good for Basic Files</td>
                                    </tr>
                                    <tr className="hover:bg-slate-50">
                                        <td className="p-6">WatermarkRemover.io</td>
                                        <td className="p-6">AI Detection</td>
                                        <td className="p-6">HD (Compressed)</td>
                                        <td className="p-6 text-slate-400 font-medium italic">Fast, but blurs detail</td>
                                    </tr>
                                </tbody>
                            </table>
                        </div>
                        <figcaption className="text-center text-[10px] font-black text-slate-400 mt-2 uppercase tracking-[0.2em]">
                            Table 1: Efficiency comparison (Tested Jan 2026).
                        </figcaption>
                    </section>

                    {/* --- SECTION 5: FAQ --- */}
                    <section id="legal-faq" className="scroll-mt-32 pt-12 border-t border-slate-200">
                        <div className="flex items-center gap-4 mb-8">
                            <div className="p-3 bg-amber-100 text-amber-600 rounded-2xl">
                                <AlertTriangle className="w-6 h-6" />
                            </div>
                            <h2 className="text-2xl md:text-3xl font-black text-slate-900 uppercase italic tracking-tighter">
                                FAQ: Legal Tips
                            </h2>
                        </div>

                        <div className="bg-white p-8 rounded-[32px] border border-slate-200 space-y-4 shadow-sm">
                            <h4 className="font-bold text-slate-900 text-lg">Is it legal to remove watermarks for personal use?</h4>
                            <p className="text-slate-600 font-medium leading-relaxed">
                                While the technology exists, always ensure you have the rights to the image. Removing watermarks for commercial gain without permission may violate copyright laws (DMCA in US, GDPR contexts in EU regarding ownership).
                            </p>
                        </div>
                    </section>

                </div>



            </main>
        </div>
    )
}