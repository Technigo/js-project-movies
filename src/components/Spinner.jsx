import styled, { keyframes } from 'styled-components'

const spin = keyframes`
  to {
    transform: rotate(360deg);
  }
`

const SpinnerWrapper = styled.div`
  display: flex;
  justify-content: center;
  margin-top: 4rem;
`

const Spinner = styled.div`
  width: 48px;
  height: 48px;
  border: 5px solid #ccc;
  border-top-color: #ff4575;
  border-radius: 50%;
  animation: ${spin} 1s linear infinite;
`

const LoadingSpinner = () => (
  <SpinnerWrapper>
    <Spinner />
  </SpinnerWrapper>
)

export default LoadingSpinner
