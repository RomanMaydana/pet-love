import { UrgentIcon } from '@/icons/UrgentIcon'
import { RoundedButton } from '../RoundedButton'
import { QuickActions as QuickActionsType, SortBy } from '@/types.d'
interface Props {
  quickActions: QuickActionsType,
  onQuickActionsChange: (quickActions: QuickActionsType) => void
  }
export const QuickActions = ({ quickActions, onQuickActionsChange }: Props) => {
  const handleChange = (quickActions: QuickActionsType) => {
    onQuickActionsChange(quickActions)
  }
  return (
    <header className='flex  mb-4 items-center'>
      <div className='flex-1 flex flex-wrap gap-2 items-start'>
        <RoundedButton text='All' isActive={quickActions === QuickActionsType.ALL} onClick={() => handleChange(QuickActionsType.ALL)}/>
        <RoundedButton text='Urgent' isActive={quickActions === QuickActionsType.URGENT} onClick={() => handleChange(QuickActionsType.URGENT)}>
          <UrgentIcon className='w-5 h-5' />
        </RoundedButton>
        <RoundedButton text='Vaccinated' isActive={quickActions === QuickActionsType.VACCINATED} onClick={() => handleChange(QuickActionsType.VACCINATED)}/>
      </div>
      <p className='flex items-center gap-2 text-nowrap self-start py-1.5'>Sort by <span>
        <select name="sort" id="sort" className='font-bold focus-visible:outline-none '>
          {
            Object.values(SortBy).map((sortBy) => (
              <option key={sortBy} value={sortBy}>{sortBy}</option>
            ))
          }
        </select>
      </span></p>
    </header>
  )
}
