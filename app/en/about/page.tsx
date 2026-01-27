import type { Metadata } from "next"
import { Header } from "@/components/header"
import { Users, Zap, ShieldCheck, Globe } from "lucide-react"

export const metadata: Metadata = {
    title: "About Us | RemoverMarca.com - AI Technology",
    description: "Learn about the team and technology behind RemoverMarca.com. Our mission is to democratize high-end AI photo editing for everyone.",
    alternates: {
        canonical: "https://removermarca.com/en/about"
    },
    openGraph: {
        title: "About Us | RemoverMarca.com - AI Technology",
        description: "Learn about the team and technology behind RemoverMarca.com. Our mission is to democratize high-end AI photo editing for everyone.",
        url: "https://removermarca.com/en/about",
        images: [
            {
                url: "https://removermarca.com/og-image.png",
                width: 1200,
                height: 630,
                alt: "RemoverMarca.com",
            },
        ],
    },
}

export default function AboutUsPageEn() {
    return (
        <div className="min-h-screen bg-white">
            <Header locale="en" />

            <main className="max-w-4xl mx-auto px-4 pt-24 pb-20">

                <section className="text-center mb-16">
                    <h1 className="text-4xl sm:text-5xl font-black text-slate-900 mb-6 tracking-tighter uppercase italic">
                        About <span className="text-blue-600">Us</span>
                    </h1>
                    <p className="text-lg text-slate-500 font-medium leading-relaxed max-w-2xl mx-auto">
                        We are a team of engineers and designers passionate about computer vision. Our mission is to make professional photo retouching accessible to everyone, instantly.
                    </p>
                </section>

                <div className="grid md:grid-cols-2 gap-8 mb-16">
                    <div className="bg-slate-50 p-8 rounded-[32px] border border-slate-100">
                        <div className="w-12 h-12 bg-blue-600 text-white rounded-xl flex items-center justify-center mb-4">
                            <Zap size={24} />
                        </div>
                        <h3 className="text-xl font-black text-slate-900 mb-2">Our Technology</h3>
                        <p className="text-slate-600 leading-relaxed">
                            We utilize state-of-the-art Neural Networks (GANs) trained on millions of images to understand context, texture, and lighting, allowing for seamless watermark removal.
                        </p>
                    </div>
                    <div className="bg-slate-50 p-8 rounded-[32px] border border-slate-100">
                        <div className="w-12 h-12 bg-blue-600 text-white rounded-xl flex items-center justify-center mb-4">
                            <Users size={24} />
                        </div>
                        <h3 className="text-xl font-black text-slate-900 mb-2">Our Users</h3>
                        <p className="text-slate-600 leading-relaxed">
                            From e-commerce sellers needing clean product photos to content creators repurposing their videos. We serve over 50,000 active users monthly.
                        </p>
                    </div>
                </div>
            </main>
        </div>
    )
}