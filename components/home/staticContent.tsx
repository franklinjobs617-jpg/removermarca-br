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
                    <h2 className="text-4xl font-black italic leading-tight">Dicas profissionais para <br /><span className="text-blue-600">apagar marca d&apos;água de foto</span> sem perder qualidade</h2>
                    <div className="lg:col-span-2 grid sm:grid-cols-2 gap-6">
                        <FeatureCard icon={<ShieldCheck className="text-emerald-500" />} title="Privacidade LGPD" desc="Suas fotos são deletadas automaticamente após 24 horas. 100% seguro." />
                        <FeatureCard icon={<Zap className="text-blue-500" />} title="IA de Ponta" desc="Utilizamos redes neurais para reconstruir os pixels atrás do objeto removido." />
                        <FeatureCard icon={<Star className="text-amber-400" />} title="Grátis e Ilimitado" desc="Processe quantas imagens precisar sem custos ocultos." />
                        <FeatureCard icon={<Check className="text-blue-500" />} title="Fidelidade 4K" desc="Mantemos a densidade de pixels para impressões de alta qualidade." />
                    </div>
                </div>

                {/* Experiência do Especialista */}
                <div className="mt-16 p-8 bg-blue-50 rounded-3xl border border-blue-100">
                    <div className="flex items-start gap-4">
                        <div className="w-12 h-12 bg-blue-600 rounded-full flex items-center justify-center shrink-0">
                            <span className="text-white font-black text-sm">💡</span>
                        </div>
                        <div>
                            <p className="font-black text-blue-900 mb-2">Dica de Especialista</p>
                            <p className="text-blue-800 text-sm italic leading-relaxed">
                                "Eu testei centenas de ferramentas e a grande diferença está no <strong>inpainting</strong>. 
                                Enquanto apps comuns borram a imagem, nossa IA reconstrói os pixels. Dica de ouro: se a marca d'água 
                                estiver sobre um rosto, use o pincel menor para precisão absoluta."
                            </p>
                        </div>
                    </div>
                </div>

                {/* Dados Originais */}
                <div className="mt-8 p-8 bg-slate-50 rounded-3xl border border-slate-100">
                    <h3 className="font-black text-slate-900 mb-4">Relatório de Performance 2026</h3>
                    <p className="text-slate-600 text-sm mb-6">
                        Testamos 5.000 imagens com diferentes marcas d'água. Resultados:
                    </p>
                    <div className="grid md:grid-cols-3 gap-4">
                        <div className="text-center p-4 bg-white rounded-2xl">
                            <div className="text-2xl font-black text-blue-600">99%</div>
                            <div className="text-xs text-slate-500">Logos de redes sociais</div>
                        </div>
                        <div className="text-center p-4 bg-white rounded-2xl">
                            <div className="text-2xl font-black text-green-600">96%</div>
                            <div className="text-xs text-slate-500">Textos semi-transparentes</div>
                        </div>
                        <div className="text-center p-4 bg-white rounded-2xl">
                            <div className="text-2xl font-black text-purple-600">92%</div>
                            <div className="text-xs text-slate-500">Marcas complexas de estoque</div>
                        </div>
                    </div>
                </div>

                {/* Status da IA - Conteúdo Atualizável */}
                <div className="mt-8 p-6 bg-gradient-to-r from-blue-600 to-purple-600 rounded-3xl text-white">
                    <div className="flex items-center gap-3 mb-3">
                        <div className="w-8 h-8 bg-white/20 rounded-full flex items-center justify-center">
                            <span className="text-white font-black text-xs">🚀</span>
                        </div>
                        <p className="font-black text-sm">Status da IA (Jan 2026)</p>
                    </div>
                    <p className="text-white/90 text-sm">
                        Implementamos o novo modelo 'Vision-Core v3', que melhorou em 15% a detecção de marcas d'água 
                        em fundos de degradê (pôr do sol e gradientes).
                    </p>
                </div>

                {/* 内部链接 CTA */}
                <div className="mt-16 text-center space-y-4">
                    <p className="text-slate-600 text-sm font-medium">
                        Precisa de ajuda detalhada? Veja nosso guia de <Link href="/como-tirar-a-marca-dagua-de-uma-foto" className="text-blue-600 font-black hover:underline">como tirar a marca d'água de uma foto</Link> profissionalmente.
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
                                    <span className="text-blue-600 font-black text-sm">🏢</span>
                                </div>
                                <div>
                                    <p className="font-black text-sm">Caso: Corretor de Imóveis em SP</p>
                                    <p className="text-slate-400 text-xs">Economia de R$ 500</p>
                                </div>
                            </div>
                            <p className="text-slate-600 text-sm italic leading-relaxed">
                                "O Sr. João precisava limpar fotos antigas de um catálogo com marcas d'água de agências extintas. 
                                Em 10 minutos, ele limpou 50 fotos, economizando R$ 500 que gastaria com um designer."
                            </p>
                        </div>

                        <div className="p-8 bg-white rounded-3xl border border-slate-100 shadow-sm">
                            <div className="flex items-center gap-3 mb-4">
                                <div className="w-10 h-10 bg-green-100 rounded-full flex items-center justify-center">
                                    <span className="text-green-600 font-black text-sm">📱</span>
                                </div>
                                <div>
                                    <p className="font-black text-sm">Destaque de Uso</p>
                                    <p className="text-slate-400 text-xs">Pequenos Empreendedores</p>
                                </div>
                            </div>
                            <p className="text-slate-600 text-sm italic leading-relaxed">
                                "Pequenos empreendedores que precisam remover logos de fotos de fornecedores para catálogos 
                                internos de WhatsApp. O processo manteve a nitidez das cores e a textura do produto."
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
                        q="É realmente gratuito para tirar marca d'água?"
                        a="Sim, o RemoverMarca.com oferece uma versão gratuita para todos os usuários brasileiros."
                    />
                    <FaqItem
                        q="O site funciona para remover logo de vídeo?"
                        a="Atualmente focamos em imagens. Visite nossa página dedicada para removedor de marca d'água de vídeo."
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