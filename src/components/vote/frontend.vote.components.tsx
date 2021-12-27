import Candidates from "./candidates.vote.components";

type FrontProps = {
  isLoggedIn: boolean;
};

function Front({ isLoggedIn }: FrontProps) {
  return (
    <>
      <h1 className="Title">CEOS 15기 프론트엔드 파트장 투표</h1>
      <Candidates isLoggedIn={isLoggedIn} part={true} />
    </>
  );
}

export default Front;
