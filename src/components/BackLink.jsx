import styled from "styled-components";
import { Link } from "react-router-dom";
import { IoCaretBackCircle } from "react-icons/io5";

const StyledLink = styled(Link)`
  position: absolute;
  top: 1rem;
  left: 3.125rem;
  text-decoration: none;
  color: white;
  display: inline-flex;
  align-items: center;
  font-size: 1rem;
  font-weight: 700;
  filter: drop-shadow(0.125rem 0.1875rem 0.25rem rgb(0 0 0 / 0.5));

  @media (min-width: 577px) {
    top: 3.125rem;
  }
`;

const BackIcon = styled(IoCaretBackCircle)`
  color: white;
  margin-right: 0.25rem;
  height: 1.875rem;
  width: 1.875rem;
`;

export const BackLink = ({ to = "/" }) => (
  <StyledLink to={to}>
    <BackIcon />
    Movies
  </StyledLink>
);
