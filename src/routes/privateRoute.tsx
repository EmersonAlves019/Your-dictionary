import React from 'react';
import { Navigate } from 'react-router-dom';

import { useAuth } from '../context/UserProvider';

const PrivateRoute: React.FC<any> = ({ children }): React.ReactElement => {
  const auth = useAuth();

  return auth ? children : <Navigate replace to="/" />;
};

export default PrivateRoute;
