import { cn } from '@/shared/lib/mergeCn'
import React, { HTMLAttributes } from 'react'

interface IButton extends HTMLAttributes<HTMLButtonElement> {
  children: React.ReactNode
  classnames?: string
  disabled?: boolean
  variant?: 'accent' | 'outline'
}

const buttonVariant = {
  accent: 'px-6 py-1.5 bg-accent text-cyan-50 text-sm rounded-xl',
  outline: 'p-1 border border-border rounded-lg hover:border-accent transition',
}

const Button = ({
  children,
  classnames,
  onClick,
  disabled,
  variant = 'accent',
}: IButton) => (
  <button
    disabled={disabled}
    onClick={onClick}
    className={cn(buttonVariant[variant], `${classnames}`)}
  >
    {children}
  </button>
)

export default Button
