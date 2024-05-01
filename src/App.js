import React from 'react';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';

import Layout from './Components/Layout/Layout';
import Home from './Components/Home/Home';
import Products from './Components/Products/Products';
import AddProduct from './Components/AddProduct/AddProduct';
import Search from './Components/Search/Search';
import About from './Components/About/About';
import Login from './Components/Login/Login';
import Register from './Components/Register/Register';
import JoinTeam from './Components/JoinTeam/JoinTeam';
import Profile from './Components/Profile/Profile';
import Cart from './Components/Cart/Cart';
import ProductDetails from './Components/ProductDetails/ProductDetails';
import NotFound from './Components/NotFound/NotFound';

import './App.css';

function App() {
  const routers = createBrowserRouter([
    {
      path: '',
      element: <Layout />,
      children: [
        { index: true, path: '', element: <Home /> },
        { path: 'products', element: <Products /> },
        { path: 'addproduct', element: <AddProduct /> },
        { path: 'search', element: <Search /> },
        { path: 'about', element: <About /> },
        { path: 'login', element: <Login /> },
        { path: 'register', element: <Register /> },
        { path: 'jointeam', element: <JoinTeam /> },
        { path: 'profile', element: <Profile /> },
        { path: 'productdetails', element: <ProductDetails /> },
        { path: 'cart', element: <Cart /> },
        { path: '*', element: <NotFound /> },
      ],
    },
  ]);

  return <RouterProvider router={routers}></RouterProvider>;
}

export default App;
