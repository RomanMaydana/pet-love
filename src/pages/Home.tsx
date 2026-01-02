import { HeroSection } from '@/components/Home/HeroSection'
import { SearchFormSection } from '@/components/Home/SearchFormSection'
import { SpeciesLinks } from '@/components/Home/SpeciesLinks'
export default function HomePage () {
  return (
    <main className='p-8 mt-14'>
      <HeroSection />
      <SearchFormSection />
      <SpeciesLinks />
    </main>
  )
}
