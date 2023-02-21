import React from "react";
import { Link } from "react-router-dom";
import logo from "../../assets/images/logo/logo.svg";
import { Dropdown } from "../../components";

export function Header() {
  return (
    <nav className="px-2 bg-white border-gray-200 dark:bg-gray-900 dark:border-gray-700">
      <div className="container flex flex-wrap items-center justify-between mx-auto">
        <Link to="/" className="flex items-center">
          <img src={logo} className="h-6 mr-3 sm:h-10" alt="Logo" />
        </Link>
        <button
          data-collapse-toggle="navbar-dropdown"
          type="button"
          className="inline-flex items-center p-2 ml-3 text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600"
          aria-controls="navbar-dropdown"
          aria-expanded="false">
          <span className="sr-only">Open main menu</span>
          <svg
            className="w-6 h-6"
            aria-hidden="true"
            fill="currentColor"
            viewBox="0 0 20 20"
            xmlns="http://www.w3.org/2000/svg">
            <path
              fillRule="evenodd"
              d="M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 15a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z"
              clipRule="evenodd"></path>
          </svg>
        </button>
        <div className="hidden w-full md:block md:w-auto" id="navbar-dropdown">
          <ul className="flex items-center p-4 mt-4 border border-gray-100 rounded-lg bg-gray-50 md:flex-row md:space-x-8 md:mt-0 md:text-sm md:font-medium md:border-0 md:bg-white dark:bg-gray-800 md:dark:bg-gray-900 dark:border-gray-700">
            <li>
              <Link
                to="/"
                className="block py-2 pl-3 pr-4 text-_Gray bg-blue-700 rounded-lg md:bg-transparent md:p-0 md:dark:text-white dark:bg-blue-600 md:dark:bg-transparent"
                aria-current="page">
                Home
              </Link>
            </li>
            <li>
              <Dropdown value={"iPhones"} />
            </li>{" "}
            <li>
              <Dropdown value={"Phones"} />
            </li>{" "}
            <li>
              <Dropdown value={"Tablets"} />
            </li>{" "}
            <li>
              <Dropdown value={"Macbooks"} />
            </li>
            <li>
              <Link to="/signup" className="border border-primary text-primary shadow py-2 px-9 font-semibold text-base ml-14 rounded-lg">
                Sign up
              </Link>
            </li>
          </ul>
        </div>
      </div>
      <hr className="border-gray-300 w-full" />
    </nav>
  );
}
