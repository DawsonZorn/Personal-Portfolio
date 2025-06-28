
export default function Skills({ category, icon, technologies }) {
  return (
    <div className="bg-stone-700 rounded-lg p-6 shadow-lg ">
      <div className="mb-4">
        <h3 className="text-xl font-bold text-white flex items-center gap-2">
          {icon && <span className="text-blue-400">{icon}</span>}
          {category}
        </h3>
      </div>
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
  );
}