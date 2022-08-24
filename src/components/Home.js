import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { getDoctors } from '../redux/doctors/doctors';

const Home = () => {
  const doctor = useSelector((state) => state.doctor);
  const dispatch = useDispatch();

  return (
    <div>
      <button type="submite" onClick={() => dispatch(getDoctors())}>Get Doctors</button>  
      {doctor.error && <div>{doctor.error}</div>}
      
    </div>
  );
};

export default Home;
