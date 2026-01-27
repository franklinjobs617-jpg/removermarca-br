import { Metadata } from "next"
import { Header } from "@/components/header"
import { Smartphone, Download, ShieldCheck, Zap, MonitorPlay, Check, X } from "lucide-react"
import Link from "next/link"
import Image from "next/image"

// 1. 配置 SEO Metadata
export const metadata: Metadata = {
    title: "Best App to Remove Watermark from Photo (2026 AI Mobile Web App)",
    description: "Looking for the best app to remove watermarks? Try our AI-powered mobile web app. 100% automatic, no installation, and 4K support for iOS & Android.",
    alternates: {
        canonical: "https://removermarca.com/en/app-to-remove-watermark-from-photo"
    },
    // PWA 相关配置
    other: {
        "apple-mobile-web-app-capable": "yes",
        "apple-mobile-web-app-status-bar-style": "black-translucent",
        "theme-color": "#007bff",
    }
}

export default function AppSeoPage() {
    return (
        <div className="min-h-screen bg-[#f8fafc]">
            {/* Header 组件 */}
            <Header locale="en" />


            <main>
                {/* --- ARTICLE CONTAINER --- */}
                <article className="max-w-7xl mx-auto px-6 py-24">
                    <div className="space-y-24">

                        {/* --- HERO SECTION --- */}
                        <section className="space-y-8 text-center md:text-left">
                            <h1 className="text-4xl md:text-5xl font-black text-slate-900 uppercase italic tracking-tighter leading-tight">
                                Best App to Remove Watermark from Photo <br />
                                <span className="text-blue-600 decoration-blue-100 underline underline-offset-8">No Store Download</span>
                            </h1>
                            <p className="text-xl text-slate-600 font-medium leading-relaxed max-w-2xl">
                                Experience the 4K AI power on mobile without App Store downloads.
                                Works instantly on iOS Safari and Android Chrome.
                            </p>

                            {/* PWA Install Box - Styled as a Card */}
                            <div className="mt-8 p-6 bg-white rounded-3xl border border-slate-200 shadow-lg shadow-slate-200/50 flex flex-col md:flex-row items-center gap-6">
                                <div className="bg-blue-50 p-4 rounded-2xl">
                                    <Smartphone className="w-8 h-8 text-blue-600" />
                                </div>
                                <div className="flex-grow text-center md:text-left">
                                    <p className="text-lg font-bold text-slate-900">Add to Home Screen</p>
                                    <p className="text-slate-500 text-sm font-medium">Works like a native app on iOS & Android</p>
                                </div>
                                <Link href={'/en'} className="bg-slate-900 hover:bg-slate-800 text-white px-8 py-3 rounded-full font-bold transition-all transform active:scale-95 flex items-center gap-2">
                                    <Download className="w-4 h-4" />
                                    <span>Go To Use</span>
                                </Link>
                            </div>
                        </section>

                        {/* --- SECTION: Why Web App is Better (Comparison Table) --- */}
                        <section className="space-y-8">
                            <h2 className="text-3xl font-black text-slate-900 uppercase italic tracking-tighter">
                                Why a Web App is Better than Native Apps
                            </h2>
                            <p className="text-lg text-slate-600 font-medium leading-relaxed">
                                Traditional apps clutter your storage and spy on your data. Our PWA (Progressive Web App) approach offers a lighter, faster, and safer alternative.
                            </p>

                            <div className="py-6">
                                <div className="overflow-x-auto rounded-[32px] border border-slate-200 shadow-sm bg-white">
                                    <table className="w-full text-left border-collapse min-w-[600px]">
                                        <thead>
                                            <tr className="bg-slate-900 text-white font-black uppercase text-[10px] tracking-widest">
                                                <th className="p-6 w-1/3">Feature</th>
                                                <th className="p-6 w-1/3 text-blue-400 bg-blue-400/10">RemoverMarca PWA</th>
                                                <th className="p-6 w-1/3 text-slate-400">Traditional Apps</th>
                                            </tr>
                                        </thead>
                                        <tbody className="text-sm font-bold text-slate-700 divide-y divide-slate-100">
                                            <tr>
                                                <td className="p-6 flex items-center gap-2">
                                                    <Zap className="w-4 h-4 text-slate-400" /> Storage Space
                                                </td>
                                                <td className="p-6 text-blue-600">&lt; 1MB</td>
                                                <td className="p-6 text-slate-400 italic font-medium">150MB+</td>
                                            </tr>
                                            <tr>
                                                <td className="p-6 flex items-center gap-2">
                                                    <MonitorPlay className="w-4 h-4 text-slate-400" /> Installation
                                                </td>
                                                <td className="p-6 text-blue-600">Instant (1-Tap)</td>
                                                <td className="p-6 text-slate-400 italic font-medium">Slow (Store Download)</td>
                                            </tr>
                                            <tr>
                                                <td className="p-6 flex items-center gap-2">
                                                    <ShieldCheck className="w-4 h-4 text-slate-400" /> Privacy
                                                </td>
                                                <td className="p-6 text-blue-600">Browser Sandbox</td>
                                                <td className="p-6 text-slate-400 italic font-medium">Requires Permissions</td>
                                            </tr>
                                            <tr>
                                                <td className="p-6 flex items-center gap-2">
                                                    <Check className="w-4 h-4 text-slate-400" /> 4K Export
                                                </td>
                                                <td className="p-6 text-blue-600">Yes (Free)</td>
                                                <td className="p-6 text-slate-400 italic font-medium">Often Paid/Locked</td>
                                            </tr>
                                        </tbody>
                                    </table>
                                </div>
                                <figcaption className="text-center text-[10px] font-black text-slate-400 mt-4 uppercase tracking-[0.2em]">
                                    Table: Performance comparison between PWA and Native Apps.
                                </figcaption>
                            </div>
                        </section>

                        {/* --- SECTION: How to Use --- */}
                        <section className="space-y-8 p-10 bg-slate-100/50 rounded-[40px] border border-slate-200">
                            <h2 className="text-3xl font-black text-slate-900 uppercase italic tracking-tighter">
                                How to Use the App on iPhone & Android
                            </h2>
                            <div className="space-y-6">
                                <figure className="overflow-hidden rounded-3xl border-4 border-white shadow-xl bg-slate-50 relative group">
                                    <Image
                                        src="/how-to-install-pwa-ios-android-guide.jpg" // 替换为你的实际图片路径
                                        alt="Step-by-step guide: How to add RemoverMarca app to home screen on iOS Safari and Android Chrome without downloading."
                                        width={800}
                                        height={450}
                                        className="w-full h-auto bg-slate-200 aspect-video object-cover transition-transform duration-500 group-hover:scale-[1.02]"
                                        priority
                                    />
                                    {/* 可选：添加文字说明覆盖层 */}
                                    <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-slate-900/80 to-transparent p-6 text-white text-sm font-bold opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex justify-between">
                                        <span>iOS: Share → Add to Home Screen</span>
                                        <span>Android: Menu → Add to Home Screen</span>
                                    </div>
                                </figure>
                                <p className="text-slate-600 font-medium leading-relaxed">
                                    Simply open <strong>RemoverMarca.com</strong> in your browser (Safari for iOS, Chrome for Android). Tap the &quot;Share&quot; button (iOS) or the Menu button (Android) and select <strong>&quot;Add to Home Screen&quot;</strong>. The AI removal tool will now appear among your apps, ready for instant access.
                                </p>
                            </div>
                        </section>

                        {/* --- SECTION: Key Features --- */}
                        <section className="space-y-6 pt-8 border-t border-slate-200">
                            <h2 className="text-3xl font-black text-slate-900 uppercase italic tracking-tighter">
                                Key Features: 4K Resolution in Your Pocket
                            </h2>
                            <div className="grid md:grid-cols-2 gap-8 items-center">
                                <p className="text-slate-600 font-medium leading-relaxed">
                                    Our <strong>app to remove watermark from photo</strong> utilizes the same high-end neural networks as our desktop version. Whether you are using Safari on iPhone or Chrome on Android, you get pixel-perfect results instantly.
                                </p>
                                <div className="bg-blue-600 text-white p-6 rounded-3xl font-bold italic shadow-lg shadow-blue-500/20">
                                    "No quality loss. The mobile version uses the exact same API endpoint as the desktop pro version."
                                </div>
                            </div>
                        </section>

                    </div>
                </article>
            </main>
        </div>
    )
}