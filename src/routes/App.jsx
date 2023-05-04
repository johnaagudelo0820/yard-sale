import React from 'react';
import {
  Route,
  BrowserRouter,
  createBrowserRouter,
  RouterProvider,
} from 'react-router-dom';

import Login from '@containers/Login';
import Layout from '@containers/Layout';
import RecoveryPassword from '../containers/RecoveryPassword';
import Home from '../pages/Home';
import NotFound from '../pages/NotFound';

import '@styles/global.scss';

const router = createBrowserRouter([
  {
    path: '/',
    element: <Home />,
    errorElement: <NotFound />,
  },
  {
    path: '/login',
    element: <Login />,
  },
  {
    path: '/recovery-password',
    element: <RecoveryPassword />,
  },
]);

const App = () => {
  return <RouterProvider router={router} />;
};

export default App;
