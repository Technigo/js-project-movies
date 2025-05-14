import styled from "styled-components";
import { Link } from "react-router-dom";
import NotFoundImage from "../assets/404.png";

const MessageContainer = styled.div`
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

const Image = styled.img`
  max-width: 300px;
  filter: drop-shadow(0 0 10px #000000aa);
`;

const StyledH1 = styled.h1`
  color: #ffffff;
  font-size: 32px;
  font-weight: 800;
  margin-bottom: 16px;

  @media (min-width: 577px) {
    font-size: 48px;
  }
`;

const StyledP = styled.p`
  color: #cccccc;
  font-size: 16px;
  max-width: 500px;
  margin-bottom: 32px;
`;

const StyledLink = styled(Link)`
  background-color: #ffffff;
  color: #121212;
  text-decoration: none;
  font-size: 16px;
  font-weight: bold;
  padding: 12px 24px;
  border: none;
  border-radius: 50px;
  cursor: pointer;
  transition: all 0.3s ease;
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.3);

  &:hover {
    background-color: #ff5050;
    color: white;
    transform: scale(1.05);
  }
`;

export const ErrorComponent = ({ to = "/" }) => {
  return (
    <MessageContainer>
      <Image src={NotFoundImage} alt='404 error' />
      <StyledH1>404 - Movie not found</StyledH1>
      <StyledP>
        We looked everywhere — even behind the popcorn machine — but this movie
        seems to have vanished from the reels.
      </StyledP>
      <StyledLink to={to}>Find another movie</StyledLink>
    </MessageContainer>
  );
};
