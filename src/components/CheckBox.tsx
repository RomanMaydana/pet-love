import { type InputHTMLAttributes, forwardRef } from 'react'

type Props = InputHTMLAttributes<HTMLInputElement> & {
  label: string
}

export const CheckBox = forwardRef<HTMLInputElement, Props>(({ id, label, ...rest }, ref) => {
  return (
    <label htmlFor={id} className='flex items-center gap-4 cursor-pointer w-full'>
      <div className='relative'>
        <input type="checkbox" ref={ref} id={id} className='peer sr-only'
          {...rest}/>
        <div className='w-5 h-5 border border-gray-300 rounded-sm peer-checked:bg-lime-600 peer-checked:border-lime-600 transition-all duration-200 flex items-center justify-center'></div>
        <svg className='w-4 h-4 text-white absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 opacity-0 peer-checked:opacity-100 transition-opacity pointer-events-none' fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="3" d="M5 13l4 4L19 7"/>
        </svg>
      </div>
      <span className='text-lg'>{label}</span>
    </label>
  )
})

CheckBox.displayName = 'CheckBox'

