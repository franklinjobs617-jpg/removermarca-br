"use client"

import React, { useState } from "react"
import { Header } from "@/components/header"
import { Check, Info, Star, Loader2, CreditCard } from "lucide-react"
import { useAuth } from "@/lib/auth-context"
import { LoginModal } from "@/components/login-modal"
import Image from "next/image"
import { dictionaries } from "@/lib/dictionaries"
import { PayPalButtons } from "@paypal/react-paypal-js";

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

export function PricingContent() {
  const { isLoggedIn, user, isLoaded } = useAuth()

  const [activeTab, setActiveTab] = useState<PlanType>("subscription")
  const [billingCycle, setBillingCycle] = useState<BillingCycle>("yearly")
  const [selectedId, setSelectedId] = useState("standard")

  const [isPaying, setIsPaying] = useState(false)
  const [showLogin, setShowLogin] = useState(false)

  // --- 数据定义 ---
  const subscriptions: SubscriptionPlan[] = [
    { id: "lite", name: "Lite Plan", credits: 50, monthly: 4.90, yearly: 47.00, yearlyMonthly: 3.92 },
    { id: "standard", name: "Standard Plan", credits: 200, monthly: 12.90, yearly: 124.00, yearlyMonthly: 10.33, highlighted: true },
    { id: "advanced", name: "Advanced Plan", credits: 800, monthly: 39.90, yearly: 383.00, yearlyMonthly: 31.92 },
  ]

  const creditPacks: CreditPack[] = [
    { id: "starter", name: "Starter Pack", credits: 5, price: 1.99, perImg: 0.40 },
    { id: "value", name: "Value Pack", credits: 60, price: 9.90, perImg: 0.17 },
    { id: "pro", name: "Pro Pack", credits: 150, price: 19.90, perImg: 0.13 },
  ]

  // --- 核心：将前端 ID 转换为后端需要的 Type 格式 ---
  const getBackendPaymentType = () => {
    if (activeTab === "subscription") {
      // 转换示例: lite + monthly -> Lite_monthly
      const capitalizedId = selectedId.charAt(0).toUpperCase() + selectedId.slice(1);
      return `${capitalizedId}_${billingCycle}`;
    } else {
      // 转换示例: starter -> credits_5, value -> credits_60, pro -> credits_150
      const creditMapping: Record<string, string> = {
        starter: "5",
        value: "60",
        pro: "150"
      };
      return `credits_${creditMapping[selectedId]}`;
    }
  }

  // --- Stripe/通用支付逻辑 ---
  const handlePayment = async () => {
    if (!isLoggedIn) {
      setShowLogin(true)
      return
    }

    setIsPaying(true)
    const token = localStorage.getItem("auth_token")
    const paymentType = getBackendPaymentType(); // 使用新转换逻辑

    try {
      const response = await fetch('/api/pay', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'Authorization': `Bearer ${token}`
        },
        body: JSON.stringify({ type: paymentType })
      })

      const resData = await response.json()
      if (resData.status === "success" && resData.url) {
        window.location.href = resData.url
      } else {
        alert(resData.message || "Error initiating payment")
        setIsPaying(false)
      }
    } catch (e) {
      console.error("Fetch error:", e)
      setIsPaying(false)
    }
  }

  const getDisplayPrice = () => {
    if (activeTab === "subscription") {
      const plan = subscriptions.find(s => s.id === selectedId) || subscriptions[1]
      return billingCycle === "monthly" ? plan.monthly : plan.yearly
    }
    const pack = creditPacks.find(c => c.id === selectedId) || creditPacks[1]
    return pack.price
  }

  const Benefits = () => (
    <div className="flex flex-col h-full space-y-6">
      <div className="flex gap-1.5">
        {[1, 2, 3].map(i => <div key={i} className="w-1.5 h-1.5 bg-blue-600 rounded-full opacity-30" />)}
      </div>
      <h2 className="text-3xl lg:text-[40px] font-black text-slate-900 leading-[1.1] tracking-tighter italic">
        Choose your preferred <br />
        <span className="relative inline-block text-blue-600 lg:text-slate-900">
          plan
          <div className="absolute -bottom-1 left-0 w-full h-1.5 bg-blue-600/20 rounded-full" />
        </span>
      </h2>
      <div className="space-y-10 pt-4">
        <div className="space-y-4">
          <h4 className="text-blue-600 font-black text-xs tracking-[0.2em] uppercase">Pro Benefits:</h4>
          <ul className="space-y-4">
            {["High quality downloads", "Extra credits included", "Ideal for professionals", "No watermark on previews"].map(item => (
              <li key={item} className="flex items-start gap-3 text-slate-700 font-bold text-sm leading-tight">
                <div className="bg-blue-600 rounded-full p-0.5 shrink-0 mt-0.5"><Check size={10} className="text-white stroke-[4px]" /></div>
                <span>{item}</span>
              </li>
            ))}
          </ul>
        </div>
      </div>
      <div className="mt-auto pt-6 flex items-center gap-2 text-slate-400 text-xs font-black tracking-widest">
        <Info size={12} /> <span>1 image = 1 credit</span>
      </div>
    </div>
  )

  return (
    <div className="min-h-screen bg-gray-50 flex flex-col">
      <Header locale="en" dict={dictionaries.en as any} />

      <main className="flex-1 flex items-center justify-center p-4 lg:p-6 pt-24 lg:pt-24">
        <div className="bg-white rounded-[40px] shadow-[0_30px_80px_-20px_rgba(0,0,0,0.08)] border border-slate-100 flex flex-col-reverse lg:flex-row overflow-hidden w-full max-w-6xl h-fit">

          <aside className="w-full lg:w-85 xl:w-95 bg-[#f4f7ff] p-8 lg:p-12 flex flex-col shrink-0 border-r border-blue-50">
            <Benefits />
          </aside>

          <div className="flex-1 p-6 flex flex-col bg-white overflow-hidden">
            <div className="flex justify-center mb-6 shrink-0">
              <div className="bg-slate-100 p-1.5 rounded-2xl flex w-full max-w-105 shadow-inner">
                <button onClick={() => { setActiveTab("subscription"); setSelectedId("standard"); }} className={`flex-1 py-3 rounded-xl text-md font-black transition-all ${activeTab === "subscription" ? "bg-white text-blue-600 shadow-md" : "text-gray-400"}`}>Subscriptions</button>
                <button onClick={() => { setActiveTab("credits"); setSelectedId("value"); }} className={`flex-1 py-3 rounded-xl text-md font-black transition-all ${activeTab === "credits" ? "bg-white text-blue-600 shadow-sm" : "text-gray-400"}`}>Credit Packs</button>
              </div>
            </div>

            <div className="h-14 shrink-0 flex items-center justify-center">
              {activeTab === "subscription" && (
                <div className="flex justify-center gap-10 font-black text-sm tracking-widest border-b border-slate-50 pb-3 w-full animate-in fade-in duration-300">
                  <button onClick={() => setBillingCycle("monthly")} className={`pb-1 border-b-2 transition-all ${billingCycle === "monthly" ? "text-blue-600 border-blue-600" : "text-slate-300 border-transparent"}`}>Monthly</button>
                  <button onClick={() => setBillingCycle("yearly")} className={`pb-1 relative border-b-2 transition-all flex items-center ${billingCycle === "yearly" ? "text-blue-600 border-blue-600" : "text-slate-300 border-transparent"}`}>
                    Yearly
                    <span className="absolute -top-4 left-full ml-1 whitespace-nowrap text-green-600 font-black bg-green-50 px-2 py-0.5 rounded text-xs shadow-sm border border-green-100">Save 20%</span>
                  </button>
                </div>
              )}
            </div>

            <div className="flex-1 overflow-y-auto lg:overflow-hidden no-scrollbar space-y-2.5 mb-6">
              {activeTab === "subscription" ? subscriptions.map((p) => (
                <div key={p.id} onClick={() => setSelectedId(p.id)} className={`relative p-4 rounded-3xl border-2 cursor-pointer transition-all flex items-center justify-between ${selectedId === p.id ? 'border-blue-600 bg-blue-50/30 ring-4 ring-blue-600/5 shadow-sm' : 'border-slate-50 bg-slate-50/50 hover:border-blue-100'}`}>
                  <div className="flex items-center gap-4">
                    <div className={`w-6 h-6 rounded-full border-2 flex items-center justify-center transition-colors ${selectedId === p.id ? 'border-blue-600 bg-blue-600 text-white' : 'border-slate-300 bg-white'}`}>
                      {selectedId === p.id && <Check size={14} strokeWidth={4} />}
                    </div>
                    <div>
                      <div className="font-black text-slate-900 text-sm lg:text-base tracking-tight leading-none">{p.name}</div>
                      <div className="text-xs font-bold text-slate-400 mt-1 tracking-tight">+{p.credits} credits / {billingCycle === 'monthly' ? 'mo' : 'yr'}</div>
                    </div>
                  </div>
                  <div className="text-right font-black text-slate-900 italic">
                    <div className="text-xl lg:text-2xl tracking-tighter leading-none">${(billingCycle === "monthly" ? p.monthly : p.yearlyMonthly).toFixed(2)}<span className="text-[10px] font-bold text-slate-400 not-italic ml-0.5">/mo</span></div>
                    {billingCycle === 'yearly' && <div className="text-xs font-bold text-slate-400 not-italic tracking-tighter mt-1">Total ${p.yearly.toFixed(2)}</div>}
                  </div>
                  {p.highlighted && (
                    <div className="absolute -top-3 right-6 bg-blue-600 text-white text-[8px] px-3 py-0.5 rounded-full font-black shadow-lg flex items-center gap-1 tracking-widest uppercase">
                      <Star size={8} fill="white" /> Recommended
                    </div>
                  )}
                </div>
              )) : creditPacks.map((pack) => (
                <div key={pack.id} onClick={() => setSelectedId(pack.id)} className={`relative p-6 rounded-3xl border-2 cursor-pointer transition-all flex items-center justify-between ${selectedId === pack.id ? 'border-blue-600 bg-blue-50/30 ring-4 ring-blue-600/5 shadow-sm' : 'border-slate-50 bg-slate-50/50 hover:border-blue-100'}`}>
                  <div className="flex items-center gap-4">
                    <div className={`w-6 h-6 rounded-full border-2 flex items-center justify-center transition-colors ${selectedId === pack.id ? 'border-blue-600 bg-blue-600 text-white' : 'border-slate-300 bg-white'}`}>
                      {selectedId === pack.id && <Check size={14} strokeWidth={4} />}
                    </div>
                    <div>
                      <div className="font-black text-slate-900 text-base tracking-tight leading-none">{pack.name}</div>
                      <div className="text-xs font-black text-green-600 bg-green-50 px-2 py-0.5 rounded mt-1.5 inline-block uppercase">Never expires</div>
                    </div>
                  </div>
                  <div className="text-right font-black text-slate-900 italic">
                    <div className="text-2xl lg:text-3xl tracking-tighter leading-none">${pack.price.toFixed(2)}</div>
                  </div>
                </div>
              ))}
            </div>

            <div className="mt-auto pt-4 border-t border-slate-100 text-center shrink-0">
              <div className="flex items-baseline justify-center gap-3 mb-6">
                <span className="text-sm font-black text-slate-400 tracking-widest uppercase">Total due:</span>
                <span className="text-5xl font-black text-blue-600 italic tracking-tighter leading-none">${getDisplayPrice().toFixed(2)}</span>
              </div>

              <div className="w-full max-w-xs mx-auto mb-3">
                <button
                  onClick={handlePayment}
                  disabled={isPaying}
                  className="w-full bg-blue-700 hover:bg-blue-800 text-white font-black py-3.5 rounded-xl shadow-lg transition-all active:scale-95 flex items-center justify-center gap-2"
                >
                  {isPaying ? <Loader2 className="animate-spin" size={20} /> : <span>Pay with Stripe</span>}
                </button>
              </div>

              <div className="relative flex py-2 items-center w-full max-w-xs mx-auto mb-3">
                <div className="flex-grow border-t border-slate-200"></div>
                <span className="flex-shrink-0 mx-4 text-slate-300 text-[10px] font-black uppercase tracking-widest">Or pay with</span>
                <div className="flex-grow border-t border-slate-200"></div>
              </div>

              <div className="w-full max-w-xs mx-auto mb-6 min-h-[50px] z-0">
                <PayPalButtons
                  style={{ layout: "vertical", color: "blue", shape: "rect", label: "paypal" }}
                  forceReRender={[activeTab, selectedId, billingCycle, isLoggedIn]}
                  onClick={(data, actions) => {
                    if (!isLoggedIn) {
                      setShowLogin(true)
                      return actions.reject()
                    }
                    return actions.resolve()
                  }}
                  createOrder={async (data, actions) => {
                    const paymentType = getBackendPaymentType(); // 使用新转换逻辑

                    try {
                      const res = await fetch("/api/pay/paypal-smart-create", {
                        method: "POST",
                        headers: { "Content-Type": "application/json" },
                        body: JSON.stringify({
                          googleUserId: (user as any)?.googleUserId || "",
                          type: paymentType,
                          email: user?.email || "",
                          userId: (user as any)?.id || ""
                        })
                      })

                      const json = await res.json()
                      if (!res.ok || !json.data) {
                        throw new Error(json.msg || "Order creation failed")
                      }

                      return json.data;
                    } catch (err: any) {
                      console.error("PayPal Create Error:", err)
                      alert("Could not initiate PayPal payment. Please try again.")
                      throw err;
                    }
                  }}
                  onApprove={async (data, actions) => {
                    try {
                      const res = await fetch("/api/pay/paypal-smart-capture", {
                        method: "POST",
                        headers: { "Content-Type": "application/json" },
                        body: JSON.stringify({ orderId: data.orderID })
                      })

                      const json = await res.json()
                      if (json.code === 200 || json.status === "COMPLETED") {
                        alert("Payment Successful! Thank you.")
                        window.location.reload()
                      } else {
                        alert("Payment captured but status unknown: " + (json.msg || "Unknown"))
                      }
                    } catch (err) {
                      console.error("Capture Error:", err)
                      alert("Payment failed during capture.")
                    }
                  }}
                />
              </div>

              <div className="flex justify-center items-center gap-8 opacity-30 grayscale pb-2">
                <Image src="https://upload.wikimedia.org/wikipedia/commons/5/5e/Visa_Inc._logo.svg" width={50} height={40} alt="Visa" />
                <Image src="https://upload.wikimedia.org/wikipedia/commons/2/2a/Mastercard-logo.svg" width={40} height={25} alt="Mastercard" />
                <Image src="https://upload.wikimedia.org/wikipedia/commons/b/b5/PayPal.svg" width={100} height={15} alt="PayPal" />
                <Image src="https://upload.wikimedia.org/wikipedia/commons/f/fa/American_Express_logo_%282018%29.svg" width={40} height={40} alt="Amex" />
              </div>
            </div>
          </div>
        </div>
      </main>
      <LoginModal
        isOpen={showLogin}
        onClose={() => setShowLogin(false)}
        locale="en"
        dict={dictionaries.en as any}
      />
    </div>
  )
}