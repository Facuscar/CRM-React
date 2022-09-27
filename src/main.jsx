import React from 'react'
import ReactDOM from 'react-dom/client'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'  

import App from './App'
import './index.css'
import Layout from './layout/Layout'
import Beginning from './pages/Beginning'
import NewClient from './pages/NewClient'

const router = createBrowserRouter([
  {
    path: '/',
    element: <Layout />,
    children: [
      {
        index: true,
        element: <Beginning />
      },
      {
        path: '/new',
        element: <NewClient />
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
