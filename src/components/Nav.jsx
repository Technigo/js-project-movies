import { NavLink } from "react-router-dom";
import styled from "styled-components";

const LogoText = styled.h1`
display: none;
padding: 0;
margin: 0;
`
const Logo = styled.img`
height: 50px;
width: 50px;
`

const NavBar = styled.nav`
display: flex;
align-items: center;
gap: 30px;
padding: 20px;
text-transform: uppercase;
font-family: 'Alfa Slab One', serif;
letter-spacing: 1px;
`

const StyledNavLink = styled(NavLink)`
  color: #000;
  text-decoration: none;
  font-size: 16px;

  &.active {
    border-bottom: 4px solid  #000;
  }

  &:hover {
  
  }

   @media (min-width: 600px) {
   font-size: 20px;
  }
`;

export const Nav = () => {
  return (
    <NavBar>
      <Logo src="../public/movie.svg" />
      <LogoText>Movies</LogoText>
      <StyledNavLink to="/" end>
        Most popular
      </StyledNavLink>
      <StyledNavLink to="/news">
        New releases
      </StyledNavLink>
    </NavBar>
  );
};