import React from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';

const Nav = styled.nav`
  width: 100vw;
  background: #222;
  color: #fff;
  padding: 1rem 2rem;
  display: flex;
  align-items: center;
  box-sizing: border-box;
`;

const HomeLink = styled(Link)`
  color: #fff;
  text-decoration: none;
  font-size: 1.2rem;
  font-weight: bold;
`;

export const Navbar = () => (
  <Nav aria-label="Main navigation">
    <HomeLink to="/">Movies</HomeLink>
  </Nav>
); 