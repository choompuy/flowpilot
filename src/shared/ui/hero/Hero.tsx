import { Button } from '@/shared/ui/button'
import { ProductPreview } from '@/shared/ui/product-preview'
import { Sparkles } from 'lucide-react'

export const Hero = () => {
  return (
    <section className="flex items-center min-h-min h-[calc(100vh-4.5rem)] max-h-260 py-20 overflow-hidden" id="hero">
      <div className="container grid max-xs:grid-rows-[auto_calc(35rem*.55)] max-sm:grid-rows-[auto_calc(35rem*.75)] max-lg:grid-rows-[auto_35rem] lg:grid-cols-[9fr_10fr] items-center mx-auto gap-5 px-6">
        <div className="flex flex-col gap-5 z-10 opacity-0 animate-[fadeInUp_0.8s_ease_forwards]">
          <div className="inline-flex items-center w-fit px-4 py-2 gap-2 rounded-full bg-accent-soft text-accent text-sm font-semibold">
            <Sparkles size={16} />
            AI-powered productivity
          </div>
          <h1 className="text-4xl md:text-5xl leading-[1.05] font-bold text-text-primary">Manage your workflow with AI-powered automation</h1>
          <p className="text-lg text-text-muted">
            FlowPilot helps teams organize tasks, automate repetitive work and improve productivity with intelligent AI tools.
          </p>
          <div className="flex flex-col xs:flex-row gap-4">
            <Button variant="primary" size="large" href="#trial">
              Start Free Trial
            </Button>
            <Button variant="secondary" size="large" href="#demo">
              Watch Demo
            </Button>
          </div>
        </div>

        <div className="relative size-full">
          <div className="absolute inset-0 origin-top-left scale-55 xs:scale-75 sm:scale-100">
            <ProductPreview page="overview" />
          </div>
        </div>
      </div>
    </section>
  )
}
