import { Sparkles, Users, BarChart3 } from 'lucide-react'

export const Features = () => {
  return (
    <section className="py-24" id="features">
      <div className="container mx-auto px-6">
        <h2 className="text-5xl font-bold text-center mb-16 text-text-primary">Everything you need to work smarter</h2>
        <div className="grid md:grid-cols-3 gap-8">
          <div className="bg-surface border border-border rounded-2xl p-8 text-center shadow-sm transition-all duration-300 hover:-translate-y-2 hover:shadow-lg">
            <div className="text-5xl mb-6 flex justify-center">
              <Sparkles size={48} className="text-accent" />
            </div>
            <h3 className="text-2xl font-bold mb-4 text-text-primary">AI Assistant</h3>
            <p className="text-base text-text-muted leading-relaxed">Get intelligent suggestions and automate repetitive tasks.</p>
          </div>
          <div className="bg-surface border border-border rounded-2xl p-8 text-center shadow-sm transition-all duration-300 hover:-translate-y-2 hover:shadow-lg">
            <div className="text-5xl mb-6 flex justify-center">
              <Users size={48} className="text-accent" />
            </div>
            <h3 className="text-2xl font-bold mb-4 text-text-primary">Team Collaboration</h3>
            <p className="text-base text-text-muted leading-relaxed">Keep your team synchronized and improve communication.</p>
          </div>
          <div className="bg-surface border border-border rounded-2xl p-8 text-center shadow-sm transition-all duration-300 hover:-translate-y-2 hover:shadow-lg">
            <div className="text-5xl mb-6 flex justify-center">
              <BarChart3 size={48} className="text-accent" />
            </div>
            <h3 className="text-2xl font-bold mb-4 text-text-primary">Analytics</h3>
            <p className="text-base text-text-muted leading-relaxed">Track productivity and understand your workflow.</p>
          </div>
        </div>
      </div>
    </section>
  )
}
