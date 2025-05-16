import styled from "styled-components";

const StyledPoster = styled.img`
  width: 11.875rem;
  height: 17.8125rem;
  border: 0.3125rem solid white;
  object-fit: cover;

  @media (min-width: 36.0625rem) {
    width: 15rem;
    height: 22.5rem;
  }

  @media (min-width: 48.125rem) {
    width: 22rem;
    height: 32.6875rem;
  }
`;

export const MoviePoster = ({ src, alt }) => (
  <StyledPoster src={src} alt={alt} />
);
