"use client"

import { X, ExternalLink, GitlabIcon as GitHub } from "lucide-react"
import Image from "next/image"

export default function ProjectModal({ project, onClose }) {
  return (
    <div
      className="fixed inset-0 bg-black/80 z-50 flex items-center justify-center p-4 overflow-y-auto"
      onClick={onClose}
    >
      <div
        className="bg-zinc-600/10 rounded-xl max-w-3xl w-full max-h-[90vh] overflow-y-auto"
        onClick={(e) => e.stopPropagation()}
        data-aos="zoom-in"
        data-aos-duration="300"
      >
        <div className="relative h-64 w-full">
          <Image src={project.image || "/placeholder.svg"} alt={project.title} fill className="object-cover" />
          <button
            onClick={onClose}
            className="absolute top-4 right-4 w-10 h-10 rounded-full bg-black/50 flex items-center justify-center text-white hover:bg-black/70 transition-colors"
          >
            <X size={20} />
          </button>
        </div>

        <div className="p-6">
          <div className="flex justify-between items-start mb-4 flex-wrap gap-4">
            <h3 className="text-2xl font-bold">{project.title}</h3>
            <div className="flex gap-2">
              <a
                href={project.demoLink}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 px-3 py-1.5 bg-neutral-600 hover:bg-neutral-700 rounded-lg text-sm transition-colors"
              >
                <ExternalLink size={14} />
                Live Demo
              </a>
              <a
                href={project.githubLink}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 px-3 py-1.5 bg-zinc-600/10 hover:bg-gray-600 rounded-lg text-sm transition-colors"
              >
                <GitHub size={14} />
                Source Code
              </a>
            </div>
          </div>

          <div className="flex flex-wrap gap-2 mb-6">
            {project.tags.map((tag, index) => (
              <span key={index} className="text-xs px-2 py-1 bg-zinc-600/10 rounded-full">
                {tag}
              </span>
            ))}
          </div>

          <div className="space-y-6">
            <div>
              <h4 className="text-lg font-semibold mb-2">Overview</h4>
              <p className="text-gray-300">{project.fullDescription}</p>
            </div>

            <div>
              <h4 className="text-lg font-semibold mb-2">Challenges</h4>
              <p className="text-gray-300">{project.challenges}</p>
            </div>

            <div>
              <h4 className="text-lg font-semibold mb-2">Solutions</h4>
              <p className="text-gray-300">{project.solutions}</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
