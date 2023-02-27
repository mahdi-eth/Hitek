import React, { useEffect, useState } from "react";
import logo from "../../assets/images/logo/logo.svg";
import img from "../../assets/images/singinpage/Image.png";
import { FcGoogle } from "react-icons/fc";
import { Link } from "react-router-dom";

export function Signin() {
  const [width, setWidth] = useState(window.innerWidth);

  useEffect(() => {
    const handleResize = () => setWidth(window.innerWidth);
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const makeResponsiveImg = () => {
    if (width >= 1127) return { width: "700px" };
    else if (width > 1044) return { width: "600px" };
    else if (width > 921) return { width: "500px" };
    else if (width > 860) return { width: "450px" };
    else if (width < 860 && width > 768) return { width: "400px" };
    return null;
  };
  return (
    <div className="flex items-center justify-center mt-2 flex-col md:flex-row">
      <div className="left-side flex flex-col justify-center items-start">
        <Link className="md:mt-6 md:ml-40" to="/">
        <img src={logo} alt="logo" />
        </Link>
        <img
          className="hidden md:block"
          style={makeResponsiveImg()}
          src={img}
          alt="An image"
        />
      </div>
      <div className="right-side mx-auto my-auto flex items-center flex-col text-center mt-12 md:mt-24">
        <h2 className="text-3xl font-semibold mb-6 text-_Gray">
          Welcome back.
        </h2>
        <form className="sm:min-w-360 text-left pb-6">
          <button
            type="button"
            className="bg-primary mb-6 relative transition duration-150 hover:bg-primary_hover font-semibold py-3 w-full rounded-lg shadow flex items-center justify-center">
            <div className="absolute left-1 rounded-lg bg-white px-2 py-2">
              <FcGoogle size={24} />
            </div>
            <p className="text-white">Sign in with Google</p>
          </button>
          <div className="flex items-center mb-6">
            <div className="flex-1 h-px bg-gray-200"></div>
            <p className="mx-4 text-center font-bold text-_Gray">
              Or, sign in with your email
            </p>
            <div className="flex-1 h-px bg-gray-200"></div>
          </div>
          <div className="mb-6">
            <label
              htmlFor="email"
              className="block mb-2 text-sm font-medium text-_Gray dark:text-white">
              Email address*
            </label>
            <input
              type="email"
              id="email"
              className="shadow-sm px-5 bg-white py-3 border border-gray-300 text-_Gray text-sm rounded-lg focus-visible:outline-primary focus-visible:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus-visible:outline-primary dark:focus-visible:border-blue-500 dark:shadow-sm-light"
              placeholder="Enter email address"
            />
          </div>
          <div className="mb-6">
            <label
              htmlFor="password"
              className="block mb-2 text-sm font-medium text-_Gray dark:text-white">
              Password*
            </label>
            <input
              type="password"
              id="password"
              placeholder="Enter password"
              className="shadow-sm px-5 bg-white py-3 border border-gray-300 text-_Gray text-sm rounded-lg focus-visible:outline-primary focus-visible:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus-visible:outline-primary dark:focus-visible:border-blue-500 dark:shadow-sm-light"
            />
          </div>
          <div className="flex items-center justify-between mb-6">
            <div className="flex items-center h-5">
              <input
                id="terms"
                type="checkbox"
                className="w-4 h-4 border px-5 cursor-pointer border-gray-300 rounded-lg bg-white py-3 focus-visible:ring-3 focus-visible:ring-blue-300 dark:bg-gray-700 dark:border-gray-600 dark:focus-visible:ring-blue-600 dark:ring-offset-gray-800 dark:focus-visible:ring-offset-gray-800"
              />
              <label
                htmlFor="terms"
                className="ml-2 cursor-pointer text-sm font-medium text-_Gray dark:text-gray-300">
                Keep me sign in
              </label>
            </div>
            <a href="#" className="text-primary">
              Forgot password?
            </a>
          </div>
          <button
            type="submit"
            className="bg-primary mb-6 text-white transition duration-150 hover:bg-primary_hover font-semibold py-3 w-full rounded-lg shadow flex items-center justify-center">
            Sign in
          </button>
          <p className="text-sm">
            Don’t have an account?{" "}
            <Link to="/signup" className="text-primary cursor-pointer">
              Sign up now
            </Link>{" "}
          </p>
        </form>
      </div>
    </div>
  );
}
