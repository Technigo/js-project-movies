import { Link } from "react-router-dom";
import styled from "styled-components";
import { SearchBar } from "./SearchBar.jsx";

const Nav = styled.nav`
  width: 100vw;
  background: #222;
  color: #fff;
  padding: 1rem 2rem;
  display: flex;
  align-items: center;
  justify-content: space-between;
  box-sizing: border-box;

  @media (max-width: 600px) {
    flex-direction: column;
    gap: 0.5rem;
    padding: 1rem;
  }
`;

const HomeLink = styled(Link)`
  color: #fff;
  text-decoration: none;
  font-size: 1.5rem;
  font-weight: bold;

  @media (max-width: 600px) {
    font-size: 1rem;
    margin-bottom: 0.5rem;
  }
`;

export const Navbar = () => (
  <Nav aria-label='Main navigation'>
    <HomeLink to='/'>Popflix 🍿</HomeLink>
    <SearchBar />
  </Nav>
);
