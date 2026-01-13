import type { Metadata } from "next"
import { Header } from "@/components/header"
import Link from "next/link"
import { Mail, Clock, ArrowLeft, MessageSquare } from "lucide-react"

export const metadata: Metadata = {
  title: "Contato | RemoverMarca.com - Suporte e Feedback",
  description: "Tem dúvidas ou sugestões? Entre em contato com a equipe do RemoverMarca. Respondemos em até 24 horas úteis.",
}

export default function ContactPage() {
  return (
    <div className="min-h-screen bg-white">
      <Header />

      <main className="max-w-[700px] mx-auto px-6 py-24 sm:py-32">
        {/* Cabeçalho da Página */}
        <section className="text-center mb-12">
          <div className="w-16 h-16 bg-blue-50 rounded-2xl flex items-center justify-center mx-auto mb-6 text-blue-600">
            <MessageSquare size={32} strokeWidth={2.5} />
          </div>
          <h1 className="text-4xl sm:text-5xl font-black text-slate-900 mb-6 tracking-tighter uppercase italic">
            Fale <span className="text-blue-600">Conosco</span>
          </h1>
          <p className="text-lg text-slate-500 font-medium leading-relaxed italic">
            Tem alguma dúvida, sugestão ou feedback sobre nossa ferramenta de IA? 
            Adoraríamos ouvir você!
          </p>
        </section>

        {/* Cartão de Contato Central */}
        <div className="bg-slate-50 border border-slate-100 p-8 md:p-12 rounded-[40px] shadow-sm text-center relative overflow-hidden group">
          {/* Decoração sutil de fundo */}
          <div className="absolute -top-10 -right-10 w-32 h-32 bg-blue-600/5 rounded-full blur-3xl group-hover:bg-blue-600/10 transition-colors" />
          
          <div className="relative z-10 space-y-8">
            <div className="space-y-2">
              <p className="text-xs font-black text-slate-400 uppercase tracking-[0.2em]">Tempo de resposta</p>
              <p className="text-slate-700 font-bold">
                Nossa pequena equipe responde a todas as mensagens em até <span className="text-blue-600">24 horas úteis</span>.
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
                <span>Horário de Atendimento</span>
              </div>
              <p className="text-sm text-slate-500 font-medium leading-relaxed italic">
                Segunda a Sexta, das 09h às 18h <br />
                (Horário de Brasília)
              </p>
            </div>
          </div>
        </div>

        {/* Botão de Voltar */}
        <div className="mt-12 text-center">
          <Link 
            href="/" 
            className="inline-flex items-center gap-2 text-slate-400 hover:text-blue-600 font-black text-xs uppercase tracking-widest transition-colors group"
          >
            <ArrowLeft size={14} className="group-hover:-translate-x-1 transition-transform" />
            Voltar para a página inicial
          </Link>
        </div>
      </main>
    </div>
  )
}