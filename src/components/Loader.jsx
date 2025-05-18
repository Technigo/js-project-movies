import styled, { keyframes } from "styled-components"

const Centered = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
`;

const Rotate = keyframes`
  0% { transform: rotate(0deg); }
  100% { transform: rotate(360deg); }
`;

const Animation = styled.div`
  font-size: 45px;
  animation: ${Rotate} 1.5s linear infinite;
`;

export const Loader = () => {
  return (
    <Centered>
      <Animation>🍿</Animation>
    </Centered>
  )
} 