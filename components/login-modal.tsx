// components/login-modal.tsx
"use client"
import { useEffect, useState } from "react"
import { useAuth } from "@/lib/auth-context"

declare global { interface Window { google: any; } }

export function LoginModal({ isOpen, onClose }: { isOpen: boolean; onClose: () => void }) {
  const { login } = useAuth();
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    if (!isOpen) {
      setIsLoading(false);
      return;
    }

    const initGoogle = () => {
      if (window.google) {
        window.google.accounts.id.initialize({
          client_id: "253186021190-574pjhj63ojv2gmn5pts50pn51g15ehg.apps.googleusercontent.com",
          callback: handleCallbackResponse,
        });

        window.google.accounts.id.renderButton(
          document.getElementById("google-login-btn"),
          { theme: "outline", size: "large", width: "320", text: "continue_with" }
        );
      }
    };

    const timer = setTimeout(initGoogle, 100);
    return () => clearTimeout(timer);
  }, [isOpen]);

  const handleCallbackResponse = async (response: any) => {
    setIsLoading(true); // 开始后端验证逻辑
    try {
      await login(response.credential);
      onClose(); // 成功后关闭
    } catch (error) {
      console.error("Login Error:", error);
      setIsLoading(false); // 失败则恢复操作
    }
  };

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 bg-black/60 backdrop-blur-sm z-[200] flex items-center justify-center p-4">
      <div className="bg-white rounded-[40px] p-10 max-w-md w-full shadow-2xl text-center relative animate-in fade-in zoom-in duration-300">
        
        {/* 关键：加载遮罩层 */}
        {isLoading && (
          <div className="absolute inset-0 z-50 bg-white/90 backdrop-blur-md rounded-[40px] flex flex-col items-center justify-center animate-in fade-in">
            <div className="w-12 h-12 border-4 border-blue-600 border-t-transparent rounded-full animate-spin mb-4" />
            <p className="font-black text-blue-600 uppercase tracking-widest text-xs">Autenticando...</p>
          </div>
        )}

        <button onClick={onClose} className="absolute right-8 top-8 text-gray-400 hover:text-gray-600 transition-colors">
          <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" /></svg>
        </button>
        
        <div className="w-20 h-20 bg-blue-600 rounded-2xl flex items-center justify-center text-white mx-auto mb-8 text-4xl font-black italic shadow-xl shadow-blue-200">R</div>
        
        <h3 className="text-3xl font-black text-slate-900 mb-3 tracking-tighter uppercase italic">Bem-vindo!</h3>
        <p className="text-gray-500 text-sm mb-10 leading-relaxed px-4 font-medium italic">
          Faça login para ganhar <span className="text-blue-600 font-bold">3 créditos iniciais</span> e baixar fotos em alta definição.
        </p>
        
        <div className="flex justify-center min-h-[50px]">
           <div id="google-login-btn"></div>
        </div>
        
        <button onClick={onClose} className="text-gray-400 text-[10px] font-black hover:text-gray-600 uppercase tracking-[0.2em] mt-10">
          Talvez mais tarde
        </button>
      </div>
    </div>
  );
}