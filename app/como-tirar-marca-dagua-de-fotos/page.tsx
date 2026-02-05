import type { Metadata } from "next"
import { Header } from "@/components/header"
import { UploadArea } from "@/components/upload-area"
import { UploadTrigger } from "@/components/upload-trigger"
import { BeforeAfterSlider } from "@/components/before-after-slider"
import Link from "next/link"
import {
    Plus,
    Upload,
    ArrowRight,
    Sparkles,
    MousePointer2,
    Download,
    Zap,
    CheckCircle2,
    Camera,
    ShoppingBag,
    Share2
} from "lucide-react"

export const metadata: Metadata = {
    title: "Como Tirar Marca d'Água de Fotos: Guia Completo 2026 | IA Grátis",
    description: "Aprenda como tirar marca d'água de fotos e como tirar a marca d'água de uma foto com IA. Ferramenta gratuita para fotógrafos. Remova logos instantaneamente!",
    keywords: [
        "como tirar marca d'água de fotos",
        "como tirar marca d'água de foto",
        "como tirar marca d água de fotos",
        "como tirar a marca d'água de uma foto",
        "como tirar marca d'água de fotos de fotógrafos",
        "tem como tirar marca d'água de foto",
        "como tirar marca d água de foto"
    ],
    alternates: {
        canonical: "https://removermarca.com/como-tirar-marca-dagua-de-fotos",
    },
    openGraph: {
        title: "Como Tirar Marca d'Água de Fotos: Guia Completo 2026",
        description: "Aprenda como tirar marca d'água de fotos com IA. Ferramenta gratuita para fotógrafos e criadores.",
        url: "https://removermarca.com/como-tirar-marca-dagua-de-fotos",
        images: [
            {
                url: "https://removermarca.com/og-como-tirar-marca-dagua.png",
                width: 1200,
                height: 630,
                alt: "Como tirar marca d'água de fotos com IA",
            },
        ],
    }
}

