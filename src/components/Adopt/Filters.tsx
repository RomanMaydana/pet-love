import { useId, useRef } from 'react'
import { AdjustmentIcon } from '../../icons/AdjustmentIcon'
import { CheckBox } from '../CheckBox'
import { DeactivateChip } from '../DeactivateChip'
import { RadioButton } from '../RadioButton'
import { Gender } from '@/types.d'

interface Props {
  onReset: () => void
}
export const Filters = ({ onReset }: Props) => {
  const idDog = useId()
  const idCat = useId()
  const idRabbit = useId()
  const idBird = useId()
  const idOther = useId()
  const dogRef = useRef<HTMLInputElement>(null)
  const catRef = useRef<HTMLInputElement>(null)
  const rabbitRef = useRef<HTMLInputElement>(null)
  const birdRef = useRef<HTMLInputElement>(null)
  const otherRef = useRef<HTMLInputElement>(null)
  const age1Ref = useRef<HTMLInputElement>(null)

  const handleReset = () => {
    onReset()
  }

  return (
    <>
      <header className='flex items-center gap-2 justify-between'>
        <h2 className='flex items-center gap-2 font-semibold text-2xl'><span><AdjustmentIcon /></span>Filters</h2>
        <button type='reset' onClick={handleReset} className='text-md text-lime-600 cursor-pointer transition-all duration-300 hover:scale-110'>Clear all</button>
      </header>
      <section className='py-7 border-b border-gray-200'>
        <h3 className='font-semibold text-xl text-gray-500'>SPECIES</h3>
        <div className='flex flex-col gap-2 mt-2'>
          <div className='flex justify-between items-center gap-2'>
            <CheckBox name='species' id={idDog} label='Dog' value='dog' ref={dogRef}/>
            <DeactivateChip text='120' />
          </div>
          <div className='flex justify-between items-center gap-2'>
            <CheckBox name='species' id={idCat} label='Cat' value='cat' ref={catRef}/>
            <DeactivateChip text='45' />
          </div>
          <div className='flex justify-between items-center gap-2'>
            <CheckBox  name='species' id={idRabbit} label='Rabbit' value='rabbit' ref={rabbitRef}/>
            <DeactivateChip text='45' />
          </div>
          <div className='flex justify-between items-center gap-2'>
            <CheckBox name='species' id={idBird} label='Bird' value='bird' ref={birdRef}/>
            <DeactivateChip text='45' />
          </div>
          <div className='flex justify-between items-center gap-2'>
            <CheckBox name='species' id={idOther} label='Others' value='other' ref={otherRef}/>
            <DeactivateChip text='8' />
          </div>
        </div>
      </section>
      <section className='py-7 border-b border-gray-200'>
        <h3 className='font-semibold text-xl text-gray-500'>AGE</h3>
        <div className='flex flex-col gap-2 mt-2'>
          <RadioButton name='age' text='0-1 year' value={0} id='0' ref={age1Ref}/>
          <RadioButton name='age' text='1-3 years' value={1} id='1' ref={age1Ref}/>
          <RadioButton name='age' text='3-7 years' value={2} id='2' ref={age1Ref}/>
          <RadioButton name='age' text='7-12 years' value={3} id='3' ref={age1Ref}/>
          <RadioButton name='age' text='12+ years' value={4} id='4' ref={age1Ref}/>
        </div>
      </section>
      <section className='py-7'>
        <h3 className='font-semibold text-xl text-gray-500'>GENDER</h3>
        <div className='flex flex-row gap-4 mt-2'>
          {
            Object.values(Gender).map((gender) => (
              <RadioButton key={gender} text={gender} name='gender' value={gender} id={gender}/>
            ))
          }
        </div>
      </section>

    </>
  )
}
