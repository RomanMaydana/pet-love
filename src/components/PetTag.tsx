const Tags = {
  Urgent: {
    name: 'Urgent',
    styles: 'bg-orange-500 text-white',
  },
  New: {
    name: 'New',
    styles: 'bg-green-500 text-black',
  },
  Vaccinated: {
    name: 'Vaccinated',
    styles: 'bg-teal-500 text-white',
  },
}

interface Props {
  isNew: boolean,
  isUrgent: boolean,
  isVaccinated: boolean,
  className?: string
}

export const PetTag = ({ isNew, isUrgent, isVaccinated, className }: Props) => {
  if(!isNew && !isUrgent && !isVaccinated) return null
  let tag = Tags.Urgent
  if(isUrgent) tag = Tags.Urgent
  else if(isNew) tag = Tags.New
  else if(isVaccinated) tag = Tags.Vaccinated

  return (
    <span className={`px-2 py-1 text-sm font-bold rounded-md ${tag.styles} ${className}`}>{tag.name}</span>
  )
}
