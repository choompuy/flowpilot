export const Trusted = () => {
  return (
    <section className="py-16 bg-surface border-t border-b border-border" id="trusted">
      <div className="container mx-auto px-6">
        <p className="text-center text-sm text-text-secondary mb-8 font-medium">Trusted by teams worldwide</p>
        <div className="flex justify-center gap-12 flex-wrap">
          <div className="text-2xl font-bold text-text-secondary transition-all duration-300 hover:text-accent">Nova</div>
          <div className="text-2xl font-bold text-text-secondary transition-all duration-300 hover:text-accent">Vertex</div>
          <div className="text-2xl font-bold text-text-secondary transition-all duration-300 hover:text-accent">Orbit</div>
          <div className="text-2xl font-bold text-text-secondary transition-all duration-300 hover:text-accent">Pulse</div>
          <div className="text-2xl font-bold text-text-secondary transition-all duration-300 hover:text-accent">Cloudly</div>
        </div>
      </div>
    </section>
  )
}
