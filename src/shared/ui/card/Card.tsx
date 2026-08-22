import type { ReactNode } from 'react'

interface CardProps {
  children: ReactNode
  className?: string
}

export const Card = ({ children, className = '' }: CardProps) => {
  return (
    <div className={`flex flex-col gap-3 p-3 rounded-xl bg-surface border border-border ${className}`}>
      {children}
    </div>
  )
}
