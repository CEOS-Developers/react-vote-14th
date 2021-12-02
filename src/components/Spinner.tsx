import styled from 'styled-components';
import CircularProgress from '@material-ui/core/CircularProgress';

export const Spinner = styled(CircularProgress)`
  position: absolute;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  margin: auto;
  z-index: 1000;
  & svg {
    color: #7945e2;
  }
`;
