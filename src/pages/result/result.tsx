import * as React from 'react';
import { Route } from 'react-router-dom';
import { Container } from '../../@shared/components/styeld';
import useUser from '../../@shared/hooks/useUser';

function Result() {
  const { getUser } = useUser();
  const [candidates, setCandidates] = React.useState([]);

  React.useEffect(() => {
    getUser()
      .voteService.fetchCandidates()
      .then((data) => {
        setCandidates(data);
        console.log(data);
      });
  }, [setCandidates]);

  return (
    <Container>
      {candidates &&
        candidates.map((element) => {
          return <div>{JSON.stringify(element)}</div>;
        })}
    </Container>
  );
}

export default Result;
