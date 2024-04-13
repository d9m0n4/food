import React from 'react'

const Button = ({
  children,
  classnames,
  onClick,
}: {
  children: React.ReactNode
  classnames?: string
  onClick?: () => void
}) => (
  <button
    onClick={onClick}
    className={`px-6 py-1.5 bg-accent text-cyan-50 text-sm rounded-xl text ${classnames}`}
  >
    {children}
  </button>
)

export default Button
