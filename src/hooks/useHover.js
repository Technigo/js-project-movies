import { useState } from 'react'

/**
 * A custom hook that manages hover state for elements.
 * @returns {Array} An array containing [isHovering, hoverProps]
 * where isHovering is a boolean and hoverProps is an object with onMouseEnter and onMouseLeave handlers.
 */
export const useHover = () => {
  const [isHovering, setIsHovering] = useState(false)

  // Props to spread on the element you want to track hover state for
  const hoverProps = {
    onMouseEnter: () => setIsHovering(true),
    onMouseLeave: () => setIsHovering(false)
  }

  return [isHovering, hoverProps]
}
