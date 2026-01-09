"use client"

import { useState, useRef, useEffect } from "react"
import { useRouter } from "next/navigation"
import { Header } from "./header"
import { useAuth } from "@/lib/auth-context"
import { PricingModal } from "./pricing-modal"
import { LoginModal } from "./login-modal"
import { SaveMenu } from "./save-menu"

// 1. 升级接口定义，存储原图和处理后的图
interface ImageItem {
  id: string
  originalUrl: string
  processedUrl: string
  processed: boolean
}

export function EditorInterface() {
  const router = useRouter();
  const { credits, isLoggedIn, deductCredit } = useAuth();
  
  // 数据与状态
  const [images, setImages] = useState<ImageItem[]>([]);
  const [currentIdx, setCurrentIdx] = useState(0);
  const [isProcessing, setIsProcessing] = useState(false);
  const [showComparison, setShowComparison] = useState(false);
  
  // 画布变换
  const [zoom, setZoom] = useState(100);
  const [position, setPosition] = useState({ x: 0, y: 0 });
  const [isDragging, setIsDragging] = useState(false);
  const [dragStart, setDragStart] = useState({ x: 0, y: 0 });

  // 弹窗控制
  const [showPricing, setShowPricing] = useState(false);
  const [showLogin, setShowLogin] = useState(false);
  const [showMobileSaveMenu, setShowMobileSaveMenu] = useState(false);

  // --- 逻辑：隐藏全局 Footer ---
  useEffect(() => {
    const footer = document.querySelector('footer');
    if (footer) footer.style.display = 'none';
    return () => {
      if (footer) footer.style.display = 'block';
    };
  }, []);

  // 调用 API 处理图片的函数
  const processImageWithAPI = async (file: File, indexToUpdate: number) => {
    setIsProcessing(true);
    try {
      const formData = new FormData();
      formData.append("file", file);
      formData.append("sync", "0"); 

      const res = await fetch("/api/watermark-remove", {
        method: "POST",
        body: formData,
      });

      const result = await res.json();

      // 这里建议移除测试用的手动赋值，直接使用接口返回的 result
      // result = { "status": 200, "url": "..." }

      if (result.status === 200 && result.url) {
        setImages(prev => prev.map((img, idx) => 
          idx === indexToUpdate ? { ...img, processedUrl: result.url, processed: true } : img
        ));
      } else {
        throw new Error(result.error || "Erro no processamento");
      }
    } catch (error) {
      console.error("Erro ao processar:", error);
      alert("Falha ao processar a imagem pela IA.");
    } finally {
      setIsProcessing(false);
    }
  };

  // 初始化：处理从首页传来的图片
  useEffect(() => {
    const uploadedBase64 = sessionStorage.getItem("uploadedImage");
    if (uploadedBase64) {
      const initialId = Date.now().toString();
      // 初始化：处理后的图暂时为空
      setImages([{ id: initialId, originalUrl: uploadedBase64, processedUrl: "", processed: false }]);
      
      fetch(uploadedBase64)
        .then(res => res.blob())
        .then(blob => {
          const file = new File([blob], "input.png", { type: "image/png" });
          processImageWithAPI(file, 0);
        });
    } else {
      // 无图显示示例（示例图通常已经处理过，所以 original 和 processed 相同）
      setImages([{ id: "sample", originalUrl: "/images/sample.png", processedUrl: "/images/sample.png", processed: true }]);
    }
  }, []);

  // 侧边栏：添加图片
  const handleAddImage = () => {
    if (isLoggedIn && credits === 0) { setShowPricing(true); return; }
    
    const input = document.createElement("input");
    input.type = "file"; 
    input.accept = "image/*";
    input.onchange = async (e: any) => {
      const file = e.target.files?.[0];
      if (file) {
        const localPreviewUrl = URL.createObjectURL(file);
        const newImgIdx = images.length;
        // 添加到列表，并开启 API 处理
        setImages(prev => [...prev, { id: Date.now().toString(), originalUrl: localPreviewUrl, processedUrl: "", processed: false }]);
        setCurrentIdx(newImgIdx);
        await processImageWithAPI(file, newImgIdx);
      }
    };
    input.click();
  };

  // 下载逻辑
  const processDownload = () => {
    if (!isLoggedIn && credits <= 0) { setShowLogin(true); return false; }
    const current = images[currentIdx];
    
    if (deductCredit()) {
      const link = document.createElement("a");
      // 重要：下载的是 processedUrl
      link.href = current.processedUrl || current.originalUrl;
      link.download = `removermarca_${Date.now()}.png`;
      link.target = "_blank";
      link.click();
      return true;
    } else {
      setShowPricing(true);
      return false;
    }
  };

  const currentImg = images[currentIdx];

  // --- 关键逻辑：按钮置灰 ---
  // 仅当图片已处理完成，且当前没有正在进行的 API 请求时，SALVAR 才可用
  const canSave = currentImg?.processed && !isProcessing;

  if (!currentImg) return null;

  return (
    <div className="h-screen w-full flex flex-col bg-[#f8fafc] overflow-hidden select-none">
      <Header 
        canSave={canSave}
        onStandardDownload={processDownload}
        onOpenPricing={() => setShowPricing(true)} 
      />

      <div className="flex-1 relative bg-dot-grid overflow-hidden flex items-center justify-center">
        
        {/* 左侧侧边栏 */}
        <div className="absolute left-3 md:left-6 top-1/2 -translate-y-1/2 flex flex-col items-center gap-4 z-30 scale-90 md:scale-100">
          <button onClick={() => router.push("/")} className="w-10 h-10 bg-white shadow-lg rounded-full flex items-center justify-center border border-gray-100 transition-hover hover:bg-gray-50">
             <svg className="w-5 h-5 text-gray-400" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 19l-7-7 7-7" /></svg>
          </button>
          
          <div className="flex flex-col items-center py-6 px-2 bg-white/60 backdrop-blur-md rounded-[32px] border border-gray-100 shadow-xl gap-4">
             <span className="text-[10px] font-black text-gray-500 uppercase tracking-widest mb-2 vertical-text">Histórico</span>
             <div className="max-h-[40vh] overflow-y-auto space-y-4 no-scrollbar px-1 py-2">
                {images.map((img, idx) => (
                  <div key={img.id} className="relative group">
                    <button onClick={() => setCurrentIdx(idx)} className={`w-12 h-12 md:w-14 md:h-14 rounded-2xl overflow-hidden border-2 transition-all ${idx === currentIdx ? 'border-blue-500 ring-4 ring-blue-100' : 'border-white shadow-sm hover:border-blue-200'}`}>
                      {/* 历史缩略图显示原图 */}
                      <img src={img.originalUrl} className="w-full h-full object-cover" alt="" />
                      {img.processed && (
                        <div className="absolute top-1 right-1 w-2 h-2 bg-green-500 rounded-full border border-white" />
                      )}
                    </button>
                    {images.length > 1 && (
                      <button onClick={(e) => { e.stopPropagation(); setImages(prev => prev.filter(i => i.id !== img.id)); if(currentIdx>=images.length-1) setCurrentIdx(0); }} className="absolute -top-1 -right-1 w-5 h-5 bg-red-500 text-white rounded-full opacity-0 group-hover:opacity-100 flex items-center justify-center shadow-lg transition-opacity"><svg className="w-3 h-3" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path d="M6 18L18 6M6 6l12 12"/></svg></button>
                    )}
                  </div>
                ))}
             </div>
             <button onClick={handleAddImage} className="w-10 h-10 rounded-xl bg-white border border-gray-100 flex items-center justify-center text-gray-400 hover:text-blue-500 hover:border-blue-500 transition-all active:scale-90 shadow-sm font-bold text-xl">+</button>
          </div>
        </div>

        {/* 顶部悬浮工具栏 */}
        <div className="absolute top-20 left-1/2 -translate-x-1/2 glass-panel px-6 py-2 rounded-full shadow-2xl flex items-center gap-6 z-40 scale-90 md:scale-100">
           <div className="flex items-center gap-4">
              <button onClick={() => setZoom(z => Math.max(z-10, 50))} className="text-gray-400 font-black hover:text-gray-900 transition-colors px-2">-</button>
              <span className="text-[10px] font-black text-gray-700 min-w-[40px] text-center uppercase tracking-widest">{zoom}%</span>
              <button onClick={() => setZoom(z => Math.min(z+10, 200))} className="text-gray-400 font-black hover:text-gray-900 transition-colors px-2">+</button>
           </div>
           <div className="w-px h-6 bg-gray-200" />
           <div className="flex items-center gap-6">
              {/* --- 修复：比较按钮逻辑 --- */}
              <button 
                onMouseDown={() => setShowComparison(true)} 
                onMouseUp={() => setShowComparison(false)} 
                onMouseLeave={() => setShowComparison(false)}
                onTouchStart={() => setShowComparison(true)}
                onTouchEnd={() => setShowComparison(false)}
                className={`text-gray-400 hover:text-blue-500 transition-colors ${showComparison ? 'text-blue-600 scale-110' : ''}`}
                title="Segure para ver Original"
              >
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"/><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z"/></svg>
              </button>
              
              {/* 回正按钮 */}
              <button onClick={() => { setZoom(100); setPosition({x:0, y:0}); }} className="text-gray-400 hover:text-blue-500 transition-colors" title="Resetar Visualização">
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 8V4m0 0h4M4 4l5 5m11-1V4m0 0h-4m4 0l-5 5M4 16v4m0 0h4m-4 0l5-5m11 5l-5-5m5 5v-4m0 4h-4"/></svg>
              </button>
           </div>
        </div>

        {/* 画布核心 */}
        <div 
          className="flex-1 flex items-center justify-center w-full h-full cursor-grab active:cursor-grabbing overflow-hidden"
          onMouseDown={(e) => { 
            if(e.button === 0) { // 仅限左键
              setIsDragging(true); 
              setDragStart({ x: e.clientX - position.x, y: e.clientY - position.y }); 
            }
          }}
          onMouseMove={(e) => { if(isDragging) setPosition({ x: e.clientX - dragStart.x, y: e.clientY - dragStart.y }); }}
          onMouseUp={() => setIsDragging(false)}
          onWheel={(e) => { 
            const d = e.deltaY > 0 ? -10 : 10; 
            setZoom(z => Math.min(Math.max(z + d, 50), 400)); 
          }}
        >
          <div 
            className="relative shadow-[0_40px_100px_rgba(0,0,0,0.12)] rounded-2xl overflow-hidden bg-white transition-transform duration-150 ease-out"
            style={{ transform: `translate(${position.x}px, ${position.y}px) scale(${zoom/100})` }}
          >
            {/* 核心：根据 showComparison 状态切换图片源 */}
            <img 
              src={showComparison ? currentImg.originalUrl : (currentImg.processedUrl || currentImg.originalUrl)} 
              className="max-h-[80vh] w-auto block pointer-events-none" 
              alt="Editor View" 
            />
            
            {/* AI 扫描线与磨砂玻璃提示 */}
            {isProcessing && (
              <>
                <div className="ai-scan-line-vertical" />
                <div className="absolute inset-0 bg-blue-500/5 backdrop-blur-[2px] flex items-center justify-center transition-opacity">
                  <div className="bg-white/90 p-4 rounded-2xl shadow-xl flex items-center gap-3 border border-blue-50">
                    <div className="w-4 h-4 border-2 border-blue-600 border-t-transparent rounded-full animate-spin" />
                    <span className="text-[10px] font-black text-gray-700 uppercase tracking-tighter tracking-widest">Otimizando...</span>
                  </div>
                </div>
              </>
            )}
          </div>
        </div>

        {/* 移动端底部动作条 */}
        <div className="lg:hidden fixed bottom-8 left-1/2 -translate-x-1/2 z-50">
          <div className="relative">
            <button 
              onClick={() => canSave && setShowMobileSaveMenu(!showMobileSaveMenu)}
              disabled={!canSave}
              className={`px-10 py-4 rounded-full font-black uppercase tracking-widest transition-all active:scale-90 ${
                canSave 
                ? "bg-blue-600 text-white shadow-[0_15px_40px_rgba(37,99,235,0.4)]" 
                : "bg-slate-300 text-slate-500 cursor-not-allowed shadow-none"
              }`}
            >
              {canSave ? "SALVAR FOTO" : "LIMPANDO..."}
            </button>
            {canSave && (
              <SaveMenu 
                isOpen={showMobileSaveMenu} 
                isMobile={true}
                onStandard={() => { setShowMobileSaveMenu(false); processDownload(); }}
                onPremium={() => { setShowMobileSaveMenu(false); setShowPricing(true); }}
              />
            )}
          </div>
        </div>
      </div>

      {/* 弹窗组件 */}
      <PricingModal isOpen={showPricing} onClose={() => setShowPricing(false)} />
      <LoginModal isOpen={showLogin} onClose={() => setShowLogin(false)} />
    </div>
  );
}