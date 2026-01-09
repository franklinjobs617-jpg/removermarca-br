"use client"

import React, { useState } from "react"
import { Check, Info, X, Star } from "lucide-react"

type PlanType = "subscription" | "credits"
type BillingCycle = "monthly" | "yearly"

interface SubscriptionPlan {
  id: string
  name: string
  credits: number
  monthly: number
  yearly: number
  yearlyMonthly: number
  desc: string
  highlighted?: boolean
}

interface CreditPack {
  id: string
  name: string
  credits: number
  price: number
  perImg: number
  tag: string
}

export function PricingModal({ isOpen, onClose }: { isOpen: boolean; onClose: () => void }) {
  const [activeTab, setActiveTab] = useState<PlanType>("subscription")
  const [billingCycle, setBillingCycle] = useState<BillingCycle>("yearly")
  const [selectedPlanId, setSelectedPlanId] = useState("pro")

  if (!isOpen) return null

  const subscriptions: SubscriptionPlan[] = [
    { id: "mini", name: "Plano Mini", credits: 15, monthly: 19.9, yearly: 149.9, yearlyMonthly: 12.49, desc: "Iniciante" },
    { id: "basic", name: "Plano Basic", credits: 45, monthly: 39.9, yearly: 299.9, yearlyMonthly: 24.99, desc: "Vendedor" },
    { id: "pro", name: "Plano Pro", credits: 120, monthly: 79.9, yearly: 599.9, yearlyMonthly: 49.99, desc: "Popular", highlighted: true },
    { id: "expert", name: "Plano Expert", credits: 300, monthly: 149.9, yearly: 1199.9, yearlyMonthly: 99.99, desc: "Expert" },
    { id: "studio", name: "Plano Studio", credits: 1000, monthly: 399.9, yearly: 2999.9, yearlyMonthly: 249.99, desc: "Studio" },
  ]

  const creditPacks: CreditPack[] = [
    { id: "starter", name: "Starter Pack", credits: 10, price: 24.9, perImg: 2.49, tag: "Experimental" },
    { id: "standard", name: "Standard Pack", credits: 50, price: 89.9, perImg: 1.79, tag: "Mais Comum" },
    { id: "business", name: "Business Pack", credits: 200, price: 249.9, perImg: 1.24, tag: "Melhor Taxa" },
  ]

  const getSelectedPrice = () => {
    if (activeTab === "subscription") {
      const plan = subscriptions.find(p => p.id === selectedPlanId) || subscriptions[2]
      return billingCycle === "monthly" ? plan.monthly : plan.yearly
    } else {
      const pack = creditPacks.find(p => p.id === selectedPlanId) || creditPacks[1]
      return pack.price
    }
  }

  // 内部描述组件
  const BenefitsContent = () => (
    <div className="flex flex-col">
      <div className="flex gap-1.5 mb-4">
        {[1, 2, 3].map(i => <div key={i} className="w-1.5 h-1.5 bg-blue-600 rounded-full opacity-40" />)}
      </div>
      <h2 className="text-3xl md:text-4xl font-black text-slate-800 leading-tight mb-8">
        Escolha seu plano <br />
        <span className="relative inline-block text-blue-600 md:text-slate-800">
          preferido
          <div className="absolute -bottom-1 left-0 w-full h-1.5 bg-blue-600/30 rounded-full" />
        </span>
      </h2>

      <div className="space-y-8">
        <div>
          <h4 className="text-blue-600 font-black mb-4 text-xs md:text-sm uppercase tracking-widest">Vantagens Pro:</h4>
          <ul className="space-y-4">
            {["50 downloads HD por dia", "Créditos extras incluídos", "Ideal para iniciantes", "Sem marca d'água na prévia"].map((item, i) => (
              <li key={i} className="flex items-start gap-3 text-slate-600 font-bold text-xs md:text-sm">
                <div className="mt-0.5 bg-blue-600 rounded-full p-0.5 flex-shrink-0"><Check size={12} className="text-white stroke-[4px]" /></div>
                <span>{item}</span>
              </li>
            ))}
          </ul>
        </div>
        <div>
          <h4 className="text-blue-600 font-black mb-4 text-xs md:text-sm uppercase tracking-widest">Sobre Créditos:</h4>
          <ul className="space-y-4">
            {["Acesso completo aos recursos", "Créditos que nunca expiram", "Modo de equipe acessível"].map((item, i) => (
              <li key={i} className="flex items-start gap-3 text-slate-600 font-bold text-xs md:text-sm">
                <div className="mt-0.5 bg-blue-600 rounded-full p-0.5 flex-shrink-0"><Check size={12} className="text-white stroke-[4px]" /></div>
                <span>{item}</span>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  )

  return (
    <div className="fixed inset-0 bg-black/60 backdrop-blur-sm z-[100] flex items-center justify-center p-0 sm:p-4">
      <div 
        className="bg-white w-full max-w-6xl h-full sm:h-auto sm:max-h-[85vh] flex flex-col md:flex-row overflow-hidden relative sm:rounded-[40px] shadow-2xl"
        onClick={(e) => e.stopPropagation()}
      >
        
        {/* 关闭按钮 - 独立于分栏 */}
        <button 
          onClick={onClose} 
          className="absolute right-4 top-4 sm:right-6 sm:top-6 z-[120] p-2 bg-gray-100 hover:bg-gray-200 rounded-full text-gray-500 transition-all"
        >
          <X size={20} strokeWidth={3} />
        </button>

        {/* 左侧栏 - 仅在桌面端显示固定宽度 */}
        <aside className="hidden md:flex w-[380px] bg-[#f4f7ff] p-10 flex-col shrink-0 border-r border-blue-50">
          <BenefitsContent />
          <div className="mt-auto flex items-center gap-2 text-slate-400 text-xs font-bold uppercase tracking-tighter">
            <Info size={14} />
            <span>1 imagem = 1 crédito</span>
          </div>
        </aside>

        {/* 右侧栏 - 滚动内容区 */}
        <div className="flex-1 bg-white overflow-y-auto no-scrollbar">
          <div className="p-6 sm:p-10 md:p-12">
            

            {/* Tabs 切换 */}
            <div className="flex justify-center mb-8">
              <div className="bg-gray-100 p-1.5 rounded-2xl flex w-full max-w-[420px] shadow-inner">
                <button 
                  onClick={() => { setActiveTab("subscription"); setSelectedPlanId("pro"); }}
                  className={`flex-1 py-3 px-2 rounded-xl text-xs sm:text-sm font-black transition-all ${activeTab === "subscription" ? "bg-white text-blue-600 shadow-md" : "text-gray-400 hover:text-gray-600"}`}
                >
                  Assinaturas
                </button>
                <button 
                  onClick={() => { setActiveTab("credits"); setSelectedPlanId("standard"); }}
                  className={`flex-1 py-3 px-2 rounded-xl text-xs sm:text-sm font-black transition-all ${activeTab === "credits" ? "bg-white text-blue-600 shadow-md" : "text-gray-400 hover:text-gray-600"}`}
                >
                  Créditos Avulsos
                </button>
              </div>
            </div>

            {/* 订阅周期切换 */}
            {activeTab === "subscription" && (
              <div className="flex justify-center gap-8 mb-8 font-black text-[10px] sm:text-xs uppercase tracking-widest border-b border-gray-100 pb-4">
                <button onClick={() => setBillingCycle("monthly")} className={`pb-2 border-b-4 transition-all ${billingCycle === "monthly" ? "text-blue-600 border-blue-600" : "text-gray-300 border-transparent"}`}>Mensal</button>
                <button onClick={() => setBillingCycle("yearly")} className={`pb-2 border-b-4 transition-all flex items-center gap-2 ${billingCycle === "yearly" ? "text-blue-600 border-blue-600" : "text-gray-300 border-transparent"}`}>
                  Anual <span className="text-green-500 font-black bg-green-50 px-2 py-0.5 rounded text-[9px]">Economize 40%</span>
                </button>
              </div>
            )}

            {/* 方案列表 */}
            <div className="space-y-3 mb-10">
              {activeTab === "subscription" ? (
                subscriptions.map((plan) => (
                  <div 
                    key={plan.id}
                    onClick={() => setSelectedPlanId(plan.id)}
                    className={`relative p-4 md:p-5 rounded-[24px] border-2 cursor-pointer transition-all flex items-center justify-between ${selectedPlanId === plan.id ? 'border-blue-600 bg-blue-50/40 ring-4 ring-blue-600/5' : 'border-gray-50 bg-gray-50/50 hover:border-blue-200'}`}
                  >
                    <div className="flex items-center gap-4">
                      <div className={`w-6 h-6 rounded-full border-2 flex items-center justify-center transition-colors ${selectedPlanId === plan.id ? 'border-blue-600 bg-blue-600 text-white' : 'border-gray-300 bg-white'}`}>
                        {selectedPlanId === plan.id && <Check size={14} className="stroke-[4px]" />}
                      </div>
                      <div>
                        <div className="font-black text-slate-900 text-sm md:text-base leading-tight">{plan.name}</div>
                        <div className="text-[10px] font-bold text-slate-400 uppercase mt-0.5">+{plan.credits} CRÉDITOS / {billingCycle === "monthly" ? "MÊS" : "ANO"}</div>
                      </div>
                    </div>
                    <div className="text-right">
                      <div className="text-lg md:text-xl font-black text-slate-900 italic leading-none">R${billingCycle === "monthly" ? plan.monthly.toFixed(2) : plan.yearlyMonthly.toFixed(2)}<span className="text-[10px] font-bold text-slate-400 not-italic ml-1">/mês</span></div>
                      {billingCycle === "yearly" && <div className="text-[10px] text-slate-400 font-bold uppercase mt-1 tracking-tighter">Total R${plan.yearly.toFixed(2)}</div>}
                    </div>
                    {plan.highlighted && activeTab === 'subscription' && (
                      <div className="absolute -top-3 right-6 bg-gradient-to-r from-blue-600 to-indigo-600 text-white text-[9px] px-3 py-0.5 rounded-full font-black shadow-lg flex items-center gap-1 uppercase tracking-tighter">
                        <Star size={8} fill="white" /> Recomendado
                      </div>
                    )}
                  </div>
                ))
              ) : (
                creditPacks.map((pack) => (
                  <div 
                    key={pack.id}
                    onClick={() => setSelectedPlanId(pack.id)}
                    className={`relative p-6 rounded-[24px] border-2 cursor-pointer transition-all flex items-center justify-between ${selectedPlanId === pack.id ? 'border-blue-600 bg-blue-50/40 ring-4 ring-blue-600/5' : 'border-gray-50 bg-gray-50/50 hover:border-blue-200'}`}
                  >
                    <div className="flex items-center gap-4">
                      <div className={`w-6 h-6 rounded-full border-2 flex items-center justify-center transition-colors ${selectedPlanId === pack.id ? 'border-blue-600 bg-blue-600 text-white' : 'border-gray-300 bg-white'}`}>
                        {selectedPlanId === pack.id && <Check size={14} className="stroke-[4px]" />}
                      </div>
                      <div>
                        <div className="font-black text-slate-900 text-base leading-tight">{pack.credits} CRÉDITOS</div>
                        <div className="text-[10px] font-black text-green-600 uppercase bg-green-100 px-1.5 py-0.5 rounded mt-1 inline-block">Válido para sempre</div>
                      </div>
                    </div>
                    <div className="text-right font-black text-slate-900 italic">
                      <div className="text-xl md:text-2xl">R${pack.price.toFixed(2)}</div>
                      <div className="text-[10px] font-bold text-slate-400 not-italic uppercase tracking-tighter">R${pack.perImg.toFixed(2)} / IMAGEM</div>
                    </div>
                  </div>
                ))
              )}
            </div>

            {/* 价格结算区 */}
            <div className="mt-auto pt-8 border-t border-gray-100">
              <div className="flex items-center justify-center gap-4 mb-6">
                 {billingCycle === 'yearly' && activeTab === 'subscription' && (
                   <span className="text-slate-300 line-through font-bold text-lg md:text-xl italic tracking-tighter">R${(subscriptions.find(s=>s.id===selectedPlanId)?.monthly! * 12).toFixed(2)}</span>
                 )}
                 <span className="text-4xl md:text-6xl font-black text-blue-600 italic tracking-tighter">R${getSelectedPrice()}</span>
              </div>
              
              <button className="w-full bg-blue-600 hover:bg-blue-700 active:scale-[0.98] text-white py-5 rounded-[24px] font-black text-xl md:text-2xl transition-all mb-8 shadow-xl shadow-blue-100 uppercase tracking-widest">
                {activeTab === "subscription" ? "Assine Agora" : "Comprar Agora"}
              </button>

              {/* 支付图标 */}
              <div className="flex items-center justify-center gap-6 md:gap-10 opacity-40 grayscale hover:grayscale-0 transition-all flex-wrap pb-2">
                <img src="https://upload.wikimedia.org/wikipedia/commons/a/a2/Logo_Pix.png" alt="Pix" className="h-4 md:h-5" />
                <img src="https://upload.wikimedia.org/wikipedia/commons/5/5e/Visa_Inc._logo.svg" alt="Visa" className="h-3 md:h-4" />
                <img src="https://upload.wikimedia.org/wikipedia/commons/2/2a/Mastercard-logo.svg" alt="Mastercard" className="h-6 md:h-8" />
                <img src="https://upload.wikimedia.org/wikipedia/commons/b/b5/PayPal.svg" alt="PayPal" className="h-5 md:h-6" />
              </div>
            </div>

            {/* 移动端显示的描述块 */}
            <div className="block md:hidden mb-10">
              <BenefitsContent />
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}