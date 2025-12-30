import { Hero } from '@/components/Adopt/Hero'
import { PetList } from '@/components/Adopt/PetList'
import { QuickActions } from '@/components/Adopt/QuickActions'
import { Filters } from '@/components/Adopt/Filters'
import { Pagination } from '@/components/Pagination'
import { RESULTS_PER_PAGE, useFilters } from '@/hooks/useFilters'

export default function AdoptPage () {
  const {
    pets,
    quickActions,
    currentPage,
    handleChange,
    handleQuickActionsChange,
    handleReset,
    handlePageChange,
    totalPages,
  } = useFilters()

  return (
    <main>
      <form role='search' onChange={handleChange} >
        <Hero />
        <div className='flex flex-col md:flex-row gap-8 p-8 w-full mx-auto '>
          <aside className='w-full md:w-1/4 2xl:w-1/5'>
            <Filters onReset={handleReset}/>
          </aside>
          <section className='w-full md:w-3/4 xl:w-4/5'>
            <QuickActions quickActions={quickActions} onQuickActionsChange={handleQuickActionsChange}/>
            <PetList pets={pets.slice((currentPage - 1) * RESULTS_PER_PAGE, currentPage * RESULTS_PER_PAGE)} />
            <Pagination currentPage={currentPage} totalPages={totalPages} onPageChange={handlePageChange}/>
          </section>
        </div>
      </form>
    </main>
  )
}
