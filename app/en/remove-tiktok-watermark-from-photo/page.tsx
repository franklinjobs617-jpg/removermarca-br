import { Metadata } from "next"
import Link from "next/link"
import Image from "next/image" // 推荐使用 next/image
import { Header } from "@/components/header"
import { UploadArea } from "@/components/upload-area" // 确保路径正确
import { Check, X, AlertTriangle, Smartphone } from "lucide-react"

// 1. SEO Metadata 配置
export const metadata: Metadata = {
    title: "Remove TikTok Watermark from Photo (2026 AI 4K Method)",
    description: "Instantly remove TikTok watermarks and usernames from photos. Optimized for creators—4K quality, mobile-ready, and 100% automatic AI removal.",
    alternates: {
        canonical: "https://removermarca.com/en/remove-tiktok-watermark-from-photo"
    }
}

// 2. JSON-LD 结构化数据
const jsonLd = {
    "@context": "https://schema.org",
    "@type": "SoftwareApplication",
    "name": "RemoverMarca TikTok Tool",
    "applicationCategory": "MultimediaApplication",
    "operatingSystem": "Web, iOS, Android",
    "offers": {
        "@type": "Offer",
        "price": "0",
        "priceCurrency": "USD"
    },
    "featureList": "Remove TikTok ID, jumping watermark removal, 4K export"
}

