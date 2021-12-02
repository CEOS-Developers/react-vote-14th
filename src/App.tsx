import { Route, Routes } from 'react-router';
// import { useLoadingContext } from './contexts/LoadingContext';

import SignIn from '../src/pages/SignIn';
import SignUp from '../src/pages/SignUp';
import Vote from '../src/pages/Vote';
import Result from '../src/pages/Result';

// import { Spinner } from './components/Spinner';

function App() {
  // const { loading, setLoading }: any = useLoadingContext();
  return (
    <Routes>
      {/* {loading ? <Spinner /> : null} */}
      <Route path="/" element={<SignIn />} />
      <Route path="/signup" element={<SignUp />} />
      <Route path="/vote/:part" element={<Vote />} />
      <Route path="/result" element={<Result />} />
    </Routes>
  );
}

export default App;
