import { DotLottieReact } from '@lottiefiles/dotlottie-react'
import styled from 'styled-components'

const LoaderContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 80vh;
  width: 100%;
`

export const Loader = () => {
  return (
    <LoaderContainer>
      <DotLottieReact
        src='https://lottie.host/97db6f68-80f0-44c4-b0e3-775fef1c99a1/sEbu2v3MDk.lottie'
        loop
        autoplay
        style={{ width: '150px', height: '150px' }}
      />
    </LoaderContainer>
  )
}
