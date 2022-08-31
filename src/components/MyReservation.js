import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { getMyReservations } from '../redux/myReservations/myReservations';
import { getDoctors } from '../redux/doctors/doctors';
import url from '../helpers/ApiUrl';

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
    fetch(`${url}reservations/${id}`, params)
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
        <div className="flex justify-center m-auto mt-20 w-80 align-center">
          <h1 className="text-2xl font-black m-0 py-3 mt-20 leading-4 uppercase ">{myReservations.data.error}</h1>
        </div>
      )}

      {myReservations.data.error === undefined && doctor.data.error === undefined && (
        <div className="flex flex-col items-center justify-center mt-32 mb-20">
          <h1 className="text-2xl font-black m-0 py-3 leading-4">ALL RESERVATIONS</h1>
          {myReservations.data.map((reservation) => (
            <div key={reservation.id} className="flex items-center justify-center w-11/12 mt-5 ">
              <div className="flex flex-col items-center justify-around w-screen py-5 bg-white rounded-lg shadow-lg sm:flex-row">
                <div className="w-20">
                  <img className="rounded-full" src={doctor.data.find((doctor) => doctor.id === reservation.doctor_id).photo} alt="doctor" />
                </div>
                <div className="flex items-center mt-7">
                  <div className>
                    <p className="text-xs font-bold text-grey-400">Doctor:</p>
                    <p className="mt-2 text-base sm:text-lg md:text-xl 2xl:text-2xl text-grey-400">{doctor.data.find((doctor) => doctor.id === reservation.doctor_id).name}</p>
                  </div>
                  <div className="ml-12">
                    <p className="text-xs font-bold text-grey-400">City:</p>
                    <p className="mt-2 text-base sm:text-lg md:text-xl 2xl:text-2xl text-grey-400">{reservation.city}</p>
                  </div>
                  <div className="ml-12">
                    <p className="text-xs font-bold text-grey-400">Date:</p>
                    <p className="mt-2 text-base sm:text-lg md:text-xl 2xl:text-2xl text-grey-400">{reservation.date}</p>
                  </div>
                </div>
                <button onClick={() => handleDelete(reservation.id)} type="button" className="px-4 py-2 font-semibold bg-transparent border border-red-400 rounded hover:bg-red-500 text-grey-700 hover:text-white m-7 border-blue">
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
