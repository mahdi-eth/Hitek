import React from "react";
import { Signin } from "../pages";
import { Signup } from "../pages";

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
  }
};
