import styled, { keyframes } from "styled-components";

const bounce = keyframes`
  0%, 100% { transform: translateY(0); }
  50% { transform: translateY(-10px); }
`;

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  margin: 3rem 0 2rem 0;
  color: #fff;
`;

const Emoji = styled.div`
  font-size: 3rem;
  margin-bottom: 1rem;
  animation: ${bounce} 1.2s infinite;
`;

const Message = styled.h2`
  font-size: 1.5rem;
  margin: 0 0 0.5rem 0;
  text-align: center;
`;

const Suggestion = styled.p`
  font-size: 1.1rem;
  color: #ff9800;
  margin: 0;
  text-align: center;
`;

export const NoResults = () => (
  <Wrapper>
    <Emoji>🍿🤔</Emoji>
    <Message>No movies found!</Message>
    <Suggestion>
      Maybe try a different title or check your spelling.
      <br />
      Popcorn is on us while you search!
    </Suggestion>
  </Wrapper>
);
