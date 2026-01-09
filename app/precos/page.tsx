"use client"

import { useState } from "react"
import { Header } from "@/components/header"
import { Check, Zap, ShieldCheck, CreditCard } from "lucide-react"
import Link from "next/link"

export default function PricingPage() {
  // 状态管理：订阅制 vs 一次性积分
  const [type, setType] = useState<'sub' | 'pre'>('sub')
  // 状态管理：月付 vs 年付
  const [billing, setBilling] = useState<'monthly' | 'annual'>('annual')

  // 订阅制方案数据
  const subscriptions = [
    {
      name: "Plano Mini",
      desc: "Uso ocasional",
      monthly: "R$ 19,90",
      annual: "R$ 149,90",
      monthlyUSD: "$3.60",
      annualUSD: "$27.20",
      credits: "15 créditos /mês",
      features: ["IA Alta Resolução"],
    },
    {
      name: "Plano Basic",
      desc: "Para iniciantes",
      monthly: "R$ 39,90",
      annual: "R$ 299,90",
      monthlyUSD: "$7.20",
      annualUSD: "$54.50",
      credits: "45 créditos /mês",
      features: ["Processamento rápido"],
      color: "text-blue-600",
    },
    {
      name: "Plano Pro",
      desc: "Escolha popular",
      monthly: "R$ 79,90",
      annual: "R$ 599,90",
      monthlyUSD: "$14.50",
      annualUSD: "$109.00",
      credits: "120 créditos /mês",
      features: ["Processamento em lote", "Suporte prioritário"],
      highlight: true,
    },
    {
      name: "Plano Expert",
      desc: "Profissionais",
      monthly: "R$ 149,90",
      annual: "R$ 1199,90",
      monthlyUSD: "$27.20",
      annualUSD: "$218.00",
      credits: "300 créditos /mês",
      features: ["Acesso via API (Beta)"],
    },
    {
      name: "Plano Studio",
      desc: "Agências",
      monthly: "R$ 399,90",
      annual: "R$ 2999,90",
      monthlyUSD: "$72.70",
      annualUSD: "$545.40",
      credits: "1000 créditos /mês",
      features: ["Gerente exclusivo"],
    },
  ]

  // 一次性包数据
  const creditPacks = [
    { name: "Starter Pack", price: "R$ 24,90", usd: "$4.50", credits: "10 Créditos" },
    { name: "Standard Pack", price: "R$ 89,90", usd: "$16.30", credits: "50 Créditos", highlight: true },
    { name: "Business Pack", price: "R$ 249,90", usd: "$45.40", credits: "200 Créditos" },
  ]

  return (
    <div className="min-h-screen bg-slate-50">
      <Header />

      <main className="max-w-7xl mx-auto px-4 py-24 sm:px-6 lg:px-8">
        {/* 头部标题与切换 */}
        <div className="text-center mb-16">
          <h1 className="text-4xl font-extrabold tracking-tight text-slate-900 sm:text-5xl">
            Remoção de Marcas d'Água com IA
          </h1>
          <p className="mt-4 text-xl text-slate-600">Escolha o plano perfeito para as suas necessidades.</p>

          <div className="mt-10 flex justify-center p-1 bg-slate-200 rounded-2xl max-w-sm mx-auto">
            <button
              onClick={() => setType('sub')}
              className={`flex-1 py-2.5 px-4 rounded-xl font-bold transition-all ${type === 'sub' ? 'bg-white shadow-md text-blue-600' : 'text-slate-600 hover:text-slate-900'}`}
            >
              Assinaturas
            </button>
            <button
              onClick={() => setType('pre')}
              className={`flex-1 py-2.5 px-4 rounded-xl font-bold transition-all ${type === 'pre' ? 'bg-white shadow-md text-blue-600' : 'text-slate-600 hover:text-slate-900'}`}
            >
              Créditos Avulsos
            </button>
          </div>
        </div>

        {type === 'sub' ? (
          /* 订阅模式 */
          <div>
            <div className="flex justify-center items-center gap-4 mb-12">
              <span className={`text-sm font-bold ${billing === 'monthly' ? 'text-blue-600' : 'text-slate-500'}`}>Mensal</span>
              <button
                onClick={() => setBilling(billing === 'monthly' ? 'annual' : 'monthly')}
                className="relative w-14 h-7 bg-slate-300 rounded-full transition duration-200 focus:outline-none"
              >
                <div className={`absolute top-1 left-1 w-5 h-5 bg-white rounded-full shadow-md transition-transform duration-200 ${billing === 'annual' ? 'translate-x-7' : 'translate-x-0'}`} />
              </button>
              <span className={`text-sm font-bold ${billing === 'annual' ? 'text-blue-600' : 'text-slate-500'}`}>
                Anual <span className="bg-green-100 text-green-700 px-2 py-0.5 rounded-full text-xs font-black ml-1 uppercase tracking-tighter">Economize 40%</span>
              </span>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-5 gap-4 items-stretch">
              {subscriptions.map((plan) => (
                <div
                  key={plan.name}
                  className={`relative flex flex-col rounded-[32px] transition-all duration-300 ${
                    plan.highlight 
                    ? 'p-[2px] bg-gradient-to-br from-blue-600 to-cyan-400 shadow-2xl scale-105 z-10' 
                    : 'bg-white p-6 border border-slate-200 hover:shadow-lg'
                  }`}
                >
                  {plan.highlight ? (
                    <div className="bg-white rounded-[30px] p-6 flex flex-col h-full">
                       <span className="bg-blue-600 text-white text-[10px] font-black px-3 py-1 rounded-full self-start mb-4 uppercase tracking-widest">Melhor Valor</span>
                       <h3 className="font-black text-slate-900 uppercase tracking-wider text-xs">{plan.name}</h3>
                       <p className="mt-1 text-slate-500 text-xs font-medium">{plan.desc}</p>
                       <div className="mt-6">
                          <span className="text-4xl font-black text-slate-900">{billing === 'annual' ? plan.annual : plan.monthly}</span>
                          <span className="text-slate-400 text-sm font-bold">{billing === 'annual' ? '/ano' : '/mês'}</span>
                          <div className="text-[10px] text-blue-500 font-bold mt-1 uppercase tracking-widest">{billing === 'annual' ? plan.annualUSD : plan.monthlyUSD} USD</div>
                       </div>
                       <ul className="mt-8 space-y-4 text-sm text-slate-700 font-semibold flex-grow">
                          <li className="flex items-center gap-2">🔥 {plan.credits}</li>
                          {plan.features.map(f => <li key={f} className="flex items-center gap-2">🔥 {f}</li>)}
                       </ul>
                       <button className="mt-8 w-full py-4 px-4 rounded-2xl bg-blue-600 text-white font-black shadow-lg hover:bg-blue-700 transition-all active:scale-95">COMEÇAR AGORA</button>
                    </div>
                  ) : (
                    <>
                      <h3 className={`font-black uppercase tracking-wider text-xs ${plan.color || 'text-slate-400'}`}>{plan.name}</h3>
                      <p className="mt-1 text-slate-500 text-xs font-medium">{plan.desc}</p>
                      <div className="mt-6">
                        <span className="text-3xl font-black text-slate-900">{billing === 'annual' ? plan.annual : plan.monthly}</span>
                        <span className="text-slate-400 text-sm font-bold">{billing === 'annual' ? '/ano' : '/mês'}</span>
                        <div className="text-[10px] text-blue-400 font-bold mt-1 uppercase tracking-widest">{billing === 'annual' ? plan.annualUSD : plan.monthlyUSD} USD</div>
                      </div>
                      <ul className="mt-8 space-y-4 text-sm text-slate-600 font-medium flex-grow">
                        <li className="flex items-center gap-2">✅ {plan.credits}</li>
                        {plan.features.map(f => <li key={f} className="flex items-center gap-2">✅ {f}</li>)}
                      </ul>
                      <button className="mt-8 w-full py-3.5 px-4 rounded-2xl border-2 border-blue-600 text-blue-600 font-black hover:bg-blue-50 transition-all text-sm uppercase tracking-widest">Assinar</button>
                    </>
                  )}
                </div>
              ))}
            </div>
          </div>
        ) : (
          /* 一次性模式 */
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto">
            {creditPacks.map((pack) => (
              <div
                key={pack.name}
                className={`bg-white p-10 rounded-[40px] text-center transition-all duration-300 ${
                  pack.highlight 
                  ? 'border-4 border-blue-600 shadow-2xl relative scale-105' 
                  : 'border border-slate-200 shadow-sm hover:shadow-md'
                }`}
              >
                {pack.highlight && (
                  <div className="absolute -top-4 left-1/2 transform -translate-x-1/2 bg-blue-600 text-white text-[10px] font-black px-4 py-1.5 rounded-full uppercase tracking-[0.2em]">POPULAR</div>
                )}
                <h3 className={`text-xl font-black ${pack.highlight ? 'text-blue-600' : 'text-slate-900'}`}>{pack.name}</h3>
                <div className="my-8">
                  <div className="text-5xl font-black text-slate-900">{pack.price}</div>
                  <div className="text-sm text-slate-400 font-bold mt-2 italic uppercase tracking-widest">{pack.usd} USD</div>
                </div>
                <div className={`inline-block px-4 py-2 rounded-xl text-sm font-black mb-10 ${pack.highlight ? 'bg-blue-50 text-blue-600' : 'bg-slate-100 text-slate-500'}`}>
                  {pack.credits}
                </div>
                <button className={`w-full py-5 rounded-[24px] font-black text-lg transition-all active:scale-95 ${pack.highlight ? 'bg-blue-600 text-white shadow-xl shadow-blue-100 hover:bg-blue-700' : 'bg-slate-900 text-white hover:bg-black'}`}>
                  Comprar Agora
                </button>
              </div>
            ))}
          </div>
        )}

        {/* 支付信任区 */}
        <div className="mt-24 border-t border-slate-200 pt-12 text-center">
          <div className="flex flex-col items-center gap-2 mb-8">
            <ShieldCheck className="text-blue-600 w-8 h-8" />
            <p className="text-slate-500 text-sm font-black uppercase tracking-widest">Pagamento 100% Seguro</p>
          </div>
          <div className="flex justify-center items-center gap-10 grayscale opacity-40 hover:grayscale-0 hover:opacity-100 transition-all duration-500 flex-wrap">
            <img src="https://upload.wikimedia.org/wikipedia/commons/a/a2/Logo_Pix.png" className="h-6 md:h-8" alt="Pix" />
            <img src="https://upload.wikimedia.org/wikipedia/commons/5/5e/Visa_Inc._logo.svg" className="h-3 md:h-4" alt="Visa" />
            <img src="https://upload.wikimedia.org/wikipedia/commons/2/2a/Mastercard-logo.svg" className="h-6 md:h-8" alt="Mastercard" />
            <img src="https://upload.wikimedia.org/wikipedia/commons/b/b5/PayPal.svg" className="h-5 md:h-6" alt="PayPal" />
          </div>
        </div>
      </main>
    </div>
  )
}