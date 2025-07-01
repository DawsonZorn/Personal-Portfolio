
import Header from './components/header.jsx'
import About from './components/about.jsx'
import NavBar from './components/navBar.jsx'
import Projects from './components/projects.jsx'
import Skills from './components/skills.jsx'
import logo from '/DZ.png'
import clubconnect from '/ClubConnect.png'
import ZornFC from '/zornfc.png'
import Contact from './components/contact.jsx'

import { Globe, Database, Server, Smartphone } from 'lucide-react'

function App() {

  const projectsData = [
    {
      title: "Club Connect",
      goal: "As a player on several amateur soccer teams, I noticed that coordination was always a challenge. We relied on scattered group chats, inconsistent attendance, and clunky third-party apps that didn't fully meet our needs.",
      solution: "Club Connect is a mobile-first app I'm building to streamline team management. It allows coaches to create teams, add players, and schedule matches. I'm using Firebase for real-time data handling and user management, with a focus on simplicity and speed.",
      result: "Currently, core features like match scheduling and player/team creation are complete. Next, I'll be adding real-time chat and player availability to support seamless communication.",
      image: clubconnect,
      technologies: ['React-Native', 'Firebase', 'Tailwind CSS', 'Expo', 'Node.js'],
      github: "https://www.freepik.com/premium-vector/caution-work-progress-icon-isolated-white-background-vector-illustration-design_36704532.htm"
    },
    {
      title: "Zorn FC E-Commerce",
      goal: "Need for a comprehensive e-commerce platform for football clubs to sell merchandise and manage team information effectively.",
      solution: "Built a full-stack e-commerce website using Ruby on Rails with Bootstrap CSS for responsive design and user-friendly interface.",
      result: "Successfully created a functional e-commerce platform with user account management, product catalog, and team information sections.",
      image: ZornFC,
      technologies: ['Ruby-On-Rails', 'Bootstrap CSS', 'SQLite'],
      github: "https://github.com/DawsonZorn/ZornFC-ecommerce"
    },
    {
      title: "Soccer Fan Club CMS Website",
      goal: "Fan clubs need efficient ways to manage content, communicate with members, and organize events without relying on multiple disconnected platforms.",
      solution: "Developed a CMS using PHP Laravel framework with React components, containerized with Docker for easy deployment.",
      result: "Delivered a fully functional CMS with user authentication, content management, and event scheduling capabilities.",
      image: logo,
      technologies: ['PHP', 'Laravel', 'Tailwind CSS', 'React', 'Docker', 'MySQL'],
      github: "https://github.com/DawsonZorn/Dawson_WEBD2Project"
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
      <About />

      <div id="projects" className="w-full min-h-screen bg-stone-800 py-20 px-4">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl font-bold text-white text-center mb-12">My Projects</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {projectsData.map((project, index) => (
              <Projects
                key={index}
                title={project.title}
                goal={project.goal}
                solution={project.solution}
                result={project.result}
                image={project.image}
                technologies={project.technologies}
                github={project.github}
              />
            ))}
          </div>
        </div>
      </div>

      <div id="skills" className="w-full py-32 bg-stone-800 px-4">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl font-bold text-white text-center mb-12">My Skills</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {skillsData.map((skill, index) => (
              <Skills
                key={index}
                category={skill.category}
                icon={skill.icon}
                technologies={skill.technologies}
              />
            ))}
          </div>
        </div>
      </div>

      <Contact />
    </div>
  )
}

export default App
