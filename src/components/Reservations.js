import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getReservations } from '../redux/Reservations/Reservations';
import { getDoctors } from '../redux/doctors/doctors';

const Reservations = () => {
  const dispatch = useDispatch();
  const doctor = useSelector((state) => state.doctor);

  const handleSubmit = (e) => {
    e.preventDefault();
    const city = e.target[0].value;
    const doctor = e.target[1].value;
    const date = e.target[2].value;
    dispatch(getReservations(city, doctor, date));
    e.target[0].value = '';
    e.target[1].value = '';
    e.target[2].value = '';
  };
  useEffect(() => {
    dispatch(getDoctors());
  }, []);
  return (
    <>
      {doctor.data.error && <h1 className="mt-40 text- text-center">{doctor.data.error}</h1>}
      {doctor.data.error === undefined && (
        <div className="reserveBackground ">
          <div className="flex flex-col items-center justify-center flex-grow w-full h-screen px-3 lighter-bg backdrop-blur-sm">
            <div className="mb-3 text-4xl font-bold text-white ">
              <h2 className="text-center">Please Make Your Reservation</h2>
              <hr className="text-3xl " />
            </div>
            <em className="mb-5 text-2xl text-white sm:text-center"> We know your time is important. Book your appointment with certainty today!</em>
            <form onSubmit={(e) => handleSubmit(e)} className="flex flex-col items-center">
              <div className="flex items-center justify-center bg-transparent" style={{ fontFamily: '"Lato", sans-serif' }}>
                <div className="flex flex-col items-center px-4 py-8 form-input xl:flex-row xl:space-x-4">
                  {/* Code block starts */}
                  <div className="flex flex-col">
                    <div className="relative">
                      <div className="absolute flex items-center h-full pl-4 cursor-pointer">
                        <svg xmlns="http://www.w3.org/2000/svg" className="icon icon-tabler icon-tabler-building-community" width={18} height={18} viewBox="0 0 24 24" strokeWidth="1.5" stroke="#fff" fill="none" strokeLinecap="round" strokeLinejoin="round">
                          <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                          <path d="M8 9l5 5v7h-5v-4m0 4h-5v-7l5 -5m1 1v-6a1 1 0 0 1 1 -1h10a1 1 0 0 1 1 1v17h-8" />
                          <line x1="13" y1="7" x2="13" y2="7.01" />
                          <line x1="17" y1="7" x2="17" y2="7.01" />
                          <line x1="17" y1="11" x2="17" y2="11.01" />
                          <line x1="17" y1="15" x2="17" y2="15.01" />
                        </svg>
                      </div>
                      <input type="text" id="city" name="city" className="flex items-center w-64 h-16 pl-16 font-normal text-white bg-green-500 border border-gray-300 rounded-full shadow form-input dark:text-gray-400 focus:outline-none focus:border focus:border-indigo-700 dark:focus:border-indigo-700 dark:border-gray-700 dark:bg-gray-800 text-l placeholder:text-white placeholder:pl-1" placeholder="City" />
                    </div>
                  </div>
                  {/* Code block ends */}
                  {/* Code block starts */}
                  <div className="flex flex-col py-4">
                    <div className="relative">
                      <div className="absolute flex items-center h-full px-4 text-gray-600 border-r cursor-pointer dark:text-gray-400 dark:border-gray-700">
                        <svg xmlns="http://www.w3.org/2000/svg" className="icon icon-tabler icon-tabler-stethoscope" width={18} height={18} viewBox="0 0 24 24" strokeWidth="1.5" stroke="#fff" fill="none" strokeLinecap="round" strokeLinejoin="round">
                          <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                          <path d="M6 4h-1a2 2 0 0 0 -2 2v3.5h0a5.5 5.5 0 0 0 11 0v-3.5a2 2 0 0 0 -2 -2h-1" />
                          <path d="M8 15a6 6 0 1 0 12 0v-3" />
                          <path d="M11 3v2" />
                          <path d="M6 3v2" />
                          <circle cx="20" cy="10" r="2" />
                        </svg>
                      </div>
                      <select id="doctor" name="doctor" className="flex items-center w-64 h-16 pl-16 font-normal text-white bg-green-500 border border-gray-300 rounded-full shadow dark:text-gray-400 focus:outline-none focus:border focus:border-indigo-700 dark:focus:border-indigo-700 dark:border-gray-700 dark:bg-gray-800 text-l">
                        {doctor.data.map((doctor) => (
                          <option key={doctor.id} value={doctor.id}>
                            {doctor.name}
                          </option>
                        ))}
                        ;
                      </select>
                    </div>
                  </div>
                  {/* Code block ends */}
                  {/* Code block starts */}
                  <div className="flex flex-col">
                    <div className="relative">
                      <div className="absolute flex items-center h-full px-4 text-white bg-indigo-700 border-r rounded-l-full cursor-pointer dark:border-gray-700 dark:bg-indigo-600">
                        <svg xmlns="http://www.w3.org/2000/svg" className="icon icon-tabler icon-tabler-calendar-event" width={18} height={18} viewBox="0 0 24 24" strokeWidth="1.5" stroke="#fff" fill="none" strokeLinecap="round" strokeLinejoin="round">
                          <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                          <rect x="4" y="5" width="16" height="16" rx="2" />
                          <line x1="16" y1="3" x2="16" y2="7" />
                          <line x1="8" y1="3" x2="8" y2="7" />
                          <line x1="4" y1="11" x2="20" y2="11" />
                          <rect x="8" y="15" width="2" height="2" />
                        </svg>
                      </div>
                      <input type="date" id="date" name="date" className="flex items-center w-64 h-16 pl-16 pr-2 font-normal text-white bg-green-500 border border-gray-300 rounded-full shadow form-input dark:text-gray-400 focus:outline-none focus:border focus:border-indigo-700 dark:focus:border-indigo-700 dark:border-gray-700 dark:bg-gray-800 text-L" />
                    </div>
                  </div>
                </div>
              </div>
              <div className="flex flex-col items-center justify-center w-48 h-16 text-xl font-normal text-gray-600 bg-white border border-gray-300 rounded-full shadow dark:text-gray-400 focus:outline-none focus:border focus:border-indigo-700 dark:focus:border-indigo-700 dark:border-gray-700 dark:bg-gray-800 hover:text-menu">
                <button type="submit">Submit</button>
              </div>
            </form>
          </div>
        </div>
      )}
      ;
    </>
  );
};

export default Reservations;
