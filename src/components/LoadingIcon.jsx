import styled, { keyframes } from "styled-components";

const spin = keyframes`
  0% {
    transform: rotate(0deg);
  }
  50% {
    transform: rotate(180deg);
  }
  100% {
    transform: rotate(360deg);
  }
`;
const LoadingGroup = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  box-shadow: none;
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);

  width: 100%;
  height: 100%;
`;
const Spinner = styled.img`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  box-shadow: none;
  width: 300px;
  height: 300px;
  animation: ${spin} 5s linear infinite;
  margin: 2rem auto;
`;

const LoadingIcon = () => {
  return (
    <LoadingGroup>
      <Spinner
        src="../../public/images/popcorn.svg"
        alt="spinning Loading Icon"
      />
      <h2>Loading...</h2>
    </LoadingGroup>
  );
};

export default LoadingIcon;
