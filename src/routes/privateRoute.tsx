import React from 'react';
import { Navigate } from 'react-router-dom';

import { useAuth } from '../context/UserProvider';

interface IPrivateRouteProps {
  children: React.ReactNode;
}

const PrivateRoute: React.FC<IPrivateRouteProps> = ({
  children,
}): React.ReactElement => {
  const auth = useAuth();

  return <>{auth ? children : <Navigate replace to="/" />}</>;
};

export default PrivateRoute;
