import styled from "styled-components";
import { Link } from "react-router-dom";

const Error = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: 60vh;
  font-size: 2rem;
  color: #000;
  font-family: 'Agdasima', sans-serif;
  text-align: center;
  gap: 1rem;
`;

const BackLink = styled(Link)`
  margin-top: 1rem;
  color: #000;
  background: #ffffff;
  outline: 2px solid #000;
  padding: 0.5em 1.2em;
  border-radius: 20px;
  text-decoration: none;
  font-size: 1.1rem;
  font-weight: bold;
  letter-spacing: 1px;
  transition: background 0.2s, color 0.2s;
  box-shadow: 0 2px 8px rgba(0,0,0,0.08);

  &:hover {
  transform: scale(1.1);
  }
`;

export const ErrorMsg = () => {
  return (
    <Error>
      <span role="img" aria-label="confused popcorn" style={{ fontSize: "4rem" }}>🍿🤔</span>
      <div>
        <strong>Oh no!</strong> <br />
        No movie found here.<br />
        <span style={{ fontSize: "1.2rem" }}>Try picking a movie from the list instead!</span>
      </div>
      <BackLink to="/">← Back to movies</BackLink>
    </Error>
  )
}
