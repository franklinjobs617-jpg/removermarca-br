import { EditorInterface } from "@/components/editor-interface"
import { dictionaries } from "@/lib/dictionaries"
import { Metadata } from "next"

export const metadata: Metadata = {
  title: "Editor",
  description: "Editor de palavras",
}

export default function EditorPage() {
  return <EditorInterface
    dict={dictionaries.pt}
    locale="pt" />
}
