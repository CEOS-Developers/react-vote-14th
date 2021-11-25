import { Routes, Route } from "react-router";
import Signup from "./components/signup/signup.components";
import MainPage from "./components/mainpage/mainpage.components";
import Login from "./components/login/login.components";

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<MainPage />} />
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<Signup />} />
      </Routes>
    </div>
  );
}

export default App;
