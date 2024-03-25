const Button = ({ children }: { children: React.ReactNode }) => (
  <button className='px-12 py-2 bg-accent text-cyan-50 rounded-2xl text'>
    {children}
  </button>
)

export default Button
