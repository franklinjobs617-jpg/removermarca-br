import { MetadataRoute } from 'next'

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = 'https://removermarca.com'
  const currentDate = new Date()

  // 1. 葡语路由 (主站/PT)
  const ptRoutes = [
    '',                                   // 首页
    '/editor',                            // 编辑器
    '/precos',                            // 定价
    '/tirar-marca-dagua-online-gratis',   // 免费工具
    '/removedor-de-marca-dagua-de-imagem',// AI 移除
    '/remover-de-marca-da-agua',          // 品牌移除
    '/apagar-marca-dagua-de-foto',        // 擦除工具
    '/como-remover-marca-dagua-de-foto',  // 教程1
    '/como-tirar-a-marca-dagua-de-uma-foto', // 教程2
    '/como-tirar-marca-dagua',            // FAQ/教程3
    '/quem-somos',                        // 关于我们
    '/contato',                           // 联系
    '/politica-de-privacid',              // 隐私 (根据你截图的文件夹名)
    '/termos-de-uso',                     // 条款
  ].map((route) => ({
    url: `${baseUrl}${route}`,
    lastModified: currentDate,
    changeFrequency: 'daily' as const,
    priority: route === '' || route === '/editor' ? 1.0 : 0.8,
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