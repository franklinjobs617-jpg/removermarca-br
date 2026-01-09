import type { Metadata } from "next"
import { Header } from "@/components/header"
import { AlertTriangle, ShieldAlert, BadgeCheck, Scale } from "lucide-react"

export const metadata: Metadata = {
  title: "Termos de Uso | RemoverMarca.com",
  description: "Leia nossos termos de uso. Regras sobre licenciamento, propriedade intelectual e nossa política de reembolso para serviços de IA.",
}

export default function TermsOfUsePage() {
  return (
    <div className="min-h-screen bg-white">
      <Header />

      <main className="max-w-[900px] mx-auto px-6 py-24 sm:py-32">
        {/* Header Section */}
        <header className="mb-16 border-b border-slate-100 pb-8 text-center sm:text-left">
          <h1 className="text-4xl sm:text-5xl font-black text-slate-900 mb-4 tracking-tighter uppercase italic">
            Termos de <span className="text-blue-600">Uso</span>
          </h1>
          <p className="text-slate-500 font-medium text-lg leading-relaxed">
            Ao acessar o <span className="text-slate-900 font-bold tracking-tight">RemoverMarca.com</span>, você concorda em cumprir e respeitar as condições estabelecidas abaixo.
          </p>
        </header>

        {/* Content Section */}
        <div className="space-y-12">
          
          {/* Section 1 */}
          <section className="group">
            <h2 className="text-xl font-black text-slate-900 mb-5 flex items-center gap-3 uppercase tracking-tight">
              <span className="w-8 h-8 bg-blue-50 text-blue-600 rounded-lg flex items-center justify-center text-sm">01</span>
              Licença de Uso e Restrições
            </h2>
            <div className="pl-11">
              <p className="text-slate-600 leading-relaxed mb-4">
                Nossa ferramenta é fornecida para facilitar a edição criativa. Ao utilizá-la, você concorda em não:
              </p>
              <ul className="grid grid-cols-1 gap-3 text-slate-600 text-sm">
                <li className="flex items-start gap-2 bg-slate-50 p-4 rounded-xl border border-slate-100">
                  <AlertTriangle className="w-5 h-5 text-amber-500 shrink-0 mt-0.5" />
                  <span>Realizar <strong>scraping</strong> em massa, automatização não autorizada ou ataques de negação de serviço (DoS).</span>
                </li>
                <li className="flex items-start gap-2 bg-slate-50 p-4 rounded-xl border border-slate-100">
                  <ShieldAlert className="w-5 h-5 text-red-500 shrink-0 mt-0.5" />
                  <span>Processar conteúdo que viole leis de direitos autorais ou contenha material abusivo, ilegal ou difamatório.</span>
                </li>
              </ul>
            </div>
          </section>

          {/* Section 2 */}
          <section className="group">
            <h2 className="text-xl font-black text-slate-900 mb-5 flex items-center gap-3 uppercase tracking-tight">
              <span className="w-8 h-8 bg-blue-50 text-blue-600 rounded-lg flex items-center justify-center text-sm">02</span>
              Propriedade Intelectual
            </h2>
            <div className="pl-11">
              <p className="text-slate-600 leading-relaxed">
                O <strong className="text-slate-900 tracking-tight">RemoverMarca.com</strong> detém todos os direitos sobre a tecnologia e algoritmos de IA. 
                <span className="block mt-3 p-4 bg-blue-50/50 rounded-xl border-l-4 border-blue-600 italic text-slate-700">
                  Importante: O usuário é o único responsável pela imagem carregada. Você deve garantir que possui os direitos ou permissões necessárias sobre a foto antes de remover qualquer marca d&apos;água.
                </span>
              </p>
            </div>
          </section>

          {/* Section 3 - Critical Information */}
          <section className="group">
            <h2 className="text-xl font-black text-slate-900 mb-5 flex items-center gap-3 uppercase tracking-tight">
              <span className="w-8 h-8 bg-blue-50 text-blue-600 rounded-lg flex items-center justify-center text-sm">03</span>
              Serviços Pagos e Reembolso
            </h2>
            <div className="pl-11">
              <p className="text-slate-600 leading-relaxed mb-6">
                Oferecemos créditos e assinaturas para processamento via IA de alta definição (4K/HD). 
              </p>
              <div className="p-6 bg-amber-50 border border-amber-200 rounded-3xl">
                <h4 className="font-black text-amber-900 uppercase text-xs tracking-widest mb-2 flex items-center gap-2">
                  <Scale className="w-4 h-4" /> Política de Reembolso
                </h4>
                <p className="text-amber-800 text-sm leading-relaxed">
                  Devido à natureza digital do serviço e ao custo imediato de processamento computacional da IA, <strong>não oferecemos reembolsos após o uso dos créditos adquiridos</strong>. Ao clicar em processar/baixar, o serviço é considerado prestado.
                </p>
              </div>
            </div>
          </section>

          {/* Section 4 */}
          <section className="group">
            <h2 className="text-xl font-black text-slate-900 mb-5 flex items-center gap-3 uppercase tracking-tight">
              <span className="w-8 h-8 bg-blue-50 text-blue-600 rounded-lg flex items-center justify-center text-sm">04</span>
              Isenção de Responsabilidade
            </h2>
            <div className="pl-11">
              <p className="text-slate-600 leading-relaxed">
                O serviço é fornecido &quot;como está&quot;. Embora nossos algoritmos sejam de ponta, não garantimos que o resultado da remoção será 100% perfeito em todos os casos, dada a complexidade técnica de certas texturas e sobreposições de imagens.
              </p>
            </div>
          </section>

        </div>

        {/* Closing */}
        <div className="mt-24 pt-12 border-t border-slate-100 flex flex-col items-center text-center">
          <BadgeCheck className="w-12 h-12 text-blue-600 mb-4 opacity-20" />
          <p className="text-slate-400 text-xs font-black uppercase tracking-[0.2em]">
            RemoverMarca.com — Termos de Uso 2026
          </p>
        </div>
      </main>

      <footer className="py-12 bg-slate-50 text-center text-slate-400 text-[10px] font-black uppercase tracking-widest">
        O uso continuado do site constitui aceitação destes termos.
      </footer>
    </div>
  )
}