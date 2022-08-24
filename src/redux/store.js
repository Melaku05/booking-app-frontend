import { configureStore } from '@reduxjs/toolkit';
import loginReducer from './login/signin';
import doctorReducer from './doctors/doctors';
import thunk from 'redux-thunk';
import logger from 'redux-logger';

const store = configureStore({
  reducer: {
    login: loginReducer,
    doctor: doctorReducer,
  },
  middleware: [thunk, logger],
});

export default store;
