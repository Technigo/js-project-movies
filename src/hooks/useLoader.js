import { useState } from 'react'

/**
 * A custom hook that manages loading state.
 * @returns {Array} An array containing [isLoading, setIsLoading, withLoading]
 * where withLoading is a function that wraps async operations with loading state.
 */
export const useLoader = (initialState = false) => {
  const [isLoading, setIsLoading] = useState(initialState)

  const withLoading = async (asyncFunction) => {
    setIsLoading(true)
    try {
      const result = await asyncFunction()
      return result
    } catch (error) {
      console.error('Error during async operation:', error)
      throw error
    } finally {
      setIsLoading(false)
    }
  }

  return [isLoading, setIsLoading, withLoading]
}
