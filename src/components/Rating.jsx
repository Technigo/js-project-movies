import styled from "styled-components";
import { FaStar } from "react-icons/fa";

const RatingWrapper = styled.span`
  background-color: white;
  color: black;
  padding: 0 0.375rem;
  font-weight: 500;
  display: inline-flex;
  align-items: center;
  box-shadow: 0 0.125rem 0.375rem rgba(0, 0, 0, 0.2);
`;

const StarIcon = styled(FaStar)`
  color: gold;
  margin-right: 0.25rem;
  height: 1.125rem;
  width: 1.125rem;
`;

export const Rating = ({ value, releaseDate }) => {
  if (!value || !releaseDate) return null;

  const now = new Date();
  const release = new Date(releaseDate);

  if (release > now) return null;

  const rounded = Number(value).toFixed(1);

  return (
    <RatingWrapper>
      <StarIcon />
      {rounded}
    </RatingWrapper>
  );
};
