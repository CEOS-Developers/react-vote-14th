import { Route, Routes } from 'react-router';
// import { useLoadingContext } from './contexts/LoadingContext';
import { useAuthContext } from './contexts/AuthContext';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';

import SignIn from './pages/SignIn';
import SignUp from './pages/SignUp';
import Vote from './pages/Vote';

// import { Spinner } from './components/Spinner';
import { useEffect } from 'react';
import NotFound from './pages/NotFound';
import LeaderResult from './pages/LeaderResult';

interface UserData {
  username: string;
  password: string;
  part: string;
}

function App() {
  // const { loading }: any = useLoadingContext();
  const { setIsAuth, setUserData }: any = useAuthContext();

  // redirect
  const navigate = useNavigate();

  // initialize fucntion
  const initializeUserInfo = () => {
    const ud: UserData = JSON.parse(localStorage.getItem('userData') || '{}');
    const token = JSON.stringify(localStorage.getItem('token'));
    if (!ud) return;
    setUserData(ud);
    setIsAuth(true);
    axios.defaults.headers.common['Authorization'] = token;

    console.log(ud);

    if (ud.part === 'BE') {
      navigate(`/vote/backend`);
    } else if (ud.part === 'FE') {
      navigate(`/vote/frontend`);
    }
  };

  //initialize when first mount
  useEffect(() => {
    initializeUserInfo();
    // eslint-disable-next-line
  }, []);

  return (
    <>
      {/* {loading && <Spinner />} */}
      <Routes>
        <Route path="/" element={<SignIn />} />
        <Route path="/signup" element={<SignUp />} />
        <Route path="/vote/:part" element={<Vote />} />
        <Route path="/result" element={<LeaderResult />} />
        <Route path="/*" element={<NotFound />} />
      </Routes>
    </>
  );
}

export default App;
