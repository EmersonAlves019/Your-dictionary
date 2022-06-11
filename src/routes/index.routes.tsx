import React from 'react';
import { useRoutes } from 'react-router';

import Home from '../pages/Home';
import Login from '../pages/Login';
import PrivateRoute from './privateRoute';

const Router = () => {
  const routes = [
    {
      path: '/',
      element: <Login />,
    },
    {
      path: '/home',
      element: (
        <PrivateRoute>
          <Home />
        </PrivateRoute>
      ),
    },
  ];

  const Crossroad = () => {
    return useRoutes(routes);
  };

  return (
    <React.Suspense fallback="...Loading">
      <Crossroad />
    </React.Suspense>
  );
};

export default Router;
