import type { Metadata } from "next"
import { Header } from "@/components/header"
import Link from "next/link"
import { Mail, Clock, ArrowLeft, MessageSquare } from "lucide-react"

export const metadata: Metadata = {
    title: "Contact Us | RemoverMarca.com - Support & Feedback",
    description: "Have questions or suggestions? Contact the RemoverMarca team. We typically respond within 24 business hours.",
    alternates: {
        canonical: "https://removermarca.com/en/contact"
    },
}

export default function ContactPageEn() {
    return (
        <div className="min-h-screen bg-white">
            <Header locale="en" />

            <main className="max-w-4xl mx-auto px-4 pt-24 pb-20">

                {/* Page Header */}
                <section className="text-center mb-12">
                    <div className="w-16 h-16 bg-blue-50 rounded-2xl flex items-center justify-center mx-auto mb-6 text-blue-600">
                        <MessageSquare size={32} strokeWidth={2.5} />
                    </div>
                    <h1 className="text-4xl sm:text-5xl font-black text-slate-900 mb-6 tracking-tighter uppercase italic">
                        Contact <span className="text-blue-600">Us</span>
                    </h1>
                    <p className="text-lg text-slate-500 font-medium leading-relaxed italic">
                        Have any questions, suggestions, or feedback about our AI tool?
                        We would love to hear from you!
                    </p>
                </section>

                {/* Central Contact Card */}
                <div className="bg-slate-50 border border-slate-100 p-8 md:p-12 rounded-[40px] shadow-sm text-center relative overflow-hidden group">
                    {/* Subtle Background Decoration */}
                    <div className="absolute -top-10 -right-10 w-32 h-32 bg-blue-600/5 rounded-full blur-3xl group-hover:bg-blue-600/10 transition-colors" />

                    <div className="relative z-10 space-y-8">
                        <div className="space-y-2">
                            <p className="text-xs font-black text-slate-400 uppercase tracking-[0.2em]">Response Time</p>
                            <p className="text-slate-700 font-bold">
                                Our small team responds to all messages within <span className="text-blue-600">24 business hours</span>.
                            </p>
                        </div>

                        <div className="py-4">
                            <a
                                href="mailto:support@removermarca.com"
                                className="inline-flex items-center gap-3 text-xl md:text-2xl font-black text-blue-600 hover:text-blue-700 transition-all underline underline-offset-8 decoration-2 hover:decoration-4"
                            >
                                <Mail size={24} />
                                support@removermarca.com
                            </a>
                        </div>

                        <div className="flex flex-col items-center gap-2 pt-6 border-t border-slate-200/60">
                            <div className="flex items-center gap-2 text-slate-400 font-bold text-xs uppercase tracking-widest">
                                <Clock size={14} />
                                <span>Support Hours</span>
                            </div>
                            <p className="text-sm text-slate-500 font-medium leading-relaxed italic">
                                Monday to Friday, 9 AM to 6 PM <br />
                                (UTC-3 / Brasilia Time)
                            </p>
                        </div>
                    </div>
                </div>

                {/* Back Button */}
                <div className="mt-12 text-center">
                    <Link
                        href="/en"
                        className="inline-flex items-center gap-2 text-slate-400 hover:text-blue-600 font-black text-xs uppercase tracking-widest transition-colors group"
                    >
                        <ArrowLeft size={14} className="group-hover:-translate-x-1 transition-transform" />
                        Back to Home
                    </Link>
                </div>
            </main>
        </div>
    )
}