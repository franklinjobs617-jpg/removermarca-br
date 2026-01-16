"use client"

import { useState, useEffect } from "react"
import { useRouter } from "next/navigation"
import { UploadCloud } from "lucide-react"

export function GlobalDragDrop() {
    const [isGlobalDragging, setIsGlobalDragging] = useState(false)
    const router = useRouter()

    const handleFileProcess = (file: File) => {
        if (!file.type.startsWith("image/")) return

        // 核心优化 1：创建 Blob URL（极其快速，支持大图）
        const blobUrl = URL.createObjectURL(file)

        // 清理旧数据，确保存储干净
        sessionStorage.removeItem("editor_images_list")
        sessionStorage.removeItem("uploadedImageUrl")

        // 存储 Blob URL
        sessionStorage.setItem("uploadedImage", blobUrl)

        // 核心优化 2：单页跳转，不刷新页面
        router.push("/editor")
    }

    useEffect(() => {
        const handlePaste = (e: ClipboardEvent) => {
            const items = e.clipboardData?.items
            if (!items) return
            for (let i = 0; i < items.length; i++) {
                if (items[i].type.indexOf("image") !== -1) {
                    const file = items[i].getAsFile()
                    if (file) handleFileProcess(file)
                    return
                }
            }
        }

        let dragCounter = 0
        const handleDragEnter = (e: DragEvent) => {
            e.preventDefault(); dragCounter++
            if (e.dataTransfer?.items?.length) setIsGlobalDragging(true)
        }
        const handleDragLeave = (e: DragEvent) => {
            e.preventDefault(); dragCounter--
            if (dragCounter === 0) setIsGlobalDragging(false)
        }
        const handleDrop = (e: DragEvent) => {
            e.preventDefault(); setIsGlobalDragging(false); dragCounter = 0
            const file = e.dataTransfer?.files[0]
            if (file) handleFileProcess(file)
        }

        window.addEventListener("paste", handlePaste)
        window.addEventListener("dragenter", handleDragEnter)
        window.addEventListener("dragover", (e) => e.preventDefault())
        window.addEventListener("dragleave", handleDragLeave)
        window.addEventListener("drop", handleDrop)

        return () => {
            window.removeEventListener("paste", handlePaste)
            window.removeEventListener("dragenter", handleDragEnter)
            window.removeEventListener("dragleave", handleDragLeave)
            window.removeEventListener("drop", handleDrop)
        }
    }, [router])

    if (!isGlobalDragging) return null

    return (
        <div className="fixed inset-0 z-[300] bg-slate-900/60 backdrop-blur-xl flex flex-col items-center justify-center animate-in fade-in duration-300 pointer-events-none">
            <div className="absolute top-10 left-10 w-20 h-20 border-t-[8px] border-l-[8px] border-white/40 rounded-tl-3xl"></div>
            <div className="absolute top-10 right-10 w-20 h-20 border-t-[8px] border-r-[8px] border-white/40 rounded-tr-3xl"></div>
            <div className="absolute bottom-10 left-10 w-20 h-20 border-b-[8px] border-l-[8px] border-white/40 rounded-bl-3xl"></div>
            <div className="absolute bottom-10 right-10 w-20 h-20 border-b-[8px] border-r-[8px] border-white/40 rounded-br-3xl"></div>

            <div className="text-center space-y-4">
                <div className="w-20 h-20 bg-blue-600 rounded-2xl flex items-center justify-center mx-auto shadow-2xl animate-bounce">
                    <UploadCloud className="w-10 h-10 text-white" />
                </div>
                <h2 className="text-white text-4xl md:text-5xl font-black tracking-tighter uppercase italic">
                    Solte para enviar
                </h2>
            </div>
        </div>
    )
}