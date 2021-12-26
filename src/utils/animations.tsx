import { keyframes } from 'styled-components';

export const slideUpAnimation = keyframes`
    from {
        opacity: 0;
        transform: translateY(100%);
    }
    to {
        opacity: 1;
        transform: translateY(0);
    }
`;

export const slideDownAnimation = keyframes`
from {
  opacity: 1;
  transform: translateY(0);
}
to {
  opacity: 0;
  transform: translateY(100%);
}
`;
