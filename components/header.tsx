"use client"

import { useState, useRef, useEffect } from "react"
import Link from "next/link"
import { usePathname } from "next/navigation"
import { useAuth } from "@/lib/auth-context"
import { SaveMenu } from "./save-menu"
import { PricingModal } from "./pricing-modal"
import { LoginModal } from "./login-modal"
import { Zap, Sparkles, ChevronDown } from "lucide-react"

// --- 关键修复：在接口中添加 onOpenPricing ---
interface HeaderProps {
  onStandardDownload?: () => void;
  onPremiumDownload?: () => void;
  onOpenPricing?: () => void; // 新增：用于从外部控制定价弹窗
  canSave?: boolean;
}

export function Header({ 
  onStandardDownload, 
  onPremiumDownload, 
  onOpenPricing, 
  canSave = true 
}: HeaderProps) {
  const pathname = usePathname()
  const { user, credits, isLoggedIn, isLoaded, logout } = useAuth()
  
  // 显隐状态控制
  const [showUserMenu, setShowUserMenu] = useState(false)
  const [showSaveMenu, setShowSaveMenu] = useState(false)
  const [showToolsDropdown, setShowToolsDropdown] = useState(false)
  const [showPromo, setShowPromo] = useState(false) // 积分优惠小窗
  
  // 模态框状态
  const [isLoginOpen, setIsLoginOpen] = useState(false)
  const [isPricingOpen, setIsPricingOpen] = useState(false) // 仅用于非编辑器页面的独立弹窗
  const [isDrawerOpen, setIsDrawerOpen] = useState(false)
  const [mobileToolsOpen, setMobileToolsOpen] = useState(false)

  // Refs 用于点击外部收回
  const toolsRef = useRef<HTMLDivElement>(null)
  const userMenuRef = useRef<HTMLDivElement>(null)
  const saveMenuRef = useRef<HTMLDivElement>(null)
  const promoRef = useRef<HTMLDivElement>(null)

  const userInitial = user?.email?.[0]?.toUpperCase() || 'U'

  // 点击外部自动收回
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      const target = event.target as Node;
      if (toolsRef.current && !toolsRef.current.contains(target)) setShowToolsDropdown(false);
      if (userMenuRef.current && !userMenuRef.current.contains(target)) setShowUserMenu(false);
      if (saveMenuRef.current && !saveMenuRef.current.contains(target)) setShowSaveMenu(false);
      if (promoRef.current && !promoRef.current.contains(target)) setShowPromo(false);
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  // 路由改变自动关闭
  useEffect(() => {
    setIsDrawerOpen(false)
    setShowToolsDropdown(false)
    setShowUserMenu(false)
    setShowSaveMenu(false)
    setShowPromo(false)
  }, [pathname])

  const navItems = [
    { name: "Início", href: "/" },
    { name: "Tirar Grátis", href: "/tirar-marca-dagua-online-gratis" },
    { 
      name: "Ferramentas", 
      isDropdown: true,
      children: [
        { name: "Processamento HD", href: "/removedor-de-marca-dagua-de-imagem" },
        { name: "Limpeza de Logos", href: "/removedor-de-marca-da-agua" },
        { name: "Uso Comercial", href: "/apagar-marca-dagua-de-foto" },
      ]
    },
    { name: "Preços", href: "/precos" },
    { name: "Tutorial", href: "/como-remover-marca-dagua-de-foto" },
    { name: "FAQ", href: "/como-tirar-marca-dagua" },
  ]

  return (
    <>
      <header className="fixed top-0 left-0 right-0 h-16 bg-white/95 backdrop-blur-md border-b border-gray-100 flex items-center justify-between px-4 md:px-6 z-[60]">
        
        <div className="flex items-center gap-6 md:gap-10">
          <Link href="/" className="flex items-center gap-2 group">
             <div className="w-8 h-8 bg-blue-600 rounded-lg flex items-center justify-center text-white font-black text-xl italic transition-transform group-hover:scale-110">R</div>
             <span className="text-xl font-black text-slate-900 hidden sm:inline tracking-tighter">RemoverMarca</span>
          </Link>
          
          <nav className="hidden lg:flex items-center gap-6">
            {navItems.map((item) => (
              item.isDropdown ? (
                <div key={item.name} ref={toolsRef} className="relative h-16 flex items-center">
                  <button 
                    onClick={() => setShowToolsDropdown(!showToolsDropdown)}
                    className={`flex items-center gap-1 text-sm font-bold transition-colors ${showToolsDropdown || item.children?.some(c => c.href === pathname) ? 'text-blue-600' : 'text-gray-400 hover:text-gray-600'}`}
                  >
                    {item.name}
                    <ChevronDown className={`w-4 h-4 transition-transform duration-300 ${showToolsDropdown ? 'rotate-180' : ''}`} />
                  </button>
                  
                  {showToolsDropdown && (
                    <div className="absolute top-full left-0 w-64 bg-white shadow-2xl rounded-2xl border border-gray-50 py-3 animate-in fade-in slide-in-from-top-1 duration-200">
                      {item.children?.map(child => (
                        <Link 
                          key={child.name} 
                          href={child.href}
                          className={`block px-5 py-3 text-sm font-bold transition-all ${pathname === child.href ? 'text-blue-600 bg-blue-50/50' : 'text-gray-500 hover:text-blue-600 hover:bg-gray-50'}`}
                        >
                          {child.name}
                        </Link>
                      ))}
                    </div>
                  )}
                </div>
              ) : (
                <Link 
                  key={item.name} 
                  href={item.href || "#"} 
                  className={`text-sm font-bold transition-colors ${pathname === item.href ? 'text-blue-600' : 'text-gray-400 hover:text-gray-600'}`}
                >
                  {item.name}
                </Link>
              )
            ))}
          </nav>
        </div>

        <div className="flex items-center gap-2 md:gap-4">
          
          {/* --- 积分徽章 & 优惠小窗 --- */}
          <div className="relative" ref={promoRef}>
            <button 
              onClick={() => setShowPromo(!showPromo)}
              className="flex items-center gap-2.5 px-3 py-1.5 bg-slate-50 border border-slate-200 rounded-2xl hover:bg-white hover:border-blue-200 hover:shadow-sm transition-all group"
            >
              <div className="flex items-center justify-center w-5 h-5 bg-blue-600 rounded-lg shadow-sm">
                <Zap className="w-3 h-3 text-white fill-current" />
              </div>
              <span className="text-sm font-black text-slate-700 tracking-tight">
                {isLoaded ? `${credits} créditos` : "—"}
              </span>
            </button>

            {showPromo && (
              <div className="absolute top-full right-0 mt-3 w-64 bg-white rounded-2xl shadow-2xl border border-blue-100 p-5 animate-in zoom-in duration-200 z-[70]">
                <div className="flex items-center gap-2 text-blue-600 mb-2">
                  <Sparkles size={16} />
                  <span className="text-[10px] font-black uppercase tracking-widest text-blue-600">Oferta Especial</span>
                </div>
                <p className="text-sm text-slate-600 mb-5 font-medium leading-relaxed">
                  Ganhe até <span className="text-green-600 font-black">40% OFF</span> assinando um plano premium hoje!
                </p>
                <button 
                  onClick={() => { 
                    // 【逻辑关联】：优先使用外部传入的弹窗控制，否则使用内部的
                    if (onOpenPricing) {
                      onOpenPricing();
                    } else {
                      setIsPricingOpen(true);
                    }
                    setShowPromo(false); 
                  }}
                  className="w-full py-2.5 bg-blue-600 text-white rounded-xl text-xs font-black uppercase tracking-widest hover:bg-blue-700 transition-all shadow-lg shadow-blue-100 active:scale-95"
                >
                  Saiba Mais
                </button>
              </div>
            )}
          </div>

          {/* --- SALVAR 按钮 --- */}
          {pathname === '/editor' && (
            <div className="relative" ref={saveMenuRef}>
              <button 
                onClick={() => canSave && setShowSaveMenu(!showSaveMenu)}
                disabled={!canSave}
                className={`hidden lg:inline-block px-8 py-2.5 rounded-xl text-xs font-black uppercase tracking-widest shadow-lg transition-all active:scale-95 ${
                  canSave 
                  ? "bg-blue-600 text-white shadow-blue-100 hover:bg-blue-700" 
                  : "bg-slate-200 text-slate-400 cursor-not-allowed shadow-none"
                }`}
              >
                {canSave ? "SALVAR" : "LIMPANDO..."}
              </button>
              {canSave && (
                <SaveMenu 
                  isOpen={showSaveMenu} 
                  onStandard={() => { setShowSaveMenu(false); onStandardDownload?.(); }}
                  onPremium={() => { 
                    setShowSaveMenu(false); 
                    if(onOpenPricing) onOpenPricing(); else setIsPricingOpen(true); 
                  }}
                />
              )}
            </div>
          )}

          {/* 用户菜单 */}
          {isLoaded && (isLoggedIn ? (
            <div className="relative" ref={userMenuRef}>
              <button 
                onClick={() => setShowUserMenu(!showUserMenu)}
                className="w-10 h-10 bg-blue-600 rounded-full flex items-center justify-center text-white font-bold border-2 border-white shadow-inner active:scale-95 transition-transform"
              >
                {userInitial}
              </button>
              
              {showUserMenu && (
                <div className="absolute right-0 top-full mt-2 w-48 bg-white rounded-2xl shadow-2xl border border-gray-100 py-2 z-[70] animate-in fade-in slide-in-from-top-2">
                  <button 
                    onClick={() => { 
                      if(onOpenPricing) onOpenPricing(); else setIsPricingOpen(true); 
                      setShowUserMenu(false); 
                    }}
                    className="w-full px-4 py-3 flex items-center gap-3 text-sm font-bold text-gray-700 hover:bg-gray-50 transition-colors"
                  >
                    <Sparkles size={16} className="text-blue-600" />
                    Assinatura
                  </button>
                  <div className="h-px bg-gray-100 mx-2 my-1" />
                  <button 
                    onClick={() => { logout(); setShowUserMenu(false); }} 
                    className="w-full px-4 py-3 flex items-center gap-3 text-sm font-bold text-red-500 hover:bg-red-50 transition-colors text-left"
                  >
                    <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17 16l4-4m0 0l-4-4m4 4H7m6 4v1a3 3 0 01-3 3H6a3 3 0 01-3-3V7a3 3 0 013-3h4a3 3 0 013 3v1" /></svg>
                    Sair
                  </button>
                </div>
              )}
            </div>
          ) : (
            <button 
              onClick={() => setIsLoginOpen(true)} 
              className="bg-sky-500 hover:bg-sky-600 text-white px-5 md:px-6 py-2.5 rounded-xl text-xs font-black uppercase tracking-widest shadow-md transition-all active:scale-95"
            >
              ENTRAR
            </button>
          ))}

          {/* 移动端菜单 */}
          <button onClick={() => setIsDrawerOpen(true)} className="lg:hidden p-2 text-gray-400 hover:bg-gray-50 rounded-lg">
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16m-7 6h7" /></svg>
          </button>
        </div>
      </header>

      {/* 移动端抽屉 */}
      <div className={`fixed inset-0 z-[100] lg:hidden transition-all ${isDrawerOpen ? "visible" : "invisible"}`}>
        <div className={`absolute inset-0 bg-black/50 transition-opacity duration-300 ${isDrawerOpen ? "opacity-100" : "opacity-0"}`} onClick={() => setIsDrawerOpen(false)} />
        <div className={`absolute top-0 right-0 w-80 h-full bg-white transition-transform duration-300 ${isDrawerOpen ? "translate-x-0" : "translate-x-full"}`}>
           <div className="p-8 flex flex-col h-full">
              <span className="font-black text-xl mb-10 block uppercase tracking-tighter italic">RemoverMarca</span>
              <nav className="flex flex-col gap-3 flex-1 overflow-y-auto">
                 {navItems.map(item => (
                    item.isDropdown ? (
                      <div key={item.name} className="flex flex-col">
                        <button onClick={() => setMobileToolsOpen(!mobileToolsOpen)} className={`flex items-center justify-between p-5 rounded-3xl font-bold ${mobileToolsOpen ? 'bg-blue-50 text-blue-600' : 'bg-gray-50 text-gray-500'}`}>
                          {item.name}
                          <ChevronDown className={`w-5 h-5 transition-transform ${mobileToolsOpen ? 'rotate-180' : ''}`} />
                        </button>
                        {mobileToolsOpen && (
                          <div className="flex flex-col gap-2 mt-2 ml-4">
                            {item.children?.map(child => (
                              <Link key={child.name} href={child.href} className="p-4 rounded-2xl font-bold text-gray-500" onClick={() => setIsDrawerOpen(false)}>• {child.name}</Link>
                            ))}
                          </div>
                        )}
                      </div>
                    ) : (
                      <Link key={item.name} href={item.href || "#"} className={`p-5 rounded-3xl font-bold ${pathname === item.href ? 'bg-blue-600 text-white shadow-lg shadow-blue-200' : 'bg-gray-50 text-gray-500'}`} onClick={() => setIsDrawerOpen(false)}>
                        {item.name}
                      </Link>
                    )
                 ))}
                 {isLoggedIn && <button onClick={() => { logout(); setIsDrawerOpen(false); }} className="p-5 bg-red-50 text-red-500 rounded-3xl font-bold text-left">Sair</button>}
              </nav>
           </div>
        </div>
      </div>

      {/* 模态框 */}
      <LoginModal isOpen={isLoginOpen} onClose={() => setIsLoginOpen(false)} />
      {/* 仅在非编辑器页面时渲染此弹窗。在编辑器页面，由外部传入的 onOpenPricing 控制 */}
      <PricingModal isOpen={isPricingOpen} onClose={() => setIsPricingOpen(false)} />
    </>
  );
}