import { initialState, type Pet, type Filters as FiltersType, QuickActions as QuickActionsType, SortBy } from '@/types.d'
import { useSearchForm } from '@/hooks/useSearchForm'
import { useEffect, useState } from 'react'
import { useSearchParams } from 'react-router'
import { getAllPets } from '@/services/pets'

export const RESULTS_PER_PAGE = 6
export const useFilters = () => {
  const [searchParams, setSearchParams] = useSearchParams()
  const [pets, setPets] = useState<Pet[]>([])
  const [total, setTotal] = useState(0)
  const [loading, setLoading] = useState(false)
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
    return Number.isNaN(page) || page == null ? 1 : Number(page)
  })

  const onChange = (filters: FiltersType) => {
    setFilters(filters)
    setCurrentPage(1)
  }
  const { handleChange } = useSearchForm({ onChange, filters })
  useEffect(() => {
    function fetchPets () {
      setLoading(true)
      const offset = (currentPage - 1) * RESULTS_PER_PAGE
      getAllPets({ filters, actions: quickActions, offset, limit: RESULTS_PER_PAGE })
        .then(response => {
          setPets(response.data)
          setTotal(response.total)
        })
        .catch(error => {
          console.error('Error fetching pets:', error)
          setPets([])
        })
        .finally(() => {
          setLoading(false)
        })
    }
    fetchPets()

  }, [filters, quickActions, currentPage])

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
      filters.species.forEach(species => params.append('species', species))
      if(filters.age != null) params.set('age', filters.age.toString())
      if(filters.gender != null) params.set('gender', filters.gender)
      if(quickActions !== QuickActionsType.ALL) params.set('actions', quickActions)
      if(filters.sortBy !== SortBy.LATEST) params.set('sortBy', filters.sortBy)
      if(currentPage > 1) params.set('page', currentPage.toString())
      return params
    })
  }, [filters, quickActions, currentPage])
  const totalPages = Math.ceil(total / RESULTS_PER_PAGE)

  const handleQuickActionsChange = (quickActions: QuickActionsType) => {
    setQuickActions(quickActions)
    setCurrentPage(1)
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
    loading,
    total,
  }
}
