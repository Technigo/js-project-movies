import styled from "styled-components";
import { format, isAfter } from "date-fns";

const Tag = styled.span`
  background-color: #ffc107;
  color: #000;
  padding: 0.25rem 0.5rem;
  border-radius: 0.25rem;
  font-weight: 600;
  font-size: 0.8125rem;
  display: inline-block;
  margin-top: 0.5rem;
`;

export const ComingSoonTag = ({ releaseDate, short = false }) => {
  if (!releaseDate) return null;

  const now = new Date();
  const release = new Date(releaseDate);

  if (!isAfter(release, now)) return null;

  if (short) return <Tag>Coming soon</Tag>;

  return <Tag>Coming {format(release, "MMM d, yyyy")}</Tag>;
};
