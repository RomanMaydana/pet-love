import type { AnchorHTMLAttributes } from 'react'

type Props = AnchorHTMLAttributes<HTMLAnchorElement> & {
  className?: string
}

export function AnchorButton ({ children, className, ...rest }: Props) {
  return (<a className={`bg-green-pet px-6 py-2 rounded-lg font-bold ${className} hover:scale-110 transition-transform`}  {...rest}>
    {children}
  </a>)
}
