"use client"

import dynamic from 'next/dynamic'
import { useState, useRef, useEffect } from "react"
import Link from "next/link"
import { usePathname, useRouter } from "next/navigation"
import { useAuth } from "@/lib/auth-context"
import { Zap, Sparkles, ChevronDown, X } from "lucide-react"

import { dictionaries } from "@/lib/dictionaries"
import { EditorDictionary } from "./editor-interface"

const PricingModal = dynamic(() => import("./pricing-modal").then(mod => mod.PricingModal), { ssr: false })
const LoginModal = dynamic(() => import("./login-modal").then(mod => mod.LoginModal), { ssr: false })
const SaveMenu = dynamic(() => import("./save-menu").then(mod => mod.SaveMenu), { ssr: false })

// --- 路由对应关系表 ---
// Key: 葡语路径, Value: 英语路径后缀 (不带/en)
const routeMap: Record<string, string> = {
  "/precos": "/pricing",
  "/como-remover-marca-dagua-de-foto": "/how-do-i-remove-watermarks-from-photos",
  "/tirar-marca-dagua-online-gratis": "/remove-watermark-from-photo-online-free",
  "/removedor-de-marca-dagua-de-imagem": "/remove-watermark-from-photo-ai",
  "/removedor-de-marca-da-agua": "/remove-watermark-from-photo-online-free", // 假设对应这个
  "/apagar-marca-dagua-de-foto": "/remove-tiktok-watermark-from-photo",
  "/como-tirar-marca-dagua": "/how-to-remove-watermark-from-photo-in-photoshop", // 举例
  "/editor": "/editor",
}

interface HeaderProps {
  onStandardDownload?: () => void;
  onPremiumDownload?: () => void;
  onOpenPricing?: () => void;
  canSave?: boolean;
  imageCount?: number;
  locale?: string;
  dict?: EditorDictionary;
}

