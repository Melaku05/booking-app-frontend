import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { signUp } from '../redux/login/signup';
import { Link } from 'react-router-dom';

const Signup = () => {
  const dispatch = useDispatch();

  const handleSubmit = (e) => {
    e.preventDefault();
    const username = e.target[0].value;
    const email = e.target[1].value;
    const password = e.target[2].value;
    console.log(username, email, password);
    dispatch(signUp(username, email, password));
  };

  return (
    <div>
      <form onSubmit={(e) => handleSubmit(e)}>
        <input type="text" placeholder="username" />
        <input type="email" placeholder="email" />
        <input type="password" placeholder="password" />
        <input type="password" placeholder="password confirmation" />
        <button type="submit">Sign Up</button>
      </form>
      <div>
        <p>
          Already have an account?
          <Link to="/">Log In</Link>
        </p>
      </div>
    </div>
  );
};

export default Signup;
