import React from "react";
import { Signup, Error404, Signin } from "../pages";

export const routes = {
  LAUNCHSCREEN: {
    path: "/",
    element: <Signup />,
    key: 1
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
