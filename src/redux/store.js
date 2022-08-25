import { configureStore } from '@reduxjs/toolkit';
import signinReducer from './login/signin';
import signUpReducer from './login/signup';
import doctorReducer from './doctors/doctors';
import thunk from 'redux-thunk';
import logger from 'redux-logger';

const store = configureStore({
  reducer: {
    login: signinReducer,
    signup: signUpReducer,
    doctor: doctorReducer,
  },
  middleware: [thunk, logger],
});

export default store;
