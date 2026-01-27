import { Metadata } from "next"
import Link from "next/link"
import Image from "next/image"
import { Header } from "@/components/header"
import { Check, X, Clock, Zap, Layers, MousePointer2 } from "lucide-react"

// 1. SEO Metadata
export const metadata: Metadata = {
    title: "How to Remove Watermark from Photo in Photoshop (2026 vs. AI)",
    description: "Learn how to remove watermark from photo in Photoshop using Content-Aware Fill & the Clone Stamp. See why 2026 AI is 95% faster for professional 4K results.",
    alternates: {
        canonical: "https://removermarca.com/en/how-to-remove-watermark-from-photo-in-photoshop"
    }
}

// 2. JSON-LD 结构化数据 (HowTo Schema)
const jsonLd = {
    "@context": "https://schema.org",
    "@type": "HowTo",
    "name": "How to Remove Watermark in Photoshop",
    "step": [
        {
            "@type": "HowToStep",
            "text": "Select the watermark area using the Lasso Tool."
        },
        {
            "@type": "HowToStep",
            "text": "Go to Edit > Content-Aware Fill."
        },
        {
            "@type": "HowToStep",
            "text": "Adjust sampling area and hit OK."
        }
    ],
    "tool": [
        { "@type": "HowToTool", "name": "Adobe Photoshop 2026" },
        { "@type": "HowToTool", "name": "Lasso Tool" }
    ]
}

