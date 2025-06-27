
import Header from './components/header.jsx'
import About from './components/about.jsx'
import NavBar from './components/navBar.jsx'
import Projects from './components/projects.jsx'
import Skills from './components/skills.jsx'
import logo from '../public/DZ.png'

import { Globe, Database, Server, Smartphone } from 'lucide-react'

function App() {

  const projectsData = [
    {
      title: "Club Connect",
      description: "A sports team management app to allow players and coaches to communicate, share schedules, and manage team activities.",
      image: logo,
      technologies: ['React-Native', 'Firebase', 'Tailwind CSS', 'Expo', 'Node.js'],
      link: "Github.com"
    },
    {
      title: "Zorn FC E-Commerce",
      description: "A E-Commerce website for a football club that allows users to purchase merchandise, view team information, and manage their accounts.",
      image: logo,
      technologies: ['Ruby-On-Rails', 'Bootstrap CSS', 'SQLite'],
      link: "https://github.com/DawsonZorn/ZornFC-ecommerce"
    },
    {
      title: "Soccer Fan Club CMS Website",
      description: "A content management system website for a mock soccer fan club that allows users to view news, events, and manage their accounts.",
      image: logo,
      technologies: ['PHP', 'Laravel', 'Tailwind CSS', 'React', 'Docker'],
      link: "https://github.com/DawsonZorn/Dawson_WEBD2Project"
    }
  ];

  const skillsData = [
    {
      category: "Frontend",
      icon: <Globe className="w-5 h-5" />,
      technologies: ['React', 'JavaScript', 'HTML', 'CSS', 'Tailwind CSS', 'TypeScript'],
    },
    {
      category: "Backend",
      icon: <Server className="w-5 h-5" />,
      technologies: ['Node.js', 'PHP', 'Ruby on Rails', 'Laravel', 'Express.js', 'Java', 'Python'],
    },
    {
      category: "Database",
      icon: <Database className="w-5 h-5" />,
      technologies: ['MySQL', 'SQLite', 'MongoDB', 'Firebase', 'PostgreSQL', 'Supabase'],
    },
    {
      category: "Mobile",
      icon: <Smartphone className="w-5 h-5" />,
      technologies: ['React Native', 'Expo'],
    }
  ];

  return (
    <div className="min-h-screen bg-background">
      <NavBar />
      <Header />
      <About />

      <div id="projects" className="w-full min-h-screen bg-stone-800 py-16 px-4">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl font-bold text-white text-center mb-12">My Projects</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {projectsData.map((project, index) => (
              <Projects
                key={index}
                title={project.title}
                description={project.description}
                image={project.image}
                technologies={project.technologies}
                link={project.link}
              />
            ))}
          </div>
        </div>
      </div>

      <div id="skills" className="w-full min-h-screen bg-stone-800 py-16 px-4">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl font-bold text-white text-center mb-12">My Skills</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {skillsData.map((skill, index) => (
              <Skills
                key={index}
                category={skill.category}
                technologies={skill.technologies}
              />
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}

export default App
