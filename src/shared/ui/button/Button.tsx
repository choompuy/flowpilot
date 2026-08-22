interface ButtonProps {
  variant?: 'primary' | 'secondary' | 'outline'
  size?: 'small' | 'normal' | 'large'
  children: React.ReactNode
  onClick?: () => void
  href?: string
  className?: string
}

export const Button = ({ variant = 'primary', size = 'normal', children, onClick, href, className = '' }: ButtonProps) => {
  const baseClasses = 'shrink-0 inline-flex items-center justify-center gap-1 rounded-lg font-semibold transition-all duration-200 cursor-pointer select-none'

  const variantClasses = {
    primary: [
      'bg-brand text-white',
      'shadow-sm',
      'hover:shadow-md hover:-translate-y-0.5',
      'active:translate-y-0 active:scale-[0.98] active:shadow-sm'
    ].join(' '),

    secondary: [
      'bg-surface text-text-primary',
      'border border-border',
      'shadow-sm',
      'hover:bg-surface-elevated hover:border-accent',
      'active:bg-accent-soft active:border-accent',
      'active:scale-[0.98]'
    ].join(' '),

    outline: [
      'bg-transparent text-text-primary',
      'border-2 border-border',
      'hover:border-accent hover:text-accent',
      'active:bg-accent-soft active:border-accent active:text-accent',
      'active:scale-[0.98]'
    ].join(' '),

    ghost: [
      'bg-transparent text-text-secondary',
      'hover:bg-accent-soft hover:text-accent',
      'active:bg-accent-soft active:text-accent',
      'active:scale-[0.98]'
    ].join(' ')
  }

  const sizeClasses = {
    small: 'min-w-10 h-10 px-2 text-sm',
    normal: 'h-12 px-4 text-base',
    large: 'h-16 px-8 text-lg'
  }

  const classes = [baseClasses, variantClasses[variant], sizeClasses[size], className].filter(Boolean).join(' ')

  if (href) {
    return (
      <a href={href} className={classes}>
        {children}
      </a>
    )
  }

  return (
    <button className={classes} onClick={onClick}>
      {children}
    </button>
  )
}
