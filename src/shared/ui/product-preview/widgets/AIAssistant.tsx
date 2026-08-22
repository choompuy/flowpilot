import { overviewData } from '../data/overview.data'
import { Card } from '../components/Card'
import { Sparkles, Astroid, Plus } from 'lucide-react'

export const AIAssistant = () => {
  return (
    <Card>
      <div className="flex justify-between text-xs font-semibold text-text-secondary">
        AI Assistant
        <Sparkles size={14} className="text-accent" />
      </div>

      <div className="flex flex-col gap-2">
        {overviewData.ai.suggestions.map((item) => (
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
    </Card>
  )
}
