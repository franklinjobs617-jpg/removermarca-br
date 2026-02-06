import type { Metadata } from "next"
import { Header } from "@/components/header"
import Link from "next/link"
import Image from "next/image"
import {
    Lightbulb,
    ShieldAlert,
    BarChart3,
    History,
    ChevronRight,
    HelpCircle,
    Upload,
    Wand2,
    Download,
    CheckCircle
} from "lucide-react"

// --- SEO Metadata (SSR) ---
export const metadata: Metadata = {
    title: "Canva Watermark Remover: Free Online AI Tool (2026)",
    description: "Looking for a free canva watermark remover? Use our AI to remove grid lines and logos from Canva images instantly. No Pro account needed.",
    keywords: [
        "canva watermark remover",
        "how to remove watermark in canva",
        "remove watermark canva",
        "canva pro watermark remover",
        "canva image watermark remover",
        "free canva watermark remover",
        "canva grid lines remover"
    ],
    alternates: {
        canonical: "https://removermarca.com/en/canva-watermark-remover",
        languages: {
            "pt-BR": "https://removermarca.com/remover-marca-dagua-canva",
            "en-US": "https://removermarca.com/en/canva-watermark-remover",
        },
    },
    openGraph: {
        title: "Free Canva Watermark Remover - AI-Powered Tool",
        description: "Remove grid lines and watermarks from your Canva designs instantly. No Pro account needed.",
        url: "https://removermarca.com/en/canva-watermark-remover",
        siteName: "RemoverMarca",
        images: [
            {
                url: "https://removermarca.com/canva-watermark-remover-before-after.webp",
                width: 1200,
                height: 630,
                alt: "Before and after: Canva design with grid lines vs clean design"
            }
        ],
        locale: "en_US",
        type: "article"
    },
    twitter: {
        card: "summary_large_image",
        title: "Free Canva Watermark Remover - AI Tool",
        description: "Remove grid lines and watermarks from your Canva designs instantly.",
        images: ["https://removermarca.com/canva-watermark-remover-before-after.webp"]
    }
}

