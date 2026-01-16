import { Check, Zap, ShieldCheck, Star, HelpCircle } from "lucide-react"
import Link from "next/link"

export function StaticContent() {
    return (
        <>
            {/* SECTION: HOW TO */}
            <section className="py-24 bg-white border-y border-slate-100">
                <div className="max-w-7xl mx-auto px-6">
                    <h2 className="text-3xl md:text-4xl font-black text-center mb-16 italic">
                        Como remover marca d&apos;água de foto <span className="text-blue-600">passo a passo</span>
                    </h2>
                    <div className="grid md:grid-cols-3 gap-8">
                        {[
                            { t: "Upload", d: "Selecione a imagem ou arraste para a área acima." },
                            { t: "Processamento", d: "Nossa IA reconstrói as texturas automaticamente." },
                            { t: "Download", d: "Baixe sua foto limpa em alta resolução." },
                        ].map((item, i) => (
                            <div key={i} className="relative p-10 bg-gray-50 rounded-[40px] border border-slate-100 group">
                                <span className="text-6xl font-black text-blue-600/5 absolute top-6 right-8 italic">{i + 1}</span>
                                <h3 className="text-xl font-black mb-4">{item.t}</h3>
                                <p className="text-slate-500 text-sm font-medium">{item.d}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* SECTION: WHY US */}
            <section className="max-w-7xl mx-auto px-6 py-24">
                <div className="grid lg:grid-cols-3 gap-16 items-start">
                    <h2 className="text-4xl font-black italic leading-tight">Dicas profissionais <br /><span className="text-blue-600">sem perda de qualidade</span></h2>
                    <div className="lg:col-span-2 grid sm:grid-cols-2 gap-6">
                        <FeatureCard icon={<ShieldCheck className="text-emerald-500" />} title="Privacidade" desc="Fotos deletadas em 24h. Seguro e criptografado." />
                        <FeatureCard icon={<Zap className="text-blue-500" />} title="IA Neural" desc="Inpainting de ponta para pixels perfeitos." />
                        <FeatureCard icon={<Star className="text-amber-400" />} title="100% Grátis" desc="Créditos diários para todos os usuários." />
                        <FeatureCard icon={<Check className="text-blue-500" />} title="Fidelidade 4K" desc="Mantemos o DPI original da sua imagem." />
                    </div>
                </div>
            </section>

            {/* SECTION: FAQ (使用原生 HTML 实现，零 JS) */}
            <section className="max-w-4xl mx-auto px-6 py-24">
                <div className="text-center mb-16">
                    <HelpCircle className="w-12 h-12 text-blue-600 opacity-20 mx-auto mb-4" />
                    <h2 className="text-4xl font-black italic">Perguntas Frequentes</h2>
                </div>
                <div className="space-y-4">
                    <FaqItem q="É realmente gratuito?" a="Sim, o RemoverMarca.com oferece uma versão gratuita com créditos diários." />
                    <FaqItem q="Funciona em vídeos?" a="Atualmente focamos 100% em imagens estáticas (JPG, PNG, WebP)." />
                    <FaqItem q="É seguro?" a="Totalmente. Seguimos a LGPD e usamos conexão SSL criptografada." />
                </div>
            </section>
        </>
    )
}

function FeatureCard({ icon, title, desc }: { icon: any, title: string, desc: string }) {
    return (
        <div className="p-8 bg-white rounded-3xl border border-slate-100 shadow-sm space-y-4">
            <div className="w-12 h-12 bg-slate-50 rounded-2xl flex items-center justify-center">{icon}</div>
            <h3 className="font-black">{title}</h3>
            <p className="text-slate-500 text-xs font-medium">{desc}</p>
        </div>
    )
}

function FaqItem({ q, a }: { q: string, a: string }) {
    return (
        <details className="group bg-white rounded-3xl border border-slate-100 overflow-hidden transition-all">
            <summary className="flex items-center justify-between p-6 cursor-pointer list-none font-black text-sm uppercase tracking-widest group-hover:text-blue-600">
                {q} <span className="text-blue-600 transition-transform group-open:rotate-45">+</span>
            </summary>
            <div className="px-6 pb-6 text-slate-500 text-sm italic border-t border-slate-50 pt-4">{a}</div>
        </details>
    )
}