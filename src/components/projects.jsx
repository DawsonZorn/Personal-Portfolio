import { useState } from 'react'

export default function Projects({ title, description, image, technologies, link }) {
  return (
    <div id="projects" className="flex flex-col items-center justify-center min-h-screen bg-gray-100">
      <h1 className="text-4xl font-bold mb-4">{title}</h1>
      <p className="text-lg text-gray-700 mb-8">{description}</p>
      <img src={image} alt={title} className="mb-6" />
      <div className="flex flex-wrap justify-center gap-4 mb-6">
        {technologies.map((tech, index) => (
          <span key={index} className="bg-blue-500 text-white px-3 py-1 rounded-full">
            {tech}
          </span>
        ))}
      </div>
      <a href={link} className="text-blue-500 hover:underline">View Project</a>
    </div>
  );
}