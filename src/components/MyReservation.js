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

  const handleDelete = (id) => {
    const params = {
      method: 'DELETE',
      headers: {
        Authorization: localStorage.getItem('token'),
      },
    };
    fetch(`http://localhost:3000/reservations/${id}`, params)
      .then(() => {
        dispatch(getMyReservations());
      })
      .catch((err) => {
        throw new Error(err);
      });
  };

  return (
    <>
      {myReservations.data.error && (
        <div className="w-80 flex justify-center align-center m-auto mt-20">
          <h1 className="font-bold text-2xl">{myReservations.data.error}</h1>
        </div>
      )}

      {myReservations.data.error === undefined && doctor.data.error === undefined && (
        <div className="mt-32 mb-20 flex flex-col items-center justify-center">
          {myReservations.data.map((reservation) => (
            <div key={reservation.id} className="w-11/12 mt-5 flex items-center justify-center ">
              <div className="w-screen flex flex-col sm:flex-row items-center justify-around py-5 bg-white shadow-lg rounded-lg">
                <div className="w-20">
                  <img className="rounded-full" src={doctor.data[reservation.doctor_id - 1].photo} alt="doctor" />
                </div>
                <div className="flex items-center mt-7">
                  <div className>
                    <p className="text-xs text-grey-400 font-bold">Doctor:</p>
                    <p className="mt-2 text-base sm:text-lg md:text-xl 2xl:text-2xl text-grey-400">{doctor.data[reservation.doctor_id - 1].name}</p>
                  </div>
                  <div className="ml-12">
                    <p className="text-xs text-grey-400 font-bold">City:</p>
                    <p className="mt-2 text-base sm:text-lg md:text-xl 2xl:text-2xl text-grey-400">{reservation.city}</p>
                  </div>
                  <div className="ml-12">
                    <p className="text-xs text-grey-400 font-bold">Date:</p>
                    <p className="mt-2 text-base sm:text-lg md:text-xl 2xl:text-2xl text-grey-400">{reservation.date}</p>
                  </div>
                </div>
                <button
                  onClick={() => handleDelete(reservation.id)}
                  type="button"
                  className="bg-transparent border-red-400 hover:bg-red-500 text-grey-700 font-semibold hover:text-white py-2 px-4 m-7 border border-blue
                rounded"
                >
                  Delete
                </button>
              </div>
            </div>
          ))}
        </div>
      )}
    </>
  );
};

export default MyReservation;
