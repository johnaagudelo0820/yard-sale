import React from 'react';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';

import Login from '@containers/Login';
import Layout from '@containers/Layout';
import RecoveryPassword from '@containers/RecoveryPassword';
import Home from '../pages/Home';
import NotFound from '../pages/NotFound';

import '@styles/global.scss';
import NewPassword from '../pages/NewPassword';
import Orders from '../pages/Orders';

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
  { path: '/new-password', element: <NewPassword /> },
  { path: '/orders', element: <Orders /> },
]);

const App = () => {
  return (
    <Layout>
      <RouterProvider router={router} />
    </Layout>
  );
};

export default App;
