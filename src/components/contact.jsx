import { Mail, Linkedin, Github } from 'lucide-react'

export default function Contact() {
  return (
    <div id="contact" className="w-full py-24 bg-stone-800 px-4">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-white mb-4">Get In Touch</h2>
          <p className="mx-auto max-w-[700px] text-gray-300">
            I'm always open to discussing new projects, creative ideas, or opportunities to be part of your vision. Let's Connect!.
          </p>
        </div>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <a
            href="mailto:dawsonzorn@outlook.com"
            className="flex items-center justify-center gap-2 bg-blue-600 text-white px-6 py-3 rounded-lg hover:bg-blue-700 transition-colors text-lg font-medium"
          >
            <Mail className="w-4 h-4" />
            Send Email
          </a>
          <a
            href="https://www.linkedin.com/in/dawson-zorn-28961924b/"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center justify-center gap-2 bg-stone-600 text-white px-6 py-3 rounded-lg hover:bg-stone-500 transition-colors text-lg font-medium border border-stone-500"
          >
            <Linkedin className="w-4 h-4" />
            LinkedIn
          </a>
          <a
            href="https://github.com/DawsonZorn"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center justify-center gap-2 bg-stone-600 text-white px-6 py-3 rounded-lg hover:bg-stone-500 transition-colors text-lg font-medium border border-stone-500"
          >
            <Github className="w-4 h-4" />
            GitHub
          </a>
        </div>
      </div>
    </div>
  )
}