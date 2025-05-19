import { Link } from 'react-router-dom'
import styled from 'styled-components'

const Wrapper = styled.div`
  text-align: center;
  padding: 4rem 2rem;

  @media (max-width: 767px) {
    padding: 2rem 1rem;
  }
`

const Message = styled.h2`
  font-size: 2rem;
  margin-bottom: 1rem;

  @media (max-width: 767px) {
    font-size: 1.5rem;
  }
`

const Text = styled.p`
  font-size: 1rem;
  color: #444;

  @media (max-width: 767px) {
    font-size: 0.95rem;
  }
`

const BackLink = styled(Link)`
  display: inline-block;
  margin-top: 1.5rem;
  background: #333;
  color: white;
  padding: 0.5rem 1.2rem;
  text-decoration: none;
  border-radius: 4px;

  &:hover {
    background: #555;
  }
`

const NotFound = () => {
  return (
    <Wrapper>
      <Message>404 – Page Not Found</Message>
      <Text>Oops! The page you’re looking for doesn’t exist.</Text>
      <BackLink to="/">← Back to home</BackLink>
    </Wrapper>
  )
}

export default NotFound
