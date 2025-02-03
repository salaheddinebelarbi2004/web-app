// App.js
import React from 'react';
import './index.css'; 

import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import AuthPage from './AuthPage';
import UserPage from './UserPage';
import About from './about';
import Team from './team';
import Dashboard from './dashboard';
import History from './history';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<AuthPage />} />
        <Route path="/home/:userId" element={<UserPage />}>
          <Route path="dashboard/:table" element={<Dashboard />} />
        </Route>
        <Route path="/about" element={<About />} /> 
        <Route path="/team" element={<Team />} /> 
        <Route path="/history" element={<History />} /> 
      </Routes>
    </Router>
  );
}

export default App;
