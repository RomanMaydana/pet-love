import { SearchIcon } from '../../icons/SearchIcon'
import { GreenButton } from '../GreenButton'

export function Hero () {
  return (
    <section className='relative h-[450px] flex flex-col items-center justify-center gap-10'>
      <div className='absolute right-0 left-0 h-full w-full -z-10 mask-t-from-60% mask-t-to-100% bg-black/70'/>
      <img src="./dog.webp" className='absolute right-0-0 left-0 h-full w-full object-cover -z-20' />
      <h1 className='text-6xl font-extrabold text-white text-center text-pretty'>Look for your new best friend</h1>
      <p className='text-white text-xl max-w-2xl text-center text-pretty'>Thousands of pets are waiting for a loving home. Give them the second chance they deserve.</p>
      <section className='max-w-xl w-full mx-auto'>
        <div className='flex items-center gap-2 bg-white p-2 rounded-lg '>
          <SearchIcon className='mx-2 w-6 h-6 text-lime-600' />
          <input type="text" name='text' className='flex-1 placeholder:text-neutral-400 focus:outline-none' placeholder='Search by name, race or color' />
          <GreenButton type='submit' onClick={() => console.log('search')}>Search</GreenButton>
        </div>
      </section>
    </section>
  )
}
