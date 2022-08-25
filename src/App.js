import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from './components/Home';
import Reservations from './components/Reservations'
import MyReservation from './components/MyReservation'
import Details from './components/Details';

import Login from './components/Login';
import Signup from './components/Signup';
import './App.css';

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/reservations" element={<Reservations />} />
          <Route path="/myreservation" element={<MyReservation />} />
          <Route path="/details" element={<Details />} />
          <Route path="/signup" element={<Signup />} />
          <Route path="/login" element={<Login />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
