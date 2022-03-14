import React from 'react';
import Navbar from './components/Navbar';
// npm install react-router-dom@5.2.0
import {BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import './App.css';
import Home from './components/pages/Home';
import Admin from './components/pages/Admin';
import Contact from './components/pages/Contact';

function App() {
  return (
    <>
    <Router>
      <Navbar />
      <Switch>
        <Route path='/business-website' exact component={Home} />
        <Route path='/business-website/admin' component={Admin} />
        <Route path='/business-website/contact' component={Contact} />
      </Switch>
    </Router>
    </>
  );
}

export default App;
