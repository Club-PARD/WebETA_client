import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import CreateRoomPage from './pages/CreateRoomPage';
import FandomRankingPage from './pages/FandomRankingPage';
import FandomRoomPage from './pages/FandomRoomPage';
import HomePage from './pages/HomePage';
import SignupPage from './pages/SignupPage';

import React from 'react';

function App() {
  return(

    <Router>
        <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/Signup" element={<SignupPage />} />
            <Route path="/MakeRoom" element={<CreateRoomPage />} />             
            <Route path="/FandomRoom" element={<FandomRoomPage />} />
            <Route path="/FandomRanking" element={<FandomRankingPage />} />
        </Routes>
    </Router>
  );
};

export default App;

