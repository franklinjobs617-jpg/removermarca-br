import { Metadata } from "next"
import { PricingContent } from "@/components/pricing-modal-en" // 引入上面的客户端组件

// SEO Settings
export const metadata: Metadata = {
    title: "Pricing Plans - RemoverMarca | Best Value AI Watermark Remover",
    description: "Simple pricing for AI watermark removal. Choose between monthly subscriptions or pay-as-you-go credit packs. 4K quality, instant processing.",
    alternates: {
        canonical: "https://removermarca.com/en/pricing",
    }
}

export default function PricingPage() {
    return <PricingContent />
}