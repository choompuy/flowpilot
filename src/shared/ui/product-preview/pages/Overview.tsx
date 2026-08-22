import { StatsCards } from '../widgets/StatsCards'
import { ProjectProgressChart } from '../widgets/ProjectProgressChart'
import { AIAssistant } from '../widgets/AIAssistant'
import { RecentTasks } from '../widgets/RecentTasks'
import { TeamActivity } from '../widgets/TeamActivity'

export const Overview = () => {
  return (
    <div className="flex flex-col gap-2">
      <div>
        <h2 className="text-sm font-bold">Overview</h2>
        <p className="text-2xs text-text-muted">Welcome back, Alex 👋</p>
      </div>

      <StatsCards />

      <div className="grid grid-cols-[1fr_40%] gap-2">
        <ProjectProgressChart />
        <AIAssistant />
        <RecentTasks />
        <TeamActivity />
      </div>
    </div>
  )
}
