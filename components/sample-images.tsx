"use client"

import { useRouter } from "next/navigation"

const samples = [
  { id: 1, url: "/diverse-person-portrait.png" },
  { id: 2, url: "/vast-mountain-valley.png" },
  { id: 3, url: "/diverse-products-still-life.png" },
  { id: 4, url: "/abstract-geometric.png" },
]

export function SampleImages() {
  const router = useRouter()

  const handleSampleClick = () => {
    router.push("/editor")
  }

  return (
    <div className="mt-8">
      <p className="text-sm text-gray-500 mb-3 uppercase tracking-wider">Amostras:</p>
      <div className="flex gap-3">
        {samples.map((sample) => (
          <button
            key={sample.id}
            onClick={handleSampleClick}
            className="w-20 h-20 rounded-xl overflow-hidden border-2 border-gray-200 hover:border-blue-500 transition-all hover:scale-105"
          >
            <img
              src={sample.url || "/placeholder.svg"}
              alt={`Sample ${sample.id}`}
              className="w-full h-full object-cover grayscale hover:grayscale-0 transition-all"
            />
          </button>
        ))}
      </div>
    </div>
  )
}
