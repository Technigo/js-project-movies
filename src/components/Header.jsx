import styled from "styled-components";
import { Link, useLocation } from "react-router-dom";
import { useState, useEffect } from "react";

const StyledHeader = styled.header`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  background-color: ${(props) =>
    props.$isTransparent ? "transparent" : "black"};
  color: white;
  padding: 1rem;
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  z-index: 10;
`;

const Title = styled.h1`
  margin: 0;
  font-size: 1.5rem;
`;

const Nav = styled.nav`
  margin-top: 0.5rem;

  a {
    color: white;
    margin: 0 1rem;
    text-decoration: none;
    font-weight: bold;
    font-size: 1.2rem;
  }
`;

export const Header = () => {
  const location = useLocation();
  const [isTransparent, setIsTransparent] = useState(false);

  useEffect(() => {
    const isMovieInfoPage = location.pathname.startsWith("/movies/");
    setIsTransparent(isMovieInfoPage);
  }, [location]);

  return (
    <StyledHeader $isTransparent={isTransparent}>
      {" "}
      {/* Använd $isTransparent */}
      <Title>🎬 ScreamFlix </Title>
      <Nav>
        <Link to="/">Home</Link>
      </Nav>
    </StyledHeader>
  );
};
