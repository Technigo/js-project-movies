import { NavLink } from "react-router-dom";
import styled from "styled-components";

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

const StyledNavLink = styled(NavLink)`
  color: #000;
  text-decoration: none;
  font-size: 22px;

  &.active {
    border-bottom: 5px solid  #000;

  }

   @media (min-width: 600px) {
    font-size: 32px;
  }
`;

export const Nav = () => {
  return (
    <NavBar>
      <StyledNavLink to="/" end>
        Most popular
      </StyledNavLink>
      <StyledNavLink to="/news">
        New releases
      </StyledNavLink>
    </NavBar>
  );
};