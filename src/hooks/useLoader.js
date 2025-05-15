import { useState, useCallback } from 'react';

export const useLoader = (initialState = false) => {
  const [isLoading, setIsLoading] = useState(initialState);

  const withLoading = useCallback(async (asyncFunction) => {
    setIsLoading(true);
    try {
      return await asyncFunction();
    } catch (error) {
      console.error('Error during async operation:', error);
      throw error;
    } finally {
      setIsLoading(false);
    }
  }, [setIsLoading]);

  return { isLoading, withLoading };
};