import React, { HTMLAttributes } from 'react'

interface IButton extends HTMLAttributes<HTMLButtonElement> {
  children: React.ReactNode
  classnames?: string
  disabled?: boolean
}

const Button = ({ children, classnames, onClick, disabled }: IButton) => (
  <button
    disabled={disabled}
    onClick={onClick}
    className={`px-6 py-1.5 bg-accent text-cyan-50 text-sm rounded-xl text ${classnames}`}
  >
    {children}
  </button>
)

export default Button
