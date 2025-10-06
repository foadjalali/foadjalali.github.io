"use client"

import Image from "next/image"

type Project = {
  id: number
  title: string
  description: string
  image: string
  tags?: string[]
}

export default function ProjectCard({
  project,
  onClick,
}: {
  project: Project
  onClick?: () => void
}) {
  const { title, description, image, tags } = project

  return (
    <button
      type="button"
      onClick={onClick}
      className="group block w-full text-left"
      aria-label={`Open project ${title}`}
    >
      <div className="overflow-hidden rounded-xl border border-white/10 bg-zinc-900/40 transition-colors hover:bg-zinc-900/60">
        {/* --- Image wrapper with fixed ratio (16:9) --- */}
        <div
          className="relative w-full bg-zinc"
          style={{ paddingTop: "56.25%" }} /* 16/9 */
        >
          <Image
            src={image}
            alt={title}
            fill
            className="object-contain p-2" /* <-- مهم: contain */
            sizes="(min-width:1024px) 25vw, (min-width:768px) 50vw, 100vw"
            /* priority={index<2}  // اگر لازم داری برای چند تای اول */
          />
        </div>

        {/* --- Content --- */}
        <div className="p-4">
          <h3 className="text-lg font-semibold leading-snug line-clamp-2 group-hover:text-white">
            {title}
          </h3>
          <p className="mt-1 text-sm text-white/70 line-clamp-2">{description}</p>

          {tags?.length ? (
            <div className="mt-3 flex flex-wrap gap-2">
              {tags.map((t) => (
                <span
                  key={t}
                  className="rounded-full bg-zinc-700/40 px-2.5 py-0.5 text-xs"
                >
                  {t}
                </span>
              ))}
            </div>
          ) : null}
        </div>
      </div>
    </button>
  )
}