export default function ComoTirarMarcaDaguaDeFotos() {
    // Structured Data for SEO
    const faqSchema = {
        "@context": "https://schema.org",
        "@type": "FAQPage",
        "mainEntity": [
            {
                "@type": "Question",
                "name": "Como tirar marca d'água de fotos sem perder qualidade?",
                "acceptedAnswer": {
                    "@type": "Answer",
                    "text": "Nossa tecnologia utiliza Redes Neurais Convolucionais que recriam a informação perdida pixel por pixel, mantendo a resolução original de até 4K. Diferente de ferramentas básicas, nossa IA analisa o contexto ao redor da marca d'água para reconstruir texturas e padrões de forma natural."
                }
            },
            {
                "@type": "Question",
                "name": "Como tirar marca d'água de fotos de fotógrafos profissionais?",
                "acceptedAnswer": {
                    "@type": "Answer",
                    "text": "Para fotos profissionais, recomendamos usar nossa ferramenta em imagens com pelo menos 1080p. A IA funciona melhor com mais detalhes para reconstruir. Importante: sempre respeite os direitos autorais e use apenas em fotos que você tem permissão para editar."
                }
            },
            {
                "@type": "Question",
                "name": "Tem como tirar marca d'água de foto no celular?",
                "acceptedAnswer": {
                    "@type": "Answer",
                    "text": "Sim! Nossa ferramenta é totalmente otimizada para dispositivos móveis. Funciona perfeitamente em navegadores iOS (Safari) e Android (Chrome) sem necessidade de download de aplicativo. O processamento é feito na nuvem, então funciona em qualquer celular."
                }
            }
        ]
    }

    const howToSchema = {
        "@context": "https://schema.org",
        "@type": "HowTo",
        "name": "Como Tirar Marca d'Água de Fotos com IA",
        "description": "Guia passo a passo para remover marca d'água de fotos usando inteligência artificial",
        "image": "https://removermarca.com/og-como-tirar-marca-dagua.png",
        "totalTime": "PT3M",
        "estimatedCost": {
            "@type": "MonetaryAmount",
            "currency": "BRL",
            "value": "0"
        },
        "supply": [
            {
                "@type": "HowToSupply",
                "name": "Foto com marca d'água"
            }
        ],
        "tool": [
            {
                "@type": "HowToTool",
                "name": "RemoverMarca.com"
            }
        ],
        "step": [
            {
                "@type": "HowToStep",
                "name": "Upload da Imagem",
                "text": "Arraste sua foto ou clique para selecionar do seu dispositivo",
                "image": "https://removermarca.com/step1-upload.png"
            },
            {
                "@type": "HowToStep",
                "name": "Marque a Área",
                "text": "Use nossa ferramenta de pincel para destacar a marca d'água",
                "image": "https://removermarca.com/step2-mark.png"
            },
            {
                "@type": "HowToStep",
                "name": "Processamento IA",
                "text": "Nossa inteligência artificial remove e reconstrói a área em segundos",
                "image": "https://removermarca.com/step3-process.png"
            },
            {
                "@type": "HowToStep",
                "name": "Download HD",
                "text": "Baixe sua foto limpa em alta resolução, pronta para uso",
                "image": "https://removermarca.com/step4-download.png"
            }
        ]
    }

    const articleSchema = {
        "@context": "https://schema.org",
        "@type": "Article",
        "headline": "Como Tirar Marca d'Água de Fotos: Guia Completo 2026",
        "description": "Aprenda como tirar marca d'água de fotos e como tirar a marca d'água de uma foto com IA. Ferramenta gratuita para fotógrafos.",
        "image": "https://removermarca.com/og-como-tirar-marca-dagua.png",
        "author": {
            "@type": "Organization",
            "name": "RemoverMarca",
            "url": "https://removermarca.com"
        },
        "publisher": {
            "@type": "Organization",
            "name": "RemoverMarca",
            "logo": {
                "@type": "ImageObject",
                "url": "https://removermarca.com/logo.png"
            }
        },
        "datePublished": "2026-02-05",
        "dateModified": "2026-02-05",
        "mainEntityOfPage": {
            "@type": "WebPage",
            "@id": "https://removermarca.com/como-tirar-marca-dagua-de-fotos"
        }
    }

    return (
        <div className="min-h-screen bg-white">
            {/* Structured Data */}
            <script
                type="application/ld+json"
                dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
            />
            <script
                type="application/ld+json"
                dangerouslySetInnerHTML={{ __html: JSON.stringify(howToSchema) }}
            />
            <script
                type="application/ld+json"
                dangerouslySetInnerHTML={{ __html: JSON.stringify(articleSchema) }}
            />

            <Header />

            <main className="pt-16">
                {/* Hero Section - Clean & Minimal */}
                <section className="max-w-6xl mx-auto px-6 py-20">
                    <div className="text-center mb-16">
                        <div className="inline-flex items-center gap-2 bg-blue-50 px-3 py-1 rounded-full mb-6">
                            <Sparkles size={12} className="text-blue-600" />
                            <span className="text-xs font-semibold text-blue-700">IA Avançada</span>
                        </div>

                        <h1 className="text-4xl md:text-6xl font-bold text-gray-900 mb-6 leading-tight">
                            Como tirar marca d&apos;água de fotos
                            <span className="text-blue-600"> com IA</span>
                        </h1>

                        <p className="text-xl text-gray-600 max-w-3xl mx-auto mb-12 leading-relaxed">
                            Remova marcas d&apos;água, logos e textos de qualquer foto em segundos.
                            Qualidade profissional, 100% gratuito.
                        </p>
                    </div>

                    {/* Upload Area - Canva Style */}
                    <div className="max-w-2xl mx-auto mb-20">
                        <div className="bg-gray-50 border-2 border-dashed border-gray-200 rounded-2xl p-12 hover:border-blue-300 hover:bg-blue-50/30 transition-all duration-300">
                            <UploadArea
                                buttonText="Escolher foto"
                                dragText="Arraste sua foto aqui"
                                pasteLabel="ou cole com"
                                pasteAction="Ctrl+V"
                                locale="pt"
                            />
                        </div>
                        <div className="flex justify-center gap-4 mt-4">
                            <span className="text-xs text-gray-500 bg-gray-100 px-2 py-1 rounded">JPG</span>
                            <span className="text-xs text-gray-500 bg-gray-100 px-2 py-1 rounded">PNG</span>
                            <span className="text-xs text-gray-500 bg-gray-100 px-2 py-1 rounded">WEBP</span>
                        </div>
                    </div>

                    {/* Before/After Demo */}
                    <div className="grid md:grid-cols-2 gap-12 items-center mb-20">
                        <div className="relative">
                            <div className="absolute -top-3 -left-2 bg-blue-600 text-white px-3 py-1 rounded-lg shadow-xl z-20 text-xs font-bold tracking-wide flex items-center gap-2 uppercase">
                                <MousePointer2 className="w-3 h-3" /> Antes / Depois
                            </div>
                            <div className="rounded-xl overflow-hidden shadow-lg border-4 border-white bg-white">
                                <BeforeAfterSlider />
                            </div>
                        </div>
                        <div className="space-y-6">
                            <h2 className="text-3xl font-bold text-gray-900">
                                Resultados profissionais em segundos
                            </h2>
                            <div className="space-y-4">
                                <div className="flex items-start gap-3">
                                    <CheckCircle2 className="text-green-500 mt-1 flex-shrink-0" size={20} />
                                    <div>
                                        <h3 className="font-semibold text-gray-900">Remoção inteligente</h3>
                                        <p className="text-gray-600">IA reconstrói automaticamente o fundo</p>
                                    </div>
                                </div>
                                <div className="flex items-start gap-3">
                                    <CheckCircle2 className="text-green-500 mt-1 flex-shrink-0" size={20} />
                                    <div>
                                        <h3 className="font-semibold text-gray-900">Qualidade 4K</h3>
                                        <p className="text-gray-600">Mantém a resolução original da foto</p>
                                    </div>
                                </div>
                                <div className="flex items-start gap-3">
                                    <CheckCircle2 className="text-green-500 mt-1 flex-shrink-0" size={20} />
                                    <div>
                                        <h3 className="font-semibold text-gray-900">100% seguro</h3>
                                        <p className="text-gray-600">Suas fotos são deletadas após o processamento</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>

                {/* How it works - Simple Steps */}
                <section className="bg-gray-50 py-20">
                    <div className="max-w-6xl mx-auto px-6">
                        <div className="text-center mb-16">
                            <h2 className="text-3xl font-bold text-gray-900 mb-4">
                                Como funciona
                            </h2>
                            <p className="text-gray-600 text-lg">
                                Processo simples em 3 passos
                            </p>
                        </div>

                        <div className="grid md:grid-cols-3 gap-8">
                            {[
                                {
                                    step: "1",
                                    title: "Faça upload",
                                    desc: "Escolha a foto com marca d'água",
                                    icon: <Upload size={24} />
                                },
                                {
                                    step: "2",
                                    title: "IA processa",
                                    desc: "Algoritmo remove automaticamente",
                                    icon: <Sparkles size={24} />
                                },
                                {
                                    step: "3",
                                    title: "Baixe o resultado",
                                    desc: "Foto limpa em alta qualidade",
                                    icon: <Download size={24} />
                                }
                            ].map((item, i) => (
                                <div key={i} className="text-center">
                                    <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4 text-blue-600">
                                        {item.icon}
                                    </div>
                                    <div className="text-sm font-semibold text-blue-600 mb-2">PASSO {item.step}</div>
                                    <h3 className="text-xl font-semibold text-gray-900 mb-2">{item.title}</h3>
                                    <p className="text-gray-600">{item.desc}</p>
                                </div>
                            ))}
                        </div>

                        <div className="text-center mt-12">
                            <UploadTrigger
                                className="bg-blue-600 text-white px-8 py-3 rounded-lg font-semibold hover:bg-blue-700 transition-colors inline-flex items-center gap-2"
                                locale="pt"
                            >
                                Começar agora <ArrowRight size={16} />
                            </UploadTrigger>
                        </div>
                    </div>
                </section>

                {/* Content Section - Clean & Modern */}
                <section className="py-20">
                    <div className="max-w-6xl mx-auto px-6">
                        <div className="text-center mb-16">
                            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
                                Guia completo: Como tirar marca d&apos;água de fotos
                            </h2>
                            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
                                Entenda por que somos a ferramenta favorita de milhares de criadores de conteúdo
                            </p>
                        </div>

                        <div className="grid lg:grid-cols-4 gap-8">
                            {/* Main Content */}
                            <div className="lg:col-span-3 space-y-8">
                                {/* For Photographers */}
                                <article className="bg-white border border-gray-200 rounded-xl p-8">
                                    <div className="flex items-center gap-3 mb-6">
                                        <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center">
                                            <Camera className="text-blue-600" size={24} />
                                        </div>
                                        <h3 className="text-2xl font-bold text-gray-900">
                                            Como Tirar Marca d&apos;Água de Fotos de Fotógrafos
                                        </h3>
                                    </div>
                                    <p className="text-gray-600 leading-relaxed mb-6">
                                        Muitos profissionais precisam saber <strong>como tirar marca d&apos;água de fotos de fotógrafos</strong> para
                                        apresentações limpas ou restauração de portfólio. Nossa ferramenta de IA lida perfeitamente com essa necessidade,
                                        preservando a granulometria do sensor e o balanço de cores original.
                                    </p>
                                    <p className="text-gray-600 leading-relaxed mb-6">
                                        Diferente de métodos de clonagem tradicionais do Photoshop, nossa IA entende o contexto da iluminação e textura,
                                        tornando a remoção imperceptível até para olhos treinados. Isso é especialmente importante quando você precisa saber
                                        <strong> como tirar a marca d&apos;água de uma foto</strong> profissional.
                                    </p>
                                    <div className="bg-blue-50 border border-blue-200 rounded-lg p-4">
                                        <h4 className="font-semibold text-blue-900 mb-2">💡 Dica Profissional</h4>
                                        <p className="text-blue-800 text-sm">
                                            Para melhores resultados ao remover marcas d&apos;água de fotos de fotógrafos, certifique-se de que a imagem
                                            tenha pelo menos 1080p de resolução. Nossa IA funciona melhor com mais detalhes para reconstruir.
                                        </p>
                                    </div>
                                </article>

                                {/* For E-commerce */}
                                <article className="bg-white border border-gray-200 rounded-xl p-8">
                                    <div className="flex items-center gap-3 mb-6">
                                        <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center">
                                            <ShoppingBag className="text-blue-600" size={24} />
                                        </div>
                                        <h3 className="text-2xl font-bold text-gray-900">
                                            Tem Como Tirar Marca d&apos;Água de Foto para E-commerce?
                                        </h3>
                                    </div>
                                    <p className="text-gray-600 leading-relaxed mb-6">
                                        Sim! Se você é um lojista e deseja saber <strong>como tirar marca d água de fotos</strong> para unificar o catálogo
                                        de produtos, esta é a ferramenta definitiva. Remova logos de fornecedores, carimbos de data e marcas d&apos;água instantaneamente.
                                    </p>
                                    <p className="text-gray-600 leading-relaxed mb-6">
                                        Um visual limpo aumenta a conversão de vendas em até 40%. Economize horas de trabalho manual com nossa tecnologia de
                                        processamento em lote. Muitos empreendedores perguntam <strong>&quot;tem como tirar marca d&apos;água de foto&quot;</strong> -
                                        a resposta é sim, e de forma profissional.
                                    </p>
                                    <div className="grid md:grid-cols-2 gap-4">
                                        <div className="bg-green-50 border border-green-200 rounded-lg p-4">
                                            <h5 className="font-semibold text-green-800 mb-1">✅ Permitido</h5>
                                            <p className="text-green-700 text-sm">Fotos próprias, imagens licenciadas, produtos de fornecedores autorizados</p>
                                        </div>
                                        <div className="bg-red-50 border border-red-200 rounded-lg p-4">
                                            <h5 className="font-semibold text-red-800 mb-1">❌ Não Recomendado</h5>
                                            <p className="text-red-700 text-sm">Imagens protegidas por direitos autorais de terceiros</p>
                                        </div>
                                    </div>
                                </article>

                                {/* For Social Media */}
                                <article className="bg-white border border-gray-200 rounded-xl p-8">
                                    <div className="flex items-center gap-3 mb-6">
                                        <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center">
                                            <Share2 className="text-blue-600" size={24} />
                                        </div>
                                        <h3 className="text-2xl font-bold text-gray-900">
                                            Como Tirar Marca d&apos;Água de Foto para Redes Sociais
                                        </h3>
                                    </div>
                                    <p className="text-gray-600 leading-relaxed mb-6">
                                        Criadores de conteúdo frequentemente precisam saber <strong>como tirar marca d água de foto</strong> para criar posts
                                        mais limpos e profissionais. Nossa ferramenta é perfeita para remover logos de bancos de imagem, carimbos de data de
                                        câmeras antigas, ou marcas d&apos;água de aplicativos.
                                    </p>

                                    <div className="bg-gray-50 rounded-lg p-6">
                                        <h4 className="font-semibold text-gray-900 mb-4">Processo passo a passo:</h4>
                                        <div className="space-y-3">
                                            {[
                                                "Upload da Imagem - Arraste sua foto ou clique para selecionar do seu dispositivo",
                                                "Marque a Área - Use nossa ferramenta de pincel para destacar a marca d'água",
                                                "Processamento IA - Nossa inteligência artificial remove e reconstrói a área em segundos",
                                                "Download HD - Baixe sua foto limpa em alta resolução, pronta para uso"
                                            ].map((step, i) => (
                                                <div key={i} className="flex items-start gap-3">
                                                    <div className="w-6 h-6 bg-blue-600 text-white rounded-full flex items-center justify-center text-sm font-semibold flex-shrink-0 mt-0.5">
                                                        {i + 1}
                                                    </div>
                                                    <span className="text-gray-700">{step}</span>
                                                </div>
                                            ))}
                                        </div>
                                    </div>
                                </article>

                                {/* Performance Stats */}
                                <div className="grid md:grid-cols-2 gap-6">
                                    <div className="bg-white border border-gray-200 rounded-xl p-8 text-center">
                                        <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                                            <Zap className="text-blue-600" size={32} />
                                        </div>
                                        <h4 className="text-2xl font-bold text-gray-900 mb-2">Velocidade Extrema</h4>
                                        <p className="text-gray-600">
                                            Nossa infraestrutura de GPU permite processar imagens 4K em menos de 3 segundos.
                                            Ideal para quem precisa saber como tirar marca d&apos;água de foto rapidamente.
                                        </p>
                                    </div>
                                    <div className="bg-blue-600 text-white rounded-xl p-8 text-center">
                                        <div className="text-4xl font-bold mb-2">99.9%</div>
                                        <p className="text-blue-100 text-sm uppercase tracking-wide">Taxa de sucesso na remoção de objetos</p>
                                    </div>
                                </div>
                            </div>

                            {/* Sidebar */}
                            <div className="space-y-6">
                                <div className="bg-white border border-gray-200 rounded-xl p-6">
                                    <h4 className="text-xl font-bold text-gray-900 mb-4 text-center">🚀 Comece Agora</h4>
                                    <UploadTrigger
                                        className="w-full bg-blue-600 text-white text-center py-3 rounded-lg font-semibold hover:bg-blue-700 transition-colors mb-4"
                                        locale="pt"
                                    >
                                        Remover Marca d&apos;Água Grátis
                                    </UploadTrigger>
                                    <p className="text-sm text-gray-500 text-center">✅ Sem cadastro • ✅ Processamento seguro • ✅ Resultado em HD</p>
                                </div>

                                <div className="bg-gradient-to-br from-blue-600 to-blue-700 text-white rounded-xl p-6">
                                    <h4 className="text-lg font-bold mb-4">📊 Estatísticas</h4>
                                    <div className="space-y-3">
                                        <div className="flex justify-between items-center">
                                            <span className="text-blue-100">Fotos processadas</span>
                                            <span className="text-2xl font-bold">2.5M+</span>
                                        </div>
                                        <div className="flex justify-between items-center">
                                            <span className="text-blue-100">Taxa de sucesso</span>
                                            <span className="text-2xl font-bold">99.2%</span>
                                        </div>
                                        <div className="flex justify-between items-center">
                                            <span className="text-blue-100">Tempo médio</span>
                                            <span className="text-2xl font-bold">3.2s</span>
                                        </div>
                                    </div>
                                </div>

                                <div className="bg-white border border-gray-200 rounded-xl p-6">
                                    <h4 className="text-lg font-bold text-gray-900 mb-4">🔗 Ferramentas Relacionadas</h4>
                                    <div className="space-y-3">
                                        <Link href="/removedor-de-marca-dagua-de-imagem" className="block p-3 bg-gray-50 rounded-lg hover:bg-gray-100 transition-colors">
                                            <div className="font-semibold text-sm text-gray-900">Removedor HD</div>
                                            <div className="text-xs text-gray-600">Processamento em 4K</div>
                                        </Link>
                                        <Link href="/como-remover-marca-dagua-de-foto" className="block p-3 bg-gray-50 rounded-lg hover:bg-gray-100 transition-colors">
                                            <div className="font-semibold text-sm text-gray-900">Tutorial Completo</div>
                                            <div className="text-xs text-gray-600">Guia passo a passo</div>
                                        </Link>
                                        <Link href="/tirar-marca-dagua-online-gratis" className="block p-3 bg-gray-50 rounded-lg hover:bg-gray-100 transition-colors">
                                            <div className="font-semibold text-sm text-gray-900">Versão Gratuita</div>
                                            <div className="text-xs text-gray-600">Sem limitações</div>
                                        </Link>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div className="text-center mt-12">
                            <UploadTrigger
                                className="bg-blue-600 text-white px-8 py-3 rounded-lg font-semibold hover:bg-blue-700 transition-colors inline-flex items-center gap-2"
                                locale="pt"
                            >
                                Experimentar grátis <ArrowRight size={16} />
                            </UploadTrigger>
                        </div>
                    </div>
                </section>

                {/* Step-by-Step Process - Clean Design */}
                <section className="bg-gray-50 py-20">
                    <div className="max-w-6xl mx-auto px-6">
                        <div className="text-center mb-16">
                            <h2 className="text-3xl font-bold text-gray-900 mb-4">Como Tirar Marca d&apos;Água de Fotos: Passo a Passo</h2>
                            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
                                Remover marca d&apos;água de fotos é simples com nossa ferramenta de IA. Siga este processo de 4 etapas.
                            </p>
                        </div>

                        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
                            {[
                                {
                                    step: "1",
                                    title: "Upload da Imagem",
                                    icon: <Upload size={24} />,
                                    desc: "Selecione a foto com marca d'água do seu dispositivo ou arraste para nossa interface.",
                                    time: "30 segundos"
                                },
                                {
                                    step: "2",
                                    title: "Marque a Área",
                                    icon: <MousePointer2 size={24} />,
                                    desc: "Use o pincel inteligente para destacar precisamente a marca d'água que deseja remover.",
                                    time: "1 minuto"
                                },
                                {
                                    step: "3",
                                    title: "Processamento IA",
                                    icon: <Sparkles size={24} />,
                                    desc: "Nossa inteligência artificial analisa e reconstrói a área marcada automaticamente.",
                                    time: "3 segundos"
                                },
                                {
                                    step: "4",
                                    title: "Download HD",
                                    icon: <Download size={24} />,
                                    desc: "Baixe sua foto limpa em alta resolução, sem marca d'água e pronta para uso.",
                                    time: "Instantâneo"
                                }
                            ].map((item, i) => (
                                <div key={i} className="bg-white rounded-xl p-6 text-center border border-gray-200 hover:shadow-lg transition-all">
                                    <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4 text-blue-600">
                                        {item.icon}
                                    </div>
                                    <div className="text-sm font-semibold text-blue-600 mb-2">PASSO {item.step}</div>
                                    <h3 className="text-lg font-bold text-gray-900 mb-3">{item.title}</h3>
                                    <p className="text-gray-600 text-sm leading-relaxed mb-4">{item.desc}</p>
                                    <div className="text-xs font-semibold text-blue-600 bg-blue-50 px-3 py-1 rounded-full inline-block">
                                        ⏱️ {item.time}
                                    </div>
                                </div>
                            ))}
                        </div>

                        {/* Quick Answer Block */}
                        <div className="bg-white border border-gray-200 rounded-xl p-8 text-center">
                            <h3 className="text-2xl font-bold text-gray-900 mb-4">💡 Resposta Rápida</h3>
                            <p className="text-gray-600 leading-relaxed mb-6 max-w-4xl mx-auto">
                                <strong>Para tirar marca d&apos;água de fotos</strong>: faça upload da imagem, marque a área com marca d&apos;água usando nossa ferramenta de pincel, aguarde 3 segundos para o processamento da IA, e baixe o resultado em HD. O processo completo leva menos de 2 minutos e mantém a qualidade original da foto.
                            </p>
                            <UploadTrigger
                                className="bg-blue-600 text-white px-8 py-3 rounded-lg font-semibold hover:bg-blue-700 transition-colors inline-flex items-center gap-2"
                                locale="pt"
                            >
                                Começar Agora Grátis <ArrowRight size={16} />
                            </UploadTrigger>
                        </div>
                    </div>
                </section>

                {/* Cross-sell Section - Simplified */}
                <section className="py-20">
                    <div className="max-w-6xl mx-auto px-6">
                        <div className="bg-gradient-to-r from-blue-600 to-blue-700 rounded-2xl p-12 text-white text-center">
                            <h2 className="text-3xl font-bold mb-4">Precisa remover o fundo?</h2>
                            <p className="text-blue-100 text-lg mb-8 max-w-2xl mx-auto">
                                Leve sua edição para o próximo nível com nosso removedor de fundo automático. Recortes perfeitos em um clique.
                            </p>
                            <Link href="/" className="bg-white text-blue-600 px-8 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-colors inline-flex items-center gap-2">
                                Testar Agora Gratuitamente <ArrowRight size={16} />
                            </Link>
                        </div>
                    </div>
                </section>

                {/* FAQ Section - Clean & Modern */}
                <section className="bg-gray-50 py-20">
                    <div className="max-w-4xl mx-auto px-6">
                        <div className="text-center mb-12">
                            <h2 className="text-3xl font-bold text-gray-900 mb-4">
                                Perguntas Frequentes sobre Como Tirar Marca d&apos;Água de Fotos
                            </h2>
                        </div>

                        <div className="space-y-4">
                            {[
                                {
                                    q: "Como tirar marca d'água de fotos sem perder qualidade?",
                                    a: "Nossa tecnologia utiliza Redes Neurais Convolucionais que recriam a informação perdida pixel por pixel, mantendo a resolução original de até 4K. Diferente de ferramentas básicas, nossa IA analisa o contexto ao redor da marca d'água para reconstruir texturas e padrões de forma natural."
                                },
                                {
                                    q: "Como tirar marca d'água de fotos de fotógrafos profissionais?",
                                    a: "Para fotos profissionais, recomendamos usar nossa ferramenta em imagens com pelo menos 1080p. A IA funciona melhor com mais detalhes para reconstruir. Importante: sempre respeite os direitos autorais e use apenas em fotos que você tem permissão para editar."
                                },
                                {
                                    q: "Tem como tirar marca d'água de foto no celular?",
                                    a: "Sim! Nossa ferramenta é totalmente otimizada para dispositivos móveis. Funciona perfeitamente em navegadores iOS (Safari) e Android (Chrome) sem necessidade de download de aplicativo. O processamento é feito na nuvem, então funciona em qualquer celular."
                                },
                                {
                                    q: "Como tirar a marca d'água de uma foto específica que tem logo complexo?",
                                    a: "Para logos complexos ou marcas d'água com transparência, nossa IA utiliza algoritmos de inpainting avançados. Basta marcar toda a área do logo com nossa ferramenta de pincel, e a IA irá reconstruir o fundo automaticamente, mesmo em casos complexos."
                                },
                                {
                                    q: "Como tirar marca d água de fotos em lote?",
                                    a: "Atualmente oferecemos processamento individual para garantir máxima qualidade. Para usuários que precisam processar muitas imagens, recomendamos nosso plano premium que oferece processamento mais rápido e sem limitações de uso diário."
                                },
                                {
                                    q: "É seguro usar esta ferramenta para tirar marca d'água de foto?",
                                    a: "Totalmente seguro! Todas as imagens são processadas com criptografia SSL, armazenadas temporariamente apenas durante o processamento, e automaticamente deletadas em 24 horas. Não guardamos nem compartilhamos suas fotos com terceiros."
                                },
                                {
                                    q: "Posso usar para fins comerciais depois de tirar marca d'água de fotos?",
                                    a: "A ferramenta em si pode ser usada comercialmente, mas você deve ter os direitos legais sobre a imagem original. Não remova marcas d'água de fotos protegidas por direitos autorais de terceiros. Use apenas em suas próprias fotos ou imagens licenciadas."
                                }
                            ].map((item, i) => (
                                <details key={i} className="bg-white border border-gray-200 rounded-lg">
                                    <summary className="p-6 font-semibold text-gray-900 cursor-pointer hover:bg-gray-50 flex justify-between items-center">
                                        <span>{item.q}</span>
                                        <Plus size={20} className="text-gray-400" />
                                    </summary>
                                    <div className="px-6 pb-6 text-gray-600 leading-relaxed">
                                        {item.a}
                                    </div>
                                </details>
                            ))}
                        </div>

                        <div className="text-center mt-12">
                            <UploadTrigger
                                className="bg-blue-600 text-white px-8 py-3 rounded-lg font-semibold hover:bg-blue-700 transition-colors inline-flex items-center gap-2"
                                locale="pt"
                            >
                                Começar agora <ArrowRight size={16} />
                            </UploadTrigger>
                            <p className="text-gray-500 text-sm mt-3">
                                ✅ Grátis • ✅ Sem cadastro • ✅ Resultado profissional
                            </p>
                        </div>
                    </div>
                </section>

                {/* Final Stats Section */}
                <section className="py-20">
                    <div className="max-w-6xl mx-auto px-6">
                        <div className="grid md:grid-cols-3 gap-8 text-center">
                            <div>
                                <div className="text-4xl font-bold text-blue-600 mb-2">2.5M+</div>
                                <div className="text-gray-600">Fotos processadas</div>
                            </div>
                            <div>
                                <div className="text-4xl font-bold text-blue-600 mb-2">99.2%</div>
                                <div className="text-gray-600">Taxa de sucesso</div>
                            </div>
                            <div>
                                <div className="text-4xl font-bold text-blue-600 mb-2">3s</div>
                                <div className="text-gray-600">Tempo médio</div>
                            </div>
                        </div>
                    </div>
                </section>
            </main>
        </div>
    )
}