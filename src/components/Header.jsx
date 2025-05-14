import styled from "styled-components";
import { Link } from "react-router-dom";

const StyledHeader = styled.header`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  background-color: black;
  color: white;
  padding: 0;
`;

const Title = styled.h1`
  margin: 0;
  font-size: 2rem;
`;

const Nav = styled.nav`
  margin-top: 0.5rem;

  a {
    color: white;
    margin: 0 1rem;
    text-decoration: none;
    font-weight: bold;
    font-size: 1.2rem;

    &:hover {
      text-decoration: none;
    }
  }
`;

export const Header = () => {
  return (
    <StyledHeader>
      <Title>🎬 ScreamFlix </Title>
      <Nav>
        <Link to="/">Home</Link>
      </Nav>
    </StyledHeader>
  );
};
