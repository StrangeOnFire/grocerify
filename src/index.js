import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import Header from './fragments/Header';
import Categories from './fragments/categories/Categories';
import GroupBuy from './fragments/groupBuy/GroupBuy';
import TopOffers from './fragments/topOffers/TopOffers';

const router = createBrowserRouter([
  {
    path: "/",
    element: <Header/>,
    children:[
      {
        index:true,
        element:<App/>
      },
      {
        path:'/Categories',
        element:<Categories/>
      },
      {
        path:'/GroupBuy',
        element:<GroupBuy/>
      },
      {
        path:'/TopOffers',
        element:<TopOffers/>
      },
    ]
  },
]);


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
