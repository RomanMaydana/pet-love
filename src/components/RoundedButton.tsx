import type { ButtonHTMLAttributes } from 'react'

type Props = ButtonHTMLAttributes<HTMLButtonElement> & {
  text: string,
  isActive?: boolean
}

export const RoundedButton = ({ text, isActive, children, ...rest }: Props) => {
  return (
    <button type='button' className={`cursor-pointer bg-green-pet px-4 py-1 border border-[#e5f3e6] rounded-full  ${isActive ? 'bg-green-pet font-bold' : 'bg-white'} flex items-center gap-2 text-lg h-10`} {...rest}>
      {text}
      {children != null && children}
    </button>
  )
}
