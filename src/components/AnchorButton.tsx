import type { AnchorHTMLAttributes } from 'react'

type Props = AnchorHTMLAttributes<HTMLAnchorElement> & {
  className?: string
}

export function AnchorButton ({ children, className, ...rest }: Props) {
  return (<a className={`bg-green-pet px-6 py-2 rounded-lg font-bold ${className}  transition-all hover:outline-2 hover:outline-black hover:outline-offset-2 hover:bg-orange-300 focus:outline-2 focus:outline-black focus:outline-offset-2 active:scale-80`}  {...rest}>
    {children}
  </a>)
}
