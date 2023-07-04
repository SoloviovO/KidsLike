import React from 'react';
import { useSelector } from 'react-redux';
import { Navigate } from 'react-router';

import { selectToken } from 'redux/Auth/AuthSelectors';

export const PublicRoute = ({ children }) => {
  const authToken = useSelector(selectToken);
  if (authToken) {
    return <Navigate to="/main" />;
  }
  return children;
};
