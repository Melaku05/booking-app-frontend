import React, { useEffect } from 'react';
import { useParams, Link } from 'react-router-dom';
import { BiLeftArrow } from 'react-icons/bi';
import { useDispatch, useSelector } from 'react-redux';
import { getDoctors } from '../redux/doctors/doctors';

const Details = () => {
  const doctor = useSelector((state) => state.doctor);
  const dispatch = useDispatch();
  const { id } = useParams();

  useEffect(() => {
    dispatch(getDoctors());
  }, []);

  return (
    <>
      {doctor.data.error && (
        <div className="flex justify-center m-auto mt-20 w-80 align-center">
          <h1 className="text-2xl font-black m-0 py-3 mt-20 leading-4 uppercase ">{doctor.data.error}</h1>
        </div>
      )}
      {doctor.data.error === undefined && (
        <div className="grid grid-flow-row">
          <div className="lg:grid lg:grid-cols-3  flex flex-col gap-2 mt-20  ">
            <div className="lg:col-span-2 marker:pl-20 mt-14 lg:mt-0 items-center flex justify-center ">
              <img src={doctor.data.find((doctor) => doctor.id === Number(id)).photo} alt={doctor.name} className="rounded shadow-lg w-2/3  " />
            </div>

            <div className="flex flex-col col-span-1">
              <div className="my-8">
                <div className="w-full text-center uppercase font-bold text-2xl ">
                  <h3>{doctor.data.find((doctor) => doctor.id === Number(id)).name}</h3>
                </div>
                <div className="w-full text-center my-2 px-14">
                  <p>{doctor.data.find((doctor) => doctor.id === Number(id)).detail}</p>
                </div>
              </div>
              <div className="flex flex-col">
                <div className="overflow-x-auto sm:-mx-6 lg:mx-8">
                  <div className="py-2 inline-block min-w-full sm:px-6 lg:px-8">
                    <div className="overflow-hidden">
                      <table className="min-w-full p-4">
                        <tr className="w-full px-6 bg-gray-100 border-b">
                          <td className="text-sm font-medium text-gray-900 px-6 py-4 text-left">City</td>
                          <td className="text-sm font-medium text-gray-900 px-6 py-4 text-left">{doctor.data.find((doctor) => doctor.id === Number(id)).city}</td>
                        </tr>
                        <tr className="w-full bg-gb-white border-b">
                          <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">Specialization</td>
                          <td className="text-sm text-gray-900 font-light px-6 py-4 whitespace-nowrap">{doctor.data.find((doctor) => doctor.id === Number(id)).specialization}</td>
                        </tr>
                        <tr className="w-full bg-gray-100 border-b">
                          <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900"> Fee</td>
                          <td className="">{doctor.data.find((doctor) => doctor.id === Number(id)).fee}</td>
                        </tr>
                      </table>
                    </div>
                  </div>
                </div>
              </div>
              <div className="w-full flex justify-center mt-6 ">
                <Link to="/reservations" className="py-2.5 px-8 text-sm font-medium text-gray-900 focus:outline-none bg-transparent rounded-full border border-menu hover:bg-menu hover:text-black focus:z-10 focus:ring-4 focus:ring-gray-200 dark:focus:ring-gray-700 dark:bg-gray-800 dark:text-gray-400 dark:border-gray-600 dark:hover:text-white dark:hover:bg-gray-700">
                  Reserve
                  {' '}
                </Link>
              </div>
            </div>
          </div>
          <div className="rounded-r-full mt-20 w-24 border-2 border-menu flex justify-center hover:bg-menu ">
            <Link to="/home" className=" py-2.5 px-5 mr-2  text-sm font-medium text-gray-900 focus:outline-none bg-transparent  ">
              <BiLeftArrow className="" />
            </Link>
          </div>
        </div>
      )}
    </>
  );
};

export default Details;
