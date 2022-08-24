import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { signIn } from '../redux/login/signin';

const Login = () => {
  const login = useSelector((state) => state.login);
  const dispatch = useDispatch();

  useEffect(() => {
    console.log(login);
  }, [login]);

  const handleSubmit = (e) => {
    e.preventDefault();
    const username = e.target[0].value;
    const email = e.target[1].value;
    const password = e.target[2].value;
    console.log(username, email, password);
    dispatch(signIn(username, email, password));
  };

  return (
    <div>
      <form onSubmit={(e) => handleSubmit(e)}>
        <input type="text" placeholder="username" />
        <input type="email" placeholder="email" />
        <input type="password" placeholder="password" />
        <button type="submit">Login</button>
      </form>
    </div>
  );
};

export default Login;
