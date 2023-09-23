import React from 'react'
import ReactDOM from 'react-dom/client'
import { createHashRouter, RouterProvider } from 'react-router-dom';
import App from './App.jsx';
import Index from '@/pages/index/Index.jsx';
import Products from '@/pages/products/Products.jsx';
import AboutUs from '@/pages/aboutUs/AboutUs.jsx';
import './main.css';


const router = createHashRouter([
  {
    path: '/',
    element: <App />,
    children: [
      {
        index: true,
        element: <Index />
      },
      {
        path: '/products',
        children: [
          {
            index: true,
            path: ':name',
            element: <Products />
          }
        ]
      },
      {
        path: '/aboutUs',
        element: <AboutUs />
      }
    ]
  }
])


ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
)
