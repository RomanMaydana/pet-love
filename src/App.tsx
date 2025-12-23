import './App.css'
import { Filters } from './components/Adopt/Filters'
import { Hero } from './components/Adopt/Hero'
import { Header } from './components/Header'
import { useEffect, useState } from 'react'
import { type Pet } from '@/types'
import { PetList } from '@/components/Adopt/PetList'

function App () {
  const [pets, setPets] = useState<Pet[]>([])

  useEffect(() => {
    function fetchPets () {
      fetch('/pets.json')
        .then(response => response.json())
        .then(data => {
          setPets(data)
          console.log(data)
        })
    }
    fetchPets()
  }, [])

  return (
    <div className='text-[#0d1b0d]'>
      <Header />
      <main>
        <form role='search' >
          <Hero />
          <div className='flex flex-col md:flex-row gap-8 p-8 w-full mx-auto '>
            <aside className='w-full md:w-1/4 2xl:w-1/5'>
              <Filters />
            </aside>
            <section className='w-full md:w-3/4 xl:w-4/5'>
              <PetList pets={pets} />
            </section>
          </div>
        </form>
      </main>
    </div>
  )
}

export default App
