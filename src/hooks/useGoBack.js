import { useNavigate } from 'react-router-dom'

export const useGoBack = () => {
  const navigate = useNavigate()

  const handleGoBack = () => {
    // Check if there is a history state and if the length is greater than 1
    if (window.history.state && window.history.state.length > 1) {
      navigate(-1)
    } else {
      // If not, navigate to a default route (e.g., home page)
      navigate('/')
    }
  }

  return handleGoBack
}
