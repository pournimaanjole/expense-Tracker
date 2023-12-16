import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import Transaction from './views/Transaction/Transaction'
import Login from './views/Login/Login'
import Home from './views/Home/Home';
import Singup from './views/Singup/Singup';
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
const router = createBrowserRouter([
    {
        path: '/',
        element: <Home />
    },
    {
        path: "/login",
        element: <Login />
    },
    {
        path: "/singup",
        element: <Singup />
    },
    {
        path:"/transaction" ,
        element:<Transaction/>
    }
])

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <RouterProvider router={router} />
);


