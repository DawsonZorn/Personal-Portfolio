import Image from '/headshot.png';

export default function About() {
  return (
    <div id="about" className="w-full min-h-screen bg-stone-800 flex items-center justify-center px-4">
      <div className="max-w-6xl mx-auto flex flex-col lg:flex-row items-center gap-6 lg:gap-12">
        {/* Text content */}
        <div className="flex-1 text-center lg:text-left lg:pr-6">
          <h1 className="text-4xl sm:text-5xl lg:text-6xl text-white font-bold mb-4">
            Hi, I'm <span className="text-emerald-300">Dawson</span>
          </h1>
          <h2 className="text-2xl sm:text-3xl text-gray-300 font-semibold mb-6">
            Full-Stack Developer
          </h2>
          <p className="text-base sm:text-lg text-gray-200 mb-8">
            I am a passionate full-stack developer with a love for creating dynamic and responsive web applications.
            I enjoy working with modern technologies and continuously learning new skills to enhance my craft.
            When I'm not coding, you can find me playing Football (Soccer) or playing video games.
          </p>
        </div>

        {/* Image */}
        <div className="flex-shrink-0">
          <img
            src={Image}
            alt="Profile"
            className="w-64 h-64 sm:w-80 sm:h-80 lg:w-96 lg:h-96 rounded-full border-2 border-white object-cover object-[50%_35%]"
          />
        </div>
      </div>
    </div>
  );
}