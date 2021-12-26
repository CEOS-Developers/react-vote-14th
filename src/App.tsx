import { Routes, Route } from "react-router";
import Signup from "./components/signup/signup.components";
import MainPage from "./components/mainpage/mainpage.components";
import Login from "./components/login/login.components";
import Header from "./header";
import "./App.css";
import Front from "./components/vote/frontend.vote.components";
import Back from "./components/vote/backend.vote.components";
import { useEffect, useState } from "react";
import axios from "axios";

function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  return (
    <div className="App">
      <Header isLoggedIn={isLoggedIn} />
      <div className="Content">
        <Routes>
          <Route path="/" element={<MainPage />} />
          <Route path="/login" element={<Login />} />
          <Route path="/signup" element={<Signup />} />
          <Route path="/frontend" element={<Front isLoggedIn={isLoggedIn} />} />
          <Route path="/backend" element={<Back isLoggedIn={isLoggedIn} />} />
        </Routes>
      </div>
    </div>
  );
}

export default App;
