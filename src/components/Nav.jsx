import { NavLink } from "react-router-dom";
import styled from "styled-components";

const Logo = styled.h1`
padding: 0;
margin: 0;
`

const NavBar = styled.nav`
display: flex;
align-items: center;
gap: 30px;
padding: 20px;
text-transform: uppercase;
font-family: 'Notable', serif;
letter-spacing: 2px;
`

const StyledNavLink = styled(NavLink)`
  color: #000;
  text-decoration: none;
  font-size: 16px;

  &.active {
    border-bottom: 4px solid  #000;
  }

  &:hover {
    color: #0077cc;
  }

   @media (min-width: 600px) {
   font-size: 20px;
  }
`;

export const Nav = () => {
  return (
    <NavBar>
      <Logo>Movie-logo</Logo>
      <StyledNavLink to="/" end>
        Most popular
      </StyledNavLink>
      <StyledNavLink to="/news">
        New releases
      </StyledNavLink>
    </NavBar>
  );
};