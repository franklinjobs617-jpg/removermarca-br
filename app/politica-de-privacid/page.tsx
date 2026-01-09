import type { Metadata } from "next"
import { Header } from "@/components/header"

export const metadata: Metadata = {
  title: "Política de Privacidade | RemoverMarca.com",
  description: "Saiba como protegemos seus dados e imagens. Informações sobre cookies, Google AdSense e conformidade com a LGPD no Brasil.",
}

export default function PrivacyPolicyPage() {
  return (
    <div className="min-h-screen bg-white">
      <Header />

      <main className="max-w-[900px] mx-auto px-6 py-24 sm:py-32">
        {/* Header Section */}
        <header className="mb-16 border-b border-slate-100 pb-8">
          <h1 className="text-4xl sm:text-5xl font-black text-slate-900 mb-4 tracking-tighter">
            Política de <span className="text-blue-600">Privacidade</span>
          </h1>
          <p className="text-slate-500 font-bold text-sm uppercase tracking-widest">
            Última atualização: Janeiro de 2026
          </p>
        </header>

        {/* Content Section */}
        <div className="space-y-12">
          
          <section className="group">
            <h2 className="text-xl font-black text-slate-900 mb-4 flex items-center gap-3 uppercase tracking-tight">
              <span className="w-8 h-8 bg-blue-50 text-blue-600 rounded-lg flex items-center justify-center text-sm">01</span>
              Coleta de Informações
            </h2>
            <div className="pl-11">
              <p className="text-slate-600 leading-relaxed">
                O <strong className="text-slate-900">RemoverMarca.com</strong> coleta apenas dados técnicos básicos necessários para o funcionamento da ferramenta, como URLs de imagens processadas temporariamente e dados de uso não identificáveis (browser, tipo de dispositivo). 
                <span className="block mt-2 font-semibold text-blue-600">Não exigimos cadastro para as funções básicas de remoção.</span>
              </p>
            </div>
          </section>

          <section className="group">
            <h2 className="text-xl font-black text-slate-900 mb-4 flex items-center gap-3 uppercase tracking-tight">
              <span className="w-8 h-8 bg-blue-50 text-blue-600 rounded-lg flex items-center justify-center text-sm">02</span>
              Google AdSense e Cookies
            </h2>
            <div className="pl-11">
              <p className="text-slate-600 leading-relaxed mb-4">
                Utilizamos o <strong className="text-slate-900">Google AdSense</strong> para exibir anúncios. O Google utiliza cookies (como o cookie DART) para veicular anúncios baseados em suas visitas anteriores ao nosso e a outros sites na Internet.
              </p>
              <ul className="list-disc list-inside space-y-2 text-slate-600 text-sm bg-slate-50 p-6 rounded-2xl border border-slate-100">
                <li>O Google usa cookies para veicular anúncios com base em visitas anteriores do usuário.</li>
                <li>Os cookies de publicidade permitem ao Google e parceiros veicular anúncios baseados em visitas feitas aos seus sites.</li>
                <li>Você pode desativar a publicidade personalizada acessando as 
                  <a href="https://www.google.com/settings/ads" target="_blank" rel="noopener noreferrer" className="text-blue-600 font-bold hover:underline ml-1">
                    Configurações de anúncios do Google
                  </a>.
                </li>
              </ul>
            </div>
          </section>

          <section className="group">
            <h2 className="text-xl font-black text-slate-900 mb-4 flex items-center gap-3 uppercase tracking-tight">
              <span className="w-8 h-8 bg-blue-50 text-blue-600 rounded-lg flex items-center justify-center text-sm">03</span>
              Conformidade LGPD (Brasil)
            </h2>
            <div className="pl-11">
              <p className="text-slate-600 leading-relaxed">
                Em conformidade com a <strong className="text-slate-900">Lei Geral de Proteção de Dados (LGPD)</strong>, garantimos transparência total. 
                <span className="block mt-4 p-4 bg-green-50 border-l-4 border-green-500 text-green-800 font-medium rounded-r-xl">
                  Segurança Máxima: As imagens enviadas são processadas e excluídas automaticamente de nossos servidores após 1 hora de inatividade da sessão.
                </span>
              </p>
            </div>
          </section>

          <section className="group">
            <h2 className="text-xl font-black text-slate-900 mb-4 flex items-center gap-3 uppercase tracking-tight">
              <span className="w-8 h-8 bg-blue-50 text-blue-600 rounded-lg flex items-center justify-center text-sm">04</span>
              Privacidade das Crianças
            </h2>
            <div className="pl-11">
              <p className="text-slate-600 leading-relaxed">
                Não coletamos intencionalmente informações de crianças menores de 13 anos. Se você é pai ou responsável e acredita que seu filho nos forneceu dados, entre em contato imediatamente para que possamos remover tais informações de nossos registros.
              </p>
            </div>
          </section>

        </div>

        {/* Footer Contact */}
        <div className="mt-20 pt-12 border-t border-slate-100 text-center">
          <p className="text-slate-400 text-sm font-medium">
            Dúvidas sobre sua privacidade? Entre em contato com nossa equipe.
          </p>
        </div>
      </main> 
    </div>
  )
}