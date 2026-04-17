import { useState } from 'react'
import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom'
import SideNavbar from './components/SideNavbar'
import Hero from './components/Hero'
import Background from './components/Background'
import Skills from './components/Skills'
import Projects from './components/Projects'
import Experience from './components/Experience'
import Contact from './components/Contact'

const sections = [
  { id: 'background', name: 'bg-interesting-999', onhaver: "Background", items: [
    { id: 'academic', name: 'Academics' },
    { id: 'certifications', name: 'Certifications' },
    { id: 'swe', name: 'SWE' }
  ]},
  { id: 'skills', name: 'SKILL.md', onhaver: "Skills",  items: [
    { id: 'languages', name: 'Languages' },
    { id: 'frameworks', name: 'Frameworks' },
    { id: 'infrastructure', name: 'Infrastructure' }
  ]},
  { id: 'projects', name: 'cd ./projects', onhaver: "Projects", items: [
    { id: 'lalagrad', name: 'lalagrad' },
    { id: 'os101', name: 'os101' },
    { id: 'lala-agent', name: 'lala-agent' },
    { id: 'go-quick', name: 'go-quick' }
  ]},
  { id: 'experience', name: 'experience', items: []},
  { id: 'contact', name: 'contact', items: []},
]

function App() {
  const [sidebarOpen, setSidebarOpen] = useState(false)

  return (
    <BrowserRouter>
      <main className="flex flex-row bg-canvas h-screen overflow-hidden">
        <SideNavbar sections={sections} isOpen={sidebarOpen} onClose={() => setSidebarOpen(false)}/>
        
        {!sidebarOpen && <button className="lg:hidden fixed top-4 right-4 z-50 p-2 bg-black border border-border rounded" onClick={() => setSidebarOpen(true)} > ☰ </button>}

        <article className="flex-1 h-screen w-full overflow-y-auto lg:pl-0">
          <div className="max-w-3xl p-2 px-4">
            <Routes>
              <Route path="/" element={<Navigate to="/home" replace />} />
              <Route path="/home" element={<Hero />} />
              <Route path="/background" element={<Background />} />
              <Route path="/skills" element={<Skills />} />
              <Route path="/projects" element={<Projects />} />
              <Route path="/experience" element={<Experience />} />
              <Route path="/contact" element={<Contact />} />
            </Routes>
          </div>
        </article>
      </main>
    </BrowserRouter>
  )
}

export default App
