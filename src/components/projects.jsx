
import { Github, ExternalLink } from 'lucide-react'

export default function Projects({ title, description, image, technologies, github }) {
  return (
    <div className="bg-stone-700 rounded-lg overflow-hidden shadow-lg">
      {/* Project Image */}
      <div className="aspect-video relative">
        <img
          src={image}
          alt={title}
          className="w-full h-full object-cover"
        />
      </div>

      {/* Card Content */}
      <div className="p-6">
        {/* Header */}
        <div className="mb-4">
          <h3 className="text-xl font-bold text-white mb-2">{title}</h3>
          <p className="text-gray-300 text-sm">{description}</p>
        </div>

        {/* Technologies */}
        <div className="mb-4">
          <div className="flex flex-wrap gap-2">
            {technologies.map((tech, index) => (
              <span
                key={index}
                className="bg-stone-600 text-white px-3 py-1 rounded-full text-sm border border-stone-500 hover:bg-stone-500 transition-colors"
              >
                {tech}
              </span>
            ))}
          </div>
        </div>

        {/* Action Buttons */}
        <div className="flex gap-2">
          <a
            href={github}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 bg-stone-600 text-white px-4 py-2 rounded-lg hover:bg-stone-500 transition-colors text-sm border border-stone-500"
          >
            <Github className="w-4 h-4" />
            Code
          </a>
        </div>
      </div>
    </div>
  );
}