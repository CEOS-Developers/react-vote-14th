import { Route, Routes } from 'react-router';

import SignIn from '../src/pages/SignIn';
import SignUp from '../src/pages/SignUp';
import Vote from '../src/pages/Vote';
import Result from '../src/pages/Result';

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<SignIn />} />
        <Route path="/signup" element={<SignUp />} />
        <Route path="/vote/:part" element={<Vote />} />
        <Route path="/result/:part" element={<Result />} />
      </Routes>
    </>
  );
}

export default App;
