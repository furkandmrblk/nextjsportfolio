import styled from 'styled-components';
import { maxdevice } from '../theme/mediaQueries';

const GlobalContainer = styled.div`
  padding: 2.125rem 6.5625rem;
  background-color: #14141c;
  max-width: unset;

  @media ${maxdevice.laptop} {
    padding: 2.125rem 2.9625rem;
  }
  @media ${maxdevice.mobileL} {
    padding: 2.125rem 2rem;
  }
`;

export default GlobalContainer;
