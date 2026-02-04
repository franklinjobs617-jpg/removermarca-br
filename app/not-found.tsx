import Link from 'next/link'
import { Header } from '@/components/header'

export default function NotFound() {
    return (
        <div className="min-h-screen bg-white flex flex-col">
            <Header />
            <main className="grow flex flex-col items-center justify-center px-6 text-center relative overflow-hidden">
                {/* 背景大字 404 */}
                <h1 className="text-[12rem] md:text-[20rem] font-black text-slate-50 absolute z-0 select-none">
                    404
                </h1>

                <div className="relative z-10 space-y-8">
                    <div className="space-y-4">
                        <h2 className="text-4xl md:text-5xl font-black text-slate-900 uppercase italic tracking-tighter">
                            Ops! Essa marca d'água sumiu junto com a página.
                        </h2>
                        <p className="text-slate-500 max-w-lg mx-auto font-medium text-lg leading-relaxed">
                            Parece que o link que você tentou acessar não existe ou foi movido. Mas não se preocupe, nossa Inteligência Artificial continua pronta para limpar suas fotos!
                        </p>
                    </div>

                    <div className="flex flex-col sm:flex-row gap-4 justify-center">
                        <Link
                            href="/"
                            className="inline-block bg-blue-600 text-white px-8 py-4 rounded-2xl font-black uppercase tracking-widest shadow-xl shadow-blue-200 hover:bg-blue-700 hover:scale-105 transition-all active:scale-95"
                        >
                            Ir para a Página Inicial
                        </Link>
                        <Link
                            href="/tirar-marca-dagua-online-gratis"
                            className="inline-block bg-slate-100 text-slate-700 px-8 py-4 rounded-2xl font-black uppercase tracking-widest border border-slate-200 hover:bg-slate-200 hover:scale-105 transition-all active:scale-95"
                        >
                            Ferramenta Gratuita
                        </Link>
                    </div>

                    <div className="mt-12 text-center">
                        <p className="text-slate-400 text-xs font-bold uppercase tracking-[0.2em]">
                            © 2026 RemoverMarca.com | Tecnologia e Simplicidade.
                        </p>
                    </div>
                </div>
            </main>
        </div>
    )
}