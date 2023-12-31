import React from 'react';
import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Register from './components/Register';
import Footer from './components/Footer';
import HomePage from './components/HomePage';
import IssueList from './components/IssueList';
import IssueDetails from './components/IssueDetails';
import CounsellorDashboard from './components/CounsellorDashboard';

const App = () => {
  return (
    <>
    <Router>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route exact path="/register" element={<Register/>} />
        <Route exact path="/issues" element={<IssueList />} />
        <Route exact path="/issue" element={<IssueDetails />} /> {/* /issues/:id */}
        <Route exact path="/dashboard" element={<CounsellorDashboard />} />
      </Routes>
      <Footer />
    </Router>
    </>
  );
};

export default App;
