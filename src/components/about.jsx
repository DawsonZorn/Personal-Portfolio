import Image from '../../public/image.jpg';

export default function About() {
  return (
    <div id="about" className="w-full min-h-screen flex items-center justify-center px-4 bg-stone-800">
      <div className="max-w-6xl mx-auto flex items-center gap-6">
        <div className="flex-1 pr-6">
          <h1 className="text-4xl text-white font-bold mb-4">About Me</h1>
          <p className="text-xl text-white mb-6">
            Hello! I'm <span className="font-semibold">Dawson</span>
          </p>
          <p className="text-lg text-gray-200 mb-8">
            I am a passionate full-stack developer with a love for creating dynamic and responsive web applications.
            I enjoy working with modern technologies and continuously learning new skills to enhance my craft.
            When I'm not coding, you can find me playing Football (Soccer) or playing video games.
          </p>
        </div>

        <div className="flex-shrink-0 ml-6">
          <img
            src={Image}
            alt="Profile"
            className="w-115 h-115 rounded-full border-2 border-white object-cover"
          />
        </div>
      </div>
    </div>
  );
}