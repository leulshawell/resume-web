import { NavLink } from 'react-router-dom'
import { useState } from 'react'

export default function SideNavbar({ sections, isOpen, onClose }) {
  const [hoveredSection, setHoveredSection] = useState(null)

  return (
    <aside className={`w-56 h-screen border-r border-border bg-black flex flex-col shrink-0 overflow-y-auto 
      fixed left-0 top-0 z-40 transition-transform duration-300
      lg:relative lg:translate-x-0 lg:block
      ${isOpen ? 'translate-x-0' : '-translate-x-full'}`}>
      
      <button 
        className="lg:hidden absolute top-4 right-4 p-1 text-muted hover:text-text"
        onClick={onClose}
      >
        ✕
      </button>

      <div className="p-6">
        <h1 className="text-sm font-semibold text-heading mb-1">Leul Shawel Abayneh</h1>
        <p className="text-muted text-xs">Self taught Software Engineer</p>
      </div>
      
      <nav className="p-3 flex flex-col gap-4">
        {sections.map((section) => (
          <div 
            key={section.id} 
            className="rounded-lg text-sm"
            onMouseEnter={() => section.items.length > 0 && setHoveredSection(section.id)}
            onMouseLeave={() => setHoveredSection(null)}
          >
            {section.items ? (
              <>
                <span 
                  className={`transition-all duration-200 ${
                    hoveredSection === section.id ? 'pl-4 text-text' : 'text-muted'
                  }`}
                >
                  {hoveredSection===section.id? section.onhaver: section.name}
                </span>
                
                <div className="mt-2 text-sm bg-black/50 flex flex-col gap-1 border-l border-gray-800 pl-2">
                  {section.items.map((item) => (
                    <NavLink
                      key={item.id}
                      to={`/${section.id}#${item.id}`}
                      className="text-muted text-xs hover:text-text transition-colors"
                      onClick={onClose}
                    >
                      {item.name}
                    </NavLink>
                  ))}
                </div>
              </>
            ) : (
              <NavLink
                to={`${section.href}`}
                className={`transition-all duration-200 ${
                    hoveredSection === section.id ? 'pl-4 text-text' : 'text-muted'
                  }`}
                onClick={onClose}
                onMouseEnter={()=>setHoveredSection(section.id)}
              >
                {hoveredSection===section.id? section.onhaver: section.name}
              </NavLink>
            )}
          </div>
        ))}
      </nav>
    </aside>
  )
}
