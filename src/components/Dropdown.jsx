import styled from 'styled-components'
import { useDropdown } from '../hooks/useDropdown'
import { useRef } from 'react'
import { Link } from 'react-router-dom'

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

  return (
    <StyledDropdown ref={dropdownRef}>
      <button
        className={`button ${isOpen ? 'open' : ''}`}
        onClick={toggleDropdown}
      >
        Filter on decade ▼
      </button>
      <div className={`content ${isOpen ? 'open' : ''}`}>
        <Link to='/category/horror' onClick={toggleDropdown}>
          Horror
        </Link>
        <Link to='/category/thriller' onClick={toggleDropdown}>
          Thriller
        </Link>
        <Link to='/category/sci-fi' onClick={toggleDropdown}>
          Sci-Fi
        </Link>
      </div>
    </StyledDropdown>
  )
}
