import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { getMyReservations } from '../redux/myReservations/myReservations';
import { getDoctors } from '../redux/doctors/doctors';

const MyReservation = () => {
  const myReservations = useSelector((state) => state.myReservations);
  const doctor = useSelector((state) => state.doctor);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getMyReservations());
    dispatch(getDoctors());
  }, []);

  return (
    <>
      {myReservations.data.error && <h1>{myReservations.data.error}</h1>}
      {myReservations.data.error === undefined && (
        <div>
          {myReservations.data.map((reservation) => (
            <div key={reservation.id}>
              <p>{doctor.data[reservation.doctor_id - 1].name}</p>
              <img src={doctor.data[reservation.doctor_id - 1].photo} alt="doctor" width="120px" />
              <p>{reservation.city}</p>
              <p>{reservation.date}</p>
            </div>
          ))}
        </div>
      )}
    </>
  );
};

export default MyReservation;
