import { useState } from 'react'
import { tasksData, taskTabs, tasksGroups, upcomingDeadlines } from '../data/tasks.data'
import type { TaskStatus, TaskPriority } from '../data/tasks.data'
import { Card } from '../components/Card'
import { Button } from '../../button'
import {
  CheckCircle2,
  Clock3,
  Circle,
  AlertCircle,
  Plus,
  Search,
  MoreHorizontal,
  Filter,
  ChevronDown,
  Calendar,
  ArrowUp,
  ArrowDown,
  Minus
} from 'lucide-react'

const priorityConfig: Record<TaskPriority, { icon: typeof ArrowUp; className: string }> = {
  High: { icon: ArrowUp, className: 'text-error bg-error/10' },
  Medium: { icon: Minus, className: 'text-warning bg-warning/10' },
  Low: { icon: ArrowDown, className: 'text-success bg-success/10' }
}

const priorityDot: Record<TaskPriority, string> = {
  High: 'bg-error',
  Medium: 'bg-warning',
  Low: 'bg-success'
}

export const Tasks = () => {
  const [collapsedGroups, setCollapsedGroups] = useState<string[]>([])

  const toggleGroup = (project: string) => {
    setCollapsedGroups((prev) => (prev.includes(project) ? prev.filter((p) => p !== project) : [...prev, project]))
  }

  const getStatusIcon = (status: TaskStatus) => {
    switch (status) {
      case 'Completed':
        return <CheckCircle2 size={14} className="text-success" />
      case 'In Progress':
        return <Clock3 size={14} className="text-warning" />
      case 'Blocked':
        return <AlertCircle size={14} className="text-error" />
      default:
        return <Circle size={14} className="text-text-muted" />
    }
  }

  const taskCounts = {
    total: tasksData.length,
    completed: tasksData.filter((task) => task.status === 'Completed').length,
    inProgress: tasksData.filter((task) => task.status === 'In Progress').length,
    blocked: tasksData.filter((task) => task.status === 'Blocked').length,
    todo: tasksData.filter((task) => task.status === 'To Do').length
  }

  const safeTotal = taskCounts.total || 1
  const completedEnd = (taskCounts.completed / safeTotal) * 100
  const inProgressEnd = completedEnd + (taskCounts.inProgress / safeTotal) * 100
  const blockedEnd = inProgressEnd + (taskCounts.blocked / safeTotal) * 100

  return (
    <div className="flex flex-col gap-3">
      {/* Header */}
      <div className="inline-flex gap-2">
        <div>
          <h2 className="text-sm font-bold">Tasks</h2>
          <p className="text-2xs text-text-muted">Manage your team's workflow and assignments</p>
        </div>

        <div className="flex items-center ml-auto gap-2">
          <div className="flex items-center gap-2 px-3 h-9 rounded-lg bg-surface border border-border text-xs text-text-secondary">
            <Search size={14} />
            Search tasks...
          </div>

          <button className="h-9 px-3 rounded-lg bg-surface border border-border text-xs flex items-center gap-2">
            <Filter size={14} />
            Filter
          </button>

          <Button size="small" className="h-9! ml-auto text-xs!">
            <Plus size={16} />
            New Task
            <span className="pl-3">
              <ChevronDown size={16} />
            </span>
          </Button>
        </div>
      </div>

      <div className="grid grid-cols-[minmax(0,1fr)_35%] gap-2">
        {/* Main Tasks */}
        <Card className="gap-0!">
          {/* Task filters */}
          <div className="flex items-center gap-1 border-b border-border">
            {taskTabs.map((tab, index) => (
              <div key={tab.label} className={`flex flex-col pb-1 border-b ${index === 0 ? 'border-accent' : 'border-transparent'}`}>
                <div
                  className={`inline-flex items-center p-2 gap-1 rounded-md text-2xs transition cursor-pointer hover:bg-surface-elevated ${index === 0 ? 'text-accent' : 'text-text-secondary'}`}
                >
                  <tab.icon size={14} className={index === 0 ? 'text-accent' : 'text-text-secondary'} />
                  {tab.label}
                </div>
              </div>
            ))}
          </div>

          <div className="max-h-100 overflow-y-auto">
            {tasksGroups.map((group) => {
              const isCollapsed = collapsedGroups.includes(group.project)

              return (
                <div key={group.project}>
                  <div
                    onClick={() => toggleGroup(group.project)}
                    className="sticky top-0 z-10 flex items-center gap-2 px-2 py-2 bg-surface border-b border-border cursor-pointer select-none"
                  >
                    <ChevronDown size={14} className={`transition-transform ${isCollapsed ? '-rotate-90' : ''}`} />
                    <span className="text-xs font-semibold">{group.project}</span>
                    <span className="text-2xs px-1.5 py-0.5 rounded bg-accent-soft text-accent">{group.tasks.length}</span>
                  </div>

                  {!isCollapsed && (
                    <>
                      {group.tasks.map((task) => {
                        const priority = priorityConfig[task.priority]
                        const PriorityIcon = priority.icon

                        return (
                          <div
                            key={task.id}
                            className="grid grid-cols-[1rem_1fr_5rem_3.5rem_1.75rem] content-center items-center px-2 py-2.5 gap-2 border-b border-border last:border-b-0 hover:bg-surface-elevated/60 transition"
                          >
                            <div className="flex items-center">{getStatusIcon(task.status)}</div>

                            <p
                              className={`text-xs font-medium truncate ${task.status === 'Completed' ? 'line-through text-text-muted' : 'text-text-primary'}`}
                            >
                              {task.title}
                            </p>

                            <div className={`inline-flex items-center w-fit px-2 py-1 gap-1 rounded-md text-2xs ${priority.className}`}>
                              <PriorityIcon size={11} />
                              {task.priority}
                            </div>

                            <div className="flex items-center gap-1 text-2xs text-text-muted">
                              <Calendar size={12} />
                              {task.deadline}
                            </div>

                            <button className="size-7 flex items-center justify-center rounded-md text-text-muted hover:bg-accent-soft hover:text-accent transition">
                              <MoreHorizontal size={14} />
                            </button>
                          </div>
                        )
                      })}

                      <button className="flex items-center w-full p-2 gap-2 text-2xs text-text-muted hover:bg-surface-elevated/60 transition">
                        <Plus size={14} />
                        Add task
                      </button>
                    </>
                  )}
                </div>
              )
            })}
          </div>
        </Card>

        {/* Right Sidebar */}
        <div className="flex flex-col gap-2">
          {/* Task Overview */}
          <Card>
            <div className="flex">
              <span className="text-xs font-semibold">Task Overview</span>
            </div>

            <div className="flex items-center gap-3">
              {/* Donut */}
              <div
                className="relative w-20 h-20 rounded-full shrink-0"
                style={{
                  background: `conic-gradient(var(--color-success) 0 ${completedEnd}%, var(--color-warning) ${completedEnd}% ${inProgressEnd}%, var(--color-error) ${inProgressEnd}% ${blockedEnd}%, #8894ab ${blockedEnd}% 100%)`
                }}
              >
                <div className="absolute inset-2.5 rounded-full bg-surface flex flex-col items-center justify-center">
                  <span className="text-base font-bold">{taskCounts.total}</span>
                  <span className="text-[9px] text-text-muted">Tasks</span>
                </div>
              </div>

              {/* Legend */}
              <div className="flex flex-col gap-1 text-2xs w-full">
                <div className="flex items-center gap-2">
                  <span className="size-1.5 rounded-full bg-success" />
                  <span>Completed</span>
                  <span className="ml-auto text-text-muted">{taskCounts.completed}</span>
                </div>

                <div className="flex items-center gap-2">
                  <span className="size-1.5 rounded-full bg-warning" />
                  <span>In Progress</span>
                  <span className="ml-auto text-text-muted">{taskCounts.inProgress}</span>
                </div>

                <div className="flex items-center gap-2">
                  <span className="size-1.5 rounded-full bg-error" />
                  <span>Blocked</span>
                  <span className="ml-auto text-text-muted">{taskCounts.blocked}</span>
                </div>

                <div className="flex items-center gap-2">
                  <span className="size-1.5 rounded-full bg-text-muted" />
                  <span>To Do</span>
                  <span className="ml-auto text-text-muted">{taskCounts.todo}</span>
                </div>
              </div>
            </div>
          </Card>

          {/* Upcoming Deadlines */}
          <Card>
            <div className="flex items-center justify-between">
              <span className="text-xs font-semibold">Upcoming Deadlines</span>
              <button className="text-2xs text-accent hover:underline">View all</button>
            </div>

            <div className="flex flex-col divide-y divide-border">
              {upcomingDeadlines.map((task) => (
                <div key={task.id} className="flex items-center gap-2.5 py-2.5">
                  <span className={`w-1 self-stretch rounded-full ${priorityDot[task.priority]}`} />

                  <div className="flex flex-col min-w-0">
                    <span className="text-2xs font-medium text-text-primary truncate">{task.title}</span>
                    <span className="text-2xs text-text-muted truncate">{task.project}</span>
                  </div>

                  <div className="flex flex-col items-end ml-auto shrink-0 gap-0.5">
                    <span className="text-2xs text-text-secondary">{task.date}</span>
                    <span className="text-2xs text-text-muted">{task.priority}</span>
                  </div>
                </div>
              ))}
            </div>
          </Card>
        </div>
      </div>
    </div>
  )
}
