import styled from 'styled-components'
import { useDropdown } from '../hooks/useDropdown'
import { useRef } from 'react'
import { Link } from 'react-router-dom'
import { useNavigate } from 'react-router-dom'

export const StyledDropdown = styled.div`
  position: relative;
  width: 100%;

  .button {
    background: #333;
    color: white;
    border: none;
    padding: 8px 16px;
    border-radius: 4px;
    cursor: pointer;
    transition: background 0.3s ease;

    &.open {
      background: #666;
    }
  }

  .content {
    position: absolute; // This takes it out of document flow
    top: 100%; // Position it below the button
    left: 0;
    width: 200px;
    background-color: #252525;
    box-shadow: 0 8px 16px rgba(0, 0, 0, 0.5);
    max-height: 0;
    overflow: hidden;
    transition: max-height 0.3s ease;
    z-index: 100; // Higher z-index to ensure it's on top of other content

    &.open {
      max-height: 300px; // Increase this if you have more items
    }
  }

  a {
    color: white;
    padding: 12px 16px;
    text-decoration: none;
    display: block;
    transition: background 0.2s;

    &:hover {
      background-color: #333;
    }
  }
`

export const Dropdown = () => {
  const [isOpen, toggleDropdown] = useDropdown(false)
  const dropdownRef = useRef(null)
  const navigate = useNavigate()

  // Decade start years (1950, 1960, etc)
  const decades = [1950, 1960, 1970, 1980, 1990, 2000, 2010, 2020]

  // Handle decade selection
  const handleDecadeClick = (decade) => {
    navigate(`/decade/${decade}`)
    toggleDropdown() // Close dropdown after selection
  }

  return (
    <StyledDropdown ref={dropdownRef}>
      <button
        className={`button ${isOpen ? 'open' : ''}`}
        onClick={toggleDropdown}
      >
        Filter on decade ▼
      </button>
      <div className={`content ${isOpen ? 'open' : ''}`}>
        {decades.map((decade) => (
          <a
            key={decade}
            onClick={() => handleDecadeClick(decade)}
            href='#' // Prevents page jumps
          >
            {decade}'s Horror
          </a>
        ))}
        <Link to='/' onClick={toggleDropdown}>
          All Movies
        </Link>
      </div>
    </StyledDropdown>
  )
}
