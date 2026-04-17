export default function Hero() {
  return (
    <section id="hero">
      <h1 className="text-4xl font-bold text-heading mb-6">Leul</h1>
      
      <p className="text-lg text-muted mb-8 leading-relaxed">
        Software developer focused on systems programming, compilers, and developer tools. 
        Building fast, reliable software that developers love to use.
      </p>
      
      <div className="flex gap-4 text-sm">
        <a href="#projects" className="text-link hover:underline">View Projects →</a>
        <a href="#contact" className="text-muted hover:text-text">Get in Touch</a>
      </div>
    </section>
  )
}
