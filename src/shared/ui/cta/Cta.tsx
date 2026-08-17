import { Button } from '@/shared/ui/button'

export const Cta = () => {
  return (
    <section className="py-24 bg-card-brand" id="cta">
      <div className="container mx-auto px-6 text-center">
        <h2 className="text-5xl font-bold mb-8 text-white">Ready to improve your productivity?</h2>
        <Button variant="secondary" size="large" href="#trial">
          Start Free Trial
        </Button>
      </div>
    </section>
  )
}
