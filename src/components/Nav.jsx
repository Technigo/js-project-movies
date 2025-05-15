import { NavLink } from "react-router-dom";
import styled from "styled-components";

const NavBar = styled.nav`
display: flex;
justify-content: flex-start;
align-content: center;
gap: 20px;
border: 2px solid red;
padding: 20px;
font-size: 18px;
`

const StyledNavLink = styled(NavLink)`
  color: #0055aa;
  text-decoration: none;
  text-transform: uppercase;
  font-weight: normal;
  

  &.active {
    font-weight: bold;
    color: #003377;
    border-bottom: 3px solid #003377;
    margin-bottom: 40px;
  }

  &:hover {
    color: #0077cc;
  }
`;

export const Nav = () => {
  return (
    <NavBar>
      <h1>Movie-logo</h1>
      <StyledNavLink to="/" end>
        Most popular
      </StyledNavLink>
      <StyledNavLink to="/news">
        New releases
      </StyledNavLink>
    </NavBar>
  );
};