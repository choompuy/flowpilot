import { Sidebar } from './components/Sidebar'
import { Overview } from './pages/Overview'
import { Tasks } from './pages/Tasks'

export type PageType = 'overview' | 'tasks'

interface ProductPreviewProps {
  page: PageType
  className?: string
  noSidebar?: boolean
}

export const ProductPreview = ({ page, className, noSidebar }: ProductPreviewProps) => {
  return (
    <div
      className={['flex w-200 h-140 bg-background border border-border rounded-xl sm:rounded-2xl shadow-xl overflow-hidden', className]
        .filter(Boolean)
        .join(' ')}
    >
      {!noSidebar && <Sidebar activeItem={page} />}

      <main className="flex-1 p-3 overflow-hidden">
        {page === 'overview' && <Overview />}
        {page === 'tasks' && <Tasks />}
      </main>
    </div>
  )
}
