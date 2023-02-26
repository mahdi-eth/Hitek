import React from "react";
import { Signup } from "../pages/signup";
import {Error404, Signin } from "../pages";
import { ProductPage } from "../pages";
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
    key: 3
  }
};
