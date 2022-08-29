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
      <div className="fixed top-0 flex items-center justify-between w-full p-6 border rounded shadow-lg sm:z-10 bg-navbar xl:hidden sm:border-gray-200 ">
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

      <div id="Main" className={`${show ? 'translate-x-0' : '-translate-x-full'} mt-24 xl:mt-0 bg-navbar border  xl:translate-x-0 shadow xl:rounded fixed top-0 h-full top-22 sm:z-20 bg-white transform  ease-in-out xl:ease-linear  transition duration-500 flex justify-between items-start w-full xl:w-64 flex-col `}>
        <div>
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
          <div className="flex flex-col items-center justify-start w-full px-6 mt-4 ">
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
        </div>
        <div className="flex flex-col items-start justify-start w-full pb-32 space-x-2 xl:pb-10 ">
          <div className="flex items-center justify-start py-4 mx-6 space-x-2 ">
            <div>
              <img src="https://i.ibb.co/54vKnF3/Ellipse-3.png" alt="avatar" />
            </div>
            <div className="flex flex-col items-start space-y-1 jusitfy-start">
              <p className="text-base font-bold leading-3 text-gray-500 capitalize cursor-pointer">{userInfo.user.username}</p>
            </div>
          </div>

          <div className="flex items-start justify-start w-full px-6 space-x-6 md:justify-end md:w-auto md:items-center ">
            <button type="button" className="w-6 text-black hover:text-gray-200">
              <svg width={24} height={24} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path
                  d="M23.25 5.13282C22.406 5.49955 21.513 5.74116 20.5992 5.85001C21.5595 5.28769 22.2817 4.39434 22.6303 3.33751C21.7224 3.86841 20.7307 4.24092 19.6978 4.43907C19.2629 3.98322 18.7397 3.62059 18.1603 3.3732C17.5808 3.12581 16.9571 2.99884 16.327 3.00001C13.7761 3.00001 11.7117 5.03438 11.7117 7.5422C11.7099 7.89102 11.7499 8.23881 11.8308 8.57813C10.0016 8.49238 8.2104 8.02575 6.57187 7.2081C4.93333 6.39044 3.48351 5.23977 2.31516 3.8297C1.90527 4.52069 1.6885 5.30909 1.6875 6.11251C1.6875 7.68751 2.50922 9.0797 3.75 9.89532C3.01487 9.87787 2.29481 9.68331 1.65094 9.32813V9.38438C1.65094 11.5875 3.24469 13.4203 5.35406 13.8375C4.9574 13.9433 4.54864 13.9968 4.13812 13.9969C3.84683 13.9974 3.5562 13.9691 3.27047 13.9125C3.85687 15.7172 5.56359 17.0297 7.58531 17.0672C5.94252 18.3333 3.9256 19.0175 1.85156 19.0125C1.48341 19.012 1.11561 18.99 0.75 18.9469C2.85993 20.2942 5.31255 21.0068 7.81594 21C16.3172 21 20.9616 14.0766 20.9616 8.07188C20.9616 7.87501 20.9564 7.67813 20.947 7.48595C21.8485 6.84472 22.6283 6.04787 23.25 5.13282V5.13282Z"
                  fill="currentColor"
                />
              </svg>
            </button>
            <button type="button" className="w-6 text-black hover:text-gray-200">
              <svg width={24} height={24} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path fillRule="evenodd" clipRule="evenodd" d="M22.5 12.0645C22.5 6.26602 17.7984 1.56445 12 1.56445C6.20156 1.56445 1.5 6.26602 1.5 12.0645C1.5 17.3051 5.33906 21.649 10.3594 22.4374V15.1005H7.69266V12.0645H10.3594V9.75117C10.3594 7.12008 11.9273 5.66555 14.3255 5.66555C15.4744 5.66555 16.6763 5.87086 16.6763 5.87086V8.45508H15.3516C14.048 8.45508 13.6402 9.26414 13.6402 10.0957V12.0645H16.552L16.087 15.1005H13.6406V22.4384C18.6609 21.6504 22.5 17.3065 22.5 12.0645Z" fill="currentColor" />
              </svg>
            </button>
            <button type="button" className="w-6 text-black hover:text-gray-200">
              <svg width={24} height={24} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path
                  d="M12 1.5C6.20297 1.5 1.5 6.20297 1.5 12C1.5 17.797 6.20297 22.5 12 22.5C17.797 22.5 22.5 17.8022 22.5 12C22.5 6.19781 17.797 1.5 12 1.5ZM18.6666 6.33984C19.8815 7.76805 20.6046 9.54925 20.7291 11.4202C18.8367 11.3217 16.5727 11.3217 14.7572 11.4914C14.5275 10.9116 14.2922 10.343 14.0353 9.79594C16.1288 8.88844 17.7422 7.69594 18.6666 6.33984ZM12 3.24984C14.0395 3.24634 16.0156 3.95866 17.5837 5.26266C16.6322 6.46547 15.1392 7.51266 13.2797 8.30297C12.2625 6.42188 11.092 4.80328 9.84375 3.52875C10.5482 3.3469 11.2725 3.25322 12 3.24984V3.24984ZM8.04047 4.20703C9.30375 5.46469 10.4906 7.06641 11.5298 8.94141C9.55547 9.54469 7.29141 9.89062 4.875 9.89062C4.41562 9.89062 3.9675 9.87422 3.52453 9.84656C3.83266 8.63935 4.3949 7.5118 5.17367 6.53927C5.95244 5.56673 6.92981 4.77161 8.04047 4.20703V4.20703ZM3.26625 11.5842C3.76406 11.6063 4.26703 11.617 4.77562 11.6119C7.53187 11.5791 10.0969 11.1469 12.3009 10.44C12.5088 10.8722 12.7056 11.3152 12.8916 11.7689C12.6252 11.8272 12.3637 11.9056 12.1092 12.0033C9.09609 13.2689 6.72281 15.3084 5.4375 17.775C4.02813 16.1814 3.25007 14.1274 3.24984 12C3.24984 11.8594 3.25547 11.7211 3.26625 11.5842ZM12 20.7502C10.056 20.7525 8.16724 20.1036 6.63516 18.907C7.8 16.5994 9.87797 14.6883 12.4978 13.5037C12.7439 13.3889 13.072 13.2961 13.4494 13.2141C13.7619 14.0778 14.0408 14.9747 14.2861 15.9047C14.6525 17.3083 14.9223 18.7354 15.0938 20.1759C14.1061 20.5543 13.0576 20.7489 12 20.7502V20.7502ZM16.7306 19.3556C16.5595 17.9001 16.2871 16.4584 15.9155 15.0408C15.728 14.3297 15.5166 13.6406 15.2869 12.968C17.0039 12.8273 19.0603 12.8475 20.6953 12.968C20.5512 14.2606 20.1206 15.5047 19.4347 16.6097C18.7488 17.7148 17.825 18.6529 16.7306 19.3556V19.3556Z"
                  fill="currentColor"
                />
              </svg>
            </button>
            <button type="button" className="w-6 text-black hover:text-gray-200">
              <svg width={24} height={24} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path
                  d="M12 1.5C6.20156 1.5 1.5 6.32344 1.5 12.2672C1.5 17.025 4.50937 21.0562 8.68125 22.4812C8.73977 22.494 8.79949 22.5002 8.85938 22.5C9.24844 22.5 9.39844 22.2141 9.39844 21.9656C9.39844 21.7078 9.38906 21.0328 9.38437 20.1328C9.03705 20.2142 8.68173 20.2567 8.325 20.2594C6.30469 20.2594 5.84531 18.6891 5.84531 18.6891C5.36719 17.4469 4.67813 17.1141 4.67813 17.1141C3.76406 16.4719 4.67344 16.4531 4.74375 16.4531H4.74844C5.80313 16.5469 6.35625 17.5687 6.35625 17.5687C6.88125 18.4875 7.58437 18.7453 8.2125 18.7453C8.62783 18.737 9.03673 18.6412 9.4125 18.4641C9.50625 17.7703 9.77812 17.2969 10.0781 17.025C7.74844 16.7531 5.29688 15.8297 5.29688 11.7047C5.29688 10.5281 5.70469 9.56719 6.375 8.81719C6.26719 8.54531 5.90625 7.44844 6.47812 5.96719C6.55483 5.94883 6.63368 5.94095 6.7125 5.94375C7.09219 5.94375 7.95 6.08906 9.36563 7.07344C11.0857 6.59218 12.9049 6.59218 14.625 7.07344C16.0406 6.08906 16.8984 5.94375 17.2781 5.94375C17.357 5.94095 17.4358 5.94883 17.5125 5.96719C18.0844 7.44844 17.7234 8.54531 17.6156 8.81719C18.2859 9.57187 18.6937 10.5328 18.6937 11.7047C18.6937 15.8391 16.2375 16.7484 13.8984 17.0156C14.2734 17.3484 14.6109 18.0047 14.6109 19.0078C14.6109 20.4469 14.5969 21.6094 14.5969 21.9609C14.5969 22.2141 14.7422 22.5 15.1312 22.5C15.1942 22.5003 15.2571 22.494 15.3187 22.4812C19.4953 21.0562 22.5 17.0203 22.5 12.2672C22.5 6.32344 17.7984 1.5 12 1.5Z"
                  fill="currentColor"
                />
              </svg>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navigation;
