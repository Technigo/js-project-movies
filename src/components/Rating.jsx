import styled from "styled-components";
import { FaStar } from "react-icons/fa";

const RatingWrapper = styled.span`
  background-color: white;
  color: black;
  padding: 0 6px;
  font-weight: 500;
  display: inline-flex;
  align-items: center;
  box-shadow: 0 2px 6px rgba(0, 0, 0, 0.2);
`;

const StarIcon = styled(FaStar)`
  color: gold;
  margin-right: 4px;
  height: 18px;
  width: 18px;
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
