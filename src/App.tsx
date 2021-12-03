import { Route, Routes } from 'react-router';
import { useLoadingContext } from './contexts/LoadingContext';
import { useAuthContext } from './contexts/AuthContext';
import axios from 'axios';

import SignIn from './pages/SignIn';
import SignUp from './pages/SignUp';
import Vote from './pages/Vote';
import Result from './pages/Result';

import { Spinner } from './components/Spinner';
import { useEffect } from 'react';

function App() {
  const { loading }: any = useLoadingContext();
  const { setIsAuth, setUserData }: any = useAuthContext();

  // initialize fucntion
  const initializeUserInfo = () => {
    const ud = JSON.stringify(localStorage.getItem('userData'));
    const token = JSON.stringify(localStorage.getItem('token'));
    if (!ud) return;
    setUserData(ud);
    setIsAuth(true);
    axios.defaults.headers.common['Authorization'] = token;
  };

  //initialize when first mount
  useEffect(() => {
    initializeUserInfo();
  }, []);

  return (
    <>
      {loading ? <Spinner /> : null}
      <Routes>
        <Route path="/" element={<SignIn />} />
        <Route path="/signup" element={<SignUp />} />
        <Route path="/vote/:part" element={<Vote />} />
        <Route path="/result" element={<Result />} />
      </Routes>
    </>
  );
}

export default App;
