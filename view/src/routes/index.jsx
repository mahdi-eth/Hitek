import React from "react";
import { ProductPage } from "../pages";
export const routes = {
  LAUNCHSCREEN: {
    path: "/",
    element: <h1>Test</h1>,
    key: 1
  },
  PRODUCTPAGE:{
    path:'/product',
    element:<ProductPage/>

  }
};
