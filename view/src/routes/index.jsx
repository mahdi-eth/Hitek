import React from "react";
import {
  Signup,
  Error404,
  Signin,
  ProductPage,
  Products,
  ContactUs,
  HomePage
} from "@/pages";

export const routes = {
  LAUNCHSCREEN: {
    path: "/",
    element: <HomePage />
  },
  PRODUCTPAGE: {
    path: "/product",
    element: <ProductPage />
  },
  SIGNUP: {
    path: "/signup",
    element: <Signup />
  },
  SIGNIN: {
    path: "/signin",
    element: <Signin />
  },
  ERROR404: {
    path: "/notfound",
    element: <Error404 />
  },
  PRODUCTS: {
    path: "/all-products",
    element: <Products />
  },
  CONTACTUS: {
    path: "/contact-us",
    element: <ContactUs />
  }
};
