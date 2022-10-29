import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Home from './views/Home'
import Login from "./views/Login";
import Signup from "./views/Signup";
import './App.css';
import FindDetails from './components/FindDetails';


function App() {

  return (
    <div className="App">
      <BrowserRouter>
        <Navbar />
        <div className="">
          <Routes>
          <Route
              path="/"
              element={<Home />}
            />
            <Route
              path="/Login"
              element={<Login />}
            />
            <Route
              path="/Signup"
              element={<Signup />}
            />
          </Routes>
       </div>
      </BrowserRouter>

    <FindDetails />
    </div>
  );
}

export default App;
