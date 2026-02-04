import { Check, Zap, ShieldCheck, Star, HelpCircle } from "lucide-react"
import Link from "next/link"

export function StaticContent() {
    return (
        <>
            {/* SECTION: HOW TO */}
            <section className="py-24 bg-white border-y border-slate-100">
                <div className="max-w-7xl mx-auto px-6">
                    <h2 className="text-3xl md:text-4xl font-black text-center mb-16 italic">
                        Como usar nosso <span className="text-blue-600">removedor de marca d&apos;água online</span> para tirar marca d&apos;água passo a passo
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
                        <FeatureCard icon={<ShieldCheck className="text-emerald-500" />} title="Privacidade" desc="Fotos deletadas em 24h. Removedor de marca d'água online seguro e criptografado." />
                        <FeatureCard icon={<Zap className="text-blue-500" />} title="IA Neural" desc="Removedor de marca d'água online com inpainting de ponta para pixels perfeitos." />
                        <FeatureCard icon={<Star className="text-amber-400" />} title="Teste Gratuito" desc="1 crédito gratuito para testar nosso removedor de marca d'água online." />
                        <FeatureCard icon={<Check className="text-blue-500" />} title="Fidelidade 4K" desc="Nosso removedor de marca d'água online mantém o DPI original da sua imagem." />
                    </div>
                </div>

                {/* 内部链接 CTA */}
                <div className="mt-16 text-center space-y-4">
                    <p className="text-slate-600 text-sm font-medium">
                        Pronto para começar? <Link href="/editor" className="text-blue-600 font-black hover:underline">Experimente nosso removedor de marca d&apos;água online grátis</Link> ou veja nossos <Link href="/precos" className="text-blue-600 font-black hover:underline">planos premium</Link>.
                    </p>
                </div>
            </section>

            {/* SECTION: TESTIMONIALS */}
            <section className="py-24 bg-slate-50">
                <div className="max-w-7xl mx-auto px-6">
                    <div className="text-center mb-16">
                        <h2 className="text-3xl md:text-4xl font-black italic mb-4">
                            O que nossos <span className="text-blue-600">usuários dizem</span>
                        </h2>
                        <p className="text-slate-500 font-medium">Mais de 15.000 profissionais confiam em nossa ferramenta</p>
                    </div>
                    
                    <div className="grid md:grid-cols-3 gap-8">
                        <TestimonialCard 
                            name="Marina Silva"
                            role="Fotógrafa Profissional"
                            text="Uso este removedor de marca d'água online para limpar amostras do meu portfólio. A qualidade é impressionante, não perde nada da resolução original."
                            rating={5}
                            scenario="portfolio"
                        />
                        <TestimonialCard 
                            name="Carlos Mendes"
                            role="Vendedor Mercado Livre"
                            text="Ajudou a remover logos antigos de 50+ fotos de produtos em minutos. Minha loja ficou muito mais profissional e as vendas aumentaram 30%."
                            rating={5}
                            scenario="ecommerce"
                        />
                        <TestimonialCard 
                            name="Ana Costa"
                            role="Filha dedicada"
                            text="Consegui restaurar fotos antigas da minha avó que tinham carimbos de estúdio. Ver o sorriso dela sem as marcas foi emocionante."
                            rating={5}
                            scenario="personal"
                        />
                    </div>

                    {/* Casos de uso específicos */}
                    <div className="mt-16 grid md:grid-cols-2 gap-8">
                        <div className="p-8 bg-white rounded-3xl border border-slate-100 shadow-sm">
                            <div className="flex items-center gap-3 mb-4">
                                <div className="w-10 h-10 bg-blue-100 rounded-full flex items-center justify-center">
                                    <span className="text-blue-600 font-black text-sm">💼</span>
                                </div>
                                <div>
                                    <p className="font-black text-sm">Caso E-commerce</p>
                                    <p className="text-slate-400 text-xs">Loja de Eletrônicos</p>
                                </div>
                            </div>
                            <p className="text-slate-600 text-sm italic leading-relaxed">
                                "Precisava remover logos de fornecedores de 200+ fotos de produtos. Em 1 hora estava tudo pronto. 
                                Antes levava dias no Photoshop. Resultado: +40% nas conversões."
                            </p>
                        </div>

                        <div className="p-8 bg-white rounded-3xl border border-slate-100 shadow-sm">
                            <div className="flex items-center gap-3 mb-4">
                                <div className="w-10 h-10 bg-green-100 rounded-full flex items-center justify-center">
                                    <span className="text-green-600 font-black text-sm">❤️</span>
                                </div>
                                <div>
                                    <p className="font-black text-sm">Caso Pessoal</p>
                                    <p className="text-slate-400 text-xs">Memórias de Família</p>
                                </div>
                            </div>
                            <p className="text-slate-600 text-sm italic leading-relaxed">
                                "Fotos do casamento dos meus pais de 1985 tinham marca d'água do estúdio. 
                                Consegui limpar tudo e fazer um álbum surpresa para o aniversário de 40 anos deles."
                            </p>
                        </div>
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
                    <FaqItem
                        q="Por que escolher nosso removedor de marca d'água online?"
                        a="Nosso removedor de marca d'água online é o mais avançado do Brasil, usando IA neural para resultados profissionais. Diferente de outros removedores de marca d'água online, garantimos qualidade 4K e total privacidade dos seus arquivos."
                    />
                    <FaqItem
                        q="Quantos créditos gratuitos recebo?"
                        a="Novos usuários recebem 1 crédito gratuito para testar nossa ferramenta. Cada crédito permite remover marca d'água de uma foto em alta qualidade. Após o teste, oferecemos planos flexíveis para uso contínuo."
                    />
                    <FaqItem
                        q="Como funciona o removedor de marca d'água online?"
                        a="Nosso removedor de marca d'água online usa tecnologia de inpainting neural para reconstruir texturas automaticamente. Basta fazer upload da foto e a ferramenta remove marca d'água em segundos com qualidade profissional."
                    />
                    <FaqItem
                        q="É seguro usar o removedor de marca d'água online?"
                        a="Totalmente. Seguimos a LGPD, usamos conexão SSL criptografada e deletamos suas fotos em 24h após processar."
                    />
                    <FaqItem
                        q="Funciona para apagar marca d'água de vídeos?"
                        a="Atualmente focamos 100% em imagens estáticas (JPG, PNG, WebP). Para vídeos, recomendamos ferramentas especializadas."
                    />
                </div>
            </section>
        </>
    )
}

