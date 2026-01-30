"use client";

import { PayPalScriptProvider } from "@paypal/react-paypal-js";
import { usePathname } from "next/navigation"; // 1. 引入 usePathname

export default function PayPalProviderWrapper({
    children,
}: {
    children: React.ReactNode;
}) {
    const pathname = usePathname(); // 2. 获取当前路径

    // 3. 判断逻辑：包含 /en 则是 USD，否则是 BRL
    const isEn = pathname?.includes("/en") ?? false;
    const currentCurrency = isEn ? "USD" : "BRL";

    // 💡 Sanitize Client ID
    let clientId = process.env.NEXT_PUBLIC_PAYPAL_CLIENT_ID || "test";
    clientId = clientId.replace(/^"|"$/g, '').trim();

    const paypalOptions = {
        clientId: clientId,
        currency: currentCurrency, // 4. 设置动态币种
        intent: "capture",
    };

    return (
        /* 
           5. 关键点：必须添加 key={currentCurrency}
           这会确保当币种变化时，旧的 PayPal 脚本被移除，重新加载新币种的脚本
        */
        <PayPalScriptProvider options={paypalOptions} key={currentCurrency}>
            {children}
        </PayPalScriptProvider>
    );
}