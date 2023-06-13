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

import AppContext from '../context/AppContext';
import useInitialState from '../hooks/useInitialState';

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
  const initialState = useInitialState();
  return (
    <AppContext.Provider value={initialState}>
      <Layout>
        <RouterProvider router={router} />
      </Layout>
    </AppContext.Provider>
  );
};

export default App;
