const links = [
  { name: 'email', value: 'leul@example.com', href: 'mailto:leul@example.com' },
  { name: 'github', value: 'github.com/leul', href: '#' },
  { name: 'linkedin', value: 'linkedin.com/in/leul', href: '#' }
]

export default function Contact() {
  return (
    <section id="contact">
      <h2 className="text-2xl font-bold text-heading border-b border-border pb-4 mb-8">Contact</h2>
      
      <div className="border border-border rounded-lg p-5 bg-sidebar">
        <p className="text-muted mb-4 text-sm">
          Open to discussing new projects, opportunities, or partnerships.
        </p>
        
        <div className="space-y-2">
          {links.map((link) => (
            <a 
              key={link.name}
              href={link.href}
              className="flex items-center gap-3 text-sm group"
            >
              <span className="text-muted w-20">{link.name}</span>
              <span className="text-link group-hover:underline">{link.value}</span>
            </a>
          ))}
        </div>
      </div>
    </section>
  )
}
