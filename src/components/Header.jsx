import styled from 'styled-components'

// Hero-sektion med bakgrundsbild
const Hero = styled.header`
background-image: url('/images/cinema.jpg');
  background-size: cover;
  background-position: center;
  height: 50vh;
  min-height: 300px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  color: white;
  text-shadow: 0 2px 4px rgba(0, 0, 0, 0.7);
  padding: 2rem;
  text-align: center;

  @media (max-width: 767px) {
    height: 40vh;
    padding: 1.5rem;
  }
`

const Title = styled.h1`
  font-size: 3rem;
  margin: 0;

  @media (max-width: 767px) {
    font-size: 2rem;
  }
`

const Subtitle = styled.p`
  font-size: 1.2rem;
  margin-top: 0.5rem;

  @media (max-width: 767px) {
    font-size: 1rem;
  }
`

const Header = () => {
  return (
    <Hero>
      <Title>Sofia's Movie App</Title>
      <Subtitle>Discover popular, top-rated and upcoming films</Subtitle>
    </Hero>
  )
}

export default Header
