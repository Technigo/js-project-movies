import { NavLink } from "react-router-dom";
import styled from "styled-components";

const LogoText = styled.h1`
display: none;
padding: 0;
margin: 0;
`
const Logo = styled.img`
height: 40px;
width: 40px;
`

const NavBar = styled.nav`
display: flex;
align-items: center;
gap: 30px;
padding: 10px;
text-transform: uppercase;
font-family: Urbanist, sans-serif;

`

const StyledNavLink = styled(NavLink)`
  color: #000;
  text-decoration: none;
  font-size: 22px;


  &.active {
    border-bottom: 4px solid  #000;
    padding-bottom: 2px;
  }

  &:hover {
  
  }

   @media (min-width: 600px) {
   
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