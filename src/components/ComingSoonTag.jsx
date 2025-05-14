import styled from "styled-components";
import { format, isAfter } from "date-fns";

const Tag = styled.span`
  background-color: #ffc107;
  color: #000;
  padding: 4px 8px;
  border-radius: 4px;
  font-weight: 600;
  font-size: 13px;
  display: inline-block;
  margin-top: 8px;
`;

export const ComingSoonTag = ({ releaseDate, short = false }) => {
  if (!releaseDate) return null;

  const now = new Date();
  const release = new Date(releaseDate);

  if (!isAfter(release, now)) return null;

  // Too use verison 2, add "short"
  if (short) return <Tag>Coming soon</Tag>;

  return <Tag>Coming {format(release, "MMM d, yyyy")}</Tag>;
};
