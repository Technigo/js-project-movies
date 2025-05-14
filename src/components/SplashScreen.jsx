import styled, { keyframes } from "styled-components";

const fadeInOut = keyframes`
  0% {
    opacity: 0;
    transform: scale(0.8);
  }
  25% {
    opacity: 1;
    transform: scale(1);
  }
  75% {
    opacity: 1;
    transform: scale(1);
  }
  100% {
    opacity: 0;
    transform: scale(1.1);
  }
`;

const SplashContainer = styled.div`
  position: fixed;
  inset: 0;
  background-color: black;
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 9999;
`;

const LogoText = styled.h1`
  color: white;
  font-size: 48px;
  font-family: "Arial Black", sans-serif;
  animation: ${fadeInOut} 3s ease-in-out forwards;

  @media (min-width: 577px) {
    font-size: 96px;
  }

  @media (min-width: 770px) {
    font-size: 128px;
  }
`;

export default function SplashScreen() {
  return (
    <SplashContainer>
      <LogoText>POPFLIX🍿</LogoText>
    </SplashContainer>
  );
}
