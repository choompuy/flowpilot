import { LayoutDashboard, ListTodo, SquareKanban, Calendar, ChartLine, UsersRound, CheckCircle2, Clock3, ArrowUpRight } from "lucide-react"

const dashboardSidebar = [
  {
    title: 'Overview',
    icon: LayoutDashboard
  },
  {
    title: 'Tasks',
    icon: ListTodo
  },
  {
    title: 'Projects',
    icon: SquareKanban
  },
  {
    title: 'Calendar',
    icon: Calendar
  },
  {
    title: 'Analytics',
    icon: ChartLine
  },
  {
    title: 'Team',
    icon: UsersRound
  }
]

const dashboardData = {
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
  dashboardData.productivity.currentWeek.reduce((acc, item) => acc + item.value, 0) / dashboardData.productivity.currentWeek.length
)
const completedPercent = Math.round((dashboardData.overview.completedTasks / dashboardData.overview.totalTasks) * 100)

const dashboardStats = [
  {
    title: 'Total Tasks',
    icon: ListTodo,
    value: dashboardData.overview.totalTasks,
    change: 24,
    changeType: ' tasks'
  },

  {
    title: 'Completed',
    icon: CheckCircle2,
    value: dashboardData.overview.completedTasks,
    change: completedPercent,
    changeType: ' tasks'
  },

  {
    title: 'In Progress',
    icon: Clock3,
    value: `${dashboardData.overview.pendingTasks}`,
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

export { dashboardSidebar, dashboardData, dashboardStats }
