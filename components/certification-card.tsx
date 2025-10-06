import Image from "next/image"

export default function CertificationCard({ title, issuer, date, image }) {
  return (
    <div className="bg-zinc-600/10 rounded-xl overflow-hidden shadow-lg shadow-gray-900/10 hover:shadow-gray-100/20 transition-all hover:-translate-y-1 duration-300">
      <div className="p-6">
        <div className="flex items-center gap-4 mb-4">
          <div className="w-16 h-16 relative rounded-lg overflow-hidden bg-zinc-600/10">
            <Image src={image || "/placeholder.svg"} alt={title} fill className="object-cover" />
          </div>
          <div>
            <h3 className="font-semibold text-lg">{title}</h3>
            <p className="text-gray-400 text-sm">{issuer}</p>
          </div>
        </div>
        <div className="flex justify-between items-center">
          <span className="text-sm text-gray-400">{date}</span>
          <span className="text-xs px-2 py-1 bg-neutral-500/20 text-sky-600 rounded-full">Verified</span>
        </div>
      </div>
    </div>
  )
}
