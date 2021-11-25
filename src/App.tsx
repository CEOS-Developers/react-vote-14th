import { Routes, Route } from "react-router";
import Signup from "./components/signup/signup.components";
import MainPage from "./components/mainpage/mainpage.components";
import Login from "./components/login/login.components";
import Header from "./header";
import "./App.css";

function App() {
  return (
    <div className="App">
      <div className="Header">
        <Header />
      </div>
      <div className="Content">
        <Routes>
          <Route path="/" element={<MainPage />} />
          <Route path="/login" element={<Login />} />
          <Route path="/signup" element={<Signup />} />
        </Routes>
      </div>
    </div>
  );
}

export default App;
