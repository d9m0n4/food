import React from 'react'

const Button = ({ children }: { children: React.ReactNode }) => (
  <button className='px-6 py-1.5 bg-accent text-cyan-50 text-sm rounded-xl text'>
    {children}
  </button>
)

export default Button
