import * as React from 'react';
import { Route } from 'react-router-dom';
import styled from 'styled-components';
import { Container, Title } from '../../@shared/components/styeld';
import useUser from '../../@shared/hooks/useUser';
import * as data from '../../@shared/db/candidates.json';
import { Button, Radio, Spacer } from '@nextui-org/react';
function Vote() {
  const { getUser } = useUser();
  const [candidates] = React.useState(data['candidates']);
  const [selectedId, setSelectedId] = React.useState('0');
  const handleClick = (event: any) => {
    setSelectedId(event.target.name);
  };

  React.useEffect(() => {}, [handleClick]);

  const handleVote = () => {
    getUser()
      .voteService.vote(selectedId)
      .then((data) => {
        if (data) {
          alert('투표가 완료되었습니다.');
        } else {
          alert('이미 투표하였습니다!');
        }
      });
  };

  return (
    <Container>
      <Title>🙌투표해주세요❗</Title>
      <Radio.Group value="candidates" size="mini">
        {candidates &&
          candidates.map((element) => {
            return (
              <Radio
                value={element.name}
                size={20}
                onClick={handleClick}
                name={element.id}
                key={element.id}
              >
                {element.name}
              </Radio>
            );
          })}
      </Radio.Group>
      <Spacer y={1} />
      <Button onClick={handleVote}>투표하기</Button>
    </Container>
  );
}

export default Vote;
