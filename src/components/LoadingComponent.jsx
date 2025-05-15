import React from "react";
import styled from "styled-components";
import { DotLottieReact } from "@lottiefiles/dotlottie-react";

const LoadingContainer = styled.div`
  position: fixed;
  inset: 0;
  background-color: #121212;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: 32px;
  text-align: center;
`;

export const LoadingComponent = () => {
  return (
    <LoadingContainer>
      <DotLottieReact src='path/to/animation.lottie' loop autoplay />;
    </LoadingContainer>
  );
};
