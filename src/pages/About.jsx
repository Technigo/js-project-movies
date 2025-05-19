import { Link } from 'react-router-dom'
import styled from 'styled-components'

const Wrapper = styled.section`
  max-width: 800px;
  margin: 0 auto;
  padding: 2rem;
  line-height: 1.6;
  color: #fff;

  @media (max-width: 767px) {
    padding: 1rem;
  }
`

const Heading = styled.h1`
  font-size: 2.5rem;
  margin-bottom: 1rem;
  text-align: center;

  @media (max-width: 767px) {
    font-size: 2rem;
  }
`

const Paragraph = styled.p`
  margin-bottom: 1.5rem;
  font-size: 1rem;

  @media (max-width: 767px) {
    font-size: 0.95rem;
  }
`

const Highlight = styled.span`
  font-weight: 600;
  color: #ff4575;
`

const BackLink = styled(Link)`
  display: inline-block;
  margin-top: 2rem;
  padding: 0.6rem 1.2rem;
  background-color: #ff4575;
  color: white;
  text-decoration: none;
  font-weight: 600;
  border-radius: 4px;

  &:hover {
    background-color: #e63a67;
  }
`

const About = () => {
  return (
    <Wrapper>
      <Heading>About this project</Heading>

      <Paragraph>
        This movie app was built using <Highlight>React</Highlight> and <Highlight>React Router</Highlight> to practice creating a dynamic multi-page interface.
      </Paragraph>

      <Paragraph>
        All movie data is fetched from the <Highlight>The Movie Database (TMDb) API</Highlight>. You can explore popular, top-rated and upcoming movies. The detail pages provide additional information like release dates and genres.
      </Paragraph>

      <Paragraph>
        The site is responsive and accessible, aiming for a <Highlight>Lighthouse score above 90</Highlight> across all categories. It uses <Highlight>styled-components</Highlight> for styling and loads content dynamically using <Highlight>useEffect</Highlight> and <Highlight>useState</Highlight>.
      </Paragraph>

      <Paragraph>
        Built by <Highlight>Sofia Grunditz</Highlight> as part of a Technigo project.
      </Paragraph>

      <BackLink to="/">← Back to movies</BackLink>
    </Wrapper>
  )
}

export default About
