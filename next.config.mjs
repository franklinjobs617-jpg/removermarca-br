/** @type {import('next').NextConfig} */
const nextConfig = {
  typescript: {
    ignoreBuildErrors: true,
  },
  images: {
    unoptimized: true,
  },
  async rewrites() {
    return [
      {
        // 前端请求 /api/stripe-pay 会被转发到你的生产服务器
        source: '/api/stripe-pay',
        destination: 'https://api.removermarca.com/prod-api/stripe/getPayUrl',

      },
    ];
  },
}

export default nextConfig
