import { UrgentIcon } from '@/icons/UrgentIcon'
import { RoundedButton } from '../RoundedButton'

export const QuickActions = () => {
  return (
    <header className='flex  mb-4 items-center'>
      <div className='flex-1 flex flex-wrap gap-2 items-start'>
        <RoundedButton text='All' isActive/>
        <RoundedButton text='Urgent' >
          <UrgentIcon className='w-5 h-5' />
        </RoundedButton>
        <RoundedButton text='Puppy' />
        <RoundedButton text='Large dogs' />
      </div>
      <p className='flex items-center gap-2 text-nowrap self-start py-1.5'>Sort by <span>
        <select name="sort" id="sort" className='font-bold focus-visible:outline-none '>
          <option value="latest">Latest</option>
          <option value="oldest">Oldest</option>
          <option value="most-urgent">Most Urgent</option>
          <option value="least-urgent">Least Urgent</option>
        </select>
      </span></p>
    </header>
  )
}
