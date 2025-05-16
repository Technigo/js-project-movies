import MenuItem from './MenuItem'

const NavDesktop = ({ onSelectList }) => {
  return (
    <ul className='hidden md:flex gap-8 items-center text-lg'>
      <MenuItem text='Popular' path='/popular' onSelectList={onSelectList} />
      <MenuItem text='Top Rated' path='/top_rated' onSelectList={onSelectList} />
      <MenuItem text='On Cinema' path='/now_playing' onSelectList={onSelectList} />
      <MenuItem text='Upcoming' path='/upcoming' onSelectList={onSelectList} />
    </ul>
  )
}

export default NavDesktop