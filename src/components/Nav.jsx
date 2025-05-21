import { NavLink } from "react-router-dom";
import styled from "styled-components";

<<<<<<< Updated upstream
const NavBar = styled.nav`
display: flex;
align-items: center;
gap: 30px;
padding: 10px;
text-transform: uppercase;
font-weight: bold;
font-family: 'Agdasima', sans-serif;
letter-spacing: 3px;
`
=======
const LogoText = styled.h1`
  display: none;
  padding: 0;
  margin: 0;
`;
const Logo = styled.img`
  height: 40px;
  width: 40px;
`;

const NavBar = styled.nav`
  display: flex;
  align-items: center;
  gap: 30px;
  padding: 10px;
  text-transform: uppercase;
  font-weight: bold;
  font-family: "Agdasima", sans-serif;
  letter-spacing: 3px;
`;
>>>>>>> Stashed changes

const StyledNavLink = styled(NavLink)`
  color: #000;
  text-decoration: none;
  font-size: 22px;

  &.active {
    border-bottom: 5px solid #000;
  }

<<<<<<< Updated upstream
   @media (min-width: 600px) {
=======
  &:hover {
  }

  @media (min-width: 600px) {
>>>>>>> Stashed changes
    font-size: 32px;
  }
`;

export const Nav = () => {
  return (
    <NavBar>
      <StyledNavLink to="/" end>
        Most popular
      </StyledNavLink>
      <StyledNavLink to="/news">New releases</StyledNavLink>
    </NavBar>
  );
};
