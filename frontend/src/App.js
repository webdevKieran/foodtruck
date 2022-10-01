import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import LoadMap from './components/LoadMap';
import Navbar from './components/Navbar';
import Home from './views/Home'
import './App.css';


function App() {


  return (
    <div className="App">
      <Router>
        <Navbar />
        <Routes>
          routes go here
        </Routes>
      </Router>
      <LoadMap />
      <Home />
    </div>
  );
}

export default App;
