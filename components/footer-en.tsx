import Link from "next/link"
import { ShieldCheck, Github, Twitter, Instagram } from "lucide-react"
import Image from "next/image"

export function FooterEn() {
    return (
        <footer className="bg-white border-t border-gray-100 pt-20 pb-10">
            <div className="max-w-7xl mx-auto px-6">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-12 mb-16">

                    {/* Column 1: Brand & Intro */}
                    <div className="lg:col-span-2 space-y-6">
                        <Link href="/en" className="flex items-center gap-2 group w-fit">
                            <div className="w-8 h-8 bg-blue-600 rounded-lg flex items-center justify-center text-white font-black text-xl italic transition-transform group-hover:scale-105">
                                R
                            </div>
                            <span className="text-xl font-black text-gray-900 tracking-tighter">RemoverMarca</span>
                        </Link>
                        <p className="text-slate-500 text-sm leading-relaxed max-w-sm font-medium italic">
                            Leading AI image processing technology.
                            Intelligent 4K Ultra watermark removal with absolute precision for global creators.
                        </p>
                        <div className="flex items-center gap-4 text-slate-400">
                            <Link href="#" className="hover:text-blue-600 transition-colors"><Instagram size={20} /></Link>
                            <Link href="#" className="hover:text-blue-600 transition-colors"><Twitter size={20} /></Link>
                            <Link href="#" className="hover:text-blue-600 transition-colors"><Github size={20} /></Link>
                        </div>
                        <div className="pt-2 space-y-3">
                            <Link
                                href="https://theresanaiforthat.com/ai/removermarca/?ref=featured&v=7340698"
                                target="_blank"
                                rel="nofollow"
                                className="block hover:opacity-80 transition-opacity"
                            >
                                <Image
                                    width="240"
                                    height="50"
                                    src="https://media.theresanaiforthat.com/featured-on-taaft.png?width=600"
                                    alt="Featured on There's An AI For That"
                                    className="rounded-lg shadow-sm"
                                />
                            </Link>
                            <Link
                                href="https://toolsaiapp.com/"
                                target="_blank"
                                rel="nofollow"
                                className="block hover:opacity-80 transition-opacity"
                            >
                                <Image
                                    width="240"
                                    height="54"
                                    src="https://toolsaiapp.com/wp-content/uploads/2025/12/badge.png"
                                    alt="Featured on Tools AI App"
                                    className="rounded-lg shadow-sm"
                                />
                            </Link>
                        </div>
                    </div>

                    {/* Column 2: Tools (Mapped to EN routes) */}
                    <div className="space-y-6">
                        <h4 className="text-[10px] font-black text-slate-900 uppercase tracking-[0.2em]">Tools</h4>
                        <ul className="space-y-4 text-sm font-bold text-slate-500">
                            {/* Linked to: /en/remove-watermark-from-photo-ai */}
                            <li>
                                <Link href="/en/remove-watermark-from-photo-ai" className="hover:text-blue-600 transition-colors">
                                    AI Watermark Remover
                                </Link>
                            </li>
                            {/* Linked to: /en/remove-tiktok-watermark-from-photo */}
                            <li>
                                <Link href="/en/remove-tiktok-watermark-from-photo" className="hover:text-blue-600 transition-colors">
                                    TikTok Remover
                                </Link>
                            </li>
                            {/* Linked to: /en/app-to-remove-watermark-from-photo */}
                            <li>
                                <Link href="/en/app-to-remove-watermark-from-photo" className="hover:text-blue-600 transition-colors">
                                    Mobile App (PWA)
                                </Link>
                            </li>
                            {/* Linked to: /en/remove-watermark-from-photo-online-free */}
                            <li>
                                <Link href="/en/remove-watermark-from-photo-online-free" className="hover:text-blue-600 transition-colors">
                                    Free Online Tool
                                </Link>
                            </li>
                        </ul>
                    </div>

                    {/* Column 3: Resources (Mapped to EN routes) */}
                    <div className="space-y-6">
                        <h4 className="text-[10px] font-black text-slate-900 uppercase tracking-[0.2em]">Resources</h4>
                        <ul className="space-y-4 text-sm font-bold text-slate-500">
                            {/* Linked to: /en/how-do-i-remove-watermarks-from-photos */}
                            <li>
                                <Link href="/en/how-do-i-remove-watermarks-from-photos" className="hover:text-blue-600 transition-colors">
                                    How-To Guide
                                </Link>
                            </li>
                            {/* Linked to: /en/how-to-remove-watermark-from-photo-in-photoshop */}
                            <li>
                                <Link href="/en/how-to-remove-watermark-from-photo-in-photoshop" className="hover:text-blue-600 transition-colors">
                                    Photoshop Tutorial
                                </Link>
                            </li>
                            {/* Linked to: /en/pricing */}
                            <li>
                                <Link href="/en/pricing" className="hover:text-blue-600 transition-colors uppercase tracking-tighter">
                                    Pricing Plans
                                </Link>
                            </li>
                        </ul>
                    </div>

                    {/* Column 4: Company (Fallback to root pages if EN versions don't exist yet, or keep generic) */}
                    <div className="space-y-6">
                        <h4 className="text-[10px] font-black text-slate-900 uppercase tracking-[0.2em]">Company</h4>
                        <ul className="space-y-4 text-sm font-bold text-slate-500">
                            {/* Assuming you might add EN versions later, linking to root for now or you can change to /en/about */}
                            <li><Link href="/en/about" className="hover:text-blue-600 transition-colors">About Us</Link></li>
                            <li><Link href="/en/privacy-policy" className="hover:text-blue-600 transition-colors">Privacy Policy</Link></li>
                            <li><Link href="/en/terms-of-use" className="hover:text-blue-600 transition-colors">Terms of Use</Link></li>
                            <li><Link href="/en/contact" className="hover:text-blue-600 transition-colors">Contact</Link></li>
                            <li className="pt-2">
                                <div className="flex items-center gap-2 text-green-600">
                                    <ShieldCheck size={16} />
                                    <span className="text-[10px] uppercase font-black tracking-widest">SSL Secured</span>
                                </div>
                            </li>
                        </ul>
                    </div>
                </div>

                {/* Footer Bottom */}
                <div className="pt-10 border-t border-slate-50 flex flex-col md:flex-row items-center justify-between gap-8">
                    <div className="flex flex-col items-center md:items-start gap-2">
                        <p className="text-slate-400 text-[10px] font-black uppercase tracking-[0.1em]">
                            © 2026 RemoverMarca.com — Empowering Creators Worldwide 🌎
                        </p>
                    </div>

                    {/* Payment Icons (Removed Pix as it's Brazil-only) */}
                    <div className="flex items-center gap-6 opacity-30 grayscale hover:grayscale-0 hover:opacity-60 transition-all duration-500">
                        <img src="https://upload.wikimedia.org/wikipedia/commons/5/5e/Visa_Inc._logo.svg" alt="Visa" className="h-3" />
                        <img src="https://upload.wikimedia.org/wikipedia/commons/2/2a/Mastercard-logo.svg" alt="Mastercard" className="h-6" />
                        <img src="https://upload.wikimedia.org/wikipedia/commons/b/b5/PayPal.svg" alt="PayPal" className="h-5" />
                        <img src="https://upload.wikimedia.org/wikipedia/commons/f/fa/American_Express_logo_%282018%29.svg" alt="Amex" className="h-6" />
                    </div>
                </div>
            </div>
        </footer>
    )
}