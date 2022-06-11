import React from 'react';
import { useRoutes } from 'react-router';

import Home from '../pages/Home';

const Router = () => {
  const routes = [
    {
      path: '/home',
      element: <Home />,
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
