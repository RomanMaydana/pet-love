import type { Pet } from '@/types'
import { QuickActions } from '@/components/Adopt/QuickActions'
import { PetItem } from '../PetItem'

interface Props {
  pets: Pet[]
}

export const PetList = ({ pets }: Props) => {
  return (
    <>
      <QuickActions />
      <ul className='grid grid-cols-2 xl:grid-cols-3 2xl:grid-cols-4 gap-8 mx-auto'>
        {pets.map((pet, index) => (
          <li key={pet.id}>
            <PetItem pet={pet} index={index} />
          </li>
        ))}
      </ul>
    </>
  )
}
