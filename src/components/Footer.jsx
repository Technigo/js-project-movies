import { Link } from 'react-router-dom'
import styled from 'styled-components'

const FooterWrapper = styled.footer`
  background-color: #1f1f1f;
  color: #ccc;
  text-align: center;
  padding: 1.5rem 1rem;
  margin-top: 4rem;
  font-size: 0.9rem;
`

const FooterLink = styled(Link)`
  color: #ff4575;
  text-decoration: none;
  font-weight: 500;

  &:hover {
    text-decoration: underline;
  }
`

const Footer = () => {
  return (
    <FooterWrapper>
      <p>
        Built by Sofia Grunditz ·{' '}
        <FooterLink to="/about">About this project</FooterLink>
      </p>
    </FooterWrapper>
  )
}

export default Footer
