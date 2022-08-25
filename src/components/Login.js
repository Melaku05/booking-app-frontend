import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { Link } from 'react-router-dom';
import { signIn } from '../redux/login/signin';
import { signOut } from '../redux/login/signout';

const Login = () => {
  // const login = useSelector((state) => state.login);
  const dispatch = useDispatch();

  const handleSubmit = (e) => {
    e.preventDefault();
    const email = e.target[0].value;
    const password = e.target[1].value;
    console.log(email, password);
    dispatch(signIn(email, password));
  };

  return (
    <div>
      <form onSubmit={(e) => handleSubmit(e)}>
        <input type="email" placeholder="email" />
        <input type="password" placeholder="password" />
        <button type="submit">Login</button>
      </form>
      <button onClick={() => dispatch(signOut())}>Sign Out</button>
      <div>
        <p>
          Don&apos;t have an account yet?
          <Link to="/signup">Sign Up</Link>
        </p>
      </div>
    </div>
  );
};

export default Login;
