import React from 'react';
import { Navigate } from 'react-router-dom';

const storeTokenInLocalStorage = () => {
  const queryParams = new URLSearchParams(window.location.search);
  const token = queryParams.get('token');

  if (token) {
    localStorage.setItem("token", `Bearer ${token}`);
    window.history.replaceState({}, document.title, window.location.pathname);
  }
};

storeTokenInLocalStorage();

const PrivateRoute = ({ children }) => {
  const token = localStorage.getItem('token');
  return token ? children : <Navigate to="/login" />;
};

export default PrivateRoute;
