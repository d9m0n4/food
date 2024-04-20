import { SVGProps } from 'react'

export function Minus(props: SVGProps<SVGSVGElement>) {
  return (
    <svg
      xmlns='http://www.w3.org/2000/svg'
      width='1em'
      height='1em'
      viewBox='0 0 20 20'
      {...props}
    >
      <path
        fill='currentColor'
        fillRule='evenodd'
        d='M4 10a.75.75 0 0 1 .75-.75h10.5a.75.75 0 0 1 0 1.5H4.75A.75.75 0 0 1 4 10'
        clipRule='evenodd'
      />
    </svg>
  )
}
