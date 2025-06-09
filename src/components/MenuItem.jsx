import { NavLink } from 'react-router'

const MenuItem = ({ text, path, onSelectList }) => {
  return (
    <li>
      <NavLink to={path} onClick={() => onSelectList(text)}>{text}</NavLink>
    </li>
  )
}

export default MenuItem

