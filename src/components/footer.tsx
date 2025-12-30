import { Mail } from '@/icons/Mail'

export function Footer () {
  return (
    <footer className='bg-white'>
      <section className=' max-w-7xl mx-auto py-4 px-6 flex items-center justify-between'>
        <div>
          <h2 className='text-xl font-bold'>Pet Love</h2>
          <p className='text-gray-500 text-xs'>© 2025 Pet Love. All rights reserved.</p>
        </div>
        <a className='cursor-pointer rounded-lg p-2 hover:bg-gray-100 transition-all duration-300 hover:scale-110' aria-label='Mail' title='Mail' href='mailto:petlove@gmail.com'>
          <Mail className='text-gray-500 w-6 h-6'/>
        </a>
      </section>
    </footer>
  )
}
