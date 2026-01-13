"use client"

import { useState, useEffect } from "react"
import { useRouter } from "next/navigation"
import { Header } from "./header"
import { useAuth } from "@/lib/auth-context"
import { PricingModal } from "./pricing-modal"
import { LoginModal } from "./login-modal"
import { SaveMenu } from "./save-menu"
import { AlertCircle, RefreshCw, SquareSplitHorizontal, Maximize, ZoomIn, ZoomOut, Plus } from "lucide-react"

// 1. 增加 error 状态
interface ImageItem {
  id: string
  originalUrl: string
  processedUrl: string
  processed: boolean
  error?: boolean // 处理是否失败
}

export function EditorInterface() {
  const router = useRouter();
  const { credits, isLoggedIn, isLoaded, deductCredit } = useAuth();

  const [images, setImages] = useState<ImageItem[]>([]);
  const [currentIdx, setCurrentIdx] = useState(0);
  const [isProcessing, setIsProcessing] = useState(false);
  const [showComparison, setShowComparison] = useState(false);

  const [zoom, setZoom] = useState(100);
  const [position, setPosition] = useState({ x: 0, y: 0 });
  const [isDragging, setIsDragging] = useState(false);
  const [dragStart, setDragStart] = useState({ x: 0, y: 0 });

  const [showPricing, setShowPricing] = useState(false);
  const [showLogin, setShowLogin] = useState(false);
  const [showMobileSaveMenu, setShowMobileSaveMenu] = useState(false);
  const [pendingAction, setPendingAction] = useState<null | 'download'>(null);

  useEffect(() => {
    const footer = document.querySelector('footer');
    if (footer) footer.style.display = 'none';
    return () => { if (footer) footer.style.display = 'block'; };
  }, []);

  useEffect(() => {
    if (isLoggedIn && isLoaded && pendingAction === 'download') {
      processDownload();
      setPendingAction(null);
    }
  }, [isLoggedIn, isLoaded, pendingAction]);

  // --- 逻辑：处理图片请求并增加失败反馈 ---
  const processImageWithAPI = async (file: File, indexToUpdate: number) => {
    setIsProcessing(true);
    // 重置之前的错误状态
    setImages(prev => prev.map((img, idx) =>
      idx === indexToUpdate ? { ...img, error: false, processed: false } : img
    ));

    try {
      const formData = new FormData();
      formData.append("file", file);
      formData.append("sync", "0");

      const res = await fetch("/api/watermark-remove", {
        method: "POST",
        body: formData,
      });

      const result = await res.json();

      if (result.status === 200 && result.url) {
        setImages(prev => prev.map((img, idx) =>
          idx === indexToUpdate ? { ...img, processedUrl: result.url, processed: true, error: false } : img
        ));
      } else {
        throw new Error("Erro no servidor");
      }
    } catch (error) {
      console.error("Erro ao processar:", error);
      // 核心：设置错误状态
      setImages(prev => prev.map((img, idx) =>
        idx === indexToUpdate ? { ...img, processed: true, error: true } : img
      ));
    } finally {
      setIsProcessing(false);
    }
  };

  // 重试当前图片
  const handleRetry = async () => {
    const current = images[currentIdx];
    if (!current) return;

    // 将 base64 或 Blob 转换为 File 重新发送
    const res = await fetch(current.originalUrl);
    const blob = await res.blob();
    const file = new File([blob], "retry.png", { type: "image/png" });
    await processImageWithAPI(file, currentIdx);
  };

  useEffect(() => {
    const uploadedBase64 = sessionStorage.getItem("uploadedImage");
    if (uploadedBase64) {
      const initialId = Date.now().toString();
      setImages([{ id: initialId, originalUrl: uploadedBase64, processedUrl: "", processed: false }]);
      fetch(uploadedBase64).then(res => res.blob()).then(blob => {
        const file = new File([blob], "input.png", { type: "image/png" });
        processImageWithAPI(file, 0);
      });
    } else {
      setImages([{ id: "sample", originalUrl: "/images/sample.png", processedUrl: "/images/sample.png", processed: true }]);
    }
  }, []);

  const handleAddImage = () => {
    if (!isLoaded) return;
    if (images.length >= credits) { setShowPricing(true); return; }
    const input = document.createElement("input");
    input.type = "file"; input.accept = "image/*";
    input.onchange = async (e: any) => {
      const file = e.target.files?.[0];
      if (file) {
        const localPreviewUrl = URL.createObjectURL(file);
        const newImgIdx = images.length;
        setImages(prev => [...prev, { id: Date.now().toString(), originalUrl: localPreviewUrl, processedUrl: "", processed: false }]);
        setCurrentIdx(newImgIdx);
        await processImageWithAPI(file, newImgIdx);
      }
    };
    input.click();
  };

  const processDownload = async () => {
    if (!isLoggedIn) { setPendingAction('download'); setShowLogin(true); return false; }
    if (credits <= 0) { setShowPricing(true); return false; }
    const success = await deductCredit();
    if (success) {
      const current = images[currentIdx];
      const link = document.createElement("a");
      link.href = current.processedUrl || current.originalUrl;
      link.download = `clean_${Date.now()}.png`;
      link.target = "_blank"; link.click();
      return true;
    }
    return false;
  };

  const currentImg = images[currentIdx];
  // 仅在已处理且无错误时允许保存
  const canSave = currentImg?.processed && !currentImg?.error && !isProcessing;

  return (
    <div className="h-screen w-full flex flex-col bg-gray-50 overflow-hidden select-none">
      <Header
        canSave={canSave}
        onStandardDownload={processDownload}
        onPremiumDownload={() => setShowPricing(true)}
        onOpenPricing={() => setShowPricing(true)}
        imageCount={images.length}
      />

      <div className="flex-1 relative bg-dot-grid overflow-hidden flex items-center justify-center">

        {/* 左侧侧边栏 */}
        <div className="absolute left-3 md:left-6 top-1/2 -translate-y-1/2 flex flex-col items-center gap-4 z-30 scale-90 md:scale-100">
          <button onClick={() => router.push("/")} className="w-10 h-10 bg-white shadow-lg rounded-full flex items-center justify-center border border-gray-100 transition-hover hover:bg-gray-50">
            <svg className="w-5 h-5 text-gray-400" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path d="M15 19l-7-7 7-7" strokeWidth="2" /></svg>
          </button>

          <div className="flex flex-col items-center py-6 px-2 bg-white/60 backdrop-blur-md rounded-4xl border border-gray-100 shadow-[0_0_50px_rgba(0,0,0,0.15)] gap-4">
            <div className="max-h-[40vh] overflow-y-auto space-y-4 no-scrollbar px-1 py-2">
              {images.map((img, idx) => (
                <div key={img.id} className="relative group">
                  <button onClick={() => setCurrentIdx(idx)} className={`w-12 h-12 md:w-14 md:h-14 rounded-2xl overflow-hidden border-2 transition-all ${idx === currentIdx ? 'border-blue-500 ring-4 ring-blue-100' : 'border-white shadow-sm hover:border-blue-200'}`}>
                    <img src={img.originalUrl} className="w-full h-full object-cover" alt="" />
                    {/* 侧边栏状态点：成功显示绿点，失败显示红点 */}
                    {img.processed && (
                      <div className={`absolute top-1 right-1 w-2.5 h-2.5 rounded-full border border-white ${img.error ? 'bg-red-500 shadow-[0_0_8px_#ef4444]' : 'bg-green-500'}`} />
                    )}
                  </button>
                  {images.length > 1 && (
                    <button onClick={(e) => { e.stopPropagation(); setImages(prev => prev.filter(i => i.id !== img.id)); if (currentIdx >= images.length - 1) setCurrentIdx(0); }} className="absolute -top-1 -right-1 w-5 h-5 bg-red-500 text-white rounded-full opacity-0 group-hover:opacity-100 flex items-center justify-center shadow-lg transition-opacity"><svg className="w-3 h-3" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path d="M6 18L18 6M6 6l12 12" /></svg></button>
                  )}
                </div>
              ))}
            </div>
            <button onClick={handleAddImage} className="w-10 h-10 rounded-xl bg-gray-100 flex items-center justify-center text-gray-400 font-bold hover:text-blue-500 transition-all active:scale-90 shadow-sm text-xl">
              <Plus size={20} />
            </button>
          </div>
        </div>

        {/* 顶部悬浮工具栏 */}
        <div className="absolute top-20 left-1/2 -translate-x-1/2 glass-panel px-6 py-2 rounded-full shadow-2xl flex items-center gap-6 z-40 scale-90 md:scale-100">
          <div className="flex items-center gap-4">
            <button onClick={() => setZoom(z => Math.max(z - 10, 50))} className="text-gray-400 px-2 font-bold hover:text-blue-500">
              <ZoomOut size={20} />
            </button>
            <span className="text-xs font-black text-gray-700 min-w-10 text-center uppercase tracking-widest">{zoom}%</span>
            <button onClick={() => setZoom(z => Math.min(z + 10, 200))} className="text-gray-400 px-2 font-bold hover:text-blue-500">
              <ZoomIn size={20} />
            </button>
          </div>
          <div className="w-px h-6 bg-gray-200" />
          <div className="flex items-center gap-6">
            <button
              onMouseDown={() => setShowComparison(true)} onMouseUp={() => setShowComparison(false)} onMouseLeave={() => setShowComparison(false)}
              className={`text-gray-400 hover:text-blue-500 ${showComparison ? 'text-blue-600 scale-110' : ''}`}
            >
              <SquareSplitHorizontal size={20} />
            </button>
            <button onClick={() => { setZoom(100); setPosition({ x: 0, y: 0 }); }} className="text-gray-400 hover:text-blue-500">
              <Maximize size={20} />
            </button>
          </div>
        </div>

        {/* 画布核心 */}
        {currentImg && (
          <div
            className="flex-1 flex items-center justify-center w-full h-full cursor-grab active:cursor-grabbing overflow-hidden"
            onMouseDown={(e) => { if (e.button === 0) { setIsDragging(true); setDragStart({ x: e.clientX - position.x, y: e.clientY - position.y }); } }}
            onMouseMove={(e) => { if (isDragging) setPosition({ x: e.clientX - dragStart.x, y: e.clientY - dragStart.y }); }}
            onMouseUp={() => setIsDragging(false)}
            onWheel={(e) => { const d = e.deltaY > 0 ? -10 : 10; setZoom(z => Math.min(Math.max(z + d, 50), 400)); }}
          >
            <div
              className="relative shadow-[0_40px_100px_rgba(0,0,0,0.12)] rounded-2xl overflow-hidden bg-white transition-transform duration-150 ease-out"
              style={{ transform: `translate(${position.x}px, ${position.y}px) scale(${zoom / 100})` }}
            >
              <img src={showComparison ? currentImg.originalUrl : (currentImg.processedUrl || currentImg.originalUrl)}
                className="max-h-[80vh] w-auto block pointer-events-none" alt="Editor View" />

              {/* 1. 处理中的动画 */}
              {isProcessing && (
                <>
                  <div className="ai-scan-line-vertical" />
                  <div className="absolute inset-0 bg-blue-500/5 backdrop-blur-[2px] flex items-center justify-center">
                    <div className="bg-white/90 p-4 rounded-2xl shadow-xl flex items-center gap-3 border border-blue-50">
                      <div className="w-4 h-4 border-2 border-blue-600 border-t-transparent rounded-full animate-spin" />
                      <span className="text-[10px] font-black text-gray-700 uppercase tracking-widest">Otimizando...</span>
                    </div>
                  </div>
                </>
              )}

              {/* 2. 处理失败的提示反馈 (NEW) */}
              {currentImg.error && !isProcessing && (
                <div className="absolute inset-0 bg-white/60 backdrop-blur-md flex flex-col items-center justify-center gap-4 animate-in fade-in duration-300">
                  <div className="w-12 h-12 bg-red-100 rounded-full flex items-center justify-center text-red-500">
                    <AlertCircle size={28} />
                  </div>
                  <div className="text-center">
                    <p className="font-black text-slate-800 uppercase text-xs tracking-widest mb-1">Falha no Processamento</p>
                    <p className="text-[10px] text-slate-500 font-bold uppercase italic">Algo deu errado com a IA</p>
                  </div>
                  <button
                    onClick={handleRetry}
                    className="flex items-center gap-2 bg-slate-900 text-white px-6 py-2.5 rounded-xl font-black text-[10px] uppercase tracking-widest shadow-lg hover:scale-105 transition-all"
                  >
                    <RefreshCw size={12} /> Tentar Novamente
                  </button>
                </div>
              )}
            </div>
          </div>
        )}

        {/* 移动端动作条 */}
        <div className="lg:hidden fixed bottom-8 left-1/2 -translate-x-1/2 z-50">
          <div className="relative">
            <button
              onClick={() => canSave && setShowMobileSaveMenu(!showMobileSaveMenu)}
              disabled={!canSave}
              className={`px-10 py-4 rounded-full font-black uppercase tracking-widest transition-all active:scale-90 ${canSave
                ? "bg-blue-600 text-white shadow-[0_15px_40px_rgba(37,99,235,0.4)]"
                : "bg-slate-300 text-slate-500 cursor-not-allowed shadow-none"
                }`}
            >
              {canSave ? "SALVAR FOTO" : currentImg?.error ? "ERRO NA IA" : "PROCESSANDO..."}
            </button>
            {canSave && (
              <SaveMenu
                isOpen={showMobileSaveMenu}
                isMobile={true}
                imageCount={images.length}
                onStandard={() => { setShowMobileSaveMenu(false); processDownload(); }}
                onPremium={() => setShowPricing(true)}
              />
            )}
          </div>
        </div>
      </div>

      <PricingModal isOpen={showPricing} onClose={() => setShowPricing(false)} />
      <LoginModal isOpen={showLogin} onClose={() => setShowLogin(false)} />
    </div>
  );
}