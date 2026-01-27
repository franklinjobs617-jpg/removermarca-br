import { Metadata } from "next"
import Link from "next/link"
import { ArrowRight, Cpu, BarChart3, Layers, ShieldCheck } from "lucide-react"
import { Header } from "@/components/header"
import Image from "next/image"
// 1. 配置服务端 SEO Metadata
export const metadata: Metadata = {
    title: "Remove Watermark from Photo AI: 4K Neural Reconstruction",
    description: "Professional AI tool to remove watermarks from photos without quality loss. Our 2026 Neural Engine restores pixels in 4K resolution. Try it for free.",
    alternates: {
        canonical: "https://removermarca.com/en/remove-watermark-from-photo-ai"
    },
    openGraph: {
        title: "Remove Watermark from Photo AI: 4K Neural Reconstruction",
        description: "Professional AI tool to remove watermarks from photos without quality loss.",
        type: "article",
    }
}

// 2. 配置 JSON-LD 结构化数据 (TechArticle)
const jsonLd = {
    "@context": "https://schema.org",
    "@type": "TechArticle",
    "headline": "4K Neural Reconstruction: The Future of AI Watermark Removal",
    "proficiencyLevel": "Professional",
    "description": "A deep dive into GAN-based texture synthesis for high-fidelity image restoration.",
    "author": {
        "@type": "Organization",
        "name": "RemoverMarca AI Lab"
    },
    "datePublished": "2026-01-27",
    "image": "https://removermarca.com/og-tech.jpg" // 建议添加实际图片链接
}

