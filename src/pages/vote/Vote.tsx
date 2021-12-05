import React from 'react';
import useVote from '../../hooks/useVote';
import styled from 'styled-components';
import { Col, Row } from '../../components/Containers';
import { Button } from 'antd';
const Vote = () => {
  const { candidates, postVote } = useVote();
  const onVoteClicked = (id: number) => {
    postVote(id);
  };
  return (
    <Container>
      {candidates.map((candidate) => {
        return (
          <VoteContainer key={candidate.id}>
            <div>
              {candidate.name} {candidate.vote}
            </div>
            <Button onClick={() => onVoteClicked(candidate.id)}>
              투표하기
            </Button>
          </VoteContainer>
        );
      })}
    </Container>
  );
};
const Container = styled(Col)`
  justify-content: center;
  align-items: center;

  height: 100vh;

  margin: 0 10%;
`;
const VoteContainer = styled(Row)`
  align-items: center;

  margin: 10px;
`;
export default Vote;
