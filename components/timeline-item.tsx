export default function TimelineItem({ year, title, institution, description }) {
  return (
    <div className="relative pl-8 pb-4 border-l border-gray-700">
      <div className="absolute left-0 top-0 w-4 h-4 bg-neutral-500 rounded-full -translate-x-1/2"></div>
      <div className="text-sm text-sky-400 mb-1">{year}</div>
      <h4 className="text-lg font-semibold">{title}</h4>
      <div className="text-gray-400 mb-2">{institution}</div>
      <p className="text-gray-300">{description}</p>
    </div>
  )
}
