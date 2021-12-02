import React from 'react';
import useUser from './@shared/hooks/useUser';

function App() {
  const { getUser } = useUser();
  const { id } = getUser();

  return <div className="App">{id}님이 로그인했습니다.</div>;
}

export default App;
