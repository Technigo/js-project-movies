import { Link } from "react-router-dom";
import { IoCaretBackCircle } from "react-icons/io5";
import styled from "styled-components";

const StyledLink = styled(Link)`
  position: absolute;
  top: 16px;
  left: 50px;
  text-decoration: none;
  color: white;
  display: inline-flex;
  align-items: center;
  font-size: 16px;
  font-weight: 700;
  filter: drop-shadow(2px 3px 4px rgb(0 0 0 / 0.5));
`;

const BackIcon = styled(IoCaretBackCircle)`
  color: white;
  margin-right: 4px;
  height: 30px;
  width: 30px;
`;

export const BackLink = ({ to = "/" }) => (
  <StyledLink to={to}>
    <BackIcon />
    Movies
  </StyledLink>
);
