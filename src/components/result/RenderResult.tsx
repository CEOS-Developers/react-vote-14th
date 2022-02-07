import { RankWrapper, Result, Text } from './TotalResultPresenter';

interface resultListProps {
  resultList: never[];
}

interface candidateProps {
  id: number;
  name: string;
  part: string;
  vote_count: number;
}

const RenderResult = ({ resultList }: resultListProps) => {
  const rank = ['🥇', '🥈', '🥉', '4', '5', '6', '7', '8', '9', '10'];

  return (
    <Result>
      {resultList.map((candidate: candidateProps, i: number) => (
        <RankWrapper key={candidate.id} index={i}>
          <Text>{rank[i]}</Text>
          <Text>{candidate.name}</Text>
          <Text>{candidate.vote_count}</Text>
        </RankWrapper>
      ))}
    </Result>
  );
};

export default RenderResult;
