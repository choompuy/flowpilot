import logo from '@/assets/flowpilot-logo.png'

interface Props {
  size?: 'small' | 'normal'
}

export const Logo = ({ size = 'normal' }: Props) => {
  const sizeClasses = {
    small: { height: 'h-6', text: 'text-sm' },
    normal: { height: 'h-8', text: 'text-lg' }
  }

  return (
    <div className="flex items-center gap-1">
      <img src={logo} alt="FlowPilot" className={['w-auto', sizeClasses[size].height].join(' ')} />
      <div className={['logo-name inline font-bold', sizeClasses[size].text].join(' ')}>
        <span className="text-text-primary">Flow</span>
        <span className="text-accent">Pilot</span>
      </div>
    </div>
  )
}
