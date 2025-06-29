
export default function Header() {
  return (
    <div id="header" className="w-full flex flex-col items-center justify-center min-h-screen px-4 bg-stone-800">
      <div className="max-w-4xl mx-auto text-center">
        <h1 className="text-6xl font-bold mb-4 text-white">Full-Stack Developer</h1>
        <p className="text-lg text-gray-200 mb-8">
          Building digital experiences that matter.
        </p>
      </div>
    </div>
  );
}