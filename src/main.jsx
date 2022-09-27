import React from 'react'
import ReactDOM from 'react-dom/client'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'  

import './index.css'
import Layout from './layout/Layout'
import Index, {loader as ClientLoader} from './pages/Index'
import NewClient, {action as newClientAction} from './pages/NewClient'

const router = createBrowserRouter([
  {
    path: '/',
    element: <Layout />,
    children: [
      {
        index: true,
        element: <Index />,
        loader: ClientLoader
      },
      {
        path: '/new',
        element: <NewClient />,
        action: newClientAction
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
