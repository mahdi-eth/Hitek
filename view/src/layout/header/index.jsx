import React, { useEffect, useRef, useState } from "react";
import Cookies from "js-cookie";
import { Link } from "react-router-dom";
import logo from "@/assets/images/logo/logo.svg";
import { Dropdown } from "@/components";
import { FaUserCircle } from "react-icons/fa";

export const Header = () => {
  const [isOpen, setIsOpen] = useState(false);
  const dropdownRef = useRef(null);
  const cookies = Cookies.get("hitekAuthToken");

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        setIsOpen(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [dropdownRef]);

  return (
    <nav className="px-2 bg-white border-gray-200 mt-4">
      <div className="container flex flex-wrap items-center justify-between mx-auto">
        <Link to="/" className="flex items-center">
          <img src={logo} className="h-6 mr-3 sm:h-10" alt="Logo" />
        </Link>
        <button
          onClick={() => setIsOpen(true)}
          data-collapse-toggle="navbar-dropdown"
          type="button"
          className="inline-flex items-center p-2 ml-3 text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 "
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
          <ul
            ref={dropdownRef}
            className="sub-menu flex md:hidden transform duration-1000 z-10 flex-col text-center justify-center fixed top-0 left-0 w-full items-center bg-gray-50 transition-all">
            <li className="w-full pb-2 font-semibold py-4 bg-white text-_Gray border-b border-gray-300">
              <Link
                to="/"
                className="w-full border-b-2 border-white hover:border-primary"
                aria-current="page">
                Home
              </Link>
            </li>
            <li className="w-full py-4 bg-white text-_Gray border-b border-gray-300">
              <Dropdown value={"iPhones"} />
            </li>{" "}
            <li className="w-full py-4 bg-white text-_Gray border-b border-gray-300">
              <Dropdown value={"Phones"} />
            </li>{" "}
            <li className="w-full py-4 bg-white text-_Gray border-b border-gray-300">
              <Dropdown value={"Tablets"} />
            </li>{" "}
            <li className="w-full py-4 bg-white text-_Gray border-b border-gray-300">
              <Dropdown value={"Macbooks"} />
            </li>
            {!cookies && (
              <li className="w-full py-4  bg-white text-_Gray border-b border-gray-300">
                <Link
                  to="/signup"
                  className="w-full pb-2 border-b-2 border-white hover:border-primary text-inherit font-semibold text-base">
                  Sign up
                </Link>
              </li>
            )}
            {cookies && (
              <li className="w-full py-4 flex justify-center bg-white text-_Gray border-b border-gray-300">
                <Link
                  to="/signup"
                  className="font-medium hover:lg:text-primary_hover flex justify-center w-full text-center transform duration-150 text-primary pb-2 lg:py-2 lg:px-9 text-base lg:ml-14">
                  <FaUserCircle size={38} />
                </Link>
              </li>
            )}
          </ul>
        )}
        <div className="hidden w-full md:block md:w-auto" id="navbar-dropdown">
          <ul className="flex items-center text-_Gray py-4 lg:px-4 mt-4 border border-gray-100 bg-gray-50 md:flex-row md:space-x-8 md:mt-0 md:text-sm md:font-medium md:border-0 md:bg-white">
            <li>
              <Link
                to="/"
                className="block pt-2 py-2 text-_Gray border-b-2 border-white hover:border-primary md:bg-transparent"
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
            {!cookies && (
              <li className="w-full">
                <Link
                  to="/signup"
                  className="border-b-2 font-medium border-b-white hover:border-b-primary lg:border lg:border-primary hover:lg:bg-primary hover:lg:text-white transform duration-150 text-primary lg:shadow pb-2 lg:py-2 lg:px-9 text-base lg:ml-14 lg:rounded-lg">
                  Sign up
                </Link>
              </li>
            )}
            {cookies && (
              <li className="w-full">
                <Link
                  to="/signup"
                  className="font-medium hover:lg:text-primary_hover transform duration-150 text-primary pb-2 lg:py-2 lg:px-9 text-base lg:ml-14">
                  <FaUserCircle size={45} />
                </Link>
              </li>
            )}
          </ul>
        </div>
      </div>
      <hr className="border-gray-300 w-full sm:mt-4 mt-0" />
    </nav>
  );
};
