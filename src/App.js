import { Route, Routes } from 'react-router';
import { useLoadingContext } from './contexts/LoadingContext';

import SignIn from './pages/SignIn';
import SignUp from './pages/SignUp';
import Vote from './pages/Vote';
import Result from './pages/Result';

import { Spinner } from './components/Spinner';

function App() {
  const { loading, setLoading } = useLoadingContext();
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
