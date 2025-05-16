import styled from 'styled-components'
import { DotLottieReact } from '@lottiefiles/dotlottie-react'

export const StyledNotFound = styled.section`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: 100vh;

  DotLottieReact {
    margin-bottom: 1rem;
    size: 150px;
  }
`

export const NotFound = () => {
  return (
    <StyledNotFound>
      <DotLottieReact
        src='https://lottie.host/1b9d6eee-1273-46d9-9d36-a0925490db55/j4MCsSe3nd.lottie'
        loop
        autoplay
      />
      <h1>404 - Not Found</h1>
      <p>Sorry, the page you are looking for does not exist.</p>
    </StyledNotFound>
  )
}