export default function TikTokPage() {
    return (
        <div className="min-h-screen bg-[#f8fafc]">
            <Header locale="en" />


            {/* 注入结构化数据 */}
            <script
                type="application/ld+json"
                dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
            />

            <main className="max-w-4xl mx-auto px-4 pt-24 pb-20">

                {/* --- Tool Box Section (Hero) --- */}
                <section className="bg-[#fdfdfd] border border-gray-200 rounded-3xl p-10 text-center mb-10 shadow-sm">
                    <div className="inline-block px-3 py-1 bg-blue-50 text-blue-600 rounded-full text-xs font-bold mb-4 border border-blue-100 uppercase tracking-wide">
                        Updated Jan 2026 Algorithm
                    </div>
                    <h1 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4 tracking-tight">
                        Remove TikTok Watermark from Photo
                    </h1>
                    <p className="text-gray-600 mb-8 max-w-2xl mx-auto">
                        Turn your TikTok screenshots into clean, <strong>4K professional photos</strong> for Instagram Reels and YouTube Shorts. No blur, no crop, no quality loss.
                    </p>

                    {/* 复用项目已有的上传组件 */}
                    <div className="max-w-2xl mx-auto">
                        <UploadArea
                            buttonText="Upload image"
                            dragText="or drag and drop a file,"
                            pasteLabel="Paste image or"
                            pasteAction="Ctrl+V"
                            locale="en"
                        />
                        <p className="mt-4 text-sm text-gray-500 italic">
                            Supports TikTok Screenshots (PNG/JPG/HEIC). Max 15MB.
                        </p>
                    </div>
                </section>

                <p className="text-center text-sm mb-12 text-gray-500">
                    Need the mobile app? Try our <Link href="/app-to-remove-watermark-from-photo" className="text-blue-600 hover:underline font-medium">PWA for iOS & Android</Link>.
                </p>

                {/* --- Section 1: How It Works --- */}
                <section id="how-to" className="py-10 border-t border-gray-100">
                    <h2 className="text-2xl font-bold mb-6 relative pb-2 after:content-[''] after:absolute after:left-0 after:bottom-0 after:w-12 after:h-1 after:bg-blue-600 text-gray-900">
                        How to Clean TikTok Screenshots Instantly
                    </h2>

                    {/* Informational Badge */}
                    <div className="bg-gray-50 border-l-4 border-blue-600 p-6 rounded-r-xl mb-8 flex gap-4 items-start">
                        <div className="bg-blue-100 p-2 rounded-lg text-blue-600 mt-1">
                            <Smartphone className="w-5 h-5" />
                        </div>
                        <div>
                            <h3 className="font-bold text-lg mb-1 text-gray-900">Updated for 2026 Layouts</h3>
                            <p className="text-gray-600 text-sm leading-relaxed">
                                TikTok frequently changes watermark positions (corners vs. jumping username). Our <strong>Algorithm V4.8</strong> automatically detects the latest dynamic logo variations and multi-username overlays.
                            </p>
                        </div>
                    </div>

                    <div className="grid md:grid-cols-2 gap-6">
                        <div className="p-6 rounded-xl bg-white border border-gray-200 shadow-sm">
                            <h3 className="font-bold text-lg mb-2 text-gray-900">AI Reconstruction</h3>
                            <p className="text-gray-600 text-sm">Unlike basic tools, we don&apos;t just blur the corner. We reconstruct the background pixels (skin, sky, fabric) to maintain 4K clarity.</p>
                        </div>
                        <div className="p-6 rounded-xl bg-white border border-gray-200 shadow-sm">
                            <h3 className="font-bold text-lg mb-2 text-gray-900">Frame Preservation</h3>
                            <p className="text-gray-600 text-sm">Keep the original 9:16 aspect ratio. Perfect for reposting to Instagram Reels or Shorts without black bars.</p>
                        </div>
                    </div>
                </section>

                {/* --- Section 2: Comparison Table --- */}
                <section className="py-10">
                    <h2 className="text-2xl font-bold mb-6 relative pb-2 after:content-[''] after:absolute after:left-0 after:bottom-0 after:w-12 after:h-1 after:bg-blue-600 text-gray-900">
                        Why Cropping Ruins Your Reach
                    </h2>
                    <p className="text-gray-600 mb-6">
                        Algorithms detect non-standard aspect ratios. If you crop your TikTok photo, you lose engagement. Compare the methods below:
                    </p>

                    <div className="overflow-x-auto mt-6 rounded-xl border border-gray-200 shadow-sm">
                        <table className="w-full text-left min-w-[500px]">
                            <thead className="bg-gray-50">
                                <tr>
                                    <th className="p-4 border-b font-bold text-gray-900">Feature</th>
                                    <th className="p-4 border-b font-bold text-gray-500">Traditional Cropping</th>
                                    <th className="p-4 border-b font-bold text-blue-600 bg-blue-50/50">RemoverMarca AI</th>
                                </tr>
                            </thead>
                            <tbody className="bg-white">
                                <tr className="border-b hover:bg-gray-50/50">
                                    <td className="p-4 font-bold text-gray-800">Frame Content</td>
                                    <td className="p-4 text-red-500 flex items-center gap-2"><X className="w-4 h-4" /> Loses 20-30%</td>
                                    <td className="p-4 text-green-600 font-bold flex items-center gap-2"><Check className="w-4 h-4" /> 100% Intact</td>
                                </tr>
                                <tr className="border-b hover:bg-gray-50/50">
                                    <td className="p-4 font-bold text-gray-800">Resolution</td>
                                    <td className="p-4 text-gray-500">Often Pixelated</td>
                                    <td className="p-4 text-gray-600">4K Neural Upscale</td>
                                </tr>
                                <tr className="border-b hover:bg-gray-50/50">
                                    <td className="p-4 font-bold text-gray-800">Social Reach</td>
                                    <td className="p-4 text-gray-500">Shadowban Risk</td>
                                    <td className="p-4 text-gray-600">Native-Level Reach</td>
                                </tr>
                            </tbody>
                        </table>
                    </div>
                </section>

                {/* --- Section 3: FAQ --- */}
                <section id="faq" className="py-10">
                    <h2 className="text-2xl font-bold mb-6 relative pb-2 after:content-[''] after:absolute after:left-0 after:bottom-0 after:w-12 after:h-1 after:bg-blue-600 text-gray-900">
                        FAQ: TikTok Removal Questions
                    </h2>
                    <div className="space-y-4 mt-6">
                        <details className="group bg-gray-50 rounded-xl p-4 cursor-pointer border border-transparent hover:border-gray-200 transition-colors">
                            <summary className="font-bold flex justify-between items-center list-none text-gray-900">
                                Does it remove the jumping username watermark?
                                <span className="group-open:rotate-180 transition-transform text-blue-600">↓</span>
                            </summary>
                            <p className="pt-4 text-gray-600 border-t mt-4 border-gray-200 leading-relaxed">
                                Yes. Our AI detects specific animation patterns used by TikTok (top-left, bottom-right, and the "bouncing" username) and removes them seamlessly.
                            </p>
                        </details>

                        <details className="group bg-gray-50 rounded-xl p-4 cursor-pointer border border-transparent hover:border-gray-200 transition-colors">
                            <summary className="font-bold flex justify-between items-center list-none text-gray-900">
                                Can I process screenshots in batch?
                                <span className="group-open:rotate-180 transition-transform text-blue-600">↓</span>
                            </summary>
                            <p className="pt-4 text-gray-600 border-t mt-4 border-gray-200 leading-relaxed">
                                Yes, simply drag and drop multiple screenshots into the upload area above. Our engine will process them simultaneously.
                            </p>
                        </details>

                        <details className="group bg-gray-50 rounded-xl p-4 cursor-pointer border border-transparent hover:border-gray-200 transition-colors">
                            <summary className="font-bold flex justify-between items-center list-none text-gray-900">
                                Is it free to use for creators?
                                <span className="group-open:rotate-180 transition-transform text-blue-600">↓</span>
                            </summary>
                            <p className="pt-4 text-gray-600 border-t mt-4 border-gray-200 leading-relaxed">
                                Yes. We offer free processing for standard resolutions. 4K exports are available for professional users without hidden fees.
                            </p>
                        </details>
                    </div>
                </section>

            </main>
        </div>
    )
}