function TestimonialCard({ name, role, text, rating, scenario }: { 
  name: string, 
  role: string, 
  text: string, 
  rating: number,
  scenario?: string 
}) {
    const getScenarioColor = (scenario?: string) => {
        switch (scenario) {
            case 'ecommerce': return 'bg-blue-100 text-blue-600'
            case 'personal': return 'bg-green-100 text-green-600'
            case 'portfolio': return 'bg-purple-100 text-purple-600'
            default: return 'bg-blue-100 text-blue-600'
        }
    }

    return (
        <div className="p-8 bg-white rounded-3xl border border-slate-100 shadow-sm">
            <div className="flex items-center gap-1 mb-4">
                {Array.from({ length: rating }, (_, i) => (
                    <Star key={i} className="w-4 h-4 text-yellow-400 fill-current" />
                ))}
            </div>
            <p className="text-slate-600 text-sm font-medium italic mb-6 leading-relaxed">"{text}"</p>
            <div className="flex items-center gap-3">
                <div className={`w-10 h-10 rounded-full flex items-center justify-center ${getScenarioColor(scenario)}`}>
                    <span className="font-black text-sm">{name.charAt(0)}</span>
                </div>
                <div>
                    <p className="font-black text-sm">{name}</p>
                    <p className="text-slate-400 text-xs font-medium">{role}</p>
                </div>
            </div>
        </div>
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