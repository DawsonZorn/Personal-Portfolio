import { useState } from 'react'

export default function Skills({ category, icon, technologies }) {
  return (
    <div id="skills" className="flex flex-col items-center justify-center min-h-screen bg-stone-800">
      <h1 className="text-4xl font-bold mb-4">{category}</h1>
      <div className="flex items-center space-x-2 mb-6">
        {icon && <img src={icon} alt={`${category} icon`} className="h-8 w-8" />}
        <span className="text-lg font-semibold">{category} Skills</span>
      </div>
      <div className="flex flex-wrap justify-center gap-4">
        {technologies.map((tech, index) => (
          <span key={index} className="bg-blue-800 text-white px-3 py-1 rounded-full">
            {tech}
          </span>
        ))}
      </div>
    </div>
  );
}