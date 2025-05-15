import { Link } from "react-router";
import styled from "styled-components";

const Nav = styled.nav`
  background-color: #101211;
  padding: 0.5rem;
`;
const NavList = styled.ul`
  list-style: none;
  display: flex;
  gap: 2rem;
  justify-content: end;
  margin: 0;
  padding: 0 3rem 0 0;
`;

const StyledLink = styled(Link)`
  text-decoration: none;
  color: white;
  transition: color 0.5s ease-in-out;
  font-weight: 600;
  font-size: 1.2rem;

  &:hover {
    color: darkorange;
    transform: scale(1.5);
  }
`;

const Header = () => {
  return (
    <Nav>
      <NavList>
        <li>
          <StyledLink to="/">Movies</StyledLink>
        </li>
        <li>
          <StyledLink to="/about">About</StyledLink>
        </li>
      </NavList>
    </Nav>
  );
};

export default Header;
