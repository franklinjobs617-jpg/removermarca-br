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
                                Ferramenta de IA para <span className="text-blue-600 italic">tirar marca d&apos;água</span>
                            </h1>
                        </div>
                        <UploadArea />
                        <div className="w-full pt-6 border-t border-slate-50 mt-6 text-center">
                            <p className="text-[10px] font-black text-slate-400 tracking-[0.2em] mb-4 uppercase">Tente estas:</p>
                            <SampleImages />
                        </div>
                    </div>
                </div>

                {/* 文字和对比图 */}
                <div className="order-2 md:order-1 flex flex-col space-y-8">
                    <div className="space-y-5 text-center lg:text-left hidden md:block">
                        <div className="inline-flex items-center gap-2 px-3 py-1 bg-blue-50 border border-blue-100 rounded-full w-fit mx-auto lg:mx-0">
                            <Sparkles className="w-3.5 h-3.5 text-blue-600 fill-blue-600" />
                            <span className="text-[10px] font-black text-blue-700 tracking-widest uppercase">Tecnologia IA 2026</span>
                        </div>
                        <h1 className="text-3xl md:text-5xl font-black text-slate-900 leading-[1.1] tracking-tight">
                            Ferramenta de IA para <br className="hidden sm:block" />
                            <span className="text-blue-600 italic">tirar marca d&apos;água</span> <br />
                            online grátis
                        </h1>
                        <p className="text-lg text-slate-500 max-w-md mx-auto lg:mx-0 font-medium">
                            O jeito mais rápido e profissional de <strong className="text-slate-900">remover marca d&apos;água</strong> sem perder qualidade.
                        </p>
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