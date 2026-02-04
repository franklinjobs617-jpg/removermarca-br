import { MetadataRoute } from 'next'

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = 'https://removermarca.com'
  const currentDate = new Date()

  // 1. 葡语路由 (主站/PT)
  const ptRoutes = [
    '',                                   // 首页
    '/editor',                            // 编辑器
    '/precos',                            // 定价
    '/tirar-marca-dagua-online-gratis',   // 免费工具 (Spoke 3)
    '/removedor-de-marca-dagua-de-imagem',// AI 移除 (Spoke 1)
    '/removedor-de-marca-da-agua',        // 低难度切入 (Spoke 4)
    '/apagar-marca-dagua-de-foto',        // 商业变体 (Spoke 6)
    '/como-remover-marca-dagua-de-foto',  // 教程指南 (Spoke 2)
    '/como-tirar-a-marca-dagua-de-uma-foto', // 极致长尾问答 (Spoke 5)
    '/quem-somos',                        // 关于我们
    '/contato',                           // 联系
    '/politica-de-privacid',              // 隐私政策
    '/termos-de-uso',                     // 服务条款
  ].map((route) => ({
    url: `${baseUrl}${route}`,
    lastModified: currentDate,
    changeFrequency: 'daily' as const,
    priority: route === '' ? 1.0 : route === '/editor' ? 0.9 : 0.8,
  }))

  // 2. 英语路由 (/en)
  const enRoutes = [
    '/en',                                // 英文首页
    '/en/editor',                         // 英文编辑器
    '/en/pricing',                        // 英文定价
    '/en/remove-watermark-from-photo-online-free', // 英文免费工具
    '/en/remove-watermark-from-photo-ai', // 英文 AI
    '/en/remove-tiktok-watermark-from-photo', // 英文 TikTok
    '/en/app-to-remove-watermark-from-photo', // 英文 App
    '/en/how-do-i-remove-watermarks-from-photos', // 英文教程1
    '/en/how-to-remove-watermark-from-photo-in-photoshop', // 英文教程2
    '/en/about',                          // 英文关于
    '/en/contact',                        // 英文联系
    '/en/privacy-policy',                 // 英文隐私
    '/en/terms-of-use',                   // 英文条款
  ].map((route) => ({
    url: `${baseUrl}${route}`,
    lastModified: currentDate,
    changeFrequency: 'daily' as const,
    priority: route === '/en' || route === '/en/editor' ? 1.0 : 0.8,
  }))

  return [...ptRoutes, ...enRoutes]
}