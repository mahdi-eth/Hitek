import React from "react";
import { ProductPage } from "../pages";
import { Signup } from "../pages/signup";

export const routes = {
  LAUNCHSCREEN: {
    path: "/",
    element: <Signup />,
    key: 1
  },
  PRODUCTPAGE:{
    path:'/product',
    element:<ProductPage/>

  }
};
