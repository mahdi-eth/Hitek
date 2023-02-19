import React from "react";
import logo from "../../assets/images/logo/logo.svg";
import img from "../../assets/images/signuppage/bitmap.png";
import { FcGoogle } from "react-icons/fc";

export function Signup() {
  return (
    <div className="flex">
      <div className="left-side">
        <img className="mt-6 ml-40" src={logo} alt="logo" />
        <img style={{ width: "700px" }} src={img} alt="An image" />
      </div>
      <div className="right-side mx-auto my-auto flex items-center flex-col text-center mt-12">
        <h2 className="text-3xl font-semibold mb-6 text-_Gray">
          Let&apos;s join us
        </h2>
        <form className="min-w-360 text-left">
          <button
            type="button"
            className="bg-primary mb-6 relative transition duration-150 hover:bg-primary_hover font-semibold py-3 w-full rounded-lg shadow flex items-center justify-center">
            <div className="absolute left-1 rounded-lg bg-white px-2 py-2">
              <FcGoogle size={24} />
            </div>
            <p className="text-white">Sign up with Google</p>
          </button>
          <div className="flex items-center mb-6">
            <div className="flex-1 h-px bg-gray-200"></div>
            <p className="mx-4 text-center font-bold text-_Gray">
              Or, sign up with your email
            </p>
            <div className="flex-1 h-px bg-gray-200"></div>
          </div>
          <div className="mb-6">
            <label
              htmlFor="your-name"
              className="block mb-2 text-sm font-medium text-_Gray dark:text-white">
              Your name*
            </label>
            <input
              type="password"
              id="your-name"
              placeholder="Enter name"
              className="shadow-sm px-5 bg-white py-3 border border-gray-300 text-_Gray text-sm rounded-lg focus-visible:outline-primary focus-visible:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus-visible:outline-primary dark:focus-visible:border-blue-500 dark:shadow-sm-light"
            />
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
              Your password
            </label>
            <input
              type="password"
              id="password"
              placeholder="Enter password"
              className="shadow-sm px-5 bg-white py-3 border border-gray-300 text-_Gray text-sm rounded-lg focus-visible:outline-primary focus-visible:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus-visible:outline-primary dark:focus-visible:border-blue-500 dark:shadow-sm-light"
            />
          </div>
          <div className="flex items-start mb-6">
            <div className="flex items-center h-5">
              <input
                id="terms"
                type="checkbox"
                className="w-4 h-4 border px-5 cursor-pointer border-gray-300 rounded-lg bg-white py-3 focus-visible:ring-3 focus-visible:ring-blue-300 dark:bg-gray-700 dark:border-gray-600 dark:focus-visible:ring-blue-600 dark:ring-offset-gray-800 dark:focus-visible:ring-offset-gray-800"
              />
            </div>
            <label
              htmlFor="terms"
              className="ml-2 cursor-pointer text-sm font-medium text-_Gray dark:text-gray-300">
              Agree to terms & conditions
            </label>
          </div>
          <button
            type="submit"
            className="bg-primary mb-6 text-white transition duration-150 hover:bg-primary_hover font-semibold py-3 w-full rounded-lg shadow flex items-center justify-center">
            Sign up
          </button>
          <p className="text-sm">
            Already have an account?{" "}
            <a href="#" className="text-primary">
              Sign in now
            </a>{" "}
          </p>
        </form>
      </div>
    </div>
  );
}
