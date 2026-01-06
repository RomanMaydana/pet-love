import { HeroSection } from '@/components/Home/HeroSection'
import { SearchFormSection } from '@/components/Home/SearchFormSection'
import { SpeciesLinks } from '@/components/Home/SpeciesLinks'
import { Home } from '@/icons/Home'
import { SearchIcon } from '@/icons/SearchIcon'
import { Users } from '@/icons/Users'

const steps = [
  {
    icon: SearchIcon,
    title: 'Look for',
    description: 'Search through hundreds of available pets using our filters.',
  },
  {
    icon: Users,
    title: 'Meet',
    description: 'Schedule an appointment to meet your future friend and see if there is a connection.',
  },
  {
    icon: Home,
    title: 'Adopt',
    description: 'Complete the adoption process and bring your new friend home.',
  },
]
export default function HomePage () {
  return (
    <main className='p-8 mt-14'>
      <HeroSection />
      <SearchFormSection />
      <SpeciesLinks />
      <section id='how-it-works' className='bg-white p-8 rounded-lg shadow-xs mt-16 flex flex-col items-center'>
        <header className='text-center space-y-1'>
          <h2 className='text-3xl font-semibold'>How does it work?</h2>
          <p className='text-lime-700'>Adopting is easier than you think.</p>
        </header>

        <div className='grid grid-cols-1 md:grid-cols-2 gap-4'>
          {
            steps.map((step, index) => (
              <article key={index} className='flex flex-col gap-3 items-center p-8'>
                <div className='p-4 bg-emerald-800/10 rounded-full'>
                  <step.icon className='text-green-pet size-6'/>
                </div>
                <h3 className='text-xl font-semibold'>{index + 1}. {step.title}</h3>
                <p className='text-gray-500 text-sm text-center text-pretty'>{step.description}</p>
              </article>
            ))
          }
        </div>
      </section>
    </main>
  )
}
