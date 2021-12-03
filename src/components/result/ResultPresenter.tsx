import styled from 'styled-components';

export const Wrapper = styled.section`
  width: 80%;
  padding: 2.5%;
`;

export const Title = styled.span`
  font-size: 50px;
  font-weight: 400;

  margin: 0;
`;

export const ResultBox = styled.section`
  width: 100%;
  height: 100%;

  display: flex;
  flex-direction: row;
`;

export const ResultsWrapper = styled.section`
  width: 50%;
  height: 80%;

  display: flex;
  align-items: center;
  justify-content: center;
  flex-wrap: wrap;
`;

export const Text = styled.span``;

export const ResultWrapper = styled.section`
  width: 250px;
  height: 50px;

  margin: 0 25px;

  display: flex;
  align-items: center;
  justify-content: space-around;

  border-radius: 10px;
  border: 1px solid #d2d2d2;
`;
