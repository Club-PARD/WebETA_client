import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import CreateRoomPage from "./pages/CreateRoomPage";
import FandomRankingPage from "./pages/FandomRankingPage";
import FandomRoomPage from "./pages/FandomRoomPage";
import HomePage from "./pages/HomePage";
import SignupPage from "./pages/SignupPage";
import LoginPage from "./pages/LoginPage";
import MyPage from "./pages/MyPage";
import React from "react";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/Login" element={<LoginPage />} />
        <Route path="/Signup" element={<SignupPage />} />
        <Route path="/MyPage" element={<MyPage />} />
        <Route path="/MakeRoom" element={<CreateRoomPage />} />
        <Route path="/FandomRoom/:index" element={<FandomRoomPage />} />
        <Route path="/FandomRanking" element={<FandomRankingPage />} />
      </Routes>
    </Router>
  );
}

export default App;
