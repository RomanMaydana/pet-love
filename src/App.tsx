import './App.css'
import { Filters } from './components/Adopt/Filters'
import { Hero } from './components/Adopt/Hero'
import { Header } from './components/Header'

function App () {

  return (
    <div className='text-[#0d1b0d]'>
      <Header />
      <main>
        <form>
          <Hero />
          <div className='flex gap-4 p-4'>
            <aside className='w-64'>
              <Filters />
            </aside>
            <section className='flex-1'>
            </section>
          </div>
        </form>
      </main>
    </div>
  )
}

export default App
