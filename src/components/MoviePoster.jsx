import styled from "styled-components";

const StyledPoster = styled.img`
  width: 190px;
  height: 285px;
  border: 5px solid white;
  object-fit: cover;

  @media (min-width: 577px) {
    width: 240px;
    height: 360px;
  }

  @media (min-width: 770px) {
    width: 352px;
    height: 523px;
  }
`;

export const MoviePoster = ({ src, alt }) => (
  <StyledPoster src={src} alt={alt} />
);
