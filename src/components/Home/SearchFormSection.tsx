import { AnchorButton } from '@/components/AnchorButton'
import { InputText } from '@/components/InputText'
import { LocationIcon } from '@/icons/LocationIcon'
import { PetLeg } from '@/icons/PetLeg'
import { SearchIcon } from '@/icons/SearchIcon'
export const SearchFormSection = () => {
  return (
    <form className=' max-w-3xl mx-auto flex gap-3 w-full bg-white p-3 rounded-lg border border-lime-400/20 shadow-lg mt-12'>
      <InputText placeholder='Search by name, race.' >
        <SearchIcon className='size-5 text-lime-700'/>
      </InputText>
      <InputText placeholder='Location (city)'>
        <LocationIcon className='size-5 text-lime-700'/>
      </InputText>
      <AnchorButton href="/adopt" className='py-3 gap-1'>
        <PetLeg className='size-5'/>
              Search
      </AnchorButton>
    </form>
  )
}
