import { dashboardData, dashboardSidebar, dashboardStats } from './dashboard.data'
import { ProductivityChart } from './ProductivityChart'
import { Logo } from '@/shared/ui/logo'
import { Button } from '@/shared/ui/button'
import { Sparkles, Search, Bell, User, Astroid, Plus, CheckCircle2, Clock3, Circle } from 'lucide-react'

export const Dashboard = () => {
  return (
    <div className="flex w-200 h-140 bg-background border border-border rounded-xl sm:rounded-2xl shadow-xl overflow-hidden ">
      {/* Sidebar */}
      <aside className="flex w-36 shrink-0 flex-col p-3 gap-4 bg-surface border-r border-border">
        <Logo size="small" />

        <nav className="flex flex-col gap-1 text-xs">
          {dashboardSidebar.map((item, index) => (
            <button
              key={item.title}
              className={`flex items-center gap-2 px-3 py-2 rounded-lg transition hover:bg-accent-soft ${index === 0 ? 'bg-accent-soft text-accent' : 'text-text-secondary'}`}
            >
              {<item.icon size={14} />}
              {item.title}
            </button>
          ))}
        </nav>

        <div className="mt-auto rounded-xl bg-accent-soft p-3">
          <Sparkles size={16} className="text-accent" />
          <p className="mt-2 text-xs font-semibold">Upgrade to Pro</p>
          <p className="text-2xs text-text-muted mt-1">Unlock AI features</p>
          <Button variant="primary" size="small" className="w-full mt-3 text-2xs">
            Upgrade
          </Button>
        </div>
      </aside>

      <main className="flex-1 p-4 overflow-hidden">
        {/* Header */}
        <header className="flex justify-between items-center gap-4">
          <div>
            <h2 className="text-sm font-bold">Overview</h2>
            <p className="text-2xs text-text-muted">Welcome back, Alex 👋</p>
          </div>

          <div className="flex items-center gap-2">
            <div className="flex items-center h-8 gap-2 pl-3 pr-8 rounded-lg bg-surface-elevated text-text-muted text-2xs">
              <Search size={14} />
              <span>Search projects...</span>
            </div>

            <div className="flex justify-center items-center size-8 rounded-lg bg-surface-elevated">
              <Bell size={14} />
            </div>

            <div className="flex justify-center items-center size-8 rounded-full bg-brand text-white">
              <User size={14} />
            </div>
          </div>
        </header>

        {/* Stats */}
        <div className="grid grid-cols-4 gap-2 mt-4">
          {dashboardStats.map((stat) => (
            <div key={stat.title} className="flex flex-col p-3 gap-3 rounded-xl bg-surface border border-border">
              <div className="flex justify-between gap-2">
                <span className="text-2xs text-text-muted">{stat.title}</span>
                <div className="flex justify-center items-center size-6 rounded-md bg-accent-soft">
                  <stat.icon size={14} className="text-accent" />
                </div>
              </div>

              <div className="mt-auto flex flex-col">
                <div className="font-semibold">{stat.value}</div>
                <span className="flex gap-1 text-2xs text-text-muted">
                  From last week
                  <span className="ml-auto">
                    <span className={`${stat.change >= 0 ? 'text-success' : 'text-error'}`}>
                      {stat.change >= 0 ? '+' : ''}
                      {stat.change}
                    </span>
                    {stat.changeType}
                  </span>
                </span>
              </div>
            </div>
          ))}
        </div>

        {/* Chart + AI */}
        <div className="grid grid-cols-[1fr_40%] gap-2 mt-2">
          <div className="flex flex-col gap-3 p-3 rounded-xl bg-surface border border-border">
            <div className="flex justify-between text-xs">
              <span className="font-medium">Project Progress</span>
              <span className="inline-flex gap-1 text-2xs text-text-muted">
                <span className={`${dashboardData.productivity.change >= 0 ? 'text-success' : 'text-error'}`}>
                  {dashboardData.productivity.change >= 0 ? '+' : ''}
                  {dashboardData.productivity.change}%
                </span>
                this week
              </span>
            </div>

            <div className="max-h-42 h-fit mt-auto text-accent">
              <ProductivityChart
                data={dashboardData.productivity.currentWeek}
                graphColor="var(--color-accent)"
                textColor="var(--color-text-secondary)"
              />
            </div>
          </div>

          <div className="flex flex-col gap-3 p-3 rounded-xl bg-surface border border-border">
            <div className="flex justify-between text-xs font-semibold">
              AI Assistant
              <Sparkles size={14} className="text-accent" />
            </div>

            <div className="flex flex-col gap-2">
              {dashboardData.ai.suggestions.map((item) => (
                <div key={item} className="flex gap-2 items-center p-2 rounded-lg text-2xs bg-surface-elevated">
                  <Astroid size={14} className="text-accent" />
                  {item}
                </div>
              ))}
            </div>

            <div className="flex items-center mt-auto px-2 py-1.5 gap-2 rounded-lg bg-surface-elevated text-2xs text-text-muted">
              Ask anything...
              <Plus size={14} className="ml-auto text-accent" />
            </div>
          </div>

          <div className="flex flex-col gap-3 p-3 bg-surface border border-border rounded-xl">
            <div className="flex justify-between">
              <span className="text-xs font-medium">Recent Tasks</span>
              <span className="text-2xs text-text-muted">Priority</span>
            </div>

            <div className="flex flex-col gap-2 mt-auto divide-y divide-border text-2xs">
              {dashboardData.tasks.map((item) => (
                <div key={item.title} className="flex items-center w-full pb-2 gap-2">
                  <span className="text-text-muted">
                    {item.status === 'Completed' ? (
                      <CheckCircle2 size={14} />
                    ) : item.status === 'In progress' ? (
                      <Clock3 size={14} />
                    ) : (
                      <Circle size={14} />
                    )}
                  </span>
                  <span className="text-text-primary">{item.title}</span>
                  <span
                    className={`ml-auto ${item.priority === 'High' ? 'text-error' : item.priority === 'Medium' ? 'text-warning' : 'text-success'}`}
                  >
                    {item.priority}
                  </span>
                </div>
              ))}
            </div>
          </div>

          <div className="flex flex-col gap-3 p-3 rounded-xl bg-surface border border-border">
            <span className="text-xs font-medium">Team Activity</span>

            <div className="flex flex-col gap-2 mt-auto">
              {dashboardData.activity.map((item) => (
                <div key={item.title} className="flex items-center gap-2">
                  <div className="p-2 rounded-full bg-accent-soft">
                    <User size={14} className="text-accent" />
                  </div>
                  <div className="flex flex-col overflow-hidden">
                    <p className="text-xs text-ellipsis text-nowrap overflow-hidden">{item.title}</p>
                    <span className="text-2xs text-text-muted">{item.time}</span>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </main>
    </div>
  )
}
