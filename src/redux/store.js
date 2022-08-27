import { configureStore } from '@reduxjs/toolkit';
import thunk from 'redux-thunk';
import logger from 'redux-logger';
import signinReducer from './login/signin';
import signUpReducer from './login/signup';
import doctorReducer from './doctors/doctors';
import myReservationsReducer from './myReservations/myReservations';
import reservationsReducer from './Reservations/Reservations';

const store = configureStore({
  reducer: {
    login: signinReducer,
    signup: signUpReducer,
    doctor: doctorReducer,
    myReservations: myReservationsReducer,
    reservations: reservationsReducer,
  },
  middleware: [thunk, logger],
});

export default store;
