import { Link } from 'react-router'
import Logo from './Logo'

export default function Navbar() {
  return (
    <nav className="
      fixed top-0 left-0 right-0 z-50
      bg-black/80
      flex items-center
      h-14
      px-4 lg:px-8
    ">
      <Link to="/" className="flex items-center">
        <Logo className="w-8 h-8 mr-2" />
        <span className="font-condor font-extrabold italic text-[#F5DEB3] text-xl sm:text-2xl">
          CINEBASE
        </span>
      </Link>
    </nav>
  )
}