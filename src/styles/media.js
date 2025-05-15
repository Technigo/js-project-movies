// Media query breakpoints for responsive design
const size = {
  mobile: '320px',
  mobileL: '425px',
  tablet: '768px',
  laptop: '1024px',
  desktop: '1920px'
}

// Media queries for use with styled-components
export const device = {
  mobile: `@media (min-width: ${size.mobile})`,
  mobileL: `@media (min-width: ${size.mobileL})`,
  tablet: `@media (min-width: ${size.tablet})`,
  laptop: `@media (min-width: ${size.laptop})`,
  desktop: `@media (min-width: ${size.desktop})`
}

// Example usage:
/*
import { device } from '../media';

const Component = styled.div`
  width: 100%;
  padding: 1rem;
  
  ${device.tablet} {
    padding: 2rem;
    display: flex;
  }
  
  ${device.laptop} {
    max-width: 1200px;
    margin: 0 auto;
  }
`;
*/
