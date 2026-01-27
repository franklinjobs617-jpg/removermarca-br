// components/save-menu.tsx
import { EditorDictionary } from "./editor-interface"

interface SaveMenuProps {
  isOpen: boolean
  onStandard: () => void
  onPremium: () => void
  onPremiumDownload?: () => void
  isMobile?: boolean
  imageCount: number
  locale: string
  dict: EditorDictionary
}

export function SaveMenu({ isOpen, onStandard, onPremium, onPremiumDownload, isMobile, imageCount = 1, dict }: SaveMenuProps) {
  if (!isOpen) return null;
  const position = isMobile ? "bottom-full mb-4 left-0 w-full" : "top-full mt-2 right-0 w-64";

  return (
    <div className={`absolute ${position} bg-white rounded-2xl shadow-2xl border border-gray-100 py-2 z-[100]`}>
      <button onClick={onStandard} className="w-full flex items-center justify-between px-4 py-3 hover:bg-gray-50 text-left">
        <div>
          <div className="text-sm font-bold">{dict.standardDownload}</div>
          <div className="text-[10px] text-gray-500">{dict.currentImage}</div>
        </div>
        <span className="text-[10px] font-bold text-green-600 bg-green-50 px-2 py-0.5 rounded">{dict.oneCredit}</span>
      </button>

      {/* 核心：如果有多张图，显示批量下载 */}
      {imageCount > 1 && (
        <button onClick={onPremiumDownload || onPremium} className="w-full flex items-center justify-between px-4 py-3 hover:bg-blue-50 text-left border-t border-gray-50">
          <div>
            <div className="text-sm font-bold text-blue-600">{dict.downloadBatch}</div>
            <div className="text-[10px] text-blue-400">{dict.allImages?.replace("{count}", imageCount.toString()) || `${imageCount} images`}</div>
          </div>
          <span className="text-[10px] font-black text-blue-600 bg-blue-50 px-2 py-0.5 rounded">PRO</span>
        </button>
      )}

      <button onClick={onPremium} className="w-full flex items-center justify-between px-4 py-3 hover:bg-blue-50 text-left border-t border-gray-50">
        <div>
          <div className="text-sm font-bold">{dict.hdDownload}</div>
          <div className="text-[10px] text-gray-500">{dict.maxQuality}</div>
        </div>
        <span className="text-[10px] font-black text-blue-600 bg-blue-50 px-2 py-0.5 rounded">PRO</span>
      </button>
    </div>
  );
}