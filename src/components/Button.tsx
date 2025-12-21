import type { ButtonHTMLAttributes } from 'react'

type Props = ButtonHTMLAttributes<HTMLButtonElement> & {
  className?: string
}

export function Button ({ children, className, ...rest }: Props) {
  return (<button className={`bg-green-pet px-6 py-2 rounded-lg font-bold ${className} transition-all duration-200 cursor-pointer hover:outline-2 hover:outline-black hover:outline-offset-2 hover:bg-orange-300 focus:outline-2 focus:outline-black focus:outline-offset-2 active:scale-80 `}  {...rest}>
    {children}
  </button>)
}
