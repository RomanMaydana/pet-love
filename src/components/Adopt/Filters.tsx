import { AdjustmentIcon } from '../../icons/AdjustmentIcon'
import { CheckBox } from '../CheckBox'
import { DeactivateChip } from '../DeactivateChip'
import { RadioButton } from '../RadioButton'

export const Filters = () => {
  return (
    <>
      <header className='flex items-center gap-2 justify-between'>
        <h2 className='flex items-center gap-2 font-semibold text-2xl'><span><AdjustmentIcon /></span>Filters</h2>
        <button type='reset' className='text-md text-lime-600 cursor-pointer transition-all duration-300 hover:scale-110'>Clear all</button>
      </header>
      <section className='py-7 border-b border-gray-200'>
        <h3 className='font-semibold text-xl text-gray-500'>SPECIES</h3>
        <div className='flex flex-col gap-2 mt-2'>
          <div className='flex justify-between items-center gap-2'>
            <CheckBox name='dog' label='Dog' />
            <DeactivateChip text='120' />
          </div>
          <div className='flex justify-between items-center gap-2'>
            <CheckBox name='cat' label='Cat' />
            <DeactivateChip text='45' />
          </div>
          <div className='flex justify-between items-center gap-2'>
            <CheckBox name='other' label='Others' />
            <DeactivateChip text='8' />
          </div>
        </div>
      </section>
      <section className='py-7 border-b border-gray-200'>
        <h3 className='font-semibold text-xl text-gray-500'>AGE</h3>
        <div className='flex flex-col gap-2 mt-2'>
          <CheckBox name='puppy' label='Puppy (0-1 year)' />
          <CheckBox name='teen' label='Teen (1-3 years)' />
          <CheckBox name='adult' label='Adult (3-8 years)' />
          <CheckBox name='senior' label='Senior (8+ years)' />
        </div>
      </section>
      <section className='py-7'>
        <h3 className='font-semibold text-xl text-gray-500'>GENDER</h3>
        <div className='flex flex-row gap-4 mt-2'>
          <RadioButton text='Male' name='gender' id='male' value='male' />
          <RadioButton text='Female' name='gender' id='female' value='female' />
        </div>
      </section>

    </>
  )
}
