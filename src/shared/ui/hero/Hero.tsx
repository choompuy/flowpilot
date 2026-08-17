import { Button } from '@/shared/ui/button'
import { Dashboard } from '@/shared/ui/dashboard'
import { Sparkles } from 'lucide-react'

export const Hero = () => {
  return (
    <section className="py-20 min-h-[calc(100vh-72px)] flex items-center" id="hero">
      <div className="container mx-auto px-6 grid md:grid-cols-2 gap-16 items-center">
        <div className="opacity-0 translate-y-5 animate-[fadeInUp_0.8s_ease_forwards]">
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-accent-soft text-accent rounded-full text-sm font-semibold mb-6">
            <Sparkles size={16} />
            AI-powered productivity
          </div>
          <h1 className="text-5xl md:text-[64px] leading-[1.05] font-bold mb-6 text-text-primary">Manage your workflow with AI-powered automation</h1>
          <p className="mb-6 text-lg text-text-muted">
            FlowPilot helps teams organize tasks, automate repetitive work and improve productivity with intelligent AI tools.
          </p>
          <div className="flex gap-4 flex-col sm:flex-row">
            <Button variant="primary" size="large" href="#trial">
              Start Free Trial
            </Button>
            <Button variant="secondary" size="large" href="#demo">
              Watch Demo
            </Button>
          </div>
        </div>

        <Dashboard />
      </div>
    </section>
  )
}
