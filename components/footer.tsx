"use client"

import Link from "next/link"
import { ShieldCheck, Mail, Globe, Github, Twitter, Instagram } from "lucide-react"

export function Footer() {
  const currentYear = new Date().getFullYear()

  return (
    <footer className="bg-white border-t border-gray-100 pt-20 pb-10">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-12 mb-16">
          
          {/* 第一列：品牌与简介 */}
          <div className="lg:col-span-2 space-y-6">
            <Link href="/" className="flex items-center gap-2 group w-fit">
              <div className="w-8 h-8 bg-blue-600 rounded-lg flex items-center justify-center text-white font-black text-xl italic transition-transform group-hover:scale-105">
                R
              </div>
              <span className="text-xl font-black text-gray-900 tracking-tighter">RemoverMarca</span>
            </Link>
            <p className="text-slate-500 text-sm leading-relaxed max-w-sm font-medium italic">
              Líder em tecnologia de processamento de imagem com IA no Brasil. 
              Remoção inteligente de marcas d&apos;água em 4K Ultra com precisão absoluta.
            </p>
            <div className="flex items-center gap-4 text-slate-400">
              <Link href="#" className="hover:text-blue-600 transition-colors"><Instagram size={20} /></Link>
              <Link href="#" className="hover:text-blue-600 transition-colors"><Twitter size={20} /></Link>
              <Link href="#" className="hover:text-blue-600 transition-colors"><Github size={20} /></Link>
            </div>
          </div>

         {/* 第二列：Ferramentas (SEO 核心 - 使用提供的文本与路径) */}
<div className="space-y-6">
  <h4 className="text-[10px] font-black text-slate-900 uppercase tracking-[0.2em]">Ferramentas</h4>
  <ul className="space-y-4 text-sm font-bold text-slate-500">
    {/* Spoke 1 */}
    <li>
      <Link href="/removedor-de-marca-dagua-de-imagem" className="hover:text-blue-600 transition-colors">
        Processamento HD
      </Link>
    </li>
    {/* Spoke 4 */}
    <li>
      <Link href="/removedor-de-marca-da-agua" className="hover:text-blue-600 transition-colors">
        Limpeza de Logos
      </Link>
    </li>
    {/* Spoke 6 */}
    <li>
      <Link href="/apagar-marca-dagua-de-foto" className="hover:text-blue-600 transition-colors">
        Uso Comercial
      </Link>
    </li>
    {/* Spoke 3 - 显著标注 */}
    <li>
      <Link href="/tirar-marca-dagua-online-gratis" className="hover:text-blue-600 transition-colors">
        Tirar Grátis
      </Link>
    </li>
  </ul>
</div>

{/* 第三列：Recursos (教程与定价) */}
<div className="space-y-6">
  <h4 className="text-[10px] font-black text-slate-900 uppercase tracking-[0.2em]">Recursos</h4>
  <ul className="space-y-4 text-sm font-bold text-slate-500">
    {/* Spoke 2 */}
    <li>
      <Link href="/como-remover-marca-dagua-de-foto" className="hover:text-blue-600 transition-colors">
        Tutorial
      </Link>
    </li>
    {/* Spoke 5 */}
    <li>
      <Link href="/como-tirar-marca-dagua" className="hover:text-blue-600 transition-colors">
        FAQ
      </Link>
    </li>
    {/* 定价页 */}
    <li>
      <Link href="/precos" className="hover:text-blue-600 transition-colors uppercase tracking-tighter">
        Preços
      </Link>
    </li>
  </ul>
</div>

          {/* 第四列：Empresa */}
          <div className="space-y-6">
            <h4 className="text-[10px] font-black text-slate-900 uppercase tracking-[0.2em]">Institucional</h4>
            <ul className="space-y-4 text-sm font-bold text-slate-500">
              <li><Link href="/quem-somos" className="hover:text-blue-600 transition-colors">Quem Somos</Link></li>
              <li><Link href="/politica-de-privacid" className="hover:text-blue-600 transition-colors">Privacidade</Link></li>
              <li><Link href="/termos-de-uso" className="hover:text-blue-600 transition-colors">Termos de Uso</Link></li>
              <li><Link href="/contato" className="hover:text-blue-600 transition-colors">Contato</Link></li>
              <li className="pt-2">
                <div className="flex items-center gap-2 text-green-600">
                  <ShieldCheck size={16} />
                  <span className="text-[10px] uppercase font-black tracking-widest">LGPD Compliant</span>
                </div>
              </li>
            </ul>
          </div>
        </div>

        {/* 底部：信任与版权 */}
        <div className="pt-10 border-t border-slate-50 flex flex-col md:flex-row items-center justify-between gap-8">
          <div className="flex flex-col items-center md:items-start gap-2">
            <p className="text-slate-400 text-[10px] font-black uppercase tracking-[0.1em]">
              © {currentYear} RemoverMarca.com — Orgulhosamente desenvolvido no Brasil 🇧🇷
            </p>
          </div>

          {/* 支付图标集 */}
          <div className="flex items-center gap-6 opacity-30 grayscale hover:grayscale-0 hover:opacity-60 transition-all duration-500">
            <img src="https://upload.wikimedia.org/wikipedia/commons/8/81/Wikimedia-logo.svg" alt="Pix" className="h-6" />
            <img src="https://upload.wikimedia.org/wikipedia/commons/5/5e/Visa_Inc._logo.svg" alt="Visa" className="h-3" />
            <img src="https://upload.wikimedia.org/wikipedia/commons/2/2a/Mastercard-logo.svg" alt="Mastercard" className="h-6" />
            <img src="https://upload.wikimedia.org/wikipedia/commons/b/b5/PayPal.svg" alt="PayPal" className="h-5" />
          </div>
        </div>
      </div>
    </footer>
  )
}