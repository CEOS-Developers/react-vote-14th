import * as React from 'react';
import { Route, Link } from 'react-router-dom';
import useUser from './@shared/hooks/useUser';
import Vote from './pages/vote/vote';

function App() {
  const { getUser, logOut } = useUser();
  const { id } = getUser();

  return (
    <>
      <div>hello, {id}!</div>
      <div onClick={logOut}>로그아웃</div>
      <div>
        <Link to="/vote">투표하기</Link>
      </div>
      <div>
        <Link to="/result">결과보기</Link>
      </div>
    </>
  );
}

export default App;
