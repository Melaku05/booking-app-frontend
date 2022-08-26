import React from 'react';
import { useDispatch } from 'react-redux';
import { Link, useNavigate } from 'react-router-dom';
import { signIn } from '../redux/login/signin';

const Login = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  // redirect to home page if user is already logged in
  if (localStorage.getItem('token')) {
    navigate('/home');
  }

  const handleSubmit = (e) => {
    e.preventDefault();
    const email = e.target[0].value;
    const password = e.target[1].value;
    dispatch(signIn(email, password));
    setTimeout(() => {
      navigate('/home');
    }, 1000);
  };
  return (
    <div>
      <div className="w-full h-full px-4 py-16 bg-gradient-to-tl from-orange to-menu">
        <div className="flex flex-col items-center justify-center">
          <button type="button" className="flex items-center justify-between space-x-3 text-white hover:text-doctor focus:outline-none focus:text-indigo-200">
            <span className="flex items-center justify-between text-5xl font-bold leading-6 text-orange-500">
              Booking
              <svg xmlns="http://www.w3.org/2000/svg" className="icon icon-tabler icon-tabler-vaccine text-doctor" width="60" height="60" viewBox="0 0 24 24" strokeWidth="1.5" stroke="black" fill="orange" strokeLinecap="round" strokeLinejoin="round">
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
          <div className="w-full p-10 mt-16 bg-white rounded-md shadow-2xl lg:w-1/3 md:w-1/2">
            <p aria-label="Login to your account" className="text-2xl font-extrabold leading-6 text-gray-800">
              Login to your account
            </p>
            <p className="mt-4 text-sm font-medium leading-none text-gray-500">
              Dont have account?
              {' '}
              <Link to="/signup" tabIndex={0} role="link" aria-label="Sign up here" className="text-sm font-medium leading-none text-gray-800 underline cursor-pointer">
                Sign up here
              </Link>
            </p>
            <br />
            <form onSubmit={(e) => handleSubmit(e)}>
              <div>
                <input aria-label="enter email adress" type="email" className="w-full py-3 pl-3 mt-2 text-xs font-medium leading-none text-gray-800 bg-gray-200 border rounded-full focus:outline-none" placeholder="Enter your email address" />
              </div>
              <div className="w-full mt-6">
                <div className="relative flex items-center justify-center">
                  <input aria-label="enter Password" type="password" className="w-full py-3 pl-3 mt-2 text-xs font-medium leading-none text-gray-800 bg-gray-200 border rounded-full focus:outline-none" placeholder="Enter Password" />
                  <div className="absolute right-0 mt-2 mr-3 cursor-pointer">
                    <svg width={16} height={16} viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path
                        d="M7.99978 2C11.5944 2 14.5851 4.58667 15.2124 8C14.5858 11.4133 11.5944 14 7.99978 14C4.40511 14 1.41444 11.4133 0.787109 8C1.41378 4.58667 4.40511 2 7.99978 2ZM7.99978 12.6667C9.35942 12.6664 10.6787 12.2045 11.7417 11.3568C12.8047 10.509 13.5484 9.32552 13.8511 8C13.5473 6.67554 12.8031 5.49334 11.7402 4.64668C10.6773 3.80003 9.35864 3.33902 7.99978 3.33902C6.64091 3.33902 5.32224 3.80003 4.25936 4.64668C3.19648 5.49334 2.45229 6.67554 2.14844 8C2.45117 9.32552 3.19489 10.509 4.25787 11.3568C5.32085 12.2045 6.64013 12.6664 7.99978 12.6667ZM7.99978 11C7.20413 11 6.44106 10.6839 5.87846 10.1213C5.31585 9.55871 4.99978 8.79565 4.99978 8C4.99978 7.20435 5.31585 6.44129 5.87846 5.87868C6.44106 5.31607 7.20413 5 7.99978 5C8.79543 5 9.55849 5.31607 10.1211 5.87868C10.6837 6.44129 10.9998 7.20435 10.9998 8C10.9998 8.79565 10.6837 9.55871 10.1211 10.1213C9.55849 10.6839 8.79543 11 7.99978 11ZM7.99978 9.66667C8.4418 9.66667 8.86573 9.49107 9.17829 9.17851C9.49085 8.86595 9.66644 8.44203 9.66644 8C9.66644 7.55797 9.49085 7.13405 9.17829 6.82149C8.86573 6.50893 8.4418 6.33333 7.99978 6.33333C7.55775 6.33333 7.13383 6.50893 6.82126 6.82149C6.5087 7.13405 6.33311 7.55797 6.33311 8C6.33311 8.44203 6.5087 8.86595 6.82126 9.17851C7.13383 9.49107 7.55775 9.66667 7.99978 9.66667Z"
                        fill="#71717A"
                      />
                    </svg>
                  </div>
                </div>
              </div>
              <div className="mt-8">
                <button type="submit" aria-label="create my account" className="w-full py-4 text-sm font-semibold leading-none text-white border rounded-full bg-menu focus:ring-2 focus:ring-offset-2 focus:ring-lime-700 focus:outline-none hover:bg-lime-600">
                  Login
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
