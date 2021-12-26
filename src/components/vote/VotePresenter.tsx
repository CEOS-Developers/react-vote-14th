import styled from 'styled-components';
import COLORS from '../../constants/colors';

export const Wrapper = styled.section`
  display: grid;
  width: 80%;
  height: 100%;

  position: fixed;
  right: 0;

  grid-template-rows: 1.75fr 8.25fr;
  grid-template-areas:
    'title'
    'main';

  text-align: center;

  font-weight: 600;
  color: ${COLORS.grayFont};
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
  grid-area: main;
  width: 350px;
  height: 600px;

  display: flex;
  flex-direction: column;

  align-items: center;
  justify-items: center;

  justify-self: center;

  border-radius: 20px;
  box-shadow: 0 0 15px ${COLORS.border};
`;

export const VoteForm = styled.section`
  grid-area: vote;
  height: 100%;

  display: flex;
  flex-direction: column;
  justify-content: center;

  text-align: center;

  font-size: 18px;
`;

export const CandidateButton = styled.button`
  width: 240px;
  height: 40px;

  border: none;
  background: none;

  &:hover {
    cursor: pointer;
    color: ${COLORS.primary};
    transition-duration: 0.3s;
  }

  &:focus {
    color: ${COLORS.primary};
    font-weight: 600;
    font-size: 20px;
  }

  & + & {
    margin-top: 7.5px;
  }
`;

export const SubmitButton = styled.button<{ margin: number }>`
  grid-area: submit;

  width: 100px;
  height: 45px;

  align-self: center;
  margin-top: ${(props) => props.margin}%;

  background: none;
  border: none;
  color: ${COLORS.primary};
  font-weight: 600;

  &:hover {
    cursor: pointer;
    text-decoration: 2px solid ${COLORS.primary} underline;
    transition-duration: 0.3s;
  }
`;
