import { PetLeg } from '../icons/PetLeg'
import { AnchorButton } from './AnchorButton'

const navItems = [
  {
    label: 'home',
    title: 'Home',
    href: '/',
  },
  {
    label: 'adopt',
    title: 'Adopt',
    href: '/adopt',
  },
  {
    label: 'donate',
    title: 'Donate',
    href: '/donate',
  },
  {
    label: 'profile',
    title: 'Profile',
    href: '/profile',
  },
]
export const Header = () => {
  return (
    <header className="flex justify-center items-center py-3 bg-white shadow-sm shadow-green-200/20 px-6">
      <h2 className="flex-1 flex items-center gap-2 text-xl font-bold"><PetLeg className="w-6 h-6 text-green-pet"/>PetLove</h2>
      <nav className="flex gap-3">
        {navItems.map((item) => (
          <a key={item.label} aria-label={item.label} href={item.href} className="text-normal py-1 px-2 rounded-lg hover:scale-110 hover:bg-green-pet/10 transition-all">
            {item.title}
          </a>
        ))}
      </nav>
      <div className="flex-1 flex justify-end" >
        <AnchorButton href="/sing-in" >
          Sign In
        </AnchorButton>
      </div>

    </header>
  )
}
