"use client"

import React, { useState, useEffect } from "react"
import { Check, Info, X, Star, Loader2, LogIn } from "lucide-react"
import { useAuth } from "@/lib/auth-context"
import Image from "next/image"

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

export function PricingModal({ isOpen, onClose, onOpenLogin }: { isOpen: boolean; onClose: () => void; onOpenLogin: () => void }) {
  const { isLoggedIn } = useAuth()
  const [activeTab, setActiveTab] = useState<PlanType>("subscription")
  const [billingCycle, setBillingCycle] = useState<BillingCycle>("yearly")
  const [selectedId, setSelectedId] = useState("pro")
  const [isPaying, setIsPaying] = useState(false)

  // --- 修复 1: 锁定背景滚动 ---
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden"
    } else {
      document.body.style.overflow = "unset"
    }
    return () => { document.body.style.overflow = "unset" }
  }, [isOpen])

  if (!isOpen) return null

  const subscriptions: SubscriptionPlan[] = [
    { id: "mini", name: "Plano Mini", credits: 15, monthly: 19.9, yearly: 149.9, yearlyMonthly: 12.49, desc: "Iniciante" },
    { id: "basic", name: "Plano Basic", credits: 45, monthly: 39.9, yearly: 299.9, yearlyMonthly: 24.99, desc: "Vendedor" },
    { id: "pro", name: "Plano Pro", credits: 120, monthly: 79.9, yearly: 599.9, yearlyMonthly: 49.99, desc: "Popular", highlighted: true },
    { id: "expert", name: "Plano Expert", credits: 300, monthly: 149.9, yearly: 1199.9, yearlyMonthly: 99.99, desc: "Expert" },
    { id: "studio", name: "Plano Studio", credits: 1000, monthly: 399.9, yearly: 2999.9, yearlyMonthly: 249.99, desc: "Studio" },
  ]

  const creditPacks: CreditPack[] = [
    { id: "10", name: "Starter Pack", credits: 10, price: 24.9, perImg: 2.49, tag: "Experimental" },
    { id: "50", name: "Standard Pack", credits: 50, price: 89.9, perImg: 1.79, tag: "Mais Comum" },
    { id: "200", name: "Business Pack", credits: 200, price: 249.9, perImg: 1.24, tag: "Melhor Taxa" },
  ]

  const handleAction = async () => {
    if (!isLoggedIn) {
      onOpenLogin();
      return;
    }
    setIsPaying(true);
    const token = localStorage.getItem("auth_token");
    let paymentType = activeTab === "subscription"
      ? `plan_${selectedId}_${billingCycle}`
      : `credits_${selectedId}`;

    try {
      const response = await fetch('/api/pay', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'Authorization': `Bearer ${token}`
        },
        body: JSON.stringify({ type: paymentType })
      });
      const resData = await response.json();
      if (resData.status === "success" && resData.url) {
        window.location.href = resData.url;
      } else {
        alert(resData.message || "Erro ao iniciar pagamento");
        setIsPaying(false);
      }
    } catch (error) {
      console.error(error);
      setIsPaying(false);
    }
  };

  const getSelectedPrice = () => {
    if (activeTab === "subscription") {
      const plan = subscriptions.find(s => s.id === selectedId) || subscriptions[2]
      return billingCycle === "monthly" ? plan.monthly : plan.yearly
    } else {
      const pack = creditPacks.find(p => p.id === selectedId) || creditPacks[1]
      return pack.price
    }
  }

  const Benefits = () => (
    <div className="flex flex-col h-full space-y-6">
      <div className="flex gap-1.5">
        {[1, 2, 3].map(i => <div key={i} className="w-1.5 h-1.5 bg-blue-600 rounded-full opacity-30" />)}
      </div>
      <h2 className="text-3xl lg:text-[40px] font-black text-slate-900 leading-[1.1] tracking-tighter italic">
        Escolha seu plano <br />
        <span className="relative inline-block text-blue-600 lg:text-slate-900">
          preferido
          <div className="absolute -bottom-1 left-0 w-full h-1 bg-blue-600/20 rounded-full" />
        </span>
      </h2>
      <div className="space-y-10 pt-4">
        <div className="space-y-4">
          <h4 className="text-blue-600 font-black text-xs tracking-[0.2em] uppercase">Vantagens Pro:</h4>
          <ul className="space-y-4">
            {["50 downloads HD por dia", "Créditos extras incluídos", "Ideal para iniciantes", "Sem marca d'água na prévia"].map(item => (
              <li key={item} className="flex items-start gap-3 text-slate-700 font-bold text-sm leading-tight">
                <div className="bg-blue-600 rounded-full p-0.5 shrink-0 mt-0.5"><Check size={10} className="text-white stroke-[4px]" /></div>
                <span>{item}</span>
              </li>
            ))}
          </ul>
        </div>
      </div>
      <div className="mt-auto pt-6 flex items-center gap-2 text-slate-400 text-xs font-black tracking-widest">
        <Info size={12} /> <span>1 IMAGEM = 1 CRÉDITO</span>
      </div>
    </div>
  )

  const FooterContent = () => (
    <div className="w-full">
      <div className="flex items-center justify-center gap-4 mb-4">
        {billingCycle === 'yearly' && activeTab === 'subscription' && (
          <span className="text-slate-300 line-through font-bold text-lg md:text-xl tracking-tighter italic">
            R${(subscriptions.find(s => s.id === selectedId)?.monthly! * 12).toFixed(2)}
          </span>
        )}
        <span className="text-4xl md:text-5xl font-black text-blue-600 tracking-tighter italic leading-none">
          R${getSelectedPrice().toFixed(2)}
        </span>
      </div>

      <button
        onClick={handleAction}
        disabled={isPaying}
        className="w-full bg-blue-600 hover:bg-blue-700 active:scale-[0.98] text-white py-4 rounded-3xl font-black text-md md:text-xl transition-all mb-4 shadow-xl shadow-blue-100 uppercase tracking-widest flex items-center justify-center gap-3"
      >
        {isPaying ? (
          <Loader2 className="animate-spin" />
        ) : !isLoggedIn ? (
          <>
            <LogIn size={20} />
            <span>Entrar para Continuar</span>
          </>
        ) : (
          activeTab === "subscription" ? "Assine Agora" : "Compre Agora"
        )}
      </button>

      <div className="flex justify-center items-center gap-8 opacity-30 grayscale mt-4 pb-2">
        <Image src="https://upload.wikimedia.org/wikipedia/commons/8/81/Wikimedia-logo.svg" alt="Pix" width={30} height={32} />
        <Image src="https://upload.wikimedia.org/wikipedia/commons/5/5e/Visa_Inc._logo.svg" width={40} height={40} alt="Visa" />
        <Image src="https://upload.wikimedia.org/wikipedia/commons/2/2a/Mastercard-logo.svg" width={30} height={25} alt="Mastercard" />
        <Image src="https://upload.wikimedia.org/wikipedia/commons/b/b5/PayPal.svg" width={80} height={15} alt="PayPal" />
      </div>
    </div>
  )

  return (
    <div className="fixed inset-0 bg-black/60 backdrop-blur-sm z-[100] flex items-center justify-center p-0 sm:p-4">
      <style jsx global>{`
        .modal-scrollbar::-webkit-scrollbar { width: 6px; }
        .modal-scrollbar::-webkit-scrollbar-track { background: transparent; }
        .modal-scrollbar::-webkit-scrollbar-thumb { background: #e2e8f0; border-radius: 10px; }
      `}</style>

      <div
        // 关键点：sm:h-[750px] 固定高度防止闪动
        className="bg-white w-full max-w-6xl h-full sm:h-[750px] flex flex-col lg:flex-row overflow-hidden relative sm:rounded-[40px] shadow-2xl transition-all duration-300"
        onClick={(e) => e.stopPropagation()}
      >
        {/* 关闭按钮 */}
        <button
          onClick={onClose}
          className="absolute right-4 top-2 sm:right-6 sm:top-6 z-[120] p-2 bg-gray-100 hover:bg-gray-200 rounded-full text-gray-500 transition-all shadow-sm"
        >
          <X size={20} strokeWidth={3} />
        </button>

        {/* 左侧：描述 (PC端固定显示) */}
        <aside className="hidden lg:flex w-full lg:w-85 xl:w-95 bg-[#f4f7ff] p-12 flex-col shrink-0 border-r border-blue-50">
          <Benefits />
        </aside>

        {/* 右侧：主内容区 */}
        <div className="flex-1 flex flex-col bg-white overflow-hidden">

          {/* 容器在移动端整体滚动，在PC端内部滚动 */}
          <div className="flex-1 flex flex-col overflow-y-auto lg:overflow-hidden">

            <div className="p-6 pt-12 md:pt-6 flex flex-col h-full lg:overflow-hidden">

              {/* 1. Tab 切换区 (固定高度) */}
              <div className="shrink-0">
                <div className="flex justify-center mb-4">
                  <div className="bg-slate-100 p-1.5 rounded-2xl flex w-full max-w-md shadow-inner">
                    <button
                      onClick={() => { setActiveTab("subscription"); setSelectedId("pro"); }}
                      className={`flex-1 py-2 rounded-xl text-md font-black transition-all ${activeTab === "subscription" ? "bg-white text-blue-600 shadow-md" : "text-gray-400"}`}
                    >Assinaturas</button>
                    <button
                      onClick={() => { setActiveTab("credits"); setSelectedId("50"); }}
                      className={`flex-1 py-2 rounded-xl text-md font-black transition-all ${activeTab === "credits" ? "bg-white text-blue-600 shadow-sm" : "text-gray-400"}`}
                    >Créditos Avulsos</button>
                  </div>
                </div>

                {/* 关键修复：固定副标题高度 (h-16)，防止切换模式时列表位置跳动 */}
                <div className="h-12 flex items-center justify-center">
                  {activeTab === "subscription" ? (
                    <div className="flex justify-center gap-10 font-black text-sm tracking-widest border-b border-slate-50 pb-3 w-full animate-in fade-in duration-300">
                      <button onClick={() => setBillingCycle("monthly")} className={`pb-1 border-b-2 transition-all ${billingCycle === "monthly" ? "text-blue-600 border-blue-600" : "text-slate-300 border-transparent"}`}>MENSAL</button>
                      <button onClick={() => setBillingCycle("yearly")} className={`pb-1 relative border-b-2 transition-all flex items-center ${billingCycle === "yearly" ? "text-blue-600 border-blue-600" : "text-slate-300 border-transparent"}`}>
                        ANUAL
                        <span className="absolute -top-4.5 left-2 md:left-full whitespace-nowrap text-green-600 font-black bg-green-50 px-2 py-0.5 rounded text-[10px] border border-green-100 uppercase">Economize 40%</span>
                      </button>
                    </div>
                  ) : (
                    <div className="text-slate-400 font-black text-xs tracking-[0.2em] uppercase pb-3 animate-in fade-in duration-300">
                      Pagamento Único
                    </div>
                  )}
                </div>
              </div>

              {/* 2. 列表区域：PC端独立滚动，设置最小高度保证平滑 */}
              <div className="flex-1 lg:overflow-y-auto lg:modal-scrollbar space-y-2 min-h-95">
                {activeTab === "subscription" ? subscriptions.map((p) => (
                  <div key={p.id} onClick={() => setSelectedId(p.id)} className={`relative p-3 rounded-3xl border-2 cursor-pointer transition-all flex items-center justify-between ${selectedId === p.id ? 'border-blue-600 bg-blue-50/40 ring-4 ring-blue-600/5 shadow-sm' : 'border-slate-50 bg-slate-50/50 hover:border-blue-100'}`}>
                    <div className="flex items-center gap-4">
                      <div className={`w-6 h-6 rounded-full border-2 flex items-center justify-center transition-colors ${selectedId === p.id ? 'border-blue-600 bg-blue-600 text-white' : 'border-slate-300 bg-white'}`}>
                        {selectedId === p.id && <Check size={14} strokeWidth={4} />}
                      </div>
                      <div>
                        <div className="font-black text-slate-900 text-sm lg:text-base tracking-tight leading-none uppercase">{p.name}</div>
                        <div className="text-[11px] font-bold text-slate-400 mt-1.5 tracking-tight">+{p.credits} créditos / {billingCycle === 'monthly' ? 'mês' : 'ano'}</div>
                      </div>
                    </div>
                    <div className="text-right font-black text-slate-900 italic leading-none">
                      <div className="text-xl lg:text-2xl tracking-tighter leading-none">R${(billingCycle === "monthly" ? p.monthly : p.yearlyMonthly).toFixed(2)}<span className="text-[10px] font-bold text-slate-400 not-italic ml-0.5">/mês</span></div>
                    </div>
                    {p.highlighted && (
                      <div className="absolute -top-2.5 right-6 bg-blue-600 text-white text-[8px] px-3 py-1 rounded-full font-black shadow-lg flex items-center gap-1 tracking-widest uppercase">
                        <Star size={8} fill="white" /> Popular
                      </div>
                    )}
                  </div>
                )) : creditPacks.map((pack) => (
                  <div key={pack.id} onClick={() => setSelectedId(pack.id)} className={`relative p-6 rounded-3xl border-2 cursor-pointer transition-all flex items-center justify-between ${selectedId === pack.id ? 'border-blue-600 bg-blue-50/40 ring-4 ring-blue-600/5 shadow-sm' : 'border-slate-50 bg-slate-50/50 hover:border-blue-100'}`}>
                    <div className="flex items-center gap-4">
                      <div className={`w-6 h-6 rounded-full border-2 flex items-center justify-center transition-colors ${selectedId === pack.id ? 'border-blue-600 bg-blue-600 text-white' : 'border-slate-300 bg-white'}`}>
                        {selectedId === pack.id && <Check size={14} strokeWidth={4} />}
                      </div>
                      <div>
                        <div className="font-black text-slate-900 text-base tracking-tight leading-none uppercase">{pack.name}</div>
                        <div className="text-[10px] font-black text-green-600 bg-green-50 px-2 py-0.5 rounded mt-1.5 inline-block">SEM EXPIRAÇÃO</div>
                      </div>
                    </div>
                    <div className="text-right font-black text-slate-900 italic leading-none">
                      <div className="text-2xl lg:text-3xl tracking-tighter">R${pack.price.toFixed(2)}</div>
                    </div>
                  </div>
                ))}

                {/* 移动端专属布局：支付按钮和Benefits在列表后连续显示 */}
                <div className="lg:hidden mt-8">
                  <FooterContent />
                  <div className="mt-10 pt-8 border-t border-slate-100 pb-10">
                    <Benefits />
                  </div>
                </div>
              </div>
            </div>

            {/* 3. PC端底部固定结算区 (通过 shrink-0 确保不闪动) */}
            <div className="hidden lg:block mt-auto pt-6 pb-2 px-10 border-t border-slate-50 bg-white shrink-0 shadow-[0_-10px_20px_rgba(0,0,0,0.02)]">
              <FooterContent />
            </div>

          </div>
        </div>
      </div>
    </div>
  )
}