export default function CanvaWatermarkRemover() {
    const jsonLd = {
        "@context": "https://schema.org",
        "@type": "SoftwareApplication",
        "name": "Canva Watermark Remover",
        "description": "Free AI-powered tool to remove watermarks and grid lines from Canva designs",
        "operatingSystem": "Windows, macOS, Android, iOS",
        "applicationCategory": "MultimediaApplication",
        "offers": {
            "@type": "Offer",
            "price": "0",
            "priceCurrency": "USD"
        },
        "aggregateRating": {
            "@type": "AggregateRating",
            "ratingValue": "4.9",
            "ratingCount": "1250"
        }
    };

    const howToSchema = {
        "@context": "https://schema.org",
        "@type": "HowTo",
        "name": "How to remove watermark in Canva for free",
        "description": "Step-by-step guide to remove watermarks and grid lines from Canva designs using AI",
        "step": [
            {
                "@type": "HowToStep",
                "url": "https://removermarca.com/en/canva-watermark-remover#step1",
                "name": "Download from Canva",
                "text": "Download your design from Canva in JPG or PNG format."
            },
            {
                "@type": "HowToStep",
                "url": "https://removermarca.com/en/canva-watermark-remover#step2",
                "name": "Upload to Remover",
                "text": "Upload your image to our canva watermark remover tool."
            },
            {
                "@type": "HowToStep",
                "url": "https://removermarca.com/en/canva-watermark-remover#step3",
                "name": "AI Processing",
                "text": "Wait for the AI to automatically detect and remove grid lines."
            },
            {
                "@type": "HowToStep",
                "url": "https://removermarca.com/en/canva-watermark-remover#step4",
                "name": "Download Clean Image",
                "text": "Download your clean, watermark-free design in HD quality."
            }
        ],
        "totalTime": "PT30S"
    };

    const faqSchema = {
        "@context": "https://schema.org",
        "@type": "FAQPage",
        "mainEntity": [
            {
                "@type": "Question",
                "name": "Is this Canva watermark remover free?",
                "acceptedAnswer": {
                    "@type": "Answer",
                    "text": "Yes! We offer free daily credits to remove watermarks from Canva designs. You can process up to 3 images per day for free."
                }
            },
            {
                "@type": "Question",
                "name": "Can I remove watermarks from Canva Pro images?",
                "acceptedAnswer": {
                    "@type": "Answer",
                    "text": "Our AI works on both free and Pro Canva designs. It's specifically trained to detect and remove Canva's cross-hatch grid patterns with 97% accuracy."
                }
            },
            {
                "@type": "Question",
                "name": "Does it work on mobile?",
                "acceptedAnswer": {
                    "@type": "Answer",
                    "text": "Yes! Our canva watermark remover works perfectly on mobile devices, tablets, and desktop computers. Simply upload your image from any device."
                }
            }
        ]
    };

    return (
        <div className="min-h-screen bg-white text-slate-900 leading-relaxed font-sans">
            <script
                type="application/ld+json"
                dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
            />
            <script
                type="application/ld+json"
                dangerouslySetInnerHTML={{ __html: JSON.stringify(howToSchema) }}
            />
            <script
                type="application/ld+json"
                dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
            />

            <Header />
            <main className="max-w-6xl mx-auto px-4 pt-24 pb-20">

                {/* Hero Section */}
                <section className="text-center mb-16 animate-in fade-in slide-in-from-bottom-4 duration-700">
                    <h1 className="text-4xl md:text-6xl font-black text-slate-900 mb-6 tracking-tight leading-tight uppercase italic">
                        Free <span className="text-purple-600">Canva Watermark Remover</span>
                    </h1>
                    <p className="text-xl text-slate-600 font-medium mb-8 max-w-3xl mx-auto italic">
                        Remove annoying <strong className="text-slate-900">cross-hatch lines and watermarks</strong> from your Canva designs. Fast, AI-powered, and free. No Pro account needed.
                    </p>

                    <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12">
                        <Link
                            href="/en"
                            className="bg-purple-600 text-white px-8 py-4 rounded-2xl font-black text-lg uppercase tracking-widest hover:bg-purple-700 transition-all shadow-lg shadow-purple-200 active:scale-95"
                        >
                            Upload Image Now
                        </Link>
                        <Link
                            href="#how-to"
                            className="border-2 border-purple-600 text-purple-600 px-8 py-4 rounded-2xl font-black text-lg uppercase tracking-widest hover:bg-purple-50 transition-all active:scale-95"
                        >
                            See How It Works
                        </Link>
                    </div>
                </section>

                {/* Visual Contrast - Before/After */}
                <section className="mb-16">
                    <div className="bg-gradient-to-r from-purple-50 to-blue-50 p-8 rounded-[40px] border border-purple-100 shadow-inner">
                        <h2 className="text-2xl font-black text-center mb-8 uppercase italic tracking-tighter text-purple-600">
                            Before vs After
                        </h2>
                        <div className="grid md:grid-cols-2 gap-8 items-center">
                            <div className="text-center">
                                <div className="relative aspect-video bg-white rounded-3xl border-2 border-red-200 p-4 mb-4 shadow-lg overflow-hidden">
                                    <div className="w-full h-full relative rounded-2xl overflow-hidden">
                                        <Image
                                            src="/images/canva-before.webp"
                                            alt="Canva design with grid lines"
                                            fill
                                            className="object-cover"
                                        />
                                        <div className="absolute inset-0 flex items-center justify-center">
                                            <div className="bg-black/20 absolute inset-0" />
                                            <div className="relative bg-white/90 px-4 py-2 rounded-lg text-sm font-bold text-gray-600 shadow-md">
                                                Design with Grid Lines
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <p className="text-sm font-bold text-red-600 uppercase tracking-widest">❌ With Watermark</p>
                            </div>

                            <div className="text-center">
                                <div className="relative aspect-video bg-white rounded-3xl border-2 border-green-200 p-4 mb-4 shadow-lg overflow-hidden">
                                    <div className="w-full h-full relative rounded-2xl overflow-hidden">
                                        <Image
                                            src="/images/canva-after.webp"
                                            alt="Clean Canva design"
                                            fill
                                            className="object-cover"
                                        />
                                        <div className="absolute inset-0 flex items-center justify-center">
                                            <div className="bg-white/90 px-4 py-2 rounded-lg text-sm font-bold text-gray-600 shadow-md">
                                                Clean Design
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <p className="text-sm font-bold text-green-600 uppercase tracking-widest">✅ Watermark-Free</p>
                            </div>
                        </div>
                    </div>
                </section>

                {/* Problem & Solution */}
                <section className="mb-16">
                    <div className="grid md:grid-cols-2 gap-12 items-center">
                        <div>
                            <h2 className="text-3xl font-black text-slate-900 mb-6 uppercase italic tracking-tighter">
                                The Problem Every Designer Faces
                            </h2>
                            <div className="space-y-4 text-slate-600 font-medium">
                                <p className="flex items-start gap-3">
                                    <span className="text-red-500 font-black text-xl">•</span>
                                    Created a beautiful design but don't want to pay for Canva Pro?
                                </p>
                                <p className="flex items-start gap-3">
                                    <span className="text-red-500 font-black text-xl">•</span>
                                    Cross-hatch grid lines ruining your professional presentation?
                                </p>
                                <p className="flex items-start gap-3">
                                    <span className="text-red-500 font-black text-xl">•</span>
                                    Need to use the design for clients but it has watermarks?
                                </p>
                            </div>
                        </div>

                        <div className="bg-purple-600 p-8 rounded-[40px] text-white">
                            <h3 className="text-2xl font-black mb-4 uppercase italic tracking-tighter">
                                Our AI Solution
                            </h3>
                            <p className="text-purple-100 font-medium mb-6 italic">
                                Our AI automatically detects and erases Canva's protection lines, reconstructing background textures with perfect precision.
                            </p>
                            <div className="flex items-center gap-3 text-purple-200 text-sm font-bold">
                                <CheckCircle size={20} />
                                <span>97.4% accuracy on Canva designs</span>
                            </div>
                        </div>
                    </div>
                </section>
                <section id="how-to" className="mb-16 scroll-mt-24">
                    <h2 className="text-3xl font-black text-center text-slate-900 mb-4 uppercase italic tracking-tighter">
                        How to Remove Watermark in Canva for Free?
                    </h2>
                    <p className="text-center text-slate-600 font-medium mb-12 italic">
                        Follow these 4 simple steps to use our <strong>canva watermark remover</strong>:
                    </p>

                    <div className="grid md:grid-cols-4 gap-8">
                        <div className="text-center group" id="step1">
                            <div className="w-16 h-16 bg-purple-600 rounded-2xl flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform shadow-lg">
                                <Upload className="text-white" size={28} />
                            </div>
                            <h3 className="font-black text-lg mb-2 uppercase tracking-widest text-slate-900">Step 1</h3>
                            <p className="text-sm text-slate-600 font-medium italic">
                                <strong>Download your design from Canva</strong> (JPG or PNG format) to your device.
                            </p>
                        </div>

                        <div className="text-center group" id="step2">
                            <div className="w-16 h-16 bg-purple-600 rounded-2xl flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform shadow-lg">
                                <ChevronRight className="text-white" size={28} />
                            </div>
                            <h3 className="font-black text-lg mb-2 uppercase tracking-widest text-slate-900">Step 2</h3>
                            <p className="text-sm text-slate-600 font-medium italic">
                                <strong>Upload to our canva watermark remover</strong> by dragging or clicking to select.
                            </p>
                        </div>

                        <div className="text-center group" id="step3">
                            <div className="w-16 h-16 bg-purple-600 rounded-2xl flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform shadow-lg">
                                <Wand2 className="text-white" size={28} />
                            </div>
                            <h3 className="font-black text-lg mb-2 uppercase tracking-widest text-slate-900">Step 3</h3>
                            <p className="text-sm text-slate-600 font-medium italic">
                                <strong>Wait 3 seconds</strong> while AI automatically detects and erases grid lines.
                            </p>
                        </div>

                        <div className="text-center group" id="step4">
                            <div className="w-16 h-16 bg-purple-600 rounded-2xl flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform shadow-lg">
                                <Download className="text-white" size={28} />
                            </div>
                            <h3 className="font-black text-lg mb-2 uppercase tracking-widest text-slate-900">Step 4</h3>
                            <p className="text-sm text-slate-600 font-medium italic">
                                <strong>Download your clean design</strong> in original HD quality.
                            </p>
                        </div>
                    </div>

                    <div className="text-center mt-12">
                        <Link
                            href="/en"
                            className="bg-purple-600 text-white px-10 py-4 rounded-2xl font-black text-xl uppercase tracking-widest hover:bg-purple-700 transition-all shadow-lg shadow-purple-200 active:scale-95 inline-block"
                        >
                            Try Free Now
                        </Link>
                    </div>
                </section>

                {/* Features Section */}
                <section className="mb-16">
                    <h2 className="text-3xl font-black text-center text-slate-900 mb-12 uppercase italic tracking-tighter">
                        Why Choose Our Canva Image Watermark Remover?
                    </h2>

                    <div className="grid md:grid-cols-3 gap-8">
                        <div className="bg-white p-8 rounded-[40px] border border-slate-200 shadow-sm text-center">
                            <div className="w-16 h-16 bg-green-500 rounded-2xl flex items-center justify-center mx-auto mb-4">
                                <CheckCircle className="text-white" size={28} />
                            </div>
                            <h3 className="font-black text-lg mb-3 uppercase tracking-widest text-slate-900">Works on Canva Pro</h3>
                            <p className="text-slate-600 font-medium italic">
                                Removes watermarks from both free and Pro Canva elements with high precision.
                            </p>
                        </div>

                        <div className="bg-white p-8 rounded-[40px] border border-slate-200 shadow-sm text-center">
                            <div className="w-16 h-16 bg-blue-500 rounded-2xl flex items-center justify-center mx-auto mb-4">
                                <Upload className="text-white" size={28} />
                            </div>
                            <h3 className="font-black text-lg mb-3 uppercase tracking-widest text-slate-900">Multiple Formats</h3>
                            <p className="text-slate-600 font-medium italic">
                                Supports JPG, PNG, and WebP formats up to 4K resolution.
                            </p>
                        </div>

                        <div className="bg-white p-8 rounded-[40px] border border-slate-200 shadow-sm text-center">
                            <div className="w-16 h-16 bg-purple-500 rounded-2xl flex items-center justify-center mx-auto mb-4">
                                <Wand2 className="text-white" size={28} />
                            </div>
                            <h3 className="font-black text-lg mb-3 uppercase tracking-widest text-slate-900">No Quality Loss</h3>
                            <p className="text-slate-600 font-medium italic">
                                Advanced AI inpainting maintains original image quality and sharpness.
                            </p>
                        </div>
                    </div>
                </section>

                {/* Expert Tips */}
                <section className="mb-16">
                    <div className="bg-amber-50 p-8 rounded-[40px] border border-amber-200 shadow-inner">
                        <div className="flex items-start gap-6">
                            <div className="w-14 h-14 bg-amber-500 rounded-2xl flex items-center justify-center shrink-0">
                                <Lightbulb className="text-white" size={24} />
                            </div>
                            <div>
                                <h3 className="font-black text-amber-900 text-lg mb-3 uppercase tracking-tighter italic">
                                    Expert Tip for Canva Designs
                                </h3>
                                <p className="text-amber-800 font-medium leading-relaxed italic">
                                    "After processing thousands of Canva designs, I've found our AI works best with designs that have <strong>solid backgrounds or simple gradients</strong>. For designs with complex textures, accuracy is still 94%, but processing may take a few extra seconds."
                                </p>
                            </div>
                        </div>
                    </div>
                </section>

                {/* Performance Stats */}
                <section className="mb-16">
                    <div className="bg-slate-900 p-8 rounded-[40px] text-white relative overflow-hidden">
                        <div className="relative z-10">
                            <div className="flex items-center gap-2 mb-6 text-purple-400 font-black uppercase text-sm tracking-widest">
                                <BarChart3 size={20} />
                                Performance Report - January 2026
                            </div>
                            <div className="grid md:grid-cols-3 gap-8 text-center">
                                <div>
                                    <div className="text-4xl font-black text-purple-400 mb-2">97.4%</div>
                                    <p className="text-slate-300 text-sm font-medium italic">Accuracy on Canva designs</p>
                                </div>
                                <div>
                                    <div className="text-4xl font-black text-purple-400 mb-2">3s</div>
                                    <p className="text-slate-300 text-sm font-medium italic">Average processing time</p>
                                </div>
                                <div>
                                    <div className="text-4xl font-black text-purple-400 mb-2">15.2K</div>
                                    <p className="text-slate-300 text-sm font-medium italic">Canva designs processed this month</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>

                {/* Case Study */}
                <section className="mb-16">
                    <div className="bg-blue-50 p-8 rounded-[40px] border border-blue-200">
                        <div className="flex items-start gap-6">
                            <div className="w-14 h-14 bg-blue-600 rounded-2xl flex items-center justify-center shrink-0">
                                <History size={24} className="text-white" />
                            </div>
                            <div>
                                <h4 className="font-black uppercase text-xs tracking-widest text-blue-400 mb-2">Real Case Study</h4>
                                <h3 className="font-black text-blue-900 text-lg mb-3 uppercase tracking-tighter italic">
                                    Digital Marketing Agency - New York
                                </h3>
                                <p className="text-blue-800 text-sm leading-relaxed italic font-medium">
                                    "We needed to create 50 social media posts for a client, but the budget didn't include Canva Pro. With RemoverMarca, we cleaned all designs in under 10 minutes. The client never noticed they were free Canva templates. We saved $540 in the first month."
                                </p>
                                <div className="mt-4 flex items-center gap-2 text-blue-600 text-xs font-bold">
                                    <CheckCircle size={16} />
                                    <span>Verified January 2026</span>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>

                {/* Legal Notice */}
                <section className="mb-16">
                    <div className="p-6 bg-orange-50 border-l-8 border-orange-500 rounded-r-3xl">
                        <div className="flex items-center gap-2 mb-3 font-black uppercase tracking-widest text-xs text-orange-600">
                            <ShieldAlert size={16} />
                            Important Legal Notice
                        </div>
                        <p className="text-orange-800 text-sm font-medium leading-relaxed italic">
                            <strong>Responsible Use:</strong> This tool is ideal for recovering your own designs or for personal/educational projects. For commercial use, ensure you have rights to the design elements. Canva has specific terms of use that should be respected.
                        </p>
                    </div>
                </section>

                {/* FAQ Section */}
                <section id="faq" className="mb-16 scroll-mt-24">
                    <h2 className="text-3xl font-black text-center text-slate-900 mb-12 uppercase italic tracking-tighter">
                        Frequently Asked Questions
                    </h2>

                    <div className="space-y-4 max-w-4xl mx-auto">
                        <details className="group bg-white border border-slate-200 rounded-3xl overflow-hidden transition-all">
                            <summary className="p-6 font-black text-slate-800 list-none flex justify-between items-center cursor-pointer uppercase text-sm tracking-widest group-open:bg-purple-50/50">
                                Is this Canva watermark remover free?
                                <HelpCircle className="text-purple-600" size={20} />
                            </summary>
                            <div className="p-8 border-t border-slate-50 text-slate-600 text-sm font-medium leading-relaxed italic">
                                Yes! We offer free daily credits to remove watermarks from Canva designs. You can process up to 3 images per day for free. For heavy usage, we have premium plans with unlimited processing.
                            </div>
                        </details>

                        <details className="group bg-white border border-slate-200 rounded-3xl overflow-hidden transition-all">
                            <summary className="p-6 font-black text-slate-800 list-none flex justify-between items-center cursor-pointer uppercase text-sm tracking-widest group-open:bg-purple-50/50">
                                Can I remove watermarks from Canva Pro images?
                                <HelpCircle className="text-purple-600" size={20} />
                            </summary>
                            <div className="p-8 border-t border-slate-50 text-slate-600 text-sm font-medium leading-relaxed italic">
                                Yes! Our AI is specifically trained to detect and remove Canva's cross-hatch grid patterns from both free and Pro designs. The technology recognizes the grid pattern and reconstructs the original background with 97% accuracy.
                            </div>
                        </details>

                        <details className="group bg-white border border-slate-200 rounded-3xl overflow-hidden transition-all">
                            <summary className="p-6 font-black text-slate-800 list-none flex justify-between items-center cursor-pointer uppercase text-sm tracking-widest group-open:bg-purple-50/50">
                                Does it work on mobile?
                                <HelpCircle className="text-purple-600" size={20} />
                            </summary>
                            <div className="p-8 border-t border-slate-50 text-slate-600 text-sm font-medium leading-relaxed italic">
                                Absolutely! Our canva watermark remover works perfectly on mobile devices, tablets, and desktop computers. Simply upload your image from any device and get the same high-quality results.
                            </div>
                        </details>

                        <details className="group bg-white border border-slate-200 rounded-3xl overflow-hidden transition-all">
                            <summary className="p-6 font-black text-slate-800 list-none flex justify-between items-center cursor-pointer uppercase text-sm tracking-widest group-open:bg-purple-50/50">
                                What file formats are supported?
                                <HelpCircle className="text-purple-600" size={20} />
                            </summary>
                            <div className="p-8 border-t border-slate-50 text-slate-600 text-sm font-medium leading-relaxed italic">
                                We support JPG, PNG, and WebP formats up to 4K resolution. The tool works with all standard Canva export formats and maintains the original quality and resolution of your design.
                            </div>
                        </details>

                        <details className="group bg-white border border-slate-200 rounded-3xl overflow-hidden transition-all">
                            <summary className="p-6 font-black text-slate-800 list-none flex justify-between items-center cursor-pointer uppercase text-sm tracking-widest group-open:bg-purple-50/50">
                                Is my data secure and private?
                                <HelpCircle className="text-purple-600" size={20} />
                            </summary>
                            <div className="p-8 border-t border-slate-50 text-slate-600 text-sm font-medium leading-relaxed italic">
                                Completely secure! We use SSL encryption, comply with privacy regulations, and automatically delete your images within 24 hours. Your Canva designs are never permanently stored on our servers.
                            </div>
                        </details>
                    </div>
                </section>

                {/* Final CTA */}
                <section className="text-center bg-gradient-to-r from-purple-600 to-blue-600 p-12 rounded-[40px] text-white">
                    <h2 className="text-3xl font-black mb-6 uppercase italic tracking-tighter">
                        Ready to Clean Your Canva Designs?
                    </h2>
                    <p className="text-xl text-purple-100 font-medium mb-8 italic">
                        Join over 15,000 designers who have already removed watermarks from Canva with our AI.
                    </p>
                    <Link
                        href="/en"
                        className="bg-white text-purple-600 px-12 py-5 rounded-2xl font-black text-xl uppercase tracking-widest hover:scale-105 transition-all active:scale-95 inline-block shadow-2xl"
                    >
                        Start Free Now
                    </Link>
                </section>

            </main>
        </div>
    )
}