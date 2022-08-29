import React, { useState } from 'react';
/* Install pure-react-carousel using -> npm i pure-react-carousel */

const NavigationReserve = () => {
  const current = new Date();
  const date = `${current.getDate()}/${current.getMonth() + 1}/${current.getFullYear()}`;
  const [show, setShow] = useState(false);
  return (
    <div>
      <div className="flex items-center justify-between w-full p-6 border border-transparent rounded-r shadow bg-menu xl:hidden ">
        <button type="button" className="flex items-center justify-between space-x-3 text-white hover:text-doctor focus:outline-none focus:text-indigo-200">
          <div aria-label="toggler" className="fixed flex items-center justify-center">
            <button type="button" id="open" aria-label="open" onClick={() => setShow(!show)} className={`${show ? '' : 'hidden'}  focus:outline-none focus:ring-2 `}>
              <svg className="text-doctor" width={24} height={24} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M4 6H20" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                <path d="M4 12H20" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                <path d="M4 18H20" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
            </button>
            <button type="button" id="close" aria-label="close" onClick={() => setShow(!show)} className={`${show ? 'hidden' : ''} focus:outline-none focus:ring-2  `}>
              <svg className="text-doctor" width={24} height={24} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M18 6L6 18" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                <path d="M6 6L18 18" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
            </button>
          </div>
        </button>
      </div>

      <div id="Main" className={`${show ? '-translate-x-full' : 'translate-x-0'} bg-indigo-700 transform  xl:translate-x-0 shadow xl:rounded-r fixed h-full top-22 sm:z-20 bg-white  ease-in-out transition duration-500 flex justify-start items-start w-full sm:w-64 flex-col `}>
        <button type="button" className="items-center justify-start hidden w-full p-6 space-x-3 text-white focus:outline-none hover:text-indigo-200 focus:text-indigo-200 sm:flex">
          <span className="flex items-center justify-between text-xl leading-6 text-menu">
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
        </button>
        <div className="flex flex-col items-center justify-start w-full px-4 px-6 mt-4 ">
          <button type="button" className="flex items-center w-full py-3 space-x-6 font-bold text-black rounded focus:outline-none focus:bg-menu jusitfy-start hover:bg-menu ">
            <svg width={24} height={24} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M15 10L11 14L17 20L21 4L3 11L7 13L9 19L12 15" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
            <p className="font-bold leading-4 text-black border-b border-transparent hover:border-doctor focus:border-doctor">DOCTORS</p>
          </button>
          <button type="button" className="flex items-center w-full py-3 space-x-6 font-bold text-black rounded focus:outline-none focus:bg-menu jusitfy-start hover:bg-menu ">
            <svg width={24} height={24} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path
                d="M10.325 4.317C10.751 2.561 13.249 2.561 13.675 4.317C13.7389 4.5808 13.8642 4.82578 14.0407 5.032C14.2172 5.23822 14.4399 5.39985 14.6907 5.50375C14.9414 5.60764 15.2132 5.65085 15.4838 5.62987C15.7544 5.60889 16.0162 5.5243 16.248 5.383C17.791 4.443 19.558 6.209 18.618 7.753C18.4769 7.98466 18.3924 8.24634 18.3715 8.51677C18.3506 8.78721 18.3938 9.05877 18.4975 9.30938C18.6013 9.55999 18.7627 9.78258 18.9687 9.95905C19.1747 10.1355 19.4194 10.2609 19.683 10.325C21.439 10.751 21.439 13.249 19.683 13.675C19.4192 13.7389 19.1742 13.8642 18.968 14.0407C18.7618 14.2172 18.6001 14.4399 18.4963 14.6907C18.3924 14.9414 18.3491 15.2132 18.3701 15.4838C18.3911 15.7544 18.4757 16.0162 18.617 16.248C19.557 17.791 17.791 19.558 16.247 18.618C16.0153 18.4769 15.7537 18.3924 15.4832 18.3715C15.2128 18.3506 14.9412 18.3938 14.6906 18.4975C14.44 18.6013 14.2174 18.7627 14.0409 18.9687C13.8645 19.1747 13.7391 19.4194 13.675 19.683C13.249 21.439 10.751 21.439 10.325 19.683C10.2611 19.4192 10.1358 19.1742 9.95929 18.968C9.7828 18.7618 9.56011 18.6001 9.30935 18.4963C9.05859 18.3924 8.78683 18.3491 8.51621 18.3701C8.24559 18.3911 7.98375 18.4757 7.752 18.617C6.209 19.557 4.442 17.791 5.382 16.247C5.5231 16.0153 5.60755 15.7537 5.62848 15.4832C5.64942 15.2128 5.60624 14.9412 5.50247 14.6906C5.3987 14.44 5.23726 14.2174 5.03127 14.0409C4.82529 13.8645 4.58056 13.7391 4.317 13.675C2.561 13.249 2.561 10.751 4.317 10.325C4.5808 10.2611 4.82578 10.1358 5.032 9.95929C5.23822 9.7828 5.39985 9.56011 5.50375 9.30935C5.60764 9.05859 5.65085 8.78683 5.62987 8.51621C5.60889 8.24559 5.5243 7.98375 5.383 7.752C4.443 6.209 6.209 4.442 7.753 5.382C8.753 5.99 10.049 5.452 10.325 4.317Z"
                stroke="currentColor"
                strokeWidth="1.5"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
              <path d="M12 15C13.6569 15 15 13.6569 15 12C15 10.3431 13.6569 9 12 9C10.3431 9 9 10.3431 9 12C9 13.6569 10.3431 15 12 15Z" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
            <p className="font-bold leading-4 text-black border-b border-transparent hover:border-doctor focus:border-white ">RESERVE</p>
          </button>
          <button type="button" className="flex items-center w-full py-3 space-x-6 font-bold text-black rounded focus:outline-none focus:bg-menu jusitfy-start hover:bg-menu ">
            <svg width={24} height={24} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path
                d="M10.325 4.317C10.751 2.561 13.249 2.561 13.675 4.317C13.7389 4.5808 13.8642 4.82578 14.0407 5.032C14.2172 5.23822 14.4399 5.39985 14.6907 5.50375C14.9414 5.60764 15.2132 5.65085 15.4838 5.62987C15.7544 5.60889 16.0162 5.5243 16.248 5.383C17.791 4.443 19.558 6.209 18.618 7.753C18.4769 7.98466 18.3924 8.24634 18.3715 8.51677C18.3506 8.78721 18.3938 9.05877 18.4975 9.30938C18.6013 9.55999 18.7627 9.78258 18.9687 9.95905C19.1747 10.1355 19.4194 10.2609 19.683 10.325C21.439 10.751 21.439 13.249 19.683 13.675C19.4192 13.7389 19.1742 13.8642 18.968 14.0407C18.7618 14.2172 18.6001 14.4399 18.4963 14.6907C18.3924 14.9414 18.3491 15.2132 18.3701 15.4838C18.3911 15.7544 18.4757 16.0162 18.617 16.248C19.557 17.791 17.791 19.558 16.247 18.618C16.0153 18.4769 15.7537 18.3924 15.4832 18.3715C15.2128 18.3506 14.9412 18.3938 14.6906 18.4975C14.44 18.6013 14.2174 18.7627 14.0409 18.9687C13.8645 19.1747 13.7391 19.4194 13.675 19.683C13.249 21.439 10.751 21.439 10.325 19.683C10.2611 19.4192 10.1358 19.1742 9.95929 18.968C9.7828 18.7618 9.56011 18.6001 9.30935 18.4963C9.05859 18.3924 8.78683 18.3491 8.51621 18.3701C8.24559 18.3911 7.98375 18.4757 7.752 18.617C6.209 19.557 4.442 17.791 5.382 16.247C5.5231 16.0153 5.60755 15.7537 5.62848 15.4832C5.64942 15.2128 5.60624 14.9412 5.50247 14.6906C5.3987 14.44 5.23726 14.2174 5.03127 14.0409C4.82529 13.8645 4.58056 13.7391 4.317 13.675C2.561 13.249 2.561 10.751 4.317 10.325C4.5808 10.2611 4.82578 10.1358 5.032 9.95929C5.23822 9.7828 5.39985 9.56011 5.50375 9.30935C5.60764 9.05859 5.65085 8.78683 5.62987 8.51621C5.60889 8.24559 5.5243 7.98375 5.383 7.752C4.443 6.209 6.209 4.442 7.753 5.382C8.753 5.99 10.049 5.452 10.325 4.317Z"
                stroke="currentColor"
                strokeWidth="1.5"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
              <path d="M12 15C13.6569 15 15 13.6569 15 12C15 10.3431 13.6569 9 12 9C10.3431 9 9 10.3431 9 12C9 13.6569 10.3431 15 12 15Z" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
            <p className="font-bold leading-4 text-black border-b border-transparent hover:border-doctor focus:border-white ">MY RESERVATIONS</p>
          </button>
          <button type="button" className="flex items-center justify-start w-full py-3 space-x-6 font-bold text-red-500 rounded focus:outline-none focus:text-700 hover:text-red-600 ">
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
              {' '}
              <br />
              <div>
                <p>
                  {date}
                </p>
              </div>
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
            <p className="text-xs leading-3 text-orange-200 cursor-pointer">test@gmail.com</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default NavigationReserve;
