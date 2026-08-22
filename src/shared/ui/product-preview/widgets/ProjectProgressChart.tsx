import { overviewData } from '../data/overview.data'
import { ProductivityChart } from './ProductivityChart'
import { Card } from '../components/Card'

export const ProjectProgressChart = () => {
  return (
    <Card>
      <div className="flex justify-between text-xs">
        <span className="font-medium text-text-secondary">Project Progress</span>
        <span className="inline-flex gap-1 text-2xs text-text-muted">
          <span className={`${overviewData.productivity.change >= 0 ? 'text-success' : 'text-error'}`}>
            {overviewData.productivity.change >= 0 ? '+' : ''}
            {overviewData.productivity.change}%
          </span>
          this week
        </span>
      </div>

      <div className="max-h-42 h-fit mt-auto text-accent">
        <ProductivityChart data={overviewData.productivity.currentWeek} graphColor="var(--color-accent)" textColor="var(--color-text-secondary)" />
      </div>
    </Card>
  )
}
