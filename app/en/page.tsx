
import { Header } from "@/components/header"
import { HeroSectionEn } from "@/components/home/heroSectionEn"
import { GlobalDragDrop } from "@/components/home/globalDragDrop"
import { HomeWithRetention } from "@/components/home-with-retention"
import { Metadata } from "next"
export const metadata: Metadata = {
    title: "AI Watermark Remover: Remove Watermark from Photo Online 4K",
    description: "Remove watermarks from photos instantly with AI. 100% automatic, 4K quality, and bulk processing. Better than Photoshop for quick cleanup.",
    openGraph: {
        title: "AI Watermark Remover: Remove Watermark from Photo Online 4K",
        description: "Remove watermarks from photos instantly with AI. 100% automatic, 4K quality, and bulk processing. Better than Photoshop for quick cleanup.",
        url: "https://removermarca.com/en",
        images: [
            {
                url: "https://removermarca.com/og-image.png",
                width: 1200,
                height: 630,
                alt: "RemoverMarca.com",
            },
        ],
    },
    alternates: {
        canonical: "https://removermarca.com/en"
    },
}
export default function EnglishHomePage() {
    return (
        <div className="min-h-screen bg-[#f8fafc]">
            <GlobalDragDrop />

            {/* 强制传递 lang="en" 确保导航文案正确 */}
            <Header locale="en" />

            <main>
                <HeroSectionEn />
                {/* --- SECTION 2: FEATURES --- */}
                <section className="py-24 bg-white border-y border-slate-100">
                    <div className="max-w-7xl mx-auto px-6 grid md:grid-cols-3 gap-8">
                        {[
                            {
                                title: "Bulk Processing",
                                desc: "Save time by removing watermarks from hundreds of photos simultaneously with our advanced AI engine."
                            },
                            {
                                title: "4K Resolution",
                                desc: "Our AI doesn't just blur; it reconstructs pixels to maintain crystal clear 4K resolution without quality loss."
                            },
                            {
                                title: "Mobile Optimized",
                                desc: "Perfectly adapted for iOS and Android. No app download needed—works directly in your browser."
                            },
                        ].map((item, i) => (
                            <div key={i} className="p-10 bg-slate-50 rounded-[40px] border border-slate-100 space-y-4">
                                <h3 className="text-xl font-black text-slate-900 uppercase tracking-tighter">{item.title}</h3>
                                <p className="text-slate-500 font-medium text-sm leading-relaxed">{item.desc}</p>
                            </div>
                        ))}
                    </div>
                </section>

                {/* --- SECTION 3: CONTENT AREA (Deep SEO) --- */}
                <article className="max-w-[850px] mx-auto px-6 py-24">
                    <div className="space-y-16">
                        <section className="space-y-6">
                            <h2 className="text-3xl md:text-4xl font-black text-slate-900 uppercase italic tracking-tighter">
                                How to Remove Watermark from Photo <span className="text-blue-600 underline decoration-blue-100 underline-offset-8">in 3 Seconds</span>
                            </h2>
                            <p className="text-lg text-slate-600 font-medium leading-relaxed">
                                Using <strong>RemoverMarca</strong> is simpler than traditional editing software. Our deep learning model identifies the watermark layer and intelligently fills the background using neural inpainting technology.
                            </p>

                            {/* Comparison Table */}
                            <div className="py-10">
                                <div className="overflow-x-auto rounded-[32px] border border-slate-200 shadow-sm">
                                    <table className="w-full text-left border-collapse min-w-[600px]">
                                        <thead>
                                            <tr className="bg-slate-900 text-white font-black uppercase text-[10px] tracking-widest">
                                                <th className="p-6">Feature</th>
                                                <th className="p-6 text-blue-400 bg-blue-400/5">RemoverMarca AI</th>
                                                <th className="p-6">Photoshop (Manual)</th>
                                            </tr>
                                        </thead>
                                        <tbody className="text-sm font-bold text-slate-700 divide-y divide-slate-100">
                                            <tr>
                                                <td className="p-6">Processing Time</td>
                                                <td className="p-6 text-blue-600">~2 Seconds</td>
                                                <td className="p-6 text-slate-400 italic font-medium">5-10 Minutes</td>
                                            </tr>
                                            <tr>
                                                <td className="p-6">Bulk Support</td>
                                                <td className="p-6 text-blue-600">Yes (Instant)</td>
                                                <td className="p-6 text-slate-400 italic font-medium">No (Manual Action)</td>
                                            </tr>
                                            <tr>
                                                <td className="p-6">Skill Required</td>
                                                <td className="p-6 text-blue-600">None</td>
                                                <td className="p-6 text-slate-400 italic font-medium">Professional</td>
                                            </tr>
                                        </tbody>
                                    </table>
                                </div>
                                <figcaption className="text-center text-[10px] font-black text-slate-400 mt-4 uppercase tracking-[0.2em]">
                                    Table 1: AI vs Manual watermark removal efficiency (Tested Jan 2026).
                                </figcaption>
                            </div>
                        </section>

                        <section className="space-y-6 border-t border-slate-100 pt-16">
                            <h2 className="text-3xl md:text-4xl font-black text-slate-900 uppercase italic tracking-tighter">
                                Why Choose Our AI Watermark Remover?
                            </h2>
                            <div className="grid md:grid-cols-2 gap-8">
                                <p className="text-slate-600 font-medium leading-relaxed">
                                    Our tool is designed for instant gratification. Unlike other &quot;free&quot; tools that reduce resolution, <strong>RemoverMarca</strong> ensures that every export is high-definition.
                                </p>
                                <div className="bg-blue-50 p-6 rounded-3xl border-l-4 border-blue-600 italic font-bold text-blue-900 text-sm">
                                    &quot;The secret to removing watermark from photo without blur is our Core-V4.2 engine, which reconstructs skin and sky textures with 99% accuracy.&quot;
                                </div>
                            </div>
                        </section>
                    </div>
                </article>
            </main>

            {/* 用户留存横幅和登录模态框 - 英文版 */}
            <HomeWithRetention locale="en" />
        </div>
    )
}