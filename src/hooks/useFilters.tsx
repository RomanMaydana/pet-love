import { initialState, type Pet, type Filters as FiltersType, QuickActions as QuickActionsType, SortBy, AgeUnit, PetAges } from '@/types.d'
import { useSearchForm } from '@/hooks/useSearchForm'
import { useEffect, useState } from 'react'
import { useSearchParams } from 'react-router'

export const RESULTS_PER_PAGE = 6
export const useFilters = () => {
  const [searchParams, setSearchParams] = useSearchParams()
  const [pets, setPets] = useState<Pet[]>([])
  const [filters, setFilters] = useState<FiltersType>(() => {
    const text = searchParams.get('text') || ''
    const species = searchParams.get('species')?.split(',') || []
    const ageValue = searchParams.get('age')
    const age = Number.isNaN(ageValue) || ageValue == null ? undefined : Number(ageValue)
    const gender = searchParams.get('gender') || undefined
    const sortBy = searchParams.get('sortBy') || SortBy.LATEST
    return {
      text,
      species,
      age,
      gender,
      sortBy,
    }
  })
  const [quickActions, setQuickActions] = useState<QuickActionsType>(() => {
    const action = searchParams.get('actions')
    if (Object.values(QuickActionsType).includes(action as QuickActionsType)) {
      return action as QuickActionsType
    }
    return QuickActionsType.ALL
  })
  const [currentPage, setCurrentPage] = useState(() => {
    const page = searchParams.get('page')
    return Number.isNaN(page) ? Number(page) : 1
  })

  const onChange = (filters: FiltersType) => {
    setFilters(filters)
    setCurrentPage(1)
  }
  const { handleChange } = useSearchForm({ onChange, filters })
  const totalPages = Math.ceil(pets.length / RESULTS_PER_PAGE)
  useEffect(() => {
    function fetchPets () {
      fetch('/pets.json')
        .then(response => response.json())
        .then((data: Pet[]) => {
          const filteredPets = data.filter((pet: Pet) => {
            let result = true
            if(filters.text.length > 0 && !pet.name.toLowerCase().includes(filters.text.toLowerCase())) {
              result = false
            }
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

  useEffect(() => {
    setSearchParams((params) => {
      params.delete('text')
      params.delete('species')
      params.delete('age')
      params.delete('gender')
      params.delete('actions')
      params.delete('sortBy')
      params.delete('page')
      if(filters.text) params.set('text', filters.text)
      if(filters.species.length > 0) params.set('species', filters.species.join(','))
      if(filters.age != null) params.set('age', filters.age.toString())
      if(filters.gender != null) params.set('gender', filters.gender)
      if(quickActions !== QuickActionsType.ALL) params.set('actions', quickActions)
      if(filters.sortBy !== SortBy.LATEST) params.set('sortBy', filters.sortBy)
      if(currentPage > 1) params.set('page', currentPage.toString())
      return params
    })
  }, [filters, quickActions, currentPage])

  const handleQuickActionsChange = (quickActions: QuickActionsType) => {
    setQuickActions(quickActions)
  }

  const handleReset = () => {
    setFilters(initialState)
    setQuickActions(QuickActionsType.ALL)
    setCurrentPage(1)
  }

  const handlePageChange = (page: number) => {
    setCurrentPage(page)
  }

  return {
    pets,
    filters,
    quickActions,
    currentPage,
    handleChange,
    handleQuickActionsChange,
    handleReset,
    handlePageChange,
    totalPages,
  }
}
