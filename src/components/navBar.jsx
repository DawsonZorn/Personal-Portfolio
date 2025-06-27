import { Code, Github, Linkedin } from 'lucide-react'
import DZ from '../../public/DZ.png'

export default function NavBar() {
  return (
    <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="w-full max-w-7xl mx-auto flex h-14 items-center px-4">
        <div className="mr-4 flex">
          <a href="/" className="mr-6 flex items-center space-x-2">
            <img src={DZ} alt="Dawson Zorn Logo" className="h-12 w-12 rounded-full" />
            <span className="font-bold">Portfolio</span>
          </a>
        </div>
        <nav className="flex items-center space-x-6 text-sm font-medium">
          <a href="#about" className="transition-colors hover:text-foreground/80">
            About
          </a>
          <a href="#projects" className="transition-colors hover:text-foreground/80">
            Projects
          </a>
          <a href="#skills" className="transition-colors hover:text-foreground/80">
            Skills
          </a>
          <a href="#contact" className="transition-colors hover:text-foreground/80">
            Contact
          </a>
        </nav>
        <div className="flex flex-1 items-center justify-end space-x-2">
          <a href="https://github.com/DawsonZorn" target="_blank" className="p-2">
            <Github className="h-4 w-4" />
            <span className="sr-only">GitHub</span>
          </a>
          <a href="https://www.linkedin.com/in/dawson-zorn-28961924b/" target="_blank" className="p-2">
            <Linkedin className="h-4 w-4" />
            <span className="sr-only">LinkedIn</span>
          </a>
        </div>
      </div>
    </header>
  );
}