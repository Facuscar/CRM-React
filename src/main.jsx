import React from 'react';
import ReactDOM from 'react-dom/client';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';

import './index.css';
import Layout from './layout/Layout';
import Index, {loader as ClientLoader} from './pages/Index';
import NewClient, {action as newClientAction} from './pages/NewClient';
import EditClient, {loader as editClientLoader} from './pages/EditClient';
import { ErrorPage } from './components/ErrorPage';

const router = createBrowserRouter([
  {
    path: '/',
    element: <Layout />,
    children: [
      {
        index: true,
        element: <Index />,
        loader: ClientLoader,
        errorElement: <ErrorPage />,
      },
      {
        path: '/new',
        element: <NewClient />,
        action: newClientAction
      },
      {
        path: '/client/:clientId/edit',
        element: <EditClient />,
        loader: editClientLoader,
        errorElement: <ErrorPage />
      }
    ]
  },
  {
    
  }
])

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider  router={router}/>
  </React.StrictMode>
)
