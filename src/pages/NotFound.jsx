import styled from 'styled-components'
import { DotLottieReact } from '@lottiefiles/dotlottie-react'
import { Header } from '../components/Header.jsx'

export const StyledNotFound = styled.section`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 2rem 1rem;
  min-height: 100vh;
  box-sizing: border-box;

  .animation-container {
    width: 100%;
    height: 30vh;
    margin-bottom: 2rem;
  }

  h1 {
    margin: 0 0 1rem 0;
    font-size: 2rem;
  }

  p {
    font-size: 1.2rem;
    text-align: center;
    max-width: 500px;
  }
`

export const NotFound = () => {
  return (
    <>
    <StyledNotFound>
      <div className='animation-container'>
        <DotLottieReact
          src='https://lottie.host/1b9d6eee-1273-46d9-9d36-a0925490db55/j4MCsSe3nd.lottie'
          loop
          autoplay
          style={{ width: 'auto', height: '100%' }}
        />
      </div>
      <h1>404 - Not Found</h1>
      <p>Sorry, the page you are looking for does not exist.</p>
    </StyledNotFound>
    </>
  )
}
