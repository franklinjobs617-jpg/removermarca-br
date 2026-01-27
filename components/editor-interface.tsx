"use client"

import { useState, useEffect, useRef } from "react"
import { useRouter } from "next/navigation"
import { Header } from "./header"
import { useAuth } from "@/lib/auth-context"
import { PricingModal } from "./pricing-modal"
import { LoginModal } from "./login-modal"
import { SaveMenu } from "./save-menu"
import { AlertCircle, RefreshCw, SquareSplitHorizontal, Maximize, ZoomIn, ZoomOut, Plus } from "lucide-react"

// 定义图片项接口
interface ImageItem {
  id: string
  originalUrl: string
  processedUrl: string
  processed: boolean
  error?: boolean
}

// 定义字典接口 (你需要确保传入的 dict 符合此结构)
export interface EditorDictionary {
  processing: string;       // "Processando..." / "Processing..."
  optimizing: string;       // "Otimizando..." / "Optimizing..."
  errorTitle: string;       // "Falha no Processamento" / "Processing Failed"
  retry: string;            // "Tentar Novamente" / "Try Again"
  savePhoto: string;        // "SALVAR FOTO" / "SAVE PHOTO"
  errorAI: string;          // "ERRO NA IA" / "AI ERROR"
  processingBtn: string;    // "PROCESSANDO..." / "PROCESSING..." 
  [key: string]: any;
}

interface EditorInterfaceProps {
  dict: EditorDictionary;
  locale: string; // 'pt' | 'en'
}

