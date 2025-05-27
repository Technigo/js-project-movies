import { Link, useLocation } from "react-router";
import styled from "styled-components";

const Nav = styled.nav`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  padding: 0.5rem;
  position: fixed;
  z-index: 100;
  width: 100%;
  background-color: rgba(0, 0, 0, 0.4);
  @media (max-width: 480px) {
    h1 {
      display: none;
    }
  }
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
  text-shadow: 0 0 5px 5px rgb(16, 18, 17);

  &:hover {
    color: darkorange;
    transform: scale(1.5);
  }
`;

const Header = () => {
  const location = useLocation();
  return (
    <Nav>
      <h1 style={{ margin: 0, paddingLeft: "1rem" }}>
        Welcome back to the 90s!
      </h1>
      <NavList>
        {location.pathname.startsWith("/movie/") && (
          <li>
            <StyledLink to="/">Return to Movies</StyledLink>
          </li>
        )}
        <li>
          <StyledLink to="/about">About</StyledLink>
        </li>
      </NavList>
    </Nav>
  );
};

export default Header;
