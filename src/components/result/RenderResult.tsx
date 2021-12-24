import { RankWrapper, Result, Text } from './ResultPresenter';

const RenderResult = ({ resultList }: any) => {
  const rank = ['🥇', '🥈', '🥉', '4', '5', '6', '7', '8', '9', '10'];

  return (
    <Result>
      {resultList.map((candidate: any, i: number) => (
        <RankWrapper key={candidate.id}>
          <Text>{rank[i]}</Text>
          <Text>{candidate.name}</Text>
          <Text>{candidate.vote_count}</Text>
        </RankWrapper>
      ))}
    </Result>
  );
};

export default RenderResult;
