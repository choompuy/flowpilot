import { statsCards } from '../data/overview.data'
import { Card } from '../components/Card'

export const StatsCards = () => {
  return (
    <div className="grid grid-cols-4 gap-2">
      {statsCards.map((stat) => (
        <Card key={stat.title}>
          <div className="flex justify-between gap-2">
            <span className="text-2xs font-medium text-text-secondary">{stat.title}</span>
            <div className="flex justify-center items-center size-6 rounded-md bg-accent-soft">
              <stat.icon size={14} className="text-accent" />
            </div>
          </div>

          <div className="mt-auto flex flex-col">
            <div className="font-semibold">{stat.value}</div>
            <span className="flex gap-1 text-2xs text-text-muted">
              This week
              <span className="ml-auto">
                <span className={`${stat.change >= 0 ? 'text-success' : 'text-error'}`}>
                  {stat.change >= 0 ? '+' : ''}
                  {stat.change}
                </span>
                {stat.changeType}
              </span>
            </span>
          </div>
        </Card>
      ))}
    </div>
  )
}