export function Header({
  onStandardDownload,
  onPremiumDownload,
  onOpenPricing,
  canSave = true,
  imageCount = 1,
  locale,
  dict
}: HeaderProps) {
  const pathname = usePathname()
  const router = useRouter()
  const { user, credits, isLoggedIn, isLoaded, logout } = useAuth()

  const currentLocale = locale || (pathname.startsWith('/en') ? 'en' : 'pt');
  const isEn = currentLocale === 'en';
  const t = (dict || (isEn ? dictionaries.en : dictionaries.pt)) as any;

  // --- 核心逻辑：计算切换语言后的路径 ---

  // 获取英文路径
  const getEnLink = () => {
    if (pathname.startsWith('/en')) return pathname; // 已经是英文
    if (pathname === '/') return '/en'; // 首页

    // 在映射表中查找
    const enSuffix = routeMap[pathname];
    if (enSuffix) return `/en${enSuffix}`;

    // 找不到映射则尝试通用前缀
    return `/en${pathname}`;
  };

  // 获取葡文路径
  const getPtLink = () => {
    if (!pathname.startsWith('/en')) return pathname; // 已经是葡文
    if (pathname === '/en') return '/'; // 英文首页回主页

    const enSuffix = pathname.replace('/en', ''); // 得到类似 /pricing

    // 在映射表中反向查找
    const ptPath = Object.keys(routeMap).find(key => routeMap[key] === enSuffix);
    if (ptPath) return ptPath;

    // 找不到映射则尝试去掉 /en
    return enSuffix || '/';
  };

  // 导航配置
  const navItems = isEn ? [
    { name: "Home", href: "/en" },
    { name: "Free Version", href: "/en/remove-watermark-from-photo-online-free" },
    {
      name: "Tools",
      isDropdown: true,
      children: [
        { name: "AI Processing", href: "/en/remove-watermark-from-photo-ai" },
        { name: "Mobile App", href: "/en/app-to-remove-watermark-from-photo" },
        { name: "TikTok Remover", href: "/en/remove-tiktok-watermark-from-photo" },
      ]
    },
    { name: "Pricing", href: "/en/pricing" },
    { name: "Tutorial", href: "/en/how-do-i-remove-watermarks-from-photos" },
    { name: "FAQ", href: "/en/how-to-remove-watermark-from-photo-in-photoshop" },
  ] : [
    { name: "Início", href: "/" },
    { name: "Versão Grátis", href: "/tirar-marca-dagua-online-gratis" },
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
    { name: "FAQ", href: "/como-tirar-a-marca-dagua-de-uma-foto" },
  ]

  const [showUserMenu, setShowUserMenu] = useState(false)
  const [showSaveMenu, setShowSaveMenu] = useState(false)
  const [showToolsDropdown, setShowToolsDropdown] = useState(false)
  const [showPromo, setShowPromo] = useState(false)
  const [isLoginOpen, setIsLoginOpen] = useState(false)
  const [isPricingOpen, setIsPricingOpen] = useState(false)
  const [isDrawerOpen, setIsDrawerOpen] = useState(false)
  const [mobileToolsOpen, setMobileToolsOpen] = useState(false)
  const [shouldReopenPricing, setShouldReopenPricing] = useState(false)

  const toolsRef = useRef<HTMLDivElement>(null)
  const userMenuRef = useRef<HTMLDivElement>(null)
  const saveMenuRef = useRef<HTMLDivElement>(null)
  const promoRef = useRef<HTMLDivElement>(null)

  const userInitial = user?.email?.[0]?.toUpperCase() || 'U'
  const homePath = isEn ? "/en" : "/";

  useEffect(() => {
    if (isDrawerOpen) document.body.style.overflow = 'hidden';
    else document.body.style.overflow = 'unset';
    return () => { document.body.style.overflow = 'unset'; };
  }, [isDrawerOpen]);

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

  useEffect(() => {
    setIsDrawerOpen(false)
    setShowToolsDropdown(false)
    setShowUserMenu(false)
    setShowSaveMenu(false)
    setShowPromo(false)
  }, [pathname])

  const handleOpenLoginFromPricing = () => {
    setShouldReopenPricing(true);
    setIsPricingOpen(false);
    setIsLoginOpen(true);
  };

  const handleCloseLogin = () => {
    setIsLoginOpen(false);
    if (shouldReopenPricing) {
      setIsPricingOpen(true);
      setShouldReopenPricing(false);
    }
  };

  const handleClosePricing = () => {
    setIsPricingOpen(false);
    setShouldReopenPricing(false);
  };

  return (
    <>
      <header className="fixed top-0 left-0 right-0 h-16 bg-white/95 backdrop-blur-md border-b border-gray-100 flex items-center justify-between px-4 md:px-6 z-[60]">

        <div className="flex items-center gap-6 md:gap-10">
          <Link href={homePath} className="flex items-center gap-2 group">
            <div className="w-8 h-8 bg-blue-600 rounded-lg flex items-center justify-center text-white font-black text-xl italic transition-transform group-hover:scale-110 shadow-sm">R</div>
            <span className="text-xl font-black text-slate-900 hidden sm:inline tracking-tighter uppercase italic">{t.brand}</span>
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
          {/* PC端语言切换器 */}
          <div className="hidden sm:flex items-center gap-1.5 mr-2 px-3 py-1.5 bg-slate-50 rounded-full border border-slate-100 text-[12px] font-black uppercase tracking-widest text-slate-400">
            <Link
              href={getPtLink()}
              className={`${!isEn ? 'text-blue-600 underline underline-offset-4' : 'hover:text-slate-600'}`}
            >
              PT
            </Link>
            <span className="opacity-20">/</span>
            <Link
              href={getEnLink()}
              className={`${isEn ? 'text-blue-600 underline underline-offset-4' : 'hover:text-slate-600'}`}
            >
              EN
            </Link>
          </div>

          {/* ... 余额/促销、保存按钮、用户头像逻辑 (保持不变) ... */}
          <div className="relative" ref={promoRef}>
            <button
              onClick={() => setShowPromo(!showPromo)}
              className="flex items-center gap-2.5 px-3 py-1.5 bg-slate-50 border border-slate-200 rounded-2xl hover:bg-white hover:border-blue-200 hover:shadow-sm transition-all group"
            >
              <div className="flex items-center justify-center w-5 h-5 bg-blue-600 rounded-lg transform group-hover:rotate-12 transition-transform shadow-sm">
                <Zap className="w-3 h-3 text-white fill-current" />
              </div>
              <span className="text-sm font-black text-slate-700 tracking-tight leading-none uppercase">
                {isLoaded ? `${credits} ${t.credits}` : "—"}
              </span>
            </button>

            {showPromo && (
              <div className="absolute top-full right-0 mt-3 w-64 bg-white rounded-2xl shadow-2xl border border-blue-100 p-5 animate-in zoom-in duration-200 z-[70]">
                <div className="flex items-center gap-2 text-blue-600 mb-2">
                  <Sparkles size={16} />
                  <span className="text-[10px] font-black uppercase tracking-widest text-blue-600">{t.offerTitle}</span>
                </div>
                <p className="text-sm text-slate-600 mb-5 font-medium leading-relaxed italic">{t.offerText}</p>
                <button
                  onClick={() => { if (onOpenPricing) onOpenPricing(); else setIsPricingOpen(true); setShowPromo(false); }}
                  className="w-full py-2.5 bg-blue-600 text-white rounded-xl text-xs font-black uppercase tracking-widest hover:bg-blue-700 transition-colors shadow-lg shadow-blue-100 active:scale-95"
                >
                  {t.learnMore}
                </button>
              </div>
            )}
          </div>

          {pathname.includes('/editor') && (
            <div className="relative" ref={saveMenuRef}>
              <button
                onClick={() => canSave && setShowSaveMenu(!showSaveMenu)}
                disabled={!canSave}
                className={`hidden lg:inline-block px-8 py-2.5 rounded-xl text-xs font-black uppercase tracking-widest shadow-lg transition-all active:scale-95 ${canSave ? "bg-blue-600 text-white shadow-blue-100 hover:bg-blue-700" : "bg-slate-200 text-slate-400 cursor-not-allowed shadow-none"
                  }`}
              >
                {canSave ? t.save : t.saving}
              </button>
              {canSave && (
                <SaveMenu
                  isOpen={showSaveMenu}
                  imageCount={imageCount}
                  onStandard={() => { setShowSaveMenu(false); onStandardDownload?.(); }}
                  onPremium={() => { setShowSaveMenu(false); if (onOpenPricing) onOpenPricing(); else setIsPricingOpen(true); }}
                  onPremiumDownload={() => { setShowSaveMenu(false); onPremiumDownload?.(); }}
                  locale={isEn ? "en" : "pt"}
                  dict={t}
                />
              )}
            </div>
          )}

          {isLoaded && (isLoggedIn ? (
            <div className="relative" ref={userMenuRef}>
              <button onClick={() => setShowUserMenu(!showUserMenu)} className="w-10 h-10 bg-blue-600 rounded-full flex items-center justify-center text-white font-bold border-2 border-white shadow-inner active:scale-95 transition-transform uppercase">
                {userInitial}
              </button>
              {showUserMenu && (
                <div className="absolute right-0 top-full mt-2 w-48 bg-white rounded-2xl shadow-2xl border border-gray-100 py-2 z-[70] animate-in fade-in slide-in-from-top-2 duration-200">
                  <button onClick={() => { if (onOpenPricing) onOpenPricing(); else setIsPricingOpen(true); setShowUserMenu(false); }} className="w-full px-4 py-3 flex items-center gap-3 text-sm font-bold text-gray-700 hover:bg-gray-50 transition-colors uppercase tracking-widest">
                    <Sparkles size={16} className="text-blue-600" /> {t.subscription}
                  </button>
                  <div className="h-px bg-gray-100 mx-2 my-1" />
                  <button onClick={() => { logout(); setShowUserMenu(false); }} className="w-full px-4 py-3 flex items-center gap-3 text-sm font-bold text-red-500 hover:bg-red-50 transition-colors text-left uppercase tracking-widest text-left">
                    <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17 16l4-4m0 0l-4-4m4 4H7m6 4v1a3 3 0 01-3 3H6a3 3 0 01-3-3V7a3 3 0 013-3h4a3 3 0 013 3v1" /></svg> {t.logout}
                  </button>
                </div>
              )}
            </div>
          ) : (
            <button onClick={() => setIsLoginOpen(true)} className="bg-sky-500 hover:bg-sky-600 text-white px-5 md:px-6 py-2.5 rounded-xl text-xs font-black uppercase tracking-widest shadow-md active:scale-95 transition-all font-bold">
              {t.login}
            </button>
          ))}

          <button onClick={() => setIsDrawerOpen(true)} className="lg:hidden p-2 text-gray-400 hover:bg-gray-50 rounded-lg transition-colors">
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth="2">
              <path strokeLinecap="round" strokeLinejoin="round" d="M4 6h16M4 12h16m-7 6h7" />
            </svg>
          </button>
        </div>
      </header>

      {/* --- 移动端侧边抽屉 --- */}
      <div className={`fixed inset-0 z-[100] lg:hidden transition-all duration-300 ${isDrawerOpen ? "visible" : "invisible"}`}>
        <div className={`absolute inset-0 bg-black/50 transition-opacity duration-300 ${isDrawerOpen ? "opacity-100" : "opacity-0"}`} onClick={() => setIsDrawerOpen(false)} />
        <div className={`absolute top-0 right-0 w-80 h-full bg-white transition-transform duration-300 ease-out shadow-2xl flex flex-col ${isDrawerOpen ? "translate-x-0" : "translate-x-full"}`}>

          <div className="p-6 flex justify-between items-center border-b border-gray-50 shrink-0">
            <span className="font-black text-xl text-gray-900 tracking-tighter italic uppercase">{t.brand}</span>
            <button onClick={() => setIsDrawerOpen(false)} className="p-2 bg-slate-100 text-slate-500 rounded-full">
              <X size={24} strokeWidth={2.5} />
            </button>
          </div>

          {/* 移动端语言切换 */}
          <div className="px-6">
            <div className="flex p-1 bg-slate-100 rounded-2xl border border-slate-200/50 shadow-inner">
              <Link
                href={getPtLink()}
                className={`flex-1 flex items-center justify-center py-2.5 rounded-xl text-xs font-black transition-all duration-300 ${!isEn
                  ? 'bg-white text-blue-600 shadow-sm scale-[1.02]'
                  : 'text-slate-400 hover:text-slate-600'
                  }`}
              >
                PT
              </Link>
              <Link
                href={getEnLink()}
                className={`flex-1 flex items-center justify-center py-2.5 rounded-xl text-xs font-black transition-all duration-300 ${isEn
                  ? 'bg-white text-blue-600 shadow-sm scale-[1.02]'
                  : 'text-slate-400 hover:text-slate-600'
                  }`}
              >
                EN
              </Link>
            </div>
          </div>

          <nav className="flex-1 overflow-y-auto py-2 px-6 space-y-3 no-scrollbar overscroll-behavior-contain">
            {navItems.map(item => (
              item.isDropdown ? (
                <div key={item.name} className="flex flex-col">
                  <button onClick={() => setMobileToolsOpen(!mobileToolsOpen)} className={`flex items-center justify-between p-4 rounded-3xl font-bold ${mobileToolsOpen ? 'bg-blue-50 text-blue-600' : 'bg-gray-50 text-gray-500'}`}>
                    {item.name} <ChevronDown className={`w-5 h-5 transition-transform ${mobileToolsOpen ? 'rotate-180' : ''}`} />
                  </button>
                  {mobileToolsOpen && (
                    <div className="flex flex-col gap-2 mt-2 ml-4">
                      {item.children?.map(child => (
                        <Link key={child.name} href={child.href} className="p-4 rounded-2xl font-bold text-sm text-gray-500 active:text-blue-600" onClick={() => setIsDrawerOpen(false)}>• {child.name}</Link>
                      ))}
                    </div>
                  )}
                </div>
              ) : (
                <Link key={item.name} href={item.href || "#"} className={`p-4 rounded-3xl text-sm font-bold block transition-all ${pathname === item.href ? 'bg-blue-600 text-white shadow-lg shadow-blue-200' : 'bg-gray-50 text-gray-500'}`} onClick={() => setIsDrawerOpen(false)}>
                  {item.name}
                </Link>
              )
            ))}

            {isLoggedIn && (
              <button onClick={() => { logout(); setIsDrawerOpen(false); }} className="p-4 bg-red-50 text-red-500 rounded-3xl font-bold text-left w-full mt-4 text-sm uppercase">
                {t.exit}
              </button>
            )}
          </nav>
        </div>
      </div>

      <PricingModal isOpen={isPricingOpen} onClose={handleClosePricing} onOpenLogin={handleOpenLoginFromPricing} locale={isEn ? "en" : "pt"} dict={t} />
      <LoginModal isOpen={isLoginOpen} onClose={handleCloseLogin} locale={isEn ? "en" : "pt"} dict={t} />
    </>
  );
}