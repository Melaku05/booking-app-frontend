import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { Link } from 'react-router-dom';
import { getDoctors } from '../redux/doctors/doctors';
import insta from '../assets/images/insta.png';
import fb from '../assets/images/fb.png';
import twitter from '../assets/images/twitter.png';

const Home = () => {
  const doctor = useSelector((state) => state.doctor);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getDoctors());
  }, []);

  const social = [
    { icon: fb },
    { icon: twitter },
    { icon: insta },
  ];

  return (
    <>
      <div className="flex flex-col items-center justify-center w-full p-6 lg:pl-0">
        <div className="text-center mt-20 xl:mt-2">
          <h1 className="text-2xl font-black m-0 py-3 leading-4">AVAILABLE DOCTORS</h1>
          <p className="text-gray-400 m-0 py-1 leading-3">Please select a doctor</p>
        </div>
        <hr className="border-t-2 border-dashed border-gray-200 w-48 m-0 xl:my-4 invisible xl:visible" />

        {doctor.data.error && <h1>{doctor.data.error}</h1>}
        {doctor.data.error === undefined && (
        <div className="m-0 p-0 lg:grid lg:grid-cols-3 lg:gap-4 flex flex-col items-center lg:items-start justify-center w-full">
          {doctor.data.map((doc) => (
            <Link to={`/details/${doc.id}`} type="button" key={doc.id}>
              <div className="border col-auto rounded shadow-lg px-4 mb-6 flex flex-col items-center justify-center mobileWidth mobilePadding mx-auto" key={doc.id}>
                <img src={doc.photo} alt={doc.name} className="w-60 h-60 rounded-full p-1 my-1 bg-slate-100 border-slate-700" />
                <h2 className="uppercase font-bold my-1">{doc.name}</h2>
                <hr className="border-t-2 border-dashed border-gray-200 w-48 my-2" />
                <p className="text-gray-400 text-center my-2 w-full">{doc.detail}</p>
                <div className="flex items-center justify-center w-full">
                  {social.map((item) => (
                    <a href="/home" key={item.icon}><img src={item.icon} alt="social" className="w-9 mx-4 my-4" /></a>
                  ))}
                </div>
              </div>
            </Link>
          ))}
        </div>
        )}
      </div>
    </>
  );
};

export default Home;
