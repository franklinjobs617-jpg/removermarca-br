"use client"

import { useState, useRef, useEffect } from "react"
import Link from "next/link"
import { usePathname } from "next/navigation"
import { useAuth } from "@/lib/auth-context"
import { SaveMenu } from "./save-menu"
import { PricingModal } from "./pricing-modal"
import { LoginModal } from "./login-modal"

export function Header({ onStandardDownload, onPremiumDownload }: any) {
  const pathname = usePathname()
  const { user, credits, isLoggedIn, isLoaded, logout } = useAuth()
  
  const [showUserMenu, setShowUserMenu] = useState(false)
  const [showSaveMenu, setShowSaveMenu] = useState(false)
  const [isLoginOpen, setIsLoginOpen] = useState(false)
  const [isPricingOpen, setIsPricingOpen] = useState(false)
  const [isDrawerOpen, setIsDrawerOpen] = useState(false)
  const [showToolsDropdown, setShowToolsDropdown] = useState(false)
  const [mobileToolsOpen, setMobileToolsOpen] = useState(false)

  const menuRef = useRef<HTMLDivElement>(null)

  // 关键：点击链接后强制关闭所有菜单
  const closeAll = () => {
    setIsDrawerOpen(false)
    setShowToolsDropdown(false)
    setShowUserMenu(false)
  }

  useEffect(() => {
    closeAll()
  }, [pathname])

  const navItems = [
    { name: "Início", href: "/" },
    { name: "Versão Grátis", href: "/tirar-marca-dagua-online-gratis" },
    { 
      name: "Ferramentas", 
      isDropdown: true,
      
      children: [
        { name: "Processamento HD", href: "/removedor-de-imagem" },
        { name: "Limpeza de Logos", href: "/removedor-marcadaagua" },
        { name: "Uso Comercial", href: "/apagar-foto" },
      ]
    },
    { name: "Preços", href: "/precos" },
    { name: "Tutorial", href: "/como-remover-marca-dagua-de-foto" },
    { name: "FAQ", href: "/como-tirar-foto" },
  ]

  return (
    <>
      <header className="fixed top-0 left-0 right-0 h-16 bg-white/95 backdrop-blur-md border-b border-gray-100 flex items-center justify-between px-4 md:px-6 z-[60]">
        <div className="flex items-center gap-6 md:gap-10">
          <Link href="/" className="flex items-center gap-2 group">
             <div className="w-8 h-8 bg-blue-600 rounded-lg flex items-center justify-center text-white font-black text-xl italic">R</div>
             <span className="text-xl font-black text-gray-900 hidden sm:inline">RemoverMarca</span>
          </Link>
          
          <nav className="hidden lg:flex items-center gap-6">
            {navItems.map((item) => (
              item.isDropdown ? (
                <div 
                  key={item.name} 
                  className="relative h-16 flex items-center"
                  onMouseEnter={() => setShowToolsDropdown(true)}
                  onMouseLeave={() => setShowToolsDropdown(false)}
                >
                  <button className={`flex items-center gap-1 text-sm font-bold ${showToolsDropdown ? 'text-blue-600' : 'text-gray-400'}`}>
                    {item.name}
                    <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7" /></svg>
                  </button>
                  {showToolsDropdown && (
                    <div className="absolute top-full left-0 w-60 bg-white shadow-2xl rounded-2xl border border-gray-50 py-3 animate-in fade-in slide-in-from-top-1">
                      {item.children?.map(child => (
                        <Link 
                          key={child.name} 
                          href={child.href}
                          className="block px-5 py-3 text-sm font-bold text-gray-500 hover:text-blue-600 hover:bg-blue-50/50"
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
                  className={`text-sm font-bold ${pathname === item.href ? 'text-blue-600' : 'text-gray-400 hover:text-gray-600'}`}
                >
                  {item.name}
                </Link>
              )
            ))}
          </nav>
        </div>

        <div className="flex items-center gap-2 md:gap-4" ref={menuRef}>
          {/* 使用 isLoaded 保护，防止水合报错 */}
          <div className="bg-amber-50 border border-amber-100 px-3 py-1.5 rounded-full flex items-center gap-2 min-w-[50px]">
             <div className="bg-amber-400 p-0.5 rounded-full shadow-sm text-[8px] text-white">★</div>
             <span className="text-sm font-black text-amber-700">
               {isLoaded ? credits : "-"}
             </span>
          </div>

          {pathname === '/editor' && (
            <div className="relative">
              <button onClick={() => setShowSaveMenu(!showSaveMenu)} className="bg-blue-600 text-white px-6 md:px-8 py-2.5 rounded-xl text-xs font-black uppercase shadow-lg transition-all active:scale-95">SALVAR</button>
              <SaveMenu isOpen={showSaveMenu} onStandard={onStandardDownload} onPremium={onPremiumDownload} />
            </div>
          )}

          {isLoaded && (isLoggedIn ? (
            <div className="relative">
              <button onClick={() => setShowUserMenu(!showUserMenu)} className="w-10 h-10 bg-blue-600 rounded-full flex items-center justify-center text-white font-bold border-2 border-white shadow-inner">
                {user?.email[0].toUpperCase()}
              </button>
              {showUserMenu && (
                <div className="absolute right-0 top-full mt-2 w-48 bg-white rounded-2xl shadow-2xl border border-gray-100 py-2 animate-in fade-in slide-in-from-top-2">
                  <Link href="/precos" className="w-full px-4 py-3 flex items-center gap-3 text-sm font-bold text-gray-700 hover:bg-gray-50">Assinatura</Link>
                  <button onClick={logout} className="w-full px-4 py-3 text-left text-sm font-bold text-red-500 hover:bg-red-50">Sair</button>
                </div>
              )}
            </div>
          ) : (
            <button onClick={() => setIsLoginOpen(true)} className="bg-sky-500 text-white px-6 py-2.5 rounded-xl text-xs font-black uppercase">ENTRAR</button>
          ))}

          <button onClick={() => setIsDrawerOpen(true)} className="lg:hidden p-2 text-gray-400">
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16m-7 6h7" /></svg>
          </button>
        </div>
      </header>

      {/* Mobile Drawer */}
      <div className={`fixed inset-0 z-[100] lg:hidden ${isDrawerOpen ? "visible" : "invisible"}`}>
        <div className={`absolute inset-0 bg-black/50 transition-opacity ${isDrawerOpen ? "opacity-100" : "opacity-0"}`} onClick={() => setIsDrawerOpen(false)} />
        <div className={`absolute top-0 right-0 w-80 h-full bg-white transition-transform duration-300 ${isDrawerOpen ? "translate-x-0" : "translate-x-full"}`}>
           <div className="p-8 flex flex-col h-full">
              <span className="font-black text-xl mb-10 block">RemoverMarca</span>
              <nav className="flex flex-col gap-3 flex-1 overflow-y-auto">
                 {navItems.map(item => (
                    item.isDropdown ? (
                      <div key={item.name} className="flex flex-col">
                        <button onClick={() => setMobileToolsOpen(!mobileToolsOpen)} className={`flex items-center justify-between p-5 rounded-3xl font-bold ${mobileToolsOpen ? 'bg-blue-50 text-blue-600' : 'bg-gray-50'}`}>
                          {item.name}
                          <svg className={`w-5 h-5 transition-transform ${mobileToolsOpen ? 'rotate-180' : ''}`} fill="none" stroke="currentColor" viewBox="0 0 24 24"><path d="M19 9l-7 7-7-7" /></svg>
                        </button>
                        {mobileToolsOpen && (
                          <div className="flex flex-col gap-2 mt-2 ml-4">
                            {item.children?.map(child => (
                              <Link key={child.name} href={child.href} className="p-4 rounded-2xl font-bold text-gray-500" onClick={closeAll}>• {child.name}</Link>
                            ))}
                          </div>
                        )}
                      </div>
                    ) : (
                      <Link key={item.name} href={item.href || "#"} className={`p-5 rounded-3xl font-bold ${pathname === item.href ? 'bg-blue-600 text-white' : 'bg-gray-50'}`} onClick={closeAll}>
                        {item.name}
                      </Link>
                    )
                 ))}
                 {isLoggedIn && <button onClick={() => { logout(); closeAll(); }} className="p-5 bg-red-50 text-red-500 rounded-3xl font-bold text-left">Sair</button>}
              </nav>
           </div>
        </div>
      </div>

      <LoginModal isOpen={isLoginOpen} onClose={() => setIsLoginOpen(false)} />
      <PricingModal isOpen={isPricingOpen} onClose={() => setIsPricingOpen(false)} />
    </>
  );
}