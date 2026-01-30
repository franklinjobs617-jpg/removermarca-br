"use client"

import React, { useState, useEffect } from "react"
import { Check, Info, X, Star, Loader2, LogIn, CreditCard } from "lucide-react"
import { useAuth } from "@/lib/auth-context"
import Image from "next/image"
import { usePathname } from "next/navigation"
import { EditorDictionary } from "./editor-interface"
import { PayPalButtons } from "@paypal/react-paypal-js"

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

interface PricingModalProps {
  isOpen: boolean;
  onClose: () => void;
  onOpenLogin: () => void;
  dict: EditorDictionary;
}

export function PricingModal({ isOpen, onClose, onOpenLogin, dict }: PricingModalProps) {
  const { isLoggedIn, user } = useAuth()
  const pathname = usePathname()

  // 核心判断逻辑
  const isEn = pathname?.includes("/en") ?? false;
  const currency = isEn ? '$' : 'R$';

  const [activeTab, setActiveTab] = useState<PlanType>("subscription")
  const [billingCycle, setBillingCycle] = useState<BillingCycle>("yearly")
  const [selectedId, setSelectedId] = useState("standard")
  const [isPaying, setIsPaying] = useState(false)

  // 锁定背景滚动
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden"
    } else {
      document.body.style.overflow = "unset"
    }
    return () => { document.body.style.overflow = "unset" }
  }, [isOpen])

  if (!isOpen) return null

  // --- 套餐数据映射 ---
  const subscriptions: SubscriptionPlan[] = [
    { id: "lite", name: "Lite", credits: 50, monthly: isEn ? 4.90 : 25.00, yearly: isEn ? 47.00 : 239.00, yearlyMonthly: isEn ? 3.92 : 19.92, desc: isEn ? "Entry" : "Iniciante" },
    { id: "standard", name: "Standard", credits: 200, monthly: isEn ? 12.90 : 65.00, yearly: isEn ? 124.00 : 625.00, yearlyMonthly: isEn ? 10.33 : 52.08, desc: isEn ? "Most Popular" : "Mais Popular", highlighted: true },
    { id: "advanced", name: "Advanced", credits: 800, monthly: isEn ? 39.90 : 199.00, yearly: isEn ? 383.00 : 1910.00, yearlyMonthly: isEn ? 31.92 : 159.17, desc: isEn ? "Best Value" : "Melhor Valor" },
  ]

  const creditPacks: CreditPack[] = [
    { id: "starter", name: "Starter", credits: 5, price: isEn ? 1.99 : 9.90, perImg: isEn ? 0.40 : 1.98, tag: isEn ? "Trial" : "Experimental" },
    { id: "value", name: "Value", credits: 60, price: isEn ? 9.90 : 49.90, perImg: isEn ? 0.17 : 0.83, tag: isEn ? "Best Choice" : "Mais Comum" },
    { id: "pro", name: "Pro", credits: 150, price: isEn ? 19.90 : 99.00, perImg: isEn ? 0.13 : 0.66, tag: isEn ? "Big Volume" : "Grande Volume" },
  ]

  // --- 参数转换逻辑 ---
  const getBackendParams = () => {
    let type = "";
    if (activeTab === "subscription") {
      const capId = selectedId.charAt(0).toUpperCase() + selectedId.slice(1);
      type = `${capId}_${billingCycle}`;
    } else {
      const mapping: Record<string, string> = { starter: "5", value: "60", pro: "150" };
      type = `credits_${mapping[selectedId]}`;
    }
    return { type, currency: isEn ? "usd" : "brl" };
  }

  // --- Stripe 支付逻辑 ---
  const handleStripePayment = async () => {
    if (!isLoggedIn) {
      onOpenLogin();
      return;
    }
    setIsPaying(true);
    const token = localStorage.getItem("auth_token");
    const { type, currency } = getBackendParams();

    try {
      const response = await fetch('/api/pay', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'Authorization': `Bearer ${token}`
        },
        body: JSON.stringify({ type, currency })
      });
      const resData = await response.json();
      if (resData.status === "success" && resData.url) {
        window.location.href = resData.url;
      } else {
        alert(resData.message || (isEn ? "Error initiating payment" : "Erro ao iniciar pagamento"));
        setIsPaying(false);
      }
    } catch (error) {
      console.error(error);
      setIsPaying(false);
    }
  };

  const getSelectedPrice = () => {
    if (activeTab === "subscription") {
      const plan = subscriptions.find(s => s.id === selectedId) || subscriptions[1]
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
        {dict.pricingTitle} <br />
        <span className="relative inline-block text-blue-600 lg:text-slate-900">
          {dict.pricingSubtitle}
          <div className="absolute -bottom-1 left-0 w-full h-1 bg-blue-600/20 rounded-full" />
        </span>
      </h2>
      <div className="space-y-10 pt-4">
        <div className="space-y-4">
          <h4 className="text-blue-600 font-black text-xs tracking-[0.2em] uppercase">{dict.proBenefits}</h4>
          <ul className="space-y-4">
            {[
              isEn ? "High quality downloads" : "Downloads em alta qualidade",
              isEn ? "Extra credits included" : "Créditos extras incluídos",
              isEn ? "Ideal for professionals" : "Ideal para profissionais",
              isEn ? "No watermark on previews" : "Sem marca d'água na prévia"
            ].map(item => (
              <li key={item} className="flex items-start gap-3 text-slate-700 font-bold text-sm leading-tight">
                <div className="bg-blue-600 rounded-full p-0.5 shrink-0 mt-0.5"><Check size={10} className="text-white stroke-[4px]" /></div>
                <span>{item}</span>
              </li>
            ))}
          </ul>
        </div>
      </div>
      <div className="mt-auto pt-6 flex items-center gap-2 text-slate-400 text-xs font-black tracking-widest">
        <Info size={12} /> <span>{dict.creditInfo}</span>
      </div>
    </div>
  )

  const FooterContent = () => (
    <div className="w-full">
      <div className="flex items-center justify-center gap-4 mb-4">
        {billingCycle === 'yearly' && activeTab === 'subscription' && (
          <span className="text-slate-300 line-through font-bold text-lg md:text-xl tracking-tighter italic">
            {currency}{(subscriptions.find(s => s.id === selectedId)?.monthly! * 12).toFixed(2)}
          </span>
        )}
        <span className="text-4xl md:text-5xl font-black text-blue-600 tracking-tighter italic leading-none">
          {currency}{getSelectedPrice().toFixed(2)}
        </span>
      </div>

      {/* Stripe 支付按钮 */}
      <button
        onClick={handleStripePayment}
        disabled={isPaying}
        className="w-full bg-blue-600 hover:bg-blue-700 active:scale-[0.98] text-white py-3.5 rounded-3xl font-black text-md md:text-lg transition-all mb-3 shadow-xl shadow-blue-100 uppercase tracking-widest flex items-center justify-center gap-3"
      >
        {isPaying ? <Loader2 className="animate-spin" /> : (
          <>
            <CreditCard size={18} />
            <span>{isEn ? "Pay with Card" : "Pagar com Cartão"}</span>
          </>
        )}
      </button>

      {/* 分割线 */}
      <div className="relative flex py-2 items-center w-full max-w-xs mx-auto mb-2">
        <div className="flex-grow border-t border-slate-200"></div>
        <span className="flex-shrink-0 mx-4 text-slate-300 text-[10px] font-black uppercase tracking-widest">
          {isEn ? "Or pay with" : "Ou pagar com"}
        </span>
        <div className="flex-grow border-t border-slate-200"></div>
      </div>

      {/* PayPal 按钮逻辑 */}
      <div className="w-full max-w-xs mx-auto mb-4 min-h-[50px]">
        <PayPalButtons
          fundingSource="paypal"
          style={{ layout: "vertical", color: "blue", shape: "rect", label: "paypal" }}
          forceReRender={[activeTab, selectedId, billingCycle, isLoggedIn, isEn]}
          onClick={(data, actions) => {
            if (!isLoggedIn) {
              onOpenLogin();
              return actions.reject();
            }
            return actions.resolve();
          }}
          createOrder={async (data, actions) => {
            const { type, currency } = getBackendParams();
            try {
              const res = await fetch("/api/pay/paypal-smart-create", {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify({
                  googleUserId: (user as any)?.googleUserId || "",
                  type,
                  currency,
                  email: user?.email || "",
                  userId: (user as any)?.id || ""
                })
              });
              const json = await res.json();
              if (!res.ok || !json.data) throw new Error("Order creation failed");
              return json.data;
            } catch (err) {
              alert(isEn ? "Could not initiate PayPal." : "Não foi possível iniciar o PayPal.");
              throw err;
            }
          }}
          onApprove={async (data, actions) => {
            try {
              const res = await fetch("/api/pay/paypal-smart-capture", {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify({ orderId: data.orderID })
              });
              const json = await res.json();
              if (json.code === 200 || json.status === "COMPLETED") {
                alert(isEn ? "Success!" : "Sucesso!");
                window.location.reload();
              }
            } catch (err) {
              console.error(err);
            }
          }}
        />
      </div>

      <div className="flex justify-center items-center gap-8 opacity-30 grayscale mt-2 pb-2">
        {!isEn && <Image src="https://upload.wikimedia.org/wikipedia/commons/8/81/Wikimedia-logo.svg" alt="Pix" width={30} height={32} />}
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
        className="bg-white w-full max-w-6xl h-full sm:h-[750px] flex flex-col lg:flex-row overflow-hidden relative sm:rounded-[40px] shadow-2xl transition-all duration-300"
        onClick={(e) => e.stopPropagation()}
      >
        <button
          onClick={onClose}
          className="absolute right-4 top-2 sm:right-6 sm:top-6 z-[120] p-2 bg-gray-100 hover:bg-gray-200 rounded-full text-gray-500 transition-all shadow-sm"
        >
          <X size={20} strokeWidth={3} />
        </button>

        <aside className="hidden lg:flex w-full lg:w-85 xl:w-95 bg-[#f4f7ff] p-12 flex-col shrink-0 border-r border-blue-50">
          <Benefits />
        </aside>

        <div className="flex-1 flex flex-col bg-white overflow-hidden">
          <div className="flex-1 flex flex-col overflow-y-auto lg:overflow-hidden">
            <div className="p-6 pt-12 md:pt-6 flex flex-col h-full lg:overflow-hidden">
              <div className="shrink-0">
                <div className="flex justify-center mb-4">
                  <div className="bg-slate-100 p-1.5 rounded-2xl flex w-full max-w-md shadow-inner">
                    <button
                      onClick={() => { setActiveTab("subscription"); setSelectedId("standard"); }}
                      className={`flex-1 py-2 rounded-xl text-md font-black transition-all ${activeTab === "subscription" ? "bg-white text-blue-600 shadow-md" : "text-gray-400"}`}
                    >{dict.subscription}</button>
                    <button
                      onClick={() => { setActiveTab("credits"); setSelectedId("value"); }}
                      className={`flex-1 py-2 rounded-xl text-md font-black transition-all ${activeTab === "credits" ? "bg-white text-blue-600 shadow-sm" : "text-gray-400"}`}
                    >{dict.credits}</button>
                  </div>
                </div>

                <div className="h-12 flex items-center justify-center">
                  {activeTab === "subscription" ? (
                    <div className="flex justify-center gap-10 font-black text-sm tracking-widest border-b border-slate-50 pb-3 w-full animate-in fade-in duration-300">
                      <button onClick={() => setBillingCycle("monthly")} className={`pb-1 border-b-2 transition-all ${billingCycle === "monthly" ? "text-blue-600 border-blue-600" : "text-slate-300 border-transparent"}`}>{dict.monthly.toUpperCase()}</button>
                      <button onClick={() => setBillingCycle("yearly")} className={`pb-1 relative border-b-2 transition-all flex items-center ${billingCycle === "yearly" ? "text-blue-600 border-blue-600" : "text-slate-300 border-transparent"}`}>
                        {dict.yearly.toUpperCase()}
                        <span className="absolute -top-4.5 left-2 md:left-full whitespace-nowrap text-green-600 font-black bg-green-50 px-2 py-0.5 rounded text-[10px] border border-green-100 uppercase">{dict.savePercent}</span>
                      </button>
                    </div>
                  ) : (
                    <div className="text-slate-400 font-black text-xs tracking-[0.2em] uppercase pb-3 animate-in fade-in duration-300">
                      {dict.oneTimePayment}
                    </div>
                  )}
                </div>
              </div>

              <div className="flex-1 lg:overflow-y-auto lg:modal-scrollbar space-y-2 min-h-95">
                {activeTab === "subscription" ? subscriptions.map((p) => (
                  <div key={p.id} onClick={() => setSelectedId(p.id)} className={`relative p-3 rounded-3xl border-2 cursor-pointer transition-all flex items-center justify-between ${selectedId === p.id ? 'border-blue-600 bg-blue-50/40 ring-4 ring-blue-600/5 shadow-sm' : 'border-slate-50 bg-slate-50/50 hover:border-blue-100'}`}>
                    <div className="flex items-center gap-4">
                      <div className={`w-6 h-6 rounded-full border-2 flex items-center justify-center transition-colors ${selectedId === p.id ? 'border-blue-600 bg-blue-600 text-white' : 'border-slate-300 bg-white'}`}>
                        {selectedId === p.id && <Check size={14} strokeWidth={4} />}
                      </div>
                      <div>
                        <div className="font-black text-slate-900 text-sm lg:text-base tracking-tight leading-none uppercase">{p.name}</div>
                        <div className="text-[11px] font-bold text-slate-400 mt-1.5 tracking-tight">+{p.credits} {dict.credits} / {billingCycle === 'monthly' ? 'mo' : 'yr'}</div>
                      </div>
                    </div>
                    <div className="text-right font-black text-slate-900 italic leading-none">
                      <div className="text-xl lg:text-2xl tracking-tighter leading-none">{currency}{(billingCycle === "monthly" ? p.monthly : p.yearlyMonthly).toFixed(2)}<span className="text-[10px] font-bold text-slate-400 not-italic ml-0.5">/mo</span></div>
                    </div>
                    {p.highlighted && (
                      <div className="absolute -top-2.5 right-6 bg-blue-600 text-white text-[8px] px-3 py-1 rounded-full font-black shadow-lg flex items-center gap-1 tracking-widest uppercase">
                        <Star size={8} fill="white" /> {isEn ? "Recommended" : "Recomendado"}
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
                        <div className="text-[10px] font-black text-green-600 bg-green-50 px-2 py-0.5 rounded mt-1.5 inline-block">{isEn ? "PERMANENT" : "PERMANENTE"}</div>
                      </div>
                    </div>
                    <div className="text-right font-black text-slate-900 italic leading-none">
                      <div className="text-2xl lg:text-3xl tracking-tighter">{currency}{pack.price.toFixed(2)}</div>
                    </div>
                  </div>
                ))}

                <div className="lg:hidden mt-8">
                  <FooterContent />
                  <div className="mt-10 pt-8 border-t border-slate-100 pb-10">
                    <Benefits />
                  </div>
                </div>
              </div>
            </div>

            <div className="hidden lg:block mt-auto pt-6 pb-2 px-10 border-t border-slate-50 bg-white shrink-0 shadow-[0_-10px_20px_rgba(0,0,0,0.02)]">
              <FooterContent />
            </div>

          </div>
        </div>
      </div>
    </div>
  )
}