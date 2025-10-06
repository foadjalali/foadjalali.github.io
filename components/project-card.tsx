"use client"

import Image from "next/image"
import { ExternalLink, GitlabIcon as GitHub } from "lucide-react"

export default function ProjectCard({ project, onClick }) {
  return (
    <div
      className="bg-zinc-600/10 rounded-xl overflow-hidden shadow-lg shadow-gray-900/10 hover:shadow-gray-100/20 transition-all hover:-translate-y-1 duration-300 h-full flex flex-col"
      onClick={onClick}
    >
      <div className="relative h-48 w-full cursor-pointer" onClick={onClick}>
        <Image src={project.image || "/placeholder.svg"} alt={project.title} fill className="object-cover" />
        <div className="absolute inset-0 bg-gradient-to-t from-gray-900 to-transparent opacity-60"></div>
      </div>
      <div className="p-6 flex-1 flex flex-col">
        <h3
          className="font-semibold text-xl mb-2 cursor-pointer hover:text-sky-600 transition-colors"
          onClick={onClick}
        >
          {project.title}
        </h3>
        <p className="text-gray-300 mb-4 flex-1">{project.description}</p>
        <div className="flex flex-wrap gap-2 mb-4">
          {project.tags.map((tag, index) => (
            <span key={index} className="text-xs px-2 py-1 bg-zinc-600/10 rounded-full">
              {tag}
            </span>
          ))}
        </div>
        <div className="flex justify-between items-center">
          <button
            onClick={(e) => {
              e.stopPropagation()
              onClick(project)
            }}
            className="text-sm text-gray-400 hover:text-gray-300 transition-colors"
          >
            View Details
          </button>
          <div className="flex gap-2">
            <a
              href={project.demoLink}
              target="_blank"
              rel="noopener noreferrer"
              className="w-8 h-8 flex items-center justify-center rounded-full bg-zinc-600/10 hover:bg-gray-600 transition-colors"
              onClick={(e) => e.stopPropagation()}
            >
              <ExternalLink size={14} />
            </a>
            <a
              href={project.githubLink}
              target="_blank"
              rel="noopener noreferrer"
              className="w-8 h-8 flex items-center justify-center rounded-full bg-zinc-600/10 hover:bg-gray-600 transition-colors"
              onClick={(e) => e.stopPropagation()}
            >
              <GitHub size={14} />
            </a>
          </div>
        </div>
      </div>
    </div>
  )
}
