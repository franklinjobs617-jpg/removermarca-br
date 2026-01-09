import type { Metadata } from "next"
import { Header } from "@/components/header"

export const metadata: Metadata = {
  title: "Quem Somos | RemoverMarca.com - A Nossa História",
  description: "Conheça a pequena equipe por trás do melhor removedor de marcas do Brasil. Valorizamos a simplicidade e a qualidade IA.",
}

export default function QuemSomosPage() {
  return (
    <div className="min-h-screen bg-white">
      <Header />

      <main className="max-w-[800px] mx-auto px-6 py-24 sm:py-32">
        {/* Hero Section */}
        <section className="text-center mb-16">
          <h1 className="text-4xl sm:text-5xl font-black text-slate-900 leading-tight mb-6 tracking-tighter">
            Criado por quem valoriza cada <span className="text-blue-600">detalhe</span>.
          </h1>
          <p className="text-lg text-slate-500 font-medium">
            Conheça a pequena equipe por trás do melhor removedor de marcas do Brasil.
          </p>
        </section>

        {/* Story Section */}
        <article className="prose prose-slate max-w-none mb-16">
          <p className="text-lg leading-relaxed text-slate-700 mb-6">
            Olá! Nós somos a equipe do <strong className="text-slate-900">RemoverMarca.com</strong>. Diferente das grandes corporações, somos um time &quot;pequeno e focado&quot; — o que chamamos de <i className="italic">small and beautiful</i>.
          </p>
          
          <p className="text-lg leading-relaxed text-slate-700 mb-6">
            A nossa jornada começou com uma frustração comum: queríamos restaurar fotos de família e produtos de e-commerce, mas só encontrávamos ferramentas lentas, cheias de anúncios invasivos ou extremamente complexas.
          </p>

          <p className="text-lg leading-relaxed text-slate-700 mb-6">
            Decidimos, então, usar nossa expertise em IA para criar algo diferente. No RemoverMarca, acreditamos na <strong className="text-slate-900 text-blue-600/90 underline decoration-blue-200 underline-offset-4 decoration-4">simplicidade radical</strong>. Nosso objetivo não é ser o site com mais botões, mas sim o site que resolve o seu problema no menor tempo possível, com a maior qualidade possível.
          </p>
        </article>

        {/* Values Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 mt-12">
          <div className="p-8 bg-slate-50 rounded-3xl border-l-4 border-blue-600 shadow-sm transition-hover hover:shadow-md transition-all">
            <h3 className="text-xl font-black text-slate-900 mb-3 tracking-tight">Foco no Essencial</h3>
            <p className="text-slate-600 text-sm leading-relaxed font-medium">
              Eliminamos o excesso para que você tenha uma experiência limpa e direta. Sem distrações, apenas resultados.
            </p>
          </div>
          <div className="p-8 bg-slate-50 rounded-3xl border-l-4 border-blue-600 shadow-sm transition-hover hover:shadow-md transition-all">
            <h3 className="text-xl font-black text-slate-900 mb-3 tracking-tight">Qualidade IA</h3>
            <p className="text-slate-600 text-sm leading-relaxed font-medium">
              Nossos algoritmos são lapidados diariamente para garantir restaurações invisíveis em 4K Ultra.
            </p>
          </div>
        </div>

        {/* Closing Section */}
        <section className="mt-20 text-center border-t border-slate-100 pt-16">
          <p className="text-slate-600 mb-4 font-medium italic leading-relaxed px-4">
            &quot;Obrigado por confiar no nosso trabalho. Cada imagem que você limpa é um incentivo para continuarmos aperfeiçoando nossa ferramenta.&quot;
          </p>
          <p className="font-black text-slate-900 text-lg uppercase tracking-widest">
            Equipe RemoverMarca.com
          </p>
        </section>
      </main>

      {/* Internal Page Footer */}
      <footer className="py-12 border-t border-slate-50 text-center text-slate-400 text-sm font-bold tracking-tighter">
        © 2026 RemoverMarca.com — FEITO COM ❤️ NO BRASIL.
      </footer>
    </div>
  )
}