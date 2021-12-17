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
  const sortedCandidateArray = candidates.sort((a, b) => b.vote - a.vote);
  return (
    <Container>
      {sortedCandidateArray.map((candidate, index) => {
        return (
          <VoteContainer key={candidate.id}>
            <div>
              {index + 1} {candidate.name} {candidate.vote}
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

  margin: 0 auto;
`;
const VoteContainer = styled(Row)`
  align-items: center;

  margin: 10px;
`;
export default Vote;
