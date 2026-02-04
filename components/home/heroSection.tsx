import { Sparkles, MousePointer2 } from "lucide-react"
import { UploadArea } from "@/components/upload-area"
import { BeforeAfterSlider } from "@/components/before-after-slider"
import { SampleImages } from "@/components/sample-images"

export function HeroSection() {
    return (
        <section className="relative pt-12 md:pt-20 pb-16 overflow-hidden bg-dot-grid">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-16 items-center">
                {/* 上传框 */}
                <div className="order-1 md:order-2 relative flex justify-center lg:justify-end">
                    <div className="w-full max-w-120 bg-white rounded-4xl md:rounded-[56px] p-6 md:p-12 shadow-[0_40px_80px_-20px_rgba(0,0,0,0.1)] border border-slate-50 relative z-10 flex flex-col items-center">
                        {/* 移动端文字 */}
                        <div className="space-y-5 text-center block md:hidden mb-8">
                            <h1 className="text-4xl font-black text-slate-900 leading-[1.15] tracking-tight">
                                Ferramenta de IA para <span className="text-blue-600 italic">tirar marca d&apos;água online grátis</span>
                            </h1>
                        </div>
                        <UploadArea
                            buttonText="Subir imagem"
                            dragText="ou arraste um arquivo,"
                            pasteLabel="Cole imagem ou"
                            pasteAction="Ctrl+V"
                            locale="pt"
                        />
                        <div className="w-full pt-6 border-t border-slate-50 mt-6 text-center">
                            <p className="text-[10px] font-black text-slate-400 tracking-[0.2em] mb-4 uppercase">Tente estas:</p>
                            <SampleImages />
                        </div>
                    </div>
                </div>

                {/* 文字和对比图 */}
                <div className="order-2 md:order-1 flex flex-col space-y-8">
                    <div className="space-y-5 text-center lg:text-left hidden md:block">
                        <div className="inline-flex items-center gap-2 px-4 py-2 bg-blue-50 border border-blue-200 rounded-full w-fit mx-auto lg:mx-0">
                            <Sparkles className="w-3 h-3 text-blue-600" />
                            <span className="text-[11px] font-black text-blue-700 tracking-widest uppercase">Algoritmo de Inpainting Avançado</span>
                        </div>
                        <h1 className="text-3xl md:text-5xl font-black text-slate-900 leading-[1.1] tracking-tight">
                            Ferramenta de IA para <span className="text-blue-600 italic">tirar marca d&apos;água online grátis</span>
                        </h1>
                        <p className="text-lg text-slate-500 max-w-md mx-auto lg:mx-0 font-medium">
                            O jeito mais rápido e profissional de <strong className="text-slate-900">remover marca d&apos;água de imagem</strong> sem perder qualidade.
                        </p>
                        
                        {/* Prova Social */}
                        <div className="flex items-center gap-4 text-sm text-slate-400 pt-2">
                            <div className="flex items-center gap-1">
                                <div className="flex -space-x-1">
                                    <div className="w-6 h-6 bg-blue-500 rounded-full border-2 border-white"></div>
                                    <div className="w-6 h-6 bg-green-500 rounded-full border-2 border-white"></div>
                                    <div className="w-6 h-6 bg-purple-500 rounded-full border-2 border-white"></div>
                                    <div className="w-6 h-6 bg-orange-500 rounded-full border-2 border-white"></div>
                                </div>
                                <span className="ml-2 font-bold">+15.000 usuários</span>
                            </div>
                            <div className="flex items-center gap-1">
                                <div className="flex text-yellow-400">
                                    {"★★★★★".split("").map((star, i) => (
                                        <span key={i} className="text-sm">{star}</span>
                                    ))}
                                </div>
                                <span className="font-bold">4.9/5</span>
                            </div>
                        </div>
                    </div>

                    <div className="relative group w-full max-w-lg mx-auto lg:mx-0">
                        <div className="absolute -top-3 -left-2 bg-blue-600 text-white px-2 py-1 rounded-lg shadow-xl z-20 text-[9px] font-black tracking-widest flex items-center gap-1.5 uppercase">
                            <MousePointer2 className="w-2.5 h-2.5" /> Antes / Depois
                        </div>
                        <div className="rounded-4xl overflow-hidden shadow-2xl border-[6px] border-white bg-white">
                            <BeforeAfterSlider />
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}