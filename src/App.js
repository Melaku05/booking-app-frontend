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
import LoginRoutes from './helpers/LoginRoutes';

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route element={<LoginRoutes />}>
            <Route exact path="/" element={<Login />} />
            <Route exact path="/signup" element={<Signup />} />
          </Route>
          <Route element={<ProtectedRoutes />}>
            <Route exact path="/home" element={<Home />} />
            <Route exact path="/reservations" element={<Reservations />} />
            <Route exact path="/myreservation" element={<MyReservation />} />
            <Route exact path="/details/:id" element={<Details />} />
          </Route>
          <Route path="*" element={<h1 className="font-bold text-2xl text-center mt-20">404 Page Not Found</h1>} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;