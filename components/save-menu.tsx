// components/save-menu.tsx
export function SaveMenu({ isOpen, onStandard, onPremium, isMobile, imageCount = 1 }: any) {
  if (!isOpen) return null;
  const position = isMobile ? "bottom-full mb-4 left-0 w-full" : "top-full mt-2 right-0 w-64";

  return (
    <div className={`absolute ${position} bg-white rounded-2xl shadow-2xl border border-gray-100 py-2 z-[100]`}>
      <button onClick={onStandard} className="w-full flex items-center justify-between px-4 py-3 hover:bg-gray-50 text-left">
        <div>
          <div className="text-sm font-bold">Standard (720p)</div>
          <div className="text-[10px] text-gray-500">Imagem atual</div>
        </div>
        <span className="text-[10px] font-bold text-green-600 bg-green-50 px-2 py-0.5 rounded">1 CRÉDITO</span>
      </button>

      {/* 核心：如果有多张图，显示批量下载 */}
      {imageCount > 1 && (
        <button onClick={onPremium} className="w-full flex items-center justify-between px-4 py-3 hover:bg-blue-50 text-left border-t border-gray-50">
          <div>
            <div className="text-sm font-bold text-blue-600">Baixar Lote (ZIP)</div>
            <div className="text-[10px] text-blue-400">Todas as {imageCount} imagens</div>
          </div>
          <span className="text-[10px] font-black text-blue-600 bg-blue-50 px-2 py-0.5 rounded">PRO</span>
        </button>
      )}

      <button onClick={onPremium} className="w-full flex items-center justify-between px-4 py-3 hover:bg-blue-50 text-left border-t border-gray-50">
        <div>
          <div className="text-sm font-bold">HD Ultra (4K) ★</div>
          <div className="text-[10px] text-gray-500">Qualidade máxima</div>
        </div>
        <span className="text-[10px] font-black text-blue-600 bg-blue-50 px-2 py-0.5 rounded">PRO</span>
      </button>
    </div>
  );
}