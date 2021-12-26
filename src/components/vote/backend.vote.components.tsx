import Candidates from "./candidates.vote.components";

type BackProps = {
  isLoggedIn: boolean;
};

function Back({ isLoggedIn }: BackProps) {
  return (
    <>
      <h1 className="Title">CEOS 15기 백엔드 파트장 투표</h1>
      <Candidates isLoggedIn={isLoggedIn} />
    </>
  );
}

export default Back;
