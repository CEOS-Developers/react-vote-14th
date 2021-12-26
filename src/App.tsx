import { Routes, Route } from "react-router";
import Signup from "./components/signup/signup.components";
import MainPage from "./components/mainpage/mainpage.components";
import Login from "./components/login/login.components";
import Header from "./header";
import "./App.css";
import Front from "./components/vote/frontend.vote.components";
import Back from "./components/vote/backend.vote.components";
import { useEffect } from "react";
import axios from "axios";

function App() {
  useEffect(() => {
    axios.get(`https://ceos-15th-partzzang`).then((response) => {
      const [name, vote] = [response.name, response.vote_count];
    });
  }, []);

  return (
    <div className="App">
      <Header />
      <div className="Content">
        <Routes>
          <Route path="/" element={<MainPage />} />
          <Route path="/login" element={<Login />} />
          <Route path="/signup" element={<Signup />} />
          <Route path="/frontend" element={<Front />} />
          <Route path="/backend" element={<Back />} />
        </Routes>
      </div>
    </div>
  );
}

export default App;
