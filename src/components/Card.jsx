import React from "react";
import styled from "styled-components";
import { Link } from "react-router";

const CardText = styled.div`
  opacity: 0; /* Hide text initially */
  transition: opacity 0.3s ease-in-out;
  position: absolute;
  bottom: 1rem;
  left: 1rem;
  color: white;
  padding: 0.5rem;
  border-radius: 5px;
  margin-bottom: 0.5rem;
  text-shadow: 0 0 5px black, 0 0 10px black, 0 0 15px black;
`;

const CardLayout = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: start;
  margin: 0;
  padding: 0rem;
  width: 100%;
  height: 100%;
  position: relative;

  img {
    padding: 0; /* Remove padding from the image */
    width: 100%;
    height: auto;
  }
  &:hover img {
    filter: grayscale(1);
    filter: brightness(0.4);
    transition: filter 0.3s ease-in-out;
    cursor: pointer;
  }
  &:hover ${CardText} {
    opacity: 1;
  }

  @media (min-width: 480px) and (max-width: 779px) {
    width: 50%;
    height: 100%;
  }
  @media (min-width: 780px) and (max-width: 1024px) {
    width: 25%;
    height: 100%;
  }
  @media (min-width: 1025px) {
    width: 20%;
    height: 100%;
  }
`;

const StyledLink = styled(Link)`
  text-decoration: none;
  color: inherit;

  &:hover {
    text-decoration: underline; /* Optional hover effect */
  }
`;

const Card = ({ movie, release_date, poster_path, id }) => {
  return (
    <CardLayout>
      <Link
        to={`/movie/${id}`}
        aria-label={`View details about ${movie}`}
        style={{ textDecoration: "none" }}
      >
        <img src={poster_path} alt={`Poster of ${movie}`} />{" "}
      </Link>
      <CardText>
        <h2>{movie}</h2>
        <p>
          Release Date:
          <br />
          {release_date}
        </p>
      </CardText>
    </CardLayout>
  );
};

export default Card;
