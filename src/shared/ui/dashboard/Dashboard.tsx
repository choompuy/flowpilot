import { Bell, User } from 'lucide-react'

export const Dashboard = () => {
  return (
    <div className="bg-background rounded-2xl shadow-lg border border-border overflow-hidden w-full max-w-150 h-112.5 opacity-0 translate-x-5 animate-[fadeInRight_0.8s_ease_0.3s_forwards] mx-auto">
      <div className="flex justify-between items-center px-4 py-3 border-b border-border bg-surface-elevated ">
        <span className="font-bold text-accent text-sm">FlowPilot</span>
        <div className="flex gap-2 items-center">
          <Bell size={16} className="text-text-muted" />
          <div className="w-7 h-7 rounded-full bg-accent flex items-center justify-center text-white">
            <User size={12} />
          </div>
        </div>
      </div>
      <div className="flex h-[calc(100%-52px)]">
        <ul className="flex flex-col gap-1 w-25 bg-surface-elevated border-r border-border p-3 shrink-0 text-xs">
          <li className="inline-flex py-1 px-2 rounded-lg cursor-pointer transition-colors duration-300 bg-accent-soft text-accent">Home</li>
          <li className="inline-flex py-1 px-2 rounded-lg cursor-pointer transition-colors duration-300 text-text-primary hover:bg-accent-soft">
            Tasks
          </li>
          <li className="inline-flex py-1 px-2 rounded-lg cursor-pointer transition-colors duration-300 text-text-primary hover:bg-accent-soft">
            AI
          </li>
        </ul>
        <div className="flex-1 p-4 overflow-y-auto">
          <div className="grid grid-cols-3 gap-3 mb-4">
            <div className="bg-surface-elevated border border-border rounded-lg p-3 text-center ">
              <div className="text-2xl font-bold text-accent mb-1">78%</div>
              <div className="text-[10px] text-text-muted mb-1">Productivity</div>
              <div className="text-[8px] text-text-muted opacity-70">+12% this week</div>
            </div>
            <div className="bg-surface-elevated border border-border rounded-lg p-3 text-center ">
              <div className="text-2xl font-bold text-accent mb-1">24</div>
              <div className="text-[10px] text-text-muted mb-1">Completed</div>
              <div className="text-[8px] text-text-muted opacity-70">Today</div>
            </div>
            <div className="bg-surface-elevated border border-border rounded-lg p-3 text-center ">
              <div className="text-2xl font-bold text-accent mb-1">8</div>
              <div className="text-[10px] text-text-muted mb-1">AI Suggestions</div>
              <div className="text-[8px] text-text-muted opacity-70">Available</div>
            </div>
          </div>

          <div className="bg-surface-elevated border border-border rounded-lg p-3 mb-4 ">
            <div className="text-xs font-semibold mb-3 text-text-primary">Weekly Productivity</div>
            <div className="flex flex-col gap-2">
              <div className="flex items-end justify-between h-20 gap-1">
                <div className="flex-1 bg-card-brand rounded-t min-h-3.75" style={{ height: '45%' }}></div>
                <div className="flex-1 bg-card-brand rounded-t min-h-3.75" style={{ height: '52%' }}></div>
                <div className="flex-1 bg-card-brand rounded-t min-h-3.75" style={{ height: '61%' }}></div>
                <div className="flex-1 bg-card-brand rounded-t min-h-3.75" style={{ height: '58%' }}></div>
                <div className="flex-1 bg-card-brand rounded-t min-h-3.75" style={{ height: '72%' }}></div>
                <div className="flex-1 bg-card-brand rounded-t min-h-3.75" style={{ height: '68%' }}></div>
                <div className="flex-1 bg-card-brand rounded-t min-h-3.75 opacity-100" style={{ height: '78%' }}></div>
              </div>
              <div className="flex justify-between text-[10px] text-text-muted">
                <span>Mon</span>
                <span>Tue</span>
                <span>Wed</span>
                <span>Thu</span>
                <span>Fri</span>
                <span>Sat</span>
                <span>Sun</span>
              </div>
            </div>
          </div>

          <div className="bg-surface-elevated border border-border rounded-lg p-3 ">
            <div className="text-xs font-semibold mb-2 text-text-primary">Recent Activity</div>
            <div className="flex items-center gap-2 py-1 border-b border-border">
              <div className="w-1.5 h-1.5 rounded-full bg-accent"></div>
              <div className="flex-1 text-[10px] text-text-primary truncate">Completed landing page design</div>
              <div className="text-[8px] text-text-muted shrink-0">2m ago</div>
            </div>
            <div className="flex items-center gap-2 py-1 border-b border-border">
              <div className="w-1.5 h-1.5 rounded-full bg-accent"></div>
              <div className="flex-1 text-[10px] text-text-primary truncate">AI created task summary</div>
              <div className="text-[8px] text-text-muted shrink-0">15m ago</div>
            </div>
            <div className="flex items-center gap-2 py-1">
              <div className="w-1.5 h-1.5 rounded-full bg-accent"></div>
              <div className="flex-1 text-[10px] text-text-primary truncate">Team meeting scheduled</div>
              <div className="text-[8px] text-text-muted shrink-0">1h ago</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
