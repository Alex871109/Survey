import { Navigate, Route } from 'react-router-dom';

export const PrivateRoute = ({ logged, redirect, children }) => {
  return logged ? children : <Navigate to={redirect} />;
};
