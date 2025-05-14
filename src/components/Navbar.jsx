import React from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import { SearchBar } from './SearchBar.jsx';

const Nav = styled.nav`
  width: 100vw;
  background: #222;
  color: #fff;
  padding: 1rem 2rem;
  display: flex;
  align-items: center;
  justify-content: space-between;
  box-sizing: border-box;
  flex-wrap: wrap;

  @media (max-width: 600px) {
    flex-direction: column;
    align-items: stretch;
    padding: 0.5rem 0.5rem;
    gap: 0.5rem;
  }
`;

const HomeLink = styled(Link)`
  color: #fff;
  text-decoration: none;
  font-size: 1.2rem;
  font-weight: bold;
  @media (max-width: 600px) {
    text-align: center;
    margin-bottom: 0.5rem;
    font-size: 1.1rem;
  }
`;

export const Navbar = () => (
  <Nav aria-label="Main navigation">
    <HomeLink to="/">Popflix 🍿</HomeLink>
    <SearchBar />
  </Nav>
); 