export default function TechPage() {
    return (
        <div className="min-h-screen bg-white text-slate-700 font-sans selection:bg-blue-100 selection:text-blue-900">
            <Header locale="en" />

            {/* 3. 注入结构化数据 (Server Side Injection) */}
            <script
                type="application/ld+json"
                dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
            />


            <main>
                <article>

                    {/* --- CONTENT AREA --- */}
                    <div className="max-w-[900px] mx-auto px-6 py-16 space-y-20 mt-12">

                        {/* Section 1: How it works */}
                        <section id="how-it-works" className="scroll-mt-24">
                            <div className="flex items-center gap-3 mb-6">
                                <Cpu className="w-6 h-6 text-blue-600" />
                                <h2 className="text-2xl md:text-3xl font-bold text-slate-900">
                                    How Does Our AI Remove Watermarks?
                                </h2>
                            </div>
                            <p className="text-lg leading-relaxed text-slate-600 mb-8">
                                Our technology shifts from simple erasing to <strong>&quot;Neural Inpainting.&quot;</strong> By utilizing a dual-path architecture, the AI analyzes both the global structure and local textures to fill the gaps left by watermarks. It doesn&apos;t just blur; it dreams up the missing pixels.
                            </p>
                            <figure className="bg-slate-50 border border-slate-200 rounded-xl p-8 text-center overflow-hidden">
                                <div className="aspect-video relative w-full rounded-lg overflow-hidden shadow-lg border border-slate-100 group">
                                    {/* 替换掉原来的 SVG */}
                                    <Image
                                        src="/neural-inpainting-watermark-removal-process.png"
                                        alt="Visualization of AI neural network analyzing and reconstructing pixels to remove watermarks without blurring"
                                        fill
                                        className="object-cover transition-transform duration-700 group-hover:scale-105"
                                        sizes="(max-width: 768px) 100vw, (max-width: 1200px) 80vw, 900px"
                                        priority
                                    />

                                    {/* 可选：添加一个半透明的科技感覆盖层，增加“正在处理”的视觉效果 */}
                                    <div className="absolute inset-0 bg-gradient-to-tr from-blue-900/10 to-transparent pointer-events-none"></div>
                                </div>
                                <figcaption className="text-sm text-slate-500 italic font-medium mt-6">
                                    Figure 1: High-fidelity pixel reconstruction flow (RemoverMarca AI v4.8).
                                </figcaption>
                            </figure>
                        </section>

                        {/* Section 2: Benchmarks Table */}
                        <section id="benchmarks" className="scroll-mt-24">
                            <div className="flex items-center gap-3 mb-6">
                                <BarChart3 className="w-6 h-6 text-blue-600" />
                                <h2 className="text-2xl md:text-3xl font-bold text-slate-900">
                                    4K Pixel Reconstruction vs. Legacy Blurring
                                </h2>
                            </div>
                            <p className="text-lg leading-relaxed text-slate-600 mb-8">
                                Unlike standard tools that use Gaussian blurs, our engine reconstructs high-frequency details. This is critical for 4K exports where even minor smudges are visible.
                            </p>

                            <div className="overflow-x-auto border border-slate-200 rounded-xl shadow-sm">
                                <table className="w-full text-left border-collapse min-w-[600px]">
                                    <thead>
                                        <tr className="bg-slate-50 text-slate-900 text-sm uppercase tracking-wide">
                                            <th className="p-4 font-bold border-b border-slate-200">Metric</th>
                                            <th className="p-4 font-bold border-b border-slate-200 text-slate-500">Traditional Content-Aware</th>
                                            <th className="p-4 font-bold border-b border-slate-200 text-blue-700 bg-blue-50/50">RemoverMarca AI (2026)</th>
                                        </tr>
                                    </thead>
                                    <tbody className="text-sm text-slate-700 divide-y divide-slate-100">
                                        <tr>
                                            <td className="p-4 font-semibold">Resolution Limit</td>
                                            <td className="p-4 text-slate-500">Limited (Blurred @ High Res)</td>
                                            <td className="p-4 font-bold text-slate-900 bg-blue-50/10">Full 4K (Ultra HD) Native</td>
                                        </tr>
                                        <tr>
                                            <td className="p-4 font-semibold">SSIM Score</td>
                                            <td className="p-4 text-slate-500">0.72 (Average)</td>
                                            <td className="p-4 font-bold text-slate-900 bg-blue-50/10">0.94 (Exceptional)</td>
                                        </tr>
                                        <tr>
                                            <td className="p-4 font-semibold">DCI-P3 Color Gamut</td>
                                            <td className="p-4 text-slate-500">Compression Loss</td>
                                            <td className="p-4 font-bold text-slate-900 bg-blue-50/10">Lossless Mapping</td>
                                        </tr>
                                    </tbody>
                                </table>
                            </div>
                        </section>

                        {/* Section 3: Formats */}
                        <section id="formats" className="scroll-mt-24">
                            <div className="flex items-center gap-3 mb-6">
                                <Layers className="w-6 h-6 text-blue-600" />
                                <h2 className="text-2xl md:text-3xl font-bold text-slate-900">
                                    Batch Processing & RAW Compatibility
                                </h2>
                            </div>
                            <p className="text-lg leading-relaxed text-slate-600">
                                For professionals, time is revenue. Our AI technology supports batch processing of up to 500 images per session, maintaining the color profiles essential for post-production workflows. Supports <span className="font-mono text-sm bg-slate-100 px-1 py-0.5 rounded">.ARW</span>, <span className="font-mono text-sm bg-slate-100 px-1 py-0.5 rounded">.CR2</span>, and standard web formats.
                            </p>
                        </section>

                        {/* CTA Bar */}
                        <section className="bg-blue-600 text-white p-10 md:p-12 rounded-2xl text-center shadow-2xl shadow-blue-900/20">
                            <h3 className="text-2xl md:text-3xl font-bold mb-4">Experience Neural Clarity</h3>
                            <p className="text-blue-100 mb-8 max-w-lg mx-auto font-medium">
                                Join over 50,000+ professionals using AI for pixel-perfect cleanup. No credit card required for trial.
                            </p>
                            <Link
                                href="/en"
                                className="inline-flex items-center gap-2 bg-white text-blue-600 px-8 py-4 rounded-lg font-bold hover:bg-slate-100 transition-transform hover:scale-105 active:scale-95"
                            >
                                Start Free 4K Removal <ArrowRight className="w-4 h-4" />
                            </Link>
                        </section>
                    </div>
                </article>
            </main>
        </div>
    )
}