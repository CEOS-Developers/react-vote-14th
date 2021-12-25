import styled from 'styled-components';
import COLORS from '../../constants/Colors';

export const Container = styled.section`
  display: grid;
  width: 80%;

  grid-template-rows: 1.75fr 8.25fr;
  grid-template-areas:
    'title'
    'result';
  text-align: center;

  color: ${COLORS.grayFont};
  font-weight: 600;
  background: ${COLORS.background};
`;

export const Title = styled.section`
  grid-area: title;

  display: flex;
  align-items: center;
  justify-content: center;

  font-size: 36px;
`;

export const Main = styled.main`
  grid-area: result;

  display: flex;
  align-items: center;
  justify-content: center;
`;

export const Result = styled.section`
  width: 35%;
  min-width: 350px;
  height: 100%;

  display: flex;
  align-items: center;
  flex-direction: column;
`;

export const RankWrapper = styled.section`
  width: 250px;
  height: 45px;

  margin-bottom: 12.5px;

  display: flex;
  align-items: center;
  justify-content: space-around;

  border-radius: 15px;
  border: 1px solid ${COLORS.border};
`;

export const Text = styled.span`
  font-weight: 400;
`;
