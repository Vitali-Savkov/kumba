import React from 'react';
import {
  createBrowserRouter, RouterProvider, Navigate, generatePath,
} from 'react-router-dom';

import Routes from '../consts/routes';
import Success from '../pages/SuccessPage';
import Appointment from './Appointment/Appointment';

const routes = [
  {
    path: Routes.APPOINTMENT,
    element: <Appointment />,
  },
  {
    path: Routes.SUCCESS,
    element: <Success />,
  },
  {
    path: '*',
    element: <Navigate to={generatePath(Routes.APPOINTMENT, { side: 'all' })} replace />,
  },
];

function Router() {
  const router = createBrowserRouter(routes);

  return <RouterProvider router={router} />;
}

export default Router;