export function EditorInterface({ dict, locale }: EditorInterfaceProps) {
  const router = useRouter();
  const { credits, isLoggedIn, isLoaded, deductCredit } = useAuth();

  const [images, setImages] = useState<ImageItem[]>([]);
  const [currentIdx, setCurrentIdx] = useState(0);
  const [isProcessing, setIsProcessing] = useState(false);
  const [showComparison, setShowComparison] = useState(false);

  // 【核心修复】：防止 React 18 严格模式下双次挂载导致数据丢失
  const hasInitialized = useRef(false);

  // 画布变换状态
  const [zoom, setZoom] = useState(100);
  const [position, setPosition] = useState({ x: 0, y: 0 });
  const [isDragging, setIsDragging] = useState(false);
  const [dragStart, setDragStart] = useState({ x: 0, y: 0 });

  const [showPricing, setShowPricing] = useState(false);
  const [showLogin, setShowLogin] = useState(false);
  const [showMobileSaveMenu, setShowMobileSaveMenu] = useState(false);
  const [pendingAction, setPendingAction] = useState<null | 'download'>(null);

  const triggerBatchPricing = () => {
    setShowPricing(true);
  };

  // --- 逻辑：切换图片或重试时重置位置 ---
  const resetCanvas = () => {
    setZoom(100);
    setPosition({ x: 0, y: 0 });
  };

  useEffect(() => {
    resetCanvas();
  }, [currentIdx]);

  useEffect(() => {
    if (images.length > 0) {
      sessionStorage.setItem("editor_images_list", JSON.stringify(images));
    }
  }, [images]);

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

  const processImageWithAPI = async (file: File, indexToUpdate: number) => {
    setIsProcessing(true);
    setImages(prev => prev.map((img, idx) =>
      idx === indexToUpdate ? { ...img, error: false, processed: false } : img
    ));

    try {
      const formData = new FormData();
      formData.append("file", file);
      formData.append("sync", "0");

      const res = await fetch("/api/watermark", {
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
      setImages(prev => prev.map((img, idx) =>
        idx === indexToUpdate ? { ...img, processed: true, error: true } : img
      ));
    } finally {
      setIsProcessing(false);
    }
  };

  const handleRetry = async () => {
    const current = images[currentIdx];
    if (!current) return;
    const res = await fetch(current.originalUrl);
    const blob = await res.blob();
    const fileName = locale === 'en' ? "retry.png" : "tente-novamente.png"; // 根据语言设置文件名
    const file = new File([blob], fileName, { type: "image/png" });
    await processImageWithAPI(file, currentIdx);
  };

  // --- 核心修复：单页跳转初始化逻辑 ---
  useEffect(() => {
    if (hasInitialized.current) return; // 拦截第二次挂载

    const uploadedData = sessionStorage.getItem("uploadedImage");
    const savedList = sessionStorage.getItem("editor_images_list");

    // 1. 处理从首页上传/拖拽进入的情况
    if (uploadedData) {
      hasInitialized.current = true;
      sessionStorage.removeItem("editor_images_list"); // 强制清空旧列表

      const initialId = Date.now().toString();
      setImages([{ id: initialId, originalUrl: uploadedData, processedUrl: "", processed: false }]);

      // 注意：如果是 Blob URL，fetch 它不会产生网络流量，直接读取内存
      fetch(uploadedData)
        .then(res => res.blob())
        .then(blob => {
          const fileName = locale === 'en' ? "input.png" : "entrada.png";
          const file = new File([blob], fileName, { type: "image/png" });
          processImageWithAPI(file, 0);
          // 处理开始后清理缓存
          sessionStorage.removeItem("uploadedImage");
        })
        .catch(err => {
          console.error("Erro ao carregar dados:", err);
          sessionStorage.removeItem("uploadedImage");
        });
      return;
    }

    // 2. 处理页面刷新，从保存的列表恢复
    if (savedList) {
      try {
        const parsedList = JSON.parse(savedList);
        if (parsedList.length > 0) {
          hasInitialized.current = true;
          setImages(parsedList);
          return;
        }
      } catch (e) {
        console.error("Failed to parse saved list");
      }
    }

    // 3. 兜底逻辑：无数据时显示样例
    if (!hasInitialized.current) {
      setImages([{ id: "sample", originalUrl: "/images/sample.png", processedUrl: "/images/sample.png", processed: true }]);
    }
  }, []);

  // --- 性能优化：编辑器内添加图片也改用 Blob URL ---
  const handleAddImage = () => {
    if (!isLoaded) return;
    if (images.length >= credits) { setShowPricing(true); return; }

    const input = document.createElement("input");
    input.type = "file"; input.accept = "image/*";
    input.onchange = async (e: any) => {
      const file = e.target.files?.[0];
      if (file) {
        // 不再使用 FileReader 转换 Base64，改用 Blob URL 提升性能
        const blobUrl = URL.createObjectURL(file);
        const newImgIdx = images.length;

        setImages(prev => [...prev, {
          id: Date.now().toString(),
          originalUrl: blobUrl,
          processedUrl: "",
          processed: false
        }]);

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
  const canSave = currentImg?.processed && !currentImg?.error && !isProcessing;

  // 根据语言决定返回首页的路径
  const homePath = locale === 'en' ? '/en' : '/';

  return (
    <div className="h-screen w-full flex flex-col bg-gray-50 overflow-hidden select-none">
      <Header
        canSave={canSave}
        onStandardDownload={processDownload}
        onPremiumDownload={triggerBatchPricing}
        onOpenPricing={() => setShowPricing(true)}
        imageCount={images.length}
        // 将语言传给 Header，如果 Header 还没适配，这行会被忽略，不影响现有功能
        // @ts-ignore 
        locale={locale}
        dict={dict}
      />

      <div className="flex-1 relative bg-dot-grid overflow-hidden flex items-center justify-center">

        {/* 左侧侧边栏 */}
        <div className="absolute left-3 md:left-6 top-1/2 -translate-y-1/2 flex flex-col items-center gap-4 z-30 scale-90 md:scale-100">
          <button onClick={() => router.push(homePath)} className="w-10 h-10 bg-white shadow-lg rounded-full flex items-center justify-center border border-gray-100 transition-hover hover:bg-gray-50">
            <svg className="w-5 h-5 text-gray-400" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path d="M15 19l-7-7 7-7" strokeWidth="2" /></svg>
          </button>

          <div className="flex flex-col items-center py-6 px-2 bg-white/60 backdrop-blur-md rounded-4xl border border-gray-100 shadow-[0_0_50px_rgba(0,0,0,0.15)] gap-4">
            <div className="max-h-[40vh] overflow-y-auto space-y-4 no-scrollbar px-1 py-2">
              {images.map((img, idx) => (
                <div key={img.id} className="relative group">
                  <button onClick={() => setCurrentIdx(idx)} className={`w-12 h-12 md:w-14 md:h-14 rounded-2xl overflow-hidden border-2 transition-all ${idx === currentIdx ? 'border-blue-500 ring-4 ring-blue-100' : 'border-white shadow-sm hover:border-blue-200'}`}>
                    <img src={img.originalUrl} className="w-full h-full object-cover" alt="" />
                    {img.processed && (
                      <div className={`absolute top-1 right-1 w-2.5 h-2.5 rounded-full border border-white ${img.error ? 'bg-red-500 shadow-[0_0_8px_#ef4444]' : 'bg-green-500'}`} />
                    )}
                  </button>
                  {images.length > 1 && (
                    <button onClick={(e) => {
                      e.stopPropagation();
                      const newList = images.filter(i => i.id !== img.id);
                      setImages(newList);
                      sessionStorage.setItem("editor_images_list", JSON.stringify(newList));
                      if (currentIdx >= images.length - 1) setCurrentIdx(0);
                    }} className="absolute -top-1 -right-1 w-5 h-5 bg-red-500 text-white rounded-full opacity-0 group-hover:opacity-100 flex items-center justify-center shadow-lg transition-opacity"><svg className="w-3 h-3" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path d="M6 18L18 6M6 6l12 12" /></svg></button>
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
            <button onClick={() => setZoom(z => Math.max(z - 10, 20))} className="text-gray-400 px-2 font-bold hover:text-blue-500">
              <ZoomOut size={20} />
            </button>
            <span className="text-xs font-black text-gray-700 min-w-10 text-center uppercase tracking-widest">{zoom}%</span>
            <button onClick={() => setZoom(z => Math.min(z + 10, 400))} className="text-gray-400 px-2 font-bold hover:text-blue-500">
              <ZoomIn size={20} />
            </button>
          </div>
          <div className="w-px h-6 bg-gray-200" />
          <div className="flex items-center gap-6">
            <button
              onMouseDown={() => setShowComparison(true)} onMouseUp={() => setShowComparison(false)} onMouseLeave={() => setShowComparison(false)}
              className={`text-gray-400 hover:text-blue-500 transition-colors ${showComparison ? 'text-blue-600 scale-110' : ''}`}
            >
              <SquareSplitHorizontal size={20} />
            </button>
            <button onClick={resetCanvas} className="text-gray-400 hover:text-blue-500">
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
            onWheel={(e) => { const d = e.deltaY > 0 ? -10 : 10; setZoom(z => Math.min(Math.max(z + d, 20), 400)); }}
          >
            <div
              className="relative transition-transform duration-150 ease-out"
              style={{ transform: `translate(${position.x}px, ${position.y}px) scale(${zoom / 100})` }}
            >
              <div className="relative shadow-[0_40px_100px_rgba(0,0,0,0.15)] rounded-2xl overflow-hidden bg-transparent">
                <img
                  src={showComparison ? currentImg.originalUrl : (currentImg.processedUrl || currentImg.originalUrl)}
                  className="block w-auto h-auto max-h-[75vh] max-w-[85vw] pointer-events-none"
                  alt="Editor View"
                />

                {isProcessing && (
                  <>
                    <div className="ai-scan-line-vertical" />
                    <div className="absolute inset-0 bg-blue-500/5 backdrop-blur-[2px] flex items-center justify-center">
                      <div className="bg-white/90 p-4 rounded-2xl shadow-xl flex items-center gap-3 border border-blue-50">
                        <div className="w-4 h-4 border-2 border-blue-600 border-t-transparent rounded-full animate-spin" />
                        <span className="text-[10px] font-black text-gray-700 uppercase tracking-widest leading-none">{dict.optimizing}</span>
                      </div>
                    </div>
                  </>
                )}

                {currentImg.error && !isProcessing && (
                  <div className="absolute inset-0 bg-white/60 backdrop-blur-md flex flex-col items-center justify-center gap-4 animate-in fade-in">
                    <div className="w-12 h-12 bg-red-100 rounded-full flex items-center justify-center text-red-500 shadow-sm">
                      <AlertCircle size={28} />
                    </div>
                    <div className="text-center px-4">
                      <p className="font-black text-slate-800 uppercase text-xs tracking-widest mb-1">{dict.errorTitle}</p>
                    </div>
                    <button
                      onClick={handleRetry}
                      className="flex items-center gap-2 bg-slate-900 text-white px-6 py-2.5 rounded-xl font-black text-[10px] uppercase tracking-widest shadow-lg hover:scale-105 transition-all"
                    >
                      <RefreshCw size={12} /> {dict.retry}
                    </button>
                  </div>
                )}
              </div>
            </div>
          </div>
        )}

        {/* 移动端底部动作条 */}
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
              {canSave ? dict.savePhoto : currentImg?.error ? dict.errorAI : dict.processingBtn}
            </button>
            {canSave && (
              <SaveMenu
                isOpen={showMobileSaveMenu}
                isMobile={true}
                imageCount={images.length}
                onStandard={() => { setShowMobileSaveMenu(false); processDownload(); }}
                onPremium={triggerBatchPricing}
                // @ts-ignore
                locale={locale}
                dict={dict}
              />
            )}
          </div>
        </div>
      </div>

      <PricingModal
        isOpen={showPricing}
        onClose={() => setShowPricing(false)}
        onOpenLogin={() => setShowLogin(true)}
        // @ts-ignore
        locale={locale}
        dict={dict}
      />
      <LoginModal
        isOpen={showLogin}
        onClose={() => setShowLogin(false)}
        // @ts-ignore
        locale={locale}
        dict={dict}
      />
    </div>
  );
}