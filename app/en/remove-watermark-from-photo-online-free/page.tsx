import { Metadata } from "next"
import Link from "next/link"
import { Header } from "@/components/header"
import { UploadArea } from "@/components/upload-area" // 确保路径正确
import { Check, X, ShieldCheck, Zap, Download } from "lucide-react"
import Image from "next/image"

// 1. SEO Metadata
export const metadata: Metadata = {
    title: "Remove Watermark from Photo Online Free (2026 AI Best Tools)",
    description: "Looking for the best way to remove watermark from photo online free? Try our AI-powered 4K cleaner. No sign-up required for preview. Instant, safe & professional.",
    alternates: {
        canonical: "https://removermarca.com/en/remove-watermark-from-photo-online-free"
    }
}

// 2. JSON-LD 结构化数据 (SoftwareApplication)
const jsonLd = {
    "@context": "https://schema.org",
    "@type": "SoftwareApplication",
    "name": "RemoverMarca AI Online Free",
    "applicationCategory": "PhotoEditor",
    "operatingSystem": "Web Browser",
    "offers": {
        "@type": "Offer",
        "price": "0",
        "priceCurrency": "USD"
    },
    "featureList": "Free 4K removal, No sign-up required, Privacy focused"
}

export default function FreeOnlinePage() {
    return (
        <div className="min-h-screen bg-[#f8fafc]">
            <Header locale="en" />


            {/* 注入结构化数据 */}
            <script
                type="application/ld+json"
                dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
            />

            <main className="pb-24">
                {/* --- HERO SECTION --- */}
                <section className="bg-gradient-to-b from-white to-[#f8fafc] pt-24 pb-16 px-6 text-center border-b border-slate-100">
                    <div className="max-w-4xl mx-auto space-y-6">
                        <div className="inline-block px-3 py-1 bg-green-100 text-green-700 rounded-full text-xs font-bold border border-green-200 uppercase tracking-wide">
                            100% Free Preview Available
                        </div>
                        <h1 className="text-3xl md:text-5xl font-black text-slate-900 tracking-tight leading-tight">
                            Remove Watermark from Photo <br />
                            <span className="text-blue-600 underline decoration-blue-200 underline-offset-8">Online Free</span>
                        </h1>
                        <p className="text-lg text-slate-600 max-w-2xl mx-auto leading-relaxed">
                            Experience the power of 2026 Neural Inpainting. Remove distracting logos or text in <strong>4K resolution</strong> without paying a cent for your first preview.
                        </p>

                        {/* 复用 Upload 组件 */}
                        <div className="max-w-xl mx-auto mt-8 bg-white p-2 rounded-3xl shadow-xl shadow-blue-900/5 border border-slate-100">
                            <UploadArea
                                buttonText="Upload image"
                                dragText="or drag and drop a file,"
                                pasteLabel="Paste image or"
                                pasteAction="Ctrl+V"
                                locale="en"
                            />
                            <div className="flex justify-center gap-4 mt-4 text-xs font-medium text-slate-400 pb-2">
                                <span className="flex items-center gap-1"><Check className="w-3 h-3" /> No Sign-up</span>
                                <span className="flex items-center gap-1"><Check className="w-3 h-3" /> 4K Supported</span>
                                <span className="flex items-center gap-1"><Check className="w-3 h-3" /> Secure</span>
                            </div>
                        </div>
                    </div>
                </section>

                {/* --- CONTENT CONTAINER --- */}
                <article className="max-w-[850px] mx-auto px-6 py-16 space-y-20">

                    {/* Section 1: How it works */}
                    <section id="how-to">
                        <h2 className="text-2xl font-bold text-slate-900 mb-6 flex items-center gap-3">
                            <Zap className="w-6 h-6 text-blue-600" />
                            How to Remove Watermark Online in 10s
                        </h2>
                        <p className="text-slate-600 mb-8 leading-relaxed">
                            Our AI analyzes the pixels surrounding the watermark to predict and reconstruct the underlying texture. Unlike manual cloning tools, this process is automated and context-aware.
                        </p>

                        <div className="rounded-2xl border border-slate-200 aspect-video relative overflow-hidden group shadow-lg">
                            <Image
                                src="/ai-watermark-reconstruction-vs-blur-comparison.png" // 你的图片路径
                                alt="Side-by-side comparison showing AI watermark removal quality: original photo with text overlay vs. clean 4K result with perfect pixel reconstruction, demonstrating no blur or quality loss."
                                fill
                                className="object-cover"
                                sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 800px"
                                priority
                            />
                            {/* 可选：添加一个模拟的滑块线，增加视觉效果 */}
                            <div className="absolute inset-y-0 left-1/2 w-1 bg-white/80 shadow-[0_0_10px_rgba(0,0,0,0.3)] flex items-center justify-center">
                                <div className="w-8 h-8 bg-white rounded-full flex items-center justify-center shadow-md">
                                    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="text-slate-400"><path d="M18 8L22 12L18 16M6 8L2 12L6 16" /></svg>
                                </div>
                            </div>
                        </div>

                        <figcaption className="text-center text-xs font-bold text-slate-400 mt-3 uppercase tracking-wider">
                            Fig 1: AI Reconstruction vs. Standard Blur
                        </figcaption>
                    </section>

                    {/* Section 2: Comparison Table */}
                    <section id="compare">
                        <h2 className="text-2xl font-bold text-slate-900 mb-6">
                            Comparing Top 5 Free Online Tools (2026)
                        </h2>
                        <div className="overflow-x-auto rounded-2xl border border-slate-200 shadow-sm bg-white">
                            <table className="w-full text-left min-w-[600px]">
                                <thead>
                                    <tr className="bg-slate-50 border-b border-slate-200">
                                        <th className="p-4 font-bold text-slate-900">Feature</th>
                                        <th className="p-4 font-bold text-slate-500">Typical &quot;Free&quot; Tool</th>
                                        <th className="p-4 font-bold text-blue-600 bg-blue-50/50">RemoverMarca (Free Tier)</th>
                                    </tr>
                                </thead>
                                <tbody className="divide-y divide-slate-100 text-sm">
                                    <tr className="hover:bg-slate-50/50">
                                        <td className="p-4 font-medium text-slate-700">Max Resolution</td>
                                        <td className="p-4 text-slate-400">720p (Often Blurred)</td>
                                        <td className="p-4 font-bold text-slate-900 flex items-center gap-2">
                                            <Check className="w-4 h-4 text-green-500" /> 4K HD Preview
                                        </td>
                                    </tr>
                                    <tr className="hover:bg-slate-50/50">
                                        <td className="p-4 font-medium text-slate-700">Account Required</td>
                                        <td className="p-4 text-slate-400">Yes (Email Spam)</td>
                                        <td className="p-4 font-bold text-slate-900 flex items-center gap-2">
                                            <Check className="w-4 h-4 text-green-500" /> No Sign-up Needed
                                        </td>
                                    </tr>
                                    <tr className="hover:bg-slate-50/50">
                                        <td className="p-4 font-medium text-slate-700">Privacy Policy</td>
                                        <td className="p-4 text-slate-400">Stored for 30 days</td>
                                        <td className="p-4 font-bold text-slate-900 flex items-center gap-2">
                                            <Check className="w-4 h-4 text-green-500" /> Auto-delete in 1hr
                                        </td>
                                    </tr>
                                </tbody>
                            </table>
                        </div>
                    </section>

                    {/* Section 3: FAQ / Trust */}
                    <section id="faq" className="bg-blue-50/50 rounded-3xl p-8 border border-blue-100">
                        <div className="flex items-start gap-4">
                            <ShieldCheck className="w-8 h-8 text-blue-600 flex-shrink-0" />
                            <div>
                                <h3 className="text-xl font-bold text-slate-900 mb-2">Is it Legal to Remove Watermarks Online?</h3>
                                <p className="text-slate-600 leading-relaxed text-sm">
                                    <strong>Short Answer:</strong> Removing watermarks for personal archival, educational, or fair use purposes is generally accepted. However, removing copyright information to redistribute or sell someone else&apos;s work is illegal. Always ensure you have the right to edit the photo.
                                </p>
                            </div>
                        </div>
                    </section>

                </article>
            </main>

            {/* --- MOBILE STICKY CTA --- */}
            <div className="fixed bottom-0 left-0 right-0 bg-white border-t border-slate-200 p-4 md:hidden z-50 shadow-[0_-5px_20px_rgba(0,0,0,0.05)]">
                <Link href="/en" className="flex items-center justify-center gap-2 w-full bg-blue-600 text-white font-bold py-3.5 rounded-xl shadow-lg shadow-blue-600/20 active:scale-[0.98] transition-transform">
                    <Download className="w-4 h-4" />
                    Upload Photo Free
                </Link>
            </div>

        </div>
    )
}