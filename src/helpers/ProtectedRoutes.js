import { Navigate, Outlet } from 'react-router-dom';

const useAuth = () => {
  let loggedIn = false;
  if (localStorage.getItem('token')) {
    loggedIn = true;
  } else {
    loggedIn = false;
  }

  const user = { loggedIn };
  return user && user.loggedIn;
};

const ProtectedRoutes = () => {
  const isAuth = useAuth();
  return isAuth ? <Outlet /> : <Navigate to="/" />;
};

export default ProtectedRoutes;
