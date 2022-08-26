import React from 'react';
import './App.css';
import NavigationReserve from './components/NavigationReserve';
// import Navigation from './components/Navigation';
import Reservations from './components/Reservations';

function App() {
  return (
    <>
      {/* <Navigation /> */}
      <NavigationReserve />
      <Reservations />
    </>
  );
}

export default App;
