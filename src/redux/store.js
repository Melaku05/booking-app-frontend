import { configureStore } from '@reduxjs/toolkit';
import thunk from 'redux-thunk';
import logger from 'redux-logger';
import signinReducer from './login/signin';
import signUpReducer from './login/signup';
import doctorReducer from './doctors/doctors';

const store = configureStore({
  reducer: {
    login: signinReducer,
    signup: signUpReducer,
    doctor: doctorReducer,
  },
  middleware: [thunk, logger],
});

export default store;
