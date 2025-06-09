import { useState } from 'react'
import { Squash as Hamburger } from 'hamburger-react'
import MenuItem from './MenuItem'

const NavMobile = ({ onSelectList }) => {
  const [isOpen, setOpen] = useState(false)

  // close menu when an item is clicked
  const handleMenuClick = () => {
    setOpen((prev) => !prev)
  }

  return (
    <div className='md:hidden'>
      <Hamburger toggled={isOpen} size={30} toggle={setOpen} label='Show menu' rounded />
      {isOpen && (
        <ul className='fixed top-15 left-0 right-0 bottom-0 z-2 flex flex-col items-end gap-8 text-lg bg-black p-8' onClick={handleMenuClick} >
          <MenuItem text='Popular' path='/popular' onSelectList={onSelectList} />
          <MenuItem text='Top Rated' path='/top_rated' onSelectList={onSelectList} />
          <MenuItem text='On Cinema' path='/now_playing' onSelectList={onSelectList} />
          <MenuItem text='Upcoming' path='/upcoming' onSelectList={onSelectList} />
        </ul>
      )}
    </div>
  )
}

export default NavMobile