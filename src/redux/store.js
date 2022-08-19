import { configureStore } from '@reduxjs/toolkit';
import doctorReducer from './doctors/doctors';

const store = configureStore({
  reducer: {
    doctors: doctorReducer,
  },
});

export default store;
