import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from './components/Home';
import Reservations from './components/Reservations';
import MyReservation from './components/MyReservation';
import Details from './components/Details';

import Login from './components/Login';
import Signup from './components/Signup';
import './App.css';

import ProtectedRoutes from './helpers/ProtectedRoutes';

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route exact path="/" element={<Login />} />
          <Route element={<ProtectedRoutes />}>
            <Route exact path="/home" element={<Home />} />
            <Route exact path="/reservations" element={<Reservations />} />
            <Route exact path="/myreservation" element={<MyReservation />} />
            <Route exact path="/details" element={<Details />} />
          </Route>
          <Route exact path="/signup" element={<Signup />} />
          <Route path="*" element={<h1 style={{ textAlign: 'center' }}>404 Page Not Found</h1>} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
