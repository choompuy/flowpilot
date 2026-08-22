import { Sparkles, Users, BarChart3, ArrowRight } from 'lucide-react'

export const Features = () => {
  const features = [
    {
      title: 'AI Assistant',
      description: 'Get intelligent suggestions and automate repetitive tasks.',
      icon: Sparkles
    },
    {
      title: 'Team Collaboration',
      description: 'Keep your team synchronized and improve communication.',
      icon: Users
    },
    {
      title: 'Analytics',
      description: 'Track productivity and understand your workflow.',
      icon: BarChart3
    }
  ]

  return (
    <section className="py-24" id="features">
      <div className="container mx-auto px-6">
        <h2 className="text-5xl font-bold text-center text-text-primary">Everything you need to work smarter</h2>
        <div className="grid md:grid-cols-3 mt-16 gap-8">
          {features.map(({ title, description, icon: Icon }) => (
            <div
              key={title}
              className="flex flex-col p-8 gap-5 bg-surface border border-border rounded-2xl text-left shadow-sm transition-all duration-300 hover:-translate-y-1.5 hover:shadow-md"
            >
              <div className="w-12 h-12 rounded-xl bg-accent-soft flex items-center justify-center">
                <Icon size={24} className="text-accent" />
              </div>

              <div>
                <h3 className="text-2xl font-semibold text-text-primary">{title}</h3>
                <p className="text-base text-text-muted leading-relaxed">{description}</p>
              </div>

              <button
                type="button"
                className="inline-flex items-center mt-auto gap-2 text-sm font-semibold text-accent group transition-colors duration-300 hover:text-accent-hover"
              >
                Learn more
                <ArrowRight size={16} className="transition-transform duration-200 group-hover:translate-x-1.5" />
              </button>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
