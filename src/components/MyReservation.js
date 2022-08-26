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
        <div className="w-full lg:w-2/3 h-64 dark:bg-gray-800 flex justify-center align-center white">
          <h1>{myReservations.data.error}</h1>
        </div>
      )}

      {myReservations.data.error === undefined && doctor.data.error === undefined && (
        <div>
          {myReservations.data.map((reservation) => (
            <div key={reservation.id} className="w-screen flex items-center justify-center m-5 ">
              <div className="w-full flex items-center justify-around py-5 bg-gradient-to-r from-green-500 to-yellow-700 rounded-lg">
                <img className="rounded-full" src={doctor.data[reservation.doctor_id - 1].photo} alt="doctor" width="100px" height="100px" />
                <div className="flex items-center mt-7">
                  <div className>
                    <p className="text-xs text-gray-300">Doctor</p>
                    <p className="mt-2 text-base sm:text-lg md:text-xl 2xl:text-2xl text-gray-50">{doctor.data[reservation.doctor_id - 1].name}</p>
                  </div>
                  <div className="ml-12">
                    <p className="text-xs text-gray-300">City:</p>
                    <p className="mt-2 text-base sm:text-lg md:text-xl 2xl:text-2xl text-gray-50">{reservation.city}</p>
                  </div>
                  <div className="ml-12">
                    <p className="text-xs text-gray-300">Date</p>
                    <p className="mt-2 text-base sm:text-lg md:text-xl 2xl:text-2xl text-gray-50">{reservation.date}</p>
                  </div>
                </div>
                <button
                  onClick={() => handleDelete(reservation.id)}
                  type="button"
                  className="bg-transparent hover:bg-red-500 text-grey-700 font-semibold hover:text-white py-2 px-4 border border-blue
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
