import styled from 'styled-components';

export const Wrapper = styled.div`
  display: flex;
  justify-content: center;
  flex-direction: column;
`;

export const Logo = styled.img`
  width: 30rem;
  display: block;
  margin: 0 auto;
`;

export const VoteBox = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  text-align: center;
  //height: 45vh;
`;

export const LoginBox = styled.div`
  display: flex;
  justify-content: space-between;
  margin: 1rem 2rem 0rem 1rem;
`;

export const VoteButtonBox = styled.div`
  display: flex;
  justify-content: center;
  margin: 2rem;
  margin-bottom: 2rem;
`;

type WidthType = {
  width: string;
};

export const TextItem = styled.div<WidthType>`
  width: ${(props) => props.width || '5rem'};
`;

export const TextBox = styled.div``;

interface WidthProps {
  width?: boolean;
}

export const CandidateBox = styled.div<WidthProps>`
  display: flex;
  justify-content: space-around;
  align-items: center;
  width: ${(props) => (props.width ? '20rem' : '100%')};
  margin-bottom: 1rem;
`;
