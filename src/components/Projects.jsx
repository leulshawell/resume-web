const projects = [
  {
    name: 'lalagrad',
    id: 'lalagrad',
    desc: 'Compiler infrastructure focusing on LLVM-based optimizations and code generation for educational purposes.',
    tech: ['Rust', 'LLVM'],
    link: '#'
  },
  {
    name: 'os101',
    id: 'os101',
    desc: 'Minimal operating system from scratch with kernel, memory management, and scheduling.',
    tech: ['C', 'Assembly'],
    link: '#'
  },
  {
    name: 'lala-agent',
    id: 'lala-agent',
    desc: 'Autonomous agent framework for orchestrating complex tasks with LLM tool-use capabilities.',
    tech: ['Go', 'Python'],
    link: '#'
  },
  {
    name: 'go-quick',
    id: 'go-quick',
    desc: 'High-performance Go utility library for common programming patterns.',
    tech: ['Go'],
    link: '#'
  }
]

export default function Projects() {
  return (
    <section id="projects">
      <h2 className="text-2xl font-bold text-heading border-b border-border pb-4 mb-8">Projects</h2>
      
      <div className="space-y-4">
        {projects.map((project) => (
          <div key={project.name} id={project.id} className="border border-border rounded-lg p-5 bg-sidebar">
            <div className="flex items-start justify-between mb-2">
              <h3 className="text-lg font-semibold text-link">
                <a href={project.link} className="hover:underline">{project.name}</a>
              </h3>
            </div>
            <p className="text-muted mb-3 text-sm">{project.desc}</p>
            <div className="flex gap-2">
              {project.tech.map((t) => (
                <code key={t} className="px-2 py-0.5 text-xs bg-code-bg text-code-text rounded font-mono">
                  {t}
                </code>
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  )
}
