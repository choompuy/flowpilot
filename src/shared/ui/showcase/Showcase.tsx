import { Button } from '@/shared/ui/button'
import { ProductPreview } from '@/shared/ui/product-preview'
import { CircleCheck } from 'lucide-react'

export const Showcase = () => {
  return (
    <section className="py-24 bg-surface overflow-hidden" id="showcase">
      <div className="container grid max-xs:grid-rows-[auto_calc(27.5rem*.55)] max-sm:grid-rows-[auto_calc(27.5rem*.75)] max-lg:grid-rows-[auto_27.5rem] lg:grid-cols-[9fr_10fr] items-center mx-auto gap-5 px-6">
        <div className="flex flex-col gap-5">
          <p className="text-lg text-accent uppercase font-medium">Productivity, Simplified</p>
          <h2 className="text-5xl font-semibold text-text-primary leading-tight">Everything you need in one place</h2>
          <p className="text-lg text-text-secondary leading-relaxed">
            FlowPilot brings together tasks, projects, team collaboration, and analytics in a single, beautiful interface.
          </p>

          <ul className="flex flex-col gap-2">
            <li className="flex items-center gap-3 text-text-primary">
              <CircleCheck size={24} fill="var(--color-accent-soft)" stroke="var(--color-accent)" /> Intuitive task management
            </li>
            <li className="flex items-center gap-3 text-text-primary">
              <CircleCheck size={24} fill="var(--color-accent-soft)" stroke="var(--color-accent)" /> Real-time team collaboration
            </li>
            <li className="flex items-center gap-3 text-text-primary">
              <CircleCheck size={24} fill="var(--color-accent-soft)" stroke="var(--color-accent)" /> Advanced analytics dashboard
            </li>
            <li className="flex items-center gap-3 text-text-primary">
              <CircleCheck size={24} fill="var(--color-accent-soft)" stroke="var(--color-accent)" /> Smart notifications
            </li>
          </ul>

          <div>
            <Button variant="secondary" href="#explore" className="rounded-full!">
              Explore All Features
            </Button>
          </div>
        </div>

        <div className="relative size-full">
          <div className="absolute inset-0 origin-top-left scale-55 xs:scale-75 sm:scale-100">
            <ProductPreview page="tasks" className='w-180! h-110!' noSidebar />
          </div>
        </div>
      </div>
    </section>
  )
}
