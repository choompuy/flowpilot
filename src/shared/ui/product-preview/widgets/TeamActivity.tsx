import { overviewData } from '../data/overview.data'
import { Card } from '../components/Card'
import { User } from 'lucide-react'

export const TeamActivity = () => {
  return (
    <Card>
      <span className="text-xs font-medium text-text-secondary">Team Activity</span>

      <div className="flex flex-col gap-2 mt-auto">
        {overviewData.activity.map((item) => (
          <div key={item.title} className="flex items-center gap-2">
            <div className="p-2 rounded-full bg-accent-soft">
              <User size={14} className="text-accent" />
            </div>
            <div className="flex flex-col overflow-hidden">
              <p className="truncate text-xs">{item.title}</p>
              <span className="text-2xs text-text-muted">{item.time}</span>
            </div>
          </div>
        ))}
      </div>
    </Card>
  )
}
