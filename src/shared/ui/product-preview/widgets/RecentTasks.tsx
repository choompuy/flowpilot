import { overviewData } from '../data/overview.data'
import { Card } from '../components/Card'
import { CheckCircle2, Clock3, Circle } from 'lucide-react'

export const RecentTasks = () => {
  return (
    <Card>
      <div className="flex justify-between">
        <span className="text-xs font-medium text-text-secondary">Recent Tasks</span>
        <span className="text-2xs text-text-muted">Priority</span>
      </div>

      <div className="flex flex-col gap-2 mt-auto divide-y divide-border text-2xs">
        {overviewData.tasks.map((item) => (
          <div key={item.title} className="flex items-center w-full pb-2 gap-2">
            {item.status === 'Completed' ? (
              <CheckCircle2 size={14} className="text-success" />
            ) : item.status === 'In progress' ? (
              <Clock3 size={14} className="text-warning" />
            ) : (
              <Circle size={14} className="text-text-muted" />
            )}
            <span className="text-text-primary">{item.title}</span>
            <span className={`ml-auto ${item.priority === 'High' ? 'text-error' : item.priority === 'Medium' ? 'text-warning' : 'text-success'}`}>
              {item.priority}
            </span>
          </div>
        ))}
      </div>
    </Card>
  )
}
