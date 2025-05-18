import { useState } from 'react'

export const useDropdown = (initialState = false) => {
  const [isOpen, setIsOpen] = useState(initialState)

  const dropdown = () => {
    setIsOpen((prev) => !prev)
  }

  return [isOpen, dropdown]
}
