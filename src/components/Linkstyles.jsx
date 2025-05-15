import styled from "styled-components";
import { Link } from "react-router";

const StyledLink = styled(Link)`
  text-decoration: none;
  color: white;
  transition: color 0.5s ease-in-out;
  font-weight: 600;
  font-size: 1.2rem;

  &:hover {
    color: darkorange;
    transform: scale(1.5);
  }
`;

export default StyledLink;
