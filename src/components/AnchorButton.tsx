import type { AnchorHTMLAttributes } from 'react'
import { NavLink } from 'react-router'
type Props = AnchorHTMLAttributes<HTMLAnchorElement> & {
  href: string
}

export function AnchorButton ({ children, className, href, ...rest }: Props) {
  return (<NavLink to={href} className={`bg-green-pet whitespace-nowrap  px-6 py-2 rounded-lg font-bold ${className}  transition-all hover:outline-2 hover:outline-black hover:outline-offset-2 hover:bg-orange-300 focus:outline-2 focus:outline-black focus:outline-offset-2 active:scale-80`}  {...rest}>
    {children}
  </NavLink>)
}
