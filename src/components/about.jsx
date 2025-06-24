import Image from '../../public/image.jpg';

export default function About() {
  return (
    <>
      <div id="about" className="flex flex-col items-center justify-center min-h-screen bg-gray-100">
        <h1 className="text-4xl font-bold mb-4">About Me</h1>
        <p className="text-xl  mb-6">
          Hello! I'm <span className="font-semibold">Dawson</span>
        </p>
        <p className="text-lg text-gray-700 mb-8">
          I am a passionate full-stack developer with a love for creating dynamic and responsive web applications.
          I enjoy working with modern technologies and continuously learning new skills to enhance my craft.
          When I'm not coding, you can find me playing Football (Soccer) or playing video games.
        </p>
        <div className="flex justify-center">
          <img
            src={Image}
            alt="Profile"
            width={500}
            height={500}
            className="rounded-full border-2 border-border"
          />
        </div>
      </div>
    </>
  );
}