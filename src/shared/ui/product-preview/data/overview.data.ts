import { LayoutDashboard, ListTodo, Inbox, ChartLine, Sparkles, CheckCircle2, Clock3, ArrowUpRight } from 'lucide-react'

export const sidebarItems = [
  {
    title: 'Overview',
    icon: LayoutDashboard
  },
  {
    title: 'Tasks',
    icon: ListTodo
  },
  {
    title: 'Inbox',
    icon: Inbox,
    notify: 5
  },
  {
    title: 'Analytics',
    icon: ChartLine
  },
  {
    title: 'AI assistant',
    icon: Sparkles
  }
]

export const overviewData = {
  overview: {
    totalTasks: 248,
    completedTasks: 186,
    activeTasks: 42,
    pendingTasks: 20
  },

  productivity: {
    currentWeek: [
      { label: 'Mon', value: 72 },
      { label: 'Tue', value: 81 },
      { label: 'Wed', value: 76 },
      { label: 'Thu', value: 89 },
      { label: 'Fri', value: 96 },
      { label: 'Sat', value: 84 },
      { label: 'Sun', value: 91 }
    ],
    change: 12
  },

  ai: {
    suggestions: ['Optimize your daily workflow', '3 tasks can be automated', 'Review unfinished projects'],
    count: 14
  },

  tasks: [
    {
      title: 'Design system implementation',
      status: 'Completed',
      priority: 'High'
    },
    {
      title: 'API integration',
      status: 'In progress',
      priority: 'Medium'
    },
    {
      title: 'User testing',
      status: 'Planning',
      priority: 'Low'
    }
  ],

  activity: [
    {
      title: 'AI generated weekly productivity report',
      time: '2m ago'
    },
    {
      title: 'Completed Design System milestone',
      time: '15m ago'
    },
    {
      title: 'Team created new project',
      time: '1h ago'
    }
  ]
}

const currentProductivity = Math.round(
  overviewData.productivity.currentWeek.reduce((acc, item) => acc + item.value, 0) / overviewData.productivity.currentWeek.length
)
const completedPercent = Math.round((overviewData.overview.completedTasks / overviewData.overview.totalTasks) * 100)

export const statsCards = [
  {
    title: 'Total Tasks',
    icon: ListTodo,
    value: overviewData.overview.totalTasks,
    change: 24,
    changeType: ' tasks'
  },

  {
    title: 'Completed',
    icon: CheckCircle2,
    value: overviewData.overview.completedTasks,
    change: completedPercent,
    changeType: ' tasks'
  },

  {
    title: 'In Progress',
    icon: Clock3,
    value: `${overviewData.overview.pendingTasks}`,
    change: 32,
    changeType: ' tasks'
  },

  {
    title: 'Productivity',
    icon: ArrowUpRight,
    value: `${currentProductivity}%`,
    change: -3,
    changeType: ' %'
  }
]
