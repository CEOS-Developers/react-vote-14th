import React from 'react';
import useVote from '../../hooks/useVote';
import styled from 'styled-components';
import { Col } from '../../components/Containers';
import { Button, Table } from 'antd';
import useAuth from '../../hooks/useAuth';
const Vote = () => {
  const { candidates, postVote } = useVote();
  const { user } = useAuth();
  const onVoteClicked = (id: number) => {
    postVote(id);
  };
  const sortedCandidateArray = candidates.sort((a, b) => b.vote - a.vote);
  const { Column } = Table;
  return (
    <Container>
      <h1>15기 백엔드짱 투표</h1>
      <h3>안녕하세요 {user.username}님!</h3>
      <StyledTable dataSource={sortedCandidateArray} pagination={false}>
        <Column title="등수" render={(text, record, index) => index + 1} />
        <Column title="이름" dataIndex="name" key="name" />
        <Column title="득표 수" dataIndex="vote" key="vote" />
        <Column
          title="투표하기"
          key="action"
          render={(record) => (
            <StyledButton onClick={() => onVoteClicked(record.id)}>
              투표하기
            </StyledButton>
          )}
        />
      </StyledTable>
    </Container>
  );
};
const Container = styled(Col)`
  justify-content: center;
  align-items: center;

  height: 100vh;

  margin: 0 auto;
`;
const StyledTable = styled(Table)`
  color: black;
  .ant-table-thead > tr > th {
    background-color: transparent;
  }
  .ant-table {
    background-color: transparent;
  }
  && tbody > tr:hover > td {
    opacity: 0.9;
  }
`;
const StyledButton = styled(Button)`
  border: none;
  background: none;
`;
export default Vote;
