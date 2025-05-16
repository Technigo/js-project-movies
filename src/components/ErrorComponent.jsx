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
  padding: 2rem;
  text-align: center;
`;

const Image = styled.img`
  max-width: 18.75rem;
  filter: drop-shadow(0 0 0.625rem #000000aa);
`;

const StyledH1 = styled.h1`
  color: #ffffff;
  font-size: 2rem;
  font-weight: 800;
  margin-bottom: 1rem;

  @media (min-width: 577px) {
    font-size: 3rem;
  }
`;

const StyledP = styled.p`
  color: #cccccc;
  font-size: 1rem;
  max-width: 31.25rem;
  margin-bottom: 2rem;
`;

const StyledLink = styled(Link)`
  background-color: #ffffff;
  color: #121212;
  text-decoration: none;
  font-size: 1rem;
  font-weight: bold;
  padding: 0.75rem 1.5rem;
  border: none;
  border-radius: 3.125rem;
  cursor: pointer;
  transition: all 0.3s ease;
  box-shadow: 0 0.25rem 0.75rem rgba(0, 0, 0, 0.3);

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
