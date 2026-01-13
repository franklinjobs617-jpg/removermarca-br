"use client"

import React, { useState } from "react"
import { Header } from "@/components/header"
import { Check, Info, Star, ShieldCheck, Loader2 } from "lucide-react"
import { useAuth } from "@/lib/auth-context"
import { LoginModal } from "@/components/login-modal"

type PlanType = "subscription" | "credits"
type BillingCycle = "monthly" | "yearly"

interface SubscriptionPlan {
  id: string
  name: string
  credits: number
  monthly: number
  yearly: number
  yearlyMonthly: number
  highlighted?: boolean
}

interface CreditPack {
  id: string
  name: string
  credits: number
  price: number
  perImg: number
}

export default function PricingPage() {
  const { user, isLoggedIn, isLoaded } = useAuth()

  const [activeTab, setActiveTab] = useState<PlanType>("subscription")
  const [billingCycle, setBillingCycle] = useState<BillingCycle>("yearly")
  const [selectedId, setSelectedId] = useState("pro")

  // 状态：支付跳转中
  const [isPaying, setIsPaying] = useState(false)
  const [showLogin, setShowLogin] = useState(false)

  const subscriptions: SubscriptionPlan[] = [
    { id: "mini", name: "Plano Mini", credits: 15, monthly: 19.9, yearly: 149.9, yearlyMonthly: 12.49 },
    { id: "basic", name: "Plano Basic", credits: 45, monthly: 39.9, yearly: 299.9, yearlyMonthly: 24.99 },
    { id: "pro", name: "Plano Pro", credits: 120, monthly: 79.9, yearly: 599.9, yearlyMonthly: 49.99, highlighted: true },
    { id: "expert", name: "Plano Expert", credits: 300, monthly: 149.9, yearly: 1199.9, yearlyMonthly: 99.99 },
    { id: "studio", name: "Plano Studio", credits: 1000, monthly: 399.9, yearly: 2999.9, yearlyMonthly: 249.99 },
  ]

  const creditPacks: CreditPack[] = [
    { id: "10", name: "Starter Pack", credits: 10, price: 24.9, perImg: 2.49 },
    { id: "50", name: "Standard Pack", credits: 50, price: 89.9, perImg: 1.79 },
    { id: "200", name: "Business Pack", credits: 200, price: 249.9, perImg: 1.24 },
  ]

  // --- 核心支付逻辑 ---
  const handlePayment = async () => {
    // 1. 检查登录
    if (!isLoggedIn) {
      setShowLogin(true);
      return;
    }

    setIsPaying(true);

    // 2. 准备参数 type
    let paymentType = "";
    if (activeTab === "subscription") {
      // 拼接规则：plan_ + 方案ID + _ + 周期 (monthly/yearly)
      paymentType = `plan_${selectedId}_${billingCycle}`;
    } else {
      // 拼接规则：credits_ + 额度
      paymentType = `credits_${selectedId}`;
    }

    const payload = {
      googleUserId: 'a0bdde0f-fd01-48b6-a4c0-c9b216195b91', // 这里建议使用 user 对象中唯一的 ID
      type: paymentType
    };

    try {
      // 3. 请求后端支付 URL
      const response = await fetch('https://api.removermarca.com/prod-api/stripe/getPayUrl', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(payload)
      });

      const resData = await response.json();

      // 4. 处理返回结果
      if (resData.code === 200 && resData.data) {
        // 直接跳转到 Stripe
        window.location.href = resData.data;
      } else {
        alert("Falha ao criar pagamento: " + (resData.msg || "Erro desconhecido"));
        setIsPaying(false);
      }
    } catch (error) {
      console.error("Payment error:", error);
      alert("Erro de conexão com o servidor de pagamentos.");
      setIsPaying(false);
    }
  };

  const getDisplayPrice = () => {
    if (activeTab === "subscription") {
      const plan = subscriptions.find(s => s.id === selectedId) || subscriptions[2]
      return billingCycle === "monthly" ? plan.monthly : plan.yearly
    }
    const pack = creditPacks.find(c => c.id === selectedId) || creditPacks[1]
    return pack.price
  }

  const Benefits = () => (
    <div className="flex flex-col h-full space-y-4">
      <div className="flex gap-1">
        {[1, 2, 3].map(i => <div key={i} className="w-1 h-1 bg-blue-600 rounded-full opacity-30" />)}
      </div>
      <h2 className="text-2xl xl:text-3xl font-black text-slate-900 leading-tight tracking-tighter uppercase italic">
        Escolha seu plano <br />
        <span className="relative inline-block text-blue-600 lg:text-slate-900">
          preferido
          <div className="absolute -bottom-1 left-0 w-full h-1 bg-blue-600/20 rounded-full" />
        </span>
      </h2>
      <div className="space-y-6 pt-4">
        <div className="space-y-3">
          <h4 className="text-blue-600 font-black text-[9px] uppercase tracking-[0.2em]">Vantagens Pro:</h4>
          <ul className="space-y-2">
            {["50 downloads HD por dia", "Créditos extras incluídos", "Ideal para iniciantes", "Sem marca d'água na prévia"].map((item, i) => (
              <li key={i} className="flex items-center gap-2 text-slate-700 font-bold text-xs">
                <div className="bg-blue-600 rounded-full p-0.5"><Check size={8} className="text-white stroke-[4px]" /></div>
                <span>{item}</span>
              </li>
            ))}
          </ul>
        </div>
        <div className="space-y-3">
          <h4 className="text-blue-600 font-black text-[9px] uppercase tracking-[0.2em]">Sobre Créditos:</h4>
          <ul className="space-y-2">
            {["Acesso completo aos recursos", "Créditos que nunca expiram", "Modo de equipe acessível"].map((item, i) => (
              <li key={i} className="flex items-center gap-2 text-slate-700 font-bold text-xs">
                <div className="bg-blue-600 rounded-full p-0.5"><Check size={8} className="text-white stroke-[4px]" /></div>
                <span>{item}</span>
              </li>
            ))}
          </ul>
        </div>
      </div>
      <div className="mt-auto flex items-center gap-2 text-slate-400 text-[8px] font-black uppercase tracking-widest">
        <Info size={10} />
        <span>1 imagem = 1 crédito</span>
      </div>
    </div>
  )

  return (
    <div className="min-h-screen bg-[#f8fafc] flex flex-col overflow-hidden">
      <Header />

      <main className="flex-1 flex items-center justify-center p-4 lg:p-6 pt-20 lg:pt-24 overflow-hidden">
        <div className="bg-white rounded-[32px] shadow-[0_20px_60px_-15px_rgba(0,0,0,0.08)] border border-slate-100 flex flex-col-reverse lg:flex-row overflow-hidden w-full max-w-6xl h-fit lg:h-[820px]">

          <aside className="w-full lg:w-[280px] xl:w-[340px] bg-[#f4f7ff] p-6 lg:p-10 flex-col shrink-0 border-r border-blue-50 lg:flex">
            <Benefits />
          </aside>

          <div className="flex-1 flex flex-col bg-white overflow-hidden">
            <div className="p-6 lg:p-10 flex flex-col h-full overflow-hidden">

              <div className="flex justify-center mb-6 shrink-0">
                <div className="bg-slate-100 p-1 rounded-2xl flex w-full max-w-[360px] shadow-inner">
                  <button
                    onClick={() => { setActiveTab("subscription"); setSelectedId("pro"); }}
                    className={`flex-1 py-2.5 rounded-xl text-xs font-black transition-all ${activeTab === "subscription" ? "bg-white text-blue-600 shadow-sm" : "text-gray-400"}`}
                  >
                    Assinaturas
                  </button>
                  <button
                    onClick={() => { setActiveTab("credits"); setSelectedId("50"); }}
                    className={`flex-1 py-2.5 rounded-xl text-xs font-black transition-all ${activeTab === "credits" ? "bg-white text-blue-600 shadow-sm" : "text-gray-400"}`}
                  >
                    Créditos Avulsos
                  </button>
                </div>
              </div>

              <div className="h-14 shrink-0 flex items-center justify-center">
                {activeTab === "subscription" && (
                  <div className="flex justify-center gap-10 font-black text-[9px] uppercase tracking-widest border-b border-slate-50 pb-3 w-full animate-in fade-in duration-300">
                    <button onClick={() => setBillingCycle("monthly")} className={`pb-1 border-b-2 transition-all ${billingCycle === "monthly" ? "text-blue-600 border-blue-600" : "text-slate-300 border-transparent"}`}>Mensal</button>
                    <button onClick={() => setBillingCycle("yearly")} className={`pb-1 relative border-b-2 transition-all flex items-center ${billingCycle === "yearly" ? "text-blue-600 border-blue-600" : "text-slate-300 border-transparent"}`}>
                      Anual
                      <span className="absolute -top-4 left-full ml-1 whitespace-nowrap text-green-600 font-black bg-green-50 px-1.5 py-0.5 rounded text-[8px] shadow-sm border border-green-100">
                        Economize 40%
                      </span>
                    </button>
                  </div>
                )}
              </div>

              <div className="flex-1 overflow-y-auto lg:overflow-hidden pr-1 no-scrollbar space-y-2 mb-6">
                {activeTab === "subscription" ? (
                  subscriptions.map((plan) => (
                    <div
                      key={plan.id}
                      onClick={() => setSelectedId(plan.id)}
                      className={`relative p-4 lg:p-3.5 rounded-xl border-2 cursor-pointer transition-all flex items-center justify-between ${selectedId === plan.id ? 'border-blue-600 bg-blue-50/30 ring-4 ring-blue-600/5' : 'border-slate-50 bg-slate-50/50 hover:border-blue-100'}`}
                    >
                      <div className="flex items-center gap-3">
                        <div className={`w-5 h-5 rounded-full border-2 flex items-center justify-center transition-colors ${selectedId === plan.id ? 'border-blue-600 bg-blue-600 text-white' : 'border-slate-300 bg-white'}`}>
                          {selectedId === plan.id && <Check size={10} className="stroke-[4px]" />}
                        </div>
                        <div>
                          <div className="font-black text-slate-900 text-xs lg:text-[13px] uppercase leading-none">{plan.name}</div>
                          <div className="text-[8px] font-bold text-slate-400 uppercase mt-1 tracking-tighter">+{plan.credits} créditos / {billingCycle === "monthly" ? "mês" : "ano"}</div>
                        </div>
                      </div>
                      <div className="text-right font-black text-slate-900 italic">
                        <div className="text-sm lg:text-lg leading-none">R${(billingCycle === "monthly" ? plan.monthly : plan.yearlyMonthly).toFixed(2)}<span className="text-[8px] font-bold text-slate-400 not-italic ml-0.5">/mês</span></div>
                        {billingCycle === "yearly" && <div className="text-[8px] text-slate-400 font-bold uppercase mt-0.5 tracking-tighter">Total R${plan.yearly.toFixed(2)}</div>}
                      </div>
                      {plan.highlighted && (
                        <div className="absolute -top-2 right-4 bg-blue-600 text-white text-[7px] px-2 py-0.5 rounded-full font-black shadow-lg flex items-center gap-1 uppercase">
                          <Star size={6} fill="white" /> Recomendado
                        </div>
                      )}
                    </div>
                  ))
                ) : (
                  <div className="flex flex-col h-full justify-center space-y-3">
                    {creditPacks.map((pack) => (
                      <div
                        key={pack.id}
                        onClick={() => setSelectedId(pack.id)}
                        className={`relative p-5 lg:p-6 rounded-xl border-2 cursor-pointer transition-all flex items-center justify-between ${selectedId === pack.id ? 'border-blue-600 bg-blue-50/30 shadow-sm' : 'border-slate-50 bg-slate-50/50 hover:border-blue-100'}`}
                      >
                        <div className="flex items-center gap-3">
                          <div className={`w-5 h-5 rounded-full border-2 flex items-center justify-center transition-colors ${selectedId === pack.id ? 'border-blue-600 bg-blue-600 text-white' : 'border-slate-300 bg-white'}`}>
                            {selectedId === pack.id && <Check size={10} className="stroke-[4px]" />}
                          </div>
                          <div>
                            <div className="font-black text-slate-900 text-sm uppercase leading-none">{pack.credits} Créditos</div>
                            <div className="text-[8px] font-black text-green-600 uppercase bg-green-50 px-1 py-0.5 rounded mt-1 inline-block">Validade permanente</div>
                          </div>
                        </div>
                        <div className="text-right font-black text-slate-900 italic">
                          <div className="text-xl leading-none">R${pack.price.toFixed(2)}</div>
                          <div className="text-[8px] font-bold text-slate-400 not-italic uppercase tracking-widest mt-1">R${pack.perImg.toFixed(2)} / imagem</div>
                        </div>
                      </div>
                    ))}
                  </div>
                )}
              </div>

              {/* 底部购买区 */}
              <div className="mt-auto pt-4 border-t border-slate-50 text-center shrink-0">
                <div className="flex items-baseline justify-center gap-2 mb-4">
                  <span className="text-[9px] font-black text-slate-400 uppercase tracking-widest leading-none">Total a pagar:</span>
                  <span className="text-4xl font-black text-blue-600 italic tracking-tighter">R${getDisplayPrice().toFixed(2)}</span>
                </div>

                <button
                  onClick={handlePayment}
                  disabled={isPaying}
                  className="w-full bg-blue-600 hover:bg-blue-700 disabled:bg-slate-300 active:scale-[0.98] text-white py-3.5 rounded-2xl font-black text-base transition-all mb-6 shadow-xl shadow-blue-200 uppercase tracking-[0.1em] flex items-center justify-center gap-2"
                >
                  {isPaying ? (
                    <>
                      <Loader2 className="w-5 h-5 animate-spin" />
                      Processando...
                    </>
                  ) : (
                    activeTab === "subscription" ? "Assine Agora" : "Compre Agora"
                  )}
                </button>

                <div className="flex justify-center items-center gap-6 opacity-30 grayscale scale-100 pb-2">
                  <img src="https://upload.wikimedia.org/wikipedia/commons/a/a2/Logo_Pix.png" className="h-4" alt="Pix" />
                  <img src="https://upload.wikimedia.org/wikipedia/commons/5/5e/Visa_Inc._logo.svg" className="h-2.5" alt="Visa" />
                  <img src="https://upload.wikimedia.org/wikipedia/commons/2/2a/Mastercard-logo.svg" className="h-6" alt="Mastercard" />
                  <img src="https://upload.wikimedia.org/wikipedia/commons/b/b5/PayPal.svg" className="h-5" alt="PayPal" />
                </div>
              </div>
            </div>
          </div>

        </div>
      </main>

      <LoginModal isOpen={showLogin} onClose={() => setShowLogin(false)} />
    </div>
  )
}