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
                    <div className="space-y-2">
                        <h2 className="text-4xl md:text-5xl font-black text-slate-900 uppercase italic tracking-tighter">
                            Página não encontrada
                        </h2>
                        <p className="text-slate-500 max-w-sm mx-auto font-medium text-lg">
                            Desculpe, a página que você está procurando não existe ou foi movida.
                        </p>
                    </div>

                    <Link
                        href="/"
                        className="inline-block bg-blue-600 text-white px-10 py-4 rounded-2xl font-black uppercase tracking-widest shadow-xl shadow-blue-200 hover:bg-blue-700 hover:scale-105 transition-all active:scale-95"
                    >
                        Voltar ao Início
                    </Link>
                </div>
            </main>
        </div>
    )
}