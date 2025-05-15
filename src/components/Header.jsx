import styled from 'styled-components'

// Laddar bilden som img istället för background-image
const HeroWrapper = styled.header`
  position: relative;
  height: 50vh;
  min-height: 300px;
  display: flex;
  justify-content: center;
  align-items: center;
  overflow: hidden;
  text-align: center;
  color: white;

  @media (max-width: 767px) {
    height: 40vh;
  }
`

const HeroImage = styled.img`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  object-fit: cover;
  object-position: center;
  z-index: 1;
`

const HeroContent = styled.div`
  position: relative;
  z-index: 2;
  padding: 2rem;
  text-shadow: 0 2px 4px rgba(0, 0, 0, 0.7);

  @media (max-width: 767px) {
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
    <HeroWrapper>
      <HeroImage
        src="/images/cinema.webp"
        alt="A cinema with red seats and a glowing screen"
        width="1600"
        height="500"
        loading="eager"
        fetchpriority="high"
      />
      <HeroContent>
        <Title>Sofia's Movie App</Title>
        <Subtitle>Discover popular, top-rated and upcoming films</Subtitle>
      </HeroContent>
    </HeroWrapper>
  )
}

export default Header
