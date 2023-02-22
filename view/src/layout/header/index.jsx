import React, {  useState } from "react";
import { Link } from "react-router-dom";
import logo from "../../assets/images/logo/logo.svg";
import { Dropdown } from "../../components";

export function Header() {
  const [isOpen, setIsOpen] = useState(false);


  return (
    <nav className="px-2 bg-white border-gray-200 dark:bg-gray-900 dark:border-gray-700 mt-4">
      <div className="container flex flex-wrap items-center justify-between mx-auto">
        <Link to="/" className="flex items-center">
          <img src={logo} className="h-6 mr-3 sm:h-10" alt="Logo" />
        </Link>
        <button
          onClick={() => setIsOpen(false)}
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
        {isOpen && (
          <ul className="flex transform duration-1000 z-10 flex-col text-center justify-center fixed top-0 left-0 w-full items-center bg-gray-50 dark:bg-gray-80 dark:border-gray-700">
            <li className="w-full font-semibold py-4 bg-primary text-white border-b border-gray-300">
              <Link
                to="/"
                className="block w-full"
                aria-current="page">
                Home
              </Link>
            </li>
            <li className="w-full py-4 bg-primary text-white border-b border-gray-300">
              <Dropdown value={"iPhones"} />
            </li>{" "}
            <li className="w-full py-4 bg-primary text-white border-b border-gray-300">
              <Dropdown value={"Phones"} />
            </li>{" "}
            <li className="w-full py-4 bg-primary text-white border-b border-gray-300">
              <Dropdown value={"Tablets"} />
            </li>{" "}
            <li className="w-full py-4 bg-primary text-white border-b border-gray-300">
              <Dropdown value={"Macbooks"} />
            </li>
            <li className="w-full py-4 bg-primary text-white border-b border-gray-300">
              <Link
                to="/signup"
                className="bg-primary w-full text-white font-semibold text-base">
                Sign up
              </Link>
            </li>
          </ul>
        )}
        <div className="hidden w-full md:block md:w-auto" id="navbar-dropdown">
          <ul className="flex items-center text-_Gray py-4 lg:px-4 mt-4 border border-gray-100 bg-gray-50 md:flex-row md:space-x-8 md:mt-0 md:text-sm md:font-medium md:border-0 md:bg-white dark:bg-gray-800 md:dark:bg-gray-900 dark:border-gray-700">
            <li>
              <Link
                to="/"
                className="block pt-2 py-2 text-_Gray border-b-2 border-white hover:border-primary md:bg-transparent md:dark:text-white dark:bg-blue-600 md:dark:bg-transparent"
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
            <li className="w-full">
              <Link
                to="/signup"
                className="border-b-2 font-medium border-b-white hover:border-b-primary lg:border lg:border-primary hover:lg:bg-primary hover:lg:text-white transform duration-150 text-primary lg:shadow pb-2 lg:py-2 lg:px-9 text-base lg:ml-14 lg:rounded-lg">
                Sign up
              </Link>
            </li>
          </ul>
        </div>
      </div>
      <hr className="border-gray-300 w-full sm:mt-4 mt-0" />
    </nav>
  );
}
