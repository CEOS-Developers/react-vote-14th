import styled from 'styled-components';
import COLORS from '../../constants/Colors';

export const Container = styled.section`
  width: 100vw;
  height: 100vh;

  display: grid;

  grid-template-rows: 1.75fr 8.25fr;

  grid-template-areas:
    'title'
    'result';
  text-align: center;

  color: ${COLORS.lightGray};
  font-weight: 600;
  background: ${COLORS.darkBackground};
`;

export const Title = styled.section`
  grid-area: title;

  display: flex;
  align-items: center;
  justify-content: center;

  font-size: 36px;
`;
