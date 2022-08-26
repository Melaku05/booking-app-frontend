import React, { useState } from 'react';
/* Install pure-react-carousel using -> npm i pure-react-carousel */
import { Link, useNavigate } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { signOut } from '../redux/login/signout';

const Navigation = () => {
  const current = new Date();
  const date = `${current.getDate()}/${current.getMonth() + 1}/${current.getFullYear()}`;
  const [show, setShow] = useState(false);
  const dispatch = useDispatch();

  const userInfo = JSON.parse(localStorage.getItem('user'));
  const navigate = useNavigate();
  const handleSignOut = () => {
    dispatch(signOut());
    navigate('/');
  };

  return (
    <div>
      <div className="fixed flex items-center justify-between w-full p-6 border border-transparent rounded shadow sm:z-10 bg-navbar xl:hidden sm:border-gray-200 ">
        <Link to="/home" type="button" className="flex items-center justify-between space-x-3 text-white hover:text-doctor focus:outline-none focus:text-indigo-200">
          <span className="flex items-center justify-between text-2xl leading-6 text-menu">
            Booking
            <svg xmlns="http://www.w3.org/2000/svg" className="icon icon-tabler icon-tabler-vaccine text-doctor" width="44" height="44" viewBox="0 0 24 24" strokeWidth="1.5" stroke="#7bc62d" fill="orange" strokeLinecap="round" strokeLinejoin="round">
              <path stroke="none" d="M0 0h24v24H0z" fill="none" />
              <path d="M17 3l4 4" />
              <path d="M19 5l-4.5 4.5" />
              <path d="M11.5 6.5l6 6" />
              <path d="M16.5 11.5l-6.5 6.5h-4v-4l6.5 -6.5" />
              <path d="M7.5 12.5l1.5 1.5" />
              <path d="M10.5 9.5l1.5 1.5" />
              <path d="M3 21l3 -3" />
            </svg>
            App
          </span>
        </Link>
        <div aria-label="toggler" className="flex items-center justify-center">
          <button type="button" id="open" aria-label="open" onClick={() => setShow(!show)} className={`${show ? 'hidden' : ''} focus:outline-none focus:ring-2 `}>
            <svg className="text-doctor" width={24} height={24} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M4 6H20" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
              <path d="M4 12H20" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
              <path d="M4 18H20" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
          </button>
          <button type="button" id="close" aria-label="close" onClick={() => setShow(!show)} className={`${show ? '' : 'hidden'} focus:outline-none focus:ring-2  `}>
            <svg className="text-indigo-200" width={24} height={24} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M18 6L6 18" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
              <path d="M6 6L18 18" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
          </button>
        </div>
      </div>

      <div id="Main" className={`${show ? 'translate-x-0' : '-translate-x-full'} mt-24 xl:mt-0 bg-navbar border  xl:translate-x-0 shadow xl:rounded fixed h-full top-22 sm:z-20 bg-white transform  ease-in-out xl:ease-linear  transition duration-500 flex justify-start items-start w-full xl:w-64 flex-col `}>
        <Link to="/home" type="button" className="flex items-center justify-start hidden w-full p-6 space-x-3 text-white focus:outline-none hover:text-indigo-200 focus:text-indigo-200 xl:block">
          <span className="flex items-center text-xl leading-6 text-menu xl:text-2xl">
            Booking
            <svg xmlns="http://www.w3.org/2000/svg" className="icon icon-tabler icon-tabler-vaccine text-doctor" width="44" height="44" viewBox="0 0 24 24" strokeWidth="1.5" stroke="#7bc62d" fill="orange" strokeLinecap="round" strokeLinejoin="round">
              <path stroke="none" d="M0 0h24v24H0z" fill="none" />
              <path d="M17 3l4 4" />
              <path d="M19 5l-4.5 4.5" />
              <path d="M11.5 6.5l6 6" />
              <path d="M16.5 11.5l-6.5 6.5h-4v-4l6.5 -6.5" />
              <path d="M7.5 12.5l1.5 1.5" />
              <path d="M10.5 9.5l1.5 1.5" />
              <path d="M3 21l3 -3" />
            </svg>
            App
          </span>
        </Link>
        <div className="flex flex-col items-center justify-start w-full px-4 px-6 mt-4 ">
          <Link to="/home" type="button" className="flex items-center w-full py-3 space-x-6 font-bold text-black rounded focus:outline-none focus:bg-menu jusitfy-start hover:bg-menu ">
            <svg xmlns="http://www.w3.org/2000/svg" className="icon icon-tabler icon-tabler-building-hospital" width={24} height={24} viewBox="0 0 24 24" strokeWidth="1.5" stroke="#000000" fill="none" strokeLinecap="round" strokeLinejoin="round">
              <path stroke="none" d="M0 0h24v24H0z" fill="none" />
              <line x1="3" y1="21" x2="21" y2="21" />
              <path d="M5 21v-16a2 2 0 0 1 2 -2h10a2 2 0 0 1 2 2v16" />
              <path d="M9 21v-4a2 2 0 0 1 2 -2h2a2 2 0 0 1 2 2v4" />
              <line x1="10" y1="9" x2="14" y2="9" />
              <line x1="12" y1="7" x2="12" y2="11" />
            </svg>
            <p className="font-bold leading-4 text-black border-b border-transparent hover:border-doctor focus:border-doctor">DOCTORS</p>
          </Link>
          <Link to="/reservations" type="button" className="flex items-center w-full py-3 space-x-6 font-bold text-black rounded focus:outline-none focus:bg-menu jusitfy-start hover:bg-menu ">
            <svg xmlns="http://www.w3.org/2000/svg" className="icon icon-tabler icon-tabler-calendar-time" width={24} height={24} viewBox="0 0 24 24" strokeWidth="1.5" stroke="#000000" fill="none" strokeLinecap="round" strokeLinejoin="round">
              <path stroke="none" d="M0 0h24v24H0z" fill="none" />
              <path d="M11.795 21h-6.795a2 2 0 0 1 -2 -2v-12a2 2 0 0 1 2 -2h12a2 2 0 0 1 2 2v4" />
              <circle cx="18" cy="18" r="4" />
              <path d="M15 3v4" />
              <path d="M7 3v4" />
              <path d="M3 11h16" />
              <path d="M18 16.496v1.504l1 1" />
            </svg>
            <p className="font-bold leading-4 text-black border-b border-transparent hover:border-doctor focus:border-white ">RESERVE</p>
          </Link>
          <Link to="/myreservation" type="button" className="flex items-center w-full py-3 space-x-6 font-bold text-black rounded focus:outline-none focus:bg-menu jusitfy-start hover:bg-menu ">
            <svg xmlns="http://www.w3.org/2000/svg" className="icon icon-tabler icon-tabler-checks" width={24} height={24} viewBox="0 0 24 24" strokeWidth="1.5" stroke="#000000" fill="none" strokeLinecap="round" strokeLinejoin="round">
              <path stroke="none" d="M0 0h24v24H0z" fill="none" />
              <path d="M7 12l5 5l10 -10" />
              <path d="M2 12l5 5m5 -5l5 -5" />
            </svg>
            <p className="font-bold leading-4 text-black border-b border-transparent hover:border-doctor focus:border-white ">MY RESERVATIONS</p>
          </Link>
          <button onClick={() => handleSignOut()} type="button" className="flex items-center justify-start w-full py-3 space-x-6 font-bold text-red-500 rounded focus:outline-none focus:text-700 hover:text-red-600 ">
            <svg width={24} height={24} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M14 8V6C14 5.46957 13.7893 4.96086 13.4142 4.58579C13.0391 4.21071 12.5304 4 12 4H5C4.46957 4 3.96086 4.21071 3.58579 4.58579C3.21071 4.96086 3 5.46957 3 6V18C3 18.5304 3.21071 19.0391 3.58579 19.4142C3.96086 19.7893 4.46957 20 5 20H12C12.5304 20 13.0391 19.7893 13.4142 19.4142C13.7893 19.0391 14 18.5304 14 18V16" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
              <path d="M7 12H21M21 12L18 9M21 12L18 15" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
            <p className="leading-4 border-b border-transparent text-danger">Logout</p>
          </button>
          <div className="flex flex-col items-start w-full p-4 mt-3 rounded shadow bg-doctor jusitfy-start">
            <p className="text-base font-bold leading-none text-black">Booking Capacity</p>
            <p className="mt-3 text-xs leading-4 text-black">
              Total slots booked as of
              <br />
              <span className="text-base font-bold text-red-500">{date}</span>
            </p>
            <div className="flex justify-end items-end text-right w-full mt-2.5">
              <p className="text-base leading-4 text-white">80%</p>
            </div>
            <div className="flex justify-start w-full items-start mt-2.5">
              <div className="w-10/12 h-0.5 bg-white rounded-full" />
              <div className="w-4/12 h-0.5 bg-orange-200  rounded-full" />
            </div>
          </div>
        </div>
        <div className="flex items-center justify-start pt-6 pb-8 mx-6 space-x-2 ">
          <div>
            <img src="https://i.ibb.co/54vKnF3/Ellipse-3.png" alt="avatar" />
          </div>
          <div className="flex flex-col items-start space-y-1 jusitfy-start">
            <p className="text-base leading-4 text-white cursor-pointer">Test Patient</p>
            <p className="text-xs leading-3 text-orange-200 cursor-pointer">{userInfo.user.username}</p>
            <p className="text-xs leading-3 text-orange-200 cursor-pointer">{userInfo.user.email}</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navigation;
