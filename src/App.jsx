import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Header from './components/header.jsx'
import About from './components/about.jsx'
import NavBar from './components/navBar.jsx'
import Projects from './components/projects.jsx'
import Skills from './components/skills.jsx'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div className="min-h-screen bg-background">
      <NavBar />
      <Header />
      <About />
    </div>
  )
}

export default App
