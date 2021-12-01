import styled from "styled-components";

export const Wrapper = styled.section`
  width: 80%;
  padding: 2.5%;
`;

export const Title = styled.span`
  font-size: 50px;
  font-weight: 400;

  margin: 0;
`;

export const CandidatesWrapper = styled.section`
  width: 80%;
  height: 80%;

  display: flex;
  align-items: center;

  flex-wrap: wrap;
  justify-content: space-between;

  border: 1px solid black;
`;

export const CandidateWrapper = styled.section`
  width: 150px;
  height: 50px;

  margin: 0 25px;

  display: flex;
  align-items: center;
  justify-content: center;

  border-radius: 10px;
  border: 1px solid #d2d2d2;
`;

export const SubmitButton = styled.button`
  width: 100px;
  height: 40px;

  background: none;

  border: 1px solid black;
  border-radius: 15px;
`;
