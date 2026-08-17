import { Button } from '@/shared/ui/button'
import { Check } from 'lucide-react'

export const Pricing = () => {
  return (
    <section className="py-24 bg-background" id="pricing">
      <div className="container mx-auto px-6">
        <h2 className="text-5xl font-bold text-center mb-16 text-text-primary">Simple, transparent pricing</h2>
        <div className="grid md:grid-cols-3 gap-8 max-w-100 md:max-w-none mx-auto items-start">
          <div className="bg-surface border border-border rounded-2xl p-10 text-center shadow-sm transition-all duration-300 hover:-translate-y-2 hover:shadow-lg">
            <h3 className="text-2xl font-bold mb-4 text-text-primary">Starter</h3>
            <div className="text-5xl font-bold text-accent mb-6">
              $9<span className="text-base text-text-secondary font-normal">/month</span>
            </div>
            <ul className="text-left mb-8 space-y-2">
              <li className="flex items-center gap-2 py-2 text-text-secondary border-b border-border">
                <Check size={16} className="text-accent" /> 5 Projects
              </li>
              <li className="flex items-center gap-2 py-2 text-text-secondary border-b border-border">
                <Check size={16} className="text-accent" /> Basic AI
              </li>
              <li className="flex items-center gap-2 py-2 text-text-secondary">
                <Check size={16} className="text-accent" /> Personal Workspace
              </li>
            </ul>
            <Button variant="secondary" href="#starter">
              Get Started
            </Button>
          </div>
          <div className="bg-surface border-2 border-accent rounded-2xl p-10 text-center shadow-sm transition-all duration-300 hover:-translate-y-2 hover:shadow-lg scale-105">
            <div className="absolute -top-3 left-1/2 -translate-x-1/2 bg-card-brand text-white px-4 py-1 rounded-full text-xs font-semibold">
              MOST POPULAR
            </div>
            <h3 className="text-2xl font-bold mb-4 text-text-primary">Professional</h3>
            <div className="text-5xl font-bold text-accent mb-6">
              $19<span className="text-base text-text-secondary font-normal">/month</span>
            </div>
            <ul className="text-left mb-8 space-y-2">
              <li className="flex items-center py-2 gap-2 text-text-secondary border-b border-border">
                <Check size={16} className="text-accent" /> Unlimited Projects
              </li>
              <li className="flex items-center py-2 gap-2 text-text-secondary border-b border-border">
                <Check size={16} className="text-accent" /> Advanced AI
              </li>
              <li className="flex items-center py-2 gap-2 text-text-secondary border-b border-border">
                <Check size={16} className="text-accent" /> Analytics
              </li>
              <li className="flex items-center gap-2 py-2 text-text-secondary">
                <Check size={16} className="text-accent" /> Team Collaboration
              </li>
            </ul>
            <Button variant="primary" href="#professional">
              Get Started
            </Button>
          </div>
          <div className="bg-surface border border-border rounded-2xl p-10 text-center shadow-sm transition-all duration-300 hover:-translate-y-2 hover:shadow-lg">
            <h3 className="text-2xl font-bold mb-4 text-text-primary">Enterprise</h3>
            <div className="text-5xl font-bold text-accent mb-6">Custom</div>
            <ul className="text-left mb-8 space-y-2">
              <li className="flex items-center gap-2 py-2 text-text-secondary border-b border-border">
                <Check size={16} className="text-accent" /> Dedicated Support
              </li>
              <li className="flex items-center gap-2 py-2 text-text-secondary border-b border-border">
                <Check size={16} className="text-accent" /> Custom Solutions
              </li>
              <li className="flex items-center gap-2 py-2 text-text-secondary">
                <Check size={16} className="text-accent" /> Security
              </li>
            </ul>
            <Button variant="secondary" href="#enterprise">
              Contact Sales
            </Button>
          </div>
        </div>
      </div>
    </section>
  )
}
