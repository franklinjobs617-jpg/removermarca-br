import type { Metadata } from "next"
import { Header } from "@/components/header"
import { AlertTriangle, ShieldAlert, BadgeCheck, Scale } from "lucide-react"

export const metadata: Metadata = {
    title: "Terms of Use | RemoverMarca.com",
    description: "Read our terms of use. Rules regarding licensing, intellectual property, and our refund policy for AI services.",
    alternates: {
        canonical: "https://removermarca.com/en/terms-of-use"
    },
}

export default function TermsOfUsePageEn() {
    return (
        <div className="min-h-screen bg-white">
            <Header locale="en" />

            <main className="max-w-4xl mx-auto px-4 pt-24 pb-20">

                {/* Header Section */}
                <header className="mb-16 border-b border-slate-100 pb-8 text-center sm:text-left">
                    <h1 className="text-4xl sm:text-5xl font-black text-slate-900 mb-4 tracking-tighter uppercase italic">
                        Terms of <span className="text-blue-600">Use</span>
                    </h1>
                    <p className="text-slate-500 font-medium text-lg leading-relaxed">
                        By accessing <span className="text-slate-900 font-bold tracking-tight">RemoverMarca.com</span>, you agree to comply with and respect the conditions set forth below.
                    </p>
                </header>

                {/* Content Section */}
                <div className="space-y-12">

                    {/* Section 1 */}
                    <section className="group">
                        <h2 className="text-xl font-black text-slate-900 mb-5 flex items-center gap-3 uppercase tracking-tight">
                            <span className="w-8 h-8 bg-blue-50 text-blue-600 rounded-lg flex items-center justify-center text-sm">01</span>
                            License and Restrictions
                        </h2>
                        <div className="pl-11">
                            <p className="text-slate-600 leading-relaxed mb-4">
                                Our tool is provided to facilitate creative editing. By using it, you agree not to:
                            </p>
                            <ul className="grid grid-cols-1 gap-3 text-slate-600 text-sm">
                                <li className="flex items-start gap-2 bg-slate-50 p-4 rounded-xl border border-slate-100">
                                    <AlertTriangle className="w-5 h-5 text-amber-500 shrink-0 mt-0.5" />
                                    <span>Perform mass <strong>scraping</strong>, unauthorized automation, or Denial of Service (DoS) attacks.</span>
                                </li>
                                <li className="flex items-start gap-2 bg-slate-50 p-4 rounded-xl border border-slate-100">
                                    <ShieldAlert className="w-5 h-5 text-red-500 shrink-0 mt-0.5" />
                                    <span>Process content that violates copyright laws or contains abusive, illegal, or defamatory material.</span>
                                </li>
                            </ul>
                        </div>
                    </section>

                    {/* Section 2 */}
                    <section className="group">
                        <h2 className="text-xl font-black text-slate-900 mb-5 flex items-center gap-3 uppercase tracking-tight">
                            <span className="w-8 h-8 bg-blue-50 text-blue-600 rounded-lg flex items-center justify-center text-sm">02</span>
                            Intellectual Property
                        </h2>
                        <div className="pl-11">
                            <p className="text-slate-600 leading-relaxed">
                                <strong className="text-slate-900 tracking-tight">RemoverMarca.com</strong> holds all rights to the AI technology and algorithms.
                                <span className="block mt-3 p-4 bg-blue-50/50 rounded-xl border-l-4 border-blue-600 italic text-slate-700">
                                    Important: The user is solely responsible for the uploaded image. You must ensure you possess the necessary rights or permissions for the photo before removing any watermark.
                                </span>
                            </p>
                        </div>
                    </section>

                    {/* Section 3 - Critical Information */}
                    <section className="group">
                        <h2 className="text-xl font-black text-slate-900 mb-5 flex items-center gap-3 uppercase tracking-tight">
                            <span className="w-8 h-8 bg-blue-50 text-blue-600 rounded-lg flex items-center justify-center text-sm">03</span>
                            Paid Services and Refunds
                        </h2>
                        <div className="pl-11">
                            <p className="text-slate-600 leading-relaxed mb-6">
                                We offer credits and subscriptions for high-definition (4K/HD) AI processing.
                            </p>
                            <div className="p-6 bg-amber-50 border border-amber-200 rounded-3xl">
                                <h4 className="font-black text-amber-900 uppercase text-xs tracking-widest mb-2 flex items-center gap-2">
                                    <Scale className="w-4 h-4" /> Refund Policy
                                </h4>
                                <p className="text-amber-800 text-sm leading-relaxed">
                                    Due to the digital nature of the service and the immediate computational cost of AI processing, <strong>we do not offer refunds after purchased credits have been used</strong>. Upon clicking process/download, the service is considered delivered.
                                </p>
                            </div>
                        </div>
                    </section>

                    {/* Section 4 */}
                    <section className="group">
                        <h2 className="text-xl font-black text-slate-900 mb-5 flex items-center gap-3 uppercase tracking-tight">
                            <span className="w-8 h-8 bg-blue-50 text-blue-600 rounded-lg flex items-center justify-center text-sm">04</span>
                            Disclaimer
                        </h2>
                        <div className="pl-11">
                            <p className="text-slate-600 leading-relaxed">
                                The service is provided &quot;as is&quot;. While our algorithms are state-of-the-art, we do not guarantee 100% perfect removal results in all cases, given the technical complexity of certain textures and image overlays.
                            </p>
                        </div>
                    </section>

                </div>

                {/* Closing */}
                <div className="mt-24 pt-12 border-t border-slate-100 flex flex-col items-center text-center">
                    <BadgeCheck className="w-12 h-12 text-blue-600 mb-4 opacity-20" />
                    <p className="text-slate-400 text-xs font-black uppercase tracking-[0.2em]">
                        RemoverMarca.com — Terms of Use 2026
                    </p>
                </div>
            </main>
        </div>
    )
}