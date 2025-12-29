import './App.css'
import { Hero } from './components/Adopt/Hero'
import { Header } from './components/Header'
import { useEffect, useState } from 'react'
import { AgeUnit, type Filters as FiltersType, type Pet, PetAges, QuickActions as QuickActionsType, SortBy } from '@/types.d'
import { PetList } from '@/components/Adopt/PetList'
import { QuickActions } from './components/Adopt/QuickActions'
import { Filters } from './components/Adopt/Filters'

const initialState: FiltersType = {
  species: [],
  age: undefined,
  gender: undefined,
  sortBy: SortBy.LATEST,
}
function App () {
  const [pets, setPets] = useState<Pet[]>([])
  const [filters, setFilters] = useState<FiltersType>(initialState)
  const [quickActions, setQuickActions] = useState<QuickActionsType>(QuickActionsType.ALL)

  useEffect(() => {
    function fetchPets () {
      fetch('/pets.json')
        .then(response => response.json())
        .then((data: Pet[]) => {
          const filteredPets = data.filter((pet: Pet) => {
            let result = true
            if (filters.species.length > 0 && !filters.species.includes(pet.species)) {
              result = false
            }
            if (filters.age != null && !((filters.age === 0 && pet.age_unit === AgeUnit.Months) || (pet.age_unit === AgeUnit.Years && PetAges[filters.age][0] < pet.age && pet.age <= PetAges[filters.age][1]))) {
              result = false
            }
            if(filters.gender != null && filters.gender !== pet.gender) {
              result = false
            }
            if(quickActions !== QuickActionsType.ALL && pet.categories[quickActions] === false) {
              result = false
            }
            return result
          })
          let sortedPets: Pet[] = []
          if(filters.sortBy === SortBy.LATEST) {
            sortedPets = filteredPets.toSorted((a, b) => new Date(b.created_at).getTime() - new Date(a.created_at).getTime())
          }
          if(filters.sortBy === SortBy.OLDEST) {
            sortedPets = filteredPets.toSorted((a, b) => new Date(a.created_at).getTime() - new Date(b.created_at).getTime())
          }
          setPets(sortedPets)
        })
    }
    fetchPets()

  }, [filters, quickActions])

  const handleFiltersChange = (event: React.FormEvent<HTMLFormElement>) => {
    const formData = new FormData(event.currentTarget)
    const species = formData.getAll('species')
    const age = formData.get('age')
    const gender = formData.get('gender')
    const sortBy = formData.get('sort')
    handleSearch({
      ...filters,
      sortBy: sortBy as string,
      species: species as string[],
      age: age ? Number(age) : undefined,
      gender: gender as string })
  }
  const handleSearch = (filters: FiltersType) => {
    setFilters(filters)
  }

  const handleQuickActionsChange = (quickActions: QuickActionsType) => {
    setQuickActions(quickActions)
  }

  const handleReset = () => {
    setFilters(initialState)
    setQuickActions(QuickActionsType.ALL)
  }

  return (
    <div className='text-[#0d1b0d]'>
      <Header />
      <main>
        <form role='search' onChange={handleFiltersChange} >
          <Hero />
          <div className='flex flex-col md:flex-row gap-8 p-8 w-full mx-auto '>
            <aside className='w-full md:w-1/4 2xl:w-1/5'>
              <Filters onReset={handleReset}/>
            </aside>
            <section className='w-full md:w-3/4 xl:w-4/5'>
              <QuickActions quickActions={quickActions} onQuickActionsChange={handleQuickActionsChange}/>
              <PetList pets={pets} />
            </section>
          </div>
        </form>
      </main>
    </div>
  )
}

export default App
