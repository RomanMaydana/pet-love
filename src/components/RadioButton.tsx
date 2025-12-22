import type { InputHTMLAttributes } from 'react'

type Props = InputHTMLAttributes<HTMLInputElement> & {
  text: string,
  id: string,
}
export const RadioButton = ({ text, id, ...rest }: Props) => {
  return (
    <label htmlFor={id} className='flex items-center gap-2 cursor-pointer'>
      <input {...rest} type="radio" id={id} className='appearance-none w-5 h-5 border border-gray-300 rounded-full cursor-pointer checked:border-lime-600 checked:shadow-[inset_0_0_0_3px_white,inset_0_0_0_10px_rgb(101,163,13)] transition-all duration-200' />
      <span className='text-lg'>{text}</span>
    </label>
  )}
