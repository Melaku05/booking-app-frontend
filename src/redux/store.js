import { configureStore } from '@reduxjs/toolkit';
import thunk from 'redux-thunk';
import logger from 'redux-logger';
import signinReducer from './login/signin';
import doctorReducer from './doctors/doctors';
import myReservationsReducer from './myReservations/myReservations';
import reservationsReducer from './Reservations/Reservations';

const store = configureStore({
  reducer: {
    login: signinReducer,
    doctor: doctorReducer,
    myReservations: myReservationsReducer,
    reservations: reservationsReducer,
  },
  middleware: [thunk, logger],
});

export default store;
