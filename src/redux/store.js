import { configureStore } from '@reduxjs/toolkit';
import doctorReducer from './doctors/doctors';

export const store = configureStore({
  reducer: {
    doctors: doctorReducer,
  },
});
