import styled from 'styled-components'
import { useDropdown } from '../hooks/useDropdown'
import { useRef } from 'react'
import { useNavigate } from 'react-router-dom'

export const StyledDropdown = styled.div`
  position: relative;
  width: 100%;

  .button {
    background: #333;
    font-size: 1rem;
    color: white;
    border: none;
    padding: 8px 16px;
    margin-left: 1.5rem;
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
    left: 1.5rem;
    width: 150px;
    background-color: #252525;
    box-shadow: 0 8px 16px rgba(0, 0, 0, 0.5);
    max-height: 0;
    overflow: hidden;
    transition: max-height 0.3s ease;
    z-index: 100;

    &.open {
      max-height: 400px;
    }
  }

  button.dropdownItem {
    background: none;
    color: white;
    width: 150px;
    padding: 12px 16px;
    text-decoration: none;
    display: block;
    transition: background 0.2s;
    border: none;
    text-align: left;
    cursor: pointer;
    font-family: inherit; // Add this to match parent font
    font-size: 14px;

    &:hover {
      background-color: #333;
    }
  }
`

export const Dropdown = () => {
  const [isOpen, toggleDropdown] = useDropdown(false)
  const dropdownRef = useRef(null)
  const navigate = useNavigate()

  // Decade start years
  const decades = [1950, 1960, 1970, 1980, 1990, 2000, 2010, 2020]

  // Handle decade selection
  const handleDecadeClick = (decade) => {
    navigate(`/decade/${decade}`)
    toggleDropdown() // Close dropdown after selection
  }

  // Handle home navigation
  const handleHomeClick = () => {
    navigate('/')
    toggleDropdown()
  }

  return (
    <StyledDropdown ref={dropdownRef}>
      <button
        className={`button ${isOpen ? 'open' : ''}`}
        onClick={toggleDropdown}
      >
        Filter on Decade ▼
      </button>
      <div className={`content ${isOpen ? 'open' : ''}`}>
        <button className='dropdownItem' onClick={handleHomeClick}>
          All Decades
        </button>
        {decades.map((decade) => (
          <button
            key={decade}
            className='dropdownItem'
            onClick={() => handleDecadeClick(decade)}
          >
            {decade}'s Horror
          </button>
        ))}
      </div>
    </StyledDropdown>
  )
}
