import { Link } from 'react-router'
import { useState } from 'react'
import NavDesktop from './NavDesktop'
import NavMobile from './NavMobile'

const Menu = () => {
  const [activeMovieList, setActiveMovieList] = useState('Popular')

  const handleChangeMovieList = (movieList) => {
    setActiveMovieList(movieList)
  }

  return (
    <header className='sticky top-0 w-full left-0 z-2'>
      <nav className='p-2 min-[370px]:px-5 md:py-5 bg-black text-white flex justify-between items-center'>
        <h1 className='text-2xl font-semibold'>
          <Link to='/'>{`${activeMovieList} Movies`}</Link>
        </h1>
        <NavDesktop onSelectList={handleChangeMovieList} />
        <NavMobile onSelectList={handleChangeMovieList} />
      </nav>
    </header>
  )
}

export default Menu