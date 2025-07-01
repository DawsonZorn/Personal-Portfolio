import { Code, Github, Linkedin } from 'lucide-react'
import DZ from '/DZ.png'

export default function NavBar() {
  return (
    <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="w-full max-w-7xl mx-auto flex h-14 items-center px-2 sm:px-4">
        <div className="mr-2 sm:mr-4 flex">
          <a href="/" className="mr-2 sm:mr-6 flex items-center space-x-1 sm:space-x-2">
            <img src={DZ} alt="Dawson Zorn Logo" className="h-8 w-8 sm:h-12 sm:w-12 rounded-full" />
            <span className="font-bold text-sm sm:text-base">Portfolio</span>
          </a>
        </div>
        <nav className="flex items-center space-x-2 sm:space-x-6 text-xs sm:text-sm font-medium">
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
        <div className="flex flex-1 items-center justify-end space-x-1 sm:space-x-2">
          <a href="https://github.com/DawsonZorn" target="_blank" className="p-1 sm:p-2">
            <Github className="h-3 w-3 sm:h-4 sm:w-4" />
            <span className="sr-only">GitHub</span>
          </a>
          <a href="https://www.linkedin.com/in/dawson-zorn-28961924b/" target="_blank" className="p-1 sm:p-2">
            <Linkedin className="h-3 w-3 sm:h-4 sm:w-4" />
            <span className="sr-only">LinkedIn</span>
          </a>
        </div>
      </div>
    </header>
  );
}