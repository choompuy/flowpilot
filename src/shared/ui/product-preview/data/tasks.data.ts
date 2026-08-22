import { List, Kanban, GanttChart, Calendar } from 'lucide-react'

export type TaskStatus = 'Completed' | 'In Progress' | 'To Do' | 'Blocked'
export type TaskPriority = 'High' | 'Medium' | 'Low'

export interface Task {
  id: string
  title: string
  status: TaskStatus
  priority: TaskPriority
  deadline: string
  comments?: number
}

export interface TaskGroup {
  project: string
  tasks: Task[]
}

export interface UpcomingDeadline {
  id: string
  title: string
  project: string
  date: string
  priority: TaskPriority
}

export const taskTabs = [
  { label: 'List', icon: List },
  { label: 'Board', icon: Kanban },
  { label: 'Timeline', icon: GanttChart },
  { label: 'Calendar', icon: Calendar }
]

export const tasksGroups: TaskGroup[] = [
  {
    project: 'Website Redesign',
    tasks: [
      { id: 'wr-1', title: 'Create landing page', status: 'In Progress', priority: 'High', deadline: 'May 28' },
      { id: 'wr-2', title: 'Update design system', status: 'To Do', priority: 'Medium', deadline: 'Jun 02' },
      { id: 'wr-3', title: 'Implement new navigation', status: 'To Do', priority: 'Medium', deadline: 'Jun 04' },
      { id: 'wr-4', title: 'Optimize images and assets', status: 'To Do', priority: 'Low', deadline: 'Jun 05' },
      { id: 'wr-5', title: 'Create responsive layouts', status: 'To Do', priority: 'High', deadline: 'Jun 07' }
    ]
  },
  {
    project: 'Mobile App Development',
    tasks: [
      { id: 'ma-1', title: 'Setup project architecture', status: 'Completed', priority: 'High', deadline: 'May 20' },
      { id: 'ma-2', title: 'Implement authentication', status: 'In Progress', priority: 'High', deadline: 'May 30' },
      { id: 'ma-3', title: 'Design onboarding flow', status: 'To Do', priority: 'Medium', deadline: 'Jun 01' },
      { id: 'ma-4', title: 'Develop core features', status: 'To Do', priority: 'Medium', deadline: 'Jun 08' },
      { id: 'ma-5', title: 'Testing and bug fixes', status: 'To Do', priority: 'Low', deadline: 'Jun 10' }
    ]
  },
  {
    project: 'Marketing Campaign',
    tasks: [
      { id: 'mc-1', title: 'Draft social media plan', status: 'In Progress', priority: 'Medium', deadline: 'Jun 03' },
      { id: 'mc-2', title: 'Create email sequence', status: 'To Do', priority: 'Medium', deadline: 'Jun 06' },
      { id: 'mc-3', title: 'Design campaign banners', status: 'Blocked', priority: 'High', deadline: 'Jun 09' }
    ]
  },
  {
    project: 'Product Launch',
    tasks: [
      { id: 'pl-1', title: 'Finalize pricing tiers', status: 'To Do', priority: 'High', deadline: 'Jun 11' },
      { id: 'pl-2', title: 'Prepare press kit', status: 'To Do', priority: 'Medium', deadline: 'Jun 12' },
      { id: 'pl-3', title: 'Set up analytics tracking', status: 'Completed', priority: 'Low', deadline: 'May 22' },
      { id: 'pl-4', title: 'Plan launch event', status: 'To Do', priority: 'High', deadline: 'Jun 15' }
    ]
  }
]

export const tasksData: Task[] = tasksGroups.flatMap((group) => group.tasks)

export const upcomingDeadlines: UpcomingDeadline[] = [
  { id: 'ud-1', title: 'Create landing page', project: 'Website Redesign', date: 'May 28', priority: 'High' },
  { id: 'ud-2', title: 'Implement authentication', project: 'Mobile App', date: 'May 30', priority: 'High' },
  { id: 'ud-3', title: 'Design onboarding flow', project: 'Mobile App', date: 'Jun 01', priority: 'Medium' },
  { id: 'ud-4', title: 'Update design system', project: 'Website Redesign', date: 'Jun 02', priority: 'Medium' },
  { id: 'ud-5', title: 'Develop core features', project: 'Mobile App', date: 'Jun 08', priority: 'Medium' }
]
