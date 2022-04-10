import React from 'react';
import Navbar from './components/Navbar';
// npm install react-router-dom@6
import {BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './styles/App.css';
import Home from './pages/Home';
import Admin from './pages/Admin';
import Contact from './pages/Contact';

function App() {
  return (
    <>
    <Router basename='/euMts.github.io'> {/* change to '/repo_name' OR just a '/' */}
      <Navbar />
      <Routes>
        <Route path={'/'} element={<Home />} />
        <Route path={'/admin'} element={<Admin />} />
        <Route path={'/contact'} element={<Contact />} />
      </Routes>
    </Router>
    </>
  );
}

export default App;
