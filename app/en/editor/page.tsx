import { EditorInterface } from "@/components/editor-interface"
import { Metadata } from "next"
import { dictionaries } from "@/lib/dictionaries"

export const metadata: Metadata = {
  title: "Remove Watermarks from Photos Online Free in 4K - RemoverMarca",
  description: "Remove watermarks from photos online for free with AI technology. Remove logos, stamps and watermarks from images in 4K Ultra quality.",
  alternates: {
    canonical: "https://removermarca.com/en/editor"
  }
}

export default function EditorPage() {
  return <EditorInterface
    dict={dictionaries.en}
    locale="en"
  />
}