export default function PhotoshopGuidePage() {
    return (
        <div className="min-h-screen bg-[#f8fafc] text-slate-800">
            <Header locale="en" />


            {/* 注入结构化数据 */}
            <script
                type="application/ld+json"
                dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
            />

            {/* Efficiency Bar */}
            <div className="bg-slate-900 text-white text-center py-2 text-xs md:text-sm font-medium sticky top-[60px] z-40 shadow-md">
                <span className="opacity-80">⏱️ Photoshop Method: ~15 mins</span>
                <span className="mx-2 text-slate-600">|</span>
                <span className="text-blue-400 font-bold flex inline-flex items-center gap-1">
                    <Zap className="w-3 h-3" /> AI Method: &lt; 1 sec
                </span>
            </div>

            <main className="max-w-[900px] mx-auto px-6 py-12 md:py-20">

                {/* --- HERO SECTION --- */}
                <article>
                    <header className="mb-12 border-b border-slate-200 pb-10">
                        <div className="flex items-center gap-2 text-xs font-bold text-blue-600 uppercase tracking-widest mb-4">
                            <span className="bg-blue-50 px-2 py-1 rounded">Photoshop Tutorial</span>
                            <span>•</span>
                            <span>Updated Jan 2026</span>
                        </div>
                        <h1 className="text-3xl md:text-5xl font-black text-[#001e36] leading-tight mb-6">
                            How to Remove Watermark from Photo in Photoshop <span className="text-slate-400 font-light text-2xl md:text-4xl block mt-2">(2026 Guide)</span>
                        </h1>
                        <p className="text-lg text-slate-600 leading-relaxed max-w-2xl">
                            While Photoshop is the industry standard for complex editing, using it just to remove a watermark can be overkill for most photographers. Here is the step-by-step manual process vs. the modern AI approach.
                        </p>
                    </header>

                    {/* --- METHOD 1: CONTENT AWARE FILL --- */}
                    <section id="ps-methods" className="mb-16">
                        <h2 className="text-2xl font-bold text-[#001e36] mb-8 flex items-center gap-3">
                            <Layers className="w-6 h-6 text-blue-600" />
                            Method 1: Using Content-Aware Fill (v27.x)
                        </h2>

                        <div className="space-y-6">
                            {/* Step 1 */}
                            <div className="bg-white p-6 rounded-2xl border border-slate-200 shadow-sm flex gap-4">
                                <div className="flex-shrink-0 w-8 h-8 bg-[#001e36] text-white rounded-full flex items-center justify-center font-bold text-sm">1</div>
                                <div>
                                    <h3 className="font-bold text-lg text-slate-900 mb-2">Make a Selection</h3>
                                    <p className="text-slate-600">Use the <strong>Lasso Tool (L)</strong> to draw a loose border around the watermark. Ensure you leave a small margin of pixels around the edges.</p>
                                </div>
                            </div>

                            {/* Step 2 */}
                            <div className="bg-white p-6 rounded-2xl border border-slate-200 shadow-sm flex gap-4">
                                <div className="flex-shrink-0 w-8 h-8 bg-[#001e36] text-white rounded-full flex items-center justify-center font-bold text-sm">2</div>
                                <div>
                                    <h3 className="font-bold text-lg text-slate-900 mb-2">Expand Selection</h3>
                                    <p className="text-slate-600">Go to <code className="bg-slate-100 px-1 py-0.5 rounded text-sm font-mono text-pink-600">Select &gt; Modify &gt; Expand</code>. Enter 5-10 pixels to ensure no &quot;ghost edges&quot; remain.</p>
                                </div>
                            </div>

                            {/* Step 3 */}
                            <div className="bg-white p-6 rounded-2xl border border-slate-200 shadow-sm flex gap-4">
                                <div className="flex-shrink-0 w-8 h-8 bg-[#001e36] text-white rounded-full flex items-center justify-center font-bold text-sm">3</div>
                                <div>
                                    <h3 className="font-bold text-lg text-slate-900 mb-2">Apply Fill</h3>
                                    <p className="text-slate-600">Go to <code className="bg-slate-100 px-1 py-0.5 rounded text-sm font-mono text-pink-600">Edit &gt; Content-Aware Fill</code>. In the preview window, adjust the sampling area if the texture looks mismatched.</p>
                                </div>
                            </div>
                        </div>

                        {/* Visual Placeholder */}
                        <figure className="my-10 bg-slate-100 rounded-xl overflow-hidden border border-slate-200">
                            <div className="aspect-video bg-slate-200 flex items-center justify-center text-slate-400">
                                {/* Next.js Image Component Here */}
                                <svg className="w-16 h-16 opacity-20" fill="currentColor" viewBox="0 0 24 24"><path d="M4 4h16v16H4V4zm2 2v12h12V6H6zm2 2h8v8H8V8z" /></svg>
                            </div>
                            <figcaption className="p-4 text-center text-xs font-bold text-slate-500 bg-slate-50 border-t border-slate-200 uppercase tracking-wider">
                                Fig 1: Photoshop Content-Aware Fill Interface (2026)
                            </figcaption>
                        </figure>
                    </section>

                    {/* --- COMPARISON TABLE --- */}
                    <section id="comparison" className="mb-16">
                        <h2 className="text-2xl font-bold text-[#001e36] mb-8">
                            Photoshop vs. RemoverMarca AI: The Efficiency Test
                        </h2>

                        <div className="overflow-x-auto rounded-2xl border border-slate-200 shadow-lg bg-white">
                            <table className="w-full text-left min-w-[600px]">
                                <thead>
                                    <tr className="bg-[#001e36] text-white">
                                        <th className="p-5 font-bold text-sm uppercase tracking-wider">Feature</th>
                                        <th className="p-5 font-bold text-sm uppercase tracking-wider text-blue-200">Adobe Photoshop 2026</th>
                                        <th className="p-5 font-bold text-sm uppercase tracking-wider text-white bg-blue-600">RemoverMarca AI</th>
                                    </tr>
                                </thead>
                                <tbody className="divide-y divide-slate-100 text-sm font-medium">
                                    <tr className="group hover:bg-slate-50">
                                        <td className="p-5 text-slate-900 flex items-center gap-2"><Clock className="w-4 h-4 text-slate-400" /> Time (per photo)</td>
                                        <td className="p-5 text-slate-500">~5 to 15 Minutes</td>
                                        <td className="p-5 text-blue-700 bg-blue-50/50 font-bold">&lt; 2 Seconds</td>
                                    </tr>
                                    <tr className="group hover:bg-slate-50">
                                        <td className="p-5 text-slate-900 flex items-center gap-2"><MousePointer2 className="w-4 h-4 text-slate-400" /> Workflow</td>
                                        <td className="p-5 text-slate-500">12+ Manual Steps</td>
                                        <td className="p-5 text-blue-700 bg-blue-50/50 font-bold">1-Click Auto</td>
                                    </tr>
                                    <tr className="group hover:bg-slate-50">
                                        <td className="p-5 text-slate-900 flex items-center gap-2"><Layers className="w-4 h-4 text-slate-400" /> Batch Processing</td>
                                        <td className="p-5 text-slate-500">Complex Scripts</td>
                                        <td className="p-5 text-blue-700 bg-blue-50/50 font-bold">Native Drag & Drop</td>
                                    </tr>
                                </tbody>
                            </table>
                        </div>
                    </section>

                    {/* --- CTA BOX --- */}
                    <section className="bg-gradient-to-br from-[#001e36] to-[#00335c] text-white rounded-3xl p-10 md:p-14 text-center shadow-2xl shadow-slate-900/20 mb-16 relative overflow-hidden">
                        <div className="absolute top-0 right-0 p-10 opacity-10 pointer-events-none">
                            <Zap className="w-64 h-64" />
                        </div>
                        <h2 className="text-3xl md:text-4xl font-black mb-4 tracking-tight">Tired of the Photoshop Grind?</h2>
                        <p className="text-blue-100 text-lg mb-8 max-w-2xl mx-auto">
                            Get professional 4K results in seconds, not minutes. No complex selections, no manual cloning.
                        </p>
                        <Link
                            href="/en"
                            className="inline-flex items-center gap-2 bg-blue-500 hover:bg-blue-400 text-white px-8 py-4 rounded-full font-bold transition-all transform hover:scale-105 shadow-lg shadow-blue-500/30"
                        >
                            Switch to AI Removal Free <Zap className="w-4 h-4" />
                        </Link>
                    </section>

                    {/* --- FAQ --- */}
                    <section id="faq" className="border-t border-slate-200 pt-12">
                        <h2 className="text-2xl font-bold text-[#001e36] mb-6">FAQ: Professional Workflow</h2>
                        <div className="space-y-4">
                            <details className="group bg-white rounded-xl border border-slate-200 p-6 cursor-pointer">
                                <summary className="font-bold text-slate-900 flex justify-between items-center list-none">
                                    Is AI removal better than Photoshop&apos;s Clone Stamp?
                                    <span className="text-blue-500 group-open:rotate-180 transition-transform">▼</span>
                                </summary>
                                <p className="mt-4 text-slate-600 leading-relaxed border-t border-slate-100 pt-4">
                                    For 90% of watermarks, AI reconstruction is superior because it understands the <em>context</em> of the scene rather than just copying nearby pixels. Photoshop requires manual texture matching, which is time-consuming.
                                </p>
                            </details>
                        </div>
                    </section>

                </article>
            </main>
        </div>
    )
}