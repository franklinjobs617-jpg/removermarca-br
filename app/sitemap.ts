import { MetadataRoute } from 'next'

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = 'https://removermarca.com'
  
  const routes = [
    '',
    '/apagar-marca-dagua-de-foto',
    '/como-remover-marca-dagua-de-foto',
    '/como-tirar-a-marca-dagua-de-uma-foto',
    '/como-tirar-marca-dagua',
    '/contato',
    '/editor',
    '/politica-de-privacid',
    '/precos',
    '/quem-somos',
    '/removerdor-de-marca-da-agua',
    '/removerdor-de-marca-dagua-de-imagem',
    '/termos-de-uso',
    '/tirar-marca-dagua-online-gratis',
  ]

  return routes.map((route) => ({
    url: `${baseUrl}${route}`,
    lastModified: new Date(),
    changeFrequency: 'weekly',
    priority: route === '' ? 1 : 0.8,
  }))
}