import React from "react";
import { Signup, Error404, Signin, ProductPage, Products } from "../pages";

export const routes = {
  LAUNCHSCREEN: {
    path: "/",
    element: <Signup />,
    key: 1
  },
  PRODUCTPAGE:{
    path:'/product',
    element:<ProductPage/>
  },
  SIGNUP: {
    path: "/signup",
    element: <Signup />,
    key: 2
  },
  SIGNIN: {
    path: "/signin",
    element: <Signin />,
    key: 3
  },
  ERROR404: {
    path: "/notfound",
    element: <Error404 />,
    key: 4
  },
  PRODUCTS: {
    path: "/all-products",
    element: <Products />,
    key: 5
  }
};
