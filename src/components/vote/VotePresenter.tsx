import styled from 'styled-components';

export const Wrapper = styled.section`
  display: grid;
  width: 80%;

  grid-template-rows: 1.75fr 6.25fr 2fr;
  grid-template-columns: 1fr 8fr 1fr;

  grid-template-areas:
    'title title title'
    '. vote .'
    '. submit .';
  text-align: center;

  color: #3a3a55;
  font-weight: 600;
  background: #f8f9fa;
`;

export const Title = styled.section`
  grid-area: title;

  display: flex;
  align-items: center;
  justify-content: center;

  font-size: 36px;
`;

export const CandidatesWrapper = styled.section`
  grid-area: vote;

  display: grid;
  grid-template-columns: repeat(3, 1fr);

  align-items: center;
  justify-items: center;
`;

export const CandidateButton = styled.button`
  width: 150px;
  height: 50px;

  background: none;
  border-radius: 20px;
  border: 1px solid #5d5fe7;

  &:hover {
    cursor: pointer;
  }

  &:focus {
    background: #5d5fe7;
    color: #ffffff;
  }
`;

export const SubmitButton = styled.button`
  grid-area: submit;

  align-self: center;
  justify-self: center;

  width: 85%;
  height: 40px;

  background: none;

  border: 1px solid black;
  border-radius: 15px;

  &:hover {
    cursor: pointer;
  }
`;
