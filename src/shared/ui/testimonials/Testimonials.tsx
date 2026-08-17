import { Quote } from 'lucide-react'

export const Testimonials = () => {
  return (
    <section className="py-24" id="testimonials">
      <div className="container mx-auto px-6">
        <h2 className="text-5xl font-bold text-center mb-16 text-text-primary">What our users say</h2>
        <div className="grid md:grid-cols-3 gap-8">
          <div className="bg-surface border border-border rounded-2xl p-8 shadow transition-all duration-300 hover:-translate-y-1 hover:shadow-lg">
            <Quote size={24} className="text-accent mb-4" />
            <p className="text-lg text-text-primary mb-6 leading-relaxed italic">"FlowPilot helped our team save hours every week."</p>
            <div className="flex flex-col">
              <div className="font-bold text-text-primary">Sarah Johnson</div>
              <div className="text-sm text-text-muted">Product Designer</div>
            </div>
          </div>
          <div className="bg-surface border border-border rounded-2xl p-8 shadow transition-all duration-300 hover:-translate-y-1 hover:shadow-lg">
            <Quote size={24} className="text-accent mb-4" />
            <p className="text-lg text-text-primary mb-6 leading-relaxed italic">"The AI assistant changed how we manage tasks."</p>
            <div className="flex flex-col">
              <div className="font-bold text-text-primary">Michael Lee</div>
              <div className="text-sm text-text-muted">Startup Founder</div>
            </div>
          </div>
          <div className="bg-surface border border-border rounded-2xl p-8 shadow transition-all duration-300 hover:-translate-y-1 hover:shadow-lg">
            <Quote size={24} className="text-accent mb-4" />
            <p className="text-lg text-text-primary mb-6 leading-relaxed italic">"Simple, fast and powerful."</p>
            <div className="flex flex-col">
              <div className="font-bold text-text-primary">Emma Davis</div>
              <div className="text-sm text-text-muted">Project Manager</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
