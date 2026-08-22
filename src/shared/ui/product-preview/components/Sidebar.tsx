import { sidebarItems } from '../data/overview.data'
import { Logo } from '@/shared/ui/logo'
import { ChevronDown, User, Folder, Users } from 'lucide-react'

interface SidebarProps {
  activeItem?: string
}

const projects = [
  { title: 'Website Redesign', icon: Folder, notify: 12 },
  { title: 'Mobile App', icon: Folder },
  { title: 'Product Launch', icon: Folder, notify: 3 }
]

const teams = [
  { title: 'Design Team', icon: Users },
  { title: 'Development', icon: Users },
  { title: 'Marketing', icon: Users },
  { title: 'Operations', icon: Users }
]

export const Sidebar = ({ activeItem = 'overview' }: SidebarProps) => {
  const isActive = (title: string) => title.toLowerCase().replace(/\s+/g, '-') === activeItem || title.toLowerCase() === activeItem

  return (
    <aside className="shrink-0 flex w-42 h-full flex-col border-r border-border bg-surface overflow-hidden">
      {/* Header */}
      <div className="px-3 pt-3">
        <div className="flex items-center">
          <Logo size="small" />
        </div>
      </div>

      <div className="flex-1 p-2 overflow-hidden">
        {/* Primary navigation */}
        <nav className="space-y-0.5">
          {sidebarItems.map((item) => (
            <SidebarItem key={item.title} icon={item.icon} title={item.title} notify={item.notify} active={isActive(item.title)} />
          ))}
        </nav>

        {/* Projects */}
        <SidebarSection title="Projects">
          {projects.map((item) => (
            <SidebarItem key={item.title} icon={item.icon} title={item.title} notify={item.notify} />
          ))}
        </SidebarSection>

        {/* Teams */}
        <SidebarSection title="Teams">
          {teams.map((item) => (
            <SidebarItem key={item.title} icon={item.icon} title={item.title} />
          ))}
        </SidebarSection>
      </div>

      <div className="border-t border-border">
        <button className="flex w-full items-center p-2 gap-2 transition-colors hover:bg-accent-soft">
          <div className="relative flex h-7 w-7 shrink-0 items-center justify-center rounded-full bg-accent">
            <User size={14} className="text-accent-soft" />
            <span className="absolute bottom-0 right-0 h-2 w-2 rounded-full border-2 border-surface bg-success" />
          </div>

          <div className="min-w-0 flex-1">
            <p className="truncate text-left text-xs font-medium text-text-primary">Alex Johnson</p>
            <p className="truncate text-left text-2xs text-text-muted">alex@flowpilot.ai</p>
          </div>

          <ChevronDown size={14} className="shrink-0 text-text-muted" />
        </button>
      </div>
    </aside>
  )
}

interface SidebarSectionProps {
  title: string
  children: React.ReactNode
}

const SidebarSection = ({ title, children }: SidebarSectionProps) => {
  return (
    <section className="mt-5">
      <div className="mb-2 flex items-center px-2 text-2xs font-medium uppercase text-text-secondary">{title}</div>
      <div className="space-y-0.5">{children}</div>
    </section>
  )
}

interface SidebarItemProps {
  title: string
  icon: React.ElementType
  active?: boolean
  notify?: number
}

const SidebarItem = ({ title, icon: Icon, active = false, notify }: SidebarItemProps) => {
  return (
    <button
      className={`flex w-full items-center gap-2 rounded-lg px-2 py-1.5 text-xs transition-colors hover:bg-accent-soft ${active ? 'text-accent bg-accent-soft' : 'text-text-muted'}`}
    >
      <Icon size={14} className="shrink-0" />
      <span className="truncate">{title}</span>
      {notify && <span className="shrink-0 flex size-6 justify-center items-center ml-auto rounded-sm bg-surface-elevated">{notify}</span>}
    </button>
  )
}
