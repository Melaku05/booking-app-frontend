import { Navigate, Outlet } from 'react-router-dom';

const useAuth = () => {
  let loggedIn = false;
  if (localStorage.getItem('token')) {
    loggedIn = true;
  } else {
    loggedIn = false;
  }

  const user = { loggedIn };
  return user.loggedIn;
};

const LoginRoutes = () => {
  const isAuth = useAuth();
  return !isAuth ? <Outlet /> : <Navigate to="/home" />;
};

export default LoginRoutes;