// App.js
import React from 'react';
import './index.css'; 

import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import AuthPage from './AuthPage';
import Navbar from './navbar';
import User1Page from './User1Page';
import User2Page from './User2Page';
import User3Page from './User3Page';
import About from './about';
import Team from './team';
import Dashboard from './dashboard';
import History from './history';
function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<AuthPage />} />
        <Route path="/navbar" element={<Navbar />} />
         <Route path="/user1" element={<User1Page />} />
        <Route path="/user2" element={<User2Page />} />
        <Route path="/user3" element={<User3Page />} /> 
        <Route path="/about" element={<About />} /> 
        <Route path="/dashboard" element={<Dashboard />} /> 
        <Route path="/team" element={<Team />} /> 
        <Route path="/history" element={<History />} /> 
      </Routes>
    </Router>
  );
}

export default App;
