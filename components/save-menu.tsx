"use client"

interface SaveMenuProps {
  isOpen: boolean;
  onStandard: () => void;
  onPremium: () => void;
  isMobile?: boolean; // 新增：是否为移动端模式
}

export function SaveMenu({ isOpen, onStandard, onPremium, isMobile = false }: SaveMenuProps) {
  if (!isOpen) return null;

  // 移动端菜单向上弹出，桌面端向下弹出
  const positionClasses = isMobile 
    ? "bottom-full mb-4 left-1/2 -translate-x-1/2 w-[90vw]" 
    : "top-full mt-2 right-0 w-64";

  return (
    <div className={`absolute ${positionClasses} bg-white rounded-2xl shadow-2xl border border-gray-100 overflow-hidden z-[110] animate-in fade-in ${isMobile ? 'slide-in-from-bottom-4' : 'slide-in-from-top-2'} duration-200`}>
      <div className="p-2 space-y-1">
        <button
          onClick={onStandard}
          className="w-full flex items-center justify-between px-4 py-4 md:py-3 rounded-xl hover:bg-gray-50 transition-colors group text-left"
        >
          <div>
            <div className="text-sm md:text-sm font-bold text-gray-900 uppercase">Standard (720p)</div>
            <div className="text-[10px] text-gray-500 font-medium italic">Qualidade padrão</div>
          </div>
          <span className="text-[10px] font-black text-green-600 bg-green-50 px-2 py-1 rounded-md uppercase">Grátis</span>
        </button>

        <button
          onClick={onPremium}
          className="w-full flex items-center justify-between px-4 py-4 md:py-3 rounded-xl hover:bg-blue-50 transition-colors group border border-transparent hover:border-blue-100 text-left"
        >
          <div>
            <div className="text-sm md:text-sm font-bold text-gray-900 flex items-center gap-1 uppercase">
              HD Ultra (4K) <span className="text-amber-400">★</span>
            </div>
            <div className="text-[10px] text-gray-500 font-medium italic">Máxima qualidade</div>
          </div>
          <span className="text-[10px] font-black text-blue-600 bg-blue-50 px-2 py-1 rounded-md uppercase">PRO</span>
        </button>
      </div>
    </div>
  